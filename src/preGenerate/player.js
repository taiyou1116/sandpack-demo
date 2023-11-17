const player = {
    playerX: 0,
    playerY: 0,
    speed: 0,
  
    moveLeft: function() {
      this.playerX -= this.speed;
    },
  
    moveRight: function() {
      this.playerX += this.speed;
    },
  
    jump: function() {
      this.playerY -= 10; // ジャンプの高さ
    }
};
  
export default player;
  