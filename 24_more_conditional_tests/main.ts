//• Tests for equality with strings. test 1
console.log("Equality test with strings: ","Apple"==="Apple");

//• Tests for inequality with strings. Test 2
console.log("Inequality test with strings: ",("Apple" as string) !="Orange");

//Tests using the lower case function. Test 3
console.log("lower case function: ", "HELLO".toLowerCase()==="hello");

// Numerical tests involving equality and inequality, Test 4
console.log("Equality test with numbers: ", 26===26);

// Numerical tests involving inequality, Test 5
console.log("Inequality test with numbers: ", (26 as number) !=36);

//greater than test, 6
console.log("Greater than test ", 10 > 5);

// less than test, 7
console.log("Less than test ", 10 < 12);

//greater than or equal to. test 7
console.log("Greater than or equal to test: ", 10 >= 10);

//less than or equal to. test 8
console.log("less than or equal to test: ", 5 >= 5);

// Tests using "And" operator test 9
//"And" operator= both values have to b true agr aik b false hui to terminal me false ajayga
console.log("And operator test: ", 5===5 && 10 > 5);

// Tests using "or" operator test 10
// "or" operator me 1 value true n 2nd agr false b hui i.e(10>12 false) to or oper isko true krdega
console.log("Or operator test: ", 5===5 || 10 > 12);

//Test whether an item is in a array test 11
let fruits: string[] = ['Mango','Grapes','Banana','Apple'];
console.log('Test "Mango" in the array: ', fruits.includes("Mango"));

// Test whether an item is not in a array test 12
// ! mean not.. != MEANS ARRAY FRUIT NOT (! means not) INCLUDES CHERRY
console.log('Test "Cherry" is not in the array: ', !fruits.includes("Cherry"));

