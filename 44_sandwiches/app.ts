// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call
//  provides, and it should print a summary of the sandwich that is being ordered. Call the 
//  function three times, using a different number of arguments each time.

function makeSandwich(items: string[]) {
    console.log("\nMaking your sandwich with:");
    items.forEach(items => {                     //syntax element me hmny items put kia h
      console.log("- " + items);                //  - is used to make bullets in ans i.e -ham   -cheez  -lettuce

    });
    console.log("Enjoy your sandwich!\n");
  }
  
  // Call the function with different numbers of arguments
  makeSandwich(["Ham", "Cheese", "Lettuce"]);

  makeSandwich(["Turkey", "Swiss Chees"]);

  makeSandwich(["Peanut Butter", "Jelly"]);
  