/**
* @author       Carlos Durán Domínguez <carduran@ucm.es>
* @copyright    2018 Turing's Songs Studios© 
* @license      {}
*/

'use strict';


/**
 * A Character is an instance...
*/
class Character extends Phaser.Sprite {
    /**
     * 
     * @param {Phaser.Game} game - 
     * @param {number} x - 
     * @param {number} y -
     * @param {string} name -
     * @param {Stats} stats -
     * @param {string} spriteSheet -
    */
    constructor(game, x, y, name, stats, spriteSheet) {
        super(game, x, y, spriteSheet)
        this.name = name;
        this.stats = stats;
        this.hp = stats.health;
        this.game = game;
        this.isBlocking = false;
        //Signals 
        this.onHpChange = new Phaser.Signal();
        this.onRest = new Phaser.Signal();
        this.onDeath = new Phaser.Signal();
        //ref to Factories
        this.addAction = new ActionFactory(this);
        this.addParticle = new ParticleFactory(this);
    }
    /**
     * 
     * @param {number} damage -
     */
    hurt(damage) {
        damage = this.isBlocking ? this.stats.damagedNotBlocked(damage) : damage;
        this.game.camera.shake(damage / 200, damage * 20);
        this.hp = Math.max(0, this.hp - damage);
        this.onHpChange.dispatch();
        if (damage > 0) {
            this._damaged(damage);
        }
        if (this.hp === 0) {
            this.die();
        }
    }
    /**
     * 
     * @param {number} damage -
     */
    _damaged(damage) {

    }
    /**
     * 
     */
    die() {
        this.animations.stop();
        this.onDeath.dispatch();
    }
    /**
     * 
     */
    idle() {
        this.animations.stop();
        this.onRest.dispatch();
    }

    /**
     * 
     */
    get frameRate() {
        return this.stats.frameRate;
    }
}

/**
 * 
 */
Phaser.GameObjectFactory.prototype.character = function (x, y, name, stats, spriteSheet, emitter, group) {
    if (group === undefined) { group = this.world; }
    return group.add(new Character(this.game, x, y, name, stats, spriteSheet, emitter));
}
/**
 * 
 */
class Seeker extends Character {
    /**
     * 
     * @param {Phaser.Game} game - 
     * @param {number} x - 
     * @param {number} y -
     * @param {string} name -
     * @param {Stats} stats -
     * @param {string} spriteSheet -
    */
    constructor(game, x, y, name, stats, spriteSheet) {
        super(game, x, y, name, stats, spriteSheet);
        this.addAction = new SeekerActionFactory(this);
    }
}

Phaser.GameObjectFactory.prototype.seeker = function (x, y, name, stats, spriteSheet, emitter, group) {
    if (group === undefined) { group = this.world; }
    return group.add(new Seeker(this.game, x, y, name, stats, spriteSheet, emitter));
}

/**
 * 
 */
var Action = {
    /**
     * 
     */
    idle() {
        this.onRest.dispatch();
        this.play('idle', this.stats.frameRate, true);
    },
    /**
     * 
     * @param {Character} target 
     */
    attack(target) {
        this._preAttacking(target);
    },
    /**
     * 
     * @param {Character} target 
     */
    preAttacking(target) {
        this.animations.play('preAttacking', this.stats.frameRate, false);
        this.animations._anims.preAttacking.onComplete.add(this._attacking, this, 0, target);
    },
    /**
     * 
     * @param {Character} target 
     */
    attacking(target) {
        this.animations.play('attacking', this.stats.frameRate, false);
        if (arguments[2] !== null) {
            arguments[2].hurt(this.stats.realDamage);
        };
        this.animations._anims.attacking.onComplete.add(this.idle, this);
        
    },
    /**
     * 
     */
    block() {
        this._preBlocking();
    },
    /**
     * 
     */
    preBlocking() {
        this.animations.play('preBlocking', this.stats.frameRate, false);
        this.animations._anims.preBlocking.onComplete.add(this._blocking, this);
    },
    /**
     * 
     */
    blocking() {
        this.isBlocking = true;
        this.animations.play('blocking', this.stats.frameRate, true);
        this.animations._anims.blocking.onLoop.add(this._loop, this);
        this.animations._anims.blocking.onComplete.add(this._postBlocking, this);
    },
    /**
     * 
     */
    loop() {
        if (this.animations._anims.blocking.loopCount >= (this.stats.blockingTime / this.animations._anims.blocking._frames.length * this.stats.frameRate/Phaser.Timer.SECOND))
            this.animations._anims.blocking.loop = false;
    },
    /**
     * 
     */
    postBlocking() {
        this.isBlocking = false;
        this.animations.play('postBlocking', this.stats.frameRate, false);
        this.animations._anims.postBlocking.onComplete.add(this.idle, this);
    },
    /**
     * 
     */
    die() {
        this.onDeath.dispatch();
        this.animations.play('dying', this.frameRate, false);
    }
}

/**
 * 
 */
var CoolDown = {
    /**
     * 
     * @param {number} time 
     */
    addAllTime(time) {
        for (let timer in this.coolDown) {
            if (this.coolDown[timer].running) {
                this.coolDown[timer].events.forEach(event => {
                    event.tick += time;
                });
                this.coolDown[timer].nextTick += time;
            } else {
                TimerAlterations.newStart.apply(this,[timer]);
            }
        }
    },
    /**
     * 
     */
    addOnceStart(character,action) {
        for (event in this.addOnceStart.events) {
            this.add(CoolDown.toRealCoolDown(this.addOnceStart.events[event].time,character[action].totalTime()), this.addOnceStart.events[event], this)
        }
    },
    signalEmiter(event){
        
        if(this.coolDown[event].running){
            this.coolDown[event].while.dispatch();
            this.game.time.events.add(this.frameRate,CoolDown.signalEmiter,this, event);
        }
    },
    /**
     * 
     */
    stopAll() {

    },

    toRealCoolDown(animationTime, coolDown) {
        return Math.max(animationTime, coolDown);
    }
}

var TimerAlterations = {
    newStart (timer) {
        this.coolDown[timer].addOnceStart(this,timer);
        this.coolDown[timer].start();
    }
}


class ActionFactory {

    /**
     * 
     * @param {Character} character 
     */
    constructor(character) {
        this.character = character;
    }

    /**
     * 
     * @param {number[]|string[]} frames 
     */
    idle(frames) {
        this.character.animations.add('idle', frames, true);
        this.character.idle = Action.idle;
    }

    /**
     * 
     * @param {number[]|string[]} framesPreAttacking 
     * @param {number[]|string[]} framesAttacking 
     */
    attack(framesPreAttacking, framesAttacking) {
        this.character.attack = Action.attack;
        this.character.animations.add('preAttacking', framesPreAttacking, true);
        this.character.animations.add('attacking', framesAttacking, true);
        this.character._preAttacking = Action.preAttacking;
        this.character._attacking = Action.attacking;
        this.character.attack.totalTime = TimeCalculations.totalAttackTime;
        this.character.attack.currentTime = TimeCalculations.currentAttackTime;
    }

    /**
     * 
     * @param {number[]|string[]} framesPreBlocking 
     * @param {number[]|string[]} framesBlocking 
     * @param {number[]|string[]} framesPostBlocking 
     */
    block(framesPreBlocking, framesBlocking, framesPostBlocking) {
        this.character.animations.add('preBlocking', framesPreBlocking, true);
        this.character.animations.add('blocking', framesBlocking, true);
        this.character.animations.add('postBlocking', framesPostBlocking, true);
        this.character.block = Action.block;
        this.character._preBlocking = Action.preBlocking;
        this.character._blocking = Action.blocking;
        this.character._loop = Action.loop;
        this.character._postBlocking = Action.postBlocking;
        this.character.block.totalTime = TimeCalculations.totalBlockTime;
        this.character.currentTime = TimeCalculations.currentBlockTime;
    }

    /**
     * 
     * @param {number[]|string[]} framesDying 
     */
    die(framesDying) {
        this.character.animations.add('dying', framesDying, true);
        this.character.die = Action.die;
    }
}
//Hay que encender todos los timers al igual que apagarlos.
class SeekerActionFactory extends ActionFactory {
    constructor(character) {
        super(character);
        this.character.coolDown = {};
    }
    idle(frames) {
        super.idle(frames);
    }

    attack(framesPreAttacking, framesAttacking, globalCoolDown, selfCoolDown) {
        super.attack(framesPreAttacking, framesAttacking);

        this.character.coolDown.attack = this.character.game.time.create(false);
        this.character.coolDown.attack.while = new Phaser.Signal();
        this.character.coolDown.attack.addOnceStart = CoolDown.addOnceStart;
        this.character.coolDown.attack.addOnceStart.events = {};
        this.character.coolDown.attack.addOnceStart.events.end = this.character.coolDown.attack.stop;//function(){ this.stop(); };
        this.character.coolDown.attack.addOnceStart.events.end.time = selfCoolDown;
        this.character.coolDown.attack.global = globalCoolDown;

        this.character.attack = function (target) {
            if (!this.coolDown.attack.running) {
                Action.attack.apply(this, [target]);
                CoolDown.addAllTime.apply(this, [this.coolDown.attack.global]);

                CoolDown.signalEmiter.apply(this,['attack']);
            }
        }
        this.character.attack.currentTime = TimeCalculations.currentAttackTime.bind(this.character);
        this.character.attack.totalTime = TimeCalculations.totalAttackTime.bind(this.character);
        this.character.attack.timeToCoolDown = function(){
            //console.log(this.coolDown.attack);
            return this.coolDown.attack.events[0].tick-Date.now();
        }.bind(this.character);
        this.character.attack.coolDownTime = selfCoolDown;
    }

    block(framesPreBlocking, framesBlocking, framesPostBlocking, globalCoolDown, selfCoolDown) {
        super.block(framesPreBlocking, framesBlocking, framesPostBlocking);

        this.character.coolDown.block = this.character.game.time.create(false);
        this.character.coolDown.block.while = new Phaser.Signal();
        this.character.coolDown.block.addOnceStart = CoolDown.addOnceStart;
        this.character.coolDown.block.addOnceStart.events = {};
        this.character.coolDown.block.addOnceStart.events.end = this.character.coolDown.block.stop;//function(){ this.stop(); };
        this.character.coolDown.block.addOnceStart.events.end.time = selfCoolDown;
        this.character.coolDown.block.global = globalCoolDown;

        this.character.block = function () {
            if (!this.coolDown.block.running) {
                Action.block.apply(this);
                CoolDown.addAllTime.apply(this, [this.coolDown.block.global]);

                CoolDown.signalEmiter.apply(this,['block']);
            }

        }

        this.character.block.currentTime = TimeCalculations.currentBlockTime.bind(this.character);
        this.character.block.totalTime = TimeCalculations.totalBlockTime.bind(this.character);

        this.character.block.timeToCoolDown = function(){
            //console.log(this.coolDown.block);
            return this.coolDown.block.events[0].tick-Date.now();
        }.bind(this.character);
        this.character.block.coolDownTime = selfCoolDown;
    }

    die(framesDying) {
        super.die(framesDying);
    }
}

class ParticleFactory {
    constructor(character) {
        this.character = character;
    }

    blood(x = this.character.width / 2, y = this.character.width / 2, radius = 5, emittedBlood = 'redBlood') {

        this.character.bleed = this.character.game.add.emitter(this.character.x + x, this.character.y + y, 1000);
        this.character.bleed.makeParticles(emittedBlood);
        this.character.bleed.radius = radius;
        this.character.bleed.x = this.character.bleed.emitX;
        this.character.bleed.y = this.character.bleed.emitY;
        this.character.bleed.gravity = 200;
        this.character.bleed.minParticleScale = 1;
        this.character.bleed.maxParticleScale = 2;
        this.character.bleed.bounce = 0;
        this.character._damaged = function (damage) {

            let angle = this.game.rnd.angle();
            let radius = this.game.rnd.frac() * this.bleed.radius;
            this.bleed.emitX = radius * Math.sin(Math.PI / 180 * angle) + this.bleed.x;
            this.bleed.emitY = radius * Math.cos(Math.PI / 180 * angle) + this.bleed.y;
            this.bleed.flow(2000, 1, 20, damage * 10, true);

        };

    }

}

class Enemy extends Character {
    constructor() {
        super();
    }
}

class ActionPattern {
    constructor(pattern, seeker, thisCaracter) {
        this.nextAction = function () {
            var action = this.actions[pattern[this.doneActions]]
            this.doneActions = (this.doneActions) % pattern.length;
            return action;
        }
        this.doneActions = 0; //(number)
    }
    nextAction() {
        return null;
    }
}

var TimeCalculations = {
    totalAttackTime() {
        return (this.animations._anims.preAttacking._frames.length + this.animations._anims.attacking._frames.length) / this.stats.frameRate;
    },
    currentAttackTime() {
        switch (this.animations.currentAnim.name) {
            case 'preAttacking':
                return (this.animations._anims.preAttacking.currentFrame.index - this.animations._anims.preAttacking._frames[0]) / this.stats.frameRate;
            case 'attacking':
                return (this.animations._anims.attacking.currentFrame.index - this.animations._anims.attacking._frames[0] + this.animations._anims.preAttacking._frames.length) / this.stats.frameRate;
            default:
                return NaN;
        }
    },
    totalBlockTime() {
        return ((this.animations._anims.preBlocking._frames.length + this.animations._anims.postBlocking._frames.length)
            / this.stats.frameRate) + this.stats.blockingTime;
    },
    currentBlockTime() {
        switch (this.animations.currentAnim.name) {
            case 'preBlocking':
                return (this.animations._anims.preBlocking.currentFrame.index - this.animations._anims.preBlocking._frames[0]) / this.stats.frameRate;
            case 'blocking':
                return (this.animations._anims.preBlocking.currentFrame.index - this.animations._anims.blocking._frames[0] + this.animations._anims.blocking.loopCount * this.animations._anims.blocking._frames.length
                    + this.animations._anims.preBlocking._frames.length) / this.stats.frameRate;
            case 'postBlocking':
                return (this.animations._anims.preBlocking.currentFrame.index - this.animations._anims.postBlocking._frames[0] + this.stats.blockingTime +
                    this.animations._anims.preBlocking._frames.length) / this.stats.frameRate;
            default:
                return NaN;
        }
    }
}

class Stats {
    constructor(damage, defense, speed, health) {
        this._damage = damage;
        this.onDamageChange = new Phaser.Signal();
        this._defense = defense;
        this.onDefenseChange = new Phaser.Signal();
        this._speed = speed;
        this.onSpeedChange = new Phaser.Signal();
        this._health = health;
        this.onHealthChange = new Phaser.Signal();
    }

    // Stats to utilities
    damagedNotBlocked(damage) {
        return Math.max(0, damage - this.realBlock);
    }
    get frameRate() {
        return 10 * this.speed;
    }
    get realBlock() {
        return this.defense;
    }
    get realDamage() {
        return this.damage;
    }
    get blockingTime() {
        return Phaser.Timer.SECOND;
    }

    // Get/Set stats
    set damage(value){
        this.onDamageChange.dispatch();
        this._damage = value;
    }
    set defense(value){
        this.onDefenseChange.dispatch();
        this._defense = value;
    }
    set speed(value){
        this.onSpeedChange.dispatch();
        this._speed = value;
    }
    set health(value){
        this.onHealthChange.dispatch();
        this._health = value;
    }
    get damage(){
        return this._damage;
    }
    get defense(){
        return this._defense;
    }
    get speed(){
        return this._speed;
    }
    get health(){
        return this._health
    }
}