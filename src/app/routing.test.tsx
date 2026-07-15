import "@testing-library/jest-dom";

import { fireEvent, render, screen, within } from "@testing-library/react";

import TeslaApp from ".";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: (query: string) => ({
      addEventListener: () => undefined,
      dispatchEvent: () => false,
      matches: false,
      media: query,
      onchange: null,
      removeEventListener: () => undefined,
    }),
    writable: true,
  });
});

describe("vehicle routes", () => {
  test.each([
    ["/model-3", "Model 3"],
    ["/model-y", "Model Y"],
    ["/model-s", "Model S"],
    ["/model-x", "Model X"],
    ["/inventory/new", "Inventory"],
    ["/inventory/used", "Inventory"],
  ])("renders %s as the %s page", async (path, modelName) => {
    window.history.pushState({}, "", path);

    render(<TeslaApp />);

    expect(
      await screen.findByRole("heading", { level: 1, name: modelName }),
    ).toBeInTheDocument();
  });

  test("filters inventory results by model", async () => {
    window.history.pushState({}, "", "/inventory/new");

    render(<TeslaApp />);

    expect(
      await screen.findByText("4 vehicles near 90210"),
    ).toBeInTheDocument();

    fireEvent.click(screen.getAllByLabelText("Model 3")[0]);

    expect(await screen.findByText("1 vehicle near 90210")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Model 3" }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getAllByRole("button", { name: "Pre-Owned" })[0]);

    expect(window.location.pathname).toBe("/inventory/used");
  });

  test("applies configuration filters and updates payment estimates", async () => {
    window.history.pushState({}, "", "/inventory/new");

    render(<TeslaApp />);

    expect(
      await screen.findByText("4 vehicles near 90210"),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /finance/i }));
    expect(screen.getAllByText(/Est\. finance/)).toHaveLength(4);

    fireEvent.click(screen.getByRole("button", { name: "Wheels" }));
    fireEvent.click(screen.getByLabelText('18" Photon Wheels'));
    expect(await screen.findByText("1 vehicle near 90210")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('18" Photon Wheels'));

    fireEvent.click(screen.getByRole("button", { name: "Interior" }));
    fireEvent.click(screen.getByLabelText("Cream Premium Interior"));
    expect(await screen.findByText("1 vehicle near 90210")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Cream Premium Interior"));

    fireEvent.click(screen.getByRole("button", { name: "Self-Driving" }));
    fireEvent.click(screen.getByLabelText("Full Self-Driving (Supervised)"));
    expect(
      await screen.findByText("2 vehicles near 90210"),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Full Self-Driving (Supervised)"));

    fireEvent.click(screen.getByRole("button", { name: "Seat Layout" }));
    fireEvent.click(screen.getByLabelText("6 Seats"));
    expect(await screen.findByText("1 vehicle near 90210")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("6 Seats"));

    fireEvent.click(screen.getByRole("button", { name: "Additional Options" }));
    fireEvent.click(screen.getByLabelText("Tow Package"));
    expect(await screen.findByText("1 vehicle near 90210")).toBeInTheDocument();
  });

  test("applies search, trim, price, demo, paint, steering and sort controls", async () => {
    window.history.pushState({}, "", "/inventory/new");

    render(<TeslaApp />);

    expect(
      await screen.findByText("4 vehicles near 90210"),
    ).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Search radius"), {
      target: { value: "25" },
    });
    expect(
      await screen.findByText("2 vehicles near 90210"),
    ).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText("Search radius"), {
      target: { value: "50" },
    });

    fireEvent.click(screen.getByLabelText("All-Wheel Drive"));
    expect(
      await screen.findByText("2 vehicles near 90210"),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("All-Wheel Drive"));

    fireEvent.change(screen.getByLabelText("Maximum vehicle price"), {
      target: { value: "50000" },
    });
    expect(
      await screen.findByText("2 vehicles near 90210"),
    ).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText("Maximum vehicle price"), {
      target: { value: "100000" },
    });

    fireEvent.click(screen.getByLabelText("Available for Demo Drive"));
    expect(
      await screen.findByText("2 vehicles near 90210"),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Available for Demo Drive"));

    fireEvent.click(screen.getByRole("button", { name: "Paint" }));
    fireEvent.click(screen.getByLabelText("Ultra Red"));
    expect(
      await screen.findByText("2 vehicles near 90210"),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Ultra Red"));

    fireEvent.click(screen.getByRole("button", { name: "Steering Control" }));
    fireEvent.click(screen.getByLabelText("Yoke Steering"));
    expect(await screen.findByText("1 vehicle near 90210")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Yoke Steering"));

    fireEvent.change(screen.getByLabelText("Sort by"), {
      target: { value: "price-high" },
    });
    expect(
      within(screen.getAllByRole("article")[0]).getByRole("heading", {
        name: "Model X",
      }),
    ).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Maximum vehicle price"), {
      target: { value: "50000" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Clear" }));
    expect(
      await screen.findByText("4 vehicles near 90210"),
    ).toBeInTheDocument();
  });

  test("opens and closes the mobile inventory filter drawer", async () => {
    window.history.pushState({}, "", "/inventory/new");

    render(<TeslaApp />);

    await screen.findByText("4 vehicles near 90210");
    fireEvent.click(screen.getByRole("button", { name: "Filters" }));
    expect(
      screen.getByRole("dialog", { name: "Inventory filters" }),
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", { name: "Close inventory filters" }),
    );
    expect(
      screen.queryByRole("dialog", { name: "Inventory filters" }),
    ).not.toBeInTheDocument();
  });

  test("filters pre-owned inventory by mileage, year and condition", async () => {
    window.history.pushState({}, "", "/inventory/used");

    render(<TeslaApp />);

    expect(
      await screen.findByText("4 vehicles near 90210"),
    ).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Maximum mileage"), {
      target: { value: "30000" },
    });
    expect(await screen.findByText("1 vehicle near 90210")).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Maximum mileage"), {
      target: { value: "60000" },
    });
    fireEvent.change(screen.getByLabelText("Model year"), {
      target: { value: "2022" },
    });
    expect(
      await screen.findByText("3 vehicles near 90210"),
    ).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Model year"), {
      target: { value: "2020" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Condition" }));
    fireEvent.click(screen.getByLabelText("Previously Repaired"));
    expect(await screen.findByText("1 vehicle near 90210")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Model S" }),
    ).toBeInTheDocument();
  });

  test("validates and applies the inventory ZIP code", async () => {
    window.history.pushState({}, "", "/inventory/new");

    render(<TeslaApp />);

    const locationInput = await screen.findByLabelText("Search Area");
    fireEvent.change(locationInput, { target: { value: "12" } });
    fireEvent.click(screen.getByRole("button", { name: "Update search area" }));

    expect(
      await screen.findByText("Enter a valid 5-digit ZIP code."),
    ).toBeInTheDocument();
    expect(screen.getByText("4 vehicles near 90210")).toBeInTheDocument();

    fireEvent.change(locationInput, { target: { value: "10001" } });
    fireEvent.click(screen.getByRole("button", { name: "Update search area" }));

    expect(
      await screen.findByText("0 vehicles near 10001"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "No vehicles match your search" }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  test("opens the exact inventory vehicle details", async () => {
    window.history.pushState({}, "", "/inventory/vehicle/mx-used-red");

    render(<TeslaApp />);

    expect(
      await screen.findByRole("heading", { level: 1, name: "Model X" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Condition & Warranty" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("No Reported Accidents/Damage"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Configure and Order" }),
    ).toHaveAttribute("href", "/order_now_modelx?inventory=mx-used-red");
  });

  test("opens vehicle details from the inventory image", async () => {
    window.history.pushState({}, "", "/inventory/new");

    render(<TeslaApp />);

    expect(
      await screen.findByAltText("2026 Model 3 All Black Premium Interior"),
    ).toHaveAttribute(
      "src",
      "/assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail5-black.jpeg",
    );

    fireEvent.click(
      await screen.findByRole("link", {
        name: "View image details for 2026 Model 3 Long Range",
      }),
    );

    expect(window.location.pathname).toBe("/inventory/vehicle/m3-lr-awd-grey");
    expect(
      await screen.findByRole("heading", { level: 1, name: "Model 3" }),
    ).toBeInTheDocument();
  });
});
