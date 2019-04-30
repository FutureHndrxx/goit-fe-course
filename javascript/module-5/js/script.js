'use strict';

// // Конструктор Notepad при инициализации принимает массив заметок
// const Notepad = function Notepad(notes = []) {
//   this.notes = notes;

//   this.getNotes = function() {
//     return this.notes;
//   };

//   this.saveNote = function(note) {
//     this.notes.push(note);
//     return note;
//   };

//   this.findNoteById = function(id) {
//     let array = this.notes;
//     for (let i = 0; i < array.length; i += 1) {
//       let obj = array[i];
//       if (obj.id === id) {
//         return obj;
//       }
//     }
//   };

//   this.deleteNoteById = function(id) {
//     let obj = this.findNoteById(id);
//     let array = this.notes;
//     const index = array.indexOf(obj);
//     array.splice(index, 1);
//   };

//   this.updateNoteContent = function(id, updatedContent) {
//     let obj = this.findNoteById(id);
//     let array = this.notes;
//     const i = array.indexOf(obj);
//     array[i] = { ...obj, ...updatedContent };
//     return array[i];
//   };

//   this.updateNotePriority = function(id, priority) {
//     let notePriority = this.findNoteById(id);
//     notePriority.priority = priority;
//     return notePriority;
//   };

//   this.filterNotesByQuery = function(query) {
//     let array = this.notes;
//     let newArray = [];
//     for (let i = 0; i < array.length; i += 1) {
//       let obj = array[i];
//       if (
//         obj.title.toLowerCase().includes(query) === true ||
//         obj.body.toLowerCase().includes(query) === true
//       ) {
//         newArray.push(obj);
//       }
//     }
//     return newArray;
//   };

//   this.filterNotesByPriority = function(priority) {
//     let array = this.notes;
//     let newArray = [];
//     for (let i = 0; i < array.length; i += 1) {
//       let obj = array[i];
//       if (obj.priority === priority) {
//         newArray.push(obj);
//       }
//     }
//     return newArray;
//   };
// };

// // Добавляем статическое свойство, в котором храним приоритеты.
// Notepad.Priority = {
//   LOW: 0,
//   NORMAL: 1,
//   HIGH: 2,
// };

// const initialNotes = [
//   {
//     id: 'id-1',
//     title: 'JavaScript essentials',
//     body:
//       'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
//     priority: Notepad.Priority.HIGH,
//   },
//   {
//     id: 'id-2',
//     title: 'Refresh HTML and CSS',
//     body:
//       'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
//     priority: Notepad.Priority.NORMAL,
//   },
// ];

// const notepad = new Notepad(initialNotes);

// ////////////////////////////////////

// console.log(notepad);

// console.log('Все текущие заметки: ', notepad.getNotes());

// notepad.saveNote({
//   id: 'id-3',
//   title: 'Get comfy with Frontend frameworks',
//   body:
//     'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
//   priority: Notepad.Priority.NORMAL,
// });

// notepad.saveNote({
//   id: 'id-4',
//   title: 'Winter clothes',
//   body:
//     "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
//   priority: Notepad.Priority.LOW,
// });

// console.log('Все текущие заметки: ', notepad.getNotes());

// notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);

// console.log(
//   'Заметки после обновления приоритета для id-4: ',
//   notepad.getNotes(),
// );

// notepad.updateNotePriority('id-3', Notepad.Priority.LOW);

// console.log(
//   'Заметки после обновления приоритета для id-3: ',
//   notepad.getNotes(),
// );

// console.log(
//   'Отфильтровали заметки по ключевому слову "html": ',
//   notepad.filterNotesByQuery('html'),
// );

// console.log(
//   'Отфильтровали заметки по ключевому слову "javascript": ',
//   notepad.filterNotesByQuery('javascript'),
// );

// console.log(
//   'Отфильтровали заметки по нормальному приоритету: ',
//   notepad.filterNotesByPriority(Notepad.Priority.NORMAL),
// );

// notepad.updateNoteContent('id-3', {
//   title: 'Get comfy with React.js or Vue.js',
// });

// console.log(
//   'Заметки после обновления контента заметки с id-3: ',
//   notepad.getNotes(),
// );

// notepad.deleteNoteById('id-2');
// console.log('Заметки после удаления с id -2: ', notepad.getNotes());

