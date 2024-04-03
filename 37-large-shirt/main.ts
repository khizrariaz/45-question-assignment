// Large Shirts: Modify the make_shirt() function so that shirts are large by default with
//  a message that reads I love TypeScript.Make a large shirt and a medium shirt with the default
//   message, and a shirt of any size with a different message.

// question me parameters are in ()
function make_shirt (size:string = 'large', text:string = 'I love typescript'){
console.log(`Making a ${size} shirt with the message: ${text}`)
}
//in ans arguments are in ()
make_shirt();
make_shirt('medium');
make_shirt('small','I love python!');