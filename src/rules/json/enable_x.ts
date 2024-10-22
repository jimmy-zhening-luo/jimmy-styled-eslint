import { enable_x, level, state } from "../../_strings";

const
{ ERROR } = level,
{
  Never,
  Always,
  Strict,
  Last,
  Double,
} = state;

export default [
  enable_x,
  {
    // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#extension-rules
    "jsonc/array-bracket-newline": [
      ERROR,
      {
        multiline: true,
        minItems: null,
      },
    ] /* MUST match ../js/stylistic.ts */,
    "jsonc/array-bracket-spacing": [
      ERROR,
      Never,
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ] /* MUST match ../js/stylistic.ts */,
    "jsonc/array-element-newline": [
      ERROR,
      {
        ArrayExpression: {
          consistent: true,
          multiline: true,
          minItems: 4,
        },
        ArrayPattern: {
          consistent: true,
          multiline: true,
          minItems: 4,
        },
        JSONArrayExpression: {
          consistent: true,
          multiline: true,
          minItems: 4,
        },
      },
    ] /* MUST match (+JSONArrayExpression)../js/stylistic.ts */,
    "jsonc/comma-dangle": [ERROR, Never] /* trailing commas are NOT allowed in JSON */,
    "jsonc/comma-style": [ERROR, Last],
    "jsonc/indent": [ERROR, 2],
    "jsonc/key-spacing": [
      ERROR,
      {
        beforeColon: false,
        afterColon: true,
        mode: Strict,
      },
    ] /* MUST match ../js/stylistic.ts */,
    "jsonc/no-dupe-keys": ERROR,
    "jsonc/no-floating-decimal": ERROR,
    "jsonc/no-irregular-whitespace": [
      ERROR,
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
        skipJSXText: true,
      },
    ],
    "jsonc/no-multi-str": ERROR,
    "jsonc/no-octal-escape": ERROR,
    "jsonc/no-octal": ERROR,
    "jsonc/no-sparse-arrays": ERROR,
    "jsonc/no-useless-escape": ERROR,
    "jsonc/object-curly-newline": [
      ERROR,
      {
        consistent: true,
        multiline: true,
        minProperties: 4,
      },
    ] /* MUST match CHILD of ../js/stylistic.ts */,
    "jsonc/object-curly-spacing": [
      ERROR,
      Always,
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ] /* MUST match ../js/stylistic.ts */,
    "jsonc/object-property-newline": [
      ERROR,
      {
        allowAllPropertiesOnSameLine: true,
      },
    ] /* MUST match ../js/stylistic.ts */,
    "jsonc/quote-props": [ERROR, Always],
    "jsonc/quotes": [
      ERROR,
      Double,
      {
        avoidEscape: false,
      },
    ],
    "jsonc/space-unary-ops": ERROR,
  },
] as const;
