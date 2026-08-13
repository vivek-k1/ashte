"use client";

import { useState } from "react";
import { Swords } from "lucide-react";

/**
 * Loads an image from /public/pics. If the file is missing, renders a
 * heritage-styled placeholder so the layout never breaks — drop the real
 * photos into public/pics/ and they appear automatically.
 */
export default function AkhadaImage({
  src,
  alt,
  className = "",
  imgClassName = "object-cover",
  label,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  label?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal-800 via-crimson-900/60 to-charcoal-900 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 texture-grain" />
        <div className="relative flex flex-col items-center gap-2 p-4 text-center">
          <Swords className="h-10 w-10 text-saffron-600/70" strokeWidth={1.5} />
          <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-parchment-500">
            {label ?? alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        className={`h-full w-full ${imgClassName}`}
      />
    </div>
  );
}
