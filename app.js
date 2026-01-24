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

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function quadrantLocator(x, y) {
    if (x > 0 && y > 0) {
        return 1;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x < 0 && y < 0) {
        return 3;
    } else if (x > 0 && y < 0) {
        return 4;
    } else {
        return "Origin";
    }
} console.log(quadrantLocator(1, 1));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
