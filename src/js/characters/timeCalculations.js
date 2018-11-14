'use strict'

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

module.exports = TimeCalculations;