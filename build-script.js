
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

// import fs from 'fs';
// import path from 'path';
// import url from 'url';

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const __inputDir = path.join(__dirname, 'src', 'preGenerate');

// // 出力ディレクトリのパス
// const outputDir = path.join(__dirname, 'src', 'generated');
// // 出力ファイルのパス
// const outputFilePath = path.join(outputDir, 'playerContent.ts');

// function buildFile() {
//   const files = fs.readdirSync(__inputDir);
//   let outputContent = '';

//   files.forEach(file => {
//     const filePath = path.join(__inputDir, file);
//     const stats = fs.statSync(filePath);
//     const lastModified = new Date(stats.mtime).getTime();

//     // 前回のビルド時刻を取得
//     const lastBuildTime = fs.existsSync(outputFilePath) ? new Date(fs.statSync(outputFilePath).mtime).getTime() : 0;

//     // ファイルが前回のビルド以降に更新されている場合のみ処理
//     if (lastModified > lastBuildTime) {
//       const fileContent = fs.readFileSync(filePath, 'utf8');
//       const variableName = path.basename(file, path.extname(file)) + 'Content';
//       outputContent += `export const ${variableName}: string = ${JSON.stringify(fileContent)};\n`;
//     }
//   });

//   // 結果をファイルに書き出す
//   if (outputContent) {
//     fs.writeFileSync(outputFilePath, outputContent);
//   }
// }

// // ビルド関数の初回実行
// buildFile();

// // ファイルの変更を監視して自動でビルド
// fs.watch(__inputDir, (eventType, filename) => {
//   if (filename) {
//     console.log(`${filename} was ${eventType}, rebuilding...`);
//     buildFile();
//   }
// });
