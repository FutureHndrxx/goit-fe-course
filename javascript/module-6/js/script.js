'use strict';

// class Notepad {
//   constructor(notes = []) {
//     this._notes = notes;
//   }

//   static get Priority() {
//     return { LOW: 0, NORMAL: 1, HIGH: 2 };
//   }

//   get notes() {
//     return this._notes;
//   }

//   saveNote(note) {
//     this._notes.push(note);
//     return note;
//   }

//   findNoteById(id) {
//     const array = this._notes;
//     for (let i = 0; i < array.length; i += 1) {
//       const obj = array[i];
//       if (obj.id === id) {
//         return obj;
//       }
//     }
//   }

//   deleteNoteById(id) {
//     const obj = this.findNoteById(id);
//     const array = this._notes;
//     const index = array.indexOf(obj);
//     array.splice(index, 1);
//   }

//   updateNoteContent(id, updatedContent) {
//     const obj = this.findNoteById(id);
//     const array = this._notes;
//     const i = array.indexOf(obj);
//     array[i] = { ...obj, ...updatedContent };
//     return array[i];
//   }

//   updateNotePriority(id, priority) {
//     const notePriority = this.findNoteById(id);
//     notePriority.priority = priority;
//     return notePriority;
//   }

//   filterNotesByQuery(query) {
//     const array = this._notes;
//     const newArray = [];
//     for (let i = 0; i < array.length; i += 1) {
//       const obj = array[i];
//       if (
//         obj.title.toLowerCase().includes(query.toLowerCase()) ||
//         obj.body.toLowerCase().includes(query.toLowerCase())
//       ) {
//         newArray.push(obj);
//       }
//     }
//     return newArray;
//   }

//   filterNotesByPriority(priority) {
//     const array = this._notes;
//     const newArray = [];
//     for (let i = 0; i < array.length; i += 1) {
//       const obj = array[i];
//       if (obj.priority === priority) {
//         newArray.push(obj);
//       }
//     }
//     return newArray;
//   }
// }

// /////////////////////////////
// /////////////////////////////
// /////////////////////////////
// /////////////////////////////
// /////////////////////////////

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

// /*
//   Смотрю что у меня в заметках после инициализации
// */

// console.log('Все текущие заметки: ', notepad.notes);

// /*
//  * Добавляю еще 2 заметки и смотрю что получилось
//  */

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

// console.log('Все текущие заметки: ', notepad.notes);

// /*
//  * Зима уже близко, пора поднять приоритет на покупку одежды
//  */

// notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);

// console.log('Заметки после обновления приоритета для id-4: ', notepad.notes);

// /*
//  * Решил что фреймворки отложу немного, понижаю приоритет
//  */

// notepad.updateNotePriority('id-3', Notepad.Priority.LOW);

// console.log('Заметки после обновления приоритета для id-3: ', notepad.notes);

// /*
//  * Решил отфильтровать заметки по слову html
//  */

// console.log(
//   'Отфильтровали заметки по ключевому слову "htMl": ',
//   notepad.filterNotesByQuery('htMl'),
// );

// /*
//  * Решил отфильтровать заметки по слову javascript
//  */

// console.log(
//   'Отфильтровали заметки по ключевому слову "javasCript": ',
//   notepad.filterNotesByQuery('javasCript'),
// );

// /*
//  * Хочу посмотреть только заметки с нормальным приоритетом
//  */

// console.log(
//   'Отфильтровали заметки по нормальному приоритету: ',
//   notepad.filterNotesByPriority(Notepad.Priority.NORMAL),
// );

// /*
//  * Обновим контент заметки с id-3
//  */

// notepad.updateNoteContent('id-3', {
//   title: 'Get comfy with React.js or Vue.js',
// });

// console.log(
//   'Заметки после обновления контента заметки с id-3: ',
//   notepad.notes,
// );

// /*
//  * Повторил HTML и CSS, удаляю запись c id-2
//  */

// notepad.deleteNoteById('id-2');
// console.log('Заметки после удаления с id -2: ', notepad.notes);

// ///////////////////////////////////
// const animal = { barks: true };

// // dog.__proto__ = animal;
// const dog = Object.create(animal);
// dog.fly = true;
// dog.rap = false;
// console.log(dog.barks);
// console.log(dog);

// for (const key in dog) {
//   if (dog.hasOwnProperty(key) === false) continue;
//   console.log(key);
// }

// const Guest = function(name, room) {
//   this.name = name;
//   this.room = room;
// };

// console.log(Guest.prototype); // {constructor: ƒ}

// //////////////////////////////

// const Hero = function(name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function(amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const mango = new Hero('Mango', 1000);

// console.log(mango); // Hero { name: 'Mango', xp: 1000 }
// // Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
// mango.gainXp(500); // Mango gained 500 experience points
// console.log(mango); // Hero { name: 'Mango', xp: 1500 }

// const Warrior = function(name, xp, weapon) {
//   Hero.call(this, name, xp);

//   this.weapon = weapon;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;
// Warrior.prototype.attack = function() {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };
// const poly = new Warrior('Poly', 200, 'sword');

// poly.attack(); // Poly attacks with sword

// console.log(poly);

////////////////////////////

// const newArray = [];

// for (let i = 0; i < array.length; i += 1) {
//   const element = array[i] * 2;
//   newArray.push(element);
// }

// const double = function(arr, number) {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     const element = array[i] * number;
//     newArray.push(element);
//   }
//   return newArray;
// };

// const double = function(arr, number) {
//   const newArr = [];
//   for (const ar of arr) {
//     newArr.push(ar * number);
//   }
//   return newArr;
// };

// console.log(array);
// console.log(double(array, 2));

// const array = [1, 2, 3, 4, 5];

// const result = array.map(number => number * 2);
// console.log(result);

// const newfn = (arr, number) => arr.map(num => num * number);

// console.log(newfn(array, 3));

////////////////////////////////////

// const filter = function(arr, callback, num) {
//   const array = [];
//   for (const el of arr) {
//     if (callback(el, num)) {
//       array.push(el);
//     }
//   }
//   return array;
// };

// const callback = (el, num) => el <= num;
// const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const index = 3;
// console.log(filter(testArray, callback, index));

// const testFilter = testArray.filter(num => num > 5);

// console.log(testFilter);

///////////////////////////////////

const find = function(arr, cb, num) {
  for (const el of arr) {
    if (cb(el, num)) return el;
  }
};

const test = function(sm, num) {
  if (sm > num) return true;
};

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(find(testArray, test, 7));

console.log(testArray.find(num => num === 4));
