var x  = 8 | 4;

var convert = parseInt("11000", 2);

console.log(x);
console.log(convert);

function checkAnd(num) {
    if (num & 1) {
        console.log(num);
        console.log("This is an odd number.");
    }
    else {
        console.log("This is an even number.");
    }
}

checkAnd(3);

function checkOr(num) {
    if (num | 2) {
        console.log(num);
    }
    else {
        console.log("Nope");
    }
}

checkOr(0);

function allOps(one, two) {
    var and = one & two;
    var or = one | two;
    var xor = one ^ two;
    console.log("For the AND operator, the number is: " + and);
    console.log("For the OR operator, the number is: " + or);
    console.log("For the XOR operator, the number is: " + xor);
};

function notNum(num) {
    var not = ~num;
    console.log("For the NOT operator, the number is: " + not);
}

allOps(2, 5);
notNum(3);
