import { useEffect, useRef, useState } from "react";

import type { DeferredVideoProps } from "./props";

export default function DeferredVideo({
  className,
  poster,
  src,
}: DeferredVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !("IntersectionObserver" in window)) {
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
      { rootMargin: "320px 0px", threshold: 0.05 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!video || !shouldLoad || prefersReducedMotion) {
      return;
    }

    if (isVisible) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [isVisible, shouldLoad]);

  return (
    <video
      aria-hidden="true"
      autoPlay={isVisible && shouldLoad}
      className={className}
      loop
      muted
      playsInline
      poster={poster}
      preload={shouldLoad ? "metadata" : "none"}
      ref={videoRef}
      src={shouldLoad ? src : undefined}
    />
  );
}
