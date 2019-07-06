const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build/static'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: 'file-loader',
            },
        ],
    },
    devServer: {
        publicPath: '/static/',
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
    },
};
