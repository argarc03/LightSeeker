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
    style.align = 'center';
    this.text = this.add(new ScrollText(game, this,0,0,150,100, text, style));
    console.log(this.text);

    this.healthBar = this.add(new HealthBar(game,2,121, seeker, 'emptyBar', 'healBar', 'damageBar', 'healthBar', style, 100, 100,this));
   
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

    this.speedIcon = this.add(new Phaser.Sprite(game,13,24,'speedIcon'));
    this.speedNumber = this.add(new ReactiveRichText(game,25,23,11,textFunctions.Fun(function() {
        return this.stats.speed.toString();
    }, seeker), style2, this, seeker.stats.onSpeedChange));

    this.perceptionIcon = this.add(new Phaser.Sprite(game,38,24,'perceptionIcon'));
    this.perceptionNumber = this.add(new ReactiveRichText(game,50,23,11,textFunctions.Fun(function() {
        return this.stats.perception.toString();
    }, seeker), style2, this, seeker.stats.onPerceptionChange));
    
}

EventHUD.prototype = Object.create(Phaser.Group.prototype);
EventHUD.prototype.constructor = EventHUD;

module.exports = EventHUD;

