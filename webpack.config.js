// npm install vue-loader@next @vue/compiler-sfc -D

const path = require('path');
// const TerserPlugin = require("terser-webpack-plugin");
const { VueLoaderPlugin  } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {   
    mode:  "development",
    // 入口
    entry: path.resolve(__dirname, 'src/main.js'),    
    // 出口
    output: {        
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', 
        publicPath: './',
    },
    /*
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    */
    devServer: {
        static: "./dist",
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        },{
            test: /\.css$/,
            use: ['style-loader','css-loader'],
        }, {
            test: /\.(png|jpe?g|gif|ico)$/,
            type: 'asset/resource',
            generator: {
                filename: 'assets/img/[hash][ext]'
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
        }, {
            test: /\.json$/,
            type: 'asset/resource',
            generator: {
                filename: 'json/[name][ext]'
            }
        }
    ]},
     plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
        })
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
        'vue': '@vue/runtime-dom'
        }
    },
    devServer: {
        hot: true,
        open: true,
        historyApiFallback: true,
    }
};
