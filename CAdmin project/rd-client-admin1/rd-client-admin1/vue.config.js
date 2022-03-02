// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  outputDir: 'dist' + process.env.VUE_APP_BASE_URL,
  publicPath: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_URL : '/',
  pwa: {
    name: 'Radius Direct',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'service-worker.js',
      swDest: 'service-worker.js'
    },
    iconPaths: {
      favicon32: 'img/favicon.png'
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].template = './public/index.html'
        return args
      })
    config.module.rules.delete('eslint')
  }
}
