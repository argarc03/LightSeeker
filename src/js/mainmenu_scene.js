'use strict';


var playtexto;

  var MainMenuScene = {

  create: function () {
    /*var logo = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);*/


    /*var texto = this.game.add.text(0,0, 'hola mundo!');
    texto.fill = '#43d637';*/

    var titulo = "LIGHTSEEKER";
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

    playtexto.events.onInputDown.add(StartCombat,this);

  }


  
};


var remark =  function () {
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
}

module.exports = MainMenuScene;
