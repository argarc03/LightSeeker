'use strict'

var Bar = require('./bar.js');
var ReactiveContinuousBar = require('./reactiveContinuousBar.js');
var ReactiveRichText = require('./reactiveRichText.js');
var textFunction = require('./textFunctions')

var hpPercentage = function() {
    return this.hp / this.stats.health * 100;
}

var HealthBar = function(game, x, y, character, voidKey, healKey, damageKey, healthKey, style, delay, speed, voidFrame, healFrame, damageFrame, healthFrame, parent) {
    Phaser.Group.call(this, game, parent);

    this.voidBar = this.add(new Bar(game, this, x, y, voidKey, voidFrame));
    this.healBar = this.add(new ReactiveContinuousBar(game, this, x, y, healKey, hpPercentage, character, character.onHpChange, 0, 0, speed, speed, healFrame))
    this.damageBar = this.add(new ReactiveContinuousBar(game, this, x, y, damageKey, hpPercentage, character, character.onHpChange, delay, 0, speed, speed, damageFrame));
    this.healthBar = this.add(new ReactiveContinuousBar(game, this, x, y, healthKey, hpPercentage, character, character.onHpChange, 0, delay, speed, speed, healthFrame));
    this.hpText = this.add(new ReactiveRichText(game, x, y-2, this.voidBar.width, [textFunction.VariableNumber(function () { return this.hp }, character, speed),
        '/',
        textFunction.VariableNumber(function () { return this.stats.health }, character, 1000)], style, this, [character.onHpChange, character.stats.onHealthChange]));
}

HealthBar.prototype = Object.create(Phaser.Group.prototype);
HealthBar.prototype.constructor = HealthBar;


module.exports = HealthBar;