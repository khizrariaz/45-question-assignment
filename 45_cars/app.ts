// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. It should then accept
//  an arbitrary number of keyword arguments. Call the function with the required information and 
//  two other name-value pairs, such as a color or an optional feature. Print the Object that’s 
//  returned to make sure all the information was stored correctly.

function storeCarInfo(manufacturer: string, modelName: string,
     ...extraoptions:   { [key : string] : any}[] ): object {     //[] is for datatype of sprdoprtr...extroption  
            //:object= is type of object i.e carinfo                                                            
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraoptions)
    }
    //{} = target in whch source value will be added after copy
    //...extraopt = source= ismy c data copy hony bad {}=target me jakr save hoga

    return carInfo;   //obj return
};
let ans = storeCarInfo('Honda','Civic', {color:'Black'}, {features : ['navigation', 'power window']})
console.log(ans);

// {
//     manufacturer: 'Honda',
//     modelName: 'Civic',
//     color: 'Black',
//     features: [ 'navigation', 'power window' ]
//   }



//arbitrary= random value/ any value
//...spreadoperator.can add many arguments,... make copy of array
//...sprd opertr data ko array me store krta h
//{ [key : string] : any}...key(also called property) :string ,key ki type h..
// or any is type for valu of object. { [key : string] : any} is called index signature
// ...Object.assign= it copies values from source obj to target obj. it returns the target obj 
//after copying the properties i.e

// let target = { a: 1, b: 2 };
// let source = { b: 3, c: 4 };

// Object.assign(target, source);

// console.log(target); // Output: { a: 1, b: 3, c: 4 }
// source obj ki properties target me copy hojati h. phr target copy hony k bad return hota h

//index signature= define the types for accessing properties of an obj using squar bracket
//[key : string] : any