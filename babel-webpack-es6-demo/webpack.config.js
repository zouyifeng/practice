const path = require("path")
const webpack = require("webpack")

const ROOT_PATH = path.resolve(__dirname)
const SRC_PATH = path.resolve(ROOT_PATH, 'src')
const DIST_PATH =path.resolve(ROOT_PATH, 'dist')
const MODULT_PATH = path.resolve(ROOT_PATH, 'node_modules')

const config = {
	entry: {
		'main': path.resolve(SRC_PATH, 'main')
	},
	output: {
		path: DIST_PATH,
		filename: 'script.js',
		publicPath: '/'
	},
	module: {
		loaders: [{
			test: /.js$/,
			loader: 'babel',
			include: [SRC_PATH]
		}]
	},
	resolve: {
		modulesDirectories: [
			'node_modules',
			'src'
		],
		alias: {
			'pokemon-gif': path.resolve(MODULT_PATH, 'pokemon-gif', 'lib', 'pokemon-gif.js')
		}
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warning: false
			}
		})
	]
}

module.exports = config;