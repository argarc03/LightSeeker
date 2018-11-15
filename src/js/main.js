'use strict';

//PREGUNTAS
// Aún se deben controlar los sonidos

var IntroScene = require('./scenes/intro_scene.js');
var MainMenuScene = require('./scenes/mainmenu_scene.js');
var CombatScene = require('./scenes/combat_scene.js');
var EventScene = require('./scenes/event_scene.js');
var CreditsScene = require('./scenes/credits_scene.js');
var SettingsScene = require('./scenes/settings_scene.js');

 var webFontLoading = {
  active: function() {
    var game = new Phaser.Game(200, 150, Phaser.AUTO, 'game');
    webFontLoading.game = game;
    game.state.add('boot', BootScene);
    game.state.add('preloader', PreloaderScene);
    game.state.add('intro', IntroScene);
    game.state.add('mainmenu', MainMenuScene);
    game.state.add('combat', CombatScene);
    game.state.add('event', EventScene);
    game.state.add('credits', CreditsScene);
    game.state.add('settings', SettingsScene);
    game.state.start('boot');
  },
  custom: {
    families: ['Minecraft'],
    urls: ["assets/fonts/webFonts/stylesheet.css"]
  }
};

var WebFont = require('webfontloader');


var BootScene = {
  preload: function () {
    // load here assets required for the loading screen
    this.game.load.image('preloader_bar', 'temporal%20images/preloader_bar.png');
  },

  create: function () {
    this.game.state.start('preloader');
  }
};


var PreloaderScene = {
  preload: function () {
    // scale the game 4x
    this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    this.game.scale.setUserScale(4, 4);

    // enable crisp rendering
    this.game.renderer.renderSession.roundPixels = true;
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
    this.loadingBar = this.game.add.sprite(0, 240, 'preloader_bar');
    this.loadingBar.anchor.setTo(0, 0.5);
    this.load.setPreloadSprite(this.loadingBar);
    // TODO: load here the assets for the game
    //IMAGES
        this.game.load.script('filter', 'https://cdn.rawgit.com/photonstorm/phaser-ce/master/filters/Pixelate.js');
      //INTERFACE
        this.game.load.image('interface','assets/images/interface/combatinterfaceback.png');
        //Cursor
        this.game.load.image('cursor','assets/images/interface/cursor.png');
        this.game.load.image('infoCursor','assets/images/interface/infoCursor.png');
        this.game.load.image('selectCursor','assets/images/interface/selectCursor.png');
        //HealthBar
        this.game.load.image('healthBar','assets/images/interface/healthBar.png');
        this.game.load.image('damageBar','assets/images/interface/damageBar.png');
        this.game.load.image('emptyBar','assets/images/interface/emptyBar.png');
        this.game.load.image('healBar','assets/images/interface/healBar.png')
        this.game.load.image('frameBar','assets/images/interface/frameBar.png');
        //Action Icon
        this.game.load.image('attackIcon','assets/images/interface/attackIcon.png');
        this.game.load.image('blockIcon','assets/images/interface/blockIcon.png');
        //Items
        this.game.load.image('itemIcon','assets/images/interface/itemIcon.png');
        this.game.load.image('itemIcon2','assets/images/interface/itemIcon2.png');
        //Stats Icons
        this.game.load.image('damageIcon','assets/images/interface/damageIcon.png');
        this.game.load.image('defenseIcon','assets/images/interface/defenseIcon.png');
        this.game.load.image('speedIcon','assets/images/interface/speedIcon.png');
        this.game.load.image('healthIcon','assets/images/interface/healthIcon.png');
        this.game.load.image('perceptionIcon','assets/images/interface/perceptionIcon.png');
        //Buttons
        this.game.load.spritesheet('button','assets/images/interface/button.png',32,32);
      //BACKGROUNDS
      this.game.load.image('mainmenubackground', 'assets/images/backgrounds/mainmenubackground.png');
      this.game.load.image('watercombatbackground', 'assets/images/backgrounds/watercombatbackground.png');
      //PARTICLES
      this.game.load.image('redBlood','assets/images/particles/redBlood.png');
      this.game.load.image('greenBlood','assets/images/particles/greenBlood.png');
      this.game.load.image('blueBlood','assets/images/particles/blueBlood.png');
      this.game.load.spritesheet('crystalShines','assets/images/particles/crystalShines.png',3,3);
      //CHARACTERS
        //Seeker
        this.game.load.spritesheet('seekerAnimations','assets/images/seeker/seekerAnimations.png',80,120);
        //Enemies
        this.game.load.spritesheet('spiderAnimations', 'assets/images/enemies/spiderAnimations.png',80,120);
        this.game.load.spritesheet('wormAnimations', 'assets/images/enemies/WormAlpha.png',80,120);
    //SOUNDS
      //Effects
      this.load.audio('attacking', ['assets/sounds/attacking.wav']);
      this.load.audio('preAttacking', ['assets/sounds/preAttacking.wav']);
      this.load.audio('blocking', ['assets/sounds/blocking.wav']);
      this.load.audio('button', ['assets/sounds/buttonPressed.wav']);
      //Music
      this.load.audio('boss', ['assets/music/bosstheme.wav']);
      this.load.audio('firetheme', ['assets/music/firetheme.wav']);
      this.load.audio('shoptheme', ['assets/music/shoptheme.wav']);
      this.load.audio('watertheme', ['assets/music/watertheme.wav']);
      this.load.audio('credits', ['assets/music/creditstheme.wav']);

  },

  create: function () {
      this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL

      PreloaderScene.game.state.start('combat');
  }

};
WebFont.load(webFontLoading);

window.onload = function () {
  
};

var OptionMenu = require('./interface/optionMenu');
var ButtonMenu = require('./interface/buttonMenu');

Phaser.GameObjectFactory.prototype.optionMenu = function (buttonsMenu, group) {
  if (group === undefined) { group = this.world; }
  return group.add(new OptionMenu(this.game, buttonsMenu, group));
}


Phaser.GameObjectFactory.prototype.buttonMenu = function (name, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame, group) {
  if (group === undefined) { group = this.world; }
  return group.add(new ButtonMenu(this.game, name, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame));
}
// MIRAR COMO METER ESTO EN OTRO .JS Y EJECUTARLO DESDE AQUI.
var Phaser = require('phaser');

var Character = require('./characters/character');
var Seeker = require('./characters/seeker');
var Bar = require('./interface/bar');
var CircleWithSectors = require('./interface/circleWithSectors');
var HealthBar = require('./interface/healthBar');
var ReactiveBar = require('./interface/reactiveBar');
var ReactiveContinuousBar = require('./interface/reactiveContinuousBar');
var ReactiveRichText = require('./interface/reactiveRichText');
var RichText = require('./interface/richText');
var ActionButton = require('./interface/actionButton');
var SeekerCombatHUD = require('./interface/seekerCombatHUD');
var ScrollText = require('./interface/scrollText');
var EventHUD = require('./interface/eventHUD');
/**
 * 
 */
Phaser.GameObjectFactory.prototype.character = function (x, y, name, stats, spriteSheet, emitter, group) {
    if (group === undefined) { group = this.world; }
    return group.add(new Character(this.game, x, y, name, stats, spriteSheet, emitter));
}

Phaser.GameObjectFactory.prototype.seeker = function (x, y, name, stats, spriteSheet, emitter, group) {
    if (group === undefined) { group = this.world; }
    return group.add(new Seeker(this.game, x, y, name, stats, spriteSheet, emitter));
}

Phaser.GameObjectFactory.prototype.bar = function (x, y, key, frame, parent = this.game.world) {
    return new Bar(this.game, parent, x, y, key, frame);
}

Phaser.GameObjectFactory.prototype.circleWithSectors = function (x, y, radius, angles, colors, alphas, antiClockWise, segments, group) {
    if (group === undefined) { group = this.world; }
    return group.add(new CircleWithSectors(this.game, x, y, radius, angles, colors, alphas, antiClockWise, segments));
}

Phaser.GameObjectFactory.prototype.healthBar = function (x, y, character, voidKey, healKey, damageKey, healthKey, style, delay, speed, voidFrame = null, healFrame = null, damageFrame = null, healthFrame = null, parent = this.game.world) {
    return new HealthBar(this.game, x, y, character, voidKey, healKey, damageKey, healthKey, style, delay, speed, voidFrame, healFrame, damageFrame, healthFrame, parent);
}

Phaser.GameObjectFactory.prototype.reactiveBar = function (parent, x, y, key, percentageFunction, functionContext, signal, frame) {
    return new ReactiveBar(this.game, parent, x, y, key, percentageFunction, functionContext, signal, frame);
}

Phaser.GameObjectFactory.prototype.reactiveContinuousBar = function (parent, x, y, key, percentageFunction, functionContext, signal, decreaseDelay, increaseDelay, decreaseSpeed, increaseSpeed, frame = null) {
    return new ReactiveContinuousBar(this.game, parent, x, y, key, percentageFunction, functionContext, signal, decreaseDelay, increaseDelay, decreaseSpeed, increaseSpeed, frame);
}

Phaser.GameObjectFactory.prototype.reactiveRichText = function (x, y, lineWidth, text, style, signal, group) {
    if (group === undefined) { group = this.world; }
    return group.add(new ReactiveRichText(this.game, x, y, lineWidth, text, style, group, signal));
}

Phaser.GameObjectFactory.prototype.richText = function (x, y, lineWidth, text, style = {}, group = this.game.world) {
    return new RichText(this.game, x, y, lineWidth, text, style, group);
}

Phaser.GameObjectFactory.prototype.actionButton = function(x, y, buttondKey, barKey, callback, callbackArguments, callbackContext, percentageFunction, percentageFunctionContext, timeFunction, timeFunctionContext,
    barSignal, totalRechargeSignal, backgroundTint, frameColorOver, frameColorOut, frameColorDown, frameColorDisabled, overFrame=null, outButtonFrame=null, downButtonFrame=null, upButtonFrame=null, barFrame=null, parent = this.game.world) {
    return new ActionButton(this.game, parent, x, y, buttondKey, barKey, callback, callbackArguments, callbackContext, percentageFunction, percentageFunctionContext, timeFunction, timeFunctionContext,
        barSignal, totalRechargeSignal, backgroundTint, frameColorOver, frameColorOut, frameColorDown, frameColorDisabled, overFrame, outButtonFrame, downButtonFrame, upButtonFrame, barFrame);
}

Phaser.GameObjectFactory.prototype.seekerCombatHUD = function(x, y, seeker, enemy, parent = this.game.world) {
    return new SeekerCombatHUD(this.game, parent, x, y, seeker, enemy);
}

Phaser.GameObjectFactory.prototype.scrollText = function(x,y,width,height,text, style, parent = this.game.world) {
    return new ScrollText(this.game, parent,x,y,width,height,text, style);
}

Phaser.GameObjectFactory.prototype.eventHUD = function(seeker, text, options, parent = this.game.world) {
    return new EventHUD(this.game, parent, seeker, text, options);
}