var Webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var DefinePlugin = new Webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
});
var CleanPlugin = new CleanWebpackPlugin(['static']);
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: './public/index.html' });
var UglifyPlugin = new Webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }});
var DedupePlugin = new Webpack.optimize.DedupePlugin();
var CommonChunksPlugin = new Webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] });

module.exports = {
    entry: {
	    vendor: ['react', 'react-dom'],
	    app: './app/index.js',
	  },
    output: {
    	path: 'static',
        filename: '[name].[chunkhash].js',
		chunkFilename: '[chunkhash].bundle.js',
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
	plugins: [CleanPlugin, DefinePlugin, HTMLWebpackPluginConfig, UglifyPlugin, DedupePlugin, CommonChunksPlugin]
}