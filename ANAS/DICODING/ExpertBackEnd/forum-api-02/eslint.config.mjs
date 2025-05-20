import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  {
    files: ["**/*.js"], 
    languageOptions: {sourceType: "commonjs"},
    rules: {
      "indent": ["error", 4],
      "quotes": ["error", "double"],
      "semi": ["error", "always"]
    }
  },
  {languageOptions: { globals: globals.node }},
]);