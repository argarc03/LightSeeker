'use strict';

var selector;

var IntroScene = {
  MainMenuScene: function () {
    this.game.add.audio('button', 0.1).play();
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function(){this.game.state.start('mainmenu');}, this);
  },


  appear(object, duration, delay){
    object.alpha = 0;
    var tween = this.game.add.tween(object).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, delay);
    tween.onComplete.add(function(){this.game.add.tween(object).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true, duration)}
       , this);
  },
  
  create: function () {
    var style = require('../../assets/fonts/style.json');

    'LA LUZ DE LA ESPERANZA SE HA EXTINGUIDO......Y SE TE HA ENCOMENDADO EL DEBER DE VOLVER A AVIVARLO...LA ALDEA TE NECESITA..'
    
    this.appear(this.game.add.sprite(70, 30, 'logo')
          .animations.add('play',Array.apply(null, {length: 22}).map(Function.call, Number))
          ._parent.play('play',7)._parent,5000);

    this.appear(this.game.add.richText(60, 100, 80, "TURING'S SONG STUDIOS", style),2000,3000);
    
    this.appear(this.game.add.richText(60, 40, 80, "Cuenta la leyenda...", style),2000, 9000);
    this.appear(this.game.add.richText(60, 80, 80, "...que hace mucho tiempo...", style),2000, 10000);
    this.appear(this.game.add.richText(60, 40, 80, "...una gran bola de fuego alimentaba al mundo con sus rayos desde el cielo...", style),3000, 17000);
    this.appear(this.game.add.richText(60, 40, 80, "...y que las gemas de luz no eran necesarias para poder sobrevivir.", style),3000, 24000);
    

    //espera a que acabe intro
    this.game.time.events.add(Phaser.Timer.SECOND * 50, this.MainMenuScene, this);
    


    


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
