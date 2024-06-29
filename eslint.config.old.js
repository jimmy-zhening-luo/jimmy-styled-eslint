import stylistic from "@stylistic/eslint-plugin";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import jest from "eslint-plugin-jest";
import jsonc from "eslint-plugin-jsonc";
import jsonParser from "jsonc-eslint-parser";
import yml from "eslint-plugin-yml";
import ymlParser from "yaml-eslint-parser";
import Rulesets from "./project/Rulesets.js";

const FILES = {
  js: [
    "eslint.config.js",
    "project/**/*.js",
  ],
  ts: ["src/**/*.ts"],
  jest: ["src/**/*.spec.ts"],
  jsonc: ["tsconfig.json"],
  json: ["package.json"],
  yml: [],
};
const RULESET = {
  js: Rulesets.JsRuleset,
  ts: Rulesets.TsRuleset,
  jest: Rulesets.JestRuleset,
  jsonc: Rulesets.JsoncRuleset,
  json: Rulesets.JsonRuleset,
  yml: Rulesets.YmlRuleset,
};
const OPTIONS = {
  name: {
    js: "js",
    ts: "ts",
    jest: "jest",
    jsonc: "jsonc",
    json: "json",
    yml: "yml",
  },
  plugins: {
    js: { "@stylistic": stylistic },
    get ts() {
      return {
        ...OPTIONS.plugins.js,
        "@typescript-eslint": ts,
      };
    },
    get jest() {
      return {
        ...OPTIONS.plugins.ts,
        jest,
      };
    },
    jsonc: { jsonc },
    get json() {
      return OPTIONS
        .plugins
        .jsonc;
    },
    yml: { yml },
  },
  languageOptions: {
    js: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    get ts() {
      return {
        ...OPTIONS.languageOptions.js,
        parser: tsParser,
        parserOptions: {
          ...OPTIONS.languageOptions.js,
          project: "tsconfig.json",
        },
      };
    },
    get jest() {
      return {
        ...OPTIONS.languageOptions.ts,
        globals: { "jest/globals": true },
      };
    },
    jsonc: { parser: jsonParser },
    get json() {
      return OPTIONS
        .languageOptions
        .jsonc;
    },
    yml: { parser: ymlParser },
  },
  linterOptions: {
    base: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: "error",
    },
    get js() {
      return OPTIONS
        .linterOptions
        .base;
    },
    get ts() {
      return OPTIONS
        .linterOptions
        .base;
    },
    get jest() {
      return OPTIONS
        .linterOptions
        .base;
    },
    get jsonc() {
      return OPTIONS
        .linterOptions
        .base;
    },
    get json() {
      return OPTIONS
        .linterOptions
        .base;
    },
    get yml() {
      return OPTIONS
        .linterOptions
        .base;
    },
  },
  processor: {
    base: {},
    get js() {
      return OPTIONS
        .processor
        .base;
    },
    get ts() {
      return OPTIONS
        .processor
        .base;
    },
    get jest() {
      return OPTIONS
        .processor
        .base;
    },
    get jsonc() {
      return OPTIONS
        .processor
        .base;
    },
    get json() {
      return OPTIONS
        .processor
        .base;
    },
    get yml() {
      return OPTIONS
        .processor
        .base;
    },
  },
};

function flat(
  language,
) {
  return RULESET[
    language
  ]
    .map(
      rules => {
        return {
          rules,
          files: FILES[
            language
          ],
          plugins: OPTIONS
            .plugins[
              language
            ],
          languageOptions: OPTIONS
            .languageOptions[
              language
            ],
          linterOptions: OPTIONS
            .linterOptions[
              language
            ],
          ...OPTIONS
            .processor[
              language
            ],
        };
      },
    );
}

const flatConfig = [
  "js",
  "ts",
  "jest",
  "jsonc",
  "json",
  "yml",
]
  .filter(
    language =>
      language in FILES
      && FILES[
        language
      ]
        .length > 0,
  )
  .map(
    language =>
      flat(
        language,
      ),
  )
  .flat();

export default flatConfig;
