'use strict'

var CoolDown = require('./coolDown');
var Action = require('./action');
var TimeCalculations = require('./timeCalculations');
var ActionFactory = require('./actionFactory');

//Hay que encender todos los timers al igual que apagarlos.
var SeekerActionFactory = function (character) {
    ActionFactory.call(this, character);
    this.character.coolDown = {};
}

SeekerActionFactory.prototype = Object.create(ActionFactory.prototype);
SeekerActionFactory.prototype.constructor = SeekerActionFactory;

SeekerActionFactory.prototype.idle = function (frames) {
    ActionFactory.prototype.idle.call(this, frames);
}

SeekerActionFactory.prototype.attack = function (framesPreAttacking, framesAttacking, globalCoolDown, selfCoolDown) {
    ActionFactory.prototype.attack.call(this, framesPreAttacking, framesAttacking);

    this.character.coolDown.attack = this.character.game.time.create(false);
    this.character.coolDown.attack.onStart = new Phaser.Signal();
    this.character.coolDown.attack.onWhile = new Phaser.Signal();
    this.character.coolDown.attack.onEnd = new Phaser.Signal();
    this.character.coolDown.attack.global = globalCoolDown;

    this.character.attack = function (target) {
        if (!this.coolDown.attack.running) {
            Action.attack.apply(this, [target]);
            CoolDown.addAllTime.call(this, 'attack');

            CoolDown.signalEmiter.call(this, 'attack');
        }
    }
    this.character.attack.currentTime = TimeCalculations.currentAttackTime.bind(this.character);
    this.character.attack.totalTime = TimeCalculations.totalAttackTime.bind(this.character);
    this.character.attack.timeToCoolDown = function () {
        let a = this.coolDown.attack.nextTick - Date.now();
        return a<0?NaN:a;
    }.bind(this.character);
    this.character.attack.coolDownTime = selfCoolDown;
}

SeekerActionFactory.prototype.block = function (framesPreBlocking, framesBlocking, framesPostBlocking, globalCoolDown, selfCoolDown) {
    ActionFactory.prototype.block.call(this, framesPreBlocking, framesBlocking, framesPostBlocking);

    this.character.coolDown.block = this.character.game.time.create(false);
    this.character.coolDown.block.onStart = new Phaser.Signal();
    this.character.coolDown.block.onWhile = new Phaser.Signal();
    this.character.coolDown.block.onEnd = new Phaser.Signal();
    this.character.coolDown.block.global = globalCoolDown;

    this.character.block = function () {
        if (!this.coolDown.block.running) {
            Action.block.apply(this);
            CoolDown.addAllTime.call(this, 'block');
            CoolDown.signalEmiter.call(this, 'block');
        }

    }

    this.character.block.currentTime = TimeCalculations.currentBlockTime.bind(this.character);
    this.character.block.totalTime = TimeCalculations.totalBlockTime.bind(this.character);

    this.character.block.timeToCoolDown = function () {
        let a = this.coolDown.block.nextTick - Date.now();
        return a<0?NaN:a;
    }.bind(this.character);
    this.character.block.coolDownTime = selfCoolDown;
}


SeekerActionFactory.prototype.die = function (framesDying) {
    ActionFactory.prototype.die.call(this, framesDying);
}

module.exports = SeekerActionFactory;