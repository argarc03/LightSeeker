'use strict'

var ActionBar = require('./actionBar');
var HealthBar = require('./healthBar');
var ReactiveRichText = require('./reactiveRichText');
var textFunctions = require('./textFunctions');

var EnemyCombatHUD = function (game, parent, x, y, seeker, enemy) {
    Phaser.Group.call(this, game, parent);
    this.x = x;
    this.y = y;
    let style = require('../../assets/fonts/style.json');

    var style2 = {"font": "Minecraft", "fill": "#000000", "fontSize": 10 };

    this.healthBar = this.add(new HealthBar(game, 119, 121, enemy, 'emptyBar', 'healBar', 'damageBar', 'healthBar', 'frameBar', style, 1000, 100, this));
    this._actionBar = this.add(new ActionBar(game, this, 87,122,enemy,'actionsBarFrame'));

    this.name = this.add(new ReactiveRichText(game,3+123,-1,80,textFunctions.Fun(function() {
        return this.name;
    }, enemy), style2, this, enemy.onNameChange));

    this.healthIcon = this.add(new Phaser.Image(game,3+122,14,'healthIcon'));
    this.healthNumber = this.add(new ReactiveRichText(game,15+122,13,11,textFunctions.Fun(function() {
        return this.stats.health.toString();
    }, enemy), style2, this, enemy.stats.onHealthChange));

    this.damageIcon = this.add(new Phaser.Image(game,27+122,14,'damageIcon'));
    this.damageNumber = this.add(new ReactiveRichText(game,39+122,13,11,textFunctions.Fun(function() {
        return this.stats.damage.toString();
    }, enemy), style2, this, enemy.stats.onDamageChange));

    this.defenseIcon = this.add(new Phaser.Sprite(game,51+122,14,'defenseIcon'));
    this.defenseNumber = this.add(new ReactiveRichText(game,63+122,13,11,textFunctions.Fun(function() {
        return this.stats.defense.toString();
    }, enemy), style2, this, enemy.stats.onDefenseChange));

    this.speedIcon = this.add(new Phaser.Image(game,13+122,24,'speedIcon'));
    this.speedNumber = this.add(new ReactiveRichText(game,25+122,23,11,textFunctions.Fun(function() {
        return this.stats.speed.toString();
    }, enemy), style2, this, enemy.stats.onSpeedChange));

    this.perceptionIcon = this.add(new Phaser.Image(game,38+122,24,'perceptionIcon'));
    this.perceptionNumber = this.add(new ReactiveRichText(game,50+122,23,11,textFunctions.Fun(function() {
        return this.stats.damage.toString();
    }, enemy), style2, this, enemy.stats.onPerceptionChange));
}


EnemyCombatHUD.prototype = Object.create(Phaser.Group.prototype);
EnemyCombatHUD.prototype.constructor = EnemyCombatHUD;

module.exports = EnemyCombatHUD;