'use strict';


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

    //exitButton = this.game.add.optionMenu([['botonDeAbajo',165,115,'button',this.MainMenuScene,this,1,0,2,1,{}]]);

    //prueba cursor
    this.selector = this.game.add.sprite(50, 50, 'cursor');

    //Controles para cambiar de escenas
    this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.MainMenuScene, this);

    //music
    var music = this.game.add.audio('intro', 0.1, true);
    this.game.sound.stopAll();
    music.play();
  },
  update: function () {
    //prueba cursor
    this.selector.x = this.game.input.x;
    this.selector.y = this.game.input.y;
  }
};


module.exports = CreationScene;
