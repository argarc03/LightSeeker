'use strict';


// ¿Hay que hacer un constructor que "reserve memoria" para las acciones y así poder asignar más tarde las funciones?

class Character {
    constructor(x,y,name, damage, defense, speed, vitality, spriteSheet, game, actions){

        this.name = name;
        this.stats = new Stats(damage, defense, speed, vitality);
        this.hp = vitality;
        this.animationManager = game.add.sprite(x, y, spriteSheet);
        this.actions = [];
        
        for(let i =0; i<actions.length; i++){
            game.sound.add(actions[i].name,actions[i].volume, actions[i].loop);
            this.animationManager.animations.add(actions[i].name, actions[i].frames, true);
            var that = this;
            this.actions[actions[i].name] = function(object=undefined) {
                that.animationManager.animations.play(actions[i].name, actions[i].speed, actions[i].loop);
                //game.sound.play(actions[i].name, actions[i].loop);
                console.log(actions[i]);
                if(actions[i].postAction!=null) {
                    game.time.events.add(3*Phaser.Timer.SECOND/speed,actions[i].postAction, this);
                }
                return actions[i].play(object);
            };  
        }
        
        };
        hurt(damage) { 
            this.hp = Math.max(0,this.hp-damage);
        };
        get dead() { 
            return this.hp === 0; 
    }
}
//¿Cómo hacer que a un campo relacionado con una función al cambiar la función reaccione?
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