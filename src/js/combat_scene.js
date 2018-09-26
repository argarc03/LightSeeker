'use strict';

var emitter;

//village stats
var day = 1;
var population = 24;
var totalgems = 0;

//seeker stats
var seekerhptotal = 100;
var seekerhp = 100; //health
var seekerat = 5; //attack
var seekerdf = 2; //defense
var seekersp = 1; //speed

var seekerhptext; //health
var seekerattext; //attack
var seekerdftext; //defense
var seekersptext; //speed

var seekergems = 10; //gems in this run

//Seeker Actions
var seekerTimer={};

var seeker;
var seekerattack;
var seekeridle;
var seekerrestore;
var seekerplayIdle;
var seekerplayRestore;
//seekerTimer.AttackB;
//seekerTimer.ObjectA;
//seekerTimer.ObjectB;

//enemy stats
var enemyTimer={};

var enemyname = "SPIDER";
var enemyhptotal = 20; //total health
var enemyhp = 20; //health
var enemyat = 12; //attack
var enemydf = 1; //defense 
var enemysp = 1; //speed

var enemy;
var enemyattack;
var enemyidle;
var enemyrestore;
var enemyplayIdle;
var enemyplayRestore;


var enemyhptext; //health
var enemyattext; //attack
var enemydftext; //defense
var enemysptext; //speed




//interface
var attacktext;
var blocktext;

  var CombatScene = {

  create: function () {
    




    //seeker timer creation
    seekerTimer.AttackA ={};
    seekerTimer.AttackA.isActive = true;
    seekerTimer.AttackA.refresh = function(){
      seekerTimer.AttackA.isActive = true;
    }
    
    //enemy timer creation
    enemyTimer.AttackA ={};
    seekerTimer.AttackA.isActive = true;
    seekerTimer.AttackA.refresh = function(){
      seekerTimer.AttackA.isActive = true;
    }
     
    //music
    var music = this.game.add.audio('boss');
    music.volume = 2;
    music.play();

    //render background
    var combatbackground = this.game.add.sprite(0,0, 'combatbackground');


    //render seeker (0,-8)
    seeker = this.game.add.sprite(0,-8,'seekerAnimations');
    seekeridle = seeker.animations.add('idle',[0,1,2,3,4,5,6,7,8,9],true);
    seekerattack = seeker.animations.add('attack',[17,18,19,20,21,22,23,24,24],true);
    seekerrestore = seeker.animations.add('restore',[25,26,27,28,29,30,31,32,33],true);

    seekerplayIdle=function(){seeker.animations.play('idle',10,true);}
    seekerplayRestore = function()
    {
      enemyhp = enemyhp - seekerat;
      if(enemyhp<0) enemyhp=0;
      enemyhptext.text = enemyhp + "/" + enemyhptotal;
      enemybar.width=(enemyhp/100)*338;
      seeker.animations.play('restore',10,false); 
      seekerrestore.onComplete.add(seekerplayIdle,this);
      this.game.camera.shake(0.01,300);

      emitter = this.game.add.emitter(160, 88, 100); //(x,y,maxParticles)
      emitter.makeParticles('blood');  
      emitter.start(1,0, 100, 100, true);//(lifespan,frecuency,quantity,total,inmediate)
    }

    seekerplayIdle();

    //render seeker health (bar size = 67)
    var seekerbar = this.game.add.sprite(11,16,'statBar');
    seekerbar.height=8;
    seekerbar.width=(seekerhp/100)*67;


    seekerhptext = this.game.add.bitmapText(28, 17, 'font',seekerhp + "/" + seekerhptotal,9);
    seekerattext = this.game.add.bitmapText(10, 2, 'font',seekerat,12);
    seekerdftext = this.game.add.bitmapText(36, 2, 'font',seekerdf,12);
    seekersptext = this.game.add.bitmapText(62, 2, 'font',seekersp,12);

    this.game.add.bitmapText(24, 26, 'font',seekergems,9);

    //render village
    this.game.add.bitmapText(84, 2, 'font',"DAY "+ day,10);


    //render enemy (80x120) -> (this.game.world.width-80,-8)
    enemy = this.game.add.sprite(this.game.world.width-80,-8, 'spiderAnimations');
    enemyidle = enemy.animations.add('idle',[0,1,2,3,4,5],true);
    enemyattack = enemy.animations.add('attack',[18,19,20,21,22,23,24,28],true);
    enemyrestore = enemy.animations.add('restore',[29,30,31,32,35],true); 

    enemyplayIdle=function(){enemy.animations.play('idle',8,true);}
    enemyplayRestore = function()
    {
      seekerhp = seekerhp - enemyat;
      if(seekerhp<0) seekerhp=0;
      seekerhptext.text = seekerhp + "/" + seekerhptotal;
      seekerbar.width=(seekerhp/100)*67;
      enemy.animations.play('restore',10,false); 
      enemyrestore.onComplete.add(enemyplayIdle,this);
      this.game.camera.shake(0.01,300);

      emitter = this.game.add.emitter(40, 88, 100); //(x,y,maxParticles)
      emitter.makeParticles('blood');  
      emitter.start(100,0, 100, 100, false);//(lifespan,frecuency,quantity,total,inmediate)
    }

    enemyplayIdle();

    //render enemy health
    var enemybar = this.game.add.sprite(this.game.world.width-69,16,'statBar');
    enemybar.height=8;
    enemybar.width=(enemyhp/100)*338;

    this.game.add.bitmapText(this.game.world.width-66, 2,'font', enemyname,9);
    enemyhptext = this.game.add.bitmapText(this.game.world.width-48, 17,'font', enemyhp + "/" + enemyhptotal,9);
    /*enemyattext = this.game.add.bitmapText(this.game.world.width-50, 0, 'font',enemyat,12);
    enemydftext = this.game.add.bitmapText(this.game.world.width-40, 0, 'font',enemydf,12);
    enemysptext = this.game.add.bitmapText(this.game.world.width-30, 0, 'font',enemysp,12);*/
  
    //render enemy timer



    //render attack button
    attacktext = this.game.add.bitmapText(30, this.game.world.height-21, 'font',"A",24);

    attacktext.inputEnabled = true;
    
    //events attack a button
    attacktext.events.onInputOver.add(remark, this);
    attacktext.events.onInputOut.add(desmark, this);
    attacktext.events.onInputUp.add(desclick,this);
    attacktext.events.onInputDown.add(click,this);

    //render block button
    blocktext = this.game.add.bitmapText(70, this.game.world.height-21, 'font',"B",24);

    blocktext.inputEnabled = true;
    
    blocktext.events.onInputOver.add(remarkB, this);
    blocktext.events.onInputOut.add(desmarkB, this);
    blocktext.events.onInputUp.add(desclickB,this);
    blocktext.events.onInputDown.add(clickB,this);

  },

  update: function() {
    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    if(spaceKey.isDown)
    {
      enemy.animations.play('attack',10,false);

      enemyattack.onComplete.add(enemyplayRestore,this);


    }


    if(!seekerTimer.AttackA.isActive){
      
      if(seekerattack.isFinished)
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
    seekerattack.onComplete.add(seekerplayRestore,this);
    seekerTimer.AttackA.t = this.game.time.events.add(3*Phaser.Timer.SECOND/seekersp,seekerTimer.AttackA.refresh, this);
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
