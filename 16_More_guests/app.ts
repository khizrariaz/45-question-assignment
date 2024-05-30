let guestList : string [] = ['Asia', 'Ali','Ahmed','Raza'];

// Ali is replaced sana
guestList [1] = 'Sana';
for(let i=0; i<guestList.length; i++){
  console.log('Respected Sir/Madam ' + guestList[i] + ',\nPlease come for dinner at my home tonight. I just found a large table so I am adding 3 new guests. \nThank you');
};  //Q=15 END
 
console.log("Good news! we found big table so we are inviting 3 more guests");

// .unshift add guest for begining of the array, before 0 
guestList.unshift('Rosee');

 //add new name in the middle of the array
guestList.splice(3 , 0 , 'Khizra');
//3= index 3 p new name add, 0= no name del

//.push() adds guest at the end of the array
guestList.push('Soha');

for(let i=0; i<guestList.length; i++){
    console.log('Respected Sir/Madam ' + guestList[i] + ',\nPlease come for dinner at my home tonight. I just found a large table so I am adding 3 new guests. \nThank you');
  };



// let myList: string[] = ["imran","nawaz","zardari"]
// myList[0]= "kamran tessori"
// // for(let i=0; i<myList.length; i++){
// // console.log("Dear " + myList[i] + "\nCome to my party.\n")
// // }
  
// console.log("3 new guests are coming");

// myList.unshift("sir zia");
// myList.splice(2 , 0 , "maryam");
// myList.push("bilawal")

// for(let i=0; i<myList.length; i++){
//   console.log("Dear " + myList[i] + "\ncome to my party.\n")
//   }
    
