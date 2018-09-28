'use strict';



//village stats
var day = 1;
var population = 24;
var totalgems = 0;

var seeker = require('./character.js');
var CombatScene = {

  create: function () {
    //render background
    var combatbackground = this.game.add.sprite(0, 0, 'combatbackground');

    seeker = new Character(0,-8,'Carlos Leon',1,1,1,1,'seekerAnimations',this.game,{});
    seeker.attack();
    //music
    var music = this.game.add.audio('boss');
    music.play();


  },
  update: function () {
  }
};


module.exports = CombatScene;
