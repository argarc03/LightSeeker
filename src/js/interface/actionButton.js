'use strict'
var ReactiveBar = require('./reactiveBar');
var ReactiveRichText = require('./reactiveRichText')
var textFunction = require('./textFunctions');

var ActionButton = function(game, parent, x, y, buttondKey, barKey, callbacks, callbackArguments,callbackContext, percentageFunction, percentageFunctionContext, timeFunction, timeFunctionContext,
    barSignal, totalRechargeSignal, backgroundTint, frameColorOver, frameColorOut, frameColorDown, frameColorDisabled, overFrame, outButtonFrame, downButtonFrame, upButtonFrame, barFrame) {
    Phaser.Group.call(this, game, parent);
    this.button = this.add(new Phaser.Button(game, x, y, buttondKey, function(){}, this, overFrame, outButtonFrame, downButtonFrame, upButtonFrame));
    this.button.tint = backgroundTint;
    this.bar = this.add(new ReactiveBar(game, parent, x, y, barKey, percentageFunction, percentageFunctionContext, barSignal, barFrame));
    this.bar.maskAngle = -90;
    this.externalFrame = this.add(new Phaser.Graphics(game, x, y));
    this.text = this.add(new ReactiveRichText(game,x,y+2,this.button.width, textFunction.Fun(timeFunction, timeFunctionContext),{"font": "Minecraft",
    "fill": "#fff",
    "fontSize": 10,
    "align":"center"},this,[barSignal]));
    this.frameColorOver = frameColorOver;
    this.frameColorOut = frameColorOut;
    this.frameColorDown = frameColorDown;
    this.frameColorDisabled = frameColorDisabled;
    this.callbacks = callbacks;
    this.callbackContext = callbackContext;
    this.callbackArguments = callbackArguments;
    this.pressed = false;
    totalRechargeSignal.add(function(){
        this.button.input.enabled = true;
        
        if(this.button.input.checkPointerOver(this.game.input.activePointer)){
            drawFrame.call(this,this.frameColorOver);
        } else {
            drawFrame.call(this, this.frameColorOut);
        }
    }, this)
    this.button.enabled = true;
    this.button.onInputOver.add(over,this);
    this.button.onInputOut.add(out, this);
    this.button.onInputDown.add(down, this);
    this.button.onInputUp.add(function(){
        this.pressed = false;
        if(this.button.input.checkPointerOver(this.game.input.activePointer)){
           this.press();
        }
    }, this);
}

var drawFrame = function(color) {
    this.externalFrame.clear();
    this.externalFrame.lineStyle(1, color, 1);
    this.externalFrame.drawRect(0,0,this.button.width-1,this.button.height-1);
    this.externalFrame.endFill();
}

var down = function() {    
    this.pressed = true;
    drawFrame.call(this, this.frameColorDown);
}

var over = function() {    
    if(this.pressed){
        drawFrame.call(this, this.frameColorDown);
    } else {
        drawFrame.call(this, this.frameColorOver);
    }
}

var out = function() {
    drawFrame.call(this, this.frameColorOut);
}

ActionButton.prototype = Object.create(Phaser.Group.prototype);
ActionButton.prototype.constructor = ActionButton;

ActionButton.prototype.press = function () {
    this.callbacks.forEach( function(element) {
        element.apply(this.callbackContext ,this.callbackArguments);
    }, this)
    
    this.button.input.enabled = false;
    drawFrame.call(this, this.frameColorDisabled);
}

ActionButton.prototype.deactivate = function () {
    this.button.input.enabled = false;
    drawFrame.call(this, this.frameColorDisabled);
}

module.exports = ActionButton;