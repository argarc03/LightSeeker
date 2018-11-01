'use strict';


class ButtonMenu extends Phaser.Button {
    constructor(game, name, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame) {
        super(game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);

        this.name = name;
        this.left = null;
        this.right = null;
        this.up = null;
        this.down = null;
    }

    goLeft() { return this.left; }
    goRight() { return this.right; }
    goUp() { return this.up; }
    goDown() { return this.down; }

    select() {
        this.onInputDown.dispatch();
    }

    deactivate() {
        this.kill();
    }

    activate() {
        this.revive();
    }
}

Phaser.GameObjectFactory.prototype.buttonMenu = function (name, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame, group) {
    if (group === undefined) { group = this.world; }
    return group.add(new ButtonMenu(this.game, name, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame));
}