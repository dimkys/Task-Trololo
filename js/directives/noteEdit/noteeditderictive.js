function NoteEditDirective() {
	console.log('activate dir');
 return {
    templateUrl: './js/directives/noteEdit/note-edit.html',
    scope:true,
    restrict:'EA',
    controller:"NoteController as Note"
  };
}
 export default angular
  .module('noteEditDirectiveModule', [])
	.directive('noteEdit', NoteEditDirective);