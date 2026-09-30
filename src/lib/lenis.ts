import Lenis from "lenis";

export function createLenis() {
  return new Lenis({
    lerp: 0.08,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
  });
}