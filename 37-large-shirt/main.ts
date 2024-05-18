// Large Shirts: Modify the make_shirt() function so that shirts are large by default with
//  a message that reads I love TypeScript.Make a large shirt and a medium shirt with the default
//   message, and a shirt of any size with a different message.


function make_shirt (size:string = 'large', text:string = 'I love typescript'){
console.log(`Making a ${size} shirt with the message: ${text}`)
}

make_shirt(); //default size n text will add
make_shirt('medium'); //default msg will add
make_shirt('small','I love python!'); 

//ans=
// Making a large shirt with the message: I love typescript
// Making a medium shirt with the message: I love typescript
// Making a small shirt with the message: I love python!  