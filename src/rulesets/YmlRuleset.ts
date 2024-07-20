import { Ruleset } from "@eslinted/core";
import YmlEnableX from "./rules/yml/YmlEnableX.js";
import YmlEnable from "./rules/yml/YmlEnable.js";

const YmlRuleset = new Ruleset(
  "yml",
  YmlEnableX,
  YmlEnable,
);

export default YmlRuleset;
