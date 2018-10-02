'use strict';

//village stats
var day = 1;
var population = 24;
var totalgems = 0;

//var seeker = require('./character.js');//dice que character.js es un modulo común de js, que debe ser convertido a un ES6

var textito = require('./statusBar.js');
var CombatScene = {

  seeker: require('./character.js'),
  enemy: require('./character.js'),
  hpBarSeeker: require('./statusBar.js'),
  hpBarEnemy: require('./statusBar.js'),
  timeActionBar: require('./statusBar.js'),

  // Buttons functions
  attackKey: function () {
    if (true) {
      this.seeker.attack(this.enemy);
    }
  },
  blockKey: function () {
    if (true) {
      this.seeker.block();
    }
  },
  attackEnemy: function () {
    if (true) {
      this.enemy.attack(this.seeker);
    }
  },
  blockEnemy: function () {
    if (true) {
      this.enemy.block();
    }
  },

  // prototype buttons
  hurtSeeker: function () {
    this.seeker.hurt(1);
  },

  create: function () {

    //render background
    var combatbackground = this.game.add.sprite(0, 0, 'combatbackground');
    //render seeker
    this.seeker = new Character(0, -8, 'Carlos Leon', 10, 3, 1, 20, 'seekerAnimations', this.game,
      {
        idle: new Idle('idle', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
        attack: new Attack('attack', [24, 25, 26, 27, 28, 29, 30, 31], [32, 33, 34, 35, 36, 37, 38, 39, 40], null, null),
        block: new Block('block', [48, 49, 50, 51, 52], [53, 54], [57, 58, 59], null, null, null),
        die: new Die('die', [72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95], null)
      }, new StatusEmitter('blueBlood', 39, 98));


    //render enemy
    this.enemy = new Character(this.game.world.width - 80, -8, 'Big Spider', 10, 1, 1, 10, 'spiderAnimations', this.game,
      {
        idle: new Idle('idle', [0, 1, 2, 3, 4, 5]),
        attack: new Attack('attack', [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], [35, 36, 37, 38, 39, 40, 41], null, null),
        block: new Block('block', [48, 49, 50, 51, 52, 53, 54], [55, 56], [58, 59, 60], null, null, null),
        die: new Die('die', [72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96], null)
      }, new StatusEmitter('greenBlood', 40, 93));

    this.seeker.idle();
    this.enemy.idle();


    //interface
    this.hpBarSeeker = new HealthBar(this.game, 11, 16, 'statBar', 'retStatBar', 1500, 500, 18, 0, function () {
      return this.hp + '/' + this.stats.health;
    }, this.seeker, 'normal8', 8);
    this.hpBarSeeker.width = 67;
    this.hpBarSeeker.height = 8;
    this.hpBarEnemy = new HealthBar(this.game, 131, 16, 'statBar', 'retStatBar', 1500, 500, 18, 0, function () {
      return this.hp + '/' + this.stats.health;
    }, this.enemy, 'normal8', 8);
    this.hpBarEnemy.width = 67;
    this.hpBarEnemy.height = 8;
    this.timeActionBar = new Bar(this.game, 186, 29, 'statBar');
    this.timeActionBar.width = -55;
    this.timeActionBar.height = 4;

    // Interface Events
    this.seeker.onHpChange.add(this.hpBarSeeker.changePercentage, this.hpBarSeeker, 0, function () {
      return this.hp / this.stats.health * 100;
    }, this.seeker);
    this.enemy.onHpChange.add(this.hpBarEnemy.changePercentage, this.hpBarEnemy, 0, function () {
      return this.hp / this.stats.health * 100;
    }, this.enemy);
    this.seeker.onHpChange.add(this.timeActionBar.changePercentage, this.timeActionBar, 0, function () {
      return this.hp / this.stats.health * 100;
    }, this.seeker);

    textito = this.game.add.circleWithSectors(193, 31, 7, [0, Math.PI * 2 / 4, Math.PI * 4 / 3], [0xFF0000, 0x0000FF, 0x00FF00], [0.5, 0.5, 0.6], false, 50);
    // Controls

    this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.attackKey, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.W).onDown.add(this.blockKey, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.Z).onDown.add(this.attackEnemy, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.X).onDown.add(this.blockEnemy, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.H).onDown.add(this.hurtSeeker, this);

    //music
    var music = this.game.add.audio('boss');
    music.play();

  },
  update: function () {

  }
};



module.exports = CombatScene;
