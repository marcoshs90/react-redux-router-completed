var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: './public/index.html' });
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
    //entry: './app/index.js',
    entry: APP_DIR + '/index.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: BUILD_DIR,
        port: 30010,
        historyApiFallback: true
	},
	module: {
	    loaders: [{
	        test: /\.js$/,
	        exclude: /node_modules/,
	        loader: 'babel',
	        query: {
			    presets: ['es2015', 'react']
			}
	    }]
	},
	resolveLoader: {
	    moduleExtensions: ['-loader']
	},
	plugins: [HTMLWebpackPluginConfig]
}
