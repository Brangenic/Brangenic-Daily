/**
 * Load the two brand typefaces from Google Fonts.
 * Loaded at module import so the families are registered before any
 * composition renders. Family names are re-exported for convenience,
 * though they also match the literal names used in theme.ts.
 */
import { loadFont as loadSerif } from "@remotion/google-fonts/InstrumentSerif";
import { loadFont as loadSans } from "@remotion/google-fonts/InstrumentSans";

// Instrument Serif ships weight 400 in normal + italic styles.
// Italic is used for emphasis words in the display headlines.
const serifNormal = loadSerif("normal", { weights: ["400"] });
loadSerif("italic", { weights: ["400"] });

// Instrument Sans is used for body/UI at a few weights.
const sans = loadSans("normal", { weights: ["400", "500", "600", "700"] });

export const serifFamily = serifNormal.fontFamily;
export const sansFamily = sans.fontFamily;
