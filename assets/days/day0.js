var DayFunctions = require('../../js/manager/dayFunctions');
var textFunctions = require('../../js/interface/textFunctions');

var Day0 = {
    DayGenerator: function (seeker, dayManager) {
        return 'Ritual';
    },
    Ritual: function (seeker, dayManager) {
        return {
            text: ['"El Ritual"\n\n Has sido elegido por el Gran Cristal. De ti dependen todos los habitantes de Spiliag. Tu misión: recolectar y traer contigo todas las Gemas de Luz que puedas. ¡Confiamos en ti ', textFunctions.Fun(function(){return this.name},seeker), '!'],
                image: 'ritualEventImage',
                    options: [{ text: '"Iré, es mi deber"', callback: DayFunctions.Event, arguments: [seeker, dayManager, Day0.RitualYes] },
                              { text: '"Me niego"', callback: DayFunctions.Event, arguments: [seeker, dayManager, Day0.RitualNo] }],
                        music: ''
        }
    },
    RitualYes: function (seeker, dayManager) {
        return {
            text: ['Agradecido, tu pueblo se arrodilla ante tí. Te das la vuelta y partes hacia el peligro, te detienes al cruzar el gran portón, éste se cierra provocando un gran estruendo. Inspiras y liberas el aire justo cuando retomas el paso.'],
                image: 'ritualAcceptedEventImage',
                    options: [{ text: 'Continuar', callback: DayFunctions.NextDay, arguments: [seeker, dayManager] }],
                        music: ''
        }
    },
    RitualNo: function (seeker, dayManager) {
        return {
            text: ['El asombro de todo el pueblo llena las cavernas, el chamán, anonadado, te pregunta:\n-¿Por qué haces ésto?, ahora tienes el poder del Gran Cristal, sin tu ayuda moriremos en poco tiempo.\n Los ojos de todos los que te han acompañado durante tu vida se fijan en tí.'],
                image: 'ritualDeniedEventImage',
                    options: [{ text: '"Entiendo"', callback: DayFunctions.Event, arguments: [seeker, dayManager, Day0.RitualYes] },
                              { text: '"¡He dicho que no!"', callback: DayFunctions.Event, arguments: [seeker, dayManager, Day0.RitualNo] }],
                        music: ''
        }
    }
}

module.exports = Day0;