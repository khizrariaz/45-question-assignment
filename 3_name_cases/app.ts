// to lowercase
let personname: string= "Khizra";
console.log("lowercase:", personname.toLowerCase());

// uppercase
console.log("uppercase:", personname.toUpperCase());

//titlecase
function toTitleCase(name: string): string {
 return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
let titleCase= toTitleCase("khizra")
console.log(`TitleCase: ${titleCase}`)

//slice(1)= 1 letter jo 0 p h usko chhor kar baqi sab lowercase me krdo


