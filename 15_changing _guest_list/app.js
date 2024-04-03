var guestList = ['Asia', 'Ali', 'Ahmed', 'Raza'];
for (var i = 0; i < guestList.length; i++) {
    console.log('Respected Sir/Madam ' + guestList[i] + ',\nPlease come for dinner at my home tonight. \nThank you');
}
// Ali is replaced sana
guestList[1] = 'Sana';
for (var i = 0; i < guestList.length; i++) {
    console.log('Respected Sir/Madam ' + guestList[i] + ',\nPlease come for dinner at my home tonight. \nThank you');
}
;
console.log("Mr. Ali will not be able to come tonight. ");
// let newFruits: string[]= ['apple','banana','orange','kiwi'];
// newFruits[1]='cherry'
// console.log(newFruits);
// let fruits: string[]= ['apple','banana','orange','kiwi'];
// console.log(fruits);
// console.log(fruits[3]);
// console.log(fruits[1],fruits[3]);
