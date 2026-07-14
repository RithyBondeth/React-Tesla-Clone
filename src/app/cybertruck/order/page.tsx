import { useState } from "react";

import Navbar from "../../../components/navbar";
import type { CybertruckData } from "../../../utils/types/cybertruck";

interface CybertruckOrderPageProps {
  cybertruck: CybertruckData;
}

type PriceMode = "purchase" | "savings";

export default function CybertruckOrderPage({
  cybertruck,
}: CybertruckOrderPageProps) {
  const [priceMode, setPriceMode] = useState<PriceMode>("purchase");
  const [selectedSpecIndex, setSelectedSpecIndex] = useState(0);
  const [selectedPriceIndex, setSelectedPriceIndex] = useState<number | null>(
    null,
  );

  const { orderData } = cybertruck;
  const prices =
    priceMode === "purchase"
      ? orderData.purchasePrices
      : orderData.savingPrices;
  const priceDescription =
    priceMode === "purchase"
      ? orderData.purchasePriceDescription
      : orderData.savingPriceDescription;

  const togglePrice = (index: number) => {
    setSelectedPriceIndex((previousIndex) =>
      index === previousIndex ? null : index,
    );
  };

  return (
    <div>
      <Navbar isBlurred isDetail isWhiteText />

      <main className="flex items-center justify-center overflow-hidden">
        <div
          className="h-screen w-2/3 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${orderData.poster})` }}
        />

        <section className="flex h-screen w-1/3 flex-col items-center justify-start overflow-scroll bg-cybertruckBlackBg px-5">
          <h1 className="w-full pt-20 text-2xl uppercase text-cybertruckGrayText">
            Reserve Now
          </h1>

          <div className="my-5 flex w-full items-start justify-center border-t-2 border-cybertruckGrayBorder">
            <button
              className={`w-1/2 border-t-4 px-5 py-4 text-left uppercase text-cybertruckGrayText ${
                priceMode === "purchase"
                  ? "border-cybertruckGrayBorder bg-cybertruckGrayBg"
                  : "border-cybertruckBlackBg"
              }`}
              onClick={() => setPriceMode("purchase")}
              type="button"
            >
              Purchase Price
            </button>
            <button
              className={`w-1/2 border-t-4 px-5 py-4 text-left uppercase text-cybertruckGrayText ${
                priceMode === "savings"
                  ? "border-cybertruckGrayBorder bg-cybertruckGrayBg"
                  : "border-cybertruckBlackBg"
              }`}
              onClick={() => setPriceMode("savings")}
              type="button"
            >
              Probable Savings*
            </button>
          </div>

          {prices.map((price, index) => (
            <div
              className={`relative my-2 w-full cursor-pointer p-3 pb-5 ${
                selectedSpecIndex === index ? "bg-cybertruckGrayBg" : ""
              }`}
              key={price.option}
              onClick={() => setSelectedSpecIndex(index)}
            >
              {selectedSpecIndex !== index && (
                <div className="absolute bottom-0 left-0 h-20 w-20 border-b border-l border-cybertruckGrayBorder" />
              )}
              <div className="flex items-center justify-between py-2 text-cybertruckGrayText">
                <p>{price.price}</p>
                <input
                  checked={index === selectedPriceIndex}
                  className="h-7 w-7 border border-cybertruckGrayBorder"
                  id={`cybertruck-price-${index}`}
                  name="price"
                  onChange={() => togglePrice(index)}
                  style={{
                    clipPath:
                      "polygon(0 0, 80% 0%, 100% 20%, 100% 80%, 100% 100%, 20% 100%, 0 100%, 0% 20%)",
                  }}
                  type="checkbox"
                  value={price.option}
                />
              </div>
              <p className="text-2xl text-cybertruckGrayText">{price.option}</p>
              <ul className="mt-4 list-['-'] px-2">
                {price.description.map((description) => (
                  <li
                    className="py-1 text-xs text-cybertruckGrayText"
                    key={description}
                  >
                    {description}
                  </li>
                ))}
              </ul>
              {index === orderData.purchasePrices.length - 1 && (
                <p className="px-2 text-[10px] text-cybertruckGrayText">
                  †With rollout subtracted.
                </p>
              )}
            </div>
          ))}

          <footer className="p-5 pt-0">
            <p className="mb-5 mt-2 w-full text-xs text-cybertruckGrayText">
              {priceDescription}
            </p>
            <p className="my-5 text-cybertruckGrayText">
              YOU WILL BE INVITED WHEN YOUR CYBERTRUCK IS READY TO BE CONFIGURED
            </p>
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <p className="pb-1 text-sm text-white">Due Today</p>
                <p className="pt-1 text-xs text-cybertruckGrayText">
                  Fully Refundable
                </p>
              </div>
              <p className="text-sm text-white">$250</p>
            </div>
            <button
              className="my-5 w-full border border-cybertruckGrayBorder py-2 text-center text-sm uppercase text-cybertruckGrayText hover:text-white"
              type="button"
            >
              Order With Card
            </button>
          </footer>
        </section>
      </main>
    </div>
  );
}
