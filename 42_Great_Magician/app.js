"use strict";
// Great Magicians: Start with a copy of your program from Exercise 41. Write a function 
// called make_great() that modifies the array of magicians by adding the phrase the Great
//  to each magician’s name. Call show_magicians() to see that the list has actually been modified.
const magicianNames = ["Merlin", "Gandalf", "Harry Houdini", "David Copperfield"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
        // console.log( magicians[i]);
    }
}
//  show-mag to call krna tha ques me bola h. thxy func banaya show mag ka
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
make_great(magicianNames);
show_magicians(magicianNames);
