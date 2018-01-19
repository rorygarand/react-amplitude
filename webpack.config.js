var path = require('path');
var webpack = require('webpack');

var packageData = require('./package.json');

var plugins = [];
var sources = [];

sources.push(path.resolve(__dirname, packageData.entry));

module.exports = {
    entry: {
        amplitude: sources
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'react-amplitude',
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ['babel-loader?presets[]=env']
            }
        ]
    },
    plugins: plugins,
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
