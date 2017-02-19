module.exports = {
    entry: './frontend/main.js',
    output: {
        path: './public/builds',
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js/,
            loader: 'babel-loader',
            include: __dirname + '/frontend',
            exclude: '/node-modules/'
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }],
    },
    vue: {
        loaders: {
            js: 'babel-loader'
        }
    },
    resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
}