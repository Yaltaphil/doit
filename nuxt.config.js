export default {
    // target: 'static',

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
        '~assets/styles/normalize',
        '~assets/styles/datepicker',
        '~assets/styles/global',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~plugins/vuelidate',
        '~plugins/validationDelay',
        '~plugins/v-select',
        '~plugins/v-calendar.client',
        '~plugins/db',
        '~plugins/vue-awesome-swiper.client',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        // '@nuxtjs/eslint-module',
        '@nuxt/typescript-build',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/axios',
        '@nuxtjs/firebase',
        '@nuxtjs/toast',
        '@nuxtjs/auth-next',
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
            database: true,
            storage: true,
        },
    },

    // toasts setup
    toast: {
        position: 'bottom-right',
        duration: 4000,
        // theme: 'bubble',
        // icon: '!',
        // type: "info"
    },

    // auth
    auth: {
        strategies: {
            local: {
                token: {
                    property: 'idToken',
                    type: '',
                },
                user: {
                    property: 'users',
                },
                endpoints: {
                    login: {
                        url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCDiarUnVKswqqt5wpIpdnMJhi6UAv9APE',
                        method: 'post',
                        propertyName: 'idToken',
                    },
                    user: {
                        url: 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCDiarUnVKswqqt5wpIpdnMJhi6UAv9APE',
                        method: 'post',
                        propertyName: 'users',
                    },
                    logout: {
                        url: 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCDiarUnVKswqqt5wpIpdnMJhi6UAv9APE',
                        method: 'post',
                    },
                },
            },
        },
        redirect: {
            login: '/',
            logout: '/login',
        },
    },

    loading: '~/components/loading.vue',

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        credentials: true,
        https: true,
    },
}
