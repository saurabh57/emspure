const path = require('path');
const srcPath = path.join(__dirname, './app');
const webpack = require('webpack');
//We are going to use the ExtractTextPlugin, which moves the generated content into a file.
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
	entry:{
		app: "./app/main.js",
        vendor: [
            'react',
            'react-dom',
            'react-router',
            'react-router-redux',
            'redux',
            'react-redux',
            'redux-immutable-state-invariant',
            'react-bootstrap',
            'material-ui'
        ],
        fonts: [
            './app/styles/lib/font.css'
        ],
        globals: [
            './app/styles/lib/globals.css'
        ]
	},
	output: {
		path:`${srcPath}/`,
		filename:"[name].js"
	},
   	resolve: {
     extensions: ['.js', '.jsx','.scss','.css'],
     alias: {
       components: `${srcPath}/components`,
       bootstrapComponent : `${srcPath}/ems-bootstrap`,
       materialUIComponent: `${srcPath}/ems-material`,
       styles:`${srcPath}/styles`,
       store:`${srcPath}/store`,
       sources:`${srcPath}/sources`,
       routes:`${srcPath}/routes`,
       reducers:`${srcPath}/reducers`,
       containers:`${srcPath}/containers`,
       images:`${srcPath}/images`,
       fonts:`${srcPath}/fonts`,
       utils:`${srcPath}/utils`,
       constants:`${srcPath}/constants`,
       actions:`${srcPath}/actions`,
     }
   },
    devtool: "source-map", // any "source-map"-like devtool is possible
	devServer:{
		contentBase: './',
		hot: true,
		inline:true,
		port:9000,
		historyApiFallback: true
	},
	plugins: [
		new ExtractTextPlugin({
			  filename: '[name].css',
			  allChunks: true
			}),
		new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' })
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
                exclude:[/lib/],
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
			          loader: 'resolve-url-loader',
			          query: {
			            sourceMap: true,
			          }
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
			            sourceMap: true,
			          }
			        }
			      ],
			    })
            },
            {
			    test: /(\.lib|globals|font)\.css$/,
			 	loader:ExtractTextPlugin.extract({
			 		fallbackLoader: 'style-loader',
			 		loader:['css-loader','resolve-url-loader',{
			            loader: 'postcss-loader',
			            options: {
			              plugins: function () {
			                return [
			                  require('autoprefixer')
			                ];
			              }
			            }
			         }]
			 	})
			},
            {
	          test: /\.(gif|jpe?g|png|svg)(\?.*)?$/,
	          use: [
	            'file-loader',
                {
			      loader: 'image-webpack-loader',
			      options: {}
			    }
	          ],
	        },
	        {
	          test: /\.(eot|ttf|woff2?)(\?.*)?$/,
	          loader: 'file-loader',
	          options: {
	            name: '[name].[ext]',
	          },
	        }
		]
	}

}
module.exports = config;