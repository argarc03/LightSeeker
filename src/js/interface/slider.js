'use strict'

var SliderImage = require('./sliderImage');

var Slider = function(game, parent, x, y, keyContiner, keySlider, height, sliderHeight, offsetSlider) {
    Phaser.Group.call(this, game, parent);
    this._container = this.add(new SliderImage(game,this,x,y,keyContiner,height));
    this._slider = this.add(new SliderImage(game,this,x,y+offsetSlider,keySlider,sliderHeight));
    this._offset = offsetSlider;
    this.onBegin = new Phaser.Signal();
    this.onEnd = new Phaser.Signal();
    this.onChange = new Phaser.Signal();
}

Slider.prototype = Object.create(Phaser.Group.prototype);
Slider.prototype.constructor = Slider;

Slider.prototype.move = function(movement) {
    this._slider.y+=movement*(this._container.height - 2*this._offset - this._slider.height)/100;
    if(this._slider.y <= this._container.y){
        this.onBegin.dispatch();
        this._slider.y = this._container.y;
    } else if(this._slider.y >= this._container.y + this._container.height - 2*this._offset - this._slider.height) {
        this.onEnd.dispatch();
        this._slider.y = this._container.y + this._container.height - 2*this._offset - this._slider.height;
    }
    this.onChange.dispatch((this._slider.y-this._container.y)/(this._container.height - 2*this._offset - this._slider.height)*100);
}

module.exports = Slider;