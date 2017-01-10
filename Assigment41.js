//ES6 Map()

var myMap = new Map();

var keyString = "a string",
    keyObj = {},
    keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

myMap.size; // 3

// getting the values
myMap.get(keyString);    
myMap.get(keyObj);       
myMap.get(keyFunc);      

//Errors
myMap.get("a string");   // "value associated with 'a string'"
                         // because keyString === 'a string'

myMap.get({});           // undefined, because keyObj !== {}
myMap.get(function() {}) // undefined, because keyFunc !== function () {}


//iterate 
myMap.forEach(function(value, key) {
  console.log(`${key} - ${value}`);
});


//ES6 Set()
/*Create Set() instance and then add values using add() method    Note: Check new property before adding, if it’s there or not using has()    method. */
var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add("some text");
var o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // o is referencing a different object so this is okay

mySet.has(1); // true
mySet.has(3); // false, 3 has not been added to the set
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true


/*Add multiple values using Set(), then iterate them using for loop. */

// Iterate set entries with forEach for printing value
mySet.forEach(function(value) {
  console.log(value);
});



/*Create an array(stringArray) of strings  then set this array to Set instance using:   var mySet = new Set(stringArray); 
 Now check if all values are there or not using set’s has() method. Print all values of array in one time(using spread operator)  */

var myArray = ["value1", "value2", "value3"];

// Use the regular Set constructor to transform an Array into a Set
var mySet = new Set(myArray);

mySet.has("value1"); // returns true

// Use the spread operator to transform a set into an Array.
console.log([...mySet]); // Will show you exactly the same Array as myArray