/**
 * Number/currency formatting helpers.
 * Uses a fixed en-US grouping so renders are deterministic regardless of
 * the host locale.
 */

export const withCommas = (n: number): string =>
  Math.round(n).toLocaleString("en-US");

/** Jamaican-dollar style used throughout the video: "J$1,734,000". */
export const jmd = (n: number): string => `J$${withCommas(n)}`;
