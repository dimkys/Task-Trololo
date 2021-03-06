function BoardService (){
	var data={board:''};
 (function activate() {
    console.log('Activate BoardService ');
  })();
  return {
  	getBoard:getBoard,
  	selectBoard:selectBoard,
  	moveLeft:moveLeft,
  	moveRight:moveRight
  }

 function getBoard(){
    return data;
  }
 function selectBoard(board){
   data.board=board;
 }
 function moveLeft(desksIndex,noteIndex){
  if(desksIndex-1>=0){
    data.board.desks[desksIndex-1].notes.push(data.board.desks[desksIndex].notes[noteIndex]);
    data.board.desks[desksIndex].notes.splice(noteIndex,1);
  }
 }
 function moveRight(desksIndex,noteIndex){
  if(desksIndex+1<data.board.desks.length){
  data.board.desks[desksIndex+1].notes.push(data.board.desks[desksIndex].notes[noteIndex]);
  data.board.desks[desksIndex].notes.splice(noteIndex,1);
  }
 }

}

export default angular
  .module('boardserviceModule', [])
  .service('boardservice', BoardService);