export const PETAL = "Discovery-Gold";
export const INVARIANT = "DISCOVERY_STATIONARY";
export function verify(input) {
  if (!input || typeof input !== "object") {
    return {
      pass: false,
      stationary: false,
      signal: "discovery-gold:INVALID_INPUT",
      reason: "input must be an object"
    };
  }
  const stationary =
    input.repo === "Riverbraid-Discovery-Gold" &&
    input.petal === "Discovery-Gold" &&
    input.ring === 1 &&
    input.invariant === "DISCOVERY_STATIONARY";
  return {
    pass: true,
    stationary,
    signal: stationary ? "discovery-gold:STATIONARY" : "discovery-gold:DRIFT",
    reason: stationary
      ? "Stationary fields match declared petal identity"
      : "One or more stationary fields drift from declaration"
  };
}
