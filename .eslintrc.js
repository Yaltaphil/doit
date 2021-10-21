module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        // parser: '@babel/eslint-parser',
        // requireConfigFile: false,
    },
    extends: [
        'plugin:nuxt/recommended',
        '@nuxtjs/eslint-config-typescript',
        '@nuxtjs',
        'prettier',
    ],
    plugins: [],
    // add your custom rules here
    rules: {},
}
