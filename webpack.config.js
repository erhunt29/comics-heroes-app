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
                test: /\.(jpe?g|png|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name][hash].[ext]',
                        publicPath: 'static',
                    },
                },
            },
        ],
    },
    devServer: {
        publicPath: '/static/',
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },
};
