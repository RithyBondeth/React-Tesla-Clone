export default function AnnouncementBar() {
  return (
    <aside className="fixed inset-x-0 top-0 z-[60] flex h-12 items-center justify-center border-b border-black/10 bg-white px-12 text-center text-xs leading-4 text-[#171a20] sm:text-sm">
      <p>
        <span className="sm:hidden">
          Get 2,000 free Supercharging miles with an eligible trade-in.
        </span>
        <span className="hidden sm:inline">
          Trade in an eligible gas or hybrid vehicle and receive 2,000 miles of
          free Supercharging.
        </span>
        <a
          className="ml-2 whitespace-nowrap font-semibold underline underline-offset-4"
          href="https://www.tesla.com/support/trade-ins"
          rel="noreferrer"
          target="_blank"
        >
          Learn More
        </a>
      </p>
    </aside>
  );
}
