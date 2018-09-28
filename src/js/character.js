'use strict';


// ¿Hay que hacer un constructor que "reserve memoria" para las acciones y así poder asignar más tarde las funciones?

class Character {
    constructor(x,y,name, damage, defense, speed, health, spriteSheet, game, actions){

        this.name = name;
        this.stats = new Stats(damage, defense, speed, health);
        this.hp = health;
        this.animationManager = game.add.sprite(x, y, spriteSheet);
        this.actions;
        this.blocking;
        
        };

        attack(target){ 
            target.hurt(this.stats.damage);
        };

        block(){
            this.blocking = true;
        }

        desblock(){
            this.blocking = false;
        }
        

        hurt(damage) { 
            if(this.blocking){
                this.hp = Math.max(0,this.hp-Math.max(0,damage-this.stats.defense));

            }else{
                this.hp = Math.max(0,this.hp-damage);
            }
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