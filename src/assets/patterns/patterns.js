'use strict'

var patterns = {
    normal: [{action: "attack", repetitions: 2}, {action: "block"}, {action: "idle", repetitions: 5}],
    anormal: [{action: "idle"}],
    boss: [{action: "myFunction"}]
}

module.exports = patterns;