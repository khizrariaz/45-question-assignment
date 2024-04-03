let guestList : string [] = ['Asia', 'Ali','Ahmed','Raza'];

for(let i=0; i<guestList.length; i++){
  console.log('Respected Sir/Madam ' + guestList[i] + ',\nPlease come for dinner at my home tonight. \nThank you');
}
// Ali is replaced sana
guestList [1] = 'Sana';
for(let i=0; i<guestList.length; i++){
  console.log('Respected Sir/Madam ' + guestList[i] + ',\nPlease come for dinner at my home tonight. \nThank you');
};

console.log (`Mr. Ali will not be able to come tonight. `)



