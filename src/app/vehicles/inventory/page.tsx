import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Navbar from "../../../components/navbar";
import {
  inventoryVehicles,
  type InventoryCondition,
  type InventoryHistory,
  type InventoryModel,
  type InventoryVehicle,
} from "../../../data/inventory-data";

const uniqueOptions = (values: string[]) =>
  Array.from(new Set(values)).sort((first, second) =>
    first.localeCompare(second),
  );

const MODEL_ORDER: InventoryModel[] = [
  "Model S",
  "Model 3",
  "Model X",
  "Model Y",
  "Cybertruck",
];
const CONDITION_OPTIONS: InventoryHistory[] = [
  "No Reported Accidents/Damage",
  "Previously Repaired",
];
const MAX_PRICE = 100000;
const MAX_MILEAGE = 60000;
const MIN_YEAR = 2020;
const MAX_YEAR = Math.max(...inventoryVehicles.map((vehicle) => vehicle.year));

const SAVINGS_BY_VEHICLE: Partial<Record<string, number>> = {
  "m3-lr-awd-grey": 1460,
  "ms-awd-red": 1200,
  "m3-used-blue": 2200,
  "ms-used-grey": 4100,
};

type PaymentType = "cash" | "lease" | "finance";
type SortOption = "distance" | "price-high" | "price-low" | "range";

interface FilterPanelProps {
  condition: InventoryCondition;
  idPrefix: string;
  maxMileage: number;
  maxPrice: number;
  minYear: number;
  onAdditionalOptionToggle: (option: string) => void;
  onClear: () => void;
  onConditionChange: (condition: InventoryCondition) => void;
  onConditionHistoryToggle: (history: InventoryHistory) => void;
  onInteriorToggle: (interior: string) => void;
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
  selectedAdditionalOptions: string[];
  selectedConditionHistories: InventoryHistory[];
  selectedInteriors: string[];
  selectedModels: InventoryModel[];
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
}

const optionId = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function FilterOption({
  checked,
  disabled = false,
  id,
  label,
  onChange,
  round = false,
}: {
  checked: boolean;
  disabled?: boolean;
  id: string;
  label: string;
  onChange: () => void;
  round?: boolean;
}) {
  return (
    <label
      className={`flex items-center gap-3 py-[7px] text-sm ${
        disabled
          ? "cursor-not-allowed text-[#a2a3a5]"
          : "cursor-pointer text-[#5c5e62] hover:text-[#171a20]"
      }`}
      htmlFor={id}
    >
      <input
        checked={checked}
        className={`h-[18px] w-[18px] shrink-0 border border-[#8e8e8e] bg-white transition checked:border-[#3e6ae1] checked:bg-[#3e6ae1] ${
          round ? "rounded-full" : "rounded-[2px]"
        }`}
        disabled={disabled}
        id={id}
        onChange={onChange}
        type="checkbox"
      />
      <span>{label}</span>
    </label>
  );
}

function FilterSection({
  children,
  defaultOpen = false,
  title,
}: {
  children: ReactNode;
  defaultOpen?: boolean;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="border-t border-black/10 py-1">
      <button
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-4 text-left text-[15px] font-semibold text-[#171a20]"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <span>{title}</span>
        <span
          aria-hidden="true"
          className={`relative h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <span className="absolute left-[3px] top-[7px] h-px w-[6px] rotate-45 bg-current" />
          <span className="absolute right-[3px] top-[7px] h-px w-[6px] -rotate-45 bg-current" />
        </span>
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </section>
  );
}

function FilterPanel({
  condition,
  idPrefix,
  maxMileage,
  maxPrice,
  minYear,
  onAdditionalOptionToggle,
  onClear,
  onConditionChange,
  onConditionHistoryToggle,
  onInteriorToggle,
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
}: FilterPanelProps) {
  const availableVehicles = inventoryVehicles.filter(
    (vehicle) => vehicle.condition === condition,
  );
  const modelOptions = MODEL_ORDER.filter((model) =>
    availableVehicles.some((vehicle) => vehicle.model === model),
  );
  const trimOptions = uniqueOptions(
    availableVehicles.map((vehicle) => vehicle.trim),
  );
  const paintOptions = uniqueOptions(
    availableVehicles.map((vehicle) => vehicle.paint),
  );
  const wheelOptions = uniqueOptions(
    availableVehicles.map((vehicle) => vehicle.wheels),
  );
  const interiorOptions = uniqueOptions(
    availableVehicles.map((vehicle) => vehicle.interior),
  );
  const selfDrivingOptions = uniqueOptions(
    availableVehicles.map((vehicle) => vehicle.selfDriving),
  );
  const steeringControlOptions = uniqueOptions(
    availableVehicles.map((vehicle) => vehicle.steeringControl),
  );
  const seatLayoutOptions = uniqueOptions(
    availableVehicles.map((vehicle) => vehicle.seatLayout),
  );
  const additionalOptions = uniqueOptions(
    availableVehicles.flatMap((vehicle) => vehicle.additionalOptions),
  );

  return (
    <div className="pb-8">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="sr-only">Filters</h2>
        <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#5c5e62]">
          Filters
        </span>
        <button
          className="text-xs font-medium text-[#5c5e62] underline decoration-[#b7b7b7] underline-offset-4 hover:text-[#171a20]"
          onClick={onClear}
          type="button"
        >
          Clear
        </button>
      </div>

      <div
        aria-label="Inventory condition"
        className="grid grid-cols-2 rounded-[3px] bg-[#f4f4f4] p-[3px]"
        role="group"
      >
        {(["new", "used"] as InventoryCondition[]).map((option) => (
          <button
            aria-pressed={condition === option}
            className={`rounded-[2px] px-3 py-2.5 text-sm transition ${
              condition === option
                ? "bg-white font-semibold text-[#171a20] shadow-[0_1px_3px_rgba(0,0,0,0.14)]"
                : "font-medium text-[#5c5e62] hover:text-[#171a20]"
            }`}
            key={option}
            onClick={() => onConditionChange(option)}
            type="button"
          >
            {option === "new" ? "New" : "Pre-Owned"}
          </button>
        ))}
      </div>

      <div className="py-6">
        <p className="mb-2 text-[15px] font-semibold text-[#171a20]">Model</p>
        {modelOptions.map((model) => (
          <FilterOption
            checked={selectedModels.includes(model)}
            id={`${idPrefix}-model-${optionId(model)}`}
            key={model}
            label={model}
            onChange={() => onModelToggle(model)}
            round
          />
        ))}
      </div>

      <FilterSection defaultOpen title="Trim">
        {trimOptions.map((trim) => (
          <FilterOption
            checked={selectedTrims.includes(trim)}
            id={`${idPrefix}-trim-${optionId(trim)}`}
            key={trim}
            label={trim}
            onChange={() => onTrimToggle(trim)}
          />
        ))}
        <FilterOption
          checked={requiresDemoDrive}
          id={`${idPrefix}-demo-drive`}
          label="Available for Demo Drive"
          onChange={() => setRequiresDemoDrive(!requiresDemoDrive)}
        />
      </FilterSection>

      <section className="border-t border-black/10 py-5">
        <p className="text-[15px] font-semibold text-[#171a20]">Payment</p>
        <div className="mt-4 grid grid-cols-3 rounded-[3px] bg-[#f4f4f4] p-[3px]">
          {(["cash", "lease", "finance"] as PaymentType[]).map((option) => (
            <button
              aria-pressed={paymentType === option}
              className={`rounded-[2px] px-1 py-2 text-xs capitalize transition ${
                paymentType === option
                  ? "bg-white font-semibold text-[#171a20] shadow-[0_1px_3px_rgba(0,0,0,0.14)]"
                  : "font-medium text-[#5c5e62] hover:text-[#171a20]"
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
          <span className="text-[#5c5e62]">
            {paymentType === "cash" ? "Vehicle price" : "Monthly payment"}
          </span>
          <span className="font-medium text-[#171a20]">
            Up to ${maxPrice.toLocaleString()}
            {maxPrice === MAX_PRICE ? "+" : ""}
          </span>
        </div>
        <input
          aria-label="Maximum vehicle price"
          className="inventory-range mt-4 w-full"
          max={MAX_PRICE}
          min="25000"
          onChange={(event) => setMaxPrice(Number(event.target.value))}
          step="5000"
          type="range"
          value={maxPrice}
        />
      </section>

      {condition === "used" && (
        <section className="border-t border-black/10 py-5">
          <p className="text-[15px] font-semibold text-[#171a20]">
            Mileage &amp; Year
          </p>
          <div className="mt-4 flex items-center justify-between text-sm">
            <label className="text-[#5c5e62]" htmlFor={`${idPrefix}-mileage`}>
              Maximum mileage
            </label>
            <span className="font-medium">
              {maxMileage.toLocaleString()} mi
              {maxMileage === MAX_MILEAGE ? "+" : ""}
            </span>
          </div>
          <input
            className="inventory-range mt-4 w-full"
            id={`${idPrefix}-mileage`}
            max={MAX_MILEAGE}
            min="10000"
            onChange={(event) => setMaxMileage(Number(event.target.value))}
            step="5000"
            type="range"
            value={maxMileage}
          />
          <div className="mt-5 flex items-center justify-between text-sm">
            <label className="text-[#5c5e62]" htmlFor={`${idPrefix}-year`}>
              Model year
            </label>
            <span className="font-medium">
              {minYear === MIN_YEAR ? "Any year" : `${minYear} or newer`}
            </span>
          </div>
          <input
            className="inventory-range mt-4 w-full"
            id={`${idPrefix}-year`}
            max={MAX_YEAR}
            min={MIN_YEAR}
            onChange={(event) => setMinYear(Number(event.target.value))}
            step="1"
            type="range"
            value={minYear}
          />
        </section>
      )}

      <FilterSection title="Paint">
        {paintOptions.map((paint) => (
          <FilterOption
            checked={selectedPaints.includes(paint)}
            id={`${idPrefix}-paint-${optionId(paint)}`}
            key={paint}
            label={paint}
            onChange={() => onPaintToggle(paint)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Wheels">
        {wheelOptions.map((wheel) => (
          <FilterOption
            checked={selectedWheels.includes(wheel)}
            id={`${idPrefix}-wheel-${optionId(wheel)}`}
            key={wheel}
            label={wheel}
            onChange={() => onWheelToggle(wheel)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Interior">
        {interiorOptions.map((interior) => (
          <FilterOption
            checked={selectedInteriors.includes(interior)}
            id={`${idPrefix}-interior-${optionId(interior)}`}
            key={interior}
            label={interior}
            onChange={() => onInteriorToggle(interior)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Steering Control">
        {steeringControlOptions.map((steeringControl) => (
          <FilterOption
            checked={selectedSteeringControls.includes(steeringControl)}
            id={`${idPrefix}-steering-${optionId(steeringControl)}`}
            key={steeringControl}
            label={steeringControl}
            onChange={() => onSteeringControlToggle(steeringControl)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Self-Driving">
        {selfDrivingOptions.map((selfDriving) => (
          <FilterOption
            checked={selectedSelfDrivingOptions.includes(selfDriving)}
            id={`${idPrefix}-self-driving-${optionId(selfDriving)}`}
            key={selfDriving}
            label={selfDriving}
            onChange={() => onSelfDrivingToggle(selfDriving)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Seat Layout">
        {seatLayoutOptions.map((seatLayout) => (
          <FilterOption
            checked={selectedSeatLayouts.includes(seatLayout)}
            id={`${idPrefix}-seat-${optionId(seatLayout)}`}
            key={seatLayout}
            label={seatLayout}
            onChange={() => onSeatLayoutToggle(seatLayout)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Additional Options">
        {additionalOptions.map((option) => (
          <FilterOption
            checked={selectedAdditionalOptions.includes(option)}
            id={`${idPrefix}-additional-${optionId(option)}`}
            key={option}
            label={option}
            onChange={() => onAdditionalOptionToggle(option)}
          />
        ))}
      </FilterSection>

      {condition === "used" && (
        <FilterSection title="Condition">
          {CONDITION_OPTIONS.map((history) => (
            <FilterOption
              checked={selectedConditionHistories.includes(history)}
              id={`${idPrefix}-condition-${optionId(history)}`}
              key={history}
              label={history}
              onChange={() => onConditionHistoryToggle(history)}
            />
          ))}
        </FilterSection>
      )}

      {onShowResults && (
        <div className="sticky bottom-0 -mx-6 mt-5 border-t border-black/10 bg-white px-6 pb-2 pt-4 lg:hidden">
          <button
            className="w-full rounded-[3px] bg-[#3e6ae1] py-3 text-sm font-semibold text-white transition hover:bg-[#3457b1]"
            onClick={onShowResults}
            type="button"
          >
            Show {resultCount} {resultCount === 1 ? "Vehicle" : "Vehicles"}
          </button>
        </div>
      )}
    </div>
  );
}

const paintColor: Record<string, string> = {
  "Deep Blue Metallic": "#233b60",
  "Pearl White": "#f4f4f4",
  "Solid Black": "#171a20",
  "Stainless Steel": "#9b9da1",
  "Stealth Grey": "#4b4f55",
  "Ultra Red": "#8f1017",
};

function PaintSwatch({
  color,
  large = false,
}: {
  color: string;
  large?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`shrink-0 rounded-full border border-black/15 ${
        large ? "h-6 w-6" : "h-3 w-3"
      }`}
      style={{
        backgroundColor: color,
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,.58) 0%, rgba(255,255,255,.22) 23%, rgba(0,0,0,.22) 30%, transparent 45%), radial-gradient(circle at 50% 80%, rgba(0,0,0,.28), transparent 62%)",
        boxShadow: "inset 0 -2px 4px rgba(0,0,0,.2)",
      }}
    />
  );
}

function WheelIcon({ large = false }: { large?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`relative grid shrink-0 place-items-center rounded-full border-[#090a0c] bg-[#15171a] ${
        large ? "h-6 w-6 border-[3px]" : "h-3 w-3 border-2"
      }`}
      style={{
        backgroundImage:
          "repeating-conic-gradient(from 4deg, #4a4d52 0deg 8deg, #111317 8deg 23deg, #2b2e33 23deg 30deg)",
        boxShadow: "inset 0 0 3px rgba(255,255,255,.18)",
      }}
    >
      <span
        className={`rounded-full bg-[#08090b] ring-1 ring-[#5b5e63] ${
          large ? "h-1.5 w-1.5" : "h-[3px] w-[3px]"
        }`}
      />
    </span>
  );
}

function InteriorSwatch({
  interior,
  large = false,
}: {
  interior: string;
  large?: boolean;
}) {
  const color = interior.includes("White")
    ? "#f2f0eb"
    : interior.includes("Cream")
      ? "#e5d9c8"
      : "#17191c";

  return (
    <span
      aria-hidden="true"
      className={`shrink-0 rounded-full border border-black/15 ${
        large ? "h-6 w-6" : "h-3 w-3"
      }`}
      style={{
        backgroundColor: color,
        backgroundImage:
          "radial-gradient(circle at 34% 24%, rgba(255,255,255,.62), transparent 34%), linear-gradient(145deg, transparent 36%, rgba(0,0,0,.34))",
        boxShadow: "inset 0 -2px 4px rgba(0,0,0,.18)",
      }}
    />
  );
}

function SeatIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 shrink-0"
      fill="currentColor"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path d="M14.718 17.383c2.401-.375 3.276.034 3.276 1.33 0 1.612-.733 2.287-2.466 2.287h-4.991q-1.613 0-2.628-1.025a.5.5 0 0 1 .201-.828l.29-.093q4.163-1.335 6.318-1.67ZM5.346 3c1.183 0 1.17.599 1.15 1.245l-.003.125-.001.126v2.957c0 .984 2.08 3.841 2.78 4.945q2.013 3.174-1.615 5.906l-.139.103a.5.5 0 0 1-.771-.256Q3.994 9.286 3.994 7.656C3.994 5.966 4.439 3 5.346 3" />
    </svg>
  );
}

function SelfDrivingIcon({ large = false }: { large?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`shrink-0 ${large ? "h-6 w-6" : "h-3 w-3"}`}
      fill="currentColor"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M4.487 8.887c-.15.372.212.723.596.608a24.35 24.35 0 0 1 13.862 0c.385.115.748-.236.596-.608C18.328 5.903 15.415 3.8 12.014 3.8S5.701 5.903 4.487 8.887m-.479 4.618a.475.475 0 0 1 .478-.555h1.171a4.444 4.444 0 0 1 4.444 4.444v1.92c0 .324-.303.563-.61.463a8.18 8.18 0 0 1-5.483-6.272m15.507-.555c.3 0 .533.261.478.555a8.18 8.18 0 0 1-5.454 6.262c-.307.102-.612-.137-.612-.461v-1.912a4.444 4.444 0 0 1 4.445-4.444z"
        fillRule="evenodd"
      />
    </svg>
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
  const savings = SAVINGS_BY_VEHICLE[vehicle.id];
  const wheelSize = vehicle.wheels.match(/\d+"/)?.[0] ?? "Wheels";
  const seatCount = vehicle.seatLayout.match(/\d+/)?.[0] ?? vehicle.seatLayout;
  const exteriorImageScale =
    vehicle.model === "Cybertruck"
      ? 1.12
      : vehicle.id === "my-lr-awd-red"
        ? 1.56
        : vehicle.model === "Model X"
          ? 1.62
          : 1.68;
  const selfDrivingLabel = vehicle.selfDriving.includes("Trial")
    ? "1 mo FSD"
    : vehicle.selfDriving === "Basic Autopilot"
      ? "Autopilot"
      : vehicle.selfDriving === "Enhanced Autopilot"
        ? "EAP"
        : "FSD";
  const fullSelfDrivingLabel = vehicle.selfDriving.includes("Trial")
    ? "1 mo Full Self-Driving (Supervised) Trial"
    : vehicle.selfDriving;
  const interiorLabel = vehicle.interior.replace(" Premium", "");
  const seatWord =
    seatCount === "5" ? "Five" : seatCount === "6" ? "Six" : "Seven";
  const configurationCopy = vehicle.drive.includes(vehicle.trim)
    ? vehicle.drive
    : `${vehicle.trim} ${vehicle.drive}`;
  const paymentCopy =
    paymentType === "cash"
      ? `$${vehicle.price.toLocaleString()}`
      : paymentType === "finance"
        ? `Est $${estimatedFinancePayment.toLocaleString()} /mo financing • $${vehicle.price.toLocaleString()}`
        : `Est $${estimatedLeasePayment.toLocaleString()} /mo lease • $${vehicle.price.toLocaleString()}`;

  return (
    <article
      aria-label={`${vehicle.model} ${configurationCopy}`}
      className="group min-w-0 overflow-hidden rounded-[7px] border border-black/15 bg-white transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.09)]"
    >
      <Link
        aria-label={`View image details for ${vehicle.year} ${vehicle.model} ${vehicle.trim}`}
        className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#3e6ae1]"
        to={`/inventory/vehicle/${vehicle.id}`}
      >
        <div className="group/image relative aspect-video overflow-hidden bg-white">
          {savings && (
            <span className="absolute left-3 top-3 z-10 rounded-[3px] bg-[#f4f4f4]/95 px-2.5 py-1.5 text-[11px] font-medium text-[#5c5e62]">
              Reduced by ${savings.toLocaleString()}
            </span>
          )}
          <img
            alt={`${vehicle.paint} ${vehicle.model} ${vehicle.trim}`}
            className="absolute inset-0 h-full w-full object-cover object-center opacity-100 transition-opacity duration-300 ease-out group-hover/image:opacity-0"
            decoding="async"
            height="647"
            loading="lazy"
            src={vehicle.image}
            style={{ transform: `scale(${exteriorImageScale})` }}
            width="1150"
          />
          <img
            alt={`${vehicle.year} ${vehicle.model} ${vehicle.interior}`}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-300 ease-out group-hover/image:opacity-100"
            decoding="async"
            height="647"
            loading="lazy"
            src={vehicle.interiorImage}
            width="1150"
          />
        </div>

        <div className="px-6 pb-6 pt-5">
          <h2 className="text-[18px] font-semibold leading-6 tracking-[-0.025em] text-[#171a20]">
            {configurationCopy}
          </h2>
          <p className="mt-1.5 text-[13px] font-semibold leading-5 text-[#171a20]">
            {paymentCopy}
          </p>
          <p className="mt-1.5 text-[13px] leading-5 text-[#5c5e62]">
            {vehicle.year}{" "}
            {vehicle.condition === "new"
              ? vehicle.demoDriveAvailable
                ? `Demo Vehicle with ${vehicle.mileage.toLocaleString()} mi`
                : "New Vehicle"
              : `Pre-Owned Vehicle with ${vehicle.mileage.toLocaleString()} mi`}
          </p>
          <p className="text-[13px] leading-5 text-[#5c5e62]">
            {vehicle.range} mi Range (EPA est.)
          </p>

          <div className="group/specs relative mt-3">
            <div className="invisible absolute bottom-[calc(100%+8px)] left-0 right-0 z-30 translate-y-1 rounded-[4px] bg-white px-4 py-5 opacity-0 shadow-[0_7px_25px_rgba(0,0,0,0.16)] transition duration-200 group-hover/specs:visible group-hover/specs:translate-y-0 group-hover/specs:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="space-y-4 text-[14px] font-semibold leading-5 text-[#3d3f43]">
                <div className="grid grid-cols-[24px_1fr] items-center gap-3">
                  <PaintSwatch
                    color={paintColor[vehicle.paint] ?? "#333"}
                    large
                  />
                  <span>{vehicle.paint}</span>
                </div>
                <div className="grid grid-cols-[24px_1fr] items-center gap-3">
                  <WheelIcon large />
                  <span>{vehicle.wheels}</span>
                </div>
                <div className="grid grid-cols-[24px_1fr] items-center gap-3">
                  <InteriorSwatch interior={vehicle.interior} large />
                  <span>{interiorLabel}</span>
                </div>
                <div className="grid grid-cols-[24px_1fr] items-center gap-3">
                  <SeatIcon />
                  <span>{seatWord} Seat Interior</span>
                </div>
              </div>

              <div className="my-5 border-t border-[#d0d1d2]" />

              <div className="grid grid-cols-[24px_1fr] items-start gap-3 text-[14px] font-semibold leading-5 text-[#3d3f43]">
                <span className="mt-0.5 text-[#3e6ae1]">
                  <SelfDrivingIcon large />
                </span>
                <span>{fullSelfDrivingLabel}</span>
              </div>
            </div>

            <div className="inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 rounded-[4px] px-2 py-2 text-[11px] leading-4 text-[#5c5e62] transition-colors group-hover/specs:bg-[#f4f4f4]">
              <span className="inline-flex items-center gap-1.5">
                <PaintSwatch color={paintColor[vehicle.paint] ?? "#333"} />
                Paint
              </span>
              <span className="inline-flex items-center gap-1.5">
                <WheelIcon />
                {wheelSize} Wheels
              </span>
              <span className="inline-flex items-center gap-1.5">
                <InteriorSwatch interior={vehicle.interior} />
                Interior
              </span>
              <span>{seatCount} Seats</span>
              <span className="inline-flex items-center gap-1.5 text-[#3e6ae1]">
                <SelfDrivingIcon />
                {selfDrivingLabel}
              </span>
            </div>
          </div>

          <span className="sr-only">Available in {vehicle.location}</span>
        </div>
      </Link>
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
  const [paymentType, setPaymentType] = useState<PaymentType>("finance");
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
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileFiltersOpen(false);
      }
    };

    if (isMobileFiltersOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", closeOnEscape);
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMobileFiltersOpen]);

  useEffect(() => {
    const availableVehicles = inventoryVehicles.filter(
      (vehicle) => vehicle.condition === condition,
    );
    const retainAvailable = <T,>(
      values: T[],
      isAvailable: (value: T) => boolean,
    ) => {
      const nextValues = values.filter(isAvailable);
      return nextValues.length === values.length ? values : nextValues;
    };

    setSelectedModels((values) =>
      retainAvailable(values, (model) =>
        availableVehicles.some((vehicle) => vehicle.model === model),
      ),
    );
    setSelectedTrims((values) =>
      retainAvailable(values, (trim) =>
        availableVehicles.some((vehicle) => vehicle.trim === trim),
      ),
    );
    setSelectedPaints((values) =>
      retainAvailable(values, (paint) =>
        availableVehicles.some((vehicle) => vehicle.paint === paint),
      ),
    );
    setSelectedWheels((values) =>
      retainAvailable(values, (wheel) =>
        availableVehicles.some((vehicle) => vehicle.wheels === wheel),
      ),
    );
    setSelectedInteriors((values) =>
      retainAvailable(values, (interior) =>
        availableVehicles.some((vehicle) => vehicle.interior === interior),
      ),
    );
    setSelectedSelfDrivingOptions((values) =>
      retainAvailable(values, (selfDriving) =>
        availableVehicles.some(
          (vehicle) => vehicle.selfDriving === selfDriving,
        ),
      ),
    );
    setSelectedSteeringControls((values) =>
      retainAvailable(values, (steeringControl) =>
        availableVehicles.some(
          (vehicle) => vehicle.steeringControl === steeringControl,
        ),
      ),
    );
    setSelectedSeatLayouts((values) =>
      retainAvailable(values, (seatLayout) =>
        availableVehicles.some((vehicle) => vehicle.seatLayout === seatLayout),
      ),
    );
    setSelectedAdditionalOptions((values) =>
      retainAvailable(values, (option) =>
        availableVehicles.some((vehicle) =>
          vehicle.additionalOptions.includes(option),
        ),
      ),
    );
    setSelectedConditionHistories((values) =>
      retainAvailable(values, (history) =>
        availableVehicles.some(
          (vehicle) => vehicle.conditionHistory === history,
        ),
      ),
    );
  }, [condition]);

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
    setPaymentType("finance");
    setRequiresDemoDrive(false);
  };

  const sharedFilterProps = {
    condition,
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
  };

  const filterSummary = [
    condition === "new" ? "New" : "Pre-Owned",
    selectedModels.length ? selectedModels.join(", ") : "All Models",
  ].join(", ");

  return (
    <div className="min-h-screen bg-white text-[#171a20]">
      <aside className="fixed inset-x-0 top-0 z-[60] flex h-12 items-center justify-center bg-[linear-gradient(90deg,#f0e3bd_0%,#fffaf0_45%,#ead39a_100%)] px-3 text-center text-xs text-[#393c41] sm:text-sm">
        <span className="font-medium">As Low as 0% APR Available</span>
        <a
          className="ml-4 rounded-[3px] bg-[#171a20] px-5 py-2 text-xs font-semibold text-white transition hover:bg-black"
          href="https://www.tesla.com/inventory/new/my"
          rel="noreferrer"
          target="_blank"
        >
          Learn More
        </a>
      </aside>
      <Navbar hasAnnouncement />

      <main className="pt-[104px]" id="top">
        <header className="mx-auto max-w-[1536px] px-5 pb-7 pt-11 sm:px-8 lg:px-8 lg:pb-6 lg:pt-12">
          <h1 className="text-[38px] font-medium leading-none tracking-[-0.045em] sm:text-[42px]">
            Inventory
          </h1>
          <form
            className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-[#5c5e62]"
            onSubmit={submitLocation}
          >
            <span>ZIP</span>
            <label className="sr-only" htmlFor="inventory-location">
              Search Area
            </label>
            <input
              aria-describedby={
                locationError ? "inventory-location-error" : undefined
              }
              aria-invalid={Boolean(locationError)}
              className="w-[62px] border-b border-[#5c5e62] bg-transparent px-0 py-0.5 font-medium text-[#171a20] outline-none focus:border-[#3e6ae1]"
              id="inventory-location"
              inputMode="numeric"
              maxLength={5}
              onChange={(event) => {
                setLocationInput(event.target.value);
                setLocationError("");
              }}
              value={locationInput}
            />
            <button
              aria-label="Update search area"
              className="font-semibold text-[#171a20] underline decoration-[#b7b7b7] underline-offset-4"
              type="submit"
            >
              Update
            </button>
            <span aria-hidden="true" className="text-[#b7b7b7]">
              ·
            </span>
            <label className="sr-only" htmlFor="inventory-radius">
              Search radius
            </label>
            <select
              className="bg-transparent py-0.5 font-medium text-[#171a20] outline-none"
              id="inventory-radius"
              onChange={(event) =>
                setSearchDistance(Number(event.target.value))
              }
              value={searchDistance}
            >
              {[25, 50, 100, 200].map((distance) => (
                <option key={distance} value={distance}>
                  Within {distance} miles
                </option>
              ))}
            </select>
            {locationError && (
              <span
                className="basis-full text-xs font-medium text-[#b74134]"
                id="inventory-location-error"
                role="alert"
              >
                {locationError}
              </span>
            )}
          </form>
        </header>

        <div className="mx-auto max-w-[1536px] px-5 sm:px-8 lg:hidden">
          <button
            aria-label="Filters"
            className="flex w-full items-center justify-between border-y border-black/10 py-4 text-left"
            onClick={() => setIsMobileFiltersOpen(true)}
            type="button"
          >
            <span className="font-semibold">
              Filters{activeFilterCount ? ` (${activeFilterCount})` : ""}
            </span>
            <span className="flex items-center gap-2 text-sm text-[#5c5e62]">
              {filterSummary}
              <span aria-hidden="true" className="text-xl leading-none">
                ›
              </span>
            </span>
          </button>
        </div>

        <div className="mx-auto grid max-w-[1536px] lg:grid-cols-[296px_minmax(0,1fr)]">
          <aside className="hidden px-8 lg:block">
            <div className="sticky top-[112px] max-h-[calc(100vh-128px)] overflow-y-auto pr-2">
              <FilterPanel {...sharedFilterProps} idPrefix="desktop" />
            </div>
          </aside>

          <section
            aria-labelledby="inventory-results-heading"
            className="min-w-0 px-5 pb-8 pt-6 sm:px-8 lg:px-6 lg:pb-12 lg:pt-0 xl:px-7"
            id="inventory-results"
          >
            <h2 className="sr-only" id="inventory-results-heading">
              Results
            </h2>
            <p aria-live="polite" className="sr-only">
              {filteredVehicles.length}{" "}
              {filteredVehicles.length === 1 ? "vehicle" : "vehicles"} near{" "}
              {searchLocation}
            </p>
            <label className="sr-only" htmlFor="inventory-sort">
              Sort by
            </label>
            <select
              className="sr-only"
              id="inventory-sort"
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

            {filteredVehicles.length > 0 ? (
              <div className="grid max-w-[1240px] gap-5 sm:grid-cols-2 min-[1380px]:grid-cols-3">
                {filteredVehicles.map((vehicle) => (
                  <InventoryCard
                    key={vehicle.id}
                    paymentType={paymentType}
                    vehicle={vehicle}
                  />
                ))}
              </div>
            ) : (
              <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[7px] border border-black/15 bg-[#f8f8f8] px-6 text-center">
                <h2 className="text-2xl font-semibold tracking-[-0.03em]">
                  No vehicles match your search
                </h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-[#5c5e62]">
                  Try expanding your search radius or removing one of the
                  selected filters.
                </p>
                <button
                  className="mt-5 rounded-[3px] bg-[#171a20] px-7 py-3 text-sm font-semibold text-white"
                  onClick={clearFilters}
                  type="button"
                >
                  Clear Filters
                </button>
              </div>
            )}

            <div className="mt-10 border-t border-black/10 py-10 text-center">
              <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                Design Yours
              </h2>
              <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-[#5c5e62]">
                Configure a Tesla with your preferred range, paint, wheels and
                interior.
              </p>
              <Link
                className="mt-5 inline-flex min-w-52 justify-center rounded-[3px] border-[3px] border-[#171a20] px-6 py-2.5 text-sm font-semibold transition hover:bg-[#171a20] hover:text-white"
                to="/model-3"
              >
                Custom Order
              </Link>
            </div>

            <footer className="flex flex-wrap justify-center gap-x-5 gap-y-2 pb-8 text-xs text-[#5c5e62]">
              <span>Tesla © 2026</span>
              <a
                href="https://www.tesla.com/legal"
                rel="noreferrer"
                target="_blank"
              >
                Privacy &amp; Legal
              </a>
              <a
                href="https://www.tesla.com/vin-recall-search"
                rel="noreferrer"
                target="_blank"
              >
                Vehicle Recalls
              </a>
              <a
                href="https://www.tesla.com/contact"
                rel="noreferrer"
                target="_blank"
              >
                Contact
              </a>
              <a
                href="https://www.tesla.com/findus/list"
                rel="noreferrer"
                target="_blank"
              >
                Locations
              </a>
            </footer>
          </section>
        </div>
      </main>

      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden">
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
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-black/10 bg-white px-6 py-4">
              <p className="text-lg font-semibold">Inventory Filters</p>
              <button
                aria-label="Close inventory filters"
                className="relative h-9 w-9 rounded-full bg-[#f4f4f4]"
                onClick={() => setIsMobileFiltersOpen(false)}
                type="button"
              >
                <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
                <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
              </button>
            </div>
            <div className="px-6 pt-6">
              <FilterPanel
                {...sharedFilterProps}
                idPrefix="mobile"
                onShowResults={() => setIsMobileFiltersOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
