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
    var combatbackground = this.game.add.sprite(0, 0, 'combatbackground');

    var fun = function(args){
      console.log(args);
    }
    var fun = function(){
      for(arg in arguments)
        console.log(arg);
    }

    fun('hola', 'adios', 'muy buenas');
    //music
    var music = this.game.add.audio('boss');
    music.play();


  },
  update: function () {
  }
};


module.exports = CombatScene;
