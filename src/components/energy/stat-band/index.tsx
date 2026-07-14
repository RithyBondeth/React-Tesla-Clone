import type { EnergyStatBandProps } from "./props";

export default function EnergyStatBand({ stats }: EnergyStatBandProps) {
  return (
    <dl className="grid divide-y divide-black/10 bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
      {stats.map((stat) => (
        <div className="px-6 py-10 text-center" key={stat.detail}>
          <dt className="text-4xl font-semibold tracking-[-0.04em] text-[#171a20] sm:text-5xl">
            {stat.value}
          </dt>
          <dd className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#5c5e62]">
            {stat.detail}
          </dd>
        </div>
      ))}
    </dl>
  );
}
