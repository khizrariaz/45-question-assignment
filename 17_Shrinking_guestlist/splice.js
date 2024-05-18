"use strict";
let myList = ['Asia', 'Ali', 'Ahmed', 'Raza', 'Bilal'];
//1= index no. at which v wanna place new name
//0=no deletion of any old name
// myList.splice(1, 0, "Ruhama","Gull")
// console.log(myList);
//2= 2 names deleted= jisa position p new add kia aik wo delete hua or 2nd usky bad wala del hua
// myList.splice(1, 2, "bag","dol")
// console.log(myList);
myList.splice(0, 3, "mama", "baba");
console.log(myList);
// // Ali is replaced sana
// guestLists [1] = 'Sana';
// // .unshift add guest for begining of the array, before 0 
// guestList.unshift('Rosee');
