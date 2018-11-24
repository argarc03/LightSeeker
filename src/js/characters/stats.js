'use strict'

var Stats = function (damage, defense, speed, health, perception) {
    this._damage = damage;
    this.onDamageChange = new Phaser.Signal();
    this._defense = defense;
    this.onDefenseChange = new Phaser.Signal();
    this._speed = speed;
    this.onSpeedChange = new Phaser.Signal();
    this._health = health;
    this.onHealthChange = new Phaser.Signal();
    this._perception = perception;
    this.onPerceptionChange = new Phaser.Signal();
}

Stats.prototype.damagedNotBlocked = function(damage) {
    return Math.max(0, damage - this.realBlock);
}

Object.defineProperty(Stats.prototype, 'frameRate',{
    get: function() {
        return 10 * this.speed;
    }
});

Object.defineProperty(Stats.prototype, 'realBlock',{
    get: function() {
        return this.defense;
    }
});

Object.defineProperty(Stats.prototype, 'realDamage',{
    get: function() {
        return this.damage;
    }
});

Object.defineProperty(Stats.prototype, 'blockingTime',{
    get: function() {
        return Phaser.Timer.SECOND;
    }
});

Object.defineProperty(Stats.prototype, 'damage',{
    get: function() {
        return this._damage;
    },
    set: function(value) {
        this._damage = value;
        this.onDamageChange.dispatch();
    }
});

Object.defineProperty(Stats.prototype, 'defense',{
    get: function() {
        return this._defense;
    },
    set: function(value) {
        this._defense = value;
        this.onDefenseChange.dispatch();
    }
});

Object.defineProperty(Stats.prototype, 'speed',{
    get: function() {
        return this._speed;
    },
    set: function(value) {
        this._speed = value;
        this.onSpeedChange.dispatch();
    }
});

Object.defineProperty(Stats.prototype, 'health',{
    get: function() {
        return this._health
    },
    set: function(value) {
        this._health = value;
        this.onHealthChange.dispatch();
    }
});

Object.defineProperty(Stats.prototype, 'maxHp',{
    get: function() {
        return this._health
    }
});

Object.defineProperty(Stats.prototype, 'perception',{
    get: function() {
        return this._perception
    },
    set: function(value) {
        this._perception = value;
        this.onPerceptionChange.dispatch();
    }
});

module.exports = Stats;