import deskserviceModule from './deskservice.js';
import boardserviceModule from '../../services/boardservice.js';
function DeskController(boardservice,noteservice) {
	var vm=this;
	vm.ActiveBoard=boardservice.getBoard();
	vm.nameClick=nameClick;
	vm.addDesk=addDesk;
	vm.deleteDesk=deleteDesk;
	vm.selectNote=noteservice.setNote;
	vm.addNote=addNote; 
	vm.deleteNote=deleteNote;
	activate();
	function activate(){
		console.log("DeskController activate");
	}
	function nameClick(){
	}
	function addDesk() {
   var name = prompt('What would you name your desk?','new Desk')
   if(name){
     var obj={name,notes:[]};
     vm.ActiveBoard.board.desks.push(obj);
  }
 }
 function deleteDesk(index){
  vm.ActiveBoard.board.desks.splice(index,1);
 }

  function addNote(index) {
   var name = prompt('What would you name your note?','new Note')
   if(name){
     var obj={name,notes:[],text:"write text....",checkBoxList:[],comments:[],status:true};
     vm.ActiveBoard.board.desks[index].notes.push(obj);
   }
 };
 function deleteNote(desksIndex,noteIndex){
  vm.ActiveBoard.board.desks[desksIndex].notes.splice(noteIndex,1);
 }
}
 export default angular
  .module('deskControllerModule', [deskserviceModule.name,boardserviceModule.name])
  .controller('DeskController', DeskController);