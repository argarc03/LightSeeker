'use strict';

var textFunctions = require('../interface/textFunctions');
var FramedButton = require('../interface/framedButton')

var selector;

var MainMenuScene = {
  create: function () {
    //fadeIn
    this.camera.flash('#000000');
    
    var style = require('../../assets/fonts/style.json');
    //background
    this.game.add.image(0,0,'mainmenubackground');

    //buttons
    this.game.add.mainMenuHUD(0, 0);

    this.game.add.image(0,0,'shines').alpha = 0.2;
    //great crystal shine particles
    var emitterCrystal = this.game.add.emitter(100, 35,100);
    emitterCrystal.makeParticles('crystalShines',[0,1,2]);
    emitterCrystal.setRotation(0, 0);
    emitterCrystal.setAlpha(0.3, 0.8);
    //emitter.setScale(0.5, 1);
    emitterCrystal.gravity = 0;
    emitterCrystal.flow(2000,100);

    this.game.add.image(4,1,'title');

    



    //smoke
    /*var emitter = this.game.add.emitter(10, 100, 400);
    emitter.makeParticles('smoke', [0,1,2]);
    emitter.setRotation(0, 0);
    emitter.setAlpha(0.1, 1, 3000);
    //emitter.setScale(0.1, 1, 0.1, 1, 6000, Phaser.Easing.Quintic.Out);
    emitter.gravity = -400;
    emitter.start(false, 5000,1);
    //emitter.emitX = 0;*/


    

    //buttons
    //this.game.add(new FramedButton(3,139, 'shop', 'shopFrame', [{callback:function(){this.SettingsScene();}, context:this, arguments:[]}]));

    /*var a = this.game.add.optionMenu([['botonDeAbajo',85,100,'button',this.EventScene,this,1,0,2,1,{up: 'botonDeArriba'}],
    ['botonDeArriba',85,60,'button',this.CombatScene,this,1,0,2,1,{down: 'botonDeAbajo'}],
    ['botonCredits',125,60,'button',this.CreditsScene,this,1,0,2,1,{down: 'botonDeAbajo'}],
    ['botonSettings',45,60,'button',this.SettingsScene,this,1,0,2,1,{down: 'botonDeAbajo'}]
    ]);*/
    //console.log(a);

    
    
    //mainmenuoptionsscene
    //new run/continue run

    //para ir a fullscreen pulsar F4
    //this.game.input.keyboard.addKey(Phaser.Keyboard.F4).onDown.add(this.goFullscreen, this);


    //Controles para moverse entre botones
    /*this.game.input.keyboard.addKey(Phaser.Keyboard.UP).onDown.add(a.goUp, this);//no funcionaaa aaaaaaaaaa
    this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN).onDown.add(a.goDown, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER).onDown.add(function(){console.log("enter")}, this);

    //Controles para cambiar de escenas
    this.game.input.keyboard.addKey(Phaser.Keyboard.E).onDown.add(this.CreditsScene, this);*/


    //music
    var music = this.game.add.audio('mainmenutheme', 0.1, true);
    this.game.sound.stopAll();
    music.play();

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

module.exports = MainMenuScene;
