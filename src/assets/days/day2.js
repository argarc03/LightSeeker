var DayFunctions = require('../../js/manager/dayFunctions');
var Enemies = require('../enemies/enemies.json');

var Day2 = {
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
                    day2.CuevaFungimanticaInvestigar]
            },
            {
                text: 'Evitar', callback: DayFunctions.Event, arguments: [seeker,
                    dayManager,
                    day2.CuevaFungimanticaEvitar
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
            options: [{ text: 'Guardarlo', callback: DayFunctions.NextDay, arguments: [seeker, dayManager] },
            { text: 'Salir', callback: DayFunctions.Combat, arguments: [seeker, dayManager] }
            ],
            music: 'intro'
        }
    },

    CuevaFungimanticaEvitar: function (seeker, dayManager) {
        return {
            text: ['¡Una criatura aparece de entre las sombras y se abalanza contra ti!'],
            image: 'eventImageError',
            options: [{
                text: 'Combatir', callback: DayFunctions.Combat, arguments: [seeker,
                    dayManager,
                    Enemies.Spider,
                    'combatbackground',
                    'firetheme',
                    function () { DayFunctions.NextDay(seeker, dayManager) }
                ]
            }
            ],
            music: 'intro'
        }
    }
}

module.exports = Day2;