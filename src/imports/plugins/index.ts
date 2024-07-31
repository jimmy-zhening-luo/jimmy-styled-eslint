import type { Boundary } from "@eslinted/core";
import stylistic from "@stylistic/eslint-plugin";
import typescript_eslint from "@typescript-eslint/eslint-plugin";
import svelte from "eslint-plugin-svelte";
import mocha from "eslint-plugin-mocha";
import html_eslint from "@html-eslint/eslint-plugin";
import jsonc from "eslint-plugin-jsonc";
import yml from "eslint-plugin-yml";
import markdownlint from "eslint-plugin-markdownlint";

export default {
  "@stylistic": stylistic,
  "@typescript-eslint": typescript_eslint as unknown as { configs: unknown },
  svelte,
  mocha,
  "@html-eslint": html_eslint,
  jsonc,
  yml,
  markdownlint,
} as const satisfies Boundary.Input.Plugins;
