'use strict'
var ActionButton = require('./actionButton');
var HealthBar = require('./healthBar');
var ReactiveRichText = require('./reactiveRichText');
var textFunctions = require('./textFunctions');

var deactivateActionButton = function() {
  this.button.onInputOver.removeAll();
  this.button.onInputOut.removeAll();
  this.button.onInputDown.removeAll();
  this.button.onInputUp.removeAll();
  this._rechargeEvent.active = false;
  this.text.visible = false;
  this.bar.percentageFunction = function(){return 0;};
  this.bar.percentage = 0;
  this.deactivate()
};

var SeekerCombatHUD = function (game, parent, x, y, seeker, enemy) {
    Phaser.Group.call(this, game, parent);
    this.x = x;
    this.y = y;
    let style = require('../../assets/fonts/style.json');
    this.frame = this.add(new Phaser.Sprite(game,0,0,'interface'));
    this.blockButton = this.add(new ActionButton(game, this, 44, 132, 'blockIcon', 'blockIcon', [seeker.block], [], seeker, function () {
        return (1 - this.block.timeToCoolDown() / this.block.coolDownTime) * 100;
      }, seeker, function() {
        let a = this.block.timeToCoolDown()/1000;
        if(isNaN(a)){
          return '';
        } else {
          return a.toFixed(1).toString();
        }
      },seeker, seeker.coolDown.block.onWhile, seeker.coolDown.block.onEnd, 0x676767 ,0xffffff, 0x000000, 0x222222, 0x676767));

    this.attackButton = this.add(new ActionButton(game, this, 25, 132, 'attackIcon', 'attackIcon', [seeker.attack], [enemy], seeker, function () {
        return (1 - this.attack.timeToCoolDown() / this.attack.coolDownTime) * 100;
      }, seeker, function() {
        let a = this.attack.timeToCoolDown()/1000;
        if(isNaN(a)){
          return '';
        } else {
          return a.toFixed(1).toString();
        }
      },seeker, seeker.coolDown.attack.onWhile, seeker.coolDown.attack.onEnd, 0x676767 ,0xffffff, 0x000000, 0x222222, 0x676767));
    
    this.blockButton.callbacks.push(this.attackButton.deactivate.bind(this.attackButton));
    this.attackButton.callbacks.push(this.blockButton.deactivate.bind(this.blockButton));
    seeker.onDeath.add(deactivateActionButton, this.blockButton);
    seeker.onDeath.add(deactivateActionButton, this.attackButton);
    enemy.onDeath.add(deactivateActionButton, this.blockButton);
    enemy.onDeath.add(deactivateActionButton, this.attackButton);
    this.healthBar = this.add(new HealthBar(game,2,121, seeker, 'emptyBar', 'healBar', 'damageBar', 'healthBar', 'frameBar', style, 100, 100,this));
   
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
SeekerCombatHUD.prototype = Object.create(Phaser.Group.prototype);
SeekerCombatHUD.prototype.constructor = SeekerCombatHUD;

module.exports = SeekerCombatHUD;