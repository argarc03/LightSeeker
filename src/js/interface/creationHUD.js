'use strict'
//var ActionButton = require('./actionButton');
//var HealthBar = require('./healthBar');
var ReactiveRichText = require('./reactiveRichText');
var textFunctions = require('./textFunctions');
var FramedButton = require('./framedButton')

/*var deactivateActionButton = function () {
  this._button.onInputOver.removeAll();
  this._button.onInputOut.removeAll();
  this._button.onInputDown.removeAll();
  this._button.onInputUp.removeAll();
  this._rechargeEvent.active = false;
  this._text.visible = false;
  this._bar.percentageFunction = function () { return 0; };
  this._bar.percentage = 0;
  this.deactivate()
};*/

var CreationHUD = function (game, parent, x, y, selector) {
    Phaser.Group.call(this, game, parent, selector);
    this.x = x;
    this.y = y;
    let style = { "font": "Minecraft", "fill": "#FFFFFF", "fontSize": 10, "align": 'center' };
    var style2 = { font: 'Minecraft', fill: '#000000', fontSize: 10 };
    var style3 = { font: 'Minecraft', fill: '#000000', fontSize: 10, align: 'center' };

    

    this.game.add.image(0, 0, 'creationinterface');


    this.leftArrowButton = this.add(new FramedButton(this, game, 49, 55, 'arrow', 'arrowFrame', [{ callback: function () { this.CreditsScene(); }, context: this, arguments: [] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767, 1, 0, 1));
    
    this.rightArrowButton = this.add(new FramedButton(this, game, 151, 55, 'arrow', 'arrowFrame', [{ callback: function () { this.CreditsScene(); }, context: this, arguments: [] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767, 1, 0, 1));

    this.rightArrowButton.scale.x *= -1;
    
   

    //textos de buttons
    this.game.add.richText(0, 56, 200, "BRUTE", style);


    this.game.add.richText(86, 71, 100, "Realiza un fuerte golpe con su arma.", style2);
    this.game.add.richText(86, 94, 100, "Se protege con su hombrera.", style2);
    this.game.add.richText(86, 118, 100, "Desata toda su ira, aumentando mucho su velocidad.", style2);


    this.game.add.image(22,76,'statPoint').tint = 0xb60000;
    this.game.add.image(22,76+15,'statPoint').tint = 0xcf6e1a;
    this.game.add.image(22,76+30,'statPoint').tint = 0x14879f;
    this.game.add.image(22,76+45,'statPoint').tint = 0xe5d40a;
    this.game.add.image(22,76+60,'statPoint').tint = 0x4ce742;

    this.game.add.image(22+6,76,'statPoint').tint = 0xb60000;;
    this.game.add.image(22+6,76+15,'statPoint').tint = 0xcf6e1a;;
    this.game.add.image(22+6,76+30,'statPoint').tint = 0x14879f;;
    this.game.add.image(22+6,76+45,'statPoint');
    this.game.add.image(22+6,76+60,'statPoint');

    this.game.add.image(22+12,76,'statPoint');
    this.game.add.image(22+12,76+15,'statPoint').tint = 0xcf6e1a;;
    this.game.add.image(22+12,76+30,'statPoint');
    this.game.add.image(22+12,76+45,'statPoint');
    this.game.add.image(22+12,76+60,'statPoint');

    this.game.add.image(22+18,76,'statPoint');
    this.game.add.image(22+18,76+15,'statPoint');
    this.game.add.image(22+18,76+30,'statPoint');
    this.game.add.image(22+18,76+45,'statPoint');
    this.game.add.image(22+18,76+60,'statPoint');

    this.game.add.image(22+24,76,'statPoint');
    this.game.add.image(22+24,76+15,'statPoint');
    this.game.add.image(22+24,76+30,'statPoint');
    this.game.add.image(22+24,76+45,'statPoint');
    this.game.add.image(22+24,76+60,'statPoint');


    this.game.add.image(62,-70,'seekerAnimations');







    /*this.shopButton.onInputOver.add(function(){selector.frame = 1;});
    this.shopButton.onInputOut.add(function(){selector.frame = 0;});
    this.shopButton.onInputDown.add(function(){selector.frame = 2;});

    this.settingsButton.onInputOver.add(function(){selector.frame = 1;});
    this.settingsButton.onInputOut.add(function(){selector.frame = 0;});
    this.settingsButton.onInputDown.add(function(){selector.frame = 2;});

    this.doorButton.onInputOver.add(function(){selector.frame = 1;});
    this.doorButton.onInputOut.add(function(){selector.frame = 0;});
    this.doorButton.onInputDown.add(function(){selector.frame = 2;});

    this.crystalButton.onInputOver.add(function(){selector.frame = 1;});
    this.crystalButton.onInputOut.add(function(){selector.frame = 0;});
    this.crystalButton.onInputDown.add(function(){selector.frame = 2;});
    //this.crystalButton.onInputUp.add(function(){selector.frame = 0;});

    this.creditsButton.onInputOver.add(function(){selector.frame = 1;});
    this.creditsButton.onInputOut.add(function(){selector.frame = 0;});
    this.creditsButton.onInputDown.add(function(){selector.frame = 2;});*/

    //var object1 = seeker.items[0];
    //var object2 = seeker.items[1];





    
}

CreationHUD.prototype = Object.create(Phaser.Group.prototype);
CreationHUD.prototype.constructor = CreationHUD;

module.exports = CreationHUD;