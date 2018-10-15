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
    this.seeker = this.game.add.seeker(0, -8, 'Carlos León', new Stats(10, 3, 1, 20), 'seekerAnimations');
    this.seeker.addAction.idle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    this.seeker.addAction.attack([24, 25, 26, 27, 28, 29, 30, 31], [32, 33, 34, 35, 36, 37, 38, 39, 40], 5000, 5000);
    this.seeker.addAction.block([48, 49, 50, 51, 52], [53, 54], [57, 58, 59], 5000, 5000);
    this.seeker.addAction.die([72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95]);
    this.seeker.addParticle.blood(39, 98, 10, 'blueBlood');
    //render enemy

    this.enemy = this.game.add.character(this.game.world.width - 80, -8, 'Big Spider', new Stats(10, 1, 1, 10), 'spiderAnimations');
    this.enemy.addAction.idle([0, 1, 2, 3, 4, 5]);
    this.enemy.addAction.attack([24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], [35, 36, 37, 38, 39, 40, 41]);
    this.enemy.addAction.block([48, 49, 50, 51, 52, 53, 54], [55, 56], [58, 59, 60]);
    this.enemy.addAction.die([72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96]);
    this.enemy.addParticle.blood(40, 93, 10, 'greenBlood');
    this.enemy.idle();
    this.seeker.idle();

    //interface
    /*
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
  */

    /*
    var healthBarSeeker = this.game.add.healthBar(0,0,this.seeker,'statBar','retStatBar','statBar',
        {},1000,100);//this.game.add.circleWithSectors(193, 31, 7, [0, Math.PI * 2 / 4, Math.PI * 4 / 3], [0xFF0000, 0x0000FF, 0x00FF00], [0.5, 0.5, 0.6], false, 50);
    */
    var texti = this.game.add.richText(50,50,'<b>hola</b>aaaaa',{font: "20px Arial", fill: "#ffffff"});
    //texti.addColor('#ffff00',0);
    var text = this.game.add.reactiveText();//
    text.addVariable('actualHp', function () {
      return this.hp;
    }, this.seeker.onHpChange, this.seeker);
    text.addVariable('maxHp', function () {
      return this.stats.health;
    }, this.seeker.stats.onHealthChange, this.seeker);
    text.protoText = '%actualHp/%maxHp';

    // Controls
    this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.attackKey, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.W).onDown.add(this.blockKey, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.Z).onDown.add(this.attackEnemy, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.X).onDown.add(this.blockEnemy, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.H).onDown.add(this.hurtSeeker, this);

    // prueba texto

    var style = {
      font: "35px jeje",
      fill: "#fff",
      boundsAlignH: "center",
      boundsAlignV: "middle"
    };

    //var text = this.game.add.text(50, 50, "jeje", style);

    //music
    var music = this.game.add.audio('boss', 0.1, true);
    music.play();

  },
  update: function () {

  }
};



module.exports = CombatScene;
