import angular from 'angular';

import boardControllerModule from './controller/board.controller.js';

import deskControllerModule from './controller/desk/desk.controller.js';
import noteControllerModule from './controller/note/note.controller.js';

import renameDirectiveModule from './directives/rename/renamedirective.js';
import noteEditDirectiveModule from './controller/desk/deskservice.js';

angular.module('main', [
    boardControllerModule.name,
    deskControllerModule.name,
    noteControllerModule.name,
    renameDirectiveModule.name,
    noteEditDirectiveModule.name
]);