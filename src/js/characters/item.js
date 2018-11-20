'use strict'

var _use = function(use, that) {
    var that;
    var cuse = use;
    return function() {
        use.apply(this);
        that.onUse.dispatch();
    }
}

var Item = function(name, description, key, use) {
    this.name = name;
    this.description = description;
    this.key = key;
    this.onUse = new Phaser.Signal();
    this.use = _use(use, this);
    
    console.log(arguments)
}

Item.prototype.destroy = function() {

}

module.exports = Item;