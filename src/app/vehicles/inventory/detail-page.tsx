import { Link, useParams } from "react-router-dom";

import Navbar from "../../../components/navbar";
import { inventoryVehicles } from "../../../data/inventory-data";

export default function InventoryVehicleDetailPage() {
  const { vehicleId } = useParams();
  const vehicle = inventoryVehicles.find(
    (inventoryVehicle) => inventoryVehicle.id === vehicleId,
  );

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-[#f4f4f4] text-[#171a20]">
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-[-0.04em]">
            Vehicle no longer available
          </h1>
          <p className="mt-3 text-sm text-[#5c5e62]">
            This inventory listing may have been sold or removed.
          </p>
          <Link
            className="mt-6 rounded bg-[#3e6ae1] px-6 py-3 text-sm font-semibold text-white"
            to="/inventory/new"
          >
            Return to Inventory
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#171a20]">
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-40 h-14 bg-white"
      />
      <Navbar />

      <main className="pt-14">
        <div className="mx-auto max-w-[1500px] px-5 py-5 sm:px-8 lg:px-10">
          <Link
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5c5e62] hover:text-[#171a20]"
            to={`/inventory/${vehicle.condition}`}
          >
            <span aria-hidden="true">←</span>
            Back to {vehicle.condition === "new" ? "New" : "Pre-Owned"}{" "}
            Inventory
          </Link>
        </div>

        <div className="mx-auto grid max-w-[1500px] gap-8 px-5 pb-14 sm:px-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(340px,0.7fr)] lg:px-10">
          <section>
            <div className="relative overflow-hidden rounded-xl bg-[#f4f4f4]">
              <img
                alt={`${vehicle.year} ${vehicle.model} ${vehicle.trim}`}
                className="aspect-[16/9] h-full w-full scale-[1.22] object-cover object-center"
                height="1080"
                src={vehicle.image}
                width="1920"
              />
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur">
                  {vehicle.condition === "new" ? "New Vehicle" : "Pre-Owned"}
                </span>
                {vehicle.demoDriveAvailable && (
                  <span className="rounded-full bg-[#171a20]/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    Demo Drive Available
                  </span>
                )}
              </div>
            </div>

            <section className="mt-8 border-t border-black/10 pt-8">
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">
                Vehicle Details
              </h2>
              <dl className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {[
                  ["Paint", vehicle.paint],
                  ["Wheels", vehicle.wheels],
                  ["Interior", vehicle.interior],
                  ["Seat Layout", vehicle.seatLayout],
                  ["Steering Control", vehicle.steeringControl],
                  ["Self-Driving", vehicle.selfDriving],
                  ["Additional Options", vehicle.additionalOptions.join(", ")],
                  ["Location", vehicle.location],
                ].map(([label, value]) => (
                  <div className="border-b border-black/10 pb-4" key={label}>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-[#5c5e62]">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {vehicle.condition === "used" && (
              <section className="mt-8 rounded-xl bg-[#f4f4f4] p-6">
                <h2 className="text-xl font-semibold">
                  Condition &amp; Warranty
                </h2>
                <p className="mt-3 text-sm font-medium">
                  {vehicle.conditionHistory}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5c5e62]">
                  Inspected and refurbished by Tesla-trained technicians. The
                  listing includes the remaining original coverage plus the
                  applicable pre-owned vehicle limited warranty.
                </p>
              </section>
            )}
          </section>

          <aside>
            <div className="top-20 rounded-xl border border-black/10 bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.08)] lg:sticky">
              <p className="text-sm font-medium text-[#5c5e62]">
                {vehicle.year}{" "}
                {vehicle.condition === "new" ? "New" : "Pre-Owned"}
              </p>
              <h1 className="mt-1 text-4xl font-semibold tracking-[-0.045em]">
                {vehicle.model}
              </h1>
              <p className="mt-2 text-sm text-[#5c5e62]">
                {vehicle.trim} · {vehicle.drive}
              </p>
              <p className="mt-6 text-3xl font-semibold">
                ${vehicle.price.toLocaleString()}
              </p>
              <p className="mt-1 text-xs text-[#5c5e62]">Cash price</p>

              <dl className="mt-6 grid grid-cols-3 divide-x divide-black/10 rounded-lg bg-[#f4f4f4] py-4 text-center">
                <div className="px-2">
                  <dt className="font-semibold">{vehicle.range} mi</dt>
                  <dd className="mt-1 text-[10px] uppercase tracking-wide text-[#5c5e62]">
                    Range
                  </dd>
                </div>
                <div className="px-2">
                  <dt className="font-semibold">
                    {vehicle.mileage.toLocaleString()}
                  </dt>
                  <dd className="mt-1 text-[10px] uppercase tracking-wide text-[#5c5e62]">
                    Miles
                  </dd>
                </div>
                <div className="px-2">
                  <dt className="font-semibold">{vehicle.distance} mi</dt>
                  <dd className="mt-1 text-[10px] uppercase tracking-wide text-[#5c5e62]">
                    Away
                  </dd>
                </div>
              </dl>

              <Link
                className="mt-6 flex w-full justify-center rounded bg-[#3e6ae1] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3457b1]"
                to={`${vehicle.orderLink}?inventory=${vehicle.id}`}
              >
                Configure and Order
              </Link>
              {vehicle.demoDriveAvailable && (
                <Link
                  className="mt-3 flex w-full justify-center rounded bg-[#f4f4f4] px-5 py-3 text-sm font-semibold transition hover:bg-[#e8e8e8]"
                  to="/demo_drive"
                >
                  Request a Demo Drive
                </Link>
              )}
              <p className="mt-4 text-center text-xs leading-5 text-[#5c5e62]">
                Taxes and fees are calculated during ordering.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
