import angular from 'angular';

class Dataservice {
  constructor() {
    console.log('service created');
  }

  loadBoards() {
    var bord=JSON.parse(localStorage.getItem('boards'));
     if(bord)
      {
        return bord;
      }else{
        return [];
      }
  }
  saveBoards(boards){
    localStorage.removeItem('boards');
    localStorage.setItem('boards',JSON.stringify(boards));
  }
}

export default angular
  .module('dataserviceModule', [])
  .service('dataservice', Dataservice);