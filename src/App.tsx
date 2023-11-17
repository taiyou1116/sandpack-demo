
import player from './generated/playerContent';
import Templete from './Templete';

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
        player.moveLeft();
        p.rect(player.playerX, player.playerY / 2, 50, 50); // プレイヤーの描画
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
    <div>
      <Templete
        files={files}
        visibleFiles={["App.js", "player.js"]}
        activeFile='App.js'
      />
    </div>
  );
}

export default App;