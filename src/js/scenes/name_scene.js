'use strict';

var FramedButton = require('../interface/framedButton')
var Seeker = require('../characters/seeker');
var DayManager = require('../manager/dayManager');
var selector;

var SettingsScene = {
  MainMenuScene: function () {
    this.game.add.audio('button', 0.1).play();
    this.game.camera.fade('#000000');
    this.game.camera.onFadeComplete.add(function () { this.game.state.start('mainmenu'); }, this);
  },
  NewGame : function(seeker, name){
    var seeker = new Seeker(this.game,0, -8, name, seeker.stats, seeker.items, seeker.spriteSheet,seeker.actions);
    var dayManager = new DayManager(seeker,this.game);
    dayManager.newDay();
  },
  init: function(seeker){
    this._tmpSeeker = seeker;
  },
  create: function () {
    //fadeIn
    this.camera.flash('#000000');

    var style = require('../../assets/fonts/style.json');

    this.game.add.image(0, 0, 'namebackground').alpha = 0.2;

    var emitter = this.game.add.emitter(100, 75, 200);
    emitter.alpha = 0.1;
    emitter.makeParticles('creationParticles', [0, 1, 2, 3, 4, 5]);
    emitter.minParticleSpeed.setTo(-100, -100);
    emitter.maxParticleSpeed.setTo(100, 100);
    emitter.setRotation(0, 0);
    emitter.gravity = 0;
    emitter.flow(20000, 100);

    var emitter2 = this.game.add.emitter(100, 75, 200);
    emitter2.alpha = 0.2;
    emitter2.makeParticles('creationParticles', [0, 1, 2, 3, 4, 5]);
    emitter2.minParticleSpeed.setTo(-100, -100);
    emitter2.maxParticleSpeed.setTo(100, 100);
    emitter2.setRotation(0, 0);
    emitter2.gravity = 0;
    emitter2.flow(20000, 100);

    var emitter3 = this.game.add.emitter(100, 75, 200);
    emitter3.alpha = 0.3;
    emitter3.makeParticles('creationParticles', [0, 1, 2, 3, 4, 5]);
    emitter3.minParticleSpeed.setTo(-100, -100);
    emitter3.maxParticleSpeed.setTo(100, 100);
    emitter3.setRotation(0, 0);
    emitter3.gravity = 0;
    emitter3.flow(20000, 100);


    this.game.add.richText(0, 20, 200, 'NAME YOUR VESSEL', style);
    this.game.add.image(60,108,'textBox').alpha = 0.8;

    this.game.add.image(62,-30,'seekerBruteAnimations');

    //this.backButton = this.game.world.add(new FramedButton(this.game.world, this.game, 179, 130, 'backIcon', 'backFrame', [{ callback: function () { this.MainMenuScene(); }, context: this, arguments: [] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767));
    this.hola = this.game.add.inputField(40,100,{
      font: '10px Minecraft',
      width: 150,
      padding: 8,
      borderWidth: 1,
      borderColor: '#FFFFFF',
      borderRadius: 6,
      placeHolder: 'NOMBRE',
      textAlign: 'center',
      fillAlpha: 0,
      width: 100,
      height: 1,
      selectionColor: '#FF00FF',
      cursorColor : '#FFFFFF'
    });
    this.hola.text.style.fill = '#FFFFFF';
    this.hola.domElement.setMax(8,0);
    this.hola.cursor.y+=2;
    this.hola.input.useHandCursor = false;
    //prueba cursor
    selector = this.game.add.sprite(50, 50, 'cursor');

    //Controles para cambiar de escenas
    this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.MainMenuScene, this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER).onDown.add(function(key, seeker, name){
      this.NewGame(seeker, this.hola.value);
    }, this, 0, this._tmpSeeker);

    
  },
  update: function () {
    console.log(this.hola.value);
    //prueba cursor
    selector.x = this.game.input.x;
    selector.y = this.game.input.y;
  }
};


module.exports = SettingsScene;
