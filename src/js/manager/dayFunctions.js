'use strict'

var DayFunctions = {
    NextDay: function(seeker, dayManager) {
        seeker.day++;
        dayManager.newDay();
    },
    Combat: function(seeker, dayManager, enemy, background, music, end) {
        dayManager._game.state.start('combat',true, false, seeker, dayManager, enemy, background, music, end);
    }
}

module.exports = DayFunctions;