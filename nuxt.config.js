export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Doit',
        meta: [
            // { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'msapplication-TileColor', content: '#da532c' },
            { name: 'theme-color', content: '#ffffff' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '/favicon-32x32.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '/favicon-16x16.png',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: '/apple-touch-icon.png',
            },
            {
                rel: 'mask-icon',
                href: '/safari-pinned-tab.svg',
                color: '#5bbad5',
            },
            { rel: 'manifest', href: '/site.webmanifest' },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~assets/styles/normalize.css',
        '~assets/styles/global.scss',
        '~assets/styles/datepicker.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~plugins/globals.js',
        '~plugins/vuelidate.js',
        '~plugins/validationDelay.js',
        '~plugins/v-select.js',
        { src: '~plugins/v-calendar.js', ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/axios',
        '@nuxtjs/firebase',
        '@nuxtjs/toast',
    ],

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    // google firebase config
    firebase: {
        config: {
            apiKey: 'AIzaSyCDiarUnVKswqqt5wpIpdnMJhi6UAv9APE',
            authDomain: 'doit-bb77e.firebaseapp.com',
            databaseURL: 'https://doit-bb77e-default-rtdb.firebaseio.com',
            projectId: 'doit-bb77e',
            storageBucket: 'doit-bb77e.appspot.com',
            messagingSenderId: '837242298469',
            appId: '1:837242298469:web:f001bc2a84ac16925f268c',
            measurementId: 'G-T50TQTFTWP',
        },
        services: {
            auth: true,
            storage: true,
            database: true,
        },
    },

    // toasts setup
    toast: {
        position: 'bottom-center',
        duration: 4000,
        // theme: 'bubble',
        // icon: '!',
        // type: "info"
    },
}
