import './App.css';
import { Sandpack } from '@codesandbox/sandpack-react';
import { nightOwl } from "@codesandbox/sandpack-themes";
import { P5WrapperSource } from './View';

const files = {
  '/View.tsx': P5WrapperSource,
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
      <Sandpack 
        template='react' 
        files={files}
        customSetup={{
          dependencies: {
            "p5": "^1.8.0",
          }
        }}
        theme={nightOwl}
      />
      <p>自由にコードを変更してください。</p>
    </div>
  );
}

export default App;
