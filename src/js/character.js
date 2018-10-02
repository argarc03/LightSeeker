'use strict';

class Character {
    constructor(game, x, y, name, stats, spriteSheet, actions, emitter = new StatusEmitter()) {
        this.name = name;
        this.stats = stats;
        this.hp = stats.health;
        this.sprite = game.add.sprite(x, y, spriteSheet);
        this.actions = actions;
        this.game = game;
        for (let action in actions) {
            if (actions[action] instanceof Idle) {
                this.sprite.idle = this.sprite.animations.add('idle', actions[action].framesIdle, true);
                this.idle = Action.idle.bind(this);
            } else if (actions[action] instanceof Attack) {
                this.sprite.preAttacking = this.sprite.animations.add('preAttacking', actions[action].framesPreAttacking, true);
                this.sprite.attacking = this.sprite.animations.add('attacking', actions[action].framesAttacking, true);
                this.attack = Action.attack.bind(this);
                this.attacking = Action.attacking.bind(this);
                this.preAttacking = Action.preAttacking.bind(this);
                this.calculateTotalAttackTime = TimeCalculations.totalAttackTime.bind(this);
                this.calculateCurrentAttackTime = TimeCalculations.currentAttackTime.bind(this);
            } else if (actions[action] instanceof Block) {
                this.sprite.preBlocking = this.sprite.animations.add('preBlocking', actions[action].framesPreBlocking, true);
                this.sprite.blocking = this.sprite.animations.add('blocking', actions[action].framesBlocking, true);
                this.sprite.postBlocking = this.sprite.animations.add('postBlocking', actions[action].framesPostBlocking, true);
                this.block = Action.block.bind(this);
                this.preBlocking = Action.preBlocking.bind(this); 
                this.blocking = Action.blocking.bind(this);
                this.loop = Action.loop.bind(this);
                this.postBlocking = Action.postBlocking.bind(this);
                this.calculateTotalBlockTime = TimeCalculations.totalBlockTime.bind(this); 
                this.calculateCurrentBlockTime = TimeCalculations.currentBlockTime.bind(this);
            } else if (actions[action] instanceof Die) {
                this.sprite.die = this.sprite.animations.add('dying', actions[action].framesDying, true);
                this.die = function () {
                    this.sprite.play('dying', this.frameRate, false);
                }
            }
        }
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
        this.target;
        this.isBlocking = false;
        //Signals 
        this.onHpChange = new Phaser.Signal();
    };
    target(target) {
        this.target = target;
    }
    hurt(damage) {
        damage = this.isBlocking ? Math.max(0, damage - this.stats.defense) : damage;
        this.game.camera.shake(damage / 200, damage * 20);
        this.hp = Math.max(0, this.hp - damage);
        this.onHpChange.dispatch();
        if (damage > 0) {
            this.bleed.flow(2000, 1, 20, damage * 10, true);
        }
        if (this.hp === 0) {
            this.die();
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

class TimeCalculations{
    static totalAttackTime() {
        return (this.actions[action].framesPreAttacking.length + this.actions[action].framesAttacking.length) / this.frameRate;
    }
    static currentAttackTime() {
        switch (this.sprite.animations.currentAnim.name) {
            case 'preAttacking':
                return (this.sprite.preAttacking.currentFrame.index - actions[action].framesPreAttacking[0]) / this.frameRate;
            case 'attacking':
                return (this.sprite.attacking.currentFrame.index - actions[action].framesAttacking[0] + actions[action].framesPreAttacking.length) / this.frameRate;
            default:
                return NaN;
        }
    }
    static totalBlockTime() {
        return ((actions[action].framesPreBlocking.length + actions[action].framesPostBlocking.length)
            / this.frameRate) + Phaser.Timer.SECOND;
    }
    static currentBlockTime() {
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
}

class Action {
    constructor(name) {
        this.name = name;
    }
    static idle() {
        this.sprite.play('idle', this.frameRate, true);
    }
    static attack(target = null) {
        if (target instanceof Character) {
            this.target = target;
        } else if (target === null) {
            this.target = null;
        }
        this.preAttacking();
    }
    static preAttacking() {
        this.sprite.animations.play('preAttacking', this.frameRate, false);
        this.sprite.preAttacking.onComplete.add(this.attacking, this);
    }
    static attacking() {
        this.sprite.animations.play('attacking', this.frameRate, false);
        if (this.target !== null) {
            this.target.hurt(this.stats.damage);
        };
    }
    static block(){
        this.timeStartLastBlock = this.game.time.totalElapsedSeconds();
        this.preBlocking();
    }
    static preBlocking() {
        this.sprite.animations.play('preBlocking', this.frameRate, false);
        this.sprite.preBlocking.onComplete.add(this.blocking, this);
    }
    static blocking() {
        this.isBlocking = true;
        this.sprite.animations.play('blocking', this.frameRate, true);
        this.sprite.blocking.onLoop.add(this.loop, this);
        this.sprite.blocking.onComplete.add(this.postBlocking, this);
    }
    static loop() {
        if (this.sprite.blocking.loopCount >= (this.frameRate / this.sprite.blocking.frameTotal))
            this.sprite.blocking.loop = false;
    }
    static postBlocking() {
        this.isBlocking = false;
        this.sprite.animations.play('postBlocking', this.frameRate, false);
        this.sprite.postBlocking.onComplete.add(this.idle, this);
    }
}

class Idle extends Action {
    constructor(name, framesIdle, sound = null) {
        super(name);
        this.framesIdle = framesIdle;
        this.sound = sound;
    }
}

class Attack extends Action {
    constructor(name, framesPreAttacking, framesAttacking, soundPreattacking, soundAttacking) {
        super(name);
        this.framesPreAttacking = framesPreAttacking;
        this.framesAttacking = framesAttacking;
        this.soundPreattacking = soundPreattacking;
        this.soundAttacking = soundAttacking;
    }
}

class Block extends Action {
    constructor(name, framesPreBlocking, framesBlocking, framesPostBlocking, soundPreBlocking, soundBlocking, soundPostBlocking) {
        super(name);
        this.framesPreBlocking = framesPreBlocking;
        this.framesBlocking = framesBlocking;
        this.framesPostBlocking = framesPostBlocking;
        this.soundPreblocking = soundPreBlocking;
        this.soundBlocking = soundBlocking;
        this.soundPostblocking = soundPostBlocking;
    }
}

class Die extends Action {
    constructor(name, framesDying, soundDying) {
        super(name);
        this.framesDying = framesDying;
        this.soundDying = soundDying;
    }
}

class Stats {
    constructor(damage, defense, speed, health) {
        this.damage = damage;
        this.defense = defense;
        this.speed = speed;
        this.health = health;
    }
}

class StatusEmitter {
    constructor() {
        this.blood = 'redBlood';
        this.x = null;
        this.y = null;
        switch (arguments.length) {
            case 3:
                this.blood = arguments[0];
                this.x = arguments[1];
                this.y = arguments[2];
                break;
            case 2:
                this.blood = 'redBlood';
                this.x = arguments[1];
                this.y = arguments[2];
                break;
            case 1:
                this.blood = arguments[0];
                this.x = null;
                this.y = null;
                break;
        }
    }
}