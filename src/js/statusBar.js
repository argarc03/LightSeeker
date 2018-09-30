'use strict';


// Es un puto caos y aun no está protegido, así que si hay algún problema y no estoy disponible... ¯\_(ツ)_/¯
class Bar {
    constructor(game, x, y, key, frame=null) {
        this.game = game;
        this.sprite = game.add.sprite(x,y,key,frame);
        this.maxWidth = this.sprite.width; 
        this.onPercentageChange = new Phaser.Signal();
        
    }
    // hay que hacer un "set" para cambiar el tamaño de manera dinamica

    changePercentage () {
        
        // Lo hago así porque no sé pasar por referencia
        if(arguments.length===2 )
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

        this.sprite.scale.y = value / this.sprite.texture.frame.height;
        this.sprite._height = value;
    }

})

Object.defineProperty(Bar.prototype, 'width', {

    get: function() {
        return  this.scale.x * this.sprite.texture.frame.width;
    },

    set: function(value) {
        let percentage = this.sprite._width/this.maxWidth;

        this.sprite.scale.x = value / this.sprite.texture.frame.width;
        this.sprite._width = percentage*this.maxWidth;

        this.maxWidth = value; 
    }

})

class HealthBar extends Bar {
    constructor(game,x,y,keyUp,keyDown,delay,changeTime, xText= 0, yText = 0, text=null, textContext=null, font=null, fontSize = null,frameUp=null,frameDown=null) {
        super(game,x,y,keyUp,frameUp);
        
        this.retardedSprite = game.add.sprite(x, y, keyDown, frameDown);
        this.retardedSprite.height = this.height;
        this.retardedSprite.width = this.sprite.width;
        this.sprite.moveUp();
        this.changeTime = changeTime;
        this.delay = delay;
        this.textContext=textContext;
        this.text = text.bind(this.textContext);
        this.bitmapText = this.game.add.bitmapText(x+xText,y+yText,font,text.bind(this.textContext)(), fontSize);
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

class CircleWithSectors extends Phaser.Graphics{
    constructor (game,x,y,radius,angles,colors,antiClockWise,segments) {
        super(game,x,y);
        
        if(angles.length===colors.length){
            this.lineStyle(0);
            for(let i = 0; i<angles.length; i++){
                this.beginFill(colors[i]);
                this.arc(0,0,radius,angles[i], angles[(i+1)%angles.length], antiClockWise,segments);
                this.endFill();
            }
           
        }
    }
}
