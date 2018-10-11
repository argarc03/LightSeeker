'use strict';

class Character extends Phaser.Sprite{
    constructor(game, x, y, name, stats, spriteSheet) {
        super(game,x,y,spriteSheet)
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

    target(target) {
        this.target = target;
    }
    hurt(damage) {
        damage = this.isBlocking ? Math.max(0, damage - this.stats.defense) : damage;
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

    _damaged(damage) {

    }

    die() {
        this.animations.stop();
        this.onDeath.dispatch();
    }

    idle() {
        this.animations.stop();
        this.onRest.dispatch();
    }

    // Time information.
    get frameRate() {
        return this.stats.speed * 10;
    }
}

Phaser.GameObjectFactory.prototype.character = function (x, y, name, stats, spriteSheet, emitter, group) {
    if (group === undefined) { group = this.world; }
    return group.add( new Character(this.game, x, y, name, stats, spriteSheet, emitter));
}

class ActionFactory {
    constructor(character) {
        this.character = character;
    }

    idle(frames) {        
        this.character.onRest.dispatch();
        this.character.animations.add('idle', frames, true);
        this.character.idle = function () {this.play('idle', this.frameRate, true);};
    }

    attack(framesPreAttacking, framesAttacking) {
        this.character.animations.add('preAttacking', framesPreAttacking, true);
        this.character.animations.add('attacking', framesAttacking, true);
        this.character.attack = function (target = null) {
            this._preAttacking(target);
        };
        this.character._preAttacking = function (target) {
            this.animations.play('preAttacking', this.frameRate, false);
            this.animations._anims.preAttacking.onComplete.add(this._attacking, this, 0, target);
        };
        this.character._attacking = function () {
            
            this.animations.play('attacking', this.frameRate, false);
            if (arguments[2] !== null) {
                arguments[2].hurt(this.stats.damage);
            };
            this.animations._anims.attacking.onComplete.add(this.idle, this);
        };
        this.character.calculateTotalAttackTime = TimeCalculations.totalAttackTime;
        this.character.calculateCurrentAttackTime = TimeCalculations.currentAttackTime;
    }

    block(framesPreBlocking, framesBlocking, framesPostBlocking) {
        this.character.animations.add('preBlocking', framesPreBlocking, true);
        this.character.animations.add('blocking', framesBlocking, true);
        this.character.animations.add('postBlocking', framesPostBlocking, true);
        this.character.block = function() {
            this._preBlocking();
        };
        this.character._preBlocking = function() {
            this.animations.play('preBlocking', this.frameRate, false);
            this.animations._anims.preBlocking.onComplete.add(this._blocking, this);
        };
        this.character._blocking = function () {
            this.isBlocking = true;
            this.animations.play('blocking', this.frameRate, true);
            this.animations._anims.blocking.onLoop.add(this._loop, this);
            this.animations._anims.blocking.onComplete.add(this._postBlocking, this);
        };
        this.character._loop = function () {
            if (this.animations._anims.blocking.loopCount >= (this.frameRate / this.animations._anims.blocking.frameTotal))
                this.animations._anims.blocking.loop = false;
        }
        this.character._postBlocking = function () {
            this.isBlocking = false;
            this.animations.play('postBlocking', this.frameRate, false);
            this.animations._anims.postBlocking.onComplete.add(this.idle, this);
        }
        this.character.calculateTotalBlockTime = TimeCalculations.totalBlockTime;
        this.character.calculateCurrentBlockTime = TimeCalculations.currentBlockTime;
    }

    die(framesDying) {
        this.character.animations.add('dying', framesDying, true);
        this.character.die = function () {
            this.onDeath.dispatch();
            this.play('dying', this.frameRate, false);
        }
    }
}

class ParticleFactory {
    constructor(character){
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
        console.log(this.character.bleed);
        this.character._damaged = function(damage) { 

            let angle = this.game.rnd.angle();
            let radius = this.game.rnd.frac()*this.bleed.radius;
            this.bleed.emitX = radius*Math.sin(Math.PI/180*angle)+this.bleed.x;
            this.bleed.emitY = radius*Math.cos(Math.PI/180*angle)+this.bleed.y;
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

class TimeCalculations {
    totalAttackTime() {
        return (this.actions[action].framesPreAttacking.length + this.actions[action].framesAttacking.length) / this.frameRate;
    }
    currentAttackTime() {
        switch (this.sprite.animations.currentAnim.name) {
            case 'preAttacking':
                return (this.sprite.preAttacking.currentFrame.index - actions[action].framesPreAttacking[0]) / this.frameRate;
            case 'attacking':
                return (this.sprite.attacking.currentFrame.index - actions[action].framesAttacking[0] + actions[action].framesPreAttacking.length) / this.frameRate;
            default:
                return NaN;
        }
    }
    totalBlockTime() {
        return ((actions[action].framesPreBlocking.length + actions[action].framesPostBlocking.length)
            / this.frameRate) + Phaser.Timer.SECOND;
    }
    currentBlockTime() {
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

class Stats {
    constructor(damage, defense, speed, health) {
        this.damage = damage;
        this.defense = defense;
        this.speed = speed;
        this.health = health;
    }
}