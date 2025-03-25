import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: './src/index.js', // Начальный файл для JS
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Сгенерированный JS файл
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ], // Обработка стилей
      },
      {
        test: /\.hbs$/, // Обработка Handlebars
        loader: 'handlebars-loader',
        options: {
          partialDirs: [path.resolve(__dirname, 'src/components')], // Указываем папку с partials
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',       // Используем file-loader для обработки изображений
            options: {
              name: '[name].[ext]',      // Имя файла и расширение
              outputPath: 'images',      // Папка для изображений в dist
            },
          },
        ],
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
      template: 'src/index.hbs', // Используем Handlebars для HTML шаблона
      filename: 'index.html', // Генерируем index.html в dist/
    }),
  ],
};
