//Working with one of the programs from Exercises 14 through 18, print a message indicating
// the number of people you are inviting to dinner.

let guestList : string [] = ['Asia', 'Ali','Ahmed','Raza'];

// Ali is replaced sana
guestList [1] = 'Sana';
guestList.unshift('Rosee');
guestList.splice(3 , 0 , 'Khizra');
guestList.push('Soha');

// console.log(`\n\nWe are out of space. We have space for two only.\n\n`);

while(guestList.length > 2){
  let removed_guests = guestList.pop();
//   console.log(`Sorry Mr. ${removed_guests}, you are not invited for dinner.`);
}
// for(let i=0; i<guestList.length; i++){
//      console.log('Dear Mr. ' + guestList[i] + ',\nYou are still invited. \nThank you');
//   };
//   console.log(guestList);


  console.log(`Total no. of guests are: ${guestList.length}`);

  //Total no. of guests are: 2