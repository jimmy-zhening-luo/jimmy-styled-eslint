import Rules from "../Rules.js";
import { OFF } from "../State.js";

const SvelteDisableConflictJs = new Rules(
  "disable-conflict-js",
  {

    // Recommended by Svelte base config:
    // http://github.com/sveltejs/eslint-plugin-svelte/tree/main/src/configs/flat
    "no-inner-declarations": OFF, // ESLint Core
    "no-self-assign": OFF, // ESLint Core
  },
);

export default SvelteDisableConflictJs;
