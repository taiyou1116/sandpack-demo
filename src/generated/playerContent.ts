export const homeContent: string = "import p5 from 'p5';\nimport { squareX, squareY, text } from './square';\n\n// p5.js スケッチの定義\nconst sketch = (p) => {\n  p.setup = () => {\n    p.createCanvas(800, 350);\n    p.background(0);\n  };\n\n  p.draw = () => {\n    p.rect(350, 150, squareX, squareY);\n\n    p.textSize(32); // テキストのサイズを設定\n    p.fill(255); // テキストの色を設定\n    p.text(text, 10, 50); // テキストを表示\n  };\n};\n\n// p5.js スケッチのインスタンス化\nnew p5(sketch);\n\nexport default sketch;";
export const squareContent: string = "// これが変数\nlet squareX = 100;\nlet squareY = 100;\n\n// 文字\nlet text = '';\n\n\n// 触らないで!!\nexport { squareX, squareY, text }";
export const stringContent: string = "";
