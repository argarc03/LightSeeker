'use strict';

var selector;

var IntroScene = {
  MainMenuScene: function () {
    this.game.add.audio('button', 0.1).play();
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function(){this.game.state.start('mainmenu');}, this);
  },


  appear(object, duration, callback, callbackContext){
    object.alpha = 0;

    var tween = this.game.add.tween(object).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
    var tween2;
    tween.onComplete.add(function(){this.game.time.events.add(Phaser.Timer.SECOND * duration,
       function(){
         tween2 = this.game.add.tween(object).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
         tween2.onComplete.add(callback, callbackContext);
        }, this);},this);
    
  },
  
  create: function () {
    var style = require('../../assets/fonts/style.json');




    this.appear(this.game.add.richText(40, 80, 80, "ERASE UNA VEZ...", style),2,
      this.appear(this.game.add.richText(80, 80, 80, "UNA ALDEA...", style),2), this
      );
    

    //espera a que acabe intro
    this.game.time.events.add(Phaser.Timer.SECOND * 7, this.MainMenuScene, this);
    


    


    this.game.add.optionMenu([['botonDeAbajo',165,115,'button',this.MainMenuScene,this,1,0,2,1,{}]]);


    //prueba cursor
    selector = this.game.add.sprite(50, 50, 'cursor');

    //Controles para cambiar de escenas
    this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.MainMenuScene, this);

  },
  update: function(){
  //prueba cursor
  selector.x = this.game.input.x;
  selector.y = this.game.input.y;
  }
};




module.exports = IntroScene;
