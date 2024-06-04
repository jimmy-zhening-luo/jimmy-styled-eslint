# [@jimbojet/lint](https://npmjs.com/package/@jimbojet/lint)

Zero-config [**ESLint**](https://eslint.org/) flat config factory for (strict, agglutinative) entire-stack formatting and linting: TypeScript, JavaScript, Svelte, HTML, (Tailwind) CSS, Jest, JSON/5/C, and sadly YAML.

## Languages

### Web

- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript):** [`eslint`](https://eslint.org) + [`@stylistic`](https://eslint.style)

- **[TypeScript](https://typescriptlang.org):** + [`@typescript-eslint`](https://typescript-eslint.io/)

- **[Svelte](https://svelte.dev):** + [`eslint-plugin-svelte`](https://sveltejs.github.io/eslint-plugin-svelte/)

### Data

- **[JSON](https://json.org), [JSONC](https://code.visualstudio.com/docs/languages/json#_json-with-comments), [JSON5](https://json5.org/):** [`eslint-plugin-jsonc`](https://ota-meshi.github.io/eslint-plugin-jsonc/)

- **[YAML](https://redhat.com/en/topics/automation/what-is-yaml):** [`eslint-plugin-yml`](https://ota-meshi.github.io/eslint-plugin-yml/)

<br />

*See language support **[roadmap](#roadmap).***

## Features

- **One-Arugment API:**

  - File scope per-language
  - *Optional:* rule override per-language

- **Two-Statement `eslint.config.js`:** *e.g.*

  ```javascript
  import Lint from "@jimbojet/lint";

  export default [
    ...new Lint(
      {
        js: ["*.config.js"],
        ts: ["*.config.ts", "src/**/*.ts"],
        svelte: ["src/**/*.svelte"],
      },
    )
      .configs,
  ];
  ```

- **Full *Per-Language* Control via Overrides:**

  ```javascript
      // ...
      {
        overrideTs: {
          // turns it off for
          // TypeScript (including in Svelte),
          // but NOT for JavaScript!
          "no-unused-vars": "off",
        },
        overrideSvelte: {
          // turns it back on for
          // .svelte TypeScript blocks,
          // but NEITHER .ts
          // NOR JavaScript!
          "no-unused-vars": "error",
        },
      },
    )
      .configs,
  ];
  ```

- **Zero-Dependency:** No need to install 17 plugins and 12 parsers. Each language's latest (and best) plugin and parser are bundled and optimally configured to work together.

- **Zero-Config:** No need to remember each plugin's `parserOptions` fields. You won't have to *this* just to enable Svelte linting:

  ```javascript
    // Lint Svelte containing TypeScript
    plugins: {
      "@stylistic": stylistic,
      "@typescript-eslint": ts,
      svelte,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
        project: "tsconfig.json",
        extraFileExtensions: [".svelte"],
      },
    },
    processor: "svelte/svelte"
  ```

## Install

1. Install [`eslint`](https://npmjs.com/package/eslint) and [`@jimbojet/lint`](https://npmjs.com/package/@jimbojet/lint)

    ```bash
    npm i -D eslint @jimbojet/lint
    ```

1. Create `eslint.config.js` in your root directory.

1. In `eslint.config.js`:
    - Import `@jimbojet/lint`.

        ```javascript
        import Lint from "@jimbojet/lint";
        ```

    - Create a new instance of `@jimbojet/lint`, with arguments:

        ```javascript
        new Lint(
          // files
          {
            js: [], // array of glob patterns
            ts: [],
            svelte: [],
            // ...other languages
          },
          // optional: overrides
          {
            overrideJs: {
              // same exact rule schema as ESLint
            },
            // valid keys: override<Language>
            // where Language is any key
            // in the first argument
          },
        )
        ```

    - Export member `configs` from the new instance of `@jimbojet/lint`, which is ESLint's flat config. *e.g.*

        ```javascript
        import Lint from "@jimbojet/lint";

        export default [
          ...new Lint(
            {
              js: ["*.config.js"],
              ts: ["src/**/*.ts"],
              svelte: ["src/**/*.svelte"],
            },
          )
            .configs,
        ];
        ```

## Rule Logic (Advanced)

### Language Mapping

Description TBD

### Overrides

Description TBD

### Example

#### TypeScript

- TypeScript files are subject to both ESLint and TypeScript rules.

- TypeScript overrides apply to TypeScript files but not JavaScript files.

#### Svelte

Svelte files contain TypeScript and style blocks, while also containing native Svelte tags whose attributes may contain TypeScript or style.

##### TypeScript blocks inside `.svelte` files

- TypeScript rules with appropriate Svelte overrides to deal with TypeScript semantics that only exist in Svelte land.

- Any TypeScript overrides of TypeScript or base ESLint rules UNLESS those rules are incompatible with Svelte, in which case this since otherwise they would crash ESLint.

- Any Svelte overrides of TypeScript or base ESLint rules.

##### Svelte tags (possibly wiht attributes containing TypeScript)

- Svelte rules.

- Same TypeScript logic as for TypeScript blocks, but the Svelte parser has some additional smarts when producing the AST, so only certain TypeScript rules will apply (I have no idea how this works, so take it up with the Svelte parser team).

- Any Svelte overrides (including of TypeScript or base ESLint rules).

## Roadmap

### v11

#### HTML

- [HTML](https://html-eslint.org/)

- [HTML Script Block](https://github.com/BenoitZugmeyer/eslint-plugin-html)

- HTML Style Block?

#### Tailwind PostCSS

- [Tailwind](https://github.com/francoismassart/eslint-plugin-tailwindcss)

- [CSS](https://ota-meshi.github.io/eslint-plugin-css/)

#### Jest

- [Jest](https://github.com/jest-community/eslint-plugin-jest)

- [Jest (style)](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)

#### JSON Custom Schema Validation

- [JSON Custom Schema Validation](https://github.com/ota-meshi/eslint-plugin-json-schema-validator)
