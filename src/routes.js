module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, ngMetaProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
  ngMetaProvider.useTitleSuffix(true);

  ngMetaProvider.setDefaultTitleSuffix(' | Best Website on the Internet!');

  ngMetaProvider.setDefaultTag('author', 'John Smith');
  $stateProvider.state('app', {
    url: '/',
    component: 'app',
    data: {
      meta: {
        title: 'Pet Vaccinations - All You Need To Know | PawSquad',
        'og:title': 'All You Need To Know About Pet Vaccinations',
        description: 'Useful information about Routine Vaccines and Boosters for dogs and cats,   including start vaccines for puppies and kittens.',
        'og:description': 'Useful information about Routine Vaccines and Boosters for dogs and cats,   including start vaccines for puppies and kittens.'
      }
    }
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
