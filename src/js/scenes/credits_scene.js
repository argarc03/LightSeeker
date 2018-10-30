'use strict';


var CreditsScene = {
  MainMenuScene: function () {
    this.game.state.start('mainmenu');

  },

  create: function () {
    var style = require('../../assets/fonts/style.json');
    var text = this.game.add.richText(80, 80, 80, "ESTOS SON LOS CRÉDITOS", style);

    //Controles para cambiar de escenas
    this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.MainMenuScene, this);
  }
}


module.exports = CreditsScene;
