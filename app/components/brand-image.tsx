"use client";

import { useState } from "react";

type BrandImageProps = { className?: string; alt?: string };

export function BrandImage({ className = "", alt = "Khadijah personal logo" }: BrandImageProps) {
  const [available, setAvailable] = useState(true);
  if (!available) return null;

  return (
    // Use the supplied artwork as-is, preserving its native aspect ratio.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/Logo.png"
      alt={alt}
      className={`brand-image ${className}`}
      onError={() => setAvailable(false)}
    />
  );
}
