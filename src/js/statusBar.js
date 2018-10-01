'use strict';


// Es un puto caos, pero ya está protegido ¯\_(ツ)_/¯
// Aun queda decidir como se hace el decremento y hacer el sector circular. 
class Bar {
    constructor(game, x, y, key, frame=null) {
        if(game instanceof Phaser.Game){
            this.game = game;
            this.sprite = game.add.sprite(x,y,key,frame);
            this.maxWidth = this.sprite.width; 
            this.onPercentageChange = new Phaser.Signal();
        } else {
            throw 'game must be an instance of Phaser.Game';
        }
    }

    changePercentage () {
        
        if(arguments.length===2 &&  typeof(arguments[0])=== 'function')
        {   
            let aux = arguments[0].bind(arguments[1])() / 100 * this.maxWidth;
            if(typeof(aux)!=='number')
                throw 'arguments must return a number'
            this.sprite.width = aux;
            this.onPercentageChange.dispatch();
        } else {
            throw 'number of arguments must be 2 <function>,<functionContext>';
        }
    }

}

Object.defineProperty(Bar.prototype, 'height', {

    get: function() {
        return  this.sprite.scale.y * this.sprite.texture.frame.height;
    },

    set: function(value) {
        if(typeof(value)==='number') {
            this.sprite.scale.y = value / this.sprite.texture.frame.height;
            this.sprite._height = value;
        } else {
            throw ' height must be number';
        }
    }

})

Object.defineProperty(Bar.prototype, 'width', {

    get: function() {
        return  this.scale.x * this.sprite.texture.frame.width;
    },

    set: function(value) {
        if(typeof(value)==='number'){
            let percentage = this.sprite._width/this.maxWidth;

            this.sprite.scale.x = value / this.sprite.texture.frame.width;
            this.sprite._width = percentage*this.maxWidth;

            this.maxWidth = value; 
        } else {
            throw ' width must be number';
        }
    }

})

class HealthBar extends Bar {
    constructor(game,x,y,keyUp,keyDown,delay,changeTime, xText= 0, yText = 0, text=null, textContext=null, font=null, fontSize = null,frameUp=null,frameDown=null) {
        super(game,x,y,keyUp,frameUp);
        
        // Esto se puede hacer con una gramatica regular en el que el primer elemento a leer es la longitud de los argumentos... pero me da mucho palo rehacerlo.
        switch(arguments.length) {
            case 7:
            break;
            case 8:
                switch(typeof(arguments[7])) {
                    case 'function':
                    break;
                    case 'array':
                        if(isAnArrayOfType('number',arguments[7]))  {

                        } else {
                            throw 'frameUp must be array of numbers';
                        }
                    break;
                    default:// mirar si es textContext u otra cosa.
                    throw 'new HealthBar syntaxis must be (<Phaser.game game>,<number x>,<number y>, ' + 
                    '<Phaser.Sprite keyUp>,<Phaser.Sprite keyDown>,<number delay>,<number changeTime>, ' + 
                    '<number xText>(optional),<number yText>(optional),<funtion text>(optional)' + 
                    '<textContext>(optional), <string font>(optional), <number fonSize>(optional)' +
                    '<arrayOfNumbers frameUp>(optional), <arrayOfNumbers frameDown>(optional)';
                }
            break;
            case 9:
                if(isAnArrayOfType('number',arguments[7]))  {

                } else {
                    throw 'frameUp must be array of numbers';
                }
                if(isAnArrayOfType('number',arguments[8]))  {

                } else {
                    throw 'frameDown must be array of numbers';
                }
            break;
            case 10:
                switch(typeof(arguments[7])) {
                    case 'number':
                        if(typeof(arguments[8]==='number')) {
                            if(typeof(arguments[9])==='function') {

                            } else {
                                throw 'text must be function';
                            }
                        } else {
                            throw 'yText must be number';
                        }
                    break;
                    case 'function':
                        switch(typeof(arguments[8])) {
                            case 'number':
                                if(isAnArrayOfType('number', arguments[9])) {

                                } else {
                                    throw 'frameUp must be array of numbers';
                                }
                            break;
                            case 'array':
                                if(isAnArrayOfType('number', arguments[8]) && isAnArrayOfType('number', arguments[9])) {

                                } else {
                                    throw 'frameUp and frameDown must be array of numbers';
                                }
                            break;
                            default:
                                switch(typeof(arguments[9]))    {
                                    case 'number':
                                    break;
                                    case 'array':
                                        if(isAnArrayOfType('number', arguments[9])) {
        
                                        } else {
                                            throw 'frameUp must be array of numbers';
                                        }
                                    break;
                                }
                            break;
                        }
                    break;
                }
            break;
            case 11:
                switch(typeof(arguments[7])) {
                    case 'number':
                        if(typeof(arguments[8]) === 'number'){
                            if(typeof(arguments[9])=== 'function') {
                                switch(typeof (arguments[10])) {
                                    case 'string':
                                    break;
                                    case 'number':
                                    break;
                                    case 'array':
                                        if(isAnArrayOfType('number', arguments[10])) {

                                        } else {
                                            throw 'frameUp must be array of numbers';
                                        }
                                    break;
                                    default:
                                    break;
                                }
                            } else if(typeof(arguments[9])=== 'array') {
                                if(isAnArrayOfType('number', arguments[9]) && isAnArrayOfType('number', arguments[10])) {

                                } else {
                                    throw 'frameUp and frameDown must be array of numbers';
                                }
                            }
                        } else {
                            throw 'yText must be number';
                        }
                    break;
                    default:
                        switch(typeof(arguments[8])) {
                            case 'string':
                                switch(typeof(arguments[9])){
                                    case 'number':
                                        if(isAnArrayOfType('number', arguments[10])) {

                                        } else {
                                            throw 'frameUp must be array of numbers';
                                        }
                                    break;
                                    case 'array':
                                        if(isAnArrayOfType('number', arguments[9]) && isAnArrayOfType('number', arguments[10])) {

                                        } else {
                                            throw 'frameUp and frameDown must be array of numbers';
                                        }
                                    break;
                                    default:
                                        throw 'new HealthBar syntaxis must be (<Phaser.game game>,<number x>,<number y>, ' + 
                                        '<Phaser.Sprite keyUp>,<Phaser.Sprite keyDown>,<number delay>,<number changeTime>, ' + 
                                        '<number xText>(optional),<number yText>(optional),<funtion text>(optional)' + 
                                        '<textContext>(optional), <string font>(optional), <number fonSize>(optional)' +
                                        '<arrayOfNumbers frameUp>(optional), <arrayOfNumbers frameDown>(optional)';
                                }
                            break;
                            case 'number':
                                if(isAnArrayOfType('number', arguments[9]) && isAnArrayOfType('number', arguments[10])) {

                                } else {
                                    throw 'frameUp and frameDown must be array of numbers';
                                }
                            break;
                            default:
                                throw 'new HealthBar syntaxis must be (<Phaser.game game>,<number x>,<number y>, ' + 
                                '<Phaser.Sprite keyUp>,<Phaser.Sprite keyDown>,<number delay>,<number changeTime>, ' + 
                                '<number xText>(optional),<number yText>(optional),<funtion text>(optional)' + 
                                '<textContext>(optional), <string font>(optional), <number fonSize>(optional)' +
                                '<arrayOfNumbers frameUp>(optional), <arrayOfNumbers frameDown>(optional)';
                        }
                    break;
                }
            break;
            case 12:
                switch(typeof(arguments[7])){
                    case 'number':
                        if(typeof(arguments[9])==='function') {
                            switch(typeof(arguments[10])) {
                                case 'string':
                                    switch(typeof(arguments[11])) {
                                        case 'number':
                                        break;
                                        case 'array':
                                            if(isAnArrayOfType('numer',arguments[11])) {

                                            } else {
                                                throw 'frameUp must be array of number';
                                            }
                                        break;
                                        default:
                                            throw 'last argument must be fontSize or frameUp';
                                    }
                                break;
                                case 'number':
                                    if(isAnArrayOfType('number', arguments[11])) {

                                    } else {
                                        throw 'frameUp must be array of number';
                                    }
                                break;
                                case 'array':
                                    if(isAnArrayOfType('number', arguments[10]) && isAnArrayOfType('number', arguments[11])) {

                                    } else {
                                        throw 'frameUp and frameDown must be array of numbers';
                                    }
                                break;
                                default:
                                    switch(typeof(arguments[11])) {
                                        case 'string':
                                        break;
                                        case 'number':
                                        break;
                                        case 'array':
                                            if(isAnArrayOfType('numer',arguments[11])) {

                                            } else {
                                                throw 'frameUp must be array of number';
                                            }
                                        break;
                                        default:
                                            throw 'new HealthBar syntaxis must be (<Phaser.game game>,<number x>,<number y>, ' + 
                                            '<Phaser.Sprite keyUp>,<Phaser.Sprite keyDown>,<number delay>,<number changeTime>, ' + 
                                            '<number xText>(optional),<number yText>(optional),<funtion text>(optional)' + 
                                            '<textContext>(optional), <string font>(optional), <number fonSize>(optional)' +
                                            '<arrayOfNumbers frameUp>(optional), <arrayOfNumbers frameDown>(optional)';
                
                                    }
                                break;
                            }
                        }
                    break;
                    case 'function':
                        switch(typeof(arguments[8])) {
                            case 'string':
                                if(typeof(arguments[9])==='number') {
                                    if(isAnArrayOfType('number', arguments[10])) {
                                        if(isAnArrayOfType('number', arguments[11])) {
                                        } else {
                                            'frameDown must be array of number'
                                        }   
                                    } else {
                                        throw 'frameUp must be array of number';
                                    }
                                } else {
                                    throw 'fontSize must be number';
                                }
                            break;
                            default:   
                                switch(typeof(arguments[9])) {
                                    case 'string':
                                        switch(typeof(arguments[10])) {
                                            case 'number':
                                                if(isAnArrayOfType('number', arguments[10])) {
                                                } else {
                                                    'frameDown must be array of number'
                                                }  
                                            break;
                                                case 'array':
                                                if(isAnArrayOfType('number', arguments[10])) {
                                                    if(isAnArrayOfType('number', arguments[11])) {
                                                    } else {
                                                        'frameDown must be array of number'
                                                    }   
                                                } else {
                                                    throw 'frameUp must be array of number';
                                                }
                                            break;
                                        }
                                    break;
                                    case 'number':
                                        if(isAnArrayOfType('number', arguments[10])) {
                                            if(isAnArrayOfType('number', arguments[11])) {
                                            } else {
                                                'frameDown must be array of number'
                                            }   
                                        } else {
                                            throw 'frameUp must be array of number';
                                        }
                                    break;
                                }
                            break;
                        }
                    break;
                    default:
                        throw 'new HealthBar syntaxis must be (<Phaser.game game>,<number x>,<number y>, ' + 
                        '<Phaser.Sprite keyUp>,<Phaser.Sprite keyDown>,<number delay>,<number changeTime>, ' + 
                        '<number xText>(optional),<number yText>(optional),<funtion text>(optional)' + 
                        '<textContext>(optional), <string font>(optional), <number fonSize>(optional)' +
                        '<arrayOfNumbers frameUp>(optional), <arrayOfNumbers frameDown>(optional)';

                }
            break;
            case 13:
                
                switch(typeof(arguments[7])) {
                    case 'number':
                        if(typeof(arguments[8])==='number') {
                            if(typeof(arguments[9])==='function') {
                                switch(typeof(arguments[10])) {
                                    case 'string':
                                        switch(typeof(arguments[11])){
                                            case 'number':
                                                if(isAnArrayOfType('number', arguments[12])) {

                                                } else {
                                                    throw 'frameUp must be array of numbers';
                                                }
                                            break;
                                            case 'array':
                                                if(isAnArrayOfType('number', arguments[11]) && isAnArrayOfType('number', arguments[12])) {

                                                } else {
                                                    throw 'frameUp and frameDown must be array of numbers';
                                                }
                                            break;
                                            default:
                                                throw 'new HealthBar syntaxis must be (<Phaser.game game>,<number x>,<number y>, ' + 
                                                '<Phaser.Sprite keyUp>,<Phaser.Sprite keyDown>,<number delay>,<number changeTime>, ' + 
                                                '<number xText>(optional),<number yText>(optional),<funtion text>(optional)' + 
                                                '<textContext>(optional), <string font>(optional), <number fonSize>(optional)' +
                                                '<arrayOfNumbers frameUp>(optional), <arrayOfNumbers frameDown>(optional)';
                                        }
                                    break;
                                    default:
                                        switch(typeof(arguments[11])) {
                                            case 'string':
                                                switch(typeof(arguments[12])){
                                                    case 'number':

                                                    break;
                                                    case 'array':
                                                        if(isAnArrayOfType('number', arguments[12])) {

                                                        } else {
                                                            throw 'frameUp must be array of numbers';
                                                        }
                                                    break;
                                                    default:
                                                    throw 'new HealthBar syntaxis must be (<Phaser.game game>,<number x>,<number y>, ' + 
                                                    '<Phaser.Sprite keyUp>,<Phaser.Sprite keyDown>,<number delay>,<number changeTime>, ' + 
                                                    '<number xText>(optional),<number yText>(optional),<funtion text>(optional)' + 
                                                    '<textContext>(optional), <string font>(optional), <number fonSize>(optional)' +
                                                    '<arrayOfNumbers frameUp>(optional), <arrayOfNumbers frameDown>(optional)';
                                                }
                                            break;
                                            case 'number':
                                                if(isAnArrayOfType('number', arguments[12])) {

                                                } else {
                                                    throw 'frameUp must be array of numbers';
                                                }
                                            break;
                                            case 'array':
                                                if(isAnArrayOfType('numer',arguments[11])) {
                                                    if(isAnArrayOfType('number', arguments[12])) {

                                                    } else {
                                                        throw 'frameDown must be array of numbers';
                                                    }
                                                } else {
                                                    throw 'frameUp must be array of number';
                                                }
                                            break;
                                            default:
                                                throw 'new HealthBar syntaxis must be (<Phaser.game game>,<number x>,<number y>, ' + 
                                                '<Phaser.Sprite keyUp>,<Phaser.Sprite keyDown>,<number delay>,<number changeTime>, ' + 
                                                '<number xText>(optional),<number yText>(optional),<funtion text>(optional)' + 
                                                '<textContext>(optional), <string font>(optional), <number fonSize>(optional)' +
                                                '<arrayOfNumbers frameUp>(optional), <arrayOfNumbers frameDown>(optional)';
                    
                                        }
                                    break;
                                }
                            } else {
                                throw 'text must be function';
                            }
                        } else {
                            throw 'yText must be number';
                        }
                    break;
                    case 'function':
                        if(typeof(arguments[9])==='string'){
                            if(typeof(arguments[10])==='number') {
                                if(isAnArrayOfType('number', arguments[11])) {
                                    if(isAnArrayOfType('number', arguments[12])) {
                                    } else {
                                        'frameDown must be array of number'
                                    }   
                                } else {
                                    throw 'frameUp must be array of number';
                                }
                            } else {
                                throw 'fontSize must be number';
                            }
                        } else {
                            throw 'font must be string';
                        }
                    break;
                    default:
                        throw 'new HealthBar syntaxis must be (<Phaser.game game>,<number x>,<number y>, ' + 
                        '<Phaser.Sprite keyUp>,<Phaser.Sprite keyDown>,<number delay>,<number changeTime>, ' + 
                        '<number xText>(optional),<number yText>(optional),<funtion text>(optional)' + 
                        '<textContext>(optional), <string font>(optional), <number fonSize>(optional)' +
                        '<arrayOfNumbers frameUp>(optional), <arrayOfNumbers frameDown>(optional)';
                }
            break;
            case 14: 
                if(typeof(arguments[7])==='number') {
                    if(typeof(arguments[8])==='number') {
                        if(typeof(arguments[9])==='function') {
                            switch(typeof(arguments[10])) {
                                case 'string':
                                    if(typeof(arguments[10])==='number') {
                                        if(isAnArrayOfType('number', arguments[11])) {
                                            if(isAnArrayOfType('number', arguments[12])) {
                                            } else {
                                                'frameDown must be array of number'
                                            }   
                                        } else {
                                            throw 'frameUp must be array of number';
                                        }
                                    } else {
                                        throw 'fontSize must be number';
                                    }
                                break;
                                default:
                                    switch(typeof(arguments[11])) {
                                        case 'string':
                                            switch(typeof(arguments[12])) {
                                                case 'number':
                                                    if(isAnArrayOfType('number', arguments[12])) {
                                                    } else {
                                                        'frameDown must be array of number'
                                                    }  
                                                break;
                                                case 'array':
                                                    if(isAnArrayOfType('number', arguments[12])) {
                                                        if(isAnArrayOfType('number', arguments[13])) {
                                                        } else {
                                                            'frameDown must be array of number'
                                                        }   
                                                    } else {
                                                        throw 'frameUp must be array of number';
                                                    }
                                                break;
                                            }
                                        break;
                                        case 'number':
                                            if(isAnArrayOfType('number', arguments[12])) {
                                                if(isAnArrayOfType('number', arguments[13])) {
                                                } else {
                                                    'frameDown must be array of number'
                                                }   
                                            } else {
                                                throw 'frameUp must be array of number';
                                            }
                                        break;
                                    }
                                break;
                            }
                        } else {
                            throw 'text must be function';
                        }
                    } else {
                        throw 'yText must be number';
                    }
                } else {
                    throw  'xText must be number';
                }
            break;
            case 15:
            if(typeof(arguments[7])==='number') {
                if(typeof(arguments[8])==='number') {
                    if(typeof(arguments[9])==='function') {
                        if(typeof(arguments[11])==='string') {
                            if(typeof(arguments[12])==='number') {
                                if(isAnArrayOfType('number',arguments[13])) {
                                    if(isAnArrayOfType('number',arguments[14])) {
                                    
                                    } else {
                                        throw 'frameDown must be array of number';
                                    }
                                } else {
                                    throw 'upDown must be array of number';
                                }
                            } else {
                                throw 'fontSize must be number';
                            }
                        } else {
                            throw  'font must be string';
                        }
                    } else {
                        throw 'text must be function';
                    }
                } else {
                    throw 'yText must be number';
                }
            } else {
                throw  'xText must be number';
            }    
            break;
            default:
                throw 'new HealthBar syntaxis must be (<Phaser.game game>,<number x>,<number y>, ' + 
                '<Phaser.Sprite keyUp>,<Phaser.Sprite keyDown>,<number delay>,<number changeTime>, ' + 
                '<number xText>(optional),<number yText>(optional),<funtion text>(optional)' + 
                '<textContext>(optional), <string font>(optional), <number fonSize>(optional)' +
                '<arrayOfNumbers frameUp>(optional), <arrayOfNumbers frameDown>(optional)';
        }

        this.retardedSprite = game.add.sprite(x, y, keyDown, frameDown);
        this.retardedSprite.height = this.height;
        this.retardedSprite.width = this.sprite.width;
        this.sprite.moveUp();
        if(typeof(delay)==='number'){
            this.delay = delay;
        } else {
            throw 'delay must be numnber';
        }
        if(typeof(changeTime) === 'number') {
            this.changeTime = changeTime;
        } else {
            throw 'changeTime must be number';
        }
        if(typeof(text) === 'function'){
            this.textContext=textContext;
            this.text = text.bind(this.textContext);
            this.bitmapText = this.game.add.bitmapText(x+xText,y+yText,font,text.bind(this.textContext)(), fontSize);
        } else if (text === null){
            this.bitmapText = this.game.add.bitmapText(x+xText,y+yText,font, fontSize);
        } else {
            throw 'text must '
        }
        
        this.bitmapText.aling='center';

        this.subtractor;
        this.percentage
        this.timer=null;

    }

    changePercentage () {
        if(arguments.length===2&&arguments[1] instanceof Character){
            this.percentage = arguments[0].bind(arguments[1])();
        } else{
            throw 'character must be an instance of Character';
        }
        if( this.percentage/ 100 * this.maxWidth!==this.sprite.width) {
            
            this.onPercentageChange.dispatch();
            this.subtractor = (this.retardedSprite.width-this.percentage/100*this.maxWidth)/this.changeTime*10;
            this.bitmapText.text = this.text.bind(this.textContext)();
            this.game.time.events.add(this.delay, this.reduceRetardedBar, this);
            this.sprite.width = this.percentage / 100 * this.maxWidth;
        }
    }
    reduceRetardedBar () {
        if(this.sprite.width!==this.retardedSprite.width) {
            
            this.retardedSprite.width=Math.max(this.sprite.width,this.retardedSprite.width-this.subtractor);
            this.game.time.events.add(10, this.reduceRetardedBar, this);
        }
    }
}

Object.defineProperty(HealthBar.prototype, 'height', {

    get: function() {
        return  this.sprite.scale.y * this.sprite.texture.frame.height;
    },

    set: function(value) {

        this.sprite.scale.y = value / this.sprite.texture.frame.height;
        this.sprite._height = value;
        this.retardedSprite.scale.y = value / this.retardedSprite.texture.frame.height;
        this.retardedSprite._height = value;
    }

})

Object.defineProperty(HealthBar.prototype, 'width', {

    get: function() {
        return  this.sprite.scale.x * this.sprite.texture.frame.width;
    },

    set: function(value) {
        let percentage = this.sprite._width/this.maxWidth;
        this.sprite.scale.x = value / this.sprite.texture.frame.width;
        this.retardedSprite.scale.x = value / this.retardedSprite.texture.frame.width;
        this.sprite._width = percentage*this.maxWidth;
        this.retardedSprite._width = percentage*this.maxWidth;
        this.maxWidth = value; 
    }

})

class CircleBar{
    constructor() {
        this.baseCircle = game.add.sprite(x,y);
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


class CircleWithSectors extends Phaser.Graphics{
    constructor (game,x,y,radius,angles,colors,alphas,antiClockWise,segments) {
        super(game,x,y);
        
        if(angles.length===colors.length){
            
            for(let i = 0; i<angles.length; i++){
                this.beginFill(colors[i],alphas[i]);
                this.arc(0,0,radius,angles[i], angles[(i+1)%angles.length], antiClockWise,segments);
                // Si solucionan el bug de dibujar muchos sectores en un mismo grafico se podrá quitar la funcion thi.drawPolygon.
                this.drawPolygon([0,0,
                    radius*Math.cos(angles[i]),radius*Math.sin(angles[i]),
                    radius*Math.cos(angles[(i+1)%angles.length]),radius*Math.sin(angles[(i+1)%angles.length])]
                    );
            }
            this.endFill();
           
        }
    }
}

Phaser.GameObjectFactory.prototype.circleWithSectors = function (x,y,radius,angles,colors,alphas,antiClockWise,segments, group) {
    if (group === undefined) { group = this.world; }
    return group.add(new CircleWithSectors(this.game,x,y,radius,angles,colors,alphas,antiClockWise,segments));
}
