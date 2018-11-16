// var Phaser = require('phaser');

var Character = require('./characters/character');
var Seeker = require('./characters/seeker');
var Enemy = require('./characters/enemy');
var Bar = require('./interface/bar');
var CircleWithSectors = require('./interface/circleWithSectors');
var HealthBar = require('./interface/healthBar');
var ReactiveBar = require('./interface/reactiveBar');
var ReactiveContinuousBar = require('./interface/reactiveContinuousBar');
var ReactiveRichText = require('./interface/reactiveRichText');
var RichText = require('./interface/richText');
var ActionButton = require('./interface/actionButton');
var SeekerCombatHUD = require('./interface/seekerCombatHUD');
var ScrollText = require('./interface/scrollText');
var EventHUD = require('./interface/eventHUD');
var OptionMenu = require('./interface/optionMenu');
var ButtonMenu = require('./interface/buttonMenu');
/**
 * 
 */
fun = function (Phaser) {
    Phaser.GameObjectFactory.prototype.character = function (x, y, name, stats, spriteSheet, emitter, group) {
        if (group === undefined) { group = this.world; }
        return group.add(new Character(this.game, x, y, name, stats, spriteSheet, emitter));
    }

    Phaser.GameObjectFactory.prototype.seeker = function (x, y, name, stats, spriteSheet, emitter, group) {
        if (group === undefined) { group = this.world; }
        return group.add(new Seeker(this.game, x, y, name, stats, spriteSheet, emitter));
    }

    Phaser.GameObjectFactory.prototype.enemy = function (x, y, name, stats, spriteSheet, seeker, pattern, group) {
        if (group === undefined) { group = this.world; }
        return group.add(new Enemy(this.game, x, y, name, stats, spriteSheet, seeker, pattern));
    }

    Phaser.GameObjectFactory.prototype.bar = function (x, y, key, frame, parent = this.game.world) {
        return new Bar(this.game, parent, x, y, key, frame);
    }

    Phaser.GameObjectFactory.prototype.circleWithSectors = function (x, y, radius, angles, colors, alphas, antiClockWise, segments, group) {
        if (group === undefined) { group = this.world; }
        return group.add(new CircleWithSectors(this.game, x, y, radius, angles, colors, alphas, antiClockWise, segments));
    }

    Phaser.GameObjectFactory.prototype.healthBar = function (x, y, character, voidKey, healKey, damageKey, healthKey, framekey, style, delay, speed, voidFrame = null, healFrame = null, damageFrame = null, healthFrame = null, parent = this.game.world) {
        return new HealthBar(this.game, x, y, character, voidKey, healKey, damageKey, healthKey, healthKey, style, delay, speed, voidFrame, healFrame, damageFrame, healthFrame, parent);
    }

    Phaser.GameObjectFactory.prototype.reactiveBar = function (parent, x, y, key, percentageFunction, functionContext, signal, frame) {
        return new ReactiveBar(this.game, parent, x, y, key, percentageFunction, functionContext, signal, frame);
    }

    Phaser.GameObjectFactory.prototype.reactiveContinuousBar = function (parent, x, y, key, percentageFunction, functionContext, signal, decreaseDelay, increaseDelay, decreaseSpeed, increaseSpeed, frame = null) {
        return new ReactiveContinuousBar(this.game, parent, x, y, key, percentageFunction, functionContext, signal, decreaseDelay, increaseDelay, decreaseSpeed, increaseSpeed, frame);
    }

    Phaser.GameObjectFactory.prototype.reactiveRichText = function (x, y, lineWidth, text, style, signal, group) {
        if (group === undefined) { group = this.world; }
        return group.add(new ReactiveRichText(this.game, x, y, lineWidth, text, style, group, signal));
    }

    Phaser.GameObjectFactory.prototype.richText = function (x, y, lineWidth, text, style = {}, group = this.game.world) {
        return new RichText(this.game, x, y, lineWidth, text, style, group);
    }

    Phaser.GameObjectFactory.prototype.actionButton = function (x, y, buttondKey, barKey, callback, callbackArguments, callbackContext, percentageFunction, percentageFunctionContext, timeFunction, timeFunctionContext,
        barSignal, totalRechargeSignal, backgroundTint, frameColorOver, frameColorOut, frameColorDown, frameColorDisabled, overFrame = null, outButtonFrame = null, downButtonFrame = null, upButtonFrame = null, barFrame = null, parent = this.game.world) {
        return new ActionButton(this.game, parent, x, y, buttondKey, barKey, callback, callbackArguments, callbackContext, percentageFunction, percentageFunctionContext, timeFunction, timeFunctionContext,
            barSignal, totalRechargeSignal, backgroundTint, frameColorOver, frameColorOut, frameColorDown, frameColorDisabled, overFrame, outButtonFrame, downButtonFrame, upButtonFrame, barFrame);
    }

    Phaser.GameObjectFactory.prototype.seekerCombatHUD = function (x, y, seeker, enemy, parent = this.game.world) {
        return new SeekerCombatHUD(this.game, parent, x, y, seeker, enemy);
    }

    Phaser.GameObjectFactory.prototype.scrollText = function (x, y, width, height, text, style, parent = this.game.world) {
        return new ScrollText(this.game, parent, x, y, width, height, text, style);
    }

    Phaser.GameObjectFactory.prototype.eventHUD = function (seeker, text, options, parent = this.game.world) {
        return new EventHUD(this.game, parent, seeker, text, options);
    }

    Phaser.GameObjectFactory.prototype.optionMenu = function (buttonsMenu, group) {
        if (group === undefined) { group = this.world; }
        return group.add(new OptionMenu(this.game, buttonsMenu, group));
    }


    Phaser.GameObjectFactory.prototype.buttonMenu = function (name, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame, group) {
        if (group === undefined) { group = this.world; }
        return group.add(new ButtonMenu(this.game, name, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame));
    }
}

module.exports = fun;