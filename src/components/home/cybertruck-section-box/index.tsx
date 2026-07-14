import { Link } from "react-router-dom";

import type { CybertruckSectionBoxProps } from "./props";

export default function CybertruckSectionBox({
  cybertruck,
}: CybertruckSectionBoxProps) {
  return (
    <section
      className="flex h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${cybertruck.poster})` }}
    >
      <div className="flex h-[80%] w-[50%] flex-col justify-between">
        <img
          alt={cybertruck.title.text}
          className="h-20"
          src={cybertruck.title.image}
        />

        <div className="flex items-center justify-between text-center">
          <Link
            className="w-[49%] border-t-4 border-gray-700 bg-black py-3 text-sm font-bold uppercase text-gray-700 opacity-80 hover:text-gray-500 hover:opacity-70"
            to={cybertruck.buttons[0].link}
          >
            {cybertruck.buttons[0].label}
          </Link>
          <Link
            className="w-[49%] border border-gray-700 bg-black py-3 text-sm font-bold uppercase text-gray-700 opacity-80 hover:text-gray-500 hover:opacity-70"
            to={cybertruck.buttons[1].link}
          >
            {cybertruck.buttons[1].label}
          </Link>
        </div>
      </div>
    </section>
  );
}
