let place: string[]= ["karachi", "pakistan","saudia","newyork","sydney"]

console.log("orginal: " + place);
// orginal: karachi,pakistan,saudia,newyork,sydney

console.log("copy: " + [...place].sort());
// copy: karachi,newyork,pakistan,saudia,sydney  

console.log("orginal: " + place);
// orginal: karachi,pakistan,saudia,newyork,sydney 

console.log("copy: " + [...place].sort().reverse());
// copy: sydney,saudia,pakistan,newyork,karachi

console.log("orginal: " + place);
// orginal: karachi,pakistan,saudia,newyork,sydney


console.log("original: " + place.reverse());
// original: sydney,newyork,saudia,pakistan,karachi


console.log("original: " + place.reverse());
// original: karachi,pakistan,saudia,newyork,sydney


console.log("original: " + place.sort());
// original: karachi,newyork,pakistan,saudia,sydney


console.log("original: " + place.sort().reverse());
// original: sydney,saudia,pakistan,newyork,karachi
  

