const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html模板
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //提出css
const glob = require('glob'); //循环所有文件
const env = process.env.NODE_ENV //当前环境

console.log(env);

//__dirname目录地址 __filename文件地址

const config = {
    entry: {},
    output: {
        path: `${__dirname}/dist`,
        filename: '[name]-[hash].js',
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/
            },
            {
                test: /(\.vue$)/,
                use: {
                    loader: 'vue-loader',
                },
            },
            {
                test: /\.(css|scss)$/,
                use: env === 'production'
                    ? ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'postcss-loader']
                    })
                    : ['style-loader?sourceMap', 'css-loader?sourceMap', 'postcss-loader?sourceMap']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'images/[name].[ext]',
                        //publicPath:'../../'  //相对地址
                    }
                }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'], //自动解析后缀
        alias: {
            'vue$': 'vue/dist/vue.esm.js', //webpack的vue必须要加这个
        }
    },
    plugins: []
}


function getEntry(globPath, pathDir) {
    var files = glob.sync(globPath);
    var entries = {},
        entry, dirname, basename, extname, chunks;
        
    
    files.forEach((entry) => {
        dirname = path.dirname(entry);
        basename = /apps\/(.*)\/index\.js/.exec(entry)[1];
        chunks = env === 'production' ? ['vendor', basename] : [basename];
        entries[basename] = entry;
        const plug =  new HtmlWebpackPlugin({
            filename: `${__dirname}/dist/${basename}.html`,
            chunks,
            template: `${dirname}/index.html`,
            inject: true
        });
        config.plugins.push(plug);
    });
    return entries;
}
const newEntries = getEntry('./src/apps/*/index.js');

if(env === 'production') { // 生产环境
    config.entry = {
        vendor: ['vue', 'vue-router', 'vuex'] // 公用方法
    };
    config.plugins = config.plugins.concat([
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),
        //new webpack.optimize.UglifyJsPlugin(), //压缩JS代码,开发中使用它不能sourcemap了
        new ExtractTextPlugin({
            filename:(getPath) => {
                return getPath('[name].[hash].css');
            },
        }) //分离CSS
    ]);
} else { //开发环境
    config.devtool = 'source-map';
    config.devServer = {
        //contentBase: `${__dirname}/dist`, // 不怎么清楚
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true, //热加载
        port: 8080, //端口
    };
    config.plugins = config.plugins.concat([
        new webpack.HotModuleReplacementPlugin(), //热加载插件
    ]);
}

config.entry = Object.assign({}, config.entry, newEntries);

module.exports = config;