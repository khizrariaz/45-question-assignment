//Working with one of the programs from Exercises 14 through 18, print a message indicating
// the number of people you are inviting to dinner.
// import{ guestList } from '../14_guest_list/app'
// console.log(`\nPrinting the number of guests invited:`);
// console.log(`Invited people ${guestList.length} people from exercise 14`)
// //../ same file me rehty huy upper waly folder k data ko achieve krna
var guestList = ['Asia', 'Ali', 'Ahmed', 'Raza'];
// Ali is replaced sana
guestList[1] = 'Sana';
guestList.unshift('Rosee');
guestList.splice(3, 0, 'Khizra');
guestList.push('Soha');
// console.log(`\n\nWe are out of space. We have space for two only.\n\n`);
while (guestList.length > 2) {
    var removed_guests = guestList.pop();
    //   console.log(`Sorry Mr. ${removed_guests}, you are not invited for dinner.`);
}
// for(let i=0; i<guestList.length; i++){
//      console.log('Dear Mr. ' + guestList[i] + ',\nYou are still invited. \nThank you');
//   };
//   console.log(guestList);
console.log("Total no. of guests are: ".concat(guestList.length));
