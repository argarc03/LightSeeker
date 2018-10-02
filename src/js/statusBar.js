'use strict';


// Es un puto caos, pero ya está protegido ¯\_(ツ)_/¯
// Aun queda decidir como se hace el decremento y hacer el sector circular. 
class Bar {
    constructor(game, x, y, key, frame = null) {
        this.game = game;
        this.sprite = game.add.sprite(x, y, key, frame);
        this.maxWidth = this.sprite.width;
        this.onPercentageChange = new Phaser.Signal();
    }

    changePercentage() {
        let aux = arguments[0].bind(arguments[1])() / 100 * this.maxWidth;
        this.sprite.width = aux;
        this.onPercentageChange.dispatch();
    }

}

Object.defineProperty(Bar.prototype, 'height', {
    get: function () {
        return this.sprite.scale.y * this.sprite.texture.frame.height;
    },
    set: function (value) {
        this.sprite.scale.y = value / this.sprite.texture.frame.height;
        this.sprite._height = value;

    }
})

Object.defineProperty(Bar.prototype, 'width', {
    get: function () {
        return this.scale.x * this.sprite.texture.frame.width;
    },
    set: function (value) {
        let percentage = this.sprite._width / this.maxWidth;
        this.sprite.scale.x = value / this.sprite.texture.frame.width;
        this.sprite._width = percentage * this.maxWidth;
        this.maxWidth = value;
    }
})

class HealthBar extends Bar {
    constructor(game, x, y, keyUp, keyDown, delay, changeTime, xText = 0, yText = 0, text = null, textContext = null, font = null, fontSize = null, frameUp = null, frameDown = null) {
        super(game, x, y, keyUp, frameUp);
        this.retardedSprite = game.add.sprite(x, y, keyDown, frameDown);
        this.retardedSprite.height = this.height;
        this.retardedSprite.width = this.sprite.width;
        this.sprite.moveUp();
        this.delay = delay;
        this.changeTime = changeTime;
        if (typeof (text) === 'function') {
            this.textContext = textContext;
            this.text = text.bind(this.textContext);
            this.bitmapText = this.game.add.bitmapText(x + xText, y + yText, font, text.bind(this.textContext)(), fontSize);
        } else if (text === null) {
            this.bitmapText = this.game.add.bitmapText(x + xText, y + yText, font, fontSize);
        }
        this.bitmapText.aling = 'center';
        this.subtractor;
        this.percentage
        this.timer = null;
    }

    changePercentage() {
        this.percentage = arguments[0].bind(arguments[1])();
        if (this.percentage / 100 * this.maxWidth !== this.sprite.width) {
            this.onPercentageChange.dispatch();
            this.subtractor = (this.retardedSprite.width - this.percentage / 100 * this.maxWidth) / this.changeTime * 10;
            this.bitmapText.text = this.text.bind(this.textContext)();
            this.game.time.events.add(this.delay, this.reduceRetardedBar, this);
            this.sprite.width = this.percentage / 100 * this.maxWidth;
        }
    }
    reduceRetardedBar() {
        if (this.sprite.width !== this.retardedSprite.width) {
            this.retardedSprite.width = Math.max(this.sprite.width, this.retardedSprite.width - this.subtractor);
            this.game.time.events.add(10, this.reduceRetardedBar, this);
        }
    }
}

Object.defineProperty(HealthBar.prototype, 'height', {
    get: function () {
        return this.sprite.scale.y * this.sprite.texture.frame.height;
    },
    set: function (value) {
        this.sprite.scale.y = value / this.sprite.texture.frame.height;
        this.sprite._height = value;
        this.retardedSprite.scale.y = value / this.retardedSprite.texture.frame.height;
        this.retardedSprite._height = value;
    }
})

Object.defineProperty(HealthBar.prototype, 'width', {
    get: function () {
        return this.sprite.scale.x * this.sprite.texture.frame.width;
    },
    set: function (value) {
        let percentage = this.sprite._width / this.maxWidth;
        this.sprite.scale.x = value / this.sprite.texture.frame.width;
        this.retardedSprite.scale.x = value / this.retardedSprite.texture.frame.width;
        this.sprite._width = percentage * this.maxWidth;
        this.retardedSprite._width = percentage * this.maxWidth;
        this.maxWidth = value;
    }
})

class CircleBar {
    constructor() {
        this.baseCircle = game.add.sprite(x, y);
        this.baseCircle.addChild(game.add.circleWithSectors());
        this.maskCircle = game.add.circleWithSectors();
        this.baseCircle.mask = this.maskCircle;
        this.initialAngle;
        this.percentage;
    }
    changePercentage(percentage) {
        this.maskCircle.clear();
        this.maskCircle.beginFill();
        this.maskCircle.arc();
        this.maskCircle.drawPolygon();
        this.maskCircle.endFill();
        this.percentage = percentage;
    }
}

class CircleWithSectors extends Phaser.Graphics {
    constructor(game, x, y, radius, angles, colors, alphas, antiClockWise, segments) {
        super(game, x, y);
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
}

Phaser.GameObjectFactory.prototype.circleWithSectors = function (x, y, radius, angles, colors, alphas, antiClockWise, segments, group) {
    if (group === undefined) { group = this.world; }
    return group.add(new CircleWithSectors(this.game, x, y, radius, angles, colors, alphas, antiClockWise, segments));
}
