// to lowercase
var personname = "Khizra";
console.log("lowercase:", personname.toLowerCase());
// uppercase
console.log("uppercase:", personname.toUpperCase());
// function toTitleCase(word: string): string {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// }
// // Example usage:
// const titleCasedWord = toTitleCase("khizra");
// console.log(titleCasedWord); // Outputs: "Khizra"
function toTitleCase(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
var titleCase = toTitleCase("khizra");
console.log("TitleCase: ".concat(titleCase));
// // titlecase
// console.log("titlecase:", personname.replace(/\bw/g,c => c.toUpperCase()));
