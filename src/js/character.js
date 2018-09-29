'use strict';


// ¿Cómo mandar buenos mensajes de error?
// ¿Cómo hacer que una función solo esté aquí?
// Aún se deben controlar los sonidos

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

        if(game instanceof Phaser.Game){
            this.game = game;
        } else {
            throw "game must be an instance of Game"
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
                    this.timeStartLastAttack=NaN;
                    this.attack = function (target) {
                        if (this.target != null) {
                            this.target = target;
                        }
                        this.timeStartLastAttack = this.game.time.totalElapsedSeconds();
                        this.preAttacking();
                    }
                    this.attacking = function () {
                        this.sprite.animations.play('attacking', this.frameRate, false);
                        if (this.target != null) {
                            this.target.hurt(this.stats.damage);
                        }
                        this.sprite.attacking.onComplete.add(this.idle, this);

                    }
                    this.preAttacking = function () {
                        this.sprite.animations.play('preAttacking', this.frameRate, false);
                        this.sprite.preAttacking.onComplete.add(this.attacking, this);
                    }

                    this.calculateTotalAttackTime = function () {
                        return (actions[action].framesPreAttacking.length+actions[action].framesAttacking.length)/this.frameRate;
                    }

                    this.calculateLastAttackTime = function () {
                        return this.game.time.totalElapsedSeconds()-this.timeStartLastAttack;
                    }

                    this.calculateCurrentAttackTime = function () {
                        if (this.sprite.animations.name === 'attacking'|| this.sprite.animations.name ==='preAttacking'){
                            return this.game.time.totalElapsedSeconds()-this.timeStartLastAttack;
                        } else{
                            return NaN;
                        }
                    }

                } else if (actions[action] instanceof Block) {
                    this.sprite.preBlocking = this.sprite.animations.add('preBlocking',actions[action].preBlocking, true);
                    this.sprite.blocking = this.sprite.animations.add('blocking',actions[action].blocking, true);
                    this.sprite.postBlocking = this.sprite.animations.add('postBlocking',actions[action].postBlocking, true);
                    
                    this.timeStartLastBlock=NaN;

                    this.block= function () {
                        this.timeStartLastBlock = this.game.time.totalElapsedSeconds();
                        this.preBlocking();
                    }
                    this.preBlocking = function () {
                        this.sprite.animations.play('preBlocking', this.frameRate, false);
                        this.sprite.preBlocking.onComplete.add(this.blocking, this);
                    }
                    this.blocking = function () {
                        this.blocking = true;
                        this.sprite.animations.play('blocking', this.frameRate, false);
                        if (this.target != null) {
                            this.target.hurt(this.stats.damage);
                        }
                        this.sprite.blocking.onComplete.add(this.idle, this);
                    }
                    this.postBlocking = function () {
                        this.blocking = false;
                        this.sprite.animations.play('postBlocking', this.frameRate, false);
                        this.sprite.preBlocking.onComplete.add(this.idle, this);
                    }

                    this.calculateTotalBlockTime = function () {
                        return (actions[action].framesPreBlocking.length+actions[action].framesBlocking.length+actions[action].framesPostBlocking.length)/this.frameRate;
                    }

                    this.calculateLastBlockTime = function () {
                        return this.game.time.totalElapsedSeconds()-this.timeStartLastBlock;
                    }

                    this.calculateCurrentBlockTime = function () {
                        if (this.sprite.animations.name === 'preBlocking'|| this.sprite.animations.name ==='blocking'|| this.sprite.animations.name ==='postPlocking'){
                            return this.game.time.totalElapsedSeconds()-this.timeStartLastBlock;
                        } else{
                            return NaN;
                        }
                    }
                } else {
                    throw "actions must be Array or Object of Actions";
                }
            }
        } else {
            throw "actions must be Array or Object";
        }

        if(emitter instanceof StatusEmitter){
            if(typeof(emitter.x) === 'number' && typeof(emitter.y) === 'number'){
                this.xEmitter = emitter.x;
                this.yEmitter = emitter.y;
            } else if(emitter.x === null && emitter.y === null) {
                this.xEmitter = this.sprite.width/2;
                this.yEmitter = this.sprite.height/2;
            } else {
                throw " x and y of emitter ";
            }
        } else {
            throw "emitter must be a StatusEmitter";
        }

        this.target;
        this.blocking = true;

    };



    target(target) {
        if(target instanceof Character){
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
        if(typeof(damage)==='number') {
            damage = this.blocking ? Math.max(0, Math.max(0, damage - this.stats.defense)) : damage;
            this.game.camera.shake((damage) / this.stats.health);
            this.hp = this.hp - damage;
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
    calculateLastAttackTime() {
        return NaN
    }
    calculateTotalBlockTime() {
        return NaN;
    }
    calculateCurrentBlockTime() {
        return NaN;
    }
    calculateLastBlockTime(){
        return NaN
    }

    get dead() {
        return this.hp === 0;
    }
    
    // Time information.
    get frameRate() {
        return this.stats.speed*10;
    }
    get totalAttackTime() {
        return calculateTotalAttackTime();
    }
    
    get currentAttackTime() {
        return calculateCurrentAttackTime();
    }

    get percentageTimeAttack() {
        return (this.calculateCurrentAttackTime()/this.calculateTotalAttackTime())*100.
    }
    get timeSinceLastAttack() {
        return calculateLastAttackTime();
    }
    
    get totalBlockTime() {
        return calculateTotalBlockTime();
    }
    
    get currentBlockTime() {
        return calculateCurrentBlockTime();
    }
    get timeSinceLastBlock() {
        return calculateLastBlockTime();
    }
}

// Esto no debe de ser global.
var isAnArrayOfType = function(type, array){
    if (array instanceof Array) {
        for(let element in array) {
            if(typeof(array[element]) !== type ){
                return false
            }
        }
    }
    return true;
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
            if(typeof(sound) !== 'string' && sound !== null)
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
        if (isAnArrayOfType('number',framesPreAttacking)) {
            this.framesPreAttacking = framesPreAttacking;
        } else {
            throw 'elements of framesPreAttacking must be number';
        }
        if (isAnArrayOfType('number', framesAttacking)) {
            this.framesAttacking = framesAttacking;
        } else {
            throw 'elements of framesAttacking must be number';
        }
        if(typeof(soundPreattacking) !== 'string' && soundPreattacking !== null)
                throw 'soundPreAttacking must be a string'
        this.soundPreattacking = soundPreattacking;
        if(typeof(soundAttacking) !== 'string' && soundAttacking !== null)
                throw 'soundAttacking must be a string'
        this.soundAttacking = soundAttacking;

    }
}

class Block extends Action {
    constructor(name, framesPreBlocking, framesBlocking, framesPostblocking, soundPreblocking, soundBlocking, soundPostblocking) {
        super(name);
        if (isAnArrayOfType('number',framesPreBlocking)) {
            this.framesPreBlocking = framesPreBlocking;
        } else {
            throw 'elements of framesPreBlocking must be number';
        }
        if (isAnArrayOfType('number',framesBlocking)) {
            this.framesBlocking = framesBlocking;
        } else {
            throw 'elements of framesBlocking must be number';
        }
        if (isAnArrayOfType('number',framesPostBlocking)) {
            this.framesPostBlocking = framesPostBlocking;
        } else {
            throw 'elements of framesPostBlocking must be number';
        }
        if(typeof(soundPreblocking) !== 'string' && soundPreblocking !== null)
                throw 'soundPreblocking must be a string'
        this.soundPreblocking = soundPreblocking;
        if(typeof(soundBlocking) !== 'string' && soundBlocking !== null)
                throw 'soundBlocking must be a string'
        this.soundBlocking = soundBlocking;
        if(typeof(soundPostblocking) !== 'string' && soundPostblocking !== null)
                throw 'soundPostblocking must be a string'
        this.soundPostblocking = soundPostblocking;

    }
}

class Stats {
    constructor(damage, defense, speed, vitality) {

        if (typeof (damage) === 'number' && typeof (defense) === 'number'
            && typeof (speed) === 'number' && typeof (vitality) === 'number') {
            this.damage = damage;
            this.defense = defense;
            this.speed = speed;
            this.vitality = vitality;
        } else {
            throw "The fields in constructor must be number.";
        }


    }
}

class StatusEmitter {
    constructor() {
        switch(arguments.length){
            case 3:
                if(typeof(arguments[0])==='string') {
                    this.blood = arguments[0];
                } else {
                    throw "blood argument must be string";
                }
                if(typeof(arguments[1])==='number') {
                    this.x = arguments[1];
                } else {
                    throw "xEmitter argument must be number";
                }
                if(typeof(arguments[2])==='number') {
                    this.y = arguments[2];
                } else {
                    throw "yEmitter argument must be number";
                }
            break;
            case 2:
                this.blood = 'blood';
                if(typeof(arguments[1])==='number') {
                    this.x = arguments[1];
                } else {
                    throw "xEmitter argument must be number";
                }
                if(typeof(arguments[2])==='number') {
                    this.y = arguments[2];
                } else {
                    throw "yEmitter argument must be number";
                }
            break;
            case 1:
                if(typeof(arguments[0])==='string') {
                    this.blood = arguments[0];
                } else {
                    throw "blood argument must be string";
                }
                this.x = null;
                this.y = null;

            break;
            case 0:
                this.blood = 'blood';
                this.x = null;
                this.y = null;
            break;
            default:
                throw "Invalid number of arguments(<blood>, <xEmitter>, <yEmitter>)"
            break;
        }
    }
}