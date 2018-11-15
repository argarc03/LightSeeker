'use strict';


var ButtonMenu = function (game, name, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame) {

    Phaser.Button.call(this, game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);
    this.name = name;
    this.leftButton = null;
    this.rightButton = null;
    this.upButton = null;
    this.downButton = null;
    this.x = x;
    this.y = y;
}

ButtonMenu.prototype = Object.create(Phaser.Button.prototype);
ButtonMenu.prototype.constructor = ButtonMenu;

ButtonMenu.prototype.goLeft = function() { return this.left; }
ButtonMenu.prototype.goRight = function() { return this.right; }
ButtonMenu.prototype.goUp = function() { return this.up; }
ButtonMenu.prototype.goDown = function() { return this.down; }

ButtonMenu.prototype.select = function() {
    this.onInputDown.dispatch();
}

ButtonMenu.prototype.deactivate = function() {
    this.kill();
}

ButtonMenu.prototype.activate = function() {
    this.revive();
}

module.exports = ButtonMenu;
