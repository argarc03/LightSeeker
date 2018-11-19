'use strict';

var Stats = require('../characters/stats');
var textFunctions = require('../interface/textFunctions');

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
  seeker: null,
  enemy: null,
  // Buttons functions
  attackKey: function () {
    if (true) {
      this.seeker.attack(this.enemy);
      this.game.add.audio('preAttacking', 0.1).play();
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
    //fadeIn
    this.camera.flash('#000000');

    //render background
    var combatbackground = this.game.add.sprite(0, 0, 'combatbackground');
    //render seeker //tope de nombre caracteres = 9
    this.seeker = this.game.add.seeker(0, -8, '99', new Stats(1, 3, 1, 20, 1), 'seekerAnimations');
    this.seeker.addAction.idle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    this.seeker.addAction.attack([24, 25, 26, 27, 28, 29, 30, 31], [32, 33, 34, 35, 36, 37, 38, 39, 40], 2000, 5000);
    this.seeker.addAction.block([48, 49, 50, 51, 52], [53, 54], [57, 58, 59], 3000, 5000);
    this.seeker.addAction.die([72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95]);
    this.seeker.addParticle.blood(39, 98, 10, 'blueBlood');
    //render enemy

    this.enemy = this.game.add.enemy(this.game.world.width - 80, -8, 'Big Spider', new Stats(10, 1, 1, 10, 1), 'spiderAnimations', this.seeker, require('../../assets/patterns/patterns').boss);
    this.enemy.addAction.idle([0, 1, 2, 3, 4, 5]);
    this.enemy.addAction.attack([24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], [35, 36, 37, 38, 39, 40, 41]);
    this.enemy.addAction.block([48, 49, 50, 51, 52, 53, 54], [55, 56], [58, 59, 60]);
    this.enemy.addAction.die([72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96]);
    this.enemy.addParticle.blood(40, 93, 10, 'greenBlood');
    
    //interface
    this.game.add.seekerCombatHUD(0,0,this.seeker,this.enemy);

    //transicion de entrada a combate
    
    var filter = this.game.add.filter('Pixelate', 800, 600);
    this.game.world.filters = [filter];
    filter.sizeX=1000;
    filter.sizeY = 1000;
    var tween = this.game.add.tween(filter).to({ sizeX: 1, sizeY: 1 }, 2000, "Quart.easeOut").start();
    tween.onComplete.add(function(){this.game.world.filters = null;
    // Controls
    this.seeker.idle();
    this.enemy.act();
    this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.attackKey, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.W).onDown.add(this.blockKey, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.Z).onDown.add(this.attackEnemy, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.X).onDown.add(this.blockEnemy, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.H).onDown.add(this.hurtSeeker, this);

    this.game.input.keyboard.addKey(Phaser.Keyboard.X).onDown.add(this.MainMenuScene, this);
  },this);

    var style = require('../../assets/fonts/style.json');

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
    this.seeker.onDeathComplete.add(this.MainMenuScene, this);
    this.enemy.onDeathComplete.add(this.MainMenuScene, this);
    //para ir a fullscreen pulsar F4
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.add(this.goFullscreen, this);

    //music
    var music = this.game.add.audio('firetheme', 0.1, true);
    this.game.sound.stopAll();
    music.play();
    this.game.add.infoWindow(50, 50, 50, 60, 'infoWindow',  'Damelo Todo \n\nPapito', {align: 'left'});
    //prueba cursor
    selector = this.game.add.sprite(50, 50, 'cursor');
    
  },
  update: function () {
    //prueba cursor
    selector.x = this.game.input.x;
    selector.y = this.game.input.y;
  },

  goFullscreen: function() {

    if (this.game.scale.isFullScreen) {
      this.game.scale.stopFullScreen();
    }
    else {
      this.game.scale.startFullScreen(false);
    }
  
  }
};




module.exports = CombatScene;
