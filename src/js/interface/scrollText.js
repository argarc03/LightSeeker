'use strict'

var ReactiveRichText = require('./reactiveRichText');

var ScrollText = function(game, parent,x,y,width,height,text, style) {
    Phaser.Group.call(this, game, parent);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.maxHeight = height;
    this.text = this.add(new ReactiveRichText(game,0,0,width,text,style,this, []));
    this.mask = this.add(new Phaser.Graphics(game, 0, 0));
    this.mask.beginFill(0xffffff);
    this.mask.drawRect(0,0,width,height);
    this.mask.endFill();
    this.text.mask = this.mask;
    this.onReachEnd = new Phaser.Signal();
    this.onReachBegin = new Phaser.Signal();
}

ScrollText.prototype = Object.create(Phaser.Group.prototype);
ScrollText.prototype.constructor = ScrollText;

ScrollText.prototype.scrollMove = function(number) {
    this.text.y+=number;
    if(this.text.y > 0 ) {
        this.text.y = 0;
        this.onReachBegin.dispatch();
    } else if(this.text.y < this.maxHeight - this.text.height) {
        this.text.y = this.maxHeight - this.text.height;
        this.onReachEnd.dispatch();
    }
}
module.exports = ScrollText;
