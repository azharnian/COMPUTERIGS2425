import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"], 
    languageOptions: {sourceType: "commonjs"},
    rules: {
      "no-unused-vars": "warn",
      "indent": ["error", 4],
      "quotes": ["error", "double"],
      "semi": ["error", "always"]
    }
  },
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
];