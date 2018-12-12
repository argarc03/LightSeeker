var DayFunctions = require('../../js/manager/dayFunctions');
var Enemies = require('../enemies/enemies.json');

var Day1 = {
    DayGenerator: function (seeker, dayManager) {
        return 'EcoDesafortunado';
    },
    EcoDesafortunado: function (seeker, dayManager) {
        return {
            text: ['"Eco desafortunado"\n\nCuando te das cuenta ya estás muy lejos de tu hogar...\n',
                'Una enorme grieta en el suelo se interpone en tu camino. Escuchas unos ruidos que provienen del fondo. Se podría bordearla o explorar su interior.'],
            image: 'spiderEventImage',
            options: [{
                text: 'Intentar cruzar', callback: DayFunctions.Event, arguments: [seeker,
                    dayManager,
                    Day1.EcoDesafortunadoCruzar]
            },
            {
                text: 'Explorar', callback: DayFunctions.Event, arguments: [seeker,
                    dayManager,
                    Day1.EcoDesafortunadoExplorar
                ]
            }
            ],
            music: 'intro'
        }
    },

    EcoDesafortunadoCruzar: function (seeker, dayManager) {
        return {
            text: ['Consigues saltar el acantilado sin ningún percance y prosigues tu viaje.'],
            image: 'spiderEventImage',
            options: [{ text: 'Continuar', callback: DayFunctions.NextDay, arguments: [seeker, dayManager] }
            ],
            music: 'intro'
        }
    },

    
    EcoDesafortunadoExplorar: function (seeker, dayManager) {
        return {
            text: ['¡Una criatura aparece de entre las sombras y se abalanza contra ti!'],
            image: 'spiderAttackEventImage',
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

module.exports = Day1;