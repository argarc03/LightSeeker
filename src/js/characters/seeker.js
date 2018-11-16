'use strict';

var Character = require('./character.js');
var SeekerActionFactory = require('./actionSeekerFactory.js');
/**
 * 
 */
/**
 * 
 * @param {Phaser.Game} game - 
 * @param {number} x - 
 * @param {number} y -
 * @param {string} name -
 * @param {Stats} stats -
 * @param {string} spriteSheet -
*/
var Seeker = function (game, x, y, name, stats, spriteSheet) {
    Character.call(this, game, x, y, name, stats, spriteSheet);
    this.addAction = new SeekerActionFactory(this);
}

Seeker.prototype = Object.create(Character.prototype);
Seeker.prototype.constructor = Seeker;

module.exports = Seeker;