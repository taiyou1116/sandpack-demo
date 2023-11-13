import './App.css';
import { Sandpack } from '@codesandbox/sandpack-react';
import P5Wrapper from './View';

const files = {
  '/App.js': `
    import { useState } from 'react'

    function App() {
      const [count, setCount] = useState(0)
    
      return (
        <div>
          <h1>Vite + React</h1>
          <div>
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
        </div>
      )
    }
    export default App;
  `,
};

function App() {
  return (
    <div className='App'>
      {/* <P5Wrapper /> */}
      <Sandpack template='react' files={files} />
      <p>自由にコードを変更してください。</p>
    </div>
  );
}

export default App;
