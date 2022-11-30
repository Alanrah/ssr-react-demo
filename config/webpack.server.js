const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
module.exports = {
    target: 'node',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: path.resolve(__dirname, '../server.js'),
    output: {
        filename: 'bundle_server.js', // dist 目录下的打包结果
        path: path.resolve(__dirname, '../dist'),
        
    },
    externals: [webpackNodeExternals()], // 打包时候，会把 express react 这些源码文件过滤，直接从服务器路径去找依赖
}