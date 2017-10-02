var angular = require('angular');

var topBicoinMining = require('./controllers/TopBitcoinMiningController');
var topPayingHyip = require('./controllers/TopPayingHyipController');
var weeklyPayouts = require('./controllers/WeeklyPayoutsController');
require('./styles/weekly_payouts_styles.scss');
require('./styles/top_bitcoin_mining_styles.scss');
require('./styles/top_paying_hyip_styles.scss');

var techsModule = 'techs';

module.exports = techsModule;

angular
  .module(techsModule, [])
  .component('fountainTopBitcoinMining', topBicoinMining)
  .component('fountainTopPayingHyip', topPayingHyip)
  .component('fountainWeeklyPayouts', weeklyPayouts);
