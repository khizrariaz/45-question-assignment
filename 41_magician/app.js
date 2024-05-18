// Magicians: Make a array of magician’s names. Pass the array to a function called show
// _magicians(), which prints the name of each magician in the array.
//for loop method
var magicianNames = ["Merlin", "Gandalf", "Harry Houdini", "David Copperfield"];
function show_magician(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
show_magicians(magicianNames);
//for each method
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette"];
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
show_magicians(magicians);
// let magician_names :string[] = ["a","b","c","d","e"];
// function show_magicians(magician_names:string[]) {
//   magician_names.forEach(element => {
//     console.log(element);
//   })
// }
// show_magicians(magician_names)
// let magician_names: string[] = ["1","2","3","4","5"];
// function show_magicians(magician_names:string[]){
// for (let i=0; i<magician_names.length; i++)
// {
//     console.log(magician_names[i]);
// }
// }
// show_magicians(magician_names)
