var angular = require('angular');

var techsModule = require('./app/modules/techs/index');
require('angular-ui-router');
require('expose-loader?$!jquery');
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
  .component('fountainFooter', footer)
  .run(function ($transitions, $window) {
    $transitions.onSuccess({}, transition => {
      let title = transition.to().title;
      if (title) {
        if (title instanceof Function) {
          title = title.call(transition.to(), transition.params());
        }
        $window.document.title = title;
      }
    });
  });

