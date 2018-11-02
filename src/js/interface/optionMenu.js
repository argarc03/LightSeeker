'use strict';

require('./buttonMenu');


class OptionMenu extends Phaser.Group {
    constructor(game, buttonsMenu, parent) {
        super(game, parent);

        buttonsMenu.forEach(element => {
            let b = this.add(new ButtonMenu(this.game,...element.slice(0,element.length-1)));
            b.onInputOver.add(this.over,this,[b]);
        }, this);
        console.log ('NOOOOOOOOO',this.children[0].x);
        buttonsMenu.forEach(element => {
            let child = this.children.find(function(element2){return element2.name===element[0]});
            
            child.leftButton = 
                this.children.find(function(element2){return element2.name===element[element.length-1].leftButton});
            child.rightButton = 
                this.children.find(function(element2){return element2.name===element[element.length-1].rightButton});
            child.upButton = 
                this.children.find(function(element2){return element2.name===element[element.length-1].upButton});
            child.downButton = 
                this.children.find(function(element2){return element2.name===element[element.length-1].downButton});
        },this);
        console.log ('SIIIIIII',this.children[0].x);
        this.currentButton = this.children[0];
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