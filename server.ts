
import express from 'express'
// import { webpack, HotModuleReplacementPlugin } from 'webpack';
import { webpack } from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from './webpack.config';
// import webpackHotMiddleware from 'webpack-hot-middleware'

const app = express();
/* 
const compiler = webpack({
    ...config,
    plugins: [
        ...config.plugins ?? [],
        new HotModuleReplacementPlugin(),
    ]
}); 
*/
const compiler = webpack(config);
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output?.publicPath,
    })
);
// app.use(webpackHotMiddleware(compiler, {
//     log: console.log,
//     path: '/__webpack_hmr',
//     heartbeat: 1000,
// }))

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});