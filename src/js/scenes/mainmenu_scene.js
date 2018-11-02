'use strict';

require('../interface/optionMenu.js');

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
    var text = this.game.add.richText(80, 80, 80, Tremble(1, 1, 1, "MAIN MENU"), style);

    //exit
    // name, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame, group
    let a = this.game.add.optionMenu([['botonParaDormir',0,0,'seekerAnimations',function(){console.log('SIII');},this,0,0,0,0,{up: 'botonParaDespertar'}],
    ['botonParaDespertar',50,0,'seekerAnimations',function(){},this,0,0,0,0,{down: 'botonParaDormir'}]
    ]);//AAAAAAAAAAA
    console.log(a);

    //mainmenuoptionsscene
    //new run/continue run

    //



    //Controles para cambiar de escenas
    this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.EventScene, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.W).onDown.add(this.CombatScene, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.E).onDown.add(this.CreditsScene, this);

  }
};

module.exports = MainMenuScene;
