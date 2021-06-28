import colors from 'vuetify/es5/util/colors'
const path = require("path");
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/ars-discovery/',
  }
} : {};

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - asr-discovery',
    title: 'asr-discovery',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    '~/assets/css/main.css',
    '~/assets/scss/global/typography.scss',
    '~/assets/css/fonts.css',
  ],
  // omit
  ...routerBase,
  // omit
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // https://axios.nuxtjs.org/extend
    {
      src: '~/plugins/axios.js'
    },
  ],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [{
    path: '~/components',
    extensions: ['vue']
  }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://www.npmjs.com/package/nuxt-fontawesome
    ['nuxt-fontawesome', {
      component: 'fa', //customize component name
      imports: [{
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faEnvelope', 'faLock', 'faEye']
      }]
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    // https://axios.nuxtjs.org
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha',
  ],
  styleResources: {
    scss: [
      '~/assets/scss/global/variables.scss',
      '~/assets/scss/global/colors.scss',
      '~/assets/scss/global/mixins.scss',
    ]
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/global/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /**
   * Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.API_URL,
  },

  // Recaptcha
  recaptcha: {
    version: 3,
    siteKey: '6Lc41A4bAAAAAGBwKBpgKEXaN7um8iP2quhUGrtx', // Site key for requests
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: './static/',
  },

}