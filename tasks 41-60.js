

// Task №41
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1];


// task №42
// Setup
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

// Only change code below this line



// task №43
// Setup
var myArray = [["John", 23], ["cat", 2]];
// Only change code below this line
var removedFromMyArray = myArray.pop();


// task №44
// Setup
var myArray = [["John", 23], ["dog", 3]];
// Only change code below this line
var removedFromMyArray = myArray.shift();



// task №45
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
// Only change code below this line

// task №46
var myList = [['milk', 2], ['milk', 2], ['milk', 2], ['milk', 2], ['milk', 2],];



// task №47
function reusableFunction() {
  console.log('Hi World')
}
reusableFunction()


// task №48
function functionWithArgs(param1, param2) {
  console.log(param1 + param2)
}
functionWithArgs(1, 2)




// task №49
// Declare the myGlobal variable below this line
var myGlobal = 10;
var oopsGlobal = 5;

function fun1() {
  // Assign 5 to oopsGlobal Here

}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}





// task №50
function myLocalScope() {
var myVar
  // Only change code below this line

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);




// task №51
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
var outerWear = 'sweater';


  // Only change code above this line
  return outerWear;
}

myOutfit();



// task №52
function timesFive(num) {
  return num * 5
}



// task №53
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5
}

// Only change code above this line

addThree();
addFive();



// task №54
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
var processed = processArg(7);




// task №55
function nextInLine (arr, item) {
  testArr.push(item);
  testArr.shift(arr[0]);
  return arr[0] || item;
}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


// task №56
function welcomeToBooleans() {

  // Only change code below this line
  return true; // Change this line
  // Only change code above this line
}




// task №56
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if(wasThatTrue) {
  return "Yes, that was true"
}
return "No, that was false"

  // Only change code above this line

}


// task №57
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);a




// task №58
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);




// task №59
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");



// task №60
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
