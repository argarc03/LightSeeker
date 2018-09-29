'use strict';

//village stats
var day = 1;
var population = 24;
var totalgems = 0;

//var seeker = require('./character.js');//dice que character.js es un modulo común de js, que debe ser convertido a un ES6

var textito;
var CombatScene = {

  seeker: require('./character.js'),
  enemy: require('./character.js'),
  hpbarseeker: require('./statusBar.js'),
  create: function () {
    //render background
    var combatbackground = this.game.add.sprite(0, 0, 'combatbackground');
    //render seeker
    this.seeker = new Character(0, -8, 'Carlos Leon', 10, 3, 1, 20, 'seekerAnimations', this.game,
      {
        idle: new Idle('idle', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
        attack: new Attack('attack', [17, 18, 19, 20, 21, 22, 23, 24], [25, 26, 27, 28, 29, 30, 31, 32, 33], null, null),
        block: new Block('block', [34, 35, 36, 37, 38], [39, 40], [43, 44, 45], null, null, null)
      }, new StatusEmitter('blueBlood', 39, 98));


    //render enemy
    this.enemy = new Character(this.game.world.width - 80, -8, 'Big Spider', 20, 1, 1, 10, 'spiderAnimations', this.game,
      {
        idle: new Idle('idle', [0, 1, 2, 3, 4, 5]),
        attack: new Attack('attack', [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], [35, 36, 37, 38, 39, 40, 41], null, null),
        block: new Block('block', [48, 49, 50, 51, 52, 53, 54], [55, 56], [58, 59, 60], null, null, null),
        die: new Die('die', [72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96], null)
      }, new StatusEmitter('greenBlood', 40, 93));

    this.seeker.idle();
    this.enemy.idle();


    //interface
    this.hpbarseeker = new HealthBar(11,16,8,67,'statBar','retStatBar',this.game);

    textito = this.game.add.bitmapText(28, 16, 'normal8', this.seeker.hp + '/' + this.seeker.stats.health, 8);
    textito.text = this.seeker.hp + '/' + this.seeker.stats.health;




    //music
    var music = this.game.add.audio('boss');
    music.play();


  },
  update: function () {
    //console.log(seeker.percentageTimeBlock);

    //console.log(seeker.calculateCurrentBlockTime());
    //console.log(seeker.bleed.maxParticles);
    //console.log(seeker.calculateCurrentBlockTime());

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.W))
      this.seeker.block();
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.Q))
      this.seeker.attack(this.enemy);
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.Z))
      this.enemy.attack(this.seeker);
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.X))
      this.enemy.block();
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.C))
      this.enemy.die();
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.H))
      this.enemy.hurt(1);


    //update render
    textito.setText(this.seeker.hp + '/' + this.seeker.stats.health);
    this.hpbarseeker.setPercentage(this.seeker.hp/this.seeker.stats.health*100);

  }
};



module.exports = CombatScene;
