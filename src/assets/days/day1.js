var DayFunctions = require('../../js/manager/dayFunctions');
var Enemies = require('../enemies/enemies.json');

var Day0 = {
    DayGenerator: function (seeker, dayManager) {
        return 'Luces';
    },
    Luces: function (seeker, dayManager) {
        return {
            text: 'Esto es un texto de prueba2',
            image: 'eventImageError',
            options: [ { text: 'Seguir', callback: DayFunctions.NextDay, arguments: [seeker, dayManager] },
                       { text: 'Combatir', callback: DayFunctions.Combat, arguments:[   seeker, 
                                                                                        dayManager, 
                                                                                        Enemies.LordRagno, 
                                                                                        'combatbackground', 
                                                                                        'bosstheme', 
                                                                                        function(){DayFunctions.NextDay(seeker, dayManager)}
                        ]}
                ],
            music: 'intro'
        }
    }
}

module.exports = Day0;