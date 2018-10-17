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
        this.reWrite(this._protoText);
    }
    reWrite(proto) {
        if (typeof (proto) === 'string') {
            for (let i = 0; i < proto.length; i++) {
                if (!(proto.charAt(i) === ' ' && this.xLast === 0)) {
                    let a = this.add(new Phaser.Text(this.game, this.xLast, this.yLast, proto.charAt(i), this.styleLast));
                    this.xLast += a.width;
                    if (this.xLast > this.lineWidth) {
                        this.yLast += this.lineHeight;
                        if (proto.charAt(i) === ' ') {
                            this.xLast = 0;
                            this.removeChild(a);
                            a.destroy();
                        } else {
                            a.x = 0;
                            this.xLast = a.width;
                            a.y = this.yLast;
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
Phaser.GameObjectFactory.prototype.richText = function (x, y, lineWidth, text, style = {}, group = this.game.world) {
    return new RichText(this.game, x, y, lineWidth, text, style, group);
}

// ¯\_(ツ)_/¯
class ReactiveText extends Phaser.Text {
    constructor(game, x = 0, y = 0, text = '', style = {}, textVariables = []) {
        super(game, x, y, '', style);
        this.textVariables = textVariables;
        this._protoText = text;
        for (let i = 0; i < textVariables.length; i++) {
            this.textVariables[i].signal.add(this.write, this, 0);
        }
        this.write();
    }
    write() {
        let aux = this._protoText;
        for (let i = 0; i < this.textVariables.length; i++) {
            aux = aux.replace(new RegExp('%' + this.textVariables[i].name), this.textVariables[i].textFunction);
        }
        this.setText(aux);
    }
    addVariable(variableName, textFunction, singal, textContext) {
        this.textVariables.push(new TextVariable(variableName, textFunction, singal, textContext));
        this.textVariables[this.textVariables.length - 1].signal.add(this.write, this, 0);
        this.write();
    }

    set protoText(value) {
        this._protoText = value;
        this.write();
    }
    get protoText() {
        return this._protoText;
    }
}

Phaser.GameObjectFactory.prototype.reactiveText = function (x, y, text, style, textVariables, group) {
    if (group === undefined) { group = this.world; }
    return group.add(new ReactiveText(this.game, x, y, text, style, textVariables));
}


class ReactiveIteratorText extends ReactiveText {
    constructor(game, x, y, textFunction, boundaryFunction, style, signal, delay, speed, textContext, boundaryContext, args) {
        super(game, x, y, textFunction, style, signal, textContext, args);

        this.boundaryFunction = boundaryFunction.bind(boundaryContext);
        this.delay = delay;
        this._frecuency = 1 / speed;
        this.timer = null;
        this.actualValue = this.boundaryFunction();
        this.args.unshift(this.actualValue);
        this.setText(this.textFunction(this.args));
    }
    write() {
        if (this.timer === null) {
            this.timer = this.game.time.create();
            this.timer.add(this.delay, this.rewrite, this);
            this.timer.start();
        }
    }
    rewrite() {
        if (this.actualValue > this.boundaryFunction()) {
            this.actualValue--;
            this.args[0] = this.actualValue;
            this.setText(this.textFunction(this.args));
            this.timer = this.game.time.create();
            this.timer.add(this._frecuency, this.rewrite, this);
            this.timer.start();
        } else {
            this.timer = null;
        }
    }
}

Phaser.GameObjectFactory.prototype.reactiveIteratorText = function (x, y, textFunction, boundaryFunction, style, signal, delay, speed, textContext, boundaryContext, args, group) {
    if (group === undefined) { group = this.world; }
    return group.add(new ReactiveIteratorText(this.game, x, y, textFunction, boundaryFunction, style, signal, delay, speed, textContext, boundaryContext, args));
}

class Bar extends Phaser.Group {
    constructor(game, parent, x, y,vertical, key, frame = null) {
        super(game, parent);
        this.bar = this.add(new Phaser.Sprite(game, x, y, key, frame));
        this.mask = this.add(new Phaser.Graphics(game, x, y));
        this.bar.mask = this.mask;
        this.mask.beginFill(0xffffff);
        this.mask.drawRect(0, 0, this.bar.width, this.bar.height);
        this.maxWidth = this.bar.width;
        this.maxHeight = this.bar.height;
        this.vertical = vertical;
        this._percentage = 1;
    }
    get percentage() {
        return 100 * this._percentage;
    }
    set percentage(value) {
        value = value / 100;
        this._percentage = value;
        this.mask.clear();
        this.mask.beginFill(0xffffff);
        if (this.vertical)
            this.mask.drawRect(0, 0, this.bar.width, Math.round(this.bar.height * value));
        else
            this.mask.drawRect(0, 0, Math.round(this.bar.width * value), this.bar.height);
    }
get angle() {
    return this.bar.angle;
}
set angle(angle) {
    this.bar.angle = angle;
    this.mask.angle = angle;
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
    constructor(game, parent, x, y,vertical, key, percentageFunction, functionContext, signal, frame = null) {
        super(game, parent, x, y,vertical, key, frame);
        this.percentageFunction = percentageFunction.bind(functionContext);
        signal.add(this.changePercentage, this, 0);
    }
    changePercentage() {
        this.percentage = this.percentageFunction();
    }
}
Phaser.GameObjectFactory.prototype.reactiveBar = function (parent, x, y,vertical, key, percentageFunction, functionContext, signal, frame) {
    return new ReactiveBar(this.game, parent, x, y,vertical, key, percentageFunction, functionContext, signal, frame);
}

class ReactiveContinuousBar extends ReactiveBar {
    constructor(game, parent, x, y, key, percentageFunction, functionContext, signal, delay, speed, frame = null) {
        super(game, parent, x, y, key, percentageFunction, functionContext, signal, frame);

        this.delay = delay;
        this._speed = this.bar.width / speed;
        this.timer = null;
    }
    changePercentage() {
        if (this.timer === null) {

            this.timer = this.game.time.create();
            this.timer.add(this.delay, this.reChangePercentage, this);
            this.timer.start();
        }
    }
    reChangePercentage() {
        console.log(this._percentage);
        if (this.percentage > this.percentageFunction()) {
            this.timer = this.game.time.create();
            if(this.vertical)
                this.percentage -= 100 / this.bar.height;
            else
                this.percentage -= 100 / this.bar.width;
            this.timer.add(this._speed, this.reChangePercentage, this);
            this.timer.start();
        } else {
            this.percentage = this.percentageFunction();
            this.timer = null;
        }
    }
}

Phaser.GameObjectFactory.prototype.reactiveContinuousBar = function (parent, x, y, key, percentageFunction, functionContext, signal, delay, speed, frame = null) {
    return new ReactiveContinuousBar(this.game, parent, x, y, key, percentageFunction, functionContext, signal, delay, speed, frame);
}

class HealthBar extends Phaser.Group {
    constructor(game, x, y, character, upKey, downKey, voidKey, style, delay, speed, downFrame, upFrame, voidFrame, parent) {
        super(game, parent);

        this.voidBar = this.add(new Bar(game, this, x, y, voidKey, voidFrame));
        this.downBar = this.add(new ReactiveContinuousBar(game, this, x, y, downKey, this.hpPercentage(), character, character.onHpChange, delay, speed, downFrame));
        this.upBar = this.add(new ReactiveContinuousBar(game, this, x, y, upKey, this.hpPercentage(), character, character.onHpChange, 0, speed * 10, upFrame));
        this.hpText = this.add(new ReactiveIteratorText(game, x, y, this.hpText(), this.hp(), style, character.onHpChange, delay, speed, character, character, []));
    }
    hpPercentage() {
        return this.hp / this.health * 100;
    }
    hpText() {
        return arguments[0] + "/" + this.health;
    }
    hp() {
        return this.hp;
    }
}
Phaser.GameObjectFactory.prototype.healthBar = function (x, y, character, upKey, downKey, voidKey, style, delay, speed, downFrame = null, upFrame = null, voidFrame = null, parent = this.game.world) {
    return new HealthBar(this.game, x, y, character, upKey, downKey, voidKey, style, delay, speed, downFrame, upFrame, voidFrame, parent);
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
