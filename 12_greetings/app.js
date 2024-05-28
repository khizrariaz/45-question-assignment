// // let members: string[] = ["Ali", "Sana", "saba", "azam"];
// for(let i=0; i<members.length; i++){
// console.log(members[i])
// }
var members = ["Ali:", "Sana:", "Saba:", "Azam:"];
var message = "come to my party!";
for (var i = 0; i < members.length; i++) {
    console.log(members[i] + " " + message);
}
//  these empty " " are for gap between name and message in terminal Ali: come to my party 
var arr = ["a", "b", "c"];
var mesg = "come to my party";
for (var i = 0; i < arr.length; i++) {
    console.log("".concat(arr[i], ", ").concat(mesg));
}
