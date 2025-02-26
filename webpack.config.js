const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Начальный файл для JS
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  // Сгенерированный JS файл
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],  // Обработка стилей
      },
      {
        test: /\.hbs$/,  // Обработка Handlebars
        loader: 'handlebars-loader',
        options: {
          partialDirs: [path.resolve(__dirname, 'src/components')],  // Указываем папку с partials
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devServer: {
    static: './',
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.hbs',  // Используем Handlebars для HTML шаблона
      filename: 'index.html',      // Генерируем index.html в dist/
    }),
  ],
};
