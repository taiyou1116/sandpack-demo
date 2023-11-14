import './App.css';
import { Sandpack, SandpackLayout } from '@codesandbox/sandpack-react';
import { nightOwl } from "@codesandbox/sandpack-themes";
import { P5WrapperSource } from './View';
import { 
  SandpackProvider, 
  SandpackCodeEditor,
  SandpackPreview,
  useSandpackNavigation, 
  } from '@codesandbox/sandpack-react';

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
      <SandpackProvider 
        template="react" 
        files={files} 
        customSetup={{
          dependencies: {
            "p5": "^1.8.0",
          }
        }}
        theme={nightOwl}
      >
        <SandpackLayout style={{ border: 'solid hotpink' }}>
          <SandpackPreview />
          <SandpackCodeEditor />
        </SandpackLayout>
      </SandpackProvider>
      <p>自由にコードを変更してください。</p>
    </div>
  );
}

export default App;
