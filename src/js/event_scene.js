'use strict';

var continuetext;

  var EventScene = {

  create: function () {
    
    var eventtitle = "El cofre misterioso";

    var eventdescription = "Avanzando por el irregular terreno, te percatas\n"
    + "de un brillo que reluce bajo unos escombros.\n"
    + "Al quitar de encima todos esos escombros...\n"
    + "¡te das cuenta de que se trata de un cofre del tesoro!\n"
    + "¿deseas abrir el cofre?";

    var continuar = "Continuar";

    var eventimage = this.game.add.sprite(200,100, 'eventimage');
    eventimage.width = 400;
    eventimage.height = 200;
    var eventtitletext = this.game.add.bitmapText(100, 60, 'font',eventtitle,34);

    var eventdescriptiontext = this.game.add.bitmapText(100,320, 'font',eventdescription,24);

    continuetext = this.game.add.bitmapText(this.game.world.width-200, this.game.world.height-60, 'font',continuar,24);

    continuetext.inputEnabled = true;
    
    continuetext.events.onInputOver.add(remark, this);
    continuetext.events.onInputOut.add(desmark, this);
    continuetext.events.onInputUp.add(desclick,this);

    continuetext.events.onInputDown.add(click,this);

  }


  
};


var remark =  function () {
  continuetext.tint = 0x223344;
}

var desmark =  function () {
  continuetext.tint = 0xFFFFFF;
}

var desclick =  function () {
  continuetext.tint = 0x223344;
}

var click =  function () {
  continuetext.tint = 0xAAAAAA;

}

module.exports = EventScene;
