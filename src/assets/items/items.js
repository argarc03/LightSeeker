'use strict'

var Item = require('../../js/characters/item');

var Items = {
    healthPotion: new Item('Heal Potion', 'Restores 3hp.', 'itemIcon', function (character, enemy) {
        this.heal(3);
      }),
      strengthPotion: new Item('Strenght Potion', 'Increase damage slightly.', 'itemIcon2', function () {
        this.stats.tempDamage+=3;
      }),
      speedPotion: new Item('Speed Potion', 'Increase speed slightly.', 'itemIcon2', function () {
        this.stats.tempSpeed+=3;
      }),
}

module.exports = Items;

