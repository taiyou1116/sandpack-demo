import './App.css';
import { SandpackLayout } from '@codesandbox/sandpack-react';
import { nightOwl, aquaBlue } from "@codesandbox/sandpack-themes";
import player from './generated/playerContent';
import { 
  SandpackProvider, 
  SandpackCodeEditor,
  SandpackPreview, 
  } from '@codesandbox/sandpack-react';

const files = {
  "player.js": {
    code: player
  },

  "/App.js": {
    code: `
    import p5 from 'p5';
    import player from './player';

    // p5.js スケッチの定義
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(800, 350);
        p.background(220);
      };

      p.draw = () => {
        p.rect(player.playerX, player.height / 2, 50, 50); // プレイヤーの描画
      };
    };

    // p5.js スケッチのインスタンス化
    new p5(sketch);

    export default sketch;
    `,
  }
}

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
          visibleFiles: ["/App.js", "player.js"],
          activeFile: "App.js",
        }}
      >
        <SandpackLayout className=' flex flex-col w-2/3 h-[calc(100vh-4rem)]' >
          <SandpackPreview className=' h-1/2' />
            <SandpackCodeEditor
              showTabs
              showLineNumbers={true}
              showInlineErrors
              className=' h-1/2' 
            />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}

export default App;