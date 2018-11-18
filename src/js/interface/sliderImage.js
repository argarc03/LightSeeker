'use strict'

var SliderImage = function(game, parent, x, y, key, height) {
    Phaser.Group.call(this, game, parent);
    this._upImage = this.add(new Phaser.Image(game,x,y,key,0));
    this._tileHeight = this._upImage.height;
    this._downImage = this.add(new Phaser.Image(game,x,y+height-this._tileHeight,key,2));
    this._middleImage = this.add(new Phaser.Image(game, x, y+this._tileHeight,key,1));
    this._middleImage.height = height - 2*this._tileHeight;
}

SliderImage.prototype = Object.create(Phaser.Group.prototype);
SliderImage.prototype.constructor = SliderImage;

module.exports = SliderImage;