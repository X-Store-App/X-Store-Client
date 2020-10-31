const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const resources = require("./resources.json")

module.exports = [{
    mode: process.env.NODE_ENV,
    target: "electron-renderer",
    entry: "./src/main/index.ts",
    output: {
        path: path.resolve(__dirname, "bin"),
        filename: "ui.js"
    },
    module: {
        rules: [
            {
                test: /\.ts(x)$/,
                use: "babel-loader",
                exclude: path.resolve(__dirname, "node_modules")
            },
            {
                test: /\.s(cs)ss$/,
                use: "sass-loader",
                exclude: path.resolve(__dirname, "node_modules")
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
            template: path.resolve(__dirname, "src", "interface", "index.html"),
            filename: "index.html"
        })
    ]
}, {
    name: "main",
    mode: process.env.NODE_ENV,
    target: "electron-main",
    name: "main",
    entry: "./src/main/index.ts",
    output: {
        path: path.resolve(__dirname, "bin"),
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
                exclude: path.resolve(__dirname, "node_modules"),
                options: {
                    configFile: path.resolve(process.cwd(), "main.tsconfig.json")
                }
            }
        ]
    },
    resolve: {
        extensions: [
            ".js", ".ts"
        ]
    }
}, {
		name: 'preload',
		mode: process.env.NODE_ENV,
		optimization: {
			minimize: true,
		},
		entry: {
			index: "./src/main/preload.ts",
		},
		resolve: {
			extensions: ['.js', '.ts'],
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: 'ts-loader',
					options: {
						configFile: path.resolve(process.cwd(), './preload.tsconfig.json'),
					},
					exclude: [path.resolve(__dirname, './node_modules')],
				},
			],
		},
		target: 'electron-main',
		externals: ['fs-extra', 'electron', 'path'],
		output: {
			filename: 'preload.js',
			path: path.resolve(__dirname, 'bin'),
			libraryTarget: 'umd',
	    },
}]