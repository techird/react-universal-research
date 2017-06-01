const path = require('path');
const webpack = require('webpack');
const externals = require("./externals");

module.exports = {
    entry: {
        todo: [
            'webpack-dev-server/client?http://localhost:3000',
            './shared/pages/todo/index.js',
        ],
    },
    externals,
    output: {
        filename: '[name].js',
        // the output bundle
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:3000/static/'
        // necessary for HMR to know where to load the hot update chunks
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new webpack.NoEmitOnErrorsPlugin(),
        // do not emit compiled assets that include errors
        new webpack.DefinePlugin({
            '__NAMESPACE__': JSON.stringify('qcloud.main'),
            __CLIENT__: true,
            __SERVER__: false,
            __DEVELOPMENT__: true,
            __DEVTOOLS__: true  // <-------- DISABLE redux-devtools HERE
        }),
    ],
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: {},
        // respond to 404s with index.html
        hot: true,
        // enable HMR on the server
    },
};