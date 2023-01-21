const path = require('path');

module.exports = (env, argv) => {
    return {
        entry: './src/index.tsx',
        mode: env.mode,
        module: {
            rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: 'react-app.js',
            path: path.resolve('../app/dist'),
        },
    }
};