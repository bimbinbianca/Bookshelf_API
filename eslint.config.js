import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // WAJIB agar 'process' dikenali
      },
    },
    rules: {
      "no-unused-vars": "warn", // Supaya variabel filtermu tidak jadi error merah
      "no-console": "off",
    },
  },
];
