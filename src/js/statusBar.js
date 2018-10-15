'use strict';

class TextVariable {
    constructor(name, textFunction, signal, textContext) {
        this.name = name;
        this.textFunction = textFunction.bind(textContext);
        this.signal = signal;
    }
}
class Format {
    constructor(name) {
        this.head;
        this.tail;
        this.function;
        this.argument;
        switch (name) {
            case 'bold':
                this.head = '/<b>/';
                this.tail = '/</b>/';
                this.function = Phaser.Text.addFontWeight;
                this.argument = 'bold';
                break;
            case 'bolder':
                this.head = '/<bb>/';
                this.tail = '/</bb>/';
                this.function = Phaser.Text.addFontWeight;
                this.argument = 'bolder';
                break;
            case 'lighter':
                this.head = '/<l>/';
                this.tail = '/</l>/';
                this.function = Phaser.Text.addFontWeight;
                this.argument = 'ligther';
                break;
            case 'color':
                this.head = '/<c:/(/#[0-9-Fa-f]{6}/)/>/';
                this.tail = '</c>';
                this.function = Phaser.Text.addColor;
                this.argument = '';
                break;
            case 'strokecolor':
                this.head = '/<sc:/(/#[0-9-Fa-f]{6}/)/>/';
                this.tail = '</sc>';
                this.function = Phaser.Text.addStrokeColor;
                this.argument = '';
                break;
            case 'italic':
                this.head = '/<i>/';
                this.tail = '/</i>/';
                this.function = Phaser.Text.addFontStyle;
                this.argument = 'italic';
                break;
            case 'oblique':
                this.head = '/<b>/';
                this.tail = '/</b>/';
                this.function = Phaser.Text.addFontStyle;
                this.argument = 'italic';
                break;

        }
    }
}
class MiniFormat {
    constructor(firstPosition, lastPosition, format) {
        this.firstPosition = firstPosition;
        this.lastPosition = lastPosition;
        this.format = format;
    }
}
class RichText extends Phaser.Text {
    constructor(game, x, y, text, style) {
        super(game, x, y, '', style);
        this._protoText = text;
        this.reWrite()
    }
    reWrite() {
        let formats = [];
        let aux = this._protoText;
        //Encontramos los indices de los formatos
        indexOfRegEx.apply(aux, [new RegExp('<b>')]).forEach(
            function (element) {
                formats.push(new MiniFormat(element, -1, 'bold'));
            }
        );
        //los indices finales
        let i = 0;
        indexOfRegEx.apply(aux, [new RegExp('</b>')]).forEach(
            function (element) {
                formats[i].lastPosition = element;
                i++;
            }
        );
        aux = aux.replace(new RegExp('<b>', 'g'), '');
        aux = aux.replace(new RegExp('</b>', 'g'), '');
        //restamos a cada posicion el tamaño de la cabecera de todas las cabeceras anteriores.
        realIndex.apply(formats);
        console.log(formats);
        for (i = 0; i < formats.length; i++) {
            this.addFontWeight('bold', formats[i].firstPosition);
            this.addFontWeight('bold', formats[i].lastPosition);
        }
        this.setText(aux);
    }
}
Phaser.GameObjectFactory.prototype.richText = function (x, y, text, style, group) {
    if (group === undefined) { group = this.world; }
    return group.add(new RichText(this.game, x, y, text, style));
}



var realIndex = function () {
    let minIndex = { firstPosition: 0, lastPosition: 0 };
    let minFirstIndex = 0;
    let minLastIndex = -1;
    let nameIndex = 'firstPosition';
    let futureMinIndex;
    let j = 0;
    while (minLastIndex != this.length - 1 && j < 20) {
        j++;
        let minAux = 50000;
        let minIndexAux = -1;
        for (let i = minFirstIndex + 1; i < this.length; i++) {
            if (this[i].firstPosition < minAux) {
                minAux = this[i].firstPosition;
                minIndexAux = i;
                futureMinIndex = 'firstPosition';
            }
            this[i].firstPosition -= nameIndex == 'firstPosition' ? 3 : 4;
        }
        for (let i = minLastIndex + 1; i < this.length; i++) {
            if (this[i].lastPosition < minAux) {
                minAux = this[i].lastPosition;
                minIndexAux = i;
                futureMinIndex = 'lastPosition';
            }
            this[i].lastPosition -= nameIndex == 'firstPosition' ? 3 : 4;
        }
        if (futureMinIndex == 'firstPosition') {
            minFirstIndex = minIndexAux;
        } else {
            minLastIndex = minIndexAux;
        }
        nameIndex = futureMinIndex;
    }

}

var indexOfRegEx = function (regEx) {

    let ret = [];
    let i = 0;
    let j = 0;
    let aux = 0
    aux = this.slice(i).search(regEx);
    i += aux;
    while (aux != -1 && j < 10) {
        ret.push(i);
        aux = this.slice(i + 1).search(regEx);
        i += aux + 1;
        j++;
    }
    return ret;
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
    constructor(game, parent, x, y, key, frame = null) {
        super(game, parent);
        this.bar = this.add(new Phaser.Sprite(game, x, y, key, frame));
        this.mask = this.add(new Phaser.Graphics(game, x, y));
        this.bar.mask = this.mask;
        this.mask.beginFill(0xffffff);
        this.mask.drawRect(0, 0, this.bar.width, this.bar.height);
        this.maxWidth = this.bar.width;
        this._percentage = 1;
    }
    get percentage() {
        return 100 * this._percentage;
    }
    set percentage(value) {
        console.log(value);
        value = value / 100;
        this._percentage = value;
        this.mask.clear();
        this.mask.beginFill(0xffffff);
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
Phaser.GameObjectFactory.prototype.bar = function (parent, x, y, key, frame) {
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
        this.downBar = this.add(new ReactiveContinuousBar(game, this, x, y, downKey, this.hpPercentage, character, character.onHpChange, delay, speed, downFrame));
        this.upBar = this.add(new ReactiveContinuousBar(game, this, x, y, upKey, this.hpPercentage, character, character.onHpChange, 0, speed * 10, upFrame));
        this.hpText = this.add(new ReactiveIteratorText(game, x, y, this.hpText, this.hp, style, character.onHpChange, delay, speed, character, character, []));
    }
    hpPercentage() {
        return this.hp / this.stats.health * 100;
    }
    hpText() {
        return arguments[0] + "/" + this.stats.health;
    }
    hp() {
        return this.hp;
    }
}
Phaser.GameObjectFactory.prototype.healthBar = function (x, y, character, upKey, downKey, voidKey, style, delay, speed, downFrame = null, upFrame = null, voidFrame = null, parent = this.game.world) {
    console.log(parent);
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
