module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('app', {
    url: '/',
    component: 'app'
  }).state('topBitcoinMining', {
    url: '/top-bitcoin-mining',
    component: 'fountainTopBitcoinMining'
  }).state('topPayingHyip', {
    url: '/top-paying-hyip',
    component: 'fountainTopPayingHyip'
  });
}
