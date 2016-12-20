function NoteService (){
	var activeNote={data:{}};
 (function activate() {
    console.log('Activate NoteService ');
  })();
  return {
  	getNote:getNote,
  	setNote:setNote,
    processReload:processReload,
    reloadStatus:reloadStatus
  }

  function getNote(){
      return activeNote;
    }
  function setNote(note){
    console.log(activeNote);
     activeNote.data=note;
     processReload();
     reloadStatus();
   }
  function processReload(){
    for(var i=0;i<activeNote.data.checkBoxList.length;i++){
      activeNote.data.checkBoxList[i].progress.count=0;
      for(var j=0;j<activeNote.data.checkBoxList[i].list.length;j++){
        if(activeNote.data.checkBoxList[i].list[j].checked===true){
          activeNote.data.checkBoxList[i].progress.count++;
        }
      }
        activeNote.data.checkBoxList[i].progress.procent=activeNote.data.checkBoxList[i].progress.count/activeNote.data.checkBoxList[i].list.length*100;
      }
  }
  function reloadStatus(){
    var newDate=new Date().getTime();
    var noteDate=Date.parse(activeNote.data.date);
    var difference=noteDate-newDate;
    if(difference>=0){
      activeNote.data.status=true;
    }else{
      activeNote.data.status=false;
    }
    console.log(difference,activeNote.data.status);
  }


}

export default angular
  .module('noteserviceModule', [])
  .service('noteservice', NoteService);