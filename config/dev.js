module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  mini: {
    devServer: {
      host: "0.0.0.0",
      port: 8088,
      https: false,
      open: false
    }
  },
  h5: {
    devServer: {
      host: "0.0.0.0",
      port: 3001,
      https: false,
      open: true,
      hot: true
    }
  }
};
