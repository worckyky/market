const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/]
    }
  }
})
