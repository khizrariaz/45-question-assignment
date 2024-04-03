var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ['Makkah', 'Madina', 'Dubai', 'Sydney', 'Newyork'];
//Print your array in its original order
console.log('original ' + places);
// original Makkah,Madina,Dubai,Sydney,Newyork
//Print your array in alphabetical order(abcd aligned) without modifying the actual list.
console.log('copy ' + __spreadArray([], places, true).sort());
// copy Dubai,Madina,Makkah,Newyork,Sydney
//Show that your array is still in its original order by printing it.
console.log('original ' + places);
// original Makkah,Madina,Dubai,Sydney,Newyork
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
// copy Sydney,Newyork,Makkah,Madina,Dubai
//Show that your array is still in its original order by printing it again.
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
// copy Sydney,Newyork,Makkah,Madina,Dubai
// Reverse the order of your list. Print the array to show that its order has changed.
console.log('copy ' + __spreadArray([], places, true).sort());
// copy Dubai,Madina,Makkah,Newyork,Sydney
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
// copy Sydney,Newyork,Makkah,Madina,Dubai
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('copy ' + __spreadArray([], places, true).sort());
// copy Dubai,Madina,Makkah,Newyork,Sydney
