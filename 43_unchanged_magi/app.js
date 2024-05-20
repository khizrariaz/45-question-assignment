"use strict";
//Unchanged Magicians: Start with your work from Exercise 42. Call the function
//make_great() with a copy of the array of magicians’ names. Because the original array will be 
//unchanged, return the new array and store it in a separate array. Call show_magicians() with 
//each array to show that you have one array of the original names and one array with the Great
// added to each magician’s name.
const magician = ["Merlin", "Gandalf", "Harry Houdini", "David Copperfield"];
function copyArray(arr) {
    return [...arr];
}
//...spreadoperator= make copy n spread info from old to in new copy
//...arr is making copy of array jo k return hogi
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        (magicianArray[i]) = "The Great " + magicianArray[i];
    }
}
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
let copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log("\n\nThis is my original array: ");
show_magicians(magician);
console.log("\n\nThis is my modified copy of array: ");
show_magicians(copyMagicianArray);
// This is my modified copy of array:
// The Great Merlin
// The Great Gandalf
// The Great Harry Houdini
// The Great David Copperfield
