import type { Scopes } from "./_scopes.js";
import JsOption from "./option/JsOption.js";
import TsOption from "./option/TsOption.js";
import SvelteOption from "./option/SvelteOption.js";
import HtmlOption from "./option/HtmlOption.js";
import JestOption from "./option/JestOption.js";
import JsonOption from "./option/JsonOption.js";
import JsoncOption from "./option/JsoncOption.js";
import YmlOption from "./option/YmlOption.js";

export default {
  js: JsOption,
  ts: TsOption,
  svelte: SvelteOption,
  html: HtmlOption,
  jest: JestOption,
  json: JsonOption,
  jsonc: JsoncOption,
  yml: YmlOption,
} satisfies Record<
  Scopes
  ,
  unknown
>;
