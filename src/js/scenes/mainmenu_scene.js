'use strict';

require('../interface/optionMenu.js');

var selector;

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
    //background
    this.game.add.image(0,0,'mainmenubackground');

    //version
    var text = this.game.add.richText(176, 140, 80, "v 1.0", style);
    //exit
    // name, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame, group
    var a = this.game.add.optionMenu([['botonDeAbajo',85,100,'button',this.EventScene,this,1,0,2,1,{up: 'botonDeArriba'}],
    ['botonDeArriba',85,60,'button',this.CombatScene,this,1,0,2,1,{down: 'botonDeAbajo'}],
    ['botonCredits',125,60,'button',this.CreditsScene,this,1,0,2,1,{down: 'botonDeAbajo'}],
    ['botonShop',45,60,'button',this.CreditsScene,this,1,0,2,1,{down: 'botonDeAbajo'}]
    ]);
    console.log(a);

    //prueba cursor
    selector = this.game.add.sprite(50, 50, 'cursor');
    
    //mainmenuoptionsscene
    //new run/continue run

    //para ir a fullscreen pulsar F4
    this.game.input.keyboard.addKey(Phaser.Keyboard.F4).onDown.add(this.goFullscreen, this);


    //Controles para moverse entre botones
    this.game.input.keyboard.addKey(Phaser.Keyboard.UP).onDown.add(a.goUp, this);//no funcionaaa aaaaaaaaaa
    this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN).onDown.add(a.goDown, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER).onDown.add(function(){console.log("enter")}, this);

    //Controles para cambiar de escenas
    this.game.input.keyboard.addKey(Phaser.Keyboard.E).onDown.add(this.CreditsScene, this);


    //music
    var music = this.game.add.audio('shoptheme', 0.1, true);
    this.game.sound.stopAll();
    music.play();

    
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

module.exports = MainMenuScene;
