import { Link } from "react-router-dom";

import type { SectionBoxProps } from "./props";

export default function SectionBox({ vehicle }: SectionBoxProps) {
  return (
    <section
      className="flex h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${vehicle.poster})` }}
    >
      <div className="flex h-[75%] w-[50%] flex-col justify-between">
        <div
          className={`text-center ${vehicle.hasDarkText ? "text-black" : "text-white"}`}
        >
          <h2 className="text-4xl">{vehicle.title}</h2>
          <p className="mt-2 text-lg">{vehicle.subtitle}</p>
          <p className="mt-2 text-sm">{vehicle.description}</p>
        </div>

        <div className="flex items-center justify-between text-center">
          <Link
            className="w-[49%] rounded-md bg-white py-2 text-black"
            to={vehicle.buttons[0].link}
          >
            {vehicle.buttons[0].label}
          </Link>
          <Link
            className="w-[49%] rounded-md bg-black py-2 text-white"
            to={vehicle.buttons[1].link}
          >
            {vehicle.buttons[1].label}
          </Link>
        </div>
      </div>
    </section>
  );
}
