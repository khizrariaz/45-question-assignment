// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning 
// and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
//  Print the name once, so the whitespace around the name is displayed. Then print the name after
//   striping the white spaces.
var personName = "\nKhizra\t\n";
// white space=extra space=/t=tab key makes 4 spaces at once /n=next line
console.log(personName);
// Strip whitespace and print the name
var strippedName = personName.trim();
console.log(strippedName);
// let myName: string = "\n\tKhizaraadnan\t\n"
// console.log(myName);
// let sName:string = myName.trim()
// console.log(sName);
