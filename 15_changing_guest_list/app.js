var guestList = ['Asia', 'Ali', 'Ahmed', 'Raza'];
for (var i = 0; i < guestList.length; i++) {
    console.log('Respected Guest ' + guestList[i] + ',\nPlease come for dinner tonight. \nThank you');
}
// Ali is replaced sana
guestList[1] = 'Sana';
for (var i = 0; i < guestList.length; i++) {
    console.log('Respected Guest ' + guestList[i] + ',\nPlease come for dinner tonight. \nThank you');
}
;
console.log("Mr. Ali will not be able to come tonight. ");
// 2nd method = console.log ('Mr. Ali will not be able to come tonight. ')
var gst = ["ali", "saba", "nahii"];
for (var i = 0; i < gst.length; i++) {
    console.log("come for dinne" + " " + gst[i]);
}
gst[2] = "khizra";
for (var i = 0; i < gst.length; i++) {
    console.log("come for dinne" + " " + gst[i]);
}
console.log("mr nahii is unavailable, khizra will join us instead");
