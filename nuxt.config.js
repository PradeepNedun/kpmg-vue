module.exports = {
  mode: 'spa',
  css: [
    // FROM NODE MODULES
    'node_modules/font-awesome/css/font-awesome.css',
    // SCSS Styles
    '@/assets/scss/styles.scss',
    // LESS Styles
    '@/assets/less/styles.less'
  ],
  plugins: [
      //OTHER
      '~/plugins/BrowserDetect.js',
      // DIRECTIVES
      // DEV
      '~/plugins/directives/vue-dev-directive.js',
      
      // APP INJECTION
      // i18n
      '~/plugins/i18n/script.js',

      // APP ROOT
      '~/plugins/app-root/script.js'
    ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'kpmg-vue',
    meta: [
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      // Bootstrap Meta Tag Requirements
      { charset: "utf-8" },
      { name: "viewport", content:"width=device-width, initial-scale=1, shrink-to-fit=no" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://home.kpmg.com/etc/clientlibs/kpmgpublic/global/css/global.css' },
      { rel: 'stylesheet', href: 'https://home.kpmg.com/etc/clientlibs/kpmgpublic/tmpl-home/css/tmpl-home.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['bootstrap', 'jquery', 'vue-i18n', 'animate.css', 'underscore', 'moment'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
	  if(isClient) {
		  config.entry.vendor.push('babel-polyfill');
	  }
    }
  }
}
