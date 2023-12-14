const path = require('path') //NodeJS

module.exports = {
    // mode
    mode: 'development', // production
    // entry
    entry: path.resolve(__dirname, './src/app.js'),
    //output
    output: {
        path:path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    // plagins
    // Loaders
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    // decServer
    devServer:{
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
}
