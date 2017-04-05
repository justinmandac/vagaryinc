module.exports = {
    entry : './src/app/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module : {
        loaders: [
            {
                test: /\.css$/,
                use : [
                    'css-loader',
                    'style-loader'
                ]
            }            
        ]
    }
};