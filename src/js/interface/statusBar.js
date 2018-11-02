'use strict';

class RichText extends Phaser.Group {
    constructor(game, x, y, lineWidth, text, style, parent) {
        super(game, parent);
        this._protoText = text;
        this.numberOfCharacters = 0;
        this.x = x;
        this.y = y;
        this.xLast = 0;
        this.yLast = 0;
        this.styleLast = {
            font: style.font === undefined ? 'Arial' : style.font,
            fontStyle: style.fontStyle === undefined ? 'normal' : style.fontStyle,
            fontVariant: style.fontVariant === undefined ? 'normal' : style.fontVariant,
            fontWeight: style.fontWeight === undefined ? 'normal' : style.fontWeight,
            fontSize: style.fontSize === undefined ? '8px' : style.fontSize,
            backgroundColor: style.backgroundColor === undefined ? null : style.backgroundColor,
            fill: style.fill === undefined ? '#000000' : style.fill,
            align: style.align === undefined ? 'left' : style.align,
            boundsAlignH: style.boundsAlignH === undefined ? 'left' : style.boundsAlignH,
            boundsAlignV: style.boundsAlignV === undefined ? 'top' : style.boundsAlignV,
            stroke: style.stroke === undefined ? 'black' : style.stroke,
            strokeThickness: style.strokeThickness === undefined ? 0 : style.strokeThickness,
            wordWrap: style.wordWrap === undefined ? false : style.wordWrap,
            wordWrapWidth: style.wordWrapWidth === undefined ? false : style.wordWrapWidth,
            maxLines: style.maxLines === undefined ? 0 : style.maxLines
        };
        this.lineWidth = lineWidth;
        this.lineHeight = this.styleLast.fontSize;
        this.reWrite(text);
    }
    write() {
        this.removeAll(true);
        this.xLast = 0;
        this.yLast = 0;
        this.numberOfCharacters = 0;
        this.reWrite(this._protoText);
    }
    reWrite(proto) {
        if (typeof (proto) === 'string') {
            for (let i = 0; i < proto.length; i++) {
                if (!(proto.charAt(i) === ' ' && this.xLast === 0)) {
                    let a = this.add(new Phaser.Text(this.game, this.xLast, this.yLast, proto.charAt(i), this.styleLast));
                    this.xLast += a.width;
                    if (this.xLast > this.lineWidth) {
                        if (a.text !== ' ') {
                            let index = i;
                            let temporalWidth = 0;
                            while (index >= 0 && this.getChildAt(index).text !== ' ') {
                                temporalWidth += this.getChildAt(index).width;
                                index--;
                            }
                            if (index < 0) {
                                index = 0;
                            }
                            if (this.getChildAt(index).text === ' ') {
                                index++;
                            }
                            if (temporalWidth > this.lineWidth) {
                                this.xLast = this.getChildAt(index).x;
                                this.yLast = this.getChildAt(index).y;
                            } else {
                                this.xLast = 0;
                                this.yLast += this.lineHeight;
                            }
                            for (let j = index; j <= i; j++) {
                                if (this.xLast > this.lineWidth) {
                                    this.xLast = 0;
                                    this.yLast += this.lineHeight;
                                }

                                this.getChildAt(j).x = this.xLast;
                                this.getChildAt(j).y = this.yLast;
                                this.xLast += this.getChildAt(j).width;
                            }
                            if (this.xLast > this.lineWidth) {
                                this.xLast = 0;
                                this.yLast += this.lineHeight;
                            }
                        } else {
                            this.xLast = 0;
                            this.yLast += this.lineHeight;
                        }
                    }
                    this.numberOfCharacters++;
                }
            }
        } else if (typeof (proto) === 'function') {
            proto.apply(this);
        } else if (Array.isArray(proto)) {
            for (let element in proto) {
                this.reWrite(proto[element]);
            }
        }
    }
}
var fun = function (func) {
    return function () {
        this.reWrite(func());
    }
}
var Style = function (format) {
    let args = [];
    for (let element in arguments) {
        args.push(arguments[element]);
    }
    args = args.splice(1);
    return function () {
        let preStyle = this.styleLast.fontStyle;
        this.styleLast.fontStyle = format;
        this.reWrite(args);
        this.styleLast.fontStyle = preStyle;
    }
}
var Color = function (color) {
    let args = [];
    for (let element in arguments) {
        args.push(arguments[element]);
    }
    args = args.splice(1);
    return function () {
        let preColor = this.styleLast.fill;
        this.styleLast.fill = color;
        this.reWrite(args);
        this.styleLast.fill = preColor;
    }
}
var StrokeColor = function (color) {
    let args = [];
    for (let element in arguments) {
        args.push(arguments[element]);
    }
    args = args.splice(1);
    return function () {
        let preStrokeColor = this.styleLast.stroke;
        this.styleLast.stroke = color;
        this.reWrite(args);
        this.styleLast.stroke = preStrokeColor;
    }
}
var FontWeight = function (style) {
    let args = [];
    for (let element in arguments) {
        args.push(arguments[element]);
    }
    args = args.splice(1);
    return function () {
        let preStyle = this.styleLast.fontWeight;
        this.styleLast.fontWeight = style;
        this.reWrite(args);
        this.styleLast.fontWeight = preStyle;
    }
}
var Tremble = function (amplitud, frecuencia, longitudDeOnda) {
    let args = [];

    for (let element in arguments) {
        args.push(arguments[element]);
    }
    args = args.splice(3);
    return function () {
        let inicio = this.numberOfCharacters;
        this.reWrite(args);
        for (inicio; inicio < this.numberOfCharacters; inicio++) {
            this.getChildAt(inicio).initialY = this.getChildAt(inicio).y;
            this.getChildAt(inicio).update = function () {
                this.y = amplitud * Math.sin(this.game.time.totalElapsedSeconds() * 2 * Math.PI * frecuencia + this.parent.getChildIndex(this) / longitudDeOnda)
                    + this.initialY;
            };
        }
    }
}

var VariableNumber = function (numberfunction, context, delay) {
    var value = numberfunction.apply(context);
    return function () {
        if (value !== numberfunction.apply(context)) {
            if (value > numberfunction.apply(context)) {
                value--;
            } else {
                value++;
            }
            this.game.time.create().add(delay, this.write, this).timer.start();
        }
        this.reWrite(value.toString());
    }
}

Phaser.GameObjectFactory.prototype.richText = function (x, y, lineWidth, text, style = {}, group = this.game.world) {
    return new RichText(this.game, x, y, lineWidth, text, style, group);
}

// ¯\_(ツ)_/¯
class ReactiveRichText extends RichText {
    constructor(game, x, y, lineWidth, text, style, parent, signals) {
        super(game, x, y, lineWidth, text, style, parent);
        for (let i = 0; i < signals.length; i++) {
            signals[i].add(this.write, this, 0);
        }
        this.write();
    }
}

Phaser.GameObjectFactory.prototype.reactiveRichText = function (x, y, lineWidth, text, style, signal, group) {
    if (group === undefined) { group = this.world; }
    return group.add(new ReactiveRichText(this.game, x, y, lineWidth, text, style, group, signal));
}

class Bar extends Phaser.Group {
    constructor(game, parent, x, y, key, frame = null) {
        super(game, parent);
        this.bar = this.add(new Phaser.Sprite(game, x, y, key, frame));
        this.mask = this.add(new Phaser.Graphics(game, x, y));
        this.bar.mask = this.mask;
        this.mask.beginFill(0xffffff);
        this.mask.drawRect(0, 0, this.bar.width, this.bar.height);
        this.maxWidth = this.bar.width;
        this.maxHeight = this.bar.height;
        this._percentage = 1;
        this._maskAngle = 0;
    }
    get percentage() {
        return 100 * this._percentage;
    }
    set percentage(value) {
        value = value / 100;
        this._percentage = value;
        this.mask.clear();
        this.mask.beginFill(0xffffff);
        this.mask.drawRect(0, 0, Math.round(this.bar.width * value), this.bar.height);
    }
    get angle() {
        return this.bar.angle;
    }
    set maskAngle(value) {
        this._maskAngle = value;
        this.angle = this.angle;
    }
    set angle(angle) {
        this.bar.angle = angle;
        this.mask.angle = angle + this._maskAngle;
        this.mask.y = this.bar.y + this.bar.height / 2 - Math.sqrt(this.bar.width * this.bar.width +
            this.bar.height * this.bar.height) / 2 * Math.cos((this._maskAngle - 45) * Math.PI / 180);
        this.mask.x = this.bar.x + this.bar.width / 2 + Math.sqrt(this.bar.width * this.bar.width +
            this.bar.height * this.bar.height) / 2 * Math.sin((this._maskAngle - 45) * Math.PI / 180);
    }
    get width() {
        return this.bar.width;
    }
    set width(value) {
        this.bar.width = value;
        this.percentage(this._percentage);
    }
    get height() {
        return this.bar.height;
    }
    set height(value) {
        this.bar.height = value;
        this.percentage(this._percentage);
    }
}
Phaser.GameObjectFactory.prototype.bar = function (x, y, key, frame, parent = this.game.world) {
    return new Bar(this.game, parent, x, y, key, frame);
}

class ReactiveBar extends Bar {
    constructor(game, parent, x, y, key, percentageFunction, functionContext, signal, frame = null) {
        super(game, parent, x, y, key, frame);
        this.percentageFunction = percentageFunction.bind(functionContext);
        signal.add(this.changePercentage, this, 0);
    }
    changePercentage() {
        this.percentage = this.percentageFunction();
    }
}
Phaser.GameObjectFactory.prototype.reactiveBar = function (parent, x, y, key, percentageFunction, functionContext, signal, frame) {
    return new ReactiveBar(this.game, parent, x, y, key, percentageFunction, functionContext, signal, frame);
}

class ReactiveContinuousBar extends ReactiveBar {
    constructor(game, parent, x, y, key, percentageFunction, functionContext, signal, decreaseDelay, increaseDelay, decreaseSpeed, increaseSpeed, frame = null) {
        super(game, parent, x, y, key, percentageFunction, functionContext, signal, frame);
        this.increasing = false;
        this.decreasing = false;
        this._decreaseDelay = decreaseDelay;
        this._increaseSpeed = increaseDelay;
        this._increaseSpeed = this.bar.width / increaseSpeed;
        this._decreaseSpeed = this.bar.width / decreaseSpeed;
        this.timer = null;
    }
    changePercentage() {
        if (this.percentageFunction() > this.percentage) {
            console.log('sube');
            if (!this.increasing) {
                if (this.timer !== null) {
                    this.timer.stops(true);
                }
                this.decreasing = false;
                this.increasing = true;
                this.timer = this.game.time.create();
                this.timer.add(this._increaseDelay, this.reChangePercentage, this);
                this.timer.start();
            }
        } else {
            console.log('baja');
            if (!this.decreasing) {
                if (this.timer !== null) {
                    this.timer.stops(true);
                }
                this.increasing = false;
                this.decreasing = true;
                this.timer = this.game.time.create();
                this.timer.add(this._decreaseDelay, this.reChangePercentage, this);
                this.timer.start();
            }
        }
    }
    reChangePercentage() {
        if(this.increasing) {
            console.log('SUBE');
            if (this.percentage < this.percentageFunction()) {
                this.timer = this.game.time.create();
                if (this.vertical)
                    this.percentage += 100 / this.bar.height;
                else
                    this.percentage += 100 / this.bar.width;
                this.timer.add(this._increaseSpeed, this.reChangePercentage, this);
                this.timer.start();
            } else {
                this.increasing = false;
                this.percentage = this.percentageFunction();
                this.timer = null;
            }
        } else if(this.decreasing){
            console.log('BAJA');
            if (this.percentage > this.percentageFunction()) {
                this.timer = this.game.time.create();
                if (this.vertical)
                    this.percentage -= 100 / this.bar.height;
                else
                    this.percentage -= 100 / this.bar.width;
                this.timer.add(this._decreaseSpeed, this.reChangePercentage, this);
                this.timer.start();
            } else {
                this.decreasing = false;
                this.percentage = this.percentageFunction();
                this.timer = null;
            }
        }
        
    }
}

Phaser.GameObjectFactory.prototype.reactiveContinuousBar = function (parent, x, y, key, percentageFunction, functionContext, signal, decreaseDelay, increaseDelay, decreaseSpeed, increaseSpeed, frame = null) {
    return new ReactiveContinuousBar(this.game, parent, x, y, key, percentageFunction, functionContext, signal, decreaseDelay, increaseDelay, decreaseSpeed, increaseSpeed, frame);
}

class HealthBar extends Phaser.Group {
    constructor(game, x, y, character, voidKey, healKey, damageKey, healthKey, style, delay, speed, voidFrame, healFrame, damageFrame, healthFrame, parent) {
        super(game, parent);

        this.voidBar = this.add(new Bar(game, this, x, y, voidKey, voidFrame));
        this.healBar = this.add(new ReactiveContinuousBar(game, this, x, y, healKey, this.hpPercentage, character, character.onHpChange, 0, 0, speed,speed, healFrame))
        this.damageBar = this.add(new ReactiveContinuousBar(game, this, x, y, damageKey, this.hpPercentage, character, character.onHpChange, delay, 0, speed, speed, damageFrame));
        this.healthBar = this.add(new ReactiveContinuousBar(game, this, x, y, healthKey, this.hpPercentage, character, character.onHpChange, 0, delay, speed,speed, healthFrame));
        this.hpText = this.add(new ReactiveRichText(game, x, y, this.voidBar.width, [VariableNumber(function () { return this.hp }, character, speed),
            '/',
        VariableNumber(function () { return this.stats.health }, character, 1000)], style, this, [character.onHpChange, character.stats.onHealthChange]));
    }
    hpPercentage() {
        return this.hp / this.stats.health * 100;
    }
    hp() {
        return this.hp;
    }
}
Phaser.GameObjectFactory.prototype.healthBar = function (x, y, character, voidKey, healKey, damageKey, healthKey, style, delay, speed, voidFrame = null, healFrame = null, damageFrame = null, healthFrame = null, parent = this.game.world) {
    return new HealthBar(this.game, x, y, character, voidKey, healKey, damageKey, healthKey, style, delay, speed, voidFrame, healFrame, damageFrame, healthFrame, parent);
}

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
