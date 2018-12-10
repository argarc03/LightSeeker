'use strict'

var EnemyCombatHUD = require('./enemyCombatHUD');
var SeekerCombatHUD = require('./seekerCombatHUD');
var FramedButton = require('./framedButton');

var CombatHUD = function (game, parent, x, y, seeker, enemy) {
    Phaser.Group.call(this, game, parent);
    this.x = x;
    this.y = y;
    this.frame = this.add(new Phaser.Image(game, 0, 0, 'interface'));
    this._seekerHUD = this.add(new SeekerCombatHUD(game, this, 0, 0, seeker, enemy));
    this._enemyHUD = this.add(new EnemyCombatHUD(game, this, 0, 0, seeker, enemy));
    this._pause = false;
    this._seeker = seeker;
    this._enemy = enemy;
    this.pauseButton = this.add(new FramedButton(this, game, 190, 2, 'pauseButton', 'pauseButtonFrame',[{callback:function(){
        if(this._pause){
            this._seeker.start();
            this._enemy.start();
        } else {
            this._seeker.stop();
            this._enemy.stop();
        }
        this._pause = !this._pause;
    }, context:this, arguments:[]}],0xFFFFFF,0x000000,0x676767, 0x222222, 0x676767))
}


CombatHUD.prototype = Object.create(Phaser.Group.prototype);
CombatHUD.prototype.constructor = CombatHUD;

module.exports = CombatHUD;