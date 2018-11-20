'use strict'
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
    },
    /**
     * 
     */
    loop() {
        if (this.animations._anims.blocking.loopCount >= (this.stats.blockingTime / this.animations._anims.blocking._frames.length * this.stats.frameRate / Phaser.Timer.SECOND)){
            this._postBlocking();
        }
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
    },

    /**
     * 
     */
    use(object, target) {
        let item;
        if(typeof object === 'string') {
            item = this.items.findIndex(function(element){
                return element.name = object;
            });
            object = item;
        }
        
        if( object >= 0 && object < 2) {
            item = this.items[object];
            item.use.call(this, this, target);
            this.items.splice(object,1);
        }
    }
}

module.exports = Action;