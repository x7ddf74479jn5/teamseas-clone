module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["node_modules", ".turbo", "dist", "coverage"],
  plugins: [
    "import",
    "simple-import-sort",
    "react-hooks",
    "sort-destructure-keys",
  ],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  rules: {
    "no-console": [
      "error",
      {
        allow: ["warn", "info", "error"],
      },
    ],
    "no-restricted-syntax": [
      "error",
      {
        selector: "TSEnumDeclaration",
        message: "Don't declare enums",
      },
    ],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "func-style": ["error", "expression"],
    "react/display-name": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    "react/prop-types": "off",
    "import/newline-after-import": "error",
    "import/no-default-export": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: ["typeAlias", "typeParameter"],
        format: ["PascalCase"],
      },
      {
        selector: ["method"],
        format: ["camelCase"],
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["no", "is", "has", "should"],
        filter: {
          regex: "^_",
          match: false,
        },
      },
    ],
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
  overrides: [
    {
      files: ["./src/App.tsx", "./vite.config.ts"],
      rules: { "import/no-default-export": "off" },
    },
    {
      files: ["./src/vite-env.d.ts"],
      rules: { "@typescript-eslint/naming-convention": "off" },
    },
  ],
};
