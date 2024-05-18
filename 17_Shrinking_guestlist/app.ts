let guestList : string [] = ['Asia', 'Ali','Ahmed','Raza'];

// Ali is replaced sana
guestList [1] = 'Sana';

// .unshift add guest for begining of the array, before 0 
guestList.unshift('Rosee');

 //add new name in the middle of the array
guestList.splice(guestList.length/2, 2, 'Khizra');

//.push() adds guest at the end of the array
guestList.push('Soha');

console.log(`\n\nWe are out of space. We have space for two only.\n\n`);

//guestList.length>2  = guestlist is greater then 2 v need 2 gst only
//last k sary name delete hokr(with pop) starting k 2 name asia n rosee bachengy

while(guestList.length>2){
  let removed_guests = guestList.pop();
  console.log(`Dear ${removed_guests}, you are not invited for dinner.`);
}
//pop deletes last elements of the array

for(let i=0; i<guestList.length; i++){
     console.log('Respected Sir/Madam ' + guestList[i] + ',\nYou are still invited. \nThank you');
  };

  //• Remove the last two names from your list, so you have an empty list. Print your list to
  //make sure you actually have an empty list at the end of your program.

  //0=index on which new name add.. 2= 2 name deleted=  2he name thy dono delet krdye= empty arry
  guestList.splice(0,2);
  console.log(guestList);
  