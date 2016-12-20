import noteEditModule from '../../directives/noteEdit/noteeditderictive.js';
import noteservice from './noteservice.js';
function NoteController(noteservice) {
	var vm=this;
	vm.note=noteservice.getNote();
	vm.addComent=addComent;
	vm.addCheckBoxList=addCheckBoxList;
	vm.addCheckBox=addCheckBox;
	vm.check=check;
	vm.setTime=setTime;
	vm.deleteCheckBox=deleteCheckBox;
	vm.newDate=newDate;
	vm.setOldDate=setOldDate;
	vm.oldDate;
	function addComent(string){
		if(string){
		var obj={coment:string,date:new Date()};
		if(!vm.note.data.comments){
			vm.note.data.comments=[obj];
		}else{
			vm.note.data.comments.push(obj);
		}
	}
	}

function addCheckBoxList(name){
		if(name){
		var obj={
			name:name,
			list:[],
			progress:{count:0,procent:0}
		};
		if(!vm.note.data.checkBoxList){
			vm.note.data.checkBoxList=[obj];
		}else{
			vm.note.data.checkBoxList.push(obj);
		}
		noteservice.processReload();
		}
	}

	function addCheckBox(index,chBox){
		if(chBox){
			var obj={checked:false,text:chBox};
			if(!vm.note.data.checkBoxList[index].list){
				vm.note.data.checkBoxList[index].list=[obj];
			}else{
				vm.note.data.checkBoxList[index].list.push(obj);
			}
			noteservice.processReload();
		}
	}

	function setTime(date){
		if(date)
		{
			vm.note.data.date=date;
			noteservice.reloadStatus();
		}else{
			vm.note.data.date='';
			vm.oldDate='';
		}
	}
	function check(index,parentIndex){
		noteservice.reloadStatus();
		vm.note.data.checkBoxList[parentIndex].list[index].checked=!vm.note.data.checkBoxList[parentIndex].list[index].checked;
		if(vm.note.data.checkBoxList[parentIndex].list[index].checked===true){
			vm.note.data.checkBoxList[parentIndex].progress.count--;
		}else{
			vm.note.data.checkBoxList[parentIndex].progress.count++;
		}
		vm.note.data.checkBoxList[parentIndex].progress.procent=vm.note.data.checkBoxList[parentIndex].progress.count/vm.note.data.checkBoxList[parentIndex].list.length*100;
	}
	function newDate(){
		vm.oldDate = vm.note.data.date;
		vm.note.data.date='';
	}
	function setOldDate(){
		vm.note.data.date=vm.oldDate;
		vm.oldDate='';
	}

	function deleteCheckBox(index){
		vm.note.data.checkBoxList.splice(index,1);
	}
}
export default angular
  .module('noteControllerModule', [noteEditModule.name,noteservice.name])
  .controller('NoteController', NoteController);
  //checked