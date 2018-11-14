'use strict';

var textFunctions = require('../interface/textFunctions');


var MainMenuScene = {
  EventScene: function () {
    this.game.state.start('event');
  },

  CombatScene: function () {
    this.game.state.start('combat');
  },

  CreditsScene: function () {
    this.game.state.start('credits');
  },

  create: function () {
    var style = require('../../assets/fonts/style.json');
    var text = this.game.add.richText(80, 80, 80, textFunctions.Tremble(1, 1, 1, "MAIN MENU"), style);


    //Controles para cambiar de escenas
    this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.EventScene, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.W).onDown.add(this.CombatScene, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.E).onDown.add(this.CreditsScene, this);
  }
};

module.exports = MainMenuScene;
