function RenameDirective() {
	console.log('activate dir');
 return {
    templateUrl: './js/directives/rename/re-name.html',
    scope:true,
    restrict:'EA'
  };
}
 export default angular
  .module('renameDirectiveModule', [])
	.directive('reName', RenameDirective);