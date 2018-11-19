'use strict'

var ActionBar = function(game, parent, x, y, enemy, frameKey){
    Phaser.Group.call(this, game, parent);
    this.x = x;
    this.y = y;
    this._frame = this.add(new Phaser.Image(game,0,0,frameKey));
    
}

ActionBar.prototype = Object.create(Phaser.Group.prototype);
ActionBar.prototype.constructor = ActionBar;

module.exports = ActionBar;