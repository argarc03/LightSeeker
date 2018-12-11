var DayFunctions = require('../../js/manager/dayFunctions');
var textFunctions = require('../../js/interface/textFunctions');

var Day0 = {
    DayGenerator: function (seeker, dayManager) {
        return 'Ritual';
    },
    Ritual: function (seeker, dayManager) {

        return {
            text: ['"El Ritual"\n\n Has sido elegido por el Gran Cristal. De ti depende todos los habitantes de Spiliag. Tu misión: recolectar y traer contigo todas las Gemas de Luz que puedas. ¡Confiamos en ti ', textFunctions.Fun(function(){return this.name},seeker), '!'],
                image: 'eventImageError',
                    options: [{ text: 'Empezar Búsqueda', callback: DayFunctions.NextDay, arguments: [seeker, dayManager] }],
                        music: 'intro'
        }
    }
}

module.exports = Day0;