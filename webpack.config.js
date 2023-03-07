const path = require('path');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");



module.exports = {
    entry: [path.resolve(__dirname, 'elliotpowell/portfolio/src/portfolio/index.tsx')],
    module: {
        // configuration regarding modules
        rules: [
            {
                // regex test for js and jsx files as well as ts and tsx files
                test: /\.(js|jsx|ts|tsx)?$/,
                // don't look in any node_modules/ or bower_components/ folders
                exclude: /(node_modules|bower_components)/,
                // for matching files, use the babel-loader
                use: {
                    loader: "babel-loader",
                    options: { presets: ["@babel/env"] }
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ],
    },
    resolve: { extensions: ["*", ".js", ".jsx", ".ts", ".tsx"] },
    optimization: {
        usedExports: true,
        minimizer: [new TerserPlugin({ parallel: 4, extractComments: "all", terserOptions: { compress: true } }), new CssMinimizerPlugin()],
    },
    output: {
        // where compiled files go
        path: path.resolve(__dirname, "elliotpowell/portfolio/static/portfolio/public/dist"),

        publicPath: "/static/portfolio/public/dist/",
        filename: 'main.js',  // the same one we import in index.html
    },
    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
    }
};