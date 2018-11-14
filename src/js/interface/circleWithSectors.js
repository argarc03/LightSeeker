'use strict'


var CircleWithSector = function (game, x, y, radius, angles, colors, alphas, antiClockWise, segments) {
    Phaser.Graphics.call(this, game, x, y);
    if (angles.length === colors.length) {
        for (let i = 0; i < angles.length; i++) {
            this.beginFill(colors[i], alphas[i]);
            this.arc(0, 0, radius, angles[i], angles[(i + 1) % angles.length], antiClockWise, segments);
            // Si solucionan el bug de dibujar muchos sectores en un mismo grafico se podrá quitar la funcion thi.drawPolygon.
            this.drawPolygon([0, 0,
                radius * Math.cos(angles[i]), radius * Math.sin(angles[i]),
                radius * Math.cos(angles[(i + 1) % angles.length]), radius * Math.sin(angles[(i + 1) % angles.length])]
            );
        }
        this.endFill();
    }
}

CircleWithSector.prototype = Object.create(Phaser.Graphics.prototype);
CircleWithSector.prototype.constructor = CircleWithSector;

module.exports = CircleWithSector;