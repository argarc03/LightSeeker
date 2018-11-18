'use strict'

var ScrollText = require('./scrollText');
var HealthBar = require('./healthBar');
var ReactiveRichText = require('./reactiveRichText');
var RichText = require('./richText');
var textFunctions = require('./textFunctions');
var Slider = require('./slider');

var EventHUD = function(game, parent, seeker, text, options) {
    Phaser.Group.call(this, game, parent);
    for(let element in options) {
        options[element].text;
        options[element].callback;
    }
    let style = require('../../assets/fonts/style.json');

    var style2 = {"font": "Minecraft", "fill": "#000000", "fontSize": 10 };

    var style3 = {"font": "Minecraft", "fill": "#FFFFFF", "fontSize": 10, "align": 'center'};

    this.text = this.add(new ScrollText(game, this,74,32,119,85, text, style2));
    this.frame = this.add(new Phaser.Sprite(game, 0, 0, 'eventinterface'));
    this.healthBar = this.add(new HealthBar(game,79,2, seeker, 'emptyBar', 'healBar', 'damageBar', 'healthBar', style3, 100, 100,this));
    
    this.name = this.add(new ReactiveRichText(game,3,-1,80,textFunctions.Fun(function() {
        return this.name;
    }, seeker), style2, this, seeker.onNameChange));

    this.healthIcon = this.add(new Phaser.Sprite(game,3,15,'healthIcon'));
    this.healthNumber = this.add(new ReactiveRichText(game,15,13,11,textFunctions.Fun(function() {
        return this.stats.health.toString();
    }, seeker), style2, this, seeker.stats.onHealthChange));

    this.damageIcon = this.add(new Phaser.Sprite(game,27,15,'damageIcon'));
    this.damageNumber = this.add(new ReactiveRichText(game,39,13,11,textFunctions.Fun(function() {
        return this.stats.damage.toString();
    }, seeker), style2, this, seeker.stats.onDamageChange));

    this.defenseIcon = this.add(new Phaser.Sprite(game,51,15,'defenseIcon'));
    this.defenseNumber = this.add(new ReactiveRichText(game,63,13,11,textFunctions.Fun(function() {
        return this.stats.defense.toString();
    }, seeker), style2, this, seeker.stats.onDefenseChange));

    this.speedIcon = this.add(new Phaser.Sprite(game,75,15,'speedIcon'));
    this.speedNumber = this.add(new ReactiveRichText(game,87,13,11,textFunctions.Fun(function() {
        return this.stats.speed.toString();
    }, seeker), style2, this, seeker.stats.onSpeedChange));

    this.perceptionIcon = this.add(new Phaser.Sprite(game,99,15,'perceptionIcon'));
    this.perceptionNumber = this.add(new ReactiveRichText(game,111,13,11,textFunctions.Fun(function() {
        return this.stats.damage.toString();
    }, seeker), style2, this, seeker.stats.onPerceptionChange));

    this.gemIcon = this.add(new Phaser.Sprite(game, 68, 1, 'gemIcon'));
    this.gemNumber = this.add(new ReactiveRichText(game, 50, -1, 15, textFunctions.Fun(function () {
    return this.gems.toString();
    }, seeker), style2, this, seeker.stats.onPerceptionChange));//cambiar onPerceptionChange

    this.villageGemIcon = this.add(new Phaser.Sprite(game, 160+3, 18, 'villageGemIcon'));
    this.villageGemNumber = this.add(new ReactiveRichText(game, 142+3, 16, 15, textFunctions.Fun(function () {
    return this.gems.toString();//hay que cambiarlo
    }, seeker), style2, this, seeker.stats.onPerceptionChange));//cambiar onPerceptionChange

    this.populationIcon = this.add(new Phaser.Sprite(game, 160+28, 18, 'populationIcon'));
    this.populationNumber = this.add(new ReactiveRichText(game, 142+28, 16, 15, textFunctions.Fun(function () {
    return this.gems.toString();//hay que cambiarlo
    }, seeker), style2, this, seeker.stats.onPerceptionChange));//cambiar onPerceptionChange

    this.option1back = this.add(new Phaser.Sprite(game,0,122,'optionBack'));
    this.option2back = this.add(new Phaser.Sprite(game,101,122,'optionBack'));
    this.option3back = this.add(new Phaser.Sprite(game,0,137,'optionBack'));
    this.option4back = this.add(new Phaser.Sprite(game,101,137,'optionBack'));

    this.option1 = this.add(new RichText(game,2,122,100,'1. Buscar', style));
    this.option2 = this.add(new RichText(game,103,122,100,'2. No hacer nada', style));
    this.option3 = this.add(new RichText(game,2,137,100,'3. Irse a la wea', style));
    this.option4 = this.add(new RichText(game,103,137,100,'4. Inspeccionarlo', style));

    this.imageFrame = this.add(new Phaser.Sprite(game,2,42,'eventImage'));

    this.day = this.add(new ReactiveRichText(game, 26, 27, 40, textFunctions.Fun(function () {
        return '100';//hay que
        }, seeker), style3, this, seeker.stats.onPerceptionChange));

    this.game.add.optionMenu([['pauseButton',190,2,'pauseButton',this.EventScene,this,{}]]);

    this.topScroll = this.add(new Slider(game, this, 194,35,'sliderBackground', 'slider',80,20,3));
    this.topScroll.onChange.add(function(percentage){console.log(percentage), this});
    this.topScroll.onBegin.add(function(){console.log('Hola')}, this);
    this.topScroll.onEnd.add(function(){console.log('Adios')}, this);
    this.topScroll.move(50);
}

EventHUD.prototype = Object.create(Phaser.Group.prototype);
EventHUD.prototype.constructor = EventHUD;

module.exports = EventHUD;

