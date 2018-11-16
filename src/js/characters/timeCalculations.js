'use strict'

var TimeCalculations = {
    totalAttackTime: function() {
        return (this.animations._anims.preAttacking._frames.length + this.animations._anims.attacking._frames.length) / this.stats.frameRate;
    },
    currentAttackTime: function() {
        switch (this.animations.currentAnim.name) {
            case 'preAttacking':
                return (this.animations._anims.preAttacking.currentFrame.index - this.animations._anims.preAttacking._frames[0]) / this.stats.frameRate;
            case 'attacking':
                return (this.animations._anims.attacking.currentFrame.index - this.animations._anims.attacking._frames[0] + this.animations._anims.preAttacking._frames.length) / this.stats.frameRate;
            default:
                return NaN;
        }
    },
    totalBlockTime: function() {
        return ((this.animations._anims.preBlocking._frames.length + this.animations._anims.postBlocking._frames.length)
            / this.stats.frameRate) + this.stats.blockingTime/1000;
    },
    currentBlockTime: function() {
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
    },
    totalIdleTime: function(){
        return (this.animations._anims.idle._frames.length)/this.stats.frameRate;
    },
    currentIdleTime: function(){
        if(this.animations.currentAnim.name == 'idle'){
            return (this.animations._anims.idle.currentFrame.index - this.animations._anims.idle._frames[0]) / this.stats.frameRate
        } else
            return NaN;
    }
}

module.exports = TimeCalculations;