// import path from 'path';

const path = require("path");
// export default {
module.exports = {
    mode: 'development',
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, 'src')
        
    ],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'index.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader:'babel-loader'
        },
        {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          }]
    }
}