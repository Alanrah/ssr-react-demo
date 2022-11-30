const path = require('path');

module.exports = {
    target: 'web',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: path.resolve(__dirname, '../client.js'),
    output: {
        filename: 'bundle_client.js', // dist 目录下的打包结果
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/',
          },
        ],
      },
    // externals: [webpackNodeExternals()], // 前端打包时候，需要把依赖都打包
}