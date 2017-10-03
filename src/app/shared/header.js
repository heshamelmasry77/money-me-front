module.exports = {
  template: require('./header.html'),
  controller: headerController
};

/** @ngInject */
function headerController() {
  var vm = this;
  vm.date = new Date();
}
