'use strict'

var Item = function(name, description, key, active, utilize, quantity, consume) {
    this.name = name;
    this.description = description;
    this.key = key;
    this.active = active;
    this.utilize = utilize;
    this.quantity = quantity;
    this.consume = consume;
}

Item.prototype.destroy = function() {

}

module.exports = Item;