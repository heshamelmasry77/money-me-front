var angular = require('angular');

var tech = require('./controllers/tech');
var techs = require('./controllers/techs');
require('./styles/weekly_payouts_styles.scss');
var techsModule = 'techs';

module.exports = techsModule;

angular
  .module(techsModule, [])
  .component('fountainTech', tech)
  .component('fountainTechs', techs);
