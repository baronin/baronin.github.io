module.exports = {
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
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
