import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";

export default function NotFoundPage() {
  return (
    <>
      <Navbar isBlurred />
      <main className="flex min-h-screen items-center justify-center bg-[#f4f4f4] px-6 text-center">
        <div className="max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5c5e62]">
            Page not found
          </p>
          <h1 className="mt-3 text-5xl font-semibold tracking-[-0.04em] text-[#171a20] sm:text-6xl">
            Let&apos;s get you back on the road.
          </h1>
          <p className="mt-5 leading-7 text-[#5c5e62]">
            This part of the experience is not available yet. Return home to
            explore vehicles, charging and energy.
          </p>
          <Link
            className="mt-8 inline-flex rounded bg-[#171a20] px-8 py-3 text-sm font-semibold text-white"
            to="/"
          >
            Return Home
          </Link>
        </div>
      </main>
    </>
  );
}
