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
    <div className=' h-[calc(100vh-4rem)]'>
      <SandpackProvider 
        template="react" 
        files={files} 
        customSetup={{
          dependencies: {
            "p5": "^1.8.0",
          }
        }}
        theme={nightOwl}
        className=''
      >
        <div className=' flex flex-col gap-5 h-[calc(100vh-4rem)]' >
          <SandpackPreview className=' h-1/2' />
          <SandpackCodeEditor className=' h-1/2' />
        </div>
      </SandpackProvider>
    </div>
  );
}

export default App;
