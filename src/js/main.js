'use strict';

//PREGUNTAS

// Aún se deben controlar los sonidos

var IntroScene = require('./scenes/intro_scene.js');
var MainMenuScene = require('./scenes/mainmenu_scene.js');
var CombatScene = require('./scenes/combat_scene.js');
var EventScene = require('./scenes/event_scene.js');
var CreditsScene = require('./scenes/credits_scene.js');


 var webFontLoading = {
  active: function() {
    var game = new Phaser.Game(200, 150, Phaser.AUTO, 'game');
    
    webFontLoading.game = game;
    game.state.add('boot', BootScene);
    game.state.add('preloader', PreloaderScene);
    game.state.add('intro', IntroScene);
    game.state.add('mainmenu', MainMenuScene);
    game.state.add('combat', CombatScene);
    game.state.add('event', EventScene);
    game.state.add('credits', CreditsScene);
    game.state.start('boot');
  },
  custom: {
    families: ['Minecraft'],
    urls: ["assets/fonts/webFonts/stylesheet.css"]
  }
};

var WebFont = require('webfontloader');


var BootScene = {
  preload: function () {
    // load here assets required for the loading screen
    this.game.load.image('preloader_bar', 'temporal%20images/preloader_bar.png');
  },

  create: function () {
    this.game.state.start('preloader');
  }
};


var PreloaderScene = {
  preload: function () {
    // scale the game 4x
    this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    this.game.scale.setUserScale(4, 4);

    // enable crisp rendering
    this.game.renderer.renderSession.roundPixels = true;
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);

    this.loadingBar = this.game.add.sprite(0, 240, 'preloader_bar');
    this.loadingBar.anchor.setTo(0, 0.5);
    this.load.setPreloadSprite(this.loadingBar);
    // TODO: load here the assets for the game
    //IMAGES
      //INTERFACE
        this.game.load.image('interface','assets/images/interface/combatinterfaceback.png');
        //Cursor
        this.game.load.image('cursor','assets/images/interface/cursor.png');
        this.game.load.image('infoCursor','assets/images/interface/infoCursor.png');
        //HealthBar
        this.game.load.image('healthBar','assets/images/interface/healthBar.png');
        this.game.load.image('damageBar','assets/images/interface/damageBar.png');
        this.game.load.image('emptyBar','assets/images/interface/emptyBar.png');
        this.game.load.image('healBar','assets/images/interface/healBar.png')
        this.game.load.image('frameBar','assets/images/interface/frameBar.png');
        //Action Icon
        this.game.load.image('attackIcon','assets/images/interface/attackIcon.png');
        this.game.load.image('blockIcon','assets/images/interface/blockIcon.png');
        //Items
        this.game.load.image('itemIcon','assets/images/interface/itemIcon.png');
        this.game.load.image('itemIcon2','assets/images/interface/itemIcon2.png');
      //BACKGROUNDS
      this.game.load.image('imagenmenu', 'temporal%20images/Village.jpg');
      this.game.load.image('watercombatbackground', 'assets/images/backgrounds/watercombatbackground.png');
      //PARTICLES
      this.game.load.image('redBlood','assets/images/particles/redBlood.png');
      this.game.load.image('greenBlood','assets/images/particles/greenBlood.png');
      this.game.load.image('blueBlood','assets/images/particles/blueBlood.png');
      //CHARACTERS
        //Seeker
        this.game.load.spritesheet('seekerAnimations','assets/images/seeker/seekerAnimations.png',80,120);
        //Enemies
        this.game.load.spritesheet('spiderAnimations', 'assets/images/enemies/spiderAnimations.png',80,120);
        this.game.load.spritesheet('wormAnimations', 'assets/images/enemies/WormAlpha.png',80,120);
    //SOUNDS
      //Effects
      this.load.audio('attacking', ['assets/sounds/attacking.wav']);
      this.load.audio('preAttacking', ['assets/sounds/preAttacking.wav']);
      this.load.audio('blocking', ['assets/sounds/blocking.wav']);
      //Music
      this.load.audio('boss', ['assets/music/bosstheme.wav']);
      this.load.audio('firetheme', ['assets/music/firetheme.wav']);


  },

  create: function () {
      this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL

      PreloaderScene.game.state.start('intro');
  }

};
WebFont.load(webFontLoading);

window.onload = function () {
  
};
