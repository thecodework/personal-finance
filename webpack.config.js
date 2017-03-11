var webpack = require('webpack')
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
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
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
    },
    plugins:[
    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    })
]
}