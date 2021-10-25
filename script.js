const game = new Phaser.Game(800, 800, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update
})

let cursors
let player

function preload () {
  game.load.image('sky', 'assets/backgrounds/Pokemon.png')
  game.load.spritesheet('boy', 'assets/sprites/boy_run_left_right.png', 31.99, 43)
}

function create () {
  game.physics.startSystem(Phaser.Physics.ARCADE)

  game.add.sprite(0, 0, 'sky')

  player = game.add.sprite(370, game.world.height -100, 'boy')

  game.physics.arcade.enable(player)

  player.body.collideWorldBounds = true

  player.animations.add('left', [0, 3], 5, true)
  player.animations.add('right', [5, 6], 5,true)
  player.animations.add('up', [5, 6], 5,true)
  player.animations.add('down', [0, 3], 5,true)

  cursors = game.input.keyboard.createCursorKeys()
}

function update () {
  game.physics.arcade.collide(player)

  game.physics.arcade.overlap(player, null, this)

  if (cursors.left.isDown) {
    player.body.velocity.x = -100
    player.animations.play('left')
  } else if (cursors.right.isDown) {
    player.body.velocity.x = 100
    player.animations.play('right')
  } else if (cursors.up.isDown) {
    player.body.velocity.y = -100
    player.animations.play('down')
  } else if (cursors.down.isDown) {
    player.body.velocity.y = 100
    player.animations.play('up')
  } else {
    player.animations.stop()
    player.body.velocity.x = 0
    player.body.velocity.y = 0
  }
}