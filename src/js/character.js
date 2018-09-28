'use strict';


// ¿Hay que hacer un constructor que "reserve memoria" para las acciones y así poder asignar más tarde las funciones?

class Character {
    constructor(x,y,name, damage, defense, speed, health, spriteSheet,game, actions){

        this.name = name;
        this.stats = new Stats(damage, defense, speed, health);
        this.hp = health;
        this.sprite = game.add.sprite(x, y, spriteSheet);

        this.sprite.idle = this.sprite.animations.add('idle',[0,1,2,3,4,5,6,7,8,9],true);
        this.sprite.preattacking = this.sprite.animations.add('preattacking',[17,18,19,20,21,22,23,24],true);
        
        this.sprite.attacking = this.sprite.animations.add('attacking',[25,26,27,28,29,30,31,32,33],true);
        

        this.target
        this.actions;
        this.blocking;
        
        };

        // A futuro mirar opcion de cambiar objetivo
        attack(target){ 
            this.target = target;
            this.preattacking();
        };

        preattacking(){
            this.sprite.animations.play('preattacking', 10, false); 
            this.sprite.preattacking.onComplete.add(this.attacking,this);
        }

        attacking(){
            this.sprite.animations.play('attacking', 10, false);
            //this.target.hurt(this.stats.damage);
            this.sprite.attacking.onComplete.add(this.idle,this);
        }

        block(){
            
        }

        preblocking(){
            
        }

        blocking(){

        }
        postblocking(){

        }
        
        idle(){
            this.sprite.play('idle',10,true);
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