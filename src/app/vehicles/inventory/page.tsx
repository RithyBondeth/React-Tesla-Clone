import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Navbar from "../../../components/navbar";
import {
  inventoryVehicles,
  type InventoryCondition,
  type InventoryHistory,
  type InventoryModel,
  type InventoryVehicle,
} from "../../../data/inventory-data";

const MODEL_OPTIONS: InventoryModel[] = [
  "Model S",
  "Model 3",
  "Model X",
  "Model Y",
];
const TRIM_OPTIONS = ["All-Wheel Drive", "Long Range", "Performance", "Plaid"];
const PAINT_OPTIONS = [
  "Stealth Grey",
  "Pearl White",
  "Deep Blue Metallic",
  "Ultra Red",
];
const uniqueOptions = (values: string[]) =>
  Array.from(new Set(values)).sort((first, second) =>
    first.localeCompare(second),
  );
const WHEEL_OPTIONS = uniqueOptions(
  inventoryVehicles.map((vehicle) => vehicle.wheels),
);
const INTERIOR_OPTIONS = uniqueOptions(
  inventoryVehicles.map((vehicle) => vehicle.interior),
);
const SELF_DRIVING_OPTIONS = uniqueOptions(
  inventoryVehicles.map((vehicle) => vehicle.selfDriving),
);
const STEERING_CONTROL_OPTIONS = uniqueOptions(
  inventoryVehicles.map((vehicle) => vehicle.steeringControl),
);
const SEAT_LAYOUT_OPTIONS = uniqueOptions(
  inventoryVehicles.map((vehicle) => vehicle.seatLayout),
);
const ADDITIONAL_OPTIONS = uniqueOptions(
  inventoryVehicles.flatMap((vehicle) => vehicle.additionalOptions),
);
const CONDITION_OPTIONS: InventoryHistory[] = [
  "No Reported Accidents/Damage",
  "Previously Repaired",
];
const MAX_PRICE = 100000;
const MAX_MILEAGE = 60000;
const MIN_YEAR = 2020;
const MAX_YEAR = Math.max(...inventoryVehicles.map((vehicle) => vehicle.year));

type PaymentType = "cash" | "finance" | "lease";
type SortOption = "distance" | "price-high" | "price-low" | "range";

interface FilterPanelProps {
  condition: InventoryCondition;
  idPrefix: string;
  locationError: string;
  locationInput: string;
  maxPrice: number;
  maxMileage: number;
  minYear: number;
  onAdditionalOptionToggle: (option: string) => void;
  onClear: () => void;
  onConditionHistoryToggle: (history: InventoryHistory) => void;
  onConditionChange: (condition: InventoryCondition) => void;
  onInteriorToggle: (interior: string) => void;
  onLocationInputChange: (value: string) => void;
  onLocationSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onModelToggle: (model: InventoryModel) => void;
  onPaintToggle: (paint: string) => void;
  onSeatLayoutToggle: (seatLayout: string) => void;
  onSelfDrivingToggle: (selfDriving: string) => void;
  onShowResults?: () => void;
  onSteeringControlToggle: (steeringControl: string) => void;
  onTrimToggle: (trim: string) => void;
  onWheelToggle: (wheel: string) => void;
  paymentType: PaymentType;
  requiresDemoDrive: boolean;
  resultCount: number;
  searchDistance: number;
  selectedModels: InventoryModel[];
  selectedAdditionalOptions: string[];
  selectedConditionHistories: InventoryHistory[];
  selectedInteriors: string[];
  selectedPaints: string[];
  selectedSeatLayouts: string[];
  selectedSelfDrivingOptions: string[];
  selectedSteeringControls: string[];
  selectedTrims: string[];
  selectedWheels: string[];
  setMaxMileage: (mileage: number) => void;
  setMaxPrice: (price: number) => void;
  setMinYear: (year: number) => void;
  setPaymentType: (paymentType: PaymentType) => void;
  setRequiresDemoDrive: (requiresDemoDrive: boolean) => void;
  setSearchDistance: (distance: number) => void;
}

const optionId = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function CheckboxOption({
  checked,
  id,
  label,
  onChange,
}: {
  checked: boolean;
  id: string;
  label: string;
  onChange: () => void;
}) {
  return (
    <label
      className="flex cursor-pointer items-center gap-3 py-2 text-sm text-[#393c41]"
      htmlFor={id}
    >
      <input
        checked={checked}
        className={`h-5 w-5 rounded border text-xs ${
          checked
            ? "border-[#3e6ae1] bg-[#3e6ae1] text-white"
            : "border-[#8e8e8e] bg-white"
        }`}
        id={id}
        onChange={onChange}
        type="checkbox"
      />
      <span>{label}</span>
    </label>
  );
}

function ExpandableFilter({
  children,
  defaultOpen = false,
  title,
}: {
  children: React.ReactNode;
  defaultOpen?: boolean;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-black/10 py-1">
      <button
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-[#171a20]"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <span>{title}</span>
        <span
          aria-hidden="true"
          className={`text-lg font-light transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
}

function FilterPanel({
  condition,
  idPrefix,
  locationError,
  locationInput,
  maxMileage,
  maxPrice,
  minYear,
  onAdditionalOptionToggle,
  onClear,
  onConditionChange,
  onConditionHistoryToggle,
  onInteriorToggle,
  onLocationInputChange,
  onLocationSubmit,
  onModelToggle,
  onPaintToggle,
  onSeatLayoutToggle,
  onSelfDrivingToggle,
  onShowResults,
  onSteeringControlToggle,
  onTrimToggle,
  onWheelToggle,
  paymentType,
  requiresDemoDrive,
  resultCount,
  searchDistance,
  selectedAdditionalOptions,
  selectedConditionHistories,
  selectedInteriors,
  selectedModels,
  selectedPaints,
  selectedSeatLayouts,
  selectedSelfDrivingOptions,
  selectedSteeringControls,
  selectedTrims,
  selectedWheels,
  setMaxMileage,
  setMaxPrice,
  setMinYear,
  setPaymentType,
  setRequiresDemoDrive,
  setSearchDistance,
}: FilterPanelProps) {
  return (
    <div className="px-5 pb-8 pt-6 sm:px-7">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-[-0.02em]">Filters</h2>
        <button
          className="text-xs font-medium text-[#5c5e62] underline decoration-[#9b9da1] underline-offset-4"
          onClick={onClear}
          type="button"
        >
          Clear
        </button>
      </div>

      <div className="grid grid-cols-2 gap-1 rounded bg-[#e8e8e8] p-1">
        {(["new", "used"] as InventoryCondition[]).map((option) => (
          <button
            aria-pressed={condition === option}
            className={`rounded px-3 py-2.5 text-sm font-semibold transition ${
              condition === option
                ? "bg-white text-[#171a20] shadow-sm"
                : "text-[#5c5e62] hover:text-[#171a20]"
            }`}
            key={option}
            onClick={() => onConditionChange(option)}
            type="button"
          >
            {option === "new" ? "New" : "Pre-Owned"}
          </button>
        ))}
      </div>

      {condition === "used" && (
        <p className="mt-3 rounded bg-[#f4f4f4] px-3 py-2.5 text-xs leading-5 text-[#5c5e62]">
          Inspected and refurbished by Tesla-trained technicians.
        </p>
      )}

      <form className="mt-6" onSubmit={onLocationSubmit}>
        <label
          className="mb-2 block text-xs font-semibold text-[#5c5e62]"
          htmlFor={`${idPrefix}-location`}
        >
          Search Area
        </label>
        <div className="flex gap-2">
          <input
            aria-describedby={
              locationError ? `${idPrefix}-location-error` : undefined
            }
            aria-invalid={Boolean(locationError)}
            className="min-w-0 flex-1 rounded border border-black/20 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#3e6ae1]"
            id={`${idPrefix}-location`}
            inputMode="numeric"
            maxLength={5}
            onChange={(event) => onLocationInputChange(event.target.value)}
            placeholder="Enter ZIP code"
            value={locationInput}
          />
          <button
            aria-label="Update search area"
            className="rounded bg-[#171a20] px-4 text-sm font-semibold text-white transition hover:bg-black"
            type="submit"
          >
            Go
          </button>
        </div>
        {locationError && (
          <p
            className="mt-2 text-xs text-[#b74134]"
            id={`${idPrefix}-location-error`}
            role="alert"
          >
            {locationError}
          </p>
        )}
        <select
          aria-label="Search radius"
          className="mt-2 w-full rounded border border-black/20 bg-white px-3 py-2.5 text-sm"
          onChange={(event) => setSearchDistance(Number(event.target.value))}
          value={searchDistance}
        >
          {[25, 50, 100, 200].map((distance) => (
            <option key={distance} value={distance}>
              Within {distance} miles
            </option>
          ))}
        </select>
      </form>

      <div className="mt-6 border-t border-black/10 pt-4">
        <p className="mb-1 text-sm font-semibold">Model</p>
        {MODEL_OPTIONS.map((model) => (
          <CheckboxOption
            checked={selectedModels.includes(model)}
            id={`${idPrefix}-${optionId(model)}`}
            key={model}
            label={model}
            onChange={() => onModelToggle(model)}
          />
        ))}
      </div>

      <ExpandableFilter defaultOpen title="Trim">
        {TRIM_OPTIONS.map((trim) => (
          <CheckboxOption
            checked={selectedTrims.includes(trim)}
            id={`${idPrefix}-trim-${optionId(trim)}`}
            key={trim}
            label={trim}
            onChange={() => onTrimToggle(trim)}
          />
        ))}
      </ExpandableFilter>

      <div className="border-t border-black/10 py-5">
        <p className="text-sm font-semibold">Payment</p>
        <div className="mt-3 grid grid-cols-3 gap-1 rounded bg-[#e8e8e8] p-1">
          {(["cash", "finance", "lease"] as PaymentType[]).map((option) => (
            <button
              aria-pressed={paymentType === option}
              className={`rounded px-2 py-2 text-xs font-semibold capitalize ${
                paymentType === option
                  ? "bg-white text-[#171a20] shadow-sm"
                  : "text-[#5c5e62]"
              }`}
              key={option}
              onClick={() => setPaymentType(option)}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between text-sm">
          <span>Price</span>
          <span className="font-semibold">
            Up to ${maxPrice.toLocaleString()}
            {maxPrice === MAX_PRICE ? "+" : ""}
          </span>
        </div>
        <input
          aria-label="Maximum vehicle price"
          className="mt-3 w-full accent-[#3e6ae1]"
          max={MAX_PRICE}
          min="25000"
          onChange={(event) => setMaxPrice(Number(event.target.value))}
          step="5000"
          type="range"
          value={maxPrice}
        />
      </div>

      {condition === "used" && (
        <div className="border-t border-black/10 py-5">
          <p className="text-sm font-semibold">Mileage / Year</p>
          <div className="mt-4 flex items-center justify-between text-sm">
            <label htmlFor={`${idPrefix}-mileage`}>Maximum mileage</label>
            <span className="font-semibold">
              {maxMileage.toLocaleString()} mi
              {maxMileage === MAX_MILEAGE ? "+" : ""}
            </span>
          </div>
          <input
            className="mt-3 w-full accent-[#3e6ae1]"
            id={`${idPrefix}-mileage`}
            max={MAX_MILEAGE}
            min="10000"
            onChange={(event) => setMaxMileage(Number(event.target.value))}
            step="5000"
            type="range"
            value={maxMileage}
          />
          <div className="mt-5 flex items-center justify-between text-sm">
            <label htmlFor={`${idPrefix}-year`}>Model year</label>
            <span className="font-semibold">
              {minYear === MIN_YEAR ? "Any year" : `${minYear} or newer`}
            </span>
          </div>
          <input
            className="mt-3 w-full accent-[#3e6ae1]"
            id={`${idPrefix}-year`}
            max={MAX_YEAR}
            min={MIN_YEAR}
            onChange={(event) => setMinYear(Number(event.target.value))}
            step="1"
            type="range"
            value={minYear}
          />
        </div>
      )}

      <div className="border-t border-black/10 py-4">
        <CheckboxOption
          checked={requiresDemoDrive}
          id={`${idPrefix}-demo-drive`}
          label="Available for Demo Drive"
          onChange={() => setRequiresDemoDrive(!requiresDemoDrive)}
        />
      </div>

      <ExpandableFilter title="Paint">
        {PAINT_OPTIONS.map((paint) => (
          <CheckboxOption
            checked={selectedPaints.includes(paint)}
            id={`${idPrefix}-paint-${optionId(paint)}`}
            key={paint}
            label={paint}
            onChange={() => onPaintToggle(paint)}
          />
        ))}
      </ExpandableFilter>

      <ExpandableFilter title="Wheels">
        {WHEEL_OPTIONS.map((wheel) => (
          <CheckboxOption
            checked={selectedWheels.includes(wheel)}
            id={`${idPrefix}-wheel-${optionId(wheel)}`}
            key={wheel}
            label={wheel}
            onChange={() => onWheelToggle(wheel)}
          />
        ))}
      </ExpandableFilter>

      <ExpandableFilter title="Interior">
        {INTERIOR_OPTIONS.map((interior) => (
          <CheckboxOption
            checked={selectedInteriors.includes(interior)}
            id={`${idPrefix}-interior-${optionId(interior)}`}
            key={interior}
            label={interior}
            onChange={() => onInteriorToggle(interior)}
          />
        ))}
      </ExpandableFilter>

      <ExpandableFilter title="Steering Control">
        {STEERING_CONTROL_OPTIONS.map((steeringControl) => (
          <CheckboxOption
            checked={selectedSteeringControls.includes(steeringControl)}
            id={`${idPrefix}-steering-${optionId(steeringControl)}`}
            key={steeringControl}
            label={steeringControl}
            onChange={() => onSteeringControlToggle(steeringControl)}
          />
        ))}
      </ExpandableFilter>

      <ExpandableFilter title="Self-Driving">
        {SELF_DRIVING_OPTIONS.map((selfDriving) => (
          <CheckboxOption
            checked={selectedSelfDrivingOptions.includes(selfDriving)}
            id={`${idPrefix}-self-driving-${optionId(selfDriving)}`}
            key={selfDriving}
            label={selfDriving}
            onChange={() => onSelfDrivingToggle(selfDriving)}
          />
        ))}
      </ExpandableFilter>

      <ExpandableFilter title="Seat Layout">
        {SEAT_LAYOUT_OPTIONS.map((seatLayout) => (
          <CheckboxOption
            checked={selectedSeatLayouts.includes(seatLayout)}
            id={`${idPrefix}-seat-${optionId(seatLayout)}`}
            key={seatLayout}
            label={seatLayout}
            onChange={() => onSeatLayoutToggle(seatLayout)}
          />
        ))}
      </ExpandableFilter>

      <ExpandableFilter title="Additional Options">
        {ADDITIONAL_OPTIONS.map((option) => (
          <CheckboxOption
            checked={selectedAdditionalOptions.includes(option)}
            id={`${idPrefix}-additional-${optionId(option)}`}
            key={option}
            label={option}
            onChange={() => onAdditionalOptionToggle(option)}
          />
        ))}
      </ExpandableFilter>

      {condition === "used" && (
        <ExpandableFilter title="Condition">
          {CONDITION_OPTIONS.map((history) => (
            <CheckboxOption
              checked={selectedConditionHistories.includes(history)}
              id={`${idPrefix}-condition-${optionId(history)}`}
              key={history}
              label={history}
              onChange={() => onConditionHistoryToggle(history)}
            />
          ))}
        </ExpandableFilter>
      )}

      <div className="sticky bottom-0 -mx-5 mt-5 border-t border-black/10 bg-white px-5 pb-2 pt-4 sm:-mx-7 sm:px-7 lg:hidden">
        <button
          className="w-full rounded bg-[#3e6ae1] py-3 text-sm font-semibold text-white"
          onClick={onShowResults}
          type="button"
        >
          Show {resultCount} {resultCount === 1 ? "Vehicle" : "Vehicles"}
        </button>
      </div>
    </div>
  );
}

function InventoryCard({
  paymentType,
  vehicle,
}: {
  paymentType: PaymentType;
  vehicle: InventoryVehicle;
}) {
  const estimatedFinancePayment = Math.round(
    ((vehicle.price - 4500) * 1.07) / 72,
  );
  const estimatedLeasePayment = Math.round(vehicle.price * 0.0095);
  const paymentDisplay =
    paymentType === "cash"
      ? {
          label: "Cash price",
          primary: `$${vehicle.price.toLocaleString()}`,
        }
      : paymentType === "finance"
        ? {
            label: "Est. finance · $4,500 down",
            primary: `$${estimatedFinancePayment.toLocaleString()}/mo`,
          }
        : {
            label: "Est. lease · $4,500 due at signing",
            primary: `$${estimatedLeasePayment.toLocaleString()}/mo`,
          };

  return (
    <article className="group overflow-hidden rounded-xl border border-black/[0.08] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_18px_44px_rgba(0,0,0,0.12)]">
      <Link
        aria-label={`View image details for ${vehicle.year} ${vehicle.model} ${vehicle.trim}`}
        className="relative block aspect-[16/9] overflow-hidden bg-white outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#3e6ae1]"
        to={`/inventory/vehicle/${vehicle.id}`}
      >
        <img
          alt={`${vehicle.year} ${vehicle.model} ${vehicle.trim}`}
          className="absolute inset-0 h-full w-full scale-[1.38] object-cover object-center opacity-100 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.42] group-hover:opacity-0 group-focus-within:scale-[1.42] group-focus-within:opacity-0"
          decoding="async"
          height="1080"
          loading="lazy"
          src={vehicle.image}
          width="1920"
        />
        <img
          alt={`${vehicle.year} ${vehicle.model} ${vehicle.interior}`}
          className="absolute inset-0 h-full w-full scale-[1.04] object-cover object-center opacity-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100"
          decoding="async"
          height="1080"
          loading="lazy"
          src={vehicle.interiorImage}
          width="1920"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#393c41] shadow-sm backdrop-blur-md">
            {vehicle.condition === "new" ? "New Vehicle" : "Pre-Owned"}
          </span>
          {vehicle.demoDriveAvailable && (
            <span className="rounded-full bg-[#171a20]/90 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
              Demo Drive
            </span>
          )}
        </div>
        <span className="absolute bottom-4 right-4 z-10 translate-y-2 rounded-full bg-[#171a20]/90 px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-lg backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          View Vehicle →
        </span>
        <span className="absolute bottom-4 left-4 z-10 translate-y-2 rounded-full bg-white/90 px-3 py-2 text-[11px] font-semibold text-[#171a20] opacity-0 shadow-md backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          Interior Preview
        </span>
      </Link>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-[#5c5e62]">{vehicle.year}</p>
            <h2 className="mt-0.5 text-2xl font-semibold tracking-[-0.035em]">
              {vehicle.model}
            </h2>
            <p className="mt-1 text-sm text-[#5c5e62]">
              {vehicle.trim} {vehicle.drive}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold">{paymentDisplay.primary}</p>
            <p className="mt-1 text-xs text-[#5c5e62]">
              {paymentDisplay.label}
            </p>
            {paymentType !== "cash" && (
              <p className="mt-1 text-[11px] text-[#8e8e8e]">
                ${vehicle.price.toLocaleString()} vehicle price
              </p>
            )}
          </div>
        </div>

        <dl className="mt-5 grid grid-cols-3 divide-x divide-black/10 rounded-lg bg-[#f4f4f4] py-3 text-center">
          <div className="px-2">
            <dt className="text-sm font-semibold">{vehicle.range} mi</dt>
            <dd className="mt-0.5 text-[10px] uppercase tracking-wide text-[#5c5e62]">
              Range
            </dd>
          </div>
          <div className="px-2">
            <dt className="truncate text-sm font-semibold">
              {vehicle.condition === "used"
                ? vehicle.mileage.toLocaleString()
                : "Under 50"}
            </dt>
            <dd className="mt-0.5 text-[10px] uppercase tracking-wide text-[#5c5e62]">
              Miles
            </dd>
          </div>
          <div className="px-2">
            <dt className="text-sm font-semibold">{vehicle.distance} mi</dt>
            <dd className="mt-0.5 text-[10px] uppercase tracking-wide text-[#5c5e62]">
              Away
            </dd>
          </div>
        </dl>

        <div className="mt-5 space-y-1 text-xs leading-5 text-[#5c5e62]">
          <p>{vehicle.paint}</p>
          <p>{vehicle.wheels}</p>
          <p>{vehicle.interior}</p>
          <p>
            {vehicle.seatLayout} · {vehicle.steeringControl}
          </p>
          <p>{vehicle.selfDriving}</p>
          <p>{vehicle.additionalOptions.join(" · ")}</p>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4 border-t border-black/10 pt-4">
          <div>
            <p className="text-xs text-[#5c5e62]">Available in</p>
            <p className="mt-0.5 text-sm font-medium">{vehicle.location}</p>
          </div>
          <Link
            className="shrink-0 rounded bg-[#3e6ae1] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#3457b1]"
            to={`/inventory/vehicle/${vehicle.id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function InventoryPage() {
  const navigate = useNavigate();
  const { condition: conditionParam } = useParams();
  const routeCondition: InventoryCondition =
    conditionParam === "used" ? "used" : "new";
  const [condition, setCondition] =
    useState<InventoryCondition>(routeCondition);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [locationInput, setLocationInput] = useState("90210");
  const [locationError, setLocationError] = useState("");
  const [searchLocation, setSearchLocation] = useState("90210");
  const [searchDistance, setSearchDistance] = useState(50);
  const [selectedModels, setSelectedModels] = useState<InventoryModel[]>([]);
  const [selectedTrims, setSelectedTrims] = useState<string[]>([]);
  const [selectedPaints, setSelectedPaints] = useState<string[]>([]);
  const [selectedWheels, setSelectedWheels] = useState<string[]>([]);
  const [selectedInteriors, setSelectedInteriors] = useState<string[]>([]);
  const [selectedSelfDrivingOptions, setSelectedSelfDrivingOptions] = useState<
    string[]
  >([]);
  const [selectedSteeringControls, setSelectedSteeringControls] = useState<
    string[]
  >([]);
  const [selectedSeatLayouts, setSelectedSeatLayouts] = useState<string[]>([]);
  const [selectedAdditionalOptions, setSelectedAdditionalOptions] = useState<
    string[]
  >([]);
  const [selectedConditionHistories, setSelectedConditionHistories] = useState<
    InventoryHistory[]
  >([]);
  const [paymentType, setPaymentType] = useState<PaymentType>("cash");
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [maxMileage, setMaxMileage] = useState(MAX_MILEAGE);
  const [minYear, setMinYear] = useState(MIN_YEAR);
  const [requiresDemoDrive, setRequiresDemoDrive] = useState(false);
  const [sortOption, setSortOption] = useState<SortOption>("distance");

  useEffect(() => {
    setCondition(routeCondition);
  }, [routeCondition]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMobileFiltersOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileFiltersOpen]);

  const toggleValue = <T,>(
    value: T,
    values: T[],
    setValues: (nextValues: T[]) => void,
  ) => {
    setValues(
      values.includes(value)
        ? values.filter((currentValue) => currentValue !== value)
        : [...values, value],
    );
  };

  const filteredVehicles = useMemo(() => {
    const searchDistanceOffset = Math.abs(Number(searchLocation) - 90210);
    const matches = inventoryVehicles.filter(
      (vehicle) =>
        vehicle.condition === condition &&
        vehicle.distance + searchDistanceOffset <= searchDistance &&
        vehicle.price <= maxPrice &&
        (!selectedModels.length || selectedModels.includes(vehicle.model)) &&
        (!selectedTrims.length || selectedTrims.includes(vehicle.trim)) &&
        (!selectedPaints.length || selectedPaints.includes(vehicle.paint)) &&
        (!selectedWheels.length || selectedWheels.includes(vehicle.wheels)) &&
        (!selectedInteriors.length ||
          selectedInteriors.includes(vehicle.interior)) &&
        (!selectedSelfDrivingOptions.length ||
          selectedSelfDrivingOptions.includes(vehicle.selfDriving)) &&
        (!selectedSteeringControls.length ||
          selectedSteeringControls.includes(vehicle.steeringControl)) &&
        (!selectedSeatLayouts.length ||
          selectedSeatLayouts.includes(vehicle.seatLayout)) &&
        (!selectedAdditionalOptions.length ||
          selectedAdditionalOptions.every((option) =>
            vehicle.additionalOptions.includes(option),
          )) &&
        (condition !== "used" || vehicle.mileage <= maxMileage) &&
        (condition !== "used" || vehicle.year >= minYear) &&
        (condition !== "used" ||
          !selectedConditionHistories.length ||
          (vehicle.conditionHistory !== null &&
            selectedConditionHistories.includes(vehicle.conditionHistory))) &&
        (!requiresDemoDrive || vehicle.demoDriveAvailable),
    );

    return [...matches].sort((firstVehicle, secondVehicle) => {
      if (sortOption === "price-low") {
        return firstVehicle.price - secondVehicle.price;
      }

      if (sortOption === "price-high") {
        return secondVehicle.price - firstVehicle.price;
      }

      if (sortOption === "range") {
        return secondVehicle.range - firstVehicle.range;
      }

      return firstVehicle.distance - secondVehicle.distance;
    });
  }, [
    condition,
    maxMileage,
    maxPrice,
    minYear,
    requiresDemoDrive,
    searchDistance,
    searchLocation,
    selectedAdditionalOptions,
    selectedConditionHistories,
    selectedInteriors,
    selectedModels,
    selectedPaints,
    selectedSeatLayouts,
    selectedSelfDrivingOptions,
    selectedSteeringControls,
    selectedTrims,
    selectedWheels,
    sortOption,
  ]);

  const activeFilterCount =
    selectedModels.length +
    selectedTrims.length +
    selectedPaints.length +
    selectedWheels.length +
    selectedInteriors.length +
    selectedSelfDrivingOptions.length +
    selectedSteeringControls.length +
    selectedSeatLayouts.length +
    selectedAdditionalOptions.length +
    selectedConditionHistories.length +
    Number(requiresDemoDrive) +
    Number(maxPrice < MAX_PRICE) +
    Number(condition === "used" && maxMileage < MAX_MILEAGE) +
    Number(condition === "used" && minYear > MIN_YEAR) +
    Number(paymentType !== "cash");

  const selectCondition = (nextCondition: InventoryCondition) => {
    setCondition(nextCondition);
    navigate(`/inventory/${nextCondition}`);
  };

  const submitLocation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextLocation = locationInput.trim();

    if (!/^\d{5}$/.test(nextLocation)) {
      setLocationError("Enter a valid 5-digit ZIP code.");
      return;
    }

    setLocationError("");
    setSearchLocation(nextLocation);
  };

  const clearFilters = () => {
    setSelectedModels([]);
    setSelectedTrims([]);
    setSelectedPaints([]);
    setSelectedWheels([]);
    setSelectedInteriors([]);
    setSelectedSelfDrivingOptions([]);
    setSelectedSteeringControls([]);
    setSelectedSeatLayouts([]);
    setSelectedAdditionalOptions([]);
    setSelectedConditionHistories([]);
    setMaxPrice(MAX_PRICE);
    setMaxMileage(MAX_MILEAGE);
    setMinYear(MIN_YEAR);
    setPaymentType("cash");
    setRequiresDemoDrive(false);
    setSearchDistance(50);
  };

  const sharedFilterProps = {
    condition,
    locationError,
    locationInput,
    maxMileage,
    maxPrice,
    minYear,
    onAdditionalOptionToggle: (option: string) =>
      toggleValue(
        option,
        selectedAdditionalOptions,
        setSelectedAdditionalOptions,
      ),
    onClear: clearFilters,
    onConditionChange: selectCondition,
    onConditionHistoryToggle: (history: InventoryHistory) =>
      toggleValue(
        history,
        selectedConditionHistories,
        setSelectedConditionHistories,
      ),
    onInteriorToggle: (interior: string) =>
      toggleValue(interior, selectedInteriors, setSelectedInteriors),
    onLocationInputChange: (value: string) => {
      setLocationInput(value);
      setLocationError("");
    },
    onLocationSubmit: submitLocation,
    onModelToggle: (model: InventoryModel) =>
      toggleValue(model, selectedModels, setSelectedModels),
    onPaintToggle: (paint: string) =>
      toggleValue(paint, selectedPaints, setSelectedPaints),
    onSeatLayoutToggle: (seatLayout: string) =>
      toggleValue(seatLayout, selectedSeatLayouts, setSelectedSeatLayouts),
    onSelfDrivingToggle: (selfDriving: string) =>
      toggleValue(
        selfDriving,
        selectedSelfDrivingOptions,
        setSelectedSelfDrivingOptions,
      ),
    onShowResults: () => setIsMobileFiltersOpen(false),
    onSteeringControlToggle: (steeringControl: string) =>
      toggleValue(
        steeringControl,
        selectedSteeringControls,
        setSelectedSteeringControls,
      ),
    onTrimToggle: (trim: string) =>
      toggleValue(trim, selectedTrims, setSelectedTrims),
    onWheelToggle: (wheel: string) =>
      toggleValue(wheel, selectedWheels, setSelectedWheels),
    paymentType,
    requiresDemoDrive,
    resultCount: filteredVehicles.length,
    searchDistance,
    selectedAdditionalOptions,
    selectedConditionHistories,
    selectedInteriors,
    selectedModels,
    selectedPaints,
    selectedSeatLayouts,
    selectedSelfDrivingOptions,
    selectedSteeringControls,
    selectedTrims,
    selectedWheels,
    setMaxMileage,
    setMaxPrice,
    setMinYear,
    setPaymentType,
    setRequiresDemoDrive,
    setSearchDistance,
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#171a20]">
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-40 h-14 bg-white"
      />
      <Navbar />

      <main className="pt-14">
        <div className="border-b border-black/10 bg-white px-5 py-6 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#5c5e62]">
                Vehicles Available Now
              </p>
              <h1 className="mt-1 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                Inventory
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <button
                className="rounded border border-black/20 bg-white px-4 py-2.5 font-medium transition hover:bg-[#f4f4f4] lg:hidden"
                onClick={() => setIsMobileFiltersOpen(true)}
                type="button"
              >
                Filters{activeFilterCount ? ` (${activeFilterCount})` : ""}
              </button>
              <span className="rounded bg-[#f4f4f4] px-4 py-2.5 text-[#5c5e62]">
                ZIP {searchLocation} · {searchDistance} mi
              </span>
            </div>
          </div>
          <div
            aria-label="Inventory condition"
            className="mx-auto mt-6 grid w-full max-w-md grid-cols-2 gap-1 rounded bg-[#e8e8e8] p-1"
            role="group"
          >
            {(["new", "used"] as InventoryCondition[]).map((option) => (
              <button
                aria-pressed={condition === option}
                className={`rounded px-5 py-3 text-sm font-semibold transition ${
                  condition === option
                    ? "bg-white text-[#171a20] shadow-sm"
                    : "text-[#5c5e62] hover:text-[#171a20]"
                }`}
                key={option}
                onClick={() => selectCondition(option)}
                type="button"
              >
                {option === "new" ? "New" : "Pre-Owned"}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[360px_minmax(0,1fr)] xl:grid-cols-[390px_minmax(0,1fr)]">
          <aside className="hidden border-r border-black/10 bg-white lg:block">
            <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto">
              <FilterPanel {...sharedFilterProps} idPrefix="desktop" />
            </div>
          </aside>

          <section
            aria-labelledby="inventory-results-heading"
            className="min-w-0 px-4 py-7 sm:px-7 lg:px-8 lg:py-9 xl:px-10"
          >
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2
                  className="text-2xl font-semibold tracking-[-0.03em]"
                  id="inventory-results-heading"
                >
                  Results
                </h2>
                <p aria-live="polite" className="mt-1 text-sm text-[#5c5e62]">
                  {filteredVehicles.length}{" "}
                  {filteredVehicles.length === 1 ? "vehicle" : "vehicles"} near{" "}
                  {searchLocation}
                </p>
              </div>
              <label className="flex items-center gap-3 text-sm text-[#5c5e62]">
                <span>Sort by</span>
                <select
                  className="rounded border border-black/20 bg-white px-3 py-2.5 font-medium text-[#171a20]"
                  onChange={(event) =>
                    setSortOption(event.target.value as SortOption)
                  }
                  value={sortOption}
                >
                  <option value="distance">Distance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="range">Range</option>
                </select>
              </label>
            </div>

            {filteredVehicles.length > 0 ? (
              <div className="grid gap-5 xl:grid-cols-2">
                {filteredVehicles.map((vehicle) => (
                  <InventoryCard
                    key={vehicle.id}
                    paymentType={paymentType}
                    vehicle={vehicle}
                  />
                ))}
              </div>
            ) : (
              <div className="flex min-h-[430px] flex-col items-center justify-center rounded-xl border border-dashed border-black/20 bg-white px-6 text-center">
                <h2 className="text-2xl font-semibold">
                  No vehicles match your search
                </h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-[#5c5e62]">
                  Try expanding your search radius or clearing one of your
                  filters.
                </p>
                <button
                  className="mt-5 rounded bg-[#171a20] px-6 py-3 text-sm font-semibold text-white"
                  onClick={clearFilters}
                  type="button"
                >
                  Clear Filters
                </button>
              </div>
            )}

            <div className="mt-10 rounded-xl bg-white px-6 py-8 text-center sm:px-10">
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">
                Don&apos;t see the Tesla you&apos;re looking for?
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#5c5e62]">
                Build a custom vehicle with your preferred paint, wheels and
                interior.
              </p>
              <Link
                className="mt-5 inline-flex rounded border-2 border-[#171a20] px-6 py-2.5 text-sm font-semibold transition hover:bg-[#171a20] hover:text-white"
                to="/model-3"
              >
                Build Your Custom Model 3
              </Link>
            </div>

            <footer className="flex flex-wrap justify-center gap-x-5 gap-y-2 py-10 text-xs text-[#5c5e62]">
              <span>Tesla Clone © 2026</span>
              <a href="#top">Privacy &amp; Legal</a>
              <a href="#top">Contact</a>
              <a href="#top">Locations</a>
            </footer>
          </section>
        </div>
      </main>

      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <button
            aria-label="Close filters"
            className="absolute inset-0 bg-black/35"
            onClick={() => setIsMobileFiltersOpen(false)}
            type="button"
          />
          <div
            aria-label="Inventory filters"
            aria-modal="true"
            className="absolute inset-y-0 right-0 w-full max-w-md overflow-y-auto bg-white shadow-2xl"
            role="dialog"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-white px-5 py-4">
              <p className="text-lg font-semibold">Inventory Filters</p>
              <button
                aria-label="Close inventory filters"
                className="grid h-9 w-9 place-items-center rounded-full bg-[#f4f4f4] text-xl"
                onClick={() => setIsMobileFiltersOpen(false)}
                type="button"
              >
                ×
              </button>
            </div>
            <FilterPanel {...sharedFilterProps} idPrefix="mobile" />
          </div>
        </div>
      )}
    </div>
  );
}
