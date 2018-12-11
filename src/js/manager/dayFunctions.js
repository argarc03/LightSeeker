'use strict'

var DayFunctions = {
    NextDay: function(seeker, game, dayManager) {
        seeker.day++;
        dayManager.newDay();
    }
}

module.exports = DayFunctions;