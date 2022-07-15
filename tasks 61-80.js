// task №61
// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);




// task №62
function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        return "Over 100";
    }

    if (val > 10) {  // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);



// task №63
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }
    
    if (val >= 10) {  // Change this line
        return "10 or Over";
    }
    
    return "Less than 10";
}

testGreaterOrEqual(10);





// task №64
function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }
    
    if (val < 55) {  // Change this line
        return "Under 55";
    }
    
    return "55 or Over";
}

testLessThan(10);




// task №65
function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }
    
    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }
    
    return "More Than 24";
}

testLessOrEqual(10);




// task №66
function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    // Only change code above this line
    return "No";
}

testLogicalAnd(10);




// task №67
function testLogicalOr(val) {
    // Only change code below this line

    if (val > 20 || val < 10) {
        return "Outside";
    }




    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);





// task №68
function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

testElse(4);




// task №69
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }

}

testElseIf(7);



// task №70
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);




// task №71
function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        return 'Tiny'
    } else if (num < 10) {
        return 'Small'
    } else if (num < 15) {
        return 'Medium'
    } else if (num < 20) {
        return 'Large'
    } else if (num >= 20) {
        return 'Huge'
    }
    return "Change Me";
    // Only change code above this line
}

testSize(7);





// task №72
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
        return "Hole-in-one!";
    } else if (strokes <= par - 2) {
        return "Eagle";
    } else if (strokes == par - 1) {
        return "Birdie";
    } else if (strokes == par) {
        return "Par";
    } else if (strokes == par + 1) {
        return "Bogey";
    } else if (strokes == par + 2) {
        return "Double Bogey";
    } else {
        return "Go Home!";
    }
    // Only change code above this line
}

golfScore(5, 4);





// task №73
function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            return "alpha";
            break;
        case 2:
            return "beta";
            break;
        case 3:
            return "gamma";
            break;
        case 4:
            return "delta";
            break;
    }


    // Only change code above this line
    return answer;
}

caseInSwitch(1);



// task №74
function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 'a':
            return 'apple'
            break;
        case 'b':
            return 'bird'
            break;
        case 'c':
            return 'cat'
            break;
        default:
            return 'stuff'
            break;
    }


    // Only change code above this line
    return answer;
}

switchOfStuff(1);





// task №75
function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = 'Low'
            break;
        case 4:
        case 5:
        case 6:
            answer = 'Mid'
            break;
        case 7:
        case 8:
        case 9:
            answer = 'High'
            break;
    }


    // Only change code above this line
    return answer;
}

sequentialSizes(1);


// task №76
function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line

    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    // Only change code above this line
    return answer;
}

chainToSwitch(7);



// task №77
function isLess(a, b) {
    // Only change code below this line
    return a <= b
    // Only change code above this line
}

isLess(10, 15);




// task №78
// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
        return undefined;
    }


    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);



// task №79
var count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


// task №80
var myDog = {
    // Only change code below this line
    'name': 'Dog',
    legs: 4,
    tails: 1,
    friends: ['cat, parrot']

    // Only change code above this line
};