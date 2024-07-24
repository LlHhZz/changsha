module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://8.148.13.44:8000/',// 后端接口
          changeOrigin: true, // 是否跨域
          secure: false,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    },
    productionSourceMap: false,
    filenameHashing: true, // 文件hash
    publicPath: './', // 设置打包路径
    configureWebpack: {   
      devtool: false, 
    }
}