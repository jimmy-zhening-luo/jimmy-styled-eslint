const scopes = [
  "js",
  "ts",
  "svelte",
  "html",
  "jest",
  "json",
  "jsonc",
  "yml",
] as const;

declare type Scopes = typeof scopes[number];

const defaultScope: Record<
  Scopes
  ,
  string[]
> = {
  js: ["*.config.js"],
  ts: [
    "src/**/*.ts",
    "*.config.ts",
  ],
  svelte: ["src/**/*.svelte"],
  html: ["src/**/*.html"],
  jest: ["src/**/*.spec.ts"],
  json: ["*.json"],
  jsonc: ["tsconfig.json"],
  yml: [".github/workflows/*.yml"],
};

import {
  JsOption,
  TsOption,
  SvelteOption,
  HtmlOption,
  JestOption,
  JsonOption,
  JsoncOption,
  YmlOption,
} from "./config/default/Options.js";

const OptionsConstructor = {
  js: JsOption,
  ts: TsOption,
  svelte: SvelteOption,
  html: HtmlOption,
  jest: JestOption,
  json: JsonOption,
  jsonc: JsoncOption,
  yml: YmlOption,
} as const satisfies Record<
  Scopes
  ,
  unknown
>;

import type Ruleset from "./config/default/ruleset/base/Ruleset.js";
import {
  JsRuleset,
  TsRuleset,
  SvelteRuleset,
  HtmlRuleset,
  JestRuleset,
  JsonRuleset,
  JsoncRuleset,
  YmlRuleset,
} from "./config/default/Rulesets.js";

const Rulesets: {
  [S in Scopes]: Ruleset<
    S
  >
} = {
  js: JsRuleset,
  ts: TsRuleset,
  svelte: SvelteRuleset,
  html: HtmlRuleset,
  jest: JestRuleset,
  json: JsonRuleset,
  jsonc: JsoncRuleset,
  yml: YmlRuleset,
};

import stylistic from "@stylistic/eslint-plugin";
import ts from "@typescript-eslint/eslint-plugin";
import svelte from "eslint-plugin-svelte";
import html from "@html-eslint/eslint-plugin";
import jest from "eslint-plugin-jest";
import jsonc from "eslint-plugin-jsonc";
import yml from "eslint-plugin-yml";

const Plugin = {
  js: { "@stylistic": stylistic },
  ts: {
    "@stylistic": stylistic,
    "@typescript-eslint": ts,
  },
  svelte: {
    "@stylistic": stylistic,
    "@typescript-eslint": ts,
    svelte,
  },
  html: { "@html-eslint": html },
  jest: {
    "@stylistic": stylistic,
    "@typescript-eslint": ts,
    jest,
  },
  json: { jsonc },
  jsonc: { jsonc },
  yml: { yml },
} satisfies Record<
  Scopes
  ,
  unknown
>;

import tsParser from "@typescript-eslint/parser";
import svelteParser from "svelte-eslint-parser";
import htmlParser from "@html-eslint/parser";
import jsoncParser from "jsonc-eslint-parser";
import ymlParser from "yaml-eslint-parser";

const Parser = {
  ts: tsParser,
  svelte: svelteParser,
  html: htmlParser,
  jest: tsParser,
  json: jsoncParser,
  jsonc: jsoncParser,
  yml: ymlParser,
} satisfies Partial<
  Record<
    Scopes
    ,
    unknown
  >
>;

declare type Options = {
  [S in Scopes]: InstanceType<
    typeof OptionsConstructor[S]
  >["body"]
};

export default function (
  scope: Partial<
    Record<
      Scopes
      ,
      string[]
    >
  > = {},
  override: Partial<
    Record<
      `override${
        Capitalize<Scopes>
      }`
      ,
      IRule
    >
  > = {},
): Array<
  & IRules
  & Options[Scopes]
  > {
  try {
    const options: Options = {
      js: new OptionsConstructor
        .js(
          Plugin
            .js,
          ...defaultScope
            .js,
          ...scope
            .js
            ?? [],
        )
        .body,
      ts: new OptionsConstructor
        .ts(
          Plugin
            .ts,
          Parser
            .ts,
          ...defaultScope
            .ts,
          ...scope
            .ts
            ?? [],
        )
        .body,
      svelte: new OptionsConstructor
        .svelte(
          Plugin
            .svelte,
          Parser
            .svelte,
          Parser
            .ts,
          ...defaultScope
            .svelte,
          ...scope
            .svelte
            ?? [],
        )
        .body,
      html: new OptionsConstructor
        .html(
          Plugin
            .html,
          Parser
            .html,
          ...defaultScope
            .html,
          ...scope
            .html
            ?? [],
        )
        .body,
      jest: new OptionsConstructor
        .jest(
          Plugin
            .jest,
          Parser
            .jest,
          ...defaultScope
            .jest,
          ...scope
            .jest
            ?? [],
        )
        .body,
      json: new OptionsConstructor
        .json(
          Plugin
            .json,
          Parser
            .json,
          ...defaultScope
            .json,
          ...scope
            .json
            ?? [],
        )
        .body,
      jsonc: new OptionsConstructor
        .jsonc(
          Plugin
            .jsonc,
          Parser
            .jsonc,
          ...defaultScope
            .jsonc,
          ...scope
            .jsonc
            ?? [],
        )
        .body,
      yml: new OptionsConstructor
        .yml(
          Plugin
            .yml,
          Parser
            .yml,
          ...defaultScope
            .yml,
          ...scope
            .yml
            ?? [],
        )
        .body,
    };
    const rulesets: typeof Rulesets = {
      js: Rulesets
        .js
        .override(
          override
            .overrideJs,
        ),
      ts: Rulesets
        .ts
        .override(
          override
            .overrideTs,
        ),
      svelte: Rulesets
        .svelte
        .override(
          override
            .overrideSvelte,
        ),
      html: Rulesets
        .html
        .override(
          override
            .overrideHtml,
        ),
      jest: Rulesets
        .jest
        .override(
          override
            .overrideJest,
        ),
      json: Rulesets
        .json
        .override(
          override
            .overrideJson,
        ),
      jsonc: Rulesets
        .jsonc
        .override(
          override
            .overrideJsonc,
        ),
      yml: Rulesets
        .yml
        .override(
          override
            .overrideYml,
        ),
    };

    return scopes
      .map(
        scope =>
          options[scope].files.length > 0
            ? rulesets[scope].flat.map(
              rules => {
                return {
                  rules,
                  ...options[scope],
                };
              },
            )
            : [],
      )
      .flat();
  }
  catch (e) {
    throw new Error(
      `linted(): Caught exception.`,
      { cause: e },
    );
  }
}
