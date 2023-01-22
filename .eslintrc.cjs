module.exports = {
  env: {
    node: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier"
  ],
  rules: {
    "strict": 0,
    "vue/require-default-prop": "off",
    "vue/no-unused-vars": "error"
  }
}
