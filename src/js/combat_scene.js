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
    //render background
    var combatbackground = this.game.add.sprite(0,0, 'combatbackground');

    var action = [];
    seeker.actions = {};
    seeker.actions.idle = function() {};
    seeker.actions.attack = function() {};
    action[1] = new Action('idle', 5, true,[0,1,2,3,4,5,6,7,8], 10, function(object){});
    action[0] = new Action('attack', 5, false,[17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34], 10, function(object){}, seeker.actions.idle);
    
    seeker = new Character(-8,0,'seeker', 1, 1, 1, 100, 'seekerAnimations', this.game, action);
    seeker.actions.attack();
    //music
    var music = this.game.add.audio('boss');
    music.play();

    
  },
  update: function() { 
  }
};


module.exports = CombatScene;
