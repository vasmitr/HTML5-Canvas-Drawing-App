const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist')
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: [/\.css$/, /\.pcss/],
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "src/index.html"
        })
    ]
};