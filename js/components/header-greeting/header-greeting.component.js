// const template = require('text!./header-greeting.component.html');
// console.log(template);

class HeaderGreetingClass {
  // static $inject = ['dataservice']

  constructor(dataservice) {
    this.title = 'Tralala';
  }

  $onInit() {
    console.log('component initialized');
  }

  changeTitle() {
    this.title = 'Tralala done';
  }
}

console.log(HeaderGreetingClass);

export default angular
  .module('headerGreetingModule', [])
  .component('headerGreeting', {
    template: `<h1 id="header" ng-click="$ctrl.changeTitle()">{{$ctrl.title}}</h1>`,
    controller: HeaderGreetingClass
  });