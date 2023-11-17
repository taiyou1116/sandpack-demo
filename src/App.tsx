
import {homeContent, squareContent} from './generated/playerContent';
import Templete from './Templete';

const files = {
  "square.js": {
    code: squareContent
  },

  "/App.js": {
    code: homeContent,
  }
}

function App() {
  return (
    <div>
      <Templete
        files={files}
        visibleFiles={["square.js"]}
        activeFile='square.js'
      />
    </div>
  );
}

export default App;