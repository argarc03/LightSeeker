'use strict';

//Sprites seeker


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
    var combatbackground = this.game.add.sprite(0,0, 'combatbackground');

    
    seekerhptext = this.game.add.bitmapText(0, 12, 'font',"HP: "+seekerhp,12);
    seekerattext = this.game.add.bitmapText(0, 0, 'font',seekerat,12);
    seekerdftext = this.game.add.bitmapText(12, 0, 'font',seekerdf,12);
    seekersptext = this.game.add.bitmapText(24, 0, 'font',seekersp,12);
    //render enemy
    //var enemy = this.game.add.sprite(this.game.world.height,0, 'enemy');

    //render test enemy (80x120) -> (this.game.world.width-80,-10)
    var test = this.game.add.sprite(this.game.world.width-80,-10, 'spider');
    
    //render seeker
    
    var seeker = this.game.add.sprite(0,-10,'seeker');

    var idle = seeker.animations.add('idle');

    seeker.animations.play('idle',10 ,true);

    enemyhptext = this.game.add.bitmapText(this.game.world.width-0, 12, 'font',"HP: "+enemyhp,12);
    enemyattext = this.game.add.bitmapText(this.game.world.width-0, 0, 'font',enemyat,12);
    enemydftext = this.game.add.bitmapText(this.game.world.width-12, 0, 'font',enemydf,12);
    enemysptext = this.game.add.bitmapText(this.game.world.width-24, 0, 'font',enemysp,12);

    //render attack button
    attacktext = this.game.add.bitmapText(0, this.game.world.height-24, 'font',"A",24);

    attacktext.inputEnabled = true;
    
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
