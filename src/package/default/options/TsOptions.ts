import BaseOptions from "./base/BaseOptions.js";

export default class TsOptions extends BaseOptions<
  TsPlugin
  ,
  ""
  ,
  TsLanguage
> {
  constructor(
    plugins:
      & StylisticPlugin
      & TsPlugin,
    parser: TsParser,
    ...files: string[]
  ) {
    super(
      {
        files,
        plugins,
        linterOptions: {
          noInlineConfig: true,
          reportUnusedDisableDirectives: true,
        },
        languageOptions: {
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
