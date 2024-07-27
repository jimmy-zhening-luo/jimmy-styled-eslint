import type RuleEntry from "./entries/entry.js";
import Recommended from "./entries/html/Recommended.js";
import Enable from "./entries/html/Enable.js";

export default [
  Recommended,
  Enable,
] as const satisfies readonly RuleEntry[];
