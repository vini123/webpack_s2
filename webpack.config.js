const HtmlPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
	entry: {
		home:'./src/style/js/home.js',
		news:'./src/style/js/news.js'
	},
	output:{
		path: path.resolve(__dirname, 'dist'),
		filename:'./style/js/[name]-[hash].bundle.js',
		publicPath: './'
	},
	module:{
		rules:[
			{
				test:/\.(js|jsx)$/,
				use:{
					loader:'babel-loader',
					options:{
						presets:[
							'es2015', 'react'
						]
					}
				},
				exclude:/node_modules/
			},
			{
				test:/\.(css|less)$/,
				use:ExtractTextPlugin.extract({
					fallback:'style-loader',
					use:[{loader:'css-loader'},{loader:'less-loader'},{loader:'postcss-loader'}]
				})
			},
			{
				test:/\.(jpg|png|gif|svg)$/i,
				use:[
						{
							loader:'url-loader',
							options:{
								name:'assets/images/[name]-[hash:5].[ext]',
								limit: 8192,
								publicPath: '../../'
							}
						}
					]
			},
			{
		    	test: /\.tpl$/,
		    	use: {loader: 'ejs-loader'}
		    },
		    {
		    	test: /\.html$/,
		    	use: [ {
		    		loader: 'html-loader',
		    		options: {
		    			minimize: true
		    		}
		    	}],
		    }
		]
	},

	plugins:[
		new HtmlPlugin({
			filename:'home.html',
			template:'./src/index.html',
			title: 'i like webpack',
			inject:'body',
			//只改动变动的文件
			cache: true, 
			minify: {
				removeComments: true,
				collapseWhitespace: false
			},
			chunks:['home']
		}),

		new HtmlPlugin({
			filename:'news.html',
			template: './src/news.html',
			title: 'just news',
			inject: 'body',
			//只改动变动的文件
			cache: true, 
			minify: {
				removeComments: true,
				collapseWhitespace: false
			},
			chunks: ['news']
		}),

		new ExtractTextPlugin('style/css/[name].css?[contenthash]'),

		new CleanPlugin(['dist']),

		new webpack.BannerPlugin('欢迎翻版，翻版必究'),

        // 压缩js
        new webpack.optimize.UglifyJsPlugin({
        	output: {
        			// 去掉注释内容
					comments: false, 
				}
		}),

        //压缩css代码
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: { discardComments: {removeAll: true } },
			canPrint: true
		})
	]
}
