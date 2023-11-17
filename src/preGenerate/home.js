import p5 from 'p5';
import { squareX, squareY, text } from './square';

// p5.js スケッチの定義
const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(800, 350);
    p.background(0);
  };

  p.draw = () => {
    p.rect(350, 150, squareX, squareY);

    p.textSize(32); // テキストのサイズを設定
    p.fill(255); // テキストの色を設定
    p.text(text, 10, 50); // テキストを表示
  };
};

// p5.js スケッチのインスタンス化
new p5(sketch);

export default sketch;