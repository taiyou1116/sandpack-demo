import { SandpackFiles, SandpackLayout } from '@codesandbox/sandpack-react';
import { nightOwl, aquaBlue } from "@codesandbox/sandpack-themes";
import { 
    SandpackProvider, 
    SandpackCodeEditor,
    SandpackPreview, 
    } from '@codesandbox/sandpack-react';

type TempleteProps = {
    files: SandpackFiles,
    visibleFiles: string[],
    activeFile: string,
  }
  
  function Templete(props: TempleteProps) {
    const { files, visibleFiles, activeFile } = props;
  
    return (
      <div className='flex p-10 gap-5'>
        {/* 進捗はしまえる */}
        <div className=' flex w-1/5 bg-slate-400 rounded-lg justify-center p-5'>
          <h1>進捗</h1>
        </div>
        <div className=' flex w-1/5 bg-black rounded-lg justify-center p-5'>
          <h1 className=' text-gray-300'>ヒント</h1>
        </div>
        <div className=' h-[calc(100vh-4rem)] w-3/5 '>
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
              visibleFiles:visibleFiles,
              activeFile: activeFile,
            }}
          >
            <SandpackLayout className=' flex flex-col w-full h-[calc(100vh-4rem)]' >
              <SandpackPreview 
                className=' h-1/2' 
              />
                <SandpackCodeEditor
                  showTabs
                  showLineNumbers={true}
                  showInlineErrors
                  className=' h-1/2' 
                />
            </SandpackLayout>
          </SandpackProvider>
        </div>
        
      </div>
    );
  }
  
  export default Templete;