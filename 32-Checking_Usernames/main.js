// Checking Usernames: Do the following to create a program that simulates how websites ensure that
//  everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the
//  new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used.
//  If it has, print a message that the person will need to enter a new username. If a username
// has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should
//  not be accepted.
var current_users = ['TaHa', 'ALi', 'SaLman', 'HiNa', 'John'];
var new_users = ['Bilal', 'TaHa', 'Dawood', 'Jameel', 'Hamza'];
//newUserNames me 2nd array ki aik aik value akr check hogi 1 by 1
new_users.forEach(function (newUserNames) {
    var lowerCase = newUserNames.toLowerCase();
    //current_users wali all value c_user me ay gi
    if (current_users.map(function (c_user) { return c_user.toLowerCase(); }).includes(lowerCase)) {
        console.log("The username ".concat(newUserNames, " is not available. Please write \n    a different username"));
    }
    else {
        console.log("The username ".concat(newUserNames, " is available."));
    }
});
// //.include= {current_user} array ki inner value chk krny k lye. k wo value array k andr present h ya nai
//if present = ture, if absent= false
