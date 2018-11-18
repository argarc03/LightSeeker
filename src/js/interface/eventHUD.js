'use strict'

var ScrollText = require('./scrollText');
var HealthBar = require('./healthBar');
var ReactiveRichText = require('./reactiveRichText');
var RichText = require('./richText');
var textFunctions = require('./textFunctions');
var Slider = require('./slider');
var  FramedButton = require('./framedButton');

var EventHUD = function(game, parent, seeker, text, options) {
    Phaser.Group.call(this, game, parent);
    for(let element in options) {
        options[element].text;
        options[element].callback;
    }
    let style = require('../../assets/fonts/style.json');

    var style2 = {"font": "Minecraft", "fill": "#000000", "fontSize": 10 };

    var style3 = {"font": "Minecraft", "fill": "#FFFFFF", "fontSize": 10, "align": 'center'};
    var style4 = {"font": "Minecraft", "fill": "#000000", "fontSize": 10, "align": 'center'};

    this.text = this.add(new ScrollText(game, this,74,32,119,85, text, style2));
    this.frame = this.add(new Phaser.Sprite(game, 0, 0, 'eventinterface'));
    this.healthBar = this.add(new HealthBar(game, 79, 2, seeker, 'emptyBar', 'healBar', 'damageBar', 'healthBar', 'frameBar', style3, 1000, 100, this));

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

    this.option1back = this.add(new FramedButton(this, game, 0,122,'optionBack', 'optionFrame', [],
        0x000000, 0xFFFFFF, 0x5C5C5C, 0x111111, 0xAAAAAA));
    this.option2back = this.add(new FramedButton(this, game, 101,122,'optionBack', 'optionFrame', [],
        0x000000, 0xFFFFFF, 0x5C5C5C, 0x111111, 0xAAAAAA));
    this.option3back = this.add(new FramedButton(this, game, 0,137,'optionBack', 'optionFrame', [],
        0x000000, 0xFFFFFF, 0x5C5C5C, 0x111111, 0xAAAAAA));
    this.option4back = this.add(new FramedButton(this, game, 101,137,'optionBack', 'optionFrame', [],
        0x000000, 0xFFFFFF, 0x5C5C5C, 0x111111, 0xAAAAAA));
    this.option1back.deactivate();
    this.option2back.deactivate();
    this.option3back.deactivate();
    this.option4back.deactivate();
        

    this.option1 = this.add(new RichText(game,2,122,100,options[0], style));
    this.option2 = this.add(new RichText(game,103,122,100,options[1], style));
    this.option3 = this.add(new RichText(game,2,137,100,options[2], style));
    this.option4 = this.add(new RichText(game,103,137,100,options[3], style));
    this.option1.visible = false;
    this.option2.visible = false;
    this.option3.visible = false;
    this.option4.visible = false;

    this.imageFrame = this.add(new Phaser.Sprite(game,2,42,'eventImage'));

    this.day = this.add(new ReactiveRichText(game, 26, 27, 40, textFunctions.Fun(function () {
        return '1';//hay que
        }, seeker), style4, this, seeker.stats.onPerceptionChange));

    this.game.add.optionMenu([['pauseButton',190,2,'pauseButton',this.EventScene,this,{}]]);

    
    this.topScroll = this.add(new Slider(game, this, 194,35,'sliderBackground', 'slider',80,50,3));
    this.topScroll.onChange.add(function(percentage){this.text.move(percentage);}, this);
    this.topScroll.onEnd.add(function(){
        this.option1back.activate();
        this.option2back.activate();
        this.option3back.activate();
        //this.option4back.activate();
        this.option1.visible = true;
        this.option2.visible = true;
        this.option3.visible = true;
        this.option4.visible = true;
    },this);
    //this.topScroll.onBegin.add(function(){console.log('Hola')}, this);
    //this.topScroll.onEnd.add(function(){console.log('Adios')}, this);

    //this.topScroll.events.onInputDown();

    //this.topScroll.move(this.game.input.y);


}

EventHUD.prototype = Object.create(Phaser.Group.prototype);
EventHUD.prototype.constructor = EventHUD;

module.exports = EventHUD;

