'use strict';



class OptionMenu extends Phaser.Group {
    constructor(game, buttonsMenu, parent) {
        super(game, parent);

        buttonsMenu.forEach(element => {
            let b = require('./buttonMenu.js');
            b = this.add(new ButtonMenu(this.game,...element));
            b.onInputOver.add(this.over,this,[b]);
        }, this);

        buttonsMenu.forEach(element => {
            this.children.left = this.children.find(function(element2){return element2.name===element[element.length-1].left;});
            this.children.right = this.children.find(function(element2){return element2.name===element[element.length-1].right;});
            this.children.up = this.children.find(function(element2){return element2.name===element[element.length-1].up;});
            this.children.down = this.children.find(function(element2){return element2.name===element[element.length-1].down;});
        },this);

        this.currentButton = buttonsMenu[0];
    }

    goLeft() {
        if (this.currentButton.goLeft() !== undefined) {
            this.currentButton.onInputOut.dispatch();
            this.currentButton = this.currentButton.goLeft();
            this.currentButton.onInputOver.dispatch();
        }
    }
    goRight() {
        if (this.currentButton.goRight() !== undefined) {
            this.currentButton.onInputOut.dispatch();
            this.currentButton = this.currentButton.goRight();
            this.currentButton.onInputOver.dispatch();
        }
    }
    goUp() {
        if (this.currentButton.goUp() !== undefined) {
            this.currentButton.onInputOut.dispatch();
            this.currentButton = this.currentButton.goUp();
            this.currentButton.onInputOver.dispatch();
        }
    }
    goDown() {
        if (this.currentButton.goDown() !== undefined) {
            this.currentButton.onInputOut.dispatch();
            this.currentButton = this.currentButton.goDown();
            this.currentButton.onInputOver.dispatch();
        }
    }

    over(button) {
        if (this.children.includes(button) && this.currentButton !== button) {
            this.currentButton.onInputOut.dispatch();
            this.currentButton = button;
        }
    }

    select() {
        this.currentButton.select();
    }
    back() {
        this.buttons.forEach(element => {
            element.deactivate();
        });
    }

    enter() {
        this.buttons.forEach(element => {
            element.activate();
        });
    }
}

Phaser.GameObjectFactory.prototype.optionMenu = function (buttonsMenu, group) {
    if (group === undefined) { group = this.world; }
    return group.add(new OptionMenu(this.game,buttonsMenu, group));
}