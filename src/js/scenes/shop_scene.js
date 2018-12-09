'use strict';

var exitButton;
var selector;

var ShopScene = {
  MainMenuScene: function () {
    this.game.add.audio('button', 0.1).play();
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function () { this.game.state.start('mainmenu'); }, this);
  },

  create: function () {
    //fadeIn
    this.camera.flash('#000000');

    var style = require('../../assets/fonts/style.json');

    this.game.add.richText(10, 10, 100, 'TIENDA DE TEMMIE', style);

    exitButton = this.game.add.optionMenu([['botonDeAbajo', 165, 115, 'button', this.MainMenuScene, this, 1, 0, 2, 1, {}]]);


    var item = this.game.add.sprite(50,50,'shopItemIcon');
    //item.sprite.setToScale(2,2);

    //prueba cursor
    selector = this.game.add.sprite(50, 50, 'cursor');

    //Controles para cambiar de escenas
    this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.MainMenuScene, this);

    //music
    var music = this.game.add.audio('shoptheme', 0.1, true);
    this.game.sound.stopAll();
    music.play();
  },
  update: function () {
    //prueba cursor
    selector.x = this.game.input.x;
    selector.y = this.game.input.y;
  }
};


module.exports = ShopScene;
