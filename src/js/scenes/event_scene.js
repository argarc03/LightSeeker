'use strict';

var selector;

var Stats = require('../characters/stats');
var EventScene = {
  MainMenuScene: function () {
    this.game.state.start('mainmenu');

  },

  create: function () {
    //fadeIn
    this.camera.flash('#000000');

    var style = require('../../assets/fonts/style.json');
    style.align = 'left';
    
    //render background
    this.game.add.sprite(0, 0, 'eventbackground');

    this.seeker = this.game.add.seeker(0, -8, 'Carlos L.', new Stats(10, 3, 1, 20, 1), 'seekerAnimations');

    var text = this.game.add.eventHUD(this.seeker, 'Hipopotomonstrosesqui-pedaliofobia Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed mattis ex. Donec auctor nunc convallis, luctus enim ut, aliquet neque. Pellentesque in eleifend ante. Phasellus nibh massa, blandit ac tellus ac, dapibus volutpat lectus. Phasellus placerat diam lacinia nisi ultricies blandit. Praesent ac arcu mauris. Donec finibus, tortor quis egestas aliquam, tellus leo pharetra ipsum, quis sollicitudin elit libero id mauris. Donec pharetra erat vitae finibus interdum. Aenean dignissim euismod condimentum. Etiam vel tincidunt ipsum. Vivamus iaculis a erat sed viverra. Cras sagittis arcu non maximus fermentum. Nunc bibendum eu orci in placerat. Ut in purus sit amet lorem placerat egestas. Vestibulum eget dignissim purus, ut tristique mauris. Mauris congue ornare tellus, id ornare orci pellentesque vitae. Curabitur tempor magna eu odio posuere, non venenatis diam consequat. Sed sed posuere eros, in iaculis ligula. Ut luctus imperdiet ex, tempor tempor justo hendrerit sed. Donec consequat hendrerit erat vitae aliquet. Nulla a urna non nunc tempus ultrices sed in ante. Praesent varius quam quis nunc dictum, efficitur consectetur mauris placerat. In et pretium ex, et maximus dui. Maecenas nec nunc nec enim tempor vulputate vitae placerat justo. Sed rutrum magna leo, at venenatis justo vehicula sed. Sed suscipit sodales augue, quis blandit mi efficitur sed. Sed ac dignissim libero. Pellentesque id consequat nulla. Vestibulum pharetra porta nulla sed venenatis. Aliquam quis metus rhoncus, semper ipsum at, pulvinar est.', {})

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
    this.game.input.keyboard.addKey(Phaser.Keyboard.F4).onDown.add(this.goFullscreen, this);

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
