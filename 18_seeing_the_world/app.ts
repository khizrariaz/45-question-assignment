let places: string[]= ['Makkah','Madina','Dubai','Sydney','Newyork'];

//Print your array in its original order
console.log("ORIGINAL " + places);
//ORIGINAL Makkah,Madina,Dubai,Sydney,Newyork

//Print your array in alphabetical order(abcd aligned) without modifying the actual list.
console.log("COPY " + [...places].sort());
// COPY Dubai,Madina,Makkah,Newyork,Sydney
//...spread operator= spreads info.. new wali list me old items ko add krta h
//... spr oprt ne  copy array me old places add kye than sort ne align krdye

//Show that your array is still in its original order by printing it.
console.log("ORIGINAL " + places);
// ORIGINAL Makkah,Madina,Dubai,Sydney,Newyork

//reverse alphabetical order without changing the order of the original list.
console.log("COPY " + [...places].sort().reverse());
// COPY Sydney,Newyork,Makkah,Madina,Dubai

//Show that your array is still in its original order by printing it again.
console.log("ORIGINAL " + places);
// ORIGINAL Makkah,Madina,Dubai,Sydney,Newyork

// Reverse the order of your list. Print the array to show that its order has changed.
console.log("ORIGINAL " + places.reverse());
// ORIGINAL Newyork,Sydney,Dubai,Madina,Makkah


//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("ORIGINAL " + places.reverse());
// ORIGINAL Makkah,Madina,Dubai,Sydney,Newyork

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("ORIGINAL " + places.sort());
// ORIGINAL Dubai,Madina,Makkah,Newyork,Sydney

//Sort to change your array so its store in reverce alpha order .print to show its order has changed
console.log("ORIGINAL " + places.sort().reverse());
// ORIGINAL Sydney,Newyork,Makkah,Madina,Dubai


















