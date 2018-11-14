'use strict';

var RichText = require('./richText.js');

var ReactiveRichText = function (game, x, y, lineWidth, text, style, parent, signals) {
    RichText.call(this, game, x, y, lineWidth, text, style, parent);
    for (let i = 0; i < signals.length; i++) {
        signals[i].add(this.write, this, 0);
    }
    this.write();
}

ReactiveRichText.prototype = Object.create(RichText.prototype);
ReactiveRichText.prototype.constructor = ReactiveRichText;

module.exports = ReactiveRichText;