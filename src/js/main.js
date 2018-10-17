'use strict';

//PREGUNTAS

// Aún se deben controlar los sonidos
// npm install webfont?

 var webFontLoading = {
  active: function() {
		var game = new Phaser.Game(200, 150, Phaser.AUTO, 'game');
    webFontLoading.game = game;
    game.state.add('boot', BootScene);
    game.state.add('preloader', PreloaderScene);
    game.state.add('mainmenu', MainMenuScene);
    game.state.add('combat', CombatScene);
    game.state.add('event', EventScene);
    game.state.start('boot');
  },
  custom: {
    families: ['minecraftregular'],
    urls: ["assets/fonts/webFonts/stylesheet.css"]
  }
};

var WebFont = require('webfontloader');

var MainMenuScene = require('./mainmenu_scene.js');

var CombatScene = require('./combat_scene.js');

var EventScene = require('./event_scene.js');

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
        //HealthBar
        this.game.load.image('healthBar','assets/images/interface/healthBar.png');
        this.game.load.image('damageBar','assets/images/interface/damageBar.png');
        this.game.load.image('empty','assets/images/interface/emptyBar.png');
        this.game.load.image('frameBar','assets/images/interface/frameBar.png');
        //Action Icon
        this.game.load.image('attackIcon','assets/images/interface/attackIcon.png');
        this.game.load.image('blockIcon','assets/images/interface/blockIcon.png');
        //Items
        this.game.load.image('itemIcon','assets/images/interface/itemIcon.png');
        this.game.load.image('itemIcon2','assets/images/interface/itemIcon2.png');
      //BACKGROUNDS
      this.game.load.image('imagenmenu', 'temporal%20images/Village.jpg');
      this.game.load.image('combatbackground', 'assets/images/backgrounds/combatbackground.png');
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
      this.load.audio('track', ['assets/sounds/pencilsketching.mp3']);
      //Music
      this.load.audio('boss', ['assets/music/bosstheme.wav']);
      this.load.audio('firetheme', ['assets/music/firetheme.wav']);


  },

  create: function () {
      this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL

      PreloaderScene.game.state.start('combat');
  }

};

WebFont.load(webFontLoading);

window.onload = function () {
  
};
