import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const P5Wrapper = () => {
  const sketchRef = useRef<HTMLDivElement | null>(null);
  let playerX = 400; // プレイヤーの初期X座標

  const Sketch = (p: p5) => {
    p.setup = () => {
      p.createCanvas(800, 350);
    };

    p.draw = () => {
      p.background(220);
      p.rect(playerX, p.height / 2, 50, 50); // プレイヤーの描画
    };

    p.keyPressed = () => {
      if (p.key === 'ArrowLeft') {
        playerX = Math.max(playerX - 10, 0); // 左に移動
      } else if (p.key === 'ArrowRight') {
        playerX = Math.min(playerX + 10, 750); // 右に移動
      }
    };
  };

  useEffect(() => {
    if (sketchRef.current) {
      new p5(Sketch, sketchRef.current);
    }
  }, []);

  return <div ref={sketchRef}></div>;
};

export default P5Wrapper;
