console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 0) {
        for (let i = 0; i >= count; i--) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    } else {
        for (let i = 0; i<= count; i++) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    }
}
printOdds(-100);
console.log("--------------------")
printOdds(100)
console.log(" ")

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16`
    {
        if (age > 16) {
            console.log(aboveSixteen)
        } else
            console.log(belowSixteen)
        }
    }
    checkAge("Garrett", 25);
    checkAge("Rick", 5);
    checkAge("John", 13);
    checkAge("Ira", 35);
    console.log(" ")

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function quadrantLocator(x, y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x < 0 && y < 0) {
        return "Quadrant 3";
    } else if (x > 0 && y < 0) {
        return "Quadrant 4";
    } else if (x == 0 && y != 0) {
        return "X-Axis";
    } else if (x != 0 && y == 0) {
        return "Y-Axis"
    } else {
        return "Origin";
    }
} console.log(quadrantLocator(1, 1));
console.log(quadrantLocator(-2, 2));
console.log(quadrantLocator(-3, -3));
console.log(quadrantLocator(4, -4));
console.log(quadrantLocator(5, 0));
console.log(quadrantLocator(0, 6));
console.log(quadrantLocator(0, 0));
console.log(" ")

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function triangleType() {
    
}
Length * Width * Height % 2 

console.log(" ")

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
