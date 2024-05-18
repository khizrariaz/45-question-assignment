let guestList : string [] = ['Asia', 'Ali','Ahmed','Raza'];

// Ali is replaced sana
guestList [1] = 'Sana';
for(let i=0; i<guestList.length; i++){
  console.log('Respected Sir/Madam ' + guestList[i] + ',\nPlease come for dinner at my home tonight. I just found a large table so I am adding 3 new guests. \nThank you');
};
// .unshift add guest for begining of the array, before 0 
guestList.unshift('Rosee');

 //add new name in the middle of the array
guestList.splice(guestList.length/2, 2, 'Khizra');
// /2= list divide in half.. 2,= index 2 p new name add

//.push() adds guest at the end of the array
guestList.push('Soha');
for(let i=0; i<guestList.length; i++){
    console.log('Respected Sir/Madam ' + guestList[i] + ',\nPlease come for dinner at my home tonight. I just found a large table so I am adding 3 new guests. \nThank you');
  };






  // let myList : string [] = ['Asia', 'Ali','Ahmed','Raza','Bilal'];

  // //1= index no. at which v wanna place new name
  // //0=no deletion of any old name
  
  // // myList.splice(1, 0, "Ruhama","Gull")
  // // console.log(myList);
  