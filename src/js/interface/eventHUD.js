'use strict'

var ScrollText = require('./scrollText');
var HealthBar = require('./healthBar');
var ReactiveRichText = require('./reactiveRichText');
var textFunctions = require('./textFunctions');

var EventHUD = function(game, parent, seeker, text, options) {
    Phaser.Group.call(this, game, parent);
    for(let element in options) {
        options[element].text;
        options[element].callback;
    }
    let style = require('../../assets/fonts/style.json');
    style.align = 'left';
    this.text = this.add(new ScrollText(game, this,80,26,110,80, text, style));
    this.frame = this.add(new Phaser.Sprite(game, 0, 0, 'eventinterface'));
    this.healthBar = this.add(new HealthBar(game,78,1, seeker, 'emptyBar', 'healBar', 'damageBar', 'healthBar', style, 100, 100,this));
    
    var style2 = {"font": "Minecraft", "fill": "#000000", "fontSize": 10 };
    this.name = this.add(new ReactiveRichText(game,3,0,80,textFunctions.Fun(function() {
        return this.name;
    }, seeker), style2, this, seeker.onNameChange));

    this.healthIcon = this.add(new Phaser.Sprite(game,3,14,'healthIcon'));
    this.healthNumber = this.add(new ReactiveRichText(game,15,13,11,textFunctions.Fun(function() {
        return this.stats.health.toString();
    }, seeker), style2, this, seeker.stats.onHealthChange));

    this.damageIcon = this.add(new Phaser.Sprite(game,27,14,'damageIcon'));
    this.damageNumber = this.add(new ReactiveRichText(game,39,13,11,textFunctions.Fun(function() {
        return this.stats.damage.toString();
    }, seeker), style2, this, seeker.stats.onDamageChange));

    this.defenseIcon = this.add(new Phaser.Sprite(game,51,14,'defenseIcon'));
    this.defenseNumber = this.add(new ReactiveRichText(game,63,13,11,textFunctions.Fun(function() {
        return this.stats.defense.toString();
    }, seeker), style2, this, seeker.stats.onDefenseChange));

    this.speedIcon = this.add(new Phaser.Sprite(game,69,14,'speedIcon'));
    this.speedNumber = this.add(new ReactiveRichText(game,81,13,11,textFunctions.Fun(function() {
        return this.stats.speed.toString();
    }, seeker), style2, this, seeker.stats.onSpeedChange));

    this.perceptionIcon = this.add(new Phaser.Sprite(game,88,14,'perceptionIcon'));
    this.perceptionNumber = this.add(new ReactiveRichText(game,100,13,11,textFunctions.Fun(function() {
        return this.stats.perception.toString();
    }, seeker), style2, this, seeker.stats.onPerceptionChange));

    this.gemIcon = this.add(new Phaser.Sprite(game, 68, 2, 'gemIcon'));
    this.gemNumber = this.add(new ReactiveRichText(game, 50, 0, 15, textFunctions.Fun(function () {
    return this.gems.toString();
    }, seeker), style2, this, seeker.stats.onPerceptionChange));
}

EventHUD.prototype = Object.create(Phaser.Group.prototype);
EventHUD.prototype.constructor = EventHUD;

module.exports = EventHUD;

