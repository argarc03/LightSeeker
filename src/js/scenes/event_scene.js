'use strict';

var selector;

var Stats = require('../characters/stats');
var EventScene = {
  MainMenuScene: function () {
    this.game.state.start('mainmenu');

  },

  create: function () {
    //fadeIn
    this.camera.flash(0x000000); //ESTO NO FUNCIONA Y NO SE POR QUE AAAAAAAA


    var style = require('../../assets/fonts/style.json');
    style.align = 'left';
    
    //render background
    this.game.add.sprite(0, 0, 'eventbackground');

    this.seeker = this.game.add.seeker(0, -8, 'Carlos L.', new Stats(10, 3, 1, 20, 1), 'seekerAnimations');

    this.HUD = this.game.add.eventHUD(this.seeker, '"Brillos bajo tierra"\n\n Avanzando por los oscuros túneles, avistas un tenue brillo a lo lejos. Cuando te acercas, te das cuenta de que ese brillo sale de la tierra, emergiendo y flotando como si de polvo se tratase. La luz que emite es agradable y te resulta familiar.',
     [{text: '1. Excavar', callback: function(){console.log('Jeje, NO CAVO');
        this.HUD.reset('Pasas horas horadando la roca con tu pico hasta que escuchas un sonido metálico. Sigues picando alrededor del hallazgo pero sólo consigues desenterrar una gran esfera inamovible. Cansado por el trabajo vano decides reemprender tu viaje. ',
          [{text: '1. Continuar', callback: EventScene.MainMenuScene, context: EventScene, arguments: []}])}, context: this, arguments: []},
     {text: '2. Descansar', callback: function(){console.log('¡NO PUEDO DORMIR!');}, context: this, arguments: []},
     {text: '3. No hacer nada', callback: function(){console.log('YA ESTOY HACIENDO ALGO');}, context: this, arguments: []}])

    /*var g = this.game.add.graphics(1, 0);
    for (let i = 0; i < 75; i++) {
      g.beginFill(0xffffff);
      g.drawRect(2 * i, 0, 1, 1);
      g.beginFill(0x000000);
      g.drawRect(2 * i + 1, 0, 1, 1);
    }
    g.angle = 90;
    var ge = this.game.add.graphics(0, 0);
    for (let i = 0; i < 100; i++) {
      ge.beginFill(0xffffff);
      ge.drawRect(2 * i, 0, 1, 1);
      ge.beginFill(0x000000);
      ge.drawRect(2 * i + 1, 0, 1, 1);
    }*/


    //music
    var music = this.game.add.audio('watertheme', 0.1, true);
    this.game.sound.stopAll();
    music.play();


    //para ir a fullscreen pulsar F4
    this.game.input.keyboard.addKey(Phaser.Keyboard.F11).onDown.add(this.goFullscreen, this);

    //Controles para cambiar de escenas
    this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.MainMenuScene, this);

    //prueba cursor
    selector = this.game.add.sprite(50, 50, 'cursor');
    //selector.loadTexture('infoCursor');
  },

  update: function () {
    //prueba cursor
    selector.x = this.game.input.x;
    selector.y = this.game.input.y;
  },

  goFullscreen: function() {

    if (this.game.scale.isFullScreen) {
      this.game.scale.stopFullScreen();
    }
    else {
      this.game.scale.startFullScreen(false);
    }
  
  }
};


module.exports = EventScene;
