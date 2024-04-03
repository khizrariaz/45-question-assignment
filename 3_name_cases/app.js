// to lowercase
var personname = "Khizra";
console.log("lowercase:", personname.toLowerCase());
// uppercase
console.log("uppercase:", personname.toUpperCase());
// titlecase
console.log("titlecase:", personname.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
