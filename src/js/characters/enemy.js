'use strict'

var Character = require('./character');
var ActionPattern = require('./actionPattern');

var Enemy = function(game, x, y, name, stats, spriteSheet, seeker, pattern){
    Character.call(this, game, x, y, name, stats, spriteSheet);
    this.actionPattern = new ActionPattern(pattern, seeker, pattern);
    this.seeker = seeker;
    this._lastActionEvent;
    this.seeker.onDeath.add(function(){
        this.act = function () { 
            this.idle();
        };
        this.game.time.events.remove(this._lastActionEvent);
    },this);
    this.onDeath.add(function() {
        this.act = function () {};
        this.game.time.events.remove(this._lastActionEvent);
    }, this)
}

Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.act = function() {
    this[this.actionPattern.currentAction](this.seeker);
    this._lastActionEvent = this.game.time.events.add(this[this.actionPattern.currentAction].totalTime()*1000, this.act, this);
    this.actionPattern.nextAction;
}

module.exports = Enemy;