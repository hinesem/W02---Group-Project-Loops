# Group Project Setup

### Key Take Aways
- Reading documentation
- Talking about code
- Allowing each member of the group to drive
- Better understanding of built in methods

## Part 1: Setup

Each person should complete the following:

- [ ] Introductions
- [ ] Make sure screen sharing is enabled and works for everyone
- [ ] Fork and clone this repository
- [ ] Open the project in VS Code
- [ ] Open the `index.html` in a browser
- [ ] Take a screen shot (`cmd-shift-4` and drag the portion of the screen)
- [ ] Submit your screenshot to this assignment

> NOTE: The screen shot is just to confirm everyone knows how to do this. It can be of code or the HTML page.

## Part 2: Built in Methods

Each member of the group should spend 10 minutes researching **one** or **two** of the following. Assign these out so that there is no overlap. After 10 minutes has passed, each member of the group should screen share and talk about what they learned.

> NOTE: Don't worry about what a `prototype` is at this point. It's something that will make more sense later down the road.

### String `split()`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

### Array `join()`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

### String `replace()`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

### Array `lastIndexOf()`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

### Array `isArray()`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

### String `trim()`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

### Remainder `%`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

## Part 3

If possible, use VS Code Live Share to make collaboration easier. Make sure each member of the group has a copy of the completed code.

https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare

### Activity

- [ ] Create an `index.html`, `style.css` and `client.js` file.
- [ ] Create a string of city names representing the city of each group member separated by a comma.

```
let cities = 'Minneapolis, St. Paul, etc.';
```

- [ ] Console log whether or not the variable cities is an array (use the built in method from above).
- [ ] Turn the cities into an array using one of the built in methods above.

```
let citiesArray = cities.???;
```

- [ ] Loop over each city and append to the dom with `innerHTML`
- [ ] Check whether or not your array contains 'Minneapolis' using a `for loop`
- [ ] Check whether or not your array contains 'Minneapolis' using a build in method

### Stretch Goals

- [ ] Remove white space around each of the cities (e.g 'St. Paul' instead of ' St. Paul')
- [ ] Remove duplicate cities
