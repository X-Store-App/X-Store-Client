const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const resources = require("../config/resources.json")

module.exports = [{
    mode: /*process.env.NODE_ENV*/"none", //TODO: Set NODE_ENV in the cmd 
    target: "electron-renderer",
    entry: "./src/main/index.ts",
    output: {
        path: path.resolve(__dirname, "../", "bin"),
        filename: "ui.js"
    },
    module: {
        rules: [
            {
                test: /\.ts(x)$/,
                use: "babel-loader",
                exclude: path.resolve(__dirname, "../", "node_modules")
            },
            {
                test: /\.s(cs)ss$/,
                use: "sass-loader",
                exclude: path.resolve(__dirname, "../", "node_modules")
            }
        ]
    },
    resolve: {
        extensions: [
            ".js", ".ts"
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: resources.title,
            template: path.resolve(__dirname, "../", "src", "interface", "index.html"),
            filename: "index.html"
        })
    ]
}, {
    mode: process.env.NODE_ENV,
    target: "electron-main",
    entry: "./src/main/index.ts",
    output: {
        path: path.resolve(__dirname, "../", "bin"),
        filename: "main.js"
    },
    node: {
        __dirname: true
    },
    module: {
        rules: [
            {
                test: /\.ts(x)$/,
                use: "babel-loader",
                exclude: path.resolve(__dirname, "node_modules")
            }
        ]
    },
    resolve: {
        extensions: [
            ".js", ".ts"
        ]
    }
}]