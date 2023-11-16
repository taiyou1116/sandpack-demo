import './App.css';
import { SandpackLayout } from '@codesandbox/sandpack-react';
import { nightOwl, aquaBlue } from "@codesandbox/sandpack-themes";
import viewContent from './generated/viewContent';
import { 
  SandpackProvider, 
  SandpackCodeEditor,
  SandpackPreview, 
  } from '@codesandbox/sandpack-react';

const files = {
  '/View.tsx': {
    code: viewContent,
    // readOnly: true,
  },
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
    <div className=' h-[calc(100vh-4rem)] '>
      <SandpackProvider 
        template="react" 
        files={files} 
        customSetup={{
          dependencies: {
            "p5": "^1.8.0",
          }
        }}
        theme={aquaBlue}
        options={{
          visibleFiles: ["/View.tsx"],
          activeFile: "View.tsx",
        }}
      >
        <SandpackLayout className=' flex flex-col w-2/3 h-[calc(100vh-4rem)]' >
          <SandpackPreview className=' h-1/2' />
            <SandpackCodeEditor
              // showTabs
              // showLineNumbers={true}
              // showInlineErrors
              // wrapContent
              // closableTabs
              className=' h-1/2' 
            />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}

export default App;
