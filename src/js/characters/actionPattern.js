'use strict'

var ActionPattern = function(pattern, seeker, thisCaracter) {
    this.nextAction = function () {
        var action = this.actions[pattern[this.doneActions]]
        this.doneActions = (this.doneActions) % pattern.length;
        return action;
    }
    this.doneActions = 0; 
}//(number){

ActionPattern.prototype.nextAction = function() {
    return null;
}

module.exports = ActionPattern;