var DayFunctions = require('../../js/manager/dayFunctions');
var Enemies = require('../enemies/enemies.json');

var Day3 = {
    DayGenerator: function (seeker, dayManager) {
        return 'CuevaFungimantica';
    },
    CuevaFungimantica: function (seeker, dayManager) {
        return {
            text: ['"Cueva misteriosa"\n\nTe encuentras con una cueva que desprende un fuerte olor a humedad. El terreno se encuentra cubierto de una sustancia gelatinosa.'],
            image: 'eventImageError',
            options: [{
                text: 'Investigar', callback: DayFunctions.Event, arguments: [seeker,
                    dayManager,
                    Day3.CuevaFungimanticaInvestigar]
            },
            {
                text: 'Evitar', callback: DayFunctions.Event, arguments: [seeker,
                    dayManager,
                    Day3.CuevaFungimanticaEvitar
                ]
            }
            ],
            music: 'intro'
        }
    },

    CuevaFungimanticaInvestigar: function (seeker, dayManager) {
        return {
            text: ['Alcanzado el final de la cavidad subterránea, observas una figura humanoide apoyada en la pared. Cuando te aproximas, te percatas de que es un cadáver.',
        'De su cinturón, cuelga un vial con un icor verde.'],
            image: 'eventImageError',
            options: [{ text: 'Guardarlo', callback: DayFunctions.Event, arguments: [seeker,
                dayManager,
                Day3.CuevaFungimanticaVolver] },
            { text: 'Salir', callback: DayFunctions.Event, arguments: [seeker,
                dayManager,
                Day3.CuevaFungimanticaVolver] }
            ],
            music: 'intro'
        }
    },

    CuevaFungimanticaEvitar: function (seeker, dayManager) {
        return {
            text: ['Pasas de largo sin darle importancia a lo que pudiese encontrarse dentro.'],
            image: 'eventImageError',
            options: [{ text: 'Continuar', callback: DayFunctions.NextDay, arguments: [seeker, dayManager] }],
            music: 'intro'
        }
    },

    CuevaFungimanticaVolver: function (seeker, dayManager) {
        return {
            text: ['Cuando estás a punto de salir de la cueva, del suelo emerge un enorme hongo que obstaculiza la salida.',
            'Cuando te acercas un poco más, unas espinas salen de su pileo. Parece que tendrás que acabar con él si quieres proseguir tu camino.'],
            image: 'eventImageError',
            options: [{
                text: 'Combatir', callback: DayFunctions.Combat, arguments: [seeker,
                    dayManager,
                    Enemies.Fungi,
                    'waterbackground',
                    'watertheme',
                    function () { DayFunctions.NextDay(seeker, dayManager) }
                ]
            }
            ],
            music: 'intro'
        }
    }
}

module.exports = Day3;