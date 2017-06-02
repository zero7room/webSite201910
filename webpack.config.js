const path = require('path');
const ROOT = path.resolve(__dirname);
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanPlugin = require('clean-webpack-plugin'); // 文件夹清除工具
let ExtractTextPlugin = require('extract-text-webpack-plugin'); //将你的行内样式提取到单独的css文件里

const config = {
    entry: {
        // bootstrap: 'bootstrap-loader',
        // vendors: [''],
        common: ROOT + '/src/common/js/main.jsx',
        index: ROOT + '/src/index/js/index.jsx'
    },
    output: {
        path: path.join(__dirname, 'dist'), //打包后生成的目录
        publicPath: '', //模板、样式、脚本、图片等资源对应的server上的路径
        filename: 'js/[name].[hash:6].js',  //根据对应入口名称，生成对应js名称
        chunkFilename: 'js/[id].chunk.js',   //chunk生成的配置
        libraryTarget: 'umd'

    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/, use: ['babel-loader']
        },
        {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings 
            }, {
                loader: "css-loader" // translates CSS into CommonJS 
            }, {
                loader: "less-loader" // compiles Less to CSS 
            }]
        },
        {
            test: /\.scss$/, use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        },
        {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, use:[{loader: 'url-loader?limit=50000&name=[path][name].[ext]'}]
        }]
    },
    // cdn
    externals: {
        // 'react': 'React',
        // 'react-dom': 'ReactDOM',
        // 'antd': 'antd'
    },
    // externals: {
    //     react: {
    //         amd: 'react',
    //         root: 'React',
    //         commonjs: 'react',
    //         commonjs2: 'react'
    //     },
    //     'react-dom': {
    //         amd: 'react-dom',
    //         root: 'ReactDOM',
    //         commonjs: 'react-dom',
    //         commonjs2: 'react-dom'
    //     // }
    // },
    plugins: [
        new webpack.ProvidePlugin({ //全局配置加载
           $: "jquery",
           jQuery: "jquery",
           "window.jQuery": "jquery"
        }),
        new CleanPlugin(['dist']),// 清空dist文件夹
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            // title:'王泽琦很嗨',
            template: 'src/index/index.html', // 源模板文件
            filename: 'index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
            showErrors: true,
            inject: 'body',
            chunks: ["common", 'index'],
            // 控制输出js顺序
            chunksSortMode: function (chunk1, chunk2) {
                var order = {
                    // "public": 1,
                    // "vendors": 2,
                    "bootstrap": 3,
                    "common": 4,
                    "index": 5
                };
                var order1 = order[chunk1.names[0]];
                var order2 = order[chunk2.names[0]];
                return order1 - order2;  
            }
        }),
        // 提供公共代码
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'public', // 注意不要.js后缀
        //     chunks:['vendors']
        // })
    ],
    resolve: {
        alias: {
            common: path.resolve(__dirname, 'src/common'),
            index: path.resolve(__dirname, 'src/index'),
            themes: path.resolve(__dirname, 'src/themes')
        }
    },
    devServer: {
        // contentBase: './',
        host: 'localhost',
        port: 8188, //端口
        inline: true,
        hot: false,
    }
};

module.exports = config;