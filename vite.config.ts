import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';
import path from 'path';

const customPlugin = {
  name: 'custom-load-raw-files',
  // この関数は、モジュールが読み込まれる際に呼ばれる
  load(id) {
    // 指定された拡張子のファイルの場合に処理
    if (id.endsWith('.view.tsx')) {
      // ファイルの内容を文字列として読み込む
      const contents = fs.readFileSync(id, 'utf-8');
      // JavaScriptの文字列としてエクスポート
      return `export default ${JSON.stringify(contents)}`;
    }
  }
};

export default defineConfig({
  plugins: [
    react(),
    customPlugin
    // 他のプラグイン
  ],
  // その他の設定
});
