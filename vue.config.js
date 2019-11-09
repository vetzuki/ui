module.exports = {
  devServer: {
    // disableHostCheck: true,
    // https://github.com/chimurai/http-proxy-middleware#proxycontext-config
    proxy: {
      "^/api/login": {
        target: "http://localhost:9000",
        ws: true,
        changeOrigin: true,
      },
      "^/api/prospects": {
        target: "http://localhost:9000",
        ws: true,
        changeOrigin: true,
      },
      "^/api/scores": {
        target: "http://localhost:9000",
        ws: true,
        changeOrigin: true,
      }
    }
  }
}
