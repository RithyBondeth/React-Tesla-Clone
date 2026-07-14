import { Link } from "react-router-dom";

const FOOTER_LINKS = [
  { label: "Privacy & Legal", url: "https://www.tesla.com/legal" },
  { label: "Vehicle Recalls", url: "https://www.tesla.com/vin-recall-search" },
  { label: "Contact", url: "https://www.tesla.com/contact" },
  { label: "News", url: "https://www.tesla.com/blog" },
  { label: "Get Updates", url: "https://www.tesla.com/updates" },
  { label: "Locations", url: "https://www.tesla.com/findus" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#f4f4f4] px-6 py-12 text-[#5c5e62]">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mx-auto max-w-3xl text-xs leading-5">
          This independent frontend project is inspired by Tesla’s public design
          language and is not affiliated with or endorsed by Tesla, Inc. Offers,
          availability and specifications may change.
        </p>
        <nav
          aria-label="Footer navigation"
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-semibold"
        >
          <Link className="text-[#171a20]" to="/">
            Tesla Clone © 2026
          </Link>
          {FOOTER_LINKS.map((link) => (
            <a
              href={link.url}
              key={link.label}
              rel="noreferrer"
              target="_blank"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
