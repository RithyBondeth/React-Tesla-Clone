import { useState } from "react";

import Navbar from "../../../components/navbar";
import { autopilotVideos } from "../../../data/main-page-data";
import type { SlideClickIndex, Vehicle } from "../../../utils/types/vehicle";

interface ModelCarOrderPageProps {
  vehicle: Vehicle;
  slideClickIndex: SlideClickIndex;
}

const CHARGING_OPTIONS = [
  { label: "Universal Wall Connector", price: "$580" },
  { label: "Mobile Connector", price: "$250" },
];

export default function ModelCarOrderPage({
  vehicle,
  slideClickIndex,
}: ModelCarOrderPageProps) {
  const { orderData } = vehicle;
  const [imageIndex, setImageIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [showsSlideButtons, setShowsSlideButtons] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [optionIndex, setOptionIndex] = useState(0);
  const [wheelIndex, setWheelIndex] = useState(0);
  const [interiorChoiceIndex, setInteriorChoiceIndex] = useState(0);
  const [interiorPreviewIndex, setInteriorPreviewIndex] = useState<
    number | null
  >(null);
  const [showsAutopilot, setShowsAutopilot] = useState(false);

  const selectedColor = orderData.colors[colorIndex];
  const selectedWheel = orderData.wheels[wheelIndex];
  const selectedInterior = orderData.interiors[interiorChoiceIndex];
  const exteriorImages =
    wheelIndex === 0
      ? selectedColor.primaryWheelImages
      : selectedColor.secondaryWheelImages;
  const exteriorImageCount = Math.max(
    1,
    exteriorImages.length - slideClickIndex.back,
  );

  const showExterior = interiorPreviewIndex === null && !showsAutopilot;

  const changeExteriorImage = (direction: number) => {
    setImageIndex(
      (currentIndex) =>
        (currentIndex + direction + exteriorImageCount) % exteriorImageCount,
    );
  };

  const changeAutopilotVideo = (direction: number) => {
    setVideoIndex(
      (currentIndex) =>
        (currentIndex + direction + autopilotVideos.length) %
        autopilotVideos.length,
    );
  };

  const selectExteriorOption = () => {
    setImageIndex(0);
    setInteriorPreviewIndex(null);
    setShowsAutopilot(false);
  };

  const interiorPreviewImage =
    interiorPreviewIndex === null
      ? null
      : (orderData.interiors[interiorPreviewIndex].interiorImages[
          selectedColor.colorName
        ] ??
        Object.values(orderData.interiors[interiorPreviewIndex].interiorImages)[
          colorIndex
        ]);

  return (
    <>
      <Navbar isDetail />

      <main className="flex min-h-screen w-full flex-col items-center justify-center lg:h-screen lg:flex-row">
        {showExterior && (
          <div
            className="relative h-[54svh] w-full bg-cover bg-center bg-no-repeat lg:h-screen lg:w-2/3"
            onMouseEnter={() => setShowsSlideButtons(true)}
            onMouseLeave={() => setShowsSlideButtons(false)}
            style={{ backgroundImage: `url(${exteriorImages[imageIndex]})` }}
          >
            {showsSlideButtons && (
              <>
                <button
                  aria-label="Previous vehicle image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-md bg-gray-200 px-3 py-2 text-xl sm:left-10"
                  onClick={() => changeExteriorImage(-1)}
                  type="button"
                >
                  ‹
                </button>
                <button
                  aria-label="Next vehicle image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-md bg-gray-200 px-3 py-2 text-xl sm:right-10"
                  onClick={() => changeExteriorImage(1)}
                  type="button"
                >
                  ›
                </button>
              </>
            )}
          </div>
        )}

        {interiorPreviewImage && (
          <div
            className="relative h-[54svh] w-full bg-cover bg-center bg-no-repeat lg:h-screen lg:w-2/3"
            style={{ backgroundImage: `url(${interiorPreviewImage})` }}
          />
        )}

        {showsAutopilot && (
          <div
            className="relative h-[54svh] w-full overflow-hidden lg:h-screen lg:w-2/3"
            onMouseEnter={() => setShowsSlideButtons(true)}
            onMouseLeave={() => setShowsSlideButtons(false)}
          >
            <video
              autoPlay
              className="min-h-full min-w-full object-cover"
              loop
              muted
              src={autopilotVideos[videoIndex].video}
            />
            <p className="absolute bottom-5 left-0 right-0 z-10 text-center text-gray-500">
              {autopilotVideos[videoIndex].technology}
            </p>
            {showsSlideButtons && (
              <>
                <button
                  aria-label="Previous autopilot video"
                  className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-md bg-gray-200 px-3 py-2 text-xl sm:left-10"
                  onClick={() => changeAutopilotVideo(-1)}
                  type="button"
                >
                  ‹
                </button>
                <button
                  aria-label="Next autopilot video"
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-md bg-gray-200 px-3 py-2 text-xl sm:right-10"
                  onClick={() => changeAutopilotVideo(1)}
                  type="button"
                >
                  ›
                </button>
              </>
            )}
          </div>
        )}

        <div className="h-auto w-full overflow-y-auto lg:h-screen lg:w-1/3">
          <header className="flex flex-col items-center justify-center pb-3 pt-20">
            <h1 className="text-3xl font-bold">{vehicle.title}</h1>
          </header>

          <section className="flex items-center justify-center p-3">
            {[
              [
                orderData.options[optionIndex].optionMachine[0],
                "Range (EPA est.)",
              ],
              [orderData.options[optionIndex].optionMachine[1], "Top Speed"],
              [orderData.options[optionIndex].optionMachine[2], "0-60 mph"],
            ].map(([value, label]) => (
              <div
                className="flex flex-col items-center justify-center px-3"
                key={label}
              >
                <p className="text-lg font-bold">{value}</p>
                <p className="text-sm">{label}</p>
              </div>
            ))}
          </section>

          <section className="flex flex-col items-center justify-center px-5 py-3">
            <p className="mb-1 w-full text-sm text-gray-500">
              {orderData.options[optionIndex].optionDescription}
            </p>
            {orderData.options.map((option, index) => (
              <button
                className={`mt-2 flex w-full items-center justify-between rounded-md border px-2 py-3 text-sm duration-300 ${
                  optionIndex === index
                    ? "border-2 border-blue-500 font-bold text-black"
                    : "border-gray-500 text-gray-500"
                }`}
                key={option.optionName}
                onClick={() => setOptionIndex(index)}
                type="button"
              >
                <span>{option.optionName}</span>
                <span>{option.optionPrice}</span>
              </button>
            ))}
            <button
              className="mb-1 mt-4 rounded-lg bg-gray-200 px-4 py-2"
              type="button"
            >
              Feature Details
            </button>
          </section>

          <section className="flex flex-col items-center justify-center py-5">
            <h2 className="text-3xl font-bold">Paint</h2>
            <div className="mb-2 mt-4 flex items-center justify-center">
              {orderData.colors.map((color, index) => (
                <button
                  aria-label={`Select ${color.colorName} paint`}
                  className={`mx-1 h-12 w-12 cursor-pointer rounded-full border-2 bg-cover bg-center bg-no-repeat ${
                    colorIndex === index
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                  key={color.colorName}
                  onClick={() => {
                    setColorIndex(index);
                    selectExteriorOption();
                  }}
                  style={{ backgroundImage: `url(${color.colorIcon})` }}
                  type="button"
                />
              ))}
            </div>
            <div className="flex items-center justify-center text-sm">
              <span className="font-bold">{selectedColor.colorName}</span>
              <span className="px-2 text-gray-500">
                {selectedColor.colorPrice}
              </span>
            </div>
          </section>

          <section className="flex flex-col items-center justify-center py-5">
            <h2 className="text-3xl font-bold">Wheels</h2>
            <div className="mb-2 mt-4 flex items-center justify-center">
              {orderData.wheels.map((wheel, index) => (
                <button
                  aria-label={`Select ${wheel.wheelName}`}
                  className={`mx-1 h-12 w-12 cursor-pointer rounded-full border-2 bg-cover bg-center bg-no-repeat ${
                    wheelIndex === index
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                  key={wheel.wheelName}
                  onClick={() => {
                    setWheelIndex(index);
                    selectExteriorOption();
                  }}
                  style={{ backgroundImage: `url(${wheel.wheelIcon})` }}
                  type="button"
                />
              ))}
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center text-sm">
                <span className="font-bold">{selectedWheel.wheelName}</span>
                <span className="px-2 text-gray-500">
                  {selectedWheel.wheelPrice}
                </span>
              </div>
              {selectedWheel.wheelDescription.map((description) => (
                <p className="pt-1 text-sm text-gray-500" key={description}>
                  {description}
                </p>
              ))}
              <button
                className="mt-4 rounded-lg bg-gray-200 px-4 py-2"
                type="button"
              >
                Learn More
              </button>
            </div>
          </section>

          <section className="flex flex-col items-center justify-center py-5">
            <h2 className="text-3xl font-bold">Interior</h2>
            <div className="mb-2 mt-4 flex items-center justify-center">
              {orderData.interiors.map((interior, index) => (
                <button
                  aria-label={`Select ${interior.interiorDescription} interior`}
                  className={`mx-1 h-12 w-12 cursor-pointer rounded-full border-2 bg-cover bg-center bg-no-repeat ${
                    interiorChoiceIndex === index
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                  key={interior.interiorDescription}
                  onClick={() => {
                    setInteriorChoiceIndex(index);
                    setInteriorPreviewIndex(index);
                    setShowsAutopilot(false);
                  }}
                  style={{ backgroundImage: `url(${interior.interiorIcon})` }}
                  type="button"
                />
              ))}
            </div>
            <div className="flex items-center justify-center text-sm">
              <span className="font-bold">
                {selectedInterior.interiorDescription}
              </span>
              <span className="px-2 text-gray-500">
                {selectedInterior.interiorPrice}
              </span>
            </div>
          </section>

          <section className="flex flex-col items-center justify-center py-5">
            <div className="text-center">
              <h2 className="text-3xl font-bold">
                Full Self-Driving Capability
              </h2>
              <p className="text-sm">$8,000</p>
            </div>
            <p className="mt-2 px-5 py-2 text-sm text-gray-500">
              Receive a 30 day trial of Full Self-Driving Capability with a new
              vehicle purchase.
            </p>
            <p className="px-5 py-2 text-sm text-gray-500">
              Your car will be able to drive itself almost anywhere with minimal
              driver intervention and will continuously improve.
            </p>
            <ul className="w-full list-disc px-10 pb-2 text-sm text-gray-500 [&>li]:my-2">
              <li>Navigate on Autopilot</li>
              <li>Auto Lane Change</li>
              <li>Autopark</li>
              <li>Summon</li>
              <li>Smart Summon</li>
              <li>Autosteer on city streets</li>
              <li>Traffic Light and Stop Sign Control</li>
            </ul>
            <p className="px-5 text-xs leading-5 text-gray-500">
              The currently enabled features require active driver supervision
              and do not make the vehicle autonomous. Activation and use depend
              on achieving reliability well beyond human drivers and on
              regulatory approval. Features will continue to improve through
              over-the-air software updates.
            </p>
            <button
              className="mb-1 mt-4 rounded-lg bg-gray-200 px-4 py-2"
              onClick={() => {
                setShowsAutopilot(true);
                setInteriorPreviewIndex(null);
                setVideoIndex(0);
              }}
              type="button"
            >
              Feature Details
            </button>
          </section>

          <section className="flex flex-col items-center justify-center py-5">
            <h2 className="text-3xl font-bold">Charging</h2>
            <div className="my-5 flex items-center justify-center">
              <span
                aria-hidden="true"
                className="flex h-5 w-5 items-center justify-center rounded-full border border-blue-500 text-xs font-semibold text-blue-500"
              >
                i
              </span>
              <p className="ml-2 text-sm">
                Home charging equipment is not included
              </p>
            </div>
            <div className="w-full px-5">
              {CHARGING_OPTIONS.map((option, index) => (
                <div
                  className="flex items-center justify-between py-2"
                  key={option.label}
                >
                  <label
                    className="flex items-center justify-center"
                    htmlFor={`charging-${index}`}
                  >
                    <input
                      className="h-7 w-7 cursor-pointer border border-gray-500"
                      id={`charging-${index}`}
                      name="charging"
                      type="checkbox"
                      value={option.label}
                    />
                    <span className="ml-2">{option.label}</span>
                  </label>
                  <span>{option.price}</span>
                </div>
              ))}
            </div>
            <button
              className="mt-4 rounded-lg bg-gray-200 px-4 py-2"
              type="button"
            >
              Learn More
            </button>
          </section>

          <section className="flex flex-col items-center justify-center py-5">
            <h2 className="text-3xl font-bold">Accessories</h2>
            <div className="mt-3 w-full px-5">
              {orderData.accessories.map((accessory, index) => (
                <div
                  className="flex items-center justify-between py-2"
                  key={accessory.accessoryDescription}
                >
                  <label
                    className="flex items-center justify-center"
                    htmlFor={`accessory-${index}`}
                  >
                    <input
                      className="h-7 w-7 cursor-pointer border border-gray-500"
                      id={`accessory-${index}`}
                      name={accessory.accessoryDescription}
                      type="checkbox"
                    />
                    <span className="ml-2">
                      {accessory.accessoryDescription}
                    </span>
                  </label>
                  <span>{accessory.accessoryPrice}</span>
                </div>
              ))}
            </div>
            <button
              className="mt-4 rounded-lg bg-gray-200 px-4 py-2"
              type="button"
            >
              Learn More
            </button>
          </section>

          <section className="mb-40 flex flex-col items-center justify-center py-5">
            <h2 className="text-3xl font-bold">{orderData.lastOrders[0]}</h2>
            <p className="my-3 text-sm text-gray-500">
              {orderData.lastOrders[1]}
            </p>
            <div className="flex items-start justify-center px-5">
              {orderData.lastOrders[2] && (
                <span
                  aria-hidden="true"
                  className="font-semibold text-green-500"
                >
                  ✓
                </span>
              )}
              <p className="ml-2 text-sm">{orderData.lastOrders[2]}</p>
            </div>
            <button
              className="mt-4 w-[90%] rounded-lg bg-blue-500 py-2 text-center text-white"
              type="button"
            >
              Continue
            </button>
          </section>
        </div>
      </main>
    </>
  );
}
