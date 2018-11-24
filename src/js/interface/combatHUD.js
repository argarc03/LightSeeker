'use strict'

var EnemyCombatHUD = require('./enemyCombatHUD');
var SeekerCombatHUD = require('./seekerCombatHUD');

var CombatHUD = function (game, parent, x, y, seeker, enemy) {
    Phaser.Group.call(this, game, parent);
    this.x = x;
    this.y = y;
    this.frame = this.add(new Phaser.Image(game, 0, 0, 'interface'));
    this._seekerHUD = this.add(new SeekerCombatHUD(game, this, 0, 0, seeker, enemy));
    this._enemyHUD = this.add(new EnemyCombatHUD(game, this, 0, 0, seeker, enemy));
}


CombatHUD.prototype = Object.create(Phaser.Group.prototype);
CombatHUD.prototype.constructor = CombatHUD;

module.exports = CombatHUD;