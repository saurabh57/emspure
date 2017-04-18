const path = require('path');
const srcPath = path.join(__dirname, './app');
//We are going to use the ExtractTextPlugin, which moves the generated content into a file.
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
	entry:"./app/main.js",
	output: {
		path:`${srcPath}/`,
		filename:"app.js"
	},
   	resolve: {
     extensions: ['.js', '.jsx','.scss'],
     alias: {
       components: `${srcPath}/components`,
       customComponent : `${srcPath}/ems-bootstrap`,
       styles:`${srcPath}/styles`,
       containers:`${srcPath}/containers`,
       images:`${srcPath}/images`
     }
   },
    devtool: "source-map", // any "source-map"-like devtool is possible
	devServer:{
		contentBase: './app/',
		hot: true,
		inline:true,
		port:8080
	},
	plugins: [
		new ExtractTextPlugin({
			  filename: 'app.css',
			  allChunks: true
			})
    ],
	module:{
		loaders:[
			{
				test:/\.js[x]?$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				query:{
					presets:['es2015','react']
				}
			},
			{
                test: /\.scss$/,
                exclude:/node_modules/,
                loader: ExtractTextPlugin.extract({
			      fallbackLoader: 'style-loader',
			      loader: [
			        {
			          loader: 'css-loader',
			          query: {
			            modules: true,
			            sourceMap: true,
			            localIdentName: '[name]__[local]___[hash:base64:5]',
			          },
			        },
                  {
			            loader: 'postcss-loader',
			            options: {
			              plugins: function () {
			                return [
			                  require('autoprefixer')
			                ];
			              }
			            }
			          },
			        {
			          loader: 'sass-loader',
			          query: {
			            sourceMap: false,
			          }
			        }
			      ],
			    })
            }
		]
	}

}
module.exports = config;