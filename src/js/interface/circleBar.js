'use strict'

CircleBar = function () {
    this.baseCircle = game.add.sprite(x, y);
    this.baseCircle.addChild(game.add.circleWithSectors());
    this.maskCircle = game.add.circleWithSectors();
    this.baseCircle.mask = this.maskCircle;
    this.initialAngle;
    this.percentage;
}

CircleBar.prototype.changePercentage = function(percentage) {
    this.maskCircle.clear();
    this.maskCircle.beginFill();
    this.maskCircle.arc();
    this.maskCircle.drawPolygon();
    this.maskCircle.endFill();
    this.percentage = percentage;
}

module.exports = CircleBar;