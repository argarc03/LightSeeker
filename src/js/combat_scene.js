'use strict';

var emitter;

//village stats
var day = 1;
var population = 24;
var totalgems = 0;

var seeker = require('./character.js');
var action;
var CombatScene = {

  create: function () {
    seeker.action =[,];
    var action = [];
    action[0] = new Action('attack', 1, false,[17,18,19,20,21,22,23,24], 10, seeker.action[1]);
    action[1] = new Action('idle', 1, true,[0,1,2,3,4,5,6,7,8], 10, seeker.action[1]);
    seeker = new Character(-8,0,'seeker', 1, 1, 1, 100, 'seekerAnimations', this.game, action);
    eeker.actions['idle']();
    //music
    var music = this.game.add.audio('boss');
    music.volume = 2;
    music.play();

    //render background
    var combatbackground = this.game.add.sprite(0,0, 'combatbackground');
  },
  update: function() { 
  }
};


module.exports = CombatScene;
