'use strict'

var ReactiveBar = require('./reactiveBar.js');

var ReactiveContinuousBar = function (game, parent, x, y, key, percentageFunction, functionContext, signal, decreaseDelay, increaseDelay, decreaseSpeed, increaseSpeed, frame = null) {
    ReactiveBar.call(this,game, parent, x, y, key, percentageFunction, functionContext, signal, frame);
    this.increasing = false;
    this.decreasing = false;
    this._decreaseDelay = decreaseDelay;
    this._increaseSpeed = increaseDelay;
    this._increaseSpeed = this.bar.width / increaseSpeed;
    this._decreaseSpeed = this.bar.width / decreaseSpeed;
    this.timer = null;
}

ReactiveContinuousBar.prototype = Object.create(ReactiveBar.prototype);
ReactiveContinuousBar.prototype.constructor = ReactiveContinuousBar;

ReactiveContinuousBar.prototype.changePercentage = function() {
    if (this.percentageFunction() > this.percentage) {
        console.log('sube');
        if (!this.increasing) {
            if (this.timer !== null) {
                this.timer.stops(true);
            }
            this.decreasing = false;
            this.increasing = true;
            this.timer = this.game.time.create();
            this.timer.add(this._increaseDelay, this.reChangePercentage, this);
            this.timer.start();
        }
    } else {
        console.log('baja');
        if (!this.decreasing) {
            if (this.timer !== null) {
                this.timer.stops(true);
            }
            this.increasing = false;
            this.decreasing = true;
            this.timer = this.game.time.create();
            this.timer.add(this._decreaseDelay, this.reChangePercentage, this);
            this.timer.start();
        }
    }
}

ReactiveContinuousBar.prototype.reChangePercentage = function() {
    if (this.increasing) {
        console.log('SUBE');
        if (this.percentage < this.percentageFunction()) {
            this.timer = this.game.time.create();
            if (this.vertical)
                this.percentage += 100 / this.bar.height;
            else
                this.percentage += 100 / this.bar.width;
            this.timer.add(this._increaseSpeed, this.reChangePercentage, this);
            this.timer.start();
        } else {
            this.increasing = false;
            this.percentage = this.percentageFunction();
            this.timer = null;
        }
    } else if (this.decreasing) {
        console.log('BAJA');
        if (this.percentage > this.percentageFunction()) {
            this.timer = this.game.time.create();
            if (this.vertical)
                this.percentage -= 100 / this.bar.height;
            else
                this.percentage -= 100 / this.bar.width;
            this.timer.add(this._decreaseSpeed, this.reChangePercentage, this);
            this.timer.start();
        } else {
            this.decreasing = false;
            this.percentage = this.percentageFunction();
            this.timer = null;
        }
    }

}

module.exports = ReactiveContinuousBar;