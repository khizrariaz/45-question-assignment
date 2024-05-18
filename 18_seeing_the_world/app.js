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
console.log("ORIGINAL " + places);
// Makkah,Madina,Dubai,Sydney,Newyork
//Print your array in alphabetical order(abcd aligned) without modifying the actual list.
console.log("COPY " + __spreadArray([], places, true).sort());
// 
//...spread operator= spreads info.. new wali list me old items ko add krta h
//... spr oprt ne  copy array me old places add kye than sort ne align krdye
//Show that your array is still in its original order by printing it.
console.log("ORIGINAL " + places);
//reverse alphabetical order without changing the order of the original list.
console.log("COPY " + __spreadArray([], places, true).sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log("ORIGINAL " + places);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log("ORIGINAL " + places.reverse());
// N,S,D,M,M
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("ORIGINAL " + places.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("ORIGINAL " + places.sort());
//Sort to change your array so its store in reverce alpha order .print to show its order has changed
console.log("ORIGINAL " + places.sort().reverse());
