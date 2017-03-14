var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: './public/index.html' });

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 30010
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