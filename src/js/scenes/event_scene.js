'use strict';


var EventScene = {
  MainMenuScene: function () {
    this.game.state.start('mainmenu');

  },

  create: function () {
    var style = require('../../assets/fonts/style.json');
    var a = this.game.add.graphics(80,80);
    a.beginFill(0xff0000);
    a.drawRect(0,0,80,80);
    a.endFill();
    var text = this.game.add.richText(80, 80, 80, "EVENTO DE TEXTO: EL COFRESITO", style);
    
    //Controles para cambiar de escenas
    this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.MainMenuScene, this);
  }
}

module.exports = EventScene;
