var angular = require('angular');

var techsModule = require('./app/modules/techs/index');
require('angular-ui-router');
var routesConfig = require('./routes');

var main = require('./app/main');
var header = require('./app/shared/header');
var title = require('./app/shared/title');
var footer = require('./app/shared/footer');
import 'bootstrap';
require('./index.scss');

angular
  .module('app', [techsModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
