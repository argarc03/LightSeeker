'use strict'

var Character = require('./character');
var ActionPattern = require('./actionPattern');

var Enemy = function(game, x, y, name, stats, spriteSheet, seeker, pattern){
    Character.call(this, game, x, y, name, stats, spriteSheet);
    this.actionPattern = new ActionPattern(pattern, seeker, pattern);
    this.seeker = seeker;
}

Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.act = function() {
    this[this.actionPattern.currentAction](this.seeker);
    this.game.time.events.add(this[this.actionPattern.currentAction].totalTime()*1000, this.act, this);
    this.actionPattern.nextAction;
    console.log(this.actionPattern.currentAction,this[this.actionPattern.currentAction].totalTime());
    console.log(this);
}

module.exports = Enemy;