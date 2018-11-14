'use strict'

var Bar = require('./bar.js');

var ReactiveBar = function (game, parent, x, y, key, percentageFunction, functionContext, signal, frame = null) {
    Bar.call(this, game, parent, x, y, key, frame);
    this.percentageFunction = percentageFunction.bind(functionContext);
    signal.add(this.changePercentage, this, 0);
}

ReactiveBar.prototype = Object.create(Bar.prototype);
ReactiveBar.prototype.constructor = ReactiveBar;

ReactiveBar.prototype.changePercentage = function () {
    let p = this.percentageFunction();

    this.percentage = isNaN(p)?100:p;
}

module.exports = ReactiveBar;