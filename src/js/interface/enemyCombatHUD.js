'use strict'

var ActionBar = require('./actionBar');
var HealthBar = require('./healthBar');

var EnemyCombatHUD = function (game, parent, x, y, seeker, enemy) {
    Phaser.Group.call(this, game, parent);
    
    let style = require('../../assets/fonts/style.json');
    this.healthBar = this.add(new HealthBar(game, 119, 121, enemy, 'emptyBar', 'healBar', 'damageBar', 'healthBar', 'frameBar', style, 1000, 100, this));
    this._actionBar = this.add(new ActionBar(game, this, 87,122,enemy,'actionsBarFrame'));
}


EnemyCombatHUD.prototype = Object.create(Phaser.Group.prototype);
EnemyCombatHUD.prototype.constructor = EnemyCombatHUD;

module.exports = EnemyCombatHUD;