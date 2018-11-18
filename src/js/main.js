'use strict';

//PREGUNTAS
// - ¿Hay alguna manera para evitar la carga repetida? Quiero que, cuando tenga absolutamente todo cargado, se de a start.
//   y poner pantalla de carga(sin conocer porcentaje jeje).

var IntroScene = require('./scenes/intro_scene.js');
var MainMenuScene = require('./scenes/mainmenu_scene.js');
var CombatScene = require('./scenes/combat_scene.js');
var EventScene = require('./scenes/event_scene.js');
var CreditsScene = require('./scenes/credits_scene.js');
var SettingsScene = require('./scenes/settings_scene.js');

 var webFontLoading = {
  active: function() {
    var game = new Phaser.Game(200, 150, Phaser.AUTO, 'game');
require('./gameFactory')(Phaser);

    webFontLoading.game = game;
    game.state.add('boot', BootScene);
    game.state.add('preloader', PreloaderScene);
    game.state.add('intro', IntroScene);
    game.state.add('mainmenu', MainMenuScene);
    game.state.add('combat', CombatScene);
    game.state.add('event', EventScene);
    game.state.add('credits', CreditsScene);
    game.state.add('settings', SettingsScene);

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
    this.loadingBar = this.game.add.sprite(0, 0, 'preloader_bar');
    this.loadingBar.anchor.setTo(0, 0.5);
    this.load.setPreloadSprite(this.loadingBar);
    // TODO: load here the assets for the game
    //IMAGES
        this.game.load.script('filter', 'https://cdn.rawgit.com/photonstorm/phaser-ce/master/filters/Pixelate.js');
      //INTERFACE
        this.game.load.spritesheet('infoWindow', 'assets/images/interface/infoWindow.png', 5, 5);
        this.game.load.image('eventImage','assets/images/interface/eventImage.png');
        //HUDs
        this.game.load.image('interface','assets/images/interface/combatinterfaceback.png');
        this.game.load.image('eventinterface','assets/images/interface/eventinterfaceback.png');
        //HUDs scroll
        this.game.load.spritesheet('sliderBackground','assets/images/interface/sliderbackground.png',6,5);
        this.game.load.spritesheet('slider','assets/images/interface/slider.png',6,3);
        //Cursor
        this.game.load.image('cursor','assets/images/interface/cursor.png');
        this.game.load.image('infoCursor','assets/images/interface/infoCursor.png');
        this.game.load.image('handCursor','assets/images/interface/handCursor.png');
        this.game.load.image('selectCursor','assets/images/interface/selectCursor.png');
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
        //Stats Icons
        this.game.load.image('damageIcon','assets/images/interface/damageIcon.png');
        this.game.load.image('defenseIcon','assets/images/interface/defenseIcon.png');
        this.game.load.image('speedIcon','assets/images/interface/speedIcon.png');
        this.game.load.image('healthIcon','assets/images/interface/healthIcon.png');
        this.game.load.image('perceptionIcon','assets/images/interface/perceptionIcon.png');
        this.game.load.image('gemIcon','assets/images/interface/gemIcon.png');
        this.game.load.image('villageGemIcon','assets/images/interface/villageGemIcon.png');
        this.game.load.image('populationIcon','assets/images/interface/populationIcon.png');
        //Buttons
        this.game.load.spritesheet('button','assets/images/interface/button.png',32,32);
        this.game.load.image('actionFrame', 'assets/images/interface/actionFrame.png');
        this.game.load.image('optionBack','assets/images/interface/optionback.png');
        this.game.load.image('pauseButton','assets/images/interface/pauseButton.png');
      //BACKGROUNDS
      this.game.load.image('mainmenubackground', 'assets/images/backgrounds/mainmenubackground.png');
      this.game.load.image('watercombatbackground', 'assets/images/backgrounds/watercombatbackground.png');
      this.game.load.image('combatbackground', 'assets/images/backgrounds/combatbackground.png');
      this.game.load.image('eventbackground', 'assets/images/backgrounds/eventbackground.png');
      //PARTICLES
      this.game.load.image('redBlood','assets/images/particles/redBlood.png');
      this.game.load.image('greenBlood','assets/images/particles/greenBlood.png');
      this.game.load.image('blueBlood','assets/images/particles/blueBlood.png');
      this.game.load.spritesheet('crystalShines','assets/images/particles/crystalShines.png',3,3);
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
      this.load.audio('button', ['assets/sounds/buttonPressed.wav']);
      //Music
      this.load.audio('boss', ['assets/music/bosstheme.wav']);
      this.load.audio('firetheme', ['assets/music/firetheme.wav']);
      this.load.audio('shoptheme', ['assets/music/shoptheme.wav']);
      this.load.audio('watertheme', ['assets/music/watertheme.wav']);
      this.load.audio('credits', ['assets/music/creditstheme.wav']);
      this.load.audio('mainmenu', ['assets/music/mainmenutheme.wav']);

  },

  create: function () {
      this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL

      PreloaderScene.game.state.start('event');
  }

};
WebFont.load(webFontLoading);

window.onload = function () {
  

};