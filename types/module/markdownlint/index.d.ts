declare module "eslint-plugin-markdownlint" {
  export const configs: Record<"flat/recommended", { rules: IRule }>;
}

declare module "eslint-plugin-markdownlint/parser.js" {
  export const parseForESLint: (code: string)=> Record<
    | "ast"
    | "parserServices"
    | "visitorKeys"
    ,
    unknown
  >;
}
