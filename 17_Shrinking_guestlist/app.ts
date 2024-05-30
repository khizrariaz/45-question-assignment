let guestList : string [] = ['Asia', 'Ali','Ahmed','Raza'];

// Ali is replaced sana
guestList [1] = 'Sana';
guestList.unshift('Rosee');
guestList.splice(3 , 0 , 'Khizra');
guestList.push('Soha');

console.log(`\n\nWe are out of space. We have space for two only.\n\n`);

//guestList.length>2  = guestlist jab tk greater then 2 ho tab tak person remove kro. v need 2 person only
//last k sary name delete hokr(with pop) starting k 2 name asia n rosee bachengy
//pop will save all del name n them del name will save in variable (remov_guest)

while(guestList.length > 2){
  let removed_guests = guestList.pop();
  console.log(`Sorry Mr. ${removed_guests}, you are not invited for dinner.`);
}
//pop deletes last elements of the array

for(let i=0; i<guestList.length; i++){
     console.log('Dear Mr. ' + guestList[i] + ',\nYou are still invited. \nThank you');
  };

  //• Remove the last two names from your list, so you have an empty list. Print your list to
  //make sure you actually have an empty list at the end of your program.

  //0=index on which new name add.. 2= 2 name deleted=  2he name thy dono delet krdye= empty arry
  guestList.splice(0,2);
  console.log(guestList);
  

//   let myLists: string[] = ["kamran","imran","nawaz","zardari","bilawal"]

//   while(myLists.length > 2){
//  let remList = myLists.pop()
//  console.log("Dear " + remList + " you r nor invited.\n");
//   }

//   for(let i=0; i<myLists.length; i++ ){
// console.log("Dear " + myLists[i] + " You are still invited.\n");

//   }

//   myLists.splice(0, 2)
//   console.log(myLists);
  