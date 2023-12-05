const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: false
  },
  chainWebpack: (config) => {
    config.module
        .rule('less')
        .test(/\.less$/)
        .use('less-loader')
        .loader('less-loader')
        .options({ lessOptions: { javascriptEnabled: true } })
        .end()
  },
})
