import { useEffect, useRef, useState } from "react";

import type { ResponsiveVideoProps } from "./props";

export default function ResponsiveVideo({
  className = "",
  desktopPoster,
  desktopSrc,
  eager = false,
  label,
  mediaClassName = "object-cover object-center",
  mobilePoster,
  mobileSrc,
}: ResponsiveVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(eager);
  const [shouldLoad, setShouldLoad] = useState(eager);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || eager || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting) {
          setShouldLoad(true);
        }
      },
      { rootMargin: "360px 0px", threshold: 0.05 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [eager]);

  useEffect(() => {
    if (shouldLoad) {
      videoRef.current?.load();
    }
  }, [shouldLoad]);

  useEffect(() => {
    const video = videoRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!video || !shouldLoad) {
      return;
    }

    if (isVisible && !isUserPaused && !prefersReducedMotion) {
      void video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  }, [isUserPaused, isVisible, shouldLoad]);

  const togglePlayback = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (!shouldLoad) {
      setShouldLoad(true);
      setIsUserPaused(false);
      return;
    }

    if (video.paused) {
      setIsUserPaused(false);
      void video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      setIsUserPaused(true);
      video.pause();
    }
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      <picture>
        <source media="(max-width: 767px)" srcSet={mobilePoster} />
        <img
          alt=""
          className={`absolute inset-0 h-full w-full ${mediaClassName}`}
          decoding="async"
          height="1080"
          loading={eager ? "eager" : "lazy"}
          src={desktopPoster}
          width="1920"
        />
      </picture>

      <video
        aria-label={label}
        autoPlay={eager}
        className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${mediaClassName} ${
          hasLoaded ? "opacity-100" : "opacity-0"
        }`}
        loop
        muted
        onLoadedData={() => setHasLoaded(true)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        playsInline
        preload={shouldLoad ? "auto" : "none"}
        ref={videoRef}
      >
        {shouldLoad && (
          <>
            <source media="(max-width: 767px)" src={mobileSrc} />
            <source src={desktopSrc} />
          </>
        )}
      </video>

      <button
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className="absolute bottom-5 right-5 z-20 grid h-11 w-11 place-items-center rounded-full bg-black/45 text-white shadow-lg backdrop-blur-md transition hover:bg-black/65"
        onClick={togglePlayback}
        type="button"
      >
        {isPlaying ? (
          <span aria-hidden="true" className="flex gap-1.5">
            <span className="h-4 w-0.5 rounded bg-current" />
            <span className="h-4 w-0.5 rounded bg-current" />
          </span>
        ) : (
          <span
            aria-hidden="true"
            className="ml-0.5 block h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-current"
          />
        )}
      </button>
    </div>
  );
}
