// task №101
// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
    for (let x = 0; x < contacts.length; x++) {
        if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop)) {
                return contacts[x][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}
lookUpProfile("Akira", "likes");





// task №102
function randomFraction() {

    // Only change code below this line

    return Math.random();

    // Only change code above this line
}




// task №103
function randomWholeNum() {

    // Only change code below this line

    return Math.floor(Math.random() * 10);
}



// task №104
function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    // Only change code above this line
}



// task №105
function convertToInteger(str) {
    return parseInt(str)
}

convertToInteger("56");





// task №106
function convertToInteger(str) {
    return parseInt(str, 2)
}

convertToInteger("10011");



// task №107
function checkEqual(a, b) {
    return a === b ? 'Equal' : 'Not Equal'
}

checkEqual(1, 2);




// task №108
function checkSign(num) {
    return num > 0 ? "positive" :
        num < 0 ? "negative" :
            "zero";
}

checkSign(10);