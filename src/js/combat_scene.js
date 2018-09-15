'use strict';

//seeker stats
var seekerhp = 100; //health
var seekerat = 2; //attack
var seekerdf = 2; //defense
var seekersp = 1; //speed

var seekerhptext; //health
var seekerattext; //attack
var seekerdftext; //defense
var seekersptext; //speed

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
    //render background
    var combatbackground = this.game.add.sprite(0,0, 'combatbackground');
    combatbackground.width = this.game.world.width;
    combatbackground.height = this.game.world.height;

    //render seeker
    var seeker = this.game.add.sprite(60,180, 'seeker');
    seeker.width = 200;
    seeker.height = 200;

    seekerhptext = this.game.add.bitmapText(60, 60, 'font',"HP: "+seekerhp,24);
    seekerattext = this.game.add.bitmapText(60, 80, 'font',"ATK: "+seekerat,24);
    seekerdftext = this.game.add.bitmapText(60, 100, 'font',"DEF: "+seekerdf,24);
    seekersptext = this.game.add.bitmapText(60, 120, 'font',"SPEED: "+seekersp,24);
    //render enemy
    var enemy = this.game.add.sprite(this.game.world.height - 100,180, 'enemy');
    enemy.width = 200;
    enemy.height = 200;

    enemyhptext = this.game.add.bitmapText(this.game.world.height - 60, 60, 'font',"HP: "+enemyhp,24);
    enemyattext = this.game.add.bitmapText(this.game.world.height -60, 80, 'font',"ATK: "+enemyat,24);
    enemydftext = this.game.add.bitmapText(this.game.world.height -60, 100, 'font',"DEF: "+enemydf,24);
    enemysptext = this.game.add.bitmapText(this.game.world.height -60, 120, 'font',"SPEED: "+enemysp,24);

    //render attack button
    attacktext = this.game.add.bitmapText(100, this.game.world.centerY+200, 'font',"A",44);

    attacktext.inputEnabled = true;
    
    attacktext.events.onInputOver.add(remark, this);
    attacktext.events.onInputOut.add(desmark, this);
    attacktext.events.onInputUp.add(desclick,this);
    attacktext.events.onInputDown.add(click,this);

    //render attack button
    blocktext = this.game.add.bitmapText(200, this.game.world.centerY+200, 'font',"B",44);

    blocktext.inputEnabled = true;
    
    blocktext.events.onInputOver.add(remarkB, this);
    blocktext.events.onInputOut.add(desmarkB, this);
    blocktext.events.onInputUp.add(desclickB,this);
    blocktext.events.onInputDown.add(clickB,this);

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
  enemyhp = enemyhp - seekerat;
  enemyhptext.text = "HP: " + enemyhp;
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
