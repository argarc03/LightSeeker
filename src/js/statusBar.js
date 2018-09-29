'use strict';

class Bar {
    constructor(x, y, height, width, sprite, game) {
        this.game = game;
        this.sprite = game.add.sprite(x, y, sprite);
        this.sprite.height = height;
        this.sprite.width = width;

        this.maxWidth = width;
    }

    setPercentage(percentage) {
        if (typeof (percentage) === 'number' && percentage >= 0 && percentage <= 100) {
            this.sprite.width = percentage / 100 * this.maxWidth;
        } else {
            throw 'percentage must be a number between 0 and 100'
        }
    }
}

class HealthBar extends Bar {
    constructor(x, y, height, width, sprite, retardedSprite, game) {
        super(x, y, height, width, sprite, game);
        this.retardedSprite = game.add.sprite(x, y, retardedSprite);
        this.sprite.moveUp();
        this.retardedSprite.height = height;
        this.retardedSprite.width = width;
        this.timer;
        this.subtractor;
        this.setPercentage = function (percentage) {
            if (typeof (percentage) === 'number' && percentage >= 0 && percentage <= 100) {
                if(percentage<this.sprite.width/this.maxWidth*100)
                    this.reduceRetardedBar(percentage);
                this.sprite.width = percentage / 100 * this.maxWidth;
            } else {
                throw 'percentage must be a number between 0 and 100'
            }
        };
    }

    reduceRetardedBar (percentage){
        this.subtractor = 1;
        this.timer = this.game.time.events.repeat(100,this.sprite.width-percentage/100*this.maxWidth,this.decrease, this);

    }

    decrease(){
        this.retardedSprite.width = this.retardedSprite.width-this.subtractor;
    }


}