'use strict';

//scene timer

//seeker stats
var seekerhp = 100; //health
var seekerat = 2; //attack
var seekerdf = 2; //defense
var seekersp = 1; //speed

var seekerhptext; //health
var seekerattext; //attack
var seekerdftext; //defense
var seekersptext; //speed

//Seeker Actions

var seekerTimer={};

var seeker;
var attack;
var idle;
var restore;
var playIdle;
var playRestore;
//seekerTimer.AttackB;
//seekerTimer.ObjectA;
//seekerTimer.ObjectB;

//enemy stats
var enemyhp = 20; //health
var enemyat = 1; //attack
var enemydf = 1; //defense
var enemysp = 1; //speed

var enemyhptext; //health
var enemyattext; //attack
var enemydftext; //defense
var enemysptext; //speed

var attacktext;
var blocktext;

  var CombatScene = {

  create: function () {
    
    //timer creation
    seekerTimer.AttackA ={};
    seekerTimer.AttackA.isActive = true;
    seekerTimer.AttackA.refresh = function(){
      seekerTimer.AttackA.isActive = true;
      console.log("No te entiendo.");
    }
    
    //music
    var music = this.game.add.audio('boss');
    music.volume = 2;
    //music.play();
    //render background
    var combatbackground = this.game.add.sprite(0,0, 'combatbackground');

    seekerhptext = this.game.add.bitmapText(0, 12, 'font',"HP: "+seekerhp,12);
    seekerattext = this.game.add.bitmapText(0, 0, 'font',seekerat,12);
    seekerdftext = this.game.add.bitmapText(12, 0, 'font',seekerdf,12);
    seekersptext = this.game.add.bitmapText(24, 0, 'font',seekersp,12);
    
    //render interface
    var enemybar = this.game.add.sprite(this.game.world.width-50,25,'statBar');
    enemybar.height=10
    enemybar.width=(enemyhp/100)*200;


    //render seeker
    seeker = this.game.add.sprite(0,-10,'seekerAnimations');
    idle = seeker.animations.add('idle',[0,1,2,3,4,5,6,7,8,9],true);
    attack = seeker.animations.add('attack',[17,18,19,20,21,22,23,24,25],true);
    restore = seeker.animations.add('restore',[26,27,28,29,30,31,32,33],true);

    playIdle=function(){seeker.animations.play('idle',10,true);}
    playRestore = function(){
      enemyhp = enemyhp - seekerat;
      enemyhptext.text = "HP: " + enemyhp; 
      enemybar.width=(enemyhp/100)*200;
      seeker.animations.play('restore',10,false); 
      restore.onComplete.add(playIdle,this);
      this.game.camera.shake(0.01,300);
    }


    playIdle();
    //render enemy (80x120) -> (this.game.world.width-80,-10)
    var enemy = this.game.add.sprite(this.game.world.width-80,-10, 'spiderIdle');
    var enemyIdle = enemy.animations.add('idle',[0,1,2,3,4,5],true);

    enemy.animations.play('idle',8,true);

    enemyhptext = this.game.add.bitmapText(this.game.world.width-50, 12, 'font',"HP: "+enemyhp,12);
    enemyattext = this.game.add.bitmapText(this.game.world.width-50, 0, 'font',enemyat,12);
    enemydftext = this.game.add.bitmapText(this.game.world.width-40, 0, 'font',enemydf,12);
    enemysptext = this.game.add.bitmapText(this.game.world.width-30, 0, 'font',enemysp,12);
  
    //render attack button
    attacktext = this.game.add.bitmapText(0, this.game.world.height-24, 'font',"A",24);

    attacktext.inputEnabled = true;
    
    //events attack a button
    attacktext.events.onInputOver.add(remark, this);
    attacktext.events.onInputOut.add(desmark, this);
    attacktext.events.onInputUp.add(desclick,this);
    attacktext.events.onInputDown.add(click,this);

    //render attack button
    blocktext = this.game.add.bitmapText(200, this.game.world.centerY, 'font',"B",24);

    blocktext.inputEnabled = true;
    
    blocktext.events.onInputOver.add(remarkB, this);
    blocktext.events.onInputOut.add(desmarkB, this);
    blocktext.events.onInputUp.add(desclickB,this);
    blocktext.events.onInputDown.add(clickB,this);

  },

  update: function() {
    if(!seekerTimer.AttackA.isActive){
      
      if(attack.isFinished)
      {
        //console.log(seekerTimer.AttackA.t.timer.duration);
        
      }
    }
  }

  
};


var remark =  function () {
  attacktext.tint = 0x223344;
}

var desmark =  function () {
  attacktext.tint = 0xFFFFFF;
}

var desclick =  function () {
  attacktext.tint = 0x223344;
}

var click =  function () {
  attacktext.tint = 0xAAAAAA;
  
  if(seekerTimer.AttackA.isActive)
  {
    seeker.animations.play('attack',10,false);
    
    seekerTimer.AttackA.isActive = false;
    attack.onComplete.add(playRestore,this);
    seekerTimer.AttackA.t = this.game.time.events.add(3*Phaser.Timer.SECOND/seekersp,seekerTimer.AttackA.refresh, this);
    console.log("Ojala funcionases, puto.");
  }
}

var remarkB =  function () {
  blocktext.tint = 0x223344;
}

var desmarkB =  function () {
  blocktext.tint = 0xFFFFFF;
}

var desclickB =  function () {
  blocktext.tint = 0xAAAAAA;
  blocktext.tint = 0x223344;
}

var clickB =  function () {
  
}


module.exports = CombatScene;
