module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'standard',
        'plugin:prettier/recommended',
        '.eslintrc-auto-import.json'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
        'vue/multi-word-component-names': 'off' // 关闭名称校验
    }
}
