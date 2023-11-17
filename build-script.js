// build-script.js
import fs from 'fs';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __inputDir = path.join(__dirname, 'src', 'preGenerate');

// 出力ディレクトリのパス
const outputDir = path.join(__dirname, 'src', 'generated');

// 読み込むファイルのパス
const filePath = path.join(__inputDir, 'player.js');
// 出力ファイルのパス
const outputFilePath = path.join(outputDir, 'playerContent.ts');

// ファイルの内容を読み込む
const fileContent = fs.readFileSync(filePath, 'utf8');

// TypeScriptの内容を出力
const outputContent = `const playerContent: string = ${JSON.stringify(fileContent)};\nexport default playerContent;`;

// 結果をファイルに書き出す
fs.writeFileSync(outputFilePath, outputContent);
