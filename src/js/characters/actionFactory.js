'use strict'

var Action = require('./action.js');
var TimeCalculations = require('./timeCalculations.js');

/**
 * 
 * @param {Character} character 
 */
var ActionFactory = function (character) {
    this.character = character;
}

/**
 * 
 * @param {number[]|string[]} frames 
 */
ActionFactory.prototype.idle = function(frames) {
    this.character.animations.add('idle', frames, true);
    this.character.idle = Action.idle;
}

/**
 * 
 * @param {number[]|string[]} framesPreAttacking 
 * @param {number[]|string[]} framesAttacking 
 */
ActionFactory.prototype.attack = function(framesPreAttacking, framesAttacking) {
    this.character.attack = Action.attack;
    this.character.animations.add('preAttacking', framesPreAttacking, true);
    this.character.animations.add('attacking', framesAttacking, true);
    this.character._preAttacking = Action.preAttacking;
    this.character._attacking = Action.attacking;
    this.character.attack.totalTime = TimeCalculations.totalAttackTime;
    this.character.attack.currentTime = TimeCalculations.currentAttackTime;
}

/**
 * 
 * @param {number[]|string[]} framesPreBlocking 
 * @param {number[]|string[]} framesBlocking 
 * @param {number[]|string[]} framesPostBlocking 
 */
ActionFactory.prototype.block = function(framesPreBlocking, framesBlocking, framesPostBlocking) {
    this.character.animations.add('preBlocking', framesPreBlocking, true);
    this.character.animations.add('blocking', framesBlocking, true);
    this.character.animations.add('postBlocking', framesPostBlocking, true);
    this.character.block = Action.block;
    this.character._preBlocking = Action.preBlocking;
    this.character._blocking = Action.blocking;
    this.character._loop = Action.loop;
    this.character._postBlocking = Action.postBlocking;
    this.character.block.totalTime = TimeCalculations.totalBlockTime;
    this.character.currentTime = TimeCalculations.currentBlockTime;
}

/**
 * 
 * @param {number[]|string[]} framesDying 
 */
ActionFactory.prototype.die = function(framesDying) {
    this.character.animations.add('dying', framesDying, true);
    this.character.die = Action.die;
}

module.exports = ActionFactory;