import colors from 'vuetify/es5/util/colors'
const path = require("path");

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // generate static files options
  generate: {
    dir: 'dist',
    subFolders: true
  },

  router: {
    base: '/',
    extendRoutes(routes) {
      routes.forEach((route) => {
        const alias =
          route.path.length > 1 ? `${route.path}/index.html` : '/index.html'
        route.alias = alias
      })
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "The Traveller's Discovery",
    title: "The Traveller's Discovery",
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
        content: 'Welcome to discoverasr.com, the home of 200+ ASR properties across 13 brands. Explore the world with our virtual arcade and weekly flash sale from 12 July to 24 September 2021. Select a country to start playing. Win up to 1,400 ASR points and lucky draw chances for our 11 NFT prizes!'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'serviced apartment, serviced residence, ascott, ascott star rewards, ascott membership, international travel, hotel, international hotel, luxury hotel, hotel promotion, flash sale'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
      {
        rel: 'stylesheet',
        href: '/bootstrap.min.css'
    },
    {
        rel: 'stylesheet',
        href: '/main.css'
      }
   ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    '~/assets/css/fonts.css',
    '~/assets/css/inline.css',
    '~/assets/css/style.css',
    '~/assets/css/override.css',
    '~/assets/scss/global/typography.scss',
  ],

  styleResources: {
    scss: [
      '~/assets/scss/global/variables.scss',
      '~/assets/scss/global/slick-slider.scss',
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // https://axios.nuxtjs.org/extend
    { src: '~/plugins/axios.js' },
  ],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    { path: '~/components', extensions: ['vue'] }
  ],

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
        }
      ]
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    // https://axios.nuxtjs.org
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha',
    // https://github.com/nuxt-community/gtm-module
    '@nuxtjs/gtm',
  ],

  gtm: {
    id: 'GTM-W3JC72T', // UAT2 UAT/Staging/Dev
  },

  publicRuntimeConfig: {
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID
    }
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
    siteKey: '6Lc41A4bAAAAAGBwKBpgKEXaN7um8iP2quhUGrtx',    // Site key for requests
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, {
      isDev,
      isClient
    }) {
      const alias = (config.resolve.alias = config.resolve.alias || {});
      alias["~"] = path.join(__dirname);
      config.resolve.symlinks = false;
    }
  }
}
