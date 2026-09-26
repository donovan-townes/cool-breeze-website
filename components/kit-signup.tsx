"use client";

import { useEffect, useRef } from "react";

type KitSignupProps = {
  uid: string;
  fallbackUrl: string;
};

export function KitSignup({ uid, fallbackUrl }: KitSignupProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.replaceChildren();
    const script = document.createElement("script");
    script.async = true;
    script.dataset.uid = uid;
    script.src = `https://cool-breeze.kit.com/${uid}/index.js`;
    container.appendChild(script);

    return () => container.replaceChildren();
  }, [uid]);

  return (
    <div className="kit-embed" ref={containerRef}>
      <a className="text-link" href={fallbackUrl} target="_blank" rel="noreferrer">
        Open the newsletter signup ↗
      </a>
    </div>
  );
}
