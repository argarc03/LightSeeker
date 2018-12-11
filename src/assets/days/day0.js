var DayFunctions = require('../../js/manager/dayFunctions');

var Day0 = {
    DayGenerator: function(seeker, dayManager) {
        return 'Ritual';
    },
    Ritual: {
        text: 'Esto es un texto de prueba',
        image: 'eventImageError',
        options: [{text: 'Empezar Búsqueda',callback: DayFunctions.NextDay, arguments:[]}],
        music: 'intro'
    }
}

module.exports = Day0;