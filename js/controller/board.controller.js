import dataserviceModule from './../services/dataservice.js';
import boardserviceModule from './../services/boardservice.js';
function BoardController(dataservice,boardservice) {

 var vm=this;
 vm.title = 'Tralolo';
 vm.boards=dataservice.loadBoards();
 vm.addBoard=addBoard;
 vm.selectBoard=boardservice.selectBoard;
 vm.deleteBoard=deleteBoard;
 vm.saveBoard=dataservice.saveBoards;
 vm.moveLeft=boardservice.moveLeft;
 vm.moveRight=boardservice.moveRight;
 vm.ActiveBoard=boardservice.getBoard();

 activate();

 function activate(){
   console.log("activate");
 }

 function deleteBoard(){
  vm.boards.splice(vm.boards.indexOf(vm.ActiveBoard.board),1);
  vm.ActiveBoard.board=null;
 }
 function addBoard() {
   var name = prompt('What would you name your boadr?','new Board')
   if(name){
     var obj={name,desks:[]};
     vm.boards.push(obj);
     vm.ActiveBoard.board=vm.boards[vm.boards.length-1];
   }
 };

}
export default angular
  .module('boardControllerModule', [dataserviceModule.name,boardserviceModule.name])
  .controller('BoardController', BoardController);