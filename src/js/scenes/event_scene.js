'use strict';

var selector;

var Stats = require('../characters/stats');
var EventScene = {
  MainMenuScene: function () {
    this.game.state.start('mainmenu');

  },
  init: function(seeker, dayManager, text, image, options, music){
    this._seeker = seeker;
    this._dayManager = dayManager;
    this._text = text;
    this._image = image;
    this._options = options;
    this._music;
  },
  create: function () {
    //fadeIn
    this.camera.flash(0x000000); 


    var style = require('../../assets/fonts/style.json');
    style.align = 'left';
    
    //render background
    this.game.add.sprite(0, 0, 'eventbackground');

    this.seeker = this.game.world.add(this._seeker);

    this.HUD = this.game.add.eventHUD(this._seeker, this._dayManager, this._text, this._options, this._image);

    //music
    var music = this.game.add.audio(this._music, 0.1, true);
    this.game.sound.stopAll();
    music.play();


    //para ir a fullscreen pulsar F4
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.add(this.goFullscreen, this);

    //Controles para cambiar de escenas
    this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.MainMenuScene, this);

    //prueba cursor
    selector = this.game.add.sprite(50, 50, 'cursor');
    //selector.loadTexture('infoCursor');
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


module.exports = EventScene;
