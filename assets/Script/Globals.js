let my = {};
window.my = my;

const Emitter = require('Emitter');
my.emitter = new Emitter();

//model
my.model = {};
my.model.breaker = require('BreakerModel');