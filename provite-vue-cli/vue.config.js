module.exports = {
  publicPath: process.env.VUE_APP_CONTEXT,
  assetsDir: process.env.VUE_APP_ASSETS,
  runtimeCompiler: true,
  // productionSourceMap: false,
  // 默认babel-loader会忽略node_modules中的文件
  // 但是dolphin-plugin-tools用了es6的语法, 配置对其显示转译
  // 配合babel sourceType: 'unambiguous'来使用 https://github.com/babel/babel/issues/9187,
  transpileDependencies: [
    'dolphin-plugin-tools',
    /@hui-pro/
  ],
  // 用于开发环境下与后端联调
  // 如有需要, 还可以配合easy-proxy进行使用
  devServer: {
    proxy: {
      '^/api/': {
        target: 'http://localhost:8060',
        changeOrigin: true
      }
    }
  }
}
