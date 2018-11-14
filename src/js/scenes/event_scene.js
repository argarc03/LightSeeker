'use strict';

var Stats = require('../characters/stats');
var EventScene = {
  MainMenuScene: function () {
    this.game.state.start('mainmenu');

  },

  create: function () {
    var style = require('../../assets/fonts/style.json');
    style.align = 'left';
    
    this.seeker = this.game.add.seeker(0, -8, 'Carlos L.', new Stats(10, 3, 1, 20, 1), 'seekerAnimations');
    this.seeker.addAction.idle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    this.seeker.addAction.attack([24, 25, 26, 27, 28, 29, 30, 31], [32, 33, 34, 35, 36, 37, 38, 39, 40], 2000, 5000);
    this.seeker.addAction.block([48, 49, 50, 51, 52], [53, 54], [57, 58, 59], 3000, 5000);
    this.seeker.addAction.die([72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95]);
    this.seeker.addParticle.blood(39, 98, 10, 'blueBlood');

    var text = this.game.add.eventHUD(this.seeker, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed mattis ex. Donec auctor nunc convallis, luctus enim ut, aliquet neque. Pellentesque in eleifend ante. Phasellus nibh massa, blandit ac tellus ac, dapibus volutpat lectus. Phasellus placerat diam lacinia nisi ultricies blandit. Praesent ac arcu mauris. Donec finibus, tortor quis egestas aliquam, tellus leo pharetra ipsum, quis sollicitudin elit libero id mauris. Donec pharetra erat vitae finibus interdum. Aenean dignissim euismod condimentum. Etiam vel tincidunt ipsum. Vivamus iaculis a erat sed viverra. Cras sagittis arcu non maximus fermentum. Nunc bibendum eu orci in placerat. Ut in purus sit amet lorem placerat egestas. Vestibulum eget dignissim purus, ut tristique mauris. Mauris congue ornare tellus, id ornare orci pellentesque vitae. Curabitur tempor magna eu odio posuere, non venenatis diam consequat. Sed sed posuere eros, in iaculis ligula. Ut luctus imperdiet ex, tempor tempor justo hendrerit sed. Donec consequat hendrerit erat vitae aliquet. Nulla a urna non nunc tempus ultrices sed in ante. Praesent varius quam quis nunc dictum, efficitur consectetur mauris placerat. In et pretium ex, et maximus dui. Maecenas nec nunc nec enim tempor vulputate vitae placerat justo. Sed rutrum magna leo, at venenatis justo vehicula sed. Sed suscipit sodales augue, quis blandit mi efficitur sed. Sed ac dignissim libero. Pellentesque id consequat nulla. Vestibulum pharetra porta nulla sed venenatis. Aliquam quis metus rhoncus, semper ipsum at, pulvinar est.', {})

    //Controles para cambiar de escenas
    this.game.input.keyboard.addKey(Phaser.Keyboard.Q).onDown.add(this.MainMenuScene, this);
  }
}

module.exports = EventScene;
