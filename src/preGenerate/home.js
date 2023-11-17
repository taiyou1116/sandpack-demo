import p5 from 'p5';
import { squareX, squareY } from './square';

// p5.js スケッチの定義
const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(800, 350);
    p.background(220);
  };

  p.draw = () => {
    p.rect(200, 200, squareX, squareY);
  };
};

// p5.js スケッチのインスタンス化
new p5(sketch);

export default sketch;