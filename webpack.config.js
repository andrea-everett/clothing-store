// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader'
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader']
//             },
//             {
//                 test: /\.html$/,
//                     use: {
//                         loader: 'html-loader'
//                     }
//             }
//         ]
//     },
//     plugin: [
//         new HtmlWebpackPlugin({
//             template: './index.html'
//         })
//     ]
// }

// export const experiments = {
//   asyncWebAssembly: true,
//   buildHttp: true,
//   layers: true,
//   lazyCompilation: true,
//   outputModule: true,
//   syncWebAssembly: true,
//   topLevelAwait: true,
// };

module.exports = {
    experiments: {
      futureDefaults: true,
    },
  };