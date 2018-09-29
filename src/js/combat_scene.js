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
    

    seeker = new Character(0,-8,'Carlos Leon',1,1,1,10,'seekerAnimations',
      this.game, {idle: new Idle('idle', [0,1,2,3,4,5,6,7,8,9]), 
      attack: new Attack('attack',[17,18,19,20,21,22,23,24,24],[25,26,27,28,29,30,31,32,33],null,null)});
    seeker.attack();
    seeker.hurt(11);
    
    //music
    var music = this.game.add.audio('boss');
    music.play();


  },
  update: function () {
    console.log(seeker.percentageTimeAttack);
  }
};


module.exports = CombatScene;
