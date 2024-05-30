var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var place = ["karachi", "pakistan", "saudia", "newyork", "sydney"];
console.log("orginal: " + place);
console.log("copy: " + __spreadArray([], place, true).sort());
console.log("orginal: " + place);
console.log("copy: " + __spreadArray([], place, true).sort().reverse());
console.log("orginal: " + place);
console.log("original: " + place.reverse());
console.log("original: " + place.reverse());
console.log("original: " + place.sort());
console.log("original: " + place.sort().reverse());
