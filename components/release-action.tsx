"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { isReleaseActionLive, type Release } from "@/data/releases";

type ReleaseActionProps = {
  release: Pick<Release, "listenUrl" | "preorderOpensAt" | "slug" | "status">;
  placement: "home" | "release";
};

function usePreorderIsLive(release: ReleaseActionProps["release"]) {
  const [isLive, setIsLive] = useState(release.status === "available");

  useEffect(() => {
    if (release.status === "available") {
      setIsLive(true);
      return;
    }

    if (!release.preorderOpensAt) return;

    const activationTime = Date.parse(release.preorderOpensAt);
    if (Number.isNaN(activationTime)) return;

    const updateState = () => {
      if (isReleaseActionLive(release)) {
        setIsLive(true);
        return undefined;
      }

      const remaining = activationTime - Date.now();
      return window.setTimeout(updateState, Math.min(remaining, 2_147_483_647));
    };

    const timer = updateState();
    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [release.preorderOpensAt, release.status]);

  return isLive;
}

export function ReleaseAction({ release, placement }: ReleaseActionProps) {
  const isLive = usePreorderIsLive(release);
  const className = placement === "release"
    ? "button button--light release-action"
    : "button button--light";

  if (isLive && release.listenUrl) {
    const label = release.status === "available"
      ? placement === "release" ? "Listen / buy" : "Listen now"
      : placement === "release" ? "Pre-order / pre-save" : "Pre-order now";

    return (
      <a className={className} href={release.listenUrl} target="_blank" rel="noreferrer">
        {label} <span aria-hidden="true">↗</span>
      </a>
    );
  }

  if (placement === "home") {
    return (
      <Link className={className} href={`/listen/${release.slug}`}>
        Release details <span aria-hidden="true">↗</span>
      </Link>
    );
  }

  return (
    <a className={className} href="#release-newsletter">
      Follow the release
    </a>
  );
}
