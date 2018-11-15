'use strict';

var exitButton;
var selector;

var CreditsScene = {
  MainMenuScene: function () {
    this.game.add.audio('button', 0.1).play();
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function(){this.game.state.start('mainmenu');}, this);
  },

  create: function () {
    //fadeIn
    this.camera.flash('#000000');
    
    var style = require('../../assets/fonts/style.json');

    this.game.add.richText(10, this.game.world.height, 100, 'LightSeeker Desarrollado por Turing\'s Song Studios', style);
    this.game.add.richText(10, this.game.world.height+50, 100, 'Carlos Durán Dominguez', style);
    this.game.add.richText(10, this.game.world.height+80, 100, 'Arturo García Cárdenas', style);
    this.game.add.richText(10, this.game.world.height+120, 100, 'Agradecimientos a:', style);
    this.game.add.richText(10, this.game.world.height+160, 100, 'Nuestras madres', style);
    this.game.add.richText(10, this.game.world.height+180, 100, 'Carlos León Aznar', style);
    this.game.add.richText(10, this.game.world.height+220, 100, '¡Gracias por jugar!', style);

    exitButton = this.game.add.optionMenu([['botonDeAbajo',165,115,'button',this.MainMenuScene,this,1,0,2,1,{}]]);

    //prueba cursor
    selector = this.game.add.sprite(50, 50, 'cursor');

    //Controles para cambiar de escenas
    this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.MainMenuScene, this);

    //music
    var music = this.game.add.audio('credits', 0.1, true);
    this.game.sound.stopAll();
    music.play();
  },
  update: function(){
    this.game.world.forEach(element => {
      element.y -=0.2;
    });
    exitButton.y += 0.2;
  
  //prueba cursor
  selector.x = this.game.input.x;
  selector.y = this.game.input.y;
  }
};


module.exports = CreditsScene;
