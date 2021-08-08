const webpack = require('webpack');
const path = require('path');

module.exports = (env,argv) => {
    return { 
        entry : './src/index.js',
        output : {
            filename : 'webpack.bundle.js',
            publicPath : '/',
            environment : {
                const : false,
                destructuring : false
            },
            path : path.resolve(__dirname,'public')
        },
        plugins : [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV_ENVIRONMENT' : false
            })
        ]
    }
}