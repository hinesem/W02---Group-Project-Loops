console.log('JS sourced');
/*
let i = "group project - loops"

console.log(i);
console.log(i.replace('group', 'team'));// replace "group", with "team"
*/

// let cities = "new Richmond, St.Paul, St.Paul, Farmington";
// console.log(Array.isArray(cities));

// const strCopy = str.split()

//Create a string of city names representing the city of each group member separated by a comma.

let cities = "Hudson, St.Paul, St.Paul, Farmington";


//Console log whether or not the variable cities is an array (use the built in method from above).
console.log('---Console log whether or not the variable cities is an array (use the built in method from above).---')
console.log(Array.isArray(cities)); //output is false

console.log('\n'); // print an empty line
//Turn the cities into an array using one of the built in methods above.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
console.log('---Turn the cities into an array using one of the built in methods above.---');
let citiesArray = cities.split(", ", cities.length);
console.log(citiesArray); //output is ['Hudson', 'St.Paul', 'St.Paul', 'Farmington']
console.log(Array.isArray(citiesArray)); //output is now true (citiesArray is now an array)

console.log('\n'); // print an empty line
//Loop over each city and append to the dom with innerHTML
//const cityListDOM = document.querySelector("#city-list");
const cityListDOM = document.getElementById("city-list");
for (let split of citiesArray){
   // console.log(split);
    cityListDOM.innerHTML += `<li>${split}</li>`;
}

console.log('\n'); // print an empty line
// check whether or not your array contains 'Minneapolis' using a for loop
console.log('---check whether or not your array contains "Minneapolis" using a for loop---')

for(let city = 0; city <= citiesArray.length; city++) {

    if(citiesArray[city] === 'Minneapolis'){
        console.log('Minneapolis is in the array');
    }
} // technically, this works. However, it doesn't log anything to the screen. So, if you see nothing printed then it means Minnapolis isn't in the array


console.log('\n'); // print an empty line
console.log('---another way to solve if "Minneapolis is in the array---');
let mpls = false;
for (let i of citiesArray) {
    if(i !== 'Minneapolis') {

    }
}
console.log('No, Minneapolis is not in the array')

// the code below somewhat works. When testing whether Farmington exists, the output is:
/*
Farmington is not in the array
Farmington is in the array
Farmington is not in the array
...the intent of this if else statement was to log if Minneapolis is, or is not in the array
After thinking about this, I believe I'd need to declare a variable outside of the for loop
*/
console.log('\n'); // print an empty line
for(let city = 0; city <= citiesArray.length; city++) {

    if(citiesArray[city] === 'Farmington'){
        console.log('Farmington is in the array');
    } else {
        console.log('Farmington is not in the array');
    }
}
console.log('\n'); //print an empty line into the console

/* 
After thinking about this, I believe I'd need to declare a variable outside of the for loop (gloal variable), and also, use an if else statement outside the loop in order for this to work properly
*/
let count = 0; //global variable "count" is set to 0. 
for(let city = 0; city <= citiesArray.length; city++) {

    if(citiesArray[city] === 'Minneapolis'){
        count ++; //each time "Minneapolis", count will increment by 1
    }
}

if (count > 0) { // if count is greater than 0
    console.log('Minneapolis is in the array'); // log "Minneapolis is in the array"
} else { // else, if count is still 0...
    console.log('Minneapolis is not in the array'); // log "Minneapolis is not in the array"
}

console.log('\n'); //print an empty line into the console
//Check whether or not your array contains 'Minneapolis' using a build in method
console.log('---Check whether or not your array contains "Minneapolis" using a build in method---');
if (cities.includes('Minneapolis')) {
    console.log('Minneapolis is in the array');
} else {
    console.log('Minneapolis is not in the array');
}
console.log('\n'); //print an empty line into the console
// Remove white space around each of the cities (e.g 'St. Paul' instead of ' St. Paul')
// https://bobbyhadz.com/blog/javascript-trim-all-strings-in-array
console.log('---Remove white space around each of the cities (e.g "St. Paul" instead of " St. Paul")---');
trimmedCitiesArray = citiesArray.map(element => {
  return element.trim();
});

console.log(trimmedCitiesArray);
// console.log(results);
// const results = cities.map(element => {return element.trim();});
// console.log(results);



console.log('\n'); //print an empty line into the console
// Remove duplicate cities
console.log('---Remove duplicate cities---');
let uniqueCities = [...new Set(citiesArray)];
console.log(uniqueCities);

function removeDuplicateCities(citiesArray) {
    return [...new Set(citiesArray)];
}
console.log(removeDuplicateCities(citiesArray));