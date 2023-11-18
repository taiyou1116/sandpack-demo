
import fs from 'fs';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __inputDir = path.join(__dirname, 'src', 'preGenerate');

// 出力ディレクトリのパス
const outputDir = path.join(__dirname, 'src', 'generated');

// 出力ファイルのパス
const outputFilePath = path.join(outputDir, 'playerContent.ts');

// preGenerateフォルダ内の全てのファイルを読み込む
const files = fs.readdirSync(__inputDir);

let outputContent = '';

files.forEach(file => {
  const filePath = path.join(__inputDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  // ファイル名から拡張子を除去して変数名を生成
  const variableName = path.basename(file, path.extname(file)) + 'Content';
  // TypeScriptの内容に変数として追加
  outputContent += `export const ${variableName}: string = ${JSON.stringify(fileContent)};\n`;
});

// 結果をファイルに書き出す
fs.writeFileSync(outputFilePath, outputContent);