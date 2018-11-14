'use strict'

var Character = require('./character.js');

var Enemy = function(){
    Character.call(this);
}

Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;

module.exports = Enemy;