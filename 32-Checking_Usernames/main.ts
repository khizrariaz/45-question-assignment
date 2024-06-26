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

let current_users : string[] = ['TaHa','ALi','SaLman','HiNa','John'];

let new_users : string[] = ['Bilal','TaHa','Dawood','Jameel','Hamza'];

//newUserNames me 2nd array ki aik aik value akr check hogi 1 by 1
new_users.forEach(newUserNames => {
 let lowerCase : string = newUserNames.toLowerCase();

//current_users wali all value c_user me ay gi
 if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
console.log(`The username ${newUserNames} is not available. Please write a different username`);
 } else{
    console.log(`The username ${newUserNames} is available.`);
 }
})

//ans=The username Bilal is available.
// The username TaHa is not available. Please write a different username
// The username Dawood is available.
// The username Jameel is available.
// The username Hamza is available.

// //.include= {current_user} array ki inner value chk krny k lye. k wo value array k andr present h ya nai
//if present = ture, if absent= false

