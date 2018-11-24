'use strict';

var Character = require('./character.js');
var SeekerActionFactory = require('./actionSeekerFactory.js');
var Item = require('./item');
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
var Seeker = function (game, x, y, name, stats, items, spriteSheet) {
    Character.call(this, game, x, y, name, stats, spriteSheet);
    this.addAction = new SeekerActionFactory(this);
    this.gems = 42;
    this.population = 103;
    this.totalGems = 569;
    this.items = items;
}

Seeker.prototype = Object.create(Character.prototype);
Seeker.prototype.constructor = Seeker;

module.exports = Seeker;