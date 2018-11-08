'use strict';

var selector;

var EventScene = {
  MainMenuScene: function () {
    this.game.state.start('mainmenu');

  },

  create: function () {
    var style = require('../../assets/fonts/style.json');
    var title = this.game.add.richText(76, 10, 100, "EL COFRESITO", style);

    var description = this.game.add.richText(106, 30, 90, "AVANZANDO POR LA CUEVA, ENCUENTRAS EN EL SUELO UNA BOLA DE CRISTAL CON UN OJO DENTRO. ¿QUÉ HACES?", style);

    var a = this.game.add.optionMenu([['option1',25,100,'button',this.EventScene,this,1,0,2,1,{down: 'option2'}],
    ['option2',25,65,'button',this.CombatScene,this,1,0,2,1,{up: 'option1'}]
    ]);


    //music
    var music = this.game.add.audio('watertheme', 0.1, true);
    this.game.sound.stopAll();
    music.play();


    //Controles para cambiar de escenas
    this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.MainMenuScene, this);

    //prueba cursor
    selector = this.game.add.sprite(50, 50, 'cursor');
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
