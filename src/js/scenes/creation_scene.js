'use strict';

var FramedButton = require('../interface/framedButton')

var backButton;

var CreationScene = {
  MainMenuScene: function () {
    this.game.add.audio('button', 0.1).play();
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function () { this.game.state.start('mainmenu'); }, this);
  },

  create: function () {
    //fadeIn
    this.camera.flash('#000000');

    var style = require('../../assets/fonts/style.json');

    //background
    this.game.add.image(0, 0, 'creationbackground');

    this.game.add.creationHUD(0, 0, this.MainMenuScene, this);

    backButton = this.game.world.add(new FramedButton(this.game.world, this.game, 20, 22, 'backIcon', 'backFrame', [{ callback: function () { this.MainMenuScene(); }, context: this, arguments: [] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767));

    //prueba cursor
    this.selector = this.game.add.sprite(50, 50, 'cursor');

    //para ir a fullscreen pulsar F11
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.add(this.goFullscreen, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.halt();

    //music
    var music = this.game.add.audio('intro', 0.1, true);
    this.game.sound.stopAll();
    music.play();
  },
  update: function () {
    //prueba cursor
    this.selector.x = this.game.input.x;
    this.selector.y = this.game.input.y;
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


module.exports = CreationScene;
