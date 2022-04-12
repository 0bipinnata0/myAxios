import * as path from 'path';
import * as webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';

type X =webpack.EntryObject
const config: webpack.Configuration = {
    mode: 'development',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    entry: {
        index: {
            import: './src/index.tsx',
            dependOn: 'shared',
        },
        shared: ['react', 'react-dom']
    },
    output: {
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: 'public/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    },
    devServer: {
        static: './dist',
        hot: true,
        port: 2946,
    },
};


export default config;