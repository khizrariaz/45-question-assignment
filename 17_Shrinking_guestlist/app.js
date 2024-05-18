var guestList = ['Asia', 'Ali', 'Ahmed', 'Raza'];
// Ali is replaced sana
guestList[1] = 'Sana';
// .unshift add guest for begining of the array, before 0 
guestList.unshift('Rosee');
//add new name in the middle of the array
guestList.splice(guestList.length / 2, 2, 'Khizra');
//.push() adds guest at the end of the array
guestList.push('Soha');
console.log("\n\nWe are out of space. We have space for two only.\n\n");
//guestList.length>2  = guestlist is greater then 2 v need 2 gst only
//last k sary name delete hokr(with pop) starting k 2 name asia n rosee bachengy
while (guestList.length > 2) {
    var removed_guests = guestList.pop();
    console.log("Dear ".concat(removed_guests, ", you are not invited for dinner."));
}
//pop deletes last elements of the array
for (var i = 0; i < guestList.length; i++) {
    console.log('Respected Sir/Madam ' + guestList[i] + ',\nYou are still invited. \nThank you');
}
;
guestList.splice(0, 2);
console.log(guestList);
