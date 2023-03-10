const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');


const prodConfig = {
    mode: 'production', 
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/structure/latest/'
    },
   plugins: [
    new ModuleFederationPlugin({
        name: 'structure',
        filename: 'remoteEntry.js',
        exposes: {
            './Structure': '/src/bootstrap'
        },
        //shared: packageJson.dependencies
        shared: {
            react: {
                singleton: true,
            },
            
        }
    })

   ]


};

module.exports = merge(commonConfig, prodConfig);
