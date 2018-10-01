'use strict';

class Character {
    constructor(x, y, name, damage, defense, speed, health, spriteSheet, game,
        actions, emitter = new StatusEmitter()) {

        if (typeof (name) === 'string') {
            this.name = name;
        } else {
            throw "The field name in constructor must be String.";
        }
        this.stats = new Stats(damage, defense, speed, health);
        this.hp = health;

        this.sprite = game.add.sprite(x, y, spriteSheet);
        this.actions = actions;

        if (game instanceof Phaser.Game) {
            this.game = game;
        } else {
            throw "game must be an instance of Game";
        }

        if (actions instanceof Array || actions instanceof Object) {
            for (let action in actions) {
                if (actions[action] instanceof Idle) {
                    this.sprite.idle = this.sprite.animations.add('idle', actions[action].framesIdle, true);
                    this.idle = function () {
                        this.sprite.play('idle', this.frameRate, true);
                    }
                } else if (actions[action] instanceof Attack) {
                    this.sprite.preAttacking = this.sprite.animations.add('preAttacking', actions[action].framesPreAttacking, true);
                    this.sprite.attacking = this.sprite.animations.add('attacking', actions[action].framesAttacking, true);
                    
                    this.attack = function (target = null) {
                        if (target instanceof Character) {
                            this.target = target;
                        } else if (target === null) {
                            this.target = null;
                        } else {
                            throw "target must be Character"
                        }
                        this.preAttacking();
                    }
                    this.attacking = function () {
                        this.sprite.animations.play('attacking', this.frameRate, false);
                        if (this.target !== null) {
                            this.target.hurt(this.stats.damage);
                        }
                        this.sprite.attacking.onComplete.add(this.idle, this);

                    }
                    this.preAttacking = function () {
                        this.sprite.animations.play('preAttacking', this.frameRate, false);
                        this.sprite.preAttacking.onComplete.add(this.attacking, this);
                    }

                    this.calculateTotalAttackTime = function () {
                        return (actions[action].framesPreAttacking.length + actions[action].framesAttacking.length) / this.frameRate;
                    }

                    this.calculateCurrentAttackTime = function () {
                        switch (this.sprite.animations.currentAnim.name) {
                            case 'preAttacking':
                                return (this.sprite.preAttacking.currentFrame.index - actions[action].framesPreAttacking[0]) / this.frameRate;
                            case 'attacking':
                                return (this.sprite.attacking.currentFrame.index - actions[action].framesAttacking[0] + actions[action].framesPreAttacking.length) / this.frameRate;
                            default:
                                return NaN;
                        }
                    }

                } else if (actions[action] instanceof Block) {
                    this.sprite.preBlocking = this.sprite.animations.add('preBlocking', actions[action].framesPreBlocking, true);
                    this.sprite.blocking = this.sprite.animations.add('blocking', actions[action].framesBlocking, true);
                    this.sprite.postBlocking = this.sprite.animations.add('postBlocking', actions[action].framesPostBlocking, true);

                    this.timeStartLastBlock = NaN;

                    this.block = function () {
                        this.timeStartLastBlock = this.game.time.totalElapsedSeconds();
                        this.preBlocking();
                    }
                    this.preBlocking = function () {
                        this.sprite.animations.play('preBlocking', this.frameRate, false);
                        this.sprite.preBlocking.onComplete.add(this.blocking, this);
                    }
                    this.blocking = function () {
                        this.isBlocking = true;
                        this.sprite.animations.play('blocking', this.frameRate, true);
                        this.sprite.blocking.onLoop.add(this.loop, this);

                        this.sprite.blocking.onComplete.add(this.postBlocking, this);
                    }
                    this.loop = function () {
                        if (this.sprite.blocking.loopCount >= (this.frameRate / this.sprite.blocking.frameTotal))
                            this.sprite.blocking.loop = false;
                    }
                    this.postBlocking = function () {
                        this.isBlocking = false;
                        this.sprite.animations.play('postBlocking', this.frameRate, false);
                        this.sprite.postBlocking.onComplete.add(this.idle, this);
                    }

                    this.calculateTotalBlockTime = function () {
                        return ((actions[action].framesPreBlocking.length + actions[action].framesPostBlocking.length)
                            / this.frameRate) + Phaser.Timer.SECOND;
                    }

                    this.calculateCurrentBlockTime = function () {

                        switch (this.sprite.animations.currentAnim.name) {
                            case 'preBlocking':
                                return (this.sprite.preBlocking.currentFrame.index - actions[action].framesPreBlocking[0]) / this.frameRate;
                            case 'blocking':
                                return (this.sprite.blocking.currentFrame.index - actions[action].framesBlocking[0] + this.sprite.blocking.loopCount * actions[action].framesBlocking.length
                                    + actions[action].framesPreBlocking.length) / this.frameRate;
                            case 'postBlocking':
                                return (this.sprite.postBlocking.currentFrame.index - actions[action].framesPostBlocking[0] + this.frameRate +
                                    actions[action].framesPreBlocking.length) / this.frameRate;
                            default:
                                return NaN;
                        }
                    }
                } else if (actions[action] instanceof Die) {
                    this.sprite.die = this.sprite.animations.add('dying', actions[action].framesDying, true);
                    this.die = function () {
                        this.sprite.play('dying', this.frameRate, false);
                    }
                } else {
                    throw "actions must be Array or Object of Actions";
                }
            }
        } else {
            throw "actions must be Array or Object";
        }

        if (emitter instanceof StatusEmitter) {
            if (typeof (emitter.x) === 'number' && typeof (emitter.y) === 'number') {
                this.xEmitter = emitter.x;
                this.yEmitter = emitter.y;
            } else if (emitter.x === null && emitter.y === null) {
                this.xEmitter = this.sprite.width / 2;
                this.yEmitter = this.sprite.height / 2;
            }
            this.bleed = this.game.add.emitter(x + this.xEmitter, y + this.yEmitter, 1000);
            this.bleed.makeParticles(emitter.blood);
            this.bleed.gravity = 200;
            this.bleed.minParticleScale = 1;
            this.bleed.maxParticleScale = 2;
            this.bleed.bounce = 0;
        } else {
            throw "emitter must be a StatusEmitter";
        }

        this.target;
        this.isBlocking = false;

        //Signals 
        this.onHpChange = new Phaser.Signal();

    };    

    die(){

    }

    target(target) {
        if (target instanceof Character) {
            this.target = target;
        } else {
            throw "target must be an instance of Character";
        }
    }

    attack(target) {

    }

    preAttacking() {

    }

    attacking() {

    }

    block() {

    }

    preBlocking() {

    }

    blocking() {

    }
    postBlocking() {

    }

    idle() {
        //this.sprite.play('idle',10,true);
    }

    hurt(damage) {
        if (typeof (damage) === 'number') {
            damage = this.isBlocking ? Math.max(0, damage - this.stats.defense) : damage;
            this.game.camera.shake(damage / 200, damage * 20);
            
            this.hp = Math.max(0, this.hp - damage);
            this.onHpChange.dispatch();
            if (damage > 0)
                this.bleed.flow(2000, 1, 20, damage * 10, true);


            if (this.hp === 0) {
                this.die();
            }

        } else {
            throw "damage must be number";
        }
    }

    // Time calculations
    calculateTotalAttackTime() {
        return NaN;
    }
    calculateCurrentAttackTime() {
        return NaN;
    }
    calculateTotalBlockTime() {
        return NaN;
    }
    calculateCurrentBlockTime() {
        return NaN;
    }

    get dead() {
        return this.hp === 0;
    }

    // Time information.
    get frameRate() {
        return this.stats.speed * 10;
    }
    get totalAttackTime() {
        return calculateTotalAttackTime();
    }

    get currentAttackTime() {
        return calculateCurrentAttackTime();
    }

    get percentageTimeAttack() {
        return (this.calculateCurrentAttackTime() / this.calculateTotalAttackTime()) * 100;
    }

    get totalBlockTime() {
        return calculateTotalBlockTime();
    }

    get currentBlockTime() {
        return calculateCurrentBlockTime();
    }

    get percentageTimeBlock() {
        return (this.calculateCurrentBlockTime() / this.calculateTotalBlockTime()) * 100;
    }
}

// Esto no debe de ser global.
var isAnArrayOfType = function (type, array) {
    if (array instanceof Array) {
        for (let element in array) {
            if (typeof (array[element]) !== type) {
                return false
            }
        }
    }
    return true;
}

class Enemy extends Character {
    constructor(){
        super();

    }
}

class ActionPattern {
    constructor(pattern, seeker, thisCaracter){
        if(isAnArrayOfType('string',pattern)) {
            this.nextAction = function () {
                var action = this.actions[pattern[this.doneActions]]
                this.doneActions=(this.doneActions)%pattern.length;
                return action;
            }
        }
        this.doneActions=0; //(number)
    }
    nextAction() {
        return null;
    }

}

class Action {
    constructor(name) {
        if (typeof (name) === 'string') {
            this.name = name;
        } else {
            throw 'name must be string';
        }
    }
}

class Idle extends Action {
    constructor(name, framesIdle, sound = null) {
        super(name);
        if (isAnArrayOfType('number', framesIdle)) {
            this.framesIdle = framesIdle;
            if (typeof (sound) !== 'string' && sound !== null)
                throw 'sound must be a string'
            this.sound = sound;
        } else {
            throw 'framesIdle must be Array';
        }
    }
}

class Attack extends Action {
    constructor(name, framesPreAttacking, framesAttacking, soundPreattacking, soundAttacking) {
        super(name);
        if (isAnArrayOfType('number', framesPreAttacking)) {
            this.framesPreAttacking = framesPreAttacking;
        } else {
            throw 'elements of framesPreAttacking must be number';
        }
        if (isAnArrayOfType('number', framesAttacking)) {
            this.framesAttacking = framesAttacking;
        } else {
            throw 'elements of framesAttacking must be number';
        }
        if (typeof (soundPreattacking) !== 'string' && soundPreattacking !== null)
            throw 'soundPreAttacking must be a string'
        this.soundPreattacking = soundPreattacking;
        if (typeof (soundAttacking) !== 'string' && soundAttacking !== null)
            throw 'soundAttacking must be a string'
        this.soundAttacking = soundAttacking;

    }
}

class Block extends Action {
    constructor(name, framesPreBlocking, framesBlocking, framesPostBlocking, soundPreBlocking, soundBlocking, soundPostBlocking) {
        super(name);
        if (isAnArrayOfType('number', framesPreBlocking)) {
            this.framesPreBlocking = framesPreBlocking;
        } else {
            throw 'elements of framesPreBlocking must be number';
        }
        if (isAnArrayOfType('number', framesBlocking)) {
            this.framesBlocking = framesBlocking;
        } else {
            throw 'elements of framesBlocking must be number';
        }
        if (isAnArrayOfType('number', framesPostBlocking)) {
            this.framesPostBlocking = framesPostBlocking;
        } else {
            throw 'elements of framesPostBlocking must be number';
        }
        if (typeof (soundPreBlocking) !== 'string' && soundPreBlocking !== null)
            throw 'soundPreblocking must be a string'
        this.soundPreblocking = soundPreBlocking;
        if (typeof (soundBlocking) !== 'string' && soundBlocking !== null)
            throw 'soundBlocking must be a string'
        this.soundBlocking = soundBlocking;
        if (typeof (soundPostBlocking) !== 'string' && soundPostBlocking !== null)
            throw 'soundPostblocking must be a string'
        this.soundPostblocking = soundPostBlocking;

    }
}

class Die extends Action {
    constructor(name, framesDying, soundDying) {
        super(name);
        if (isAnArrayOfType('number', framesDying)) {
            this.framesDying = framesDying;
        } else {
            throw 'elements of framesDying must be number';
        }
        if (typeof (soundDying) !== 'string' && soundDying !== null)
            throw 'soundPreblocking must be a string'
        this.soundDying = soundDying;
    }
}

class Stats {
    constructor(damage, defense, speed, health) {

        if (typeof (damage) === 'number' && typeof (defense) === 'number'
            && typeof (speed) === 'number' && typeof (health) === 'number') {
            this.damage = damage;
            this.defense = defense;
            this.speed = speed;
            this.health = health;
        } else {
            throw "The fields in constructor must be number.";
        }


    }
}

class StatusEmitter {
    constructor() {
        switch (arguments.length) {
            case 3:
                if (typeof (arguments[0]) === 'string') {
                    this.blood = arguments[0];
                } else {
                    throw "blood argument must be string";
                }
                if (typeof (arguments[1]) === 'number') {
                    this.x = arguments[1];
                } else {
                    throw "xEmitter argument must be number";
                }
                if (typeof (arguments[2]) === 'number') {
                    this.y = arguments[2];
                } else {
                    throw "yEmitter argument must be number";
                }
                break;
            case 2:
                this.blood = 'redBlood';
                if (typeof (arguments[1]) === 'number') {
                    this.x = arguments[1];
                } else {
                    throw "xEmitter argument must be number";
                }
                if (typeof (arguments[2]) === 'number') {
                    this.y = arguments[2];
                } else {
                    throw "yEmitter argument must be number";
                }
                break;
            case 1:
                if (typeof (arguments[0]) === 'string') {
                    this.blood = arguments[0];
                } else {
                    throw "blood argument must be string";
                }
                this.x = null;
                this.y = null;

                break;
            case 0:
                this.blood = 'redBlood';
                this.x = null;
                this.y = null;
                break;
            default:
                throw "Invalid number of arguments(<blood>, <xEmitter>, <yEmitter>)"
                break;
        }
    }
}