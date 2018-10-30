'use strict';

//village stats
var day = 1;
var population = 24;
var totalgems = 0;
var selector;
//var seeker = require('./character.js');//dice que character.js es un modulo común de js, que debe ser convertido a un ES6

var CombatScene = {

  MainMenuScene: function () {
    this.game.state.start('mainmenu');

  },

  seeker: require('../characters/character.js'),
  enemy: require('../characters/character.js'),
  hpBarSeeker: require('../interface/statusBar.js'),
  hpBarEnemy: require('../interface/statusBar.js'),
  timeActionBar: require('../interface/statusBar.js'),

  // Buttons functions
  attackKey: function () {
    if (true) {
      this.seeker.attack(this.enemy);
      this.game.add.audio('preAttacking',0.1).play();
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
    var combatbackground = this.game.add.sprite(0, 0, 'watercombatbackground');
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
    var mask = this.game.add.sprite(0, 0, 'interface');

    //attackbutton
    this.game.add.sprite(25, 132, 'attackIcon').tint = 0x676767;
    let a = this.game.add.reactiveBar(this.game.world, 25, 132, 'attackIcon', function () {
      return (1 - this.attack.timeToCoolDown() / this.attack.coolDownTime) * 100;
    }, this.seeker, this.seeker.coolDown.attack.while).maskAngle = -90;

    //blockbutton
    this.game.add.sprite(44, 132, 'blockIcon').tint = 0x676767;
    this.game.add.reactiveBar(this.game.world, 44, 132, 'blockIcon', function () {

      return (1 - this.block.timeToCoolDown() / this.block.coolDownTime) * 100;
    }, this.seeker, this.seeker.coolDown.block.while).maskAngle = -90;

    //mask.tint = 0x605437;


    /*var healthBarSeeker = this.game.add.healthBar(this.game, 0,100,this.seeker,'healthBar','damageBar','emptyBar',
        {},1000,100);//this.game.add.circleWithSectors(193, 31, 7, [0, Math.PI * 2 / 4, Math.PI * 4 / 3], [0xFF0000, 0x0000FF, 0x00FF00], [0.5, 0.5, 0.6], false, 50);*/
    var style = require('../../assets/fonts/style.json');
    var textMonster = this.game.add.richText(120, 60, 50, Color('#FF0000', Tremble(1,5,1,'GRAAHH!!')), style);
    var textSeeker = this.game.add.richText(0, 60, 50, Color('#000000', Tremble(0.1,1,1,'Are you a spider?')), style);
    console.log(textSeeker);
    var g = this.game.add.graphics(1, 0);
    for (let i = 0; i < 75; i++) {
      g.beginFill(0xffffff);
      g.drawRect(2 * i, 0, 1, 1);
      g.beginFill(0x000000);
      g.drawRect(2 * i + 1, 0, 1, 1);
    }
    g.angle = 90;
    var ge = this.game.add.graphics(0, 0);
    for (let i = 0; i < 100; i++) {
      ge.beginFill(0xffffff);
      ge.drawRect(2 * i, 0, 1, 1);
      ge.beginFill(0x000000);
      ge.drawRect(2 * i + 1, 0, 1, 1);
    }
    // Controls
    this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.attackKey, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.W).onDown.add(this.blockKey, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.Z).onDown.add(this.attackEnemy, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.X).onDown.add(this.blockEnemy, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.H).onDown.add(this.hurtSeeker, this);

    this.game.input.keyboard.addKey(Phaser.Keyboard.X).onDown.add(this.MainMenuScene, this);

    // prueba texto

    this.game.input.onDown.add(gofull, this);//FULLSCREEN

    //var text = this.game.add.text(50, 50, "jeje", style);

    //music
    var music = this.game.add.audio('firetheme', 0.1, true);
    music.play();

    //prueba cursor
     selector = this.game.add.sprite(50, 50, 'cursor');

  },
  update: function () {
    //prueba cursor
    selector.x = this.game.input.x;
    selector.y = this.game.input.y;
  }
};


function gofull() {

  if (this.game.scale.isFullScreen) {
    this.game.scale.stopFullScreen();
  }
  else {
    this.game.scale.startFullScreen(false);
  }

}

module.exports = CombatScene;
