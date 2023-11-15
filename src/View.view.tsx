

import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const P5Wrapper = () => {
  const sketchRef = useRef<HTMLDivElement | null>(null);

  const Sketch = (p: p5) => {
    p.setup = () => {
      p.createCanvas(800, 350);
    };

    p.draw = () => {
      p.background(220);
      p.ellipse(p.width / 2, p.height / 2, 50, 50);
    };
  };

  useEffect(() => {
    // sketchRef.currentがnullでないことを確認
    if (sketchRef.current) {
      const canvas = new p5(Sketch, sketchRef.current);

      return () => {
        canvas.remove();
      };
    }
  }, []);

  return <div ref={sketchRef}></div>;
};

export default P5Wrapper;
