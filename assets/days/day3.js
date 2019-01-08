var DayFunctions = require('../../js/manager/dayFunctions');
var Enemies = require('../enemies/enemies.json');

var Day3 = {
    DayGenerator: function (seeker, dayManager) {
        return 'EncuentroLordRagno';
    },
    EncuentroLordRagno: function (seeker, dayManager) {
        return {
            text: ['Caminando por los largos y oscuros túneles llegas a una gran sala donde el eco hace que tus pisadas se repitan en la lejanía. Notas la humedad del aire en la piel. En el centro de la sala se encuentra una montaña solitaria, rodeada de lo que parecen ser huevos de alguna criatura. Sin pensarlo dos veces, decides subir la gran colina con afán de encontrar comida y refugio.'],
            image: 'lordRagno1EventImage',
            options: [{ text: 'Continuar', callback: DayFunctions.Event, arguments: [seeker,
                dayManager,
                Day3.EncuentroLordRagno2] }],
            music: 'textboss'
        }
    },
    EncuentroLordRagno2: function (seeker, dayManager) {
        return {
            text: ['Exhausto por la escalada, consigues por fin llegar a la cima. Te das cuenta de que la colina en realidad es un volcán. Decides asomarte por el cráter, el cual emite una columna de humo caliente y un hedor a sangre...'],
            image: 'lordRagno2EventImage',
            options: [{ text: 'Continuar', callback: DayFunctions.Event, arguments: [seeker,
                dayManager,
                Day3.EncuentroLordRagno3] }],
            music: ''
        }
    },
    EncuentroLordRagno3: function (seeker, dayManager) {
        return {
            text: ['Ves brillar en el fondo del agujero una luz roja que poco a poco se hace más y más grande... ¡Lord Ragno, Señor de las Arañas, te ataca!'],
            image: 'lordRagno3EventImage',
            options: [{
                text: 'Combatir', callback: DayFunctions.Combat, arguments: [seeker,
                    dayManager,
                    Enemies.LordRagno,
                    'firecombatbackground',
                    'bosstheme',
                    function () { DayFunctions.NextDay(seeker, dayManager) }
                ]
            }
            ],
            music: ''
        }
    }

    /*CuevaFungimanticaInvestigar: function (seeker, dayManager) {
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
    }*/
}

module.exports = Day3;