var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var entry = {
    feedback2:   __dirname + "/src/view/feedback2.jsx",
}

module.exports = {
    entry: entry, //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public", //打包后的文件存放的地方
        filename: '[name].js',
    },
    devServer: {
        hot: true
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
        alias: {
            'asset': path.join(__dirname, "./asset"),
            'config': path.join(__dirname, "./config")
        }
    },
    devtool: '',
    module: {
        rules: [{
                test: /(\.jsx|\.js)$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["babel-preset-es2015", {"loose":true, "modules": false}],
                            "babel-preset-stage-0"
                        ],
                        plugins: [
                            require.resolve('./transAPI/index.js'),
                            "babel-plugin-transform-rxscss"
                        ]
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.rxscss$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["babel-preset-es2015", {"modules": false}],
                        ]
                    }
                },{
                    loader: 'rx-export'
                }, {
                    loader: 'rx-css-loader'
                }, {
                    loader: 'sass-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index2.html'
        })
    ]
}