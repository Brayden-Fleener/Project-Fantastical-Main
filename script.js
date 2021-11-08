const game = new Phaser.Game(800, 800, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update
})


let health = 100
let cursors
let player
let object
let enemy

function preload() {
  game.load.image('sky', 'assets/backgrounds/Pokemon.png')
  game.load.spritesheet('boy', 'assets/sprites/boy_run_left_right.png', 31.99, 43)
  game.load.image('object', 'assets/sprites/black1.png')
}

function create() {


  game.physics.startSystem(Phaser.Physics.ARCADE)

  game.add.sprite(0, 0, 'sky')

  object = game.add.group()
  object.enableBody = true
  var object1 = object.create(100, game.world.height - 500, 'object')
  //object1.scale.setTo(1, 1)
  object1.body.immovable = true

  player = game.add.sprite(370, game.world.height - 100, 'boy')

  game.physics.arcade.enable(player)

  player.body.collideWorldBounds = true

  player.animations.add('left', [0, 3], 5, true)
  player.animations.add('right', [5, 6], 5, true)
  player.animations.add('up', [5, 6], 5, true)
  player.animations.add('down', [0, 3], 5, true)

  cursors = game.input.keyboard.createCursorKeys()
  
  }

function update() {

  this.add.text(16,16, health, { fill: '#ffffff'});

  var speed = 500

  if (game.physics.arcade.collide(player, object)) {
    health = health-5
  }

  if (health <= 0) {
    player.x = 1000000000000000000
    object.x = 1000000000000000000
  } else if (health <= 50) {
    speed = 50
  }

  game.physics.arcade.overlap(player, null, this)


  if (cursors.up.isDown && cursors.down.isDown) {
    var speed = 100
  }

  if (cursors.up.isDown && cursors.left.isDown) {
    player.body.velocity.x = -speed
    player.body.velocity.y = -speed

  } else if (cursors.up.isDown && cursors.right.isDown) {
    player.body.velocity.x = speed
    player.body.velocity.y = -speed

  } else if (cursors.down.isDown && cursors.left.isDown) {
    player.body.velocity.x = -speed
    player.body.velocity.y = speed

  } else if (cursors.down.isDown && cursors.right.isDown) {
    player.body.velocity.x = speed
    player.body.velocity.y = speed

  } else if (cursors.up.isDown) {
    player.body.velocity.y = -speed

  } else if (cursors.down.isDown) {
    player.body.velocity.y = speed

  } else if (cursors.left.isDown) {
    player.body.velocity.x = -speed
    player.animations.play('left')
  } else if (cursors.right.isDown) {
    player.body.velocity.x = speed
    player.animations.play('right')
  } else {
    player.animations.stop()
    player.body.velocity.x = 0
    player.body.velocity.y = 0
  }

 


}