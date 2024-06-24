import BaseOptions from "./base/BaseOptions.js";
import type TsOptions from "./TsOptions.js";

export default class JestOptions extends BaseOptions<
  "jest"
  ,
  & TsOptions["body"]["plugins"]
  & JestPlugin
  ,
  true
  ,
  & TsOptions["body"]["languageOptions"]["parserOptions"]
  ,
  Record<
    "jest/globals"
    ,
    true
  >
> {
  constructor(
    plugins: JestOptions["body"]["plugins"],
    parser: JestOptions["body"]["languageOptions"]["parser"],
    ...files: string[]
  ) {
    super(
      {
        name: "jimbolint/jest",
        files,
        plugins,
        linterOptions: {
          noInlineConfig: true,
          reportUnusedDisableDirectives: "error",
        },
        languageOptions: {
          globals: { "jest/globals": true },
          ecmaVersion: "latest",
          sourceType: "module",
          parser,
          parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            project: "tsconfig.json",
          },
        },
      },
    );
  }
}
