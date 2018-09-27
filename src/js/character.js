'use strict';

class Character {
    constructor(x,y,name, damage, defense, speed, vitality, spriteSheet, game, action){

        this.name = name;
        this.stats = new Stats(damage, defense, speed, vitality);
        this.hp = vitality;
        this.animationManager = game.add.sprite(x, y, spriteSheet);
        this.soundManager = new Phaser.SoundManager(game);
        this.actions = [];
        
        for(var i =0; i<action.length; i++){
            console.log(i+'aahhhhhh');
            this.soundManager.add(action[i].name,action[i].volume, action[i].loop);
            this.animationManager.animations.add(action[i].name, action[i].frames, true);
            this.actions[action[i].name] = function() {
                this.animationManager.animations.play(action[i].name, action[i].speed, action[i].loop);
                this.soundManager.play(action[i].name, action[i].loop);
                if(action[i].postAction!=null) {
                    this.game.time.events.add(3*Phaser.Timer.SECOND/speed,action[i].postAction, this);
                }
                return action[i].play();
            };  
        }
        this.damaged = function(damage) { this.hp = this.hp-damage;};
        this.isDead = function() { return this.hp == 0; };
    }
}

class Action {
    constructor(name, volume, loop, frames, speed ,play, postAction = null)  {
        this.name = name;
        this.volume = volume;
        this.loop = loop;
        this.frames = frames;
        this.speed = speed;
        this.play = play;
        this.postAction = postAction;
    }
}

class Stats {
    constructor(damage, defense, speed, vitality){
        this.damage = damage;
        this.defense = defense;
        this.speed = speed;
        this.vitality = vitality;
    }
}

class Seeker extends Character {
    constructor(name, damage, defense, speed, vitality){
    }
}