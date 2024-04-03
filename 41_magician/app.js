"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show
// _magicians(), which prints the name of each magician in the array.
//for loop method
const magicianNames = ["Merlin", "Gandalf", "Harry Houdini", "David Copperfield"];
function show_magician(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
show_magicians(magicianNames);
//for each method
let magicians = ["Harry Houdini", "David Blaine", "Penn Jillette"];
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magicians);
