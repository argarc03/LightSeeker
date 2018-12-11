var DayFunctions = require('../../js/manager/dayFunctions');

var Day0 = {
    DayGenerator: function(seeker, dayManager) {
        return 'Luces';
    },
    Luces: {
        text: 'Esto es un texto de prueba2',
        image: 'eventImageError',
        options: [{text: 'Seguir',callback: DayFunctions.NextDay, arguments:[]}],
        music: 'intro'
    }
}

module.exports = Day0;