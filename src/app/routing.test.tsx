import "@testing-library/jest-dom";

import { fireEvent, render, screen, within } from "@testing-library/react";

import TeslaApp from ".";
import {
  inventoryVehicles,
  type InventoryCondition,
  type InventoryVehicle,
} from "../data/inventory-data";

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

const countInventory = (
  condition: InventoryCondition,
  predicate: (vehicle: InventoryVehicle) => boolean = () => true,
  radius = 50,
) =>
  inventoryVehicles.filter(
    (vehicle) =>
      vehicle.condition === condition &&
      vehicle.distance <= radius &&
      vehicle.price <= 100000 &&
      predicate(vehicle),
  ).length;

const inventorySummary = (count: number, zipCode = "90210") =>
  `${count} ${count === 1 ? "vehicle" : "vehicles"} near ${zipCode}`;

const expectInventoryCount = async (count: number, zipCode = "90210") => {
  expect(
    await screen.findByText(inventorySummary(count, zipCode)),
  ).toBeInTheDocument();
};

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

  test("updates inventory metadata for sharing and search", async () => {
    window.history.pushState({}, "", "/inventory/new");

    render(<TeslaApp />);

    await screen.findByRole("heading", { level: 1, name: "Inventory" });
    expect(document.title).toBe(
      "Tesla Inventory | New & Pre-Owned Electric Vehicles",
    );
    /* eslint-disable testing-library/no-node-access -- head metadata is outside the rendered app tree */
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      "content",
      expect.stringContaining("new and pre-owned electric vehicles"),
    );
    expect(document.querySelector('meta[property="og:url"]')).toHaveAttribute(
      "content",
      "http://localhost/inventory/new",
    );
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "http://localhost/inventory/new",
    );
    /* eslint-enable testing-library/no-node-access */
  });

  test("filters inventory results by model, including Cybertruck", async () => {
    window.history.pushState({}, "", "/inventory/new");

    render(<TeslaApp />);

    await expectInventoryCount(countInventory("new"));

    fireEvent.click(screen.getAllByLabelText("Model 3")[0]);

    const model3Count = countInventory(
      "new",
      (vehicle) => vehicle.model === "Model 3",
    );
    await expectInventoryCount(model3Count);
    expect(screen.getAllByRole("article", { name: /^Model 3 / })).toHaveLength(
      model3Count,
    );

    fireEvent.click(screen.getAllByLabelText("Model 3")[0]);
    fireEvent.click(screen.getAllByLabelText("Cybertruck")[0]);

    const cybertruckCount = countInventory(
      "new",
      (vehicle) => vehicle.model === "Cybertruck",
    );
    await expectInventoryCount(cybertruckCount);
    expect(
      screen.getAllByRole("article", { name: /^Cybertruck / }),
    ).toHaveLength(cybertruckCount);

    fireEvent.click(screen.getAllByRole("button", { name: "Pre-Owned" })[0]);

    expect(window.location.pathname).toBe("/inventory/used");
  });

  test("applies configuration filters and updates payment estimates", async () => {
    window.history.pushState({}, "", "/inventory/new");

    render(<TeslaApp />);

    const newInventoryCount = countInventory("new");
    await expectInventoryCount(newInventoryCount);

    fireEvent.click(screen.getByRole("button", { name: /finance/i }));
    expect(screen.getAllByText(/financing/)).toHaveLength(newInventoryCount);
    fireEvent.click(screen.getByRole("button", { name: /lease/i }));
    expect(screen.getAllByText(/\/mo lease/)).toHaveLength(newInventoryCount);
    fireEvent.click(screen.getByRole("button", { name: /cash/i }));

    fireEvent.click(screen.getByRole("button", { name: "Wheels" }));
    fireEvent.click(screen.getByLabelText('18" Photon Wheels'));
    await expectInventoryCount(
      countInventory(
        "new",
        (vehicle) => vehicle.wheels === '18" Photon Wheels',
      ),
    );
    fireEvent.click(screen.getByLabelText('18" Photon Wheels'));

    fireEvent.click(screen.getByRole("button", { name: "Interior" }));
    fireEvent.click(screen.getByLabelText("Cream Premium Interior"));
    await expectInventoryCount(
      countInventory(
        "new",
        (vehicle) => vehicle.interior === "Cream Premium Interior",
      ),
    );
    fireEvent.click(screen.getByLabelText("Cream Premium Interior"));

    fireEvent.click(screen.getByRole("button", { name: "Self-Driving" }));
    fireEvent.click(screen.getByLabelText("Full Self-Driving (Supervised)"));
    await expectInventoryCount(
      countInventory(
        "new",
        (vehicle) => vehicle.selfDriving === "Full Self-Driving (Supervised)",
      ),
    );
    fireEvent.click(screen.getByLabelText("Full Self-Driving (Supervised)"));

    fireEvent.click(screen.getByRole("button", { name: "Seat Layout" }));
    fireEvent.click(screen.getByLabelText("6 Seats"));
    await expectInventoryCount(
      countInventory("new", (vehicle) => vehicle.seatLayout === "6 Seats"),
    );
    fireEvent.click(screen.getByLabelText("6 Seats"));

    fireEvent.click(screen.getByRole("button", { name: "Additional Options" }));
    fireEvent.click(screen.getByLabelText("Tow Package"));
    await expectInventoryCount(
      countInventory("new", (vehicle) =>
        vehicle.additionalOptions.includes("Tow Package"),
      ),
    );
  });

  test("applies search, trim, price, demo, paint, steering and sort controls", async () => {
    window.history.pushState({}, "", "/inventory/new");

    render(<TeslaApp />);

    await expectInventoryCount(countInventory("new"));

    fireEvent.change(screen.getByLabelText("Search radius"), {
      target: { value: "25" },
    });
    await expectInventoryCount(countInventory("new", () => true, 25));
    fireEvent.change(screen.getByLabelText("Search radius"), {
      target: { value: "50" },
    });

    fireEvent.click(screen.getByLabelText("All-Wheel Drive"));
    await expectInventoryCount(
      countInventory("new", (vehicle) => vehicle.trim === "All-Wheel Drive"),
    );
    fireEvent.click(screen.getByLabelText("All-Wheel Drive"));

    fireEvent.change(screen.getByLabelText("Maximum vehicle price"), {
      target: { value: "50000" },
    });
    await expectInventoryCount(
      countInventory("new", (vehicle) => vehicle.price <= 50000),
    );
    fireEvent.change(screen.getByLabelText("Maximum vehicle price"), {
      target: { value: "100000" },
    });

    fireEvent.click(screen.getByLabelText("Available for Demo Drive"));
    await expectInventoryCount(
      countInventory("new", (vehicle) => vehicle.demoDriveAvailable),
    );
    fireEvent.click(screen.getByLabelText("Available for Demo Drive"));

    fireEvent.click(screen.getByRole("button", { name: "Paint" }));
    fireEvent.click(screen.getByLabelText("Ultra Red"));
    await expectInventoryCount(
      countInventory("new", (vehicle) => vehicle.paint === "Ultra Red"),
    );
    fireEvent.click(screen.getByLabelText("Ultra Red"));

    fireEvent.click(screen.getByRole("button", { name: "Steering Control" }));
    fireEvent.click(screen.getByLabelText("Yoke Steering"));
    await expectInventoryCount(
      countInventory(
        "new",
        (vehicle) => vehicle.steeringControl === "Yoke Steering",
      ),
    );
    fireEvent.click(screen.getByLabelText("Yoke Steering"));

    fireEvent.change(screen.getByLabelText("Sort by"), {
      target: { value: "price-high" },
    });
    const highestPricedVehicle = inventoryVehicles
      .filter(
        (vehicle) =>
          vehicle.condition === "new" &&
          vehicle.distance <= 50 &&
          vehicle.price <= 100000,
      )
      .sort((first, second) => second.price - first.price)[0];
    expect(screen.getAllByRole("article")[0]).toHaveAttribute(
      "aria-label",
      expect.stringContaining(highestPricedVehicle.model),
    );

    fireEvent.change(screen.getByLabelText("Maximum vehicle price"), {
      target: { value: "50000" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Clear" }));
    await expectInventoryCount(countInventory("new"));
  });

  test("shows only filter values available for the selected condition", async () => {
    window.history.pushState({}, "", "/inventory/new");

    render(<TeslaApp />);

    await expectInventoryCount(countInventory("new"));
    fireEvent.click(screen.getByRole("button", { name: "Additional Options" }));

    expect(screen.getByLabelText("Performance Package")).toBeInTheDocument();
    expect(
      screen.queryByLabelText("Premium Connectivity Trial"),
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Performance Package"));
    await expectInventoryCount(
      countInventory("new", (vehicle) =>
        vehicle.additionalOptions.includes("Performance Package"),
      ),
    );

    fireEvent.click(screen.getAllByRole("button", { name: "Pre-Owned" })[0]);

    await expectInventoryCount(countInventory("used"));
    expect(
      screen.queryByLabelText("Performance Package"),
    ).not.toBeInTheDocument();
    expect(
      screen.getByLabelText("Premium Connectivity Trial"),
    ).toBeInTheDocument();
  });

  test("opens and closes the mobile inventory filter drawer", async () => {
    window.history.pushState({}, "", "/inventory/new");

    render(<TeslaApp />);

    await expectInventoryCount(countInventory("new"));
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

    await expectInventoryCount(countInventory("used"));

    fireEvent.change(screen.getByLabelText("Maximum mileage"), {
      target: { value: "30000" },
    });
    await expectInventoryCount(
      countInventory("used", (vehicle) => vehicle.mileage <= 30000),
    );

    fireEvent.change(screen.getByLabelText("Maximum mileage"), {
      target: { value: "60000" },
    });
    fireEvent.change(screen.getByLabelText("Model year"), {
      target: { value: "2022" },
    });
    await expectInventoryCount(
      countInventory("used", (vehicle) => vehicle.year >= 2022),
    );

    fireEvent.change(screen.getByLabelText("Model year"), {
      target: { value: "2020" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Condition" }));
    fireEvent.click(screen.getByLabelText("Previously Repaired"));
    const repairedCount = countInventory(
      "used",
      (vehicle) => vehicle.conditionHistory === "Previously Repaired",
    );
    await expectInventoryCount(repairedCount);
    expect(screen.getAllByRole("article")).toHaveLength(repairedCount);
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
    expect(
      screen.getByText(inventorySummary(countInventory("new"))),
    ).toBeInTheDocument();

    fireEvent.change(locationInput, { target: { value: "10001" } });
    fireEvent.click(screen.getByRole("button", { name: "Update search area" }));

    await expectInventoryCount(0, "10001");
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

    const inventoryImageLink = await screen.findByRole("link", {
      name: "View image details for 2026 Model 3 Long Range",
    });

    expect(
      within(inventoryImageLink).getByAltText(
        "2026 Model 3 All Black Premium Interior",
      ),
    ).toHaveAttribute(
      "src",
      "/assets/tesla-official/inventory/m3-lr-awd-grey-interior.jpg",
    );

    fireEvent.click(inventoryImageLink);

    expect(window.location.pathname).toBe("/inventory/vehicle/m3-lr-awd-grey");
    expect(
      await screen.findByRole("heading", { level: 1, name: "Model 3" }),
    ).toBeInTheDocument();
  });
});

describe("charging routes", () => {
  test("renders the charging learn-more page", async () => {
    window.history.pushState({}, "", "/charging");

    render(<TeslaApp />);

    expect(
      await screen.findByRole("heading", { level: 1, name: "Charging" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Plug In, Charge and Go" }),
    ).toBeInTheDocument();
    expect(document.title).toBe("Charging | Tesla Clone");
  });

  test("renders the searchable charging network", async () => {
    window.history.pushState({}, "", "/findus");

    render(<TeslaApp />);

    const locationSearch = await screen.findByRole("searchbox", {
      name: "Enter Location",
    });
    expect(
      screen.getByRole("region", {
        name: "Interactive Tesla location map",
      }),
    ).toBeInTheDocument();

    fireEvent.change(locationSearch, { target: { value: "San Francisco" } });
    expect(
      screen.getByRole("button", { name: /San Francisco Supercharger/ }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Filter locations" }));
    expect(screen.getByLabelText("Superchargers")).toBeChecked();
    expect(document.title).toBe("Find Us | Tesla Clone");
  });
});

describe("drive routes", () => {
  test("renders the complete scheduling form at the current Drive URL", async () => {
    window.history.pushState({}, "", "/drive");

    render(<TeslaApp />);

    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: "Schedule a Drive",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Select a Model" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Select Location and Time" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("form", { name: "Schedule a drive" }),
    ).toBeInTheDocument();
    expect(document.title).toBe("Schedule a Drive | Tesla Clone");
  });

  test("selects a vehicle, appointment and confirms the local demo", async () => {
    window.history.pushState({}, "", "/drive");

    render(<TeslaApp />);

    fireEvent.click(
      await screen.findByRole("radio", { name: /^Model 3 Sports sedan/ }),
    );
    expect(
      screen.getByAltText("Model 3 driving on the road"),
    ).toBeInTheDocument();

    const addressInput = screen.getByRole("combobox", { name: "Search" });
    fireEvent.focus(addressInput);
    fireEvent.change(addressInput, { target: { value: "90210" } });
    fireEvent.click(
      screen.getByRole("button", { name: "Beverly Hills, CA 90210" }),
    );

    expect(
      screen.getByRole("radio", { name: /Tesla West Hollywood/ }),
    ).toBeChecked();
    const datePicker = screen.getByRole("group", { name: "Select a date" });
    fireEvent.click(within(datePicker).getAllByRole("button")[0]);
    const timePicker = screen.getByRole("group", {
      name: "Available times",
    });
    fireEvent.click(
      within(timePicker).getByRole("button", { name: "10:30 AM" }),
    );

    fireEvent.change(screen.getByLabelText("First Name"), {
      target: { value: "Alex" },
    });
    fireEvent.change(screen.getByLabelText("Last Name"), {
      target: { value: "Driver" },
    });
    fireEvent.change(screen.getByLabelText("Email Address"), {
      target: { value: "alex@example.com" },
    });
    fireEvent.change(screen.getByRole("textbox", { name: "Phone Number" }), {
      target: { value: "2015550123" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(
      screen.getByRole("dialog", { name: "Your Drive Is Scheduled" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/No appointment or personal information was sent/),
    ).toBeInTheDocument();
  });

  test("keeps the existing demo-drive URL working", async () => {
    window.history.pushState({}, "", "/demo_drive");

    render(<TeslaApp />);

    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: "Schedule a Drive",
      }),
    ).toBeInTheDocument();
    expect(document.title).toBe("Schedule a Drive | Tesla Clone");
  });
});
