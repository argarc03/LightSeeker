'use strict';



//village stats
var day = 1;
var population = 24;
var totalgems = 0;

var seeker = require('./character.js');//dice que character.js es un modulo común de js, que debe ser convertido a un ES6

var enemy = require('./character.js');

var CombatScene = {

  create: function () {
    //render background
    var combatbackground = this.game.add.sprite(0, 0, 'combatbackground');
    //render seeker
    seeker = new Character(0, -8, 'Carlos Leon', 1, 1, 1, 10, 'seekerAnimations', this.game,
      {
        idle: new Idle('idle', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
        attack: new Attack('attack', [17, 18, 19, 20, 21, 22, 23, 24], [25, 26, 27, 28, 29, 30, 31, 32, 33], null, null),
        block: new Block('block', [34, 35, 36, 37, 38], [39, 40], [43, 44, 45], null, null, null)
      });


    //render enemy
    enemy = new Character(this.game.world.width - 80, -8, 'Big Spider', 1, 1, 1, 10, 'spiderAnimations', this.game,
      {
        idle: new Idle('idle', [0, 1, 2, 3, 4, 5]),
        attack: new Attack('attack', [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], [35, 36, 37, 38, 39, 40, 41], null, null),
        block: new Block('block', [48, 49, 50, 51, 52, 53, 54], [55, 56], [58, 59, 60], null, null, null)
      });

    seeker.idle();
    enemy.idle();


    this.game.add.bitmapText(20, 56, 'font1', 'You can\'t KILL what is already DEAD.', 8);

    this.game.add.bitmapText(20, 136, 'font', 'Do you wanna', 7);


    //music
    var music = this.game.add.audio('boss');
    music.play();


  },
  update: function () {
    //console.log(seeker.percentageTimeBlock);

    console.log(seeker.calculateCurrentBlockTime());

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
      seeker.block();

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.A))
      seeker.sprite.animations.stop();

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.S))
      seeker.sprite.animations.currentAnim.play();

  }
};


module.exports = CombatScene;
