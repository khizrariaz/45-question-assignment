// to lowercase
let personname: string= "Khizra";
console.log("lowercase:", personname.toLowerCase());

// uppercase
console.log("uppercase:", personname.toUpperCase());

// titlecase
console.log("titlecase:", personname.replace(/\bw/g,c => c.toUpperCase()));