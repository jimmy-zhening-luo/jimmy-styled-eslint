declare module "eslint-plugin-markdownlint" {
  export const configs: Record<
    "flat/recommended"
    ,
    Record<
      "rules"
      ,
      IRule
    >
  >;
}

declare module "eslint-plugin-markdownlint/parser" {
  export const parseForESLint: (
    code: string
  )=> {
    ast: unknown;
    parserServices: unknown;
    visitorKeys: unknown;
  };
}
