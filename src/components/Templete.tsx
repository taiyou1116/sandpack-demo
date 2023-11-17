import { SandpackFiles, SandpackLayout } from '@codesandbox/sandpack-react';
import { nightOwl, aquaBlue } from "@codesandbox/sandpack-themes";
import { 
  SandpackProvider, 
  SandpackCodeEditor,
  SandpackPreview, 
} from '@codesandbox/sandpack-react';
import ModalComponent from './Modal';
import DescriptionModal from './DescriptionModal';
import { useState } from 'react';
import Description from './variable/Description';

type TempleteProps = {
  files: SandpackFiles,
  visibleFiles: string[],
  activeFile: string,
}
  
function Templete(props: TempleteProps) {
  const { files, visibleFiles, activeFile } = props;
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  }


  return (
    <div className='flex p-10 gap-5'>
      <div className=' flex w-2/5 bg-black rounded-lg justify-center p-5'>
        <Description />
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
      <ModalComponent 
        children={<DescriptionModal/>}
        open={isModalOpen}
        onClose={() => closeModal()}
      />
    </div>
  );
}

export default Templete;