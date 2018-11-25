'use strict'

var bossPattern = function(character, seeker) { 
    if(seeker.hp > 15)
        return 'attack';
    else
        return 'block';
};

var patterns = {
    normal: [ {action: "idle", repetitions: 5}, {action: "attack"}, {action: "idle", repetitions: 4},  {action: "block"}],
    anormal: [{action: "idle"}],
    boss: [{action: bossPattern}]
}



module.exports = patterns;