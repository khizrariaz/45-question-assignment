// Magicians: Make a array of magician’s names. Pass the array to a function called show
// _magicians(), which prints the name of each magician in the array.

//for loop method


const magicianNames: string[] = ["Merlin", "Gandalf", "Harry Houdini", "David Copperfield"];
function show_magician(magicians: string[]) {    //magician=parameter
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  show_magicians(magicianNames);


//for each method

let magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette"];
function show_magicians(magicians: string[]) {
//element is parameter here
magicians.forEach(element => {
    console.log(element);

});
}
show_magicians(magicians);

// ans=
// Merlin
// Gandalf
// Harry Houdini
// David Copperfield
// Harry Houdini
// David Blaine
// Penn Jillette









  

