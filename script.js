const gameState = {}

function preload() {
    this.load.image('player', 'assets/sprites/atlas.png');
    this.load.image('background', 'assets/backgrounds/Pokemon.png');
}

function create() {
  gameState.image = this.add.image(250,250, 'background');
  gameState.image.setScale(.62);
  gameState.player = this.add.sprite(200,200,'player');
  gameState.player.setScale(.60);
  gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (gameState.cursors.right.isDown) {
    gameState.player.x +=5;
  }
  if (gameState.cursors.left.isDown) {
    gameState.player.x -=5;
  }
  if (gameState.cursors.up.isDown) {
    gameState.player.y -=5;
  }
  if (gameState.cursors.down.isDown) {
    gameState.player.y +=5;
  }
}

const config = {
    type: Phaser.AUTO,
    width: 500,
    height: 500,
    backgroundColor: '',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

