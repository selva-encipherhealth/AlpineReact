// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/, // Handle both .js and .jsx files
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'], // Add @babel/preset-env for modern JavaScript
//           },
//         },
//       },
//       {
//         test: /\.css$/, // For CSS files
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i, // For image files
//         type: 'asset/resource',
//       },
//       {
//         test: /\.(woff|woff2|eot|ttf|otf)$/i, // For font files
//         type: 'asset/resource',
//       },
//       {
//         test: /\.scss$/, // For SCSS files
//         use: [
//           'style-loader',
//           'css-loader',
//           'sass-loader', // Add this loader to process SCSS files
//         ],
//       },
//       {
//         test: /\.xml$/, // For XML files
//         use: 'xml-loader',
//       },
//       {
//         test: /\.csv$/, // For CSV files
//         use: 'csv-loader',
//       },
//     ],
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'), // Add alias for src folder
//       '@components': path.resolve(__dirname, 'src/react/components'), // Example: alias for components
//       '@assets': path.resolve(__dirname, 'src/public/assets'), // Example: alias for assets folder
//     },
//     extensions: ['.js', '.jsx'], // Resolve these file extensions
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'dist'),
//     },
//     hot: true,
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: '../public/index.html',
//     }),
//   ],
// };
