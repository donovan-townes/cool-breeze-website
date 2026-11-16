"use client";

import { useEffect, useState } from "react";
import { FallingLeaves } from "falling-leaves/react";

export function SeasonalFallingLeaves() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 900px)");
    const updateCount = () => setCount(desktop.matches ? 18 : 10);

    updateCount();
    desktop.addEventListener("change", updateCount);
    return () => desktop.removeEventListener("change", updateCount);
  }, []);

  return (
    <FallingLeaves
      fullScreen
      count={count}
      size={[12, 26]}
      speed={[0.35, 0.8]}
      wind={[-0.35, 0.55]}
      sway={[0.25, 1]}
      rotationSpeed={[-0.8, 0.8]}
      colors={["#ae4126", "#c77935", "#e6a84f", "#793819", "#eed0b2"]}
      shapes={["maple", "oak", "birch"]}
      opacity={0.34}
      zIndex={4}
      respectReducedMotion
    />
  );
}
