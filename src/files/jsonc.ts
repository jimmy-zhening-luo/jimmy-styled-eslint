export default [
  "*.jsonc",
  "tsconfig.json",
  "{src, tests, static, typings}/**/*.jsonc",
  "{src, tests, static, typings}/**/tsconfig.json",
] as const;
