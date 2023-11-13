import './App.css';
import { Sandpack } from '@codesandbox/sandpack-react';
// import { nightOwl } from "@codesandbox/sandpack-themes";
import P5Wrapper from './View';

const files = {
  '/View.tsx': `
    import React, { useEffect, useRef } from 'react';
    import p5 from 'p5';
    
    const P5Wrapper = () => {
      const sketchRef = useRef<HTMLDivElement | null>(null);
    
      const Sketch = (p: p5) => {
        p.setup = () => {
          p.createCanvas(400, 400);
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
  `,
  '/App.js': `
    import React from 'react';
    import P5Wrapper from './View';

    const App = () => {
      return (
        <div>
          <P5Wrapper />
        </div>
      );
    };

    export default App;
  `,
};

function App() {
  return (
    <div className='App'>
      {/* <P5Wrapper /> */}
      <Sandpack 
        template='react' 
        files={files}
        customSetup={{
          dependencies: {
            "p5": "^1.8.0",
          }
        }}
      />
      <p>自由にコードを変更してください。</p>
    </div>
  );
}

export default App;
