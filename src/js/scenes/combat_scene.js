'use strict';

var Stats = require('../characters/stats');
var Item = require('../characters/item');
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
    this.combatHUD._enemyHUD._actionBar.reUpdate();
  },
  blockKey: function () {
    this.seeker.start();
    this.enemy.start();
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
    var combatbackground = this.game.add.image(0, 0, 'combatbackground');
    //render seeker //tope de nombre caracteres = 9
    this.seeker = this.game.add.seeker(0, -8, 'Alo\'th', {damage: 99, defense: 3, speed: 1, health: 20, perception: 1}, 
      ['healthPotion','speedEnemyPotion'], 'seekerBruteAnimations',
      {
        idle:[[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
        attack:[[24, 25, 26, 27, 28, 29, 30, 31], [32, 33, 34, 35, 36, 37, 38, 39, 40], 2000, 5000],
        block:[[48, 49, 50, 51, 52], [53, 54], [57, 58, 59], 3000, 5000],
        die:[[72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95]],
        useObjects:[]
      });
    this.seeker.addParticle.blood(39, 98, 10, 'blueBlood');
    //render enemy
var a = require('../../assets/patterns/patterns');
    this.enemy = this.game.add.enemy(this.game.world.width - 80, -8, 'Lord Ragno', {damage: 5, defense: 10, speed: 1, health: 27, perception: 3}, 'spiderAnimations', 
    {
      idle:[[0, 1, 2, 3, 4, 5]],
      attack:[[24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], [35, 36, 37, 38, 39, 40, 41]],
      block:[[48, 49, 50, 51, 52, 53, 54], [55, 56], [58, 59, 60]],
      die:[[72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96]]
    },this.seeker, a.normal);
    this.enemy.addParticle.blood(40, 93, 10, 'greenBlood');

    //interface
    this.combatHUD = this.game.add.combatHUD(0, 0, this.seeker, this.enemy);
    //transicion de entrada a combate

    var filter = this.game.add.filter('Pixelate', 800, 600);
    this.game.world.filters = [filter];
    filter.sizeX = 1000;
    filter.sizeY = 1000;
    var tween = this.game.add.tween(filter).to({ sizeX: 1, sizeY: 1 }, 2000, "Quart.easeOut").start();
    tween.onComplete.add(function () {
      this.game.world.filters = null;
      // Controls
      this.seeker.idle();
      this.enemy.act();
      this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.attackKey, this);
      this.game.input.keyboard.addKey(Phaser.Keyboard.W).onDown.add(this.blockKey, this);
      this.game.input.keyboard.addKey(Phaser.Keyboard.Z).onDown.add(this.attackEnemy, this);
      this.game.input.keyboard.addKey(Phaser.Keyboard.X).onDown.add(this.blockEnemy, this);
      this.game.input.keyboard.addKey(Phaser.Keyboard.H).onDown.add(this.hurtSeeker, this);
      this.game.input.keyboard.addKey(Phaser.Keyboard.J).onDown.add(function () {
        this.seeker.use('Heal Potion');
      }, this);
      this.game.input.keyboard.addKey(Phaser.Keyboard.X).onDown.add(this.MainMenuScene, this);
      this.combatHUD._enemyHUD._actionBar.reUpdate();
      this.combatHUD._enemyHUD._actionBar._timer.start();
    }, this);

    var style = require('../../assets/fonts/style.json');

    this.enemy.onDeathComplete.add(function () {
      var t = this.game.time.create();
      t.add(1000, function () {
        filter = this.game.add.filter('Pixelate', 800, 600);
        this.game.world.filters = [filter];
        filter.sizeX = 1;
        filter.sizeY = 1;
        tween = this.game.add.tween(filter).to({ sizeX: 1000, sizeY: 1000 }, 2000, "Quart.easeIn").start()
          .onComplete.add(function () {  this.MainMenuScene(); }, this);
      }, this);
      t.start();
    }, this);
    this.seeker.onDeathComplete.add(function () {
      var t = this.game.time.create();
      t.add(1000, function () {
        filter = this.game.add.filter('Pixelate', 800, 600);
        this.game.world.filters = [filter];
        filter.sizeX = 1;
        filter.sizeY = 1;
        tween = this.game.add.tween(filter).to({ sizeX: 1000, sizeY: 1000 }, 2000, "Quart.easeIn").start()
          .onComplete.add(function () {  this.MainMenuScene(); }, this);
      }, this);
      t.start();
    }, this);

    
    //para ir a fullscreen pulsar F11
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.add(this.goFullscreen, this);

    //music
    var music = this.game.add.audio('firetheme', 0.1, true);
    this.game.sound.stopAll();
    music.play();

    //INFOWINDOWS
    //vitalidad
    //this.game.add.infoWindow(50, 50, 62, 53, 'infoWindow', [textFunctions.Color('#B60000', 'Vitalidad'), ' Determina tu salud máxima.'], { align: 'left' });
    //ataque
    /*this.game.add.infoWindow(50, 50, 62, 53, 'infoWindow',  [textFunctions.Color('#B60000','Ataque'), ' Determina el daño que haces.'], {align: 'left'});
    //defensa
    this.game.add.infoWindow(50, 50, 62, 53, 'infoWindow',  [textFunctions.Color('#B60000','Defensa'), ' Determina el daño bloqueado.'], {align: 'left'});
    //velocidad
    this.game.add.infoWindow(50, 50, 62, 53, 'infoWindow',  [textFunctions.Color('#B60000','Velocidad'), ' Determina el tiempo entre acciones.'], {align: 'left'});
    //percepcion
    this.game.add.infoWindow(50, 50, 78, 70, 'infoWindow',  [textFunctions.Color('#B60000','Percepción'), ' Determina la interfaz enemiga.'], {align: 'left'});
    */


    //prueba cursor
    selector = this.game.add.sprite(50, 50, 'cursor');

  },
  update: function () {
    //prueba cursor
    selector.x = this.game.input.x;
    selector.y = this.game.input.y;
  },

  goFullscreen: function () {

    if (this.game.scale.isFullScreen) {
      this.game.scale.stopFullScreen();
    }
    else {
      this.game.scale.startFullScreen(false);
    }

  }
};




module.exports = CombatScene;
