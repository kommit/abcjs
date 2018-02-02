const animation = require('./src/api/abc_animation');
const tunebook = require('./src/api/abc_tunebook');

let abcjs = {};

abcjs.signature = "abcjs-xyz v3.3.1";

Object.keys(animation).forEach(function (key) {
	abcjs[key] = animation[key];
});

Object.keys(tunebook).forEach(function (key) {
	abcjs[key] = tunebook[key];
});

abcjs.renderAbc = require('./src/api/abc_tunebook_svg');
abcjs.sequence = require('./src/midi/abc_midi_sequencer.js');
abcjs.flatten = require('./src/midi/abc_midi_flattener.js');

module.exports = abcjs;
