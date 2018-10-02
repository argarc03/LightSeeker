'use strict';

//PREGUNTAS
// ¿Cómo poner formatos en un bitmapText o tenemos que usar text?
// ¿Las escenas o states del game pueden recibir argumentos?
// ¿Cómo cargar recursos que solo van a usarse en una escena?
// ¿Cómo mandar buenos mensajes de error?
// Aún se deben controlar los sonidos
// ¿Qué formato de domcumentación recomiendas?
// ¿Cómo se hace para que un objeto se pueda añadir con el game.add.[nombre objeto](parametros)?

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

    //images
    this.game.load.image('imagenmenu', 'temporal%20images/Village.jpg');
    this.game.load.image('combatbackground', 'assets/images/combatbackground.png');
    this.game.load.image('eventimage', 'assets/images/eventimage.jpg');
    //interface
    this.game.load.image('statBar','assets/images/statusBar.png');
    this.game.load.image('retStatBar','assets/images/retardedStatusBar.png');
    //particles
    this.game.load.image('redBlood','assets/images/particles/redBlood.png');
    this.game.load.image('greenBlood','assets/images/particles/greenBlood.png');
    this.game.load.image('blueBlood','assets/images/particles/blueBlood.png');
    //seeker
    this.game.load.spritesheet('seekerAnimations','assets/images/seeker/seekerAnimations.png',80,120);
    //enemy
    this.game.load.spritesheet('spiderAnimations', 'assets/images/spider/spiderAnimations.png',80,120);
    //fonts
    this.game.load.bitmapFont('normal8', 'assets/fonts/bitmapFonts/normal8.png', 
    'assets/fonts/bitmapFonts/normal8.fnt'); //solo funciona bien con tamaño múltiplo de 8
    //sounds
    this.load.audio('track', ['assets/sounds/pencilsketching.mp3']);
    //music
    this.load.audio('boss', ['assets/music/bosstheme.wav']);
  },

  create: function () {
    this.game.state.start('combat');
  }

  

};

window.onload = function () {
  var game = new Phaser.Game(200, 150, Phaser.AUTO, 'game');
  game.state.add('boot', BootScene);
  game.state.add('preloader', PreloaderScene);
  game.state.add('mainmenu', MainMenuScene);
  game.state.add('combat', CombatScene);
  game.state.add('event', EventScene);

  game.state.start('boot');
};
