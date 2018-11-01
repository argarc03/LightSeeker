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
    this.game.add.optionMenu(['botonParaDormir',0,0,'itemIcon',function(){},{},'','','','',{}]);//AAAAAAAAAAA
    //mainmenuoptionsscene

    //new run/continue run

    //



    //Controles para cambiar de escenas
    this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.EventScene, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.W).onDown.add(this.CombatScene, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.E).onDown.add(this.CreditsScene, this);


    /*var logo = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);*/


    /*var texto = this.game.add.text(0,0, 'hola mundo!');
    texto.fill = '#43d637';*/

    /*var titulo = "LIGHTSEEKER";
    var play = "PLAY";
    var imagenmenu = this.game.add.sprite(160,140, 'imagenmenu');
    imagenmenu.width = 500;
    imagenmenu.height = 300;
    var texto = this.game.add.bitmapText(this.game.world.centerX-180, this.game.world.centerY-250, 'font',titulo,64);
    playtexto = this.game.add.bitmapText(this.game.world.centerX-30, this.game.world.centerY+200, 'font',play,44);

    playtexto.inputEnabled = true;
    
    playtexto.events.onInputOver.add(remark, this);
    playtexto.events.onInputOut.add(desmark, this);
    playtexto.events.onInputUp.add(desclick,this);

    playtexto.events.onInputDown.add(StartCombat,this);*/

  }
};


/*var remark =  function () {
  playtexto.tint = 0x223344;
}

var desmark =  function () {
  playtexto.tint = 0xFFFFFF;
}

var desclick =  function () {
  playtexto.tint = 0x223344;
}

var click =  function () {
  playtexto.tint = 0xAAAAAA;
}


var StartCombat = function () {
  this.game.state.start('combat');
}*/

module.exports = MainMenuScene;
