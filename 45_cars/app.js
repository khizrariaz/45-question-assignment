"use strict";
// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. It should then accept
//  an arbitrary number of keyword arguments. Call the function with the required information and 
//  two other name-value pairs, such as a color or an optional feature. Print the Object that’s 
//  returned to make sure all the information was stored correctly.
function storeCarInfo(manufacturer, modelName, ...extraoptions) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraoptions));
    return carInfo;
}
;
let ans = storeCarInfo('Honda', 'Civic', { color: 'Black' }, { features: ['navigation', 'power window'] });
console.log(ans);
//...spreadoperator.can add many arguments
//...sprd opertr data ko array me store krta h
//{ [key : string] : any}...key(also called property) :string ,key ki type h..
// or any is type for valu of object. { [key : string] : any} is called index signature
