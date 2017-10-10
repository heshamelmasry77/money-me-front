module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('app', {
    url: '/',
    component: 'app',
    title: '*** MoneyMe - Hyip Monitor - Weekly Report ***'
  }).state('topBitcoinMining', {
    url: '/top-bitcoin-mining',
    component: 'fountainTopBitcoinMining',
    title: 'MoneyMe - Top Bitcoin Mining'
  }).state('topPayingHyip', {
    url: '/top-paying-hyip',
    component: 'fountainTopPayingHyip',
    title: 'MoneyMe - TOP Paying HYIP'
  });
}
