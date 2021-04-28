const wp = require('webpack')
const path = require('path')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtract = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'prod'

const plugins = [
    new HTMLWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, 'src/index.html')
    }),
    new MiniCSSExtract({
        filename: '[name].css',
        chunkFilename: '[id].css'
    }),
]

if (isProd) {
    plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false
    }))
}

module.exports = {
    entry: path.join(__dirname, 'src/index.jsx'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: isProd ? 'production' : 'development',
    module: {
        rules: [{
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react']
                    }
                }]
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/i,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]'
                }
            },
            {
                test: /.css$/,
                use: [
                    MiniCSSExtract.loader, 'css-loader'
                ]
            }
        ],
    },
    devServer: {
        publicPath: '/',
        contentBase: './dist'
    },
    plugins: plugins,
    optimization: {
        minimize: isProd,
    }
}