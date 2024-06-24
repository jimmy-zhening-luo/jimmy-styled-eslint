import Rules from "../Rules.js";
import {
  ERROR,

  NEVER,
  ALWAYS,
} from "../State.js";

const YmlEnableExt = new Rules(
  "enable-ext",
  {

    // Extension - ENABLE
    // https://ota-meshi.github.io/eslint-plugin-yml/rules/#extension-rules
    "yml/flow-mapping-curly-newline": [
      ERROR,
      {
        multiline: true,
        minProperties: 2,
        consistent: false,
      },
    ],
    "yml/flow-mapping-curly-spacing": [
      ERROR,
      ALWAYS,
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    "yml/flow-sequence-bracket-newline": [
      ERROR,
      { // yml documentation incorrect: https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-newline.html
        multiline: true,
        minItems: null,
      },
    ],
    "yml/flow-sequence-bracket-spacing": [
      ERROR,
      NEVER,
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],
    "yml/key-spacing": [
      ERROR,
      {
        beforeColon: false,
        afterColon: true,
        mode: "strict",
      },
    ],
    "yml/no-irregular-whitespace": [
      ERROR,
      {
        skipQuotedScalars: true,
        skipComments: false,
      },
    ],
    "yml/no-multiple-empty-lines": [
      ERROR,
      { // yml documentation bug "nothing" under options but inherits: https://ota-meshi.github.io/eslint-plugin-yml/rules/no-multiple-empty-lines.html
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    "yml/spaced-comment": [
      ERROR,
      ALWAYS,
    ],
  },
);

export default YmlEnableExt;
