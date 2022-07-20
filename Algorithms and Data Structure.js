// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// Solution: 
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i
    }
  }
  return arr.length
}


getIndexToIns([40, 60], 50)


///==============


// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

// Solution: 


function mutation(arr) {
  const lowerCaseArr = []
  const result = []
  for (let j = 0; j < arr.length; j++) {
    lowerCaseArr.push(arr[j].toLowerCase())
  }
  for (let i = 0; i < lowerCaseArr[1].length; i++) {
    if(lowerCaseArr[0].indexOf(lowerCaseArr[1][i]) < 0) {
      return false
    }
  }
    return true
}


mutation(["hello", "hey"]);

