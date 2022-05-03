export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static', 
  ssr: true,


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hi4 Digital',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap'
      }
    ],
    script: [
      {
        src: 'https://use.fontawesome.com/releases/v5.15.4/js/all.js',
        crossorigin: 'anonymous'
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
        type: 'text/javascript'
      },
      {
        src: 'js/jquery-3.1.1.min.js',
        type: 'text/javascript'
      },
      {
        src: 'js/scripts-min.js',
        type: 'text/javascript'
      },
      {
        src:'https://unpkg.com/vue-typer/dist/vue-typer.min.js',
        crossorigin: ''
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/VueTyper.client.js',
    '~/plugins/VueAOSAnimate.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
