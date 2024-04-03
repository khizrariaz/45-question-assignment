let places: string[]= ['Makkah','Madina','Dubai','Sydney','Newyork'];

//Print your array in its original order
console.log('original ' + places);
// original Makkah,Madina,Dubai,Sydney,Newyork

//Print your array in alphabetical order(abcd aligned) without modifying the actual list.
console.log('copy ' + [...places].sort());
// copy Dubai,Madina,Makkah,Newyork,Sydney

//Show that your array is still in its original order by printing it.
console.log('original ' + places);
// original Makkah,Madina,Dubai,Sydney,Newyork

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy ' + [...places].sort().reverse());
// copy Sydney,Newyork,Makkah,Madina,Dubai

//Show that your array is still in its original order by printing it again.
console.log('copy ' + [...places].sort().reverse());
// copy Sydney,Newyork,Makkah,Madina,Dubai

// Reverse the order of your list. Print the array to show that its order has changed.
console.log('copy ' + [...places].sort());
// copy Dubai,Madina,Makkah,Newyork,Sydney


//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('copy ' + [...places].sort().reverse());
// copy Sydney,Newyork,Makkah,Madina,Dubai

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('copy ' + [...places].sort());
// copy Dubai,Madina,Makkah,Newyork,Sydney


// original Makkah,Madina,Dubai,Sydney,Newyork
// copy Dubai,Madina,Makkah,Newyork,Sydney    
// original Makkah,Madina,Dubai,Sydney,Newyork
// copy Sydney,Newyork,Makkah,Madina,Dubai    
// copy Sydney,Newyork,Makkah,Madina,Dubai    
// copy Dubai,Madina,Makkah,Newyork,Sydney    
// copy Sydney,Newyork,Makkah,Madina,Dubai
// copy Dubai,Madina,Makkah,Newyork,Sydney








