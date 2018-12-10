'use strict'
//var ActionButton = require('./actionButton');
//var HealthBar = require('./healthBar');
var ReactiveRichText = require('./reactiveRichText');
var RichText = require('./richText');
var textFunctions = require('./textFunctions');
var FramedButton = require('./framedButton');
var StatMarker = require('./statMarker');
var ShowCase = require('./showCase');

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

var CreationHUD = function (game, parent, x, y, exitFunction, context) {
    Phaser.Group.call(this, game, parent);
    this.x = x;
    this.y = y;
    let style = { "font": "Minecraft", "fill": "#FFFFFF", "fontSize": 10, "align": 'center' };
    var style2 = { font: 'Minecraft', fill: '#000000', fontSize: 10 };
    var style3 = { font: 'Minecraft', fill: '#000000', fontSize: 10, align: 'center' };

    

    this.add(new Phaser.Image(game, 0, 0, 'creationinterface'));

    this._showCase = this.add( new ShowCase(game, this, 0, 0, require('../../assets/characters/characters.json')));

    this.leftArrowButton = this.add(new FramedButton(this, game, 49, 55, 'arrow', 'arrowFrame', [{ callback: this._showCase.rotate, context: this._showCase, arguments: [-1] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767, 1, 0, 1));
    
    this.rightArrowButton = this.add(new FramedButton(this, game, 151, 55, 'arrow', 'arrowFrame', [{ callback: this._showCase.rotate, context: this._showCase, arguments: [1] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767, 1, 0, 1));

    this.nextStateButton = this.add(new FramedButton(this, game, 180, 55, 'arrow', 'arrowFrame', [{ callback: exitFunction, context: context, arguments: [1] }], 0x676767, 0xffffff, 0x000000, 0x222222, 0x676767, 1, 0, 1));

    this.rightArrowButton.scale.x *= -1;

    this._showCase.onBeginRotation.add(function(){
      this.leftArrowButton.deactivate();
      this.rightArrowButton.deactivate();
      this.nextStateButton.deactivate();
    },this);

    this._showCase.onEndRotation.add(function(){
      this.leftArrowButton.activate();
      this.rightArrowButton.activate();
      if(this._showCase.isAvaliable()){
        this.nextStateButton.activate();
      }
    },this);    
}

CreationHUD.prototype = Object.create(Phaser.Group.prototype);
CreationHUD.prototype.constructor = CreationHUD;

module.exports = CreationHUD;