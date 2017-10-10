module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, ngMetaProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
  ngMetaProvider.useTitleSuffix(true);

  ngMetaProvider.setDefaultTitleSuffix(' | Best BTC Mining and HYIP Investing Monitoring website');

  ngMetaProvider.setDefaultTag('author', 'Hesham El Masry');
  $stateProvider.state('app', {
    url: '/',
    component: 'app',
    data: {
      meta: {
        title: '*** MoneyMe - Hyip Monitor - Weekly Report ***',
        'og:title': '*** MoneyMe - Hyip Monitor - Weekly Report ***',
        description: 'MoneyMe a smart and easy way to invest your money. Their solution is suitable for those who are new to the world of crypto currencies, as well as for cryptocurrency experts and large-scale investors.',
        'og:description': 'MoneyMe a smart and easy way to invest your money. Their solution is suitable for those who are new to the world of crypto currencies, as well as for cryptocurrency experts and large-scale investors.'
      }
    }
  }).state('topBitcoinMining', {
    url: '/top-bitcoin-mining',
    component: 'fountainTopBitcoinMining',
    meta: {
      title: 'MoneyMe - Top Bitcoin Mining',
      'og:title': 'MoneyMe - Top Bitcoin Mining',
      description: 'TOP BITCOIN MINING Programs Description Status Genesis-mining.com ⇒ Genes-mining.com Website ⇒ Genesis-mining.com Review Genesis-mining.com offers you a smart and easy way to invest your money. Their solution is suitable for those who are new to the world of crypto currencies, as well as for cryptocurrency experts and large-scale investors.',
      'og:description': 'TOP BITCOIN MINING Programs Description Status Genesis-mining.com ⇒ Genes-mining.com Website ⇒ Genesis-mining.com Review Genesis-mining.com offers you a smart and easy way to invest your money. Their solution is suitable for those who are new to the world of crypto currencies, as well as for cryptocurrency experts and large-scale investors.'
    }
  }).state('topPayingHyip', {
    url: '/top-paying-hyip',
    component: 'fountainTopPayingHyip',
    meta: {
      title: 'MoneyMe - TOP Paying HYIP',
      'og:title': 'MoneyMe - TOP Paying HYIP',
      description: 'HYIPs are the ones that we invested and monitored. The premium hyip ranking is based on our experience and for your reference only.',
      'og:description': 'HYIPs are the ones that we invested and monitored. The premium hyip ranking is based on our experience and for your reference only.'
    }
  });
}
