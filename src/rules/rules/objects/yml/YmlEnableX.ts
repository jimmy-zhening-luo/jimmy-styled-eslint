import type { Input } from "@eslinted/core";
import { ERROR } from "../severity.js";
import {
  NEVER,
  ALWAYS,
  STRICT,
} from "../state.js";
import { EnableX } from "../id.js";

export default [
  EnableX,
  {

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
      {
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
        mode: STRICT,
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
      {
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
] as const satisfies Input.Rules.Entry;
