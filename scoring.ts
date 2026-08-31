import type { Show } from "./types";

const weights = {
  artistMomentum: 0.25,
  venueQuality: 0.15,
  rarity: 0.15,
  localBuzz: 0.15,
  value: 0.10,
  significance: 0.10,
  proximity: 0.05,
  lineup: 0.05,
};

export function showScore(show: Show) {
  const total = Object.entries(weights).reduce((sum, [key, weight]) => {
    const value = show.signals[key as keyof Show["signals"]];
    return sum + value * weight;
  }, 0);
  return Math.round(total);
}

export function isHiddenGem(show: Show) {
  const score = showScore(show);
  return (show.venueSize === "Tiny" || show.venueSize === "Club") && score >= 82 && show.signals.artistMomentum < 92;
}
