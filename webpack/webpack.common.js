const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Clean = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: root('source/javascripts/main.js')
    },
    resolve: {
        modules: [
            root('node_modules'),
            root('source/javascript'),
            root('source/stylesheets'),
        ],
        extensions: ['.js', '.ts', '.css', '.scss'],
    },
    output: {
        path: root('.tmp/dist'),
        filename: 'javascripts/[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['at-loader'],
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader'],
                }),
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader'],
                }),
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'stylesheets/[name].bundle.css',
        })
    ],
}

function root(path) {
    return `${__dirname}/../${path}`;
}