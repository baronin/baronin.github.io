module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    "prettier"
  ],
  rules: {
    "vue/require-default-prop": "off",
    'vue/no-unused-vars': 'error'
  }
}