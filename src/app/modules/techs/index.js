var angular = require('angular');

var topBicoinMining = require('./controllers/TopBitcoinMiningController');
var weeklyPayouts = require('./controllers/WeeklyPayoutsController');
require('./styles/weekly_payouts_styles.scss');
require('./styles/top_bitcoin_mining_styles.scss');

var techsModule = 'techs';

module.exports = techsModule;

angular
  .module(techsModule, [])
  .component('fountainTopBitcoinMining', topBicoinMining)
  .component('fountainWeeklyPayouts', weeklyPayouts);
