import { Rule } from "@eslinted/core";
import {
  ERROR,
  OFF,
  BOTH,
} from "../state.js";
import { EnableX } from "../id.js";

const SvelteEnableX = new Rule(
  EnableX,
  {

    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
    "svelte/no-inner-declarations": [
      ERROR,
      BOTH,
    ], /* Same options as in JsEnable */
    "svelte/no-trailing-spaces": OFF, /* Only applies to HTML comments, which I don't intend to use: http://sveltejs.github.io/eslint-plugin-svelte/rules/no-trailing-spaces/ */
  },
);

export default SvelteEnableX;
