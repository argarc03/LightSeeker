'use strict'

var bossPattern = function(character, seeker) { 
    if(seeker.hp > 15)
        return 'attack';
    else
        return 'block';
};

var patterns = {
    spider: [ {action: "idle", repetitions: 4}, {action: "block"}, {action: "idle", repetitions: 4},  {action: "attack"},
        {action: "idle", repetitions: 4}, {action: "block"}, {action: "idle", repetitions: 4},  {action: "attack"},
        {action: "idle", repetitions: 4}, {action: "block"}, {action: "idle", repetitions: 8},  {action: "attack", repetitions: 2} ],
    lordRagno: [ {action: "idle", repetitions: 5}, {action: "attack"}, {action: "idle", repetitions: 4},  {action: "block"}],

    fungi: [{action: "idle", repetitions: 4},  {action: "thornsBlock"}],
    anormal: [{action: "idle"}],
    boss: [{action: bossPattern}]
}



module.exports = patterns;