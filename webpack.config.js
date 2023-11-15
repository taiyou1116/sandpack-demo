const path = require('path');

module.exports = {
  entry: './path/to/your/App.tsx', // エントリーポイント
  module: {
    rules: [
      {
        test: /\.tsx?$/, // TypeScriptファイルに適用
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.view\.tsx$/, // .view.tsx で終わるファイルに適用
        use: 'raw-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
