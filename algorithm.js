var findNthElement = function(array, n) {
    if (array.length == 1) { //runs once
        return array[n]; //runs once
    }

    var middle = Math.floor(array.length / 2); //runs once
    if (n < middle) { //runs once
        return findNthElement(array.slice(0, middle), n); //runs once
    }
    else {
        return findNthElement(array.slice(middle, array.length), n - middle); //runs once
    }
};

//second example

var findElements = function(array, toFind) { //runs once
    var elements = []; //runs once
    for (var i=0; i<toFind.length; i++) { //runs n times (n + n + n = 3n)
        var element = findNthElement(array, toFind[i]); //runs n times
        elements.push(element); //runs n times
    }
    return elements; //runs once
};

//third example

var isOdd = function(number) {
    var remainder = number % 2; //runs once
    return remainder == 1; //runs once
};

//fourth example

var sampleAutocorrelationMatrix = function(array) {
    var matrix = []; //runs once
    for (var i=0; i<array.length; i++) { //runs n times (n + n + n = 3n)
        var row = []; //runs n times
        for (var j=0; j<array.length; j++) { //runs n^2 times
            row.push(array[i] * array[j]); //runs n^2 times
        }
        matrix.push(row); //runs n times
    }
};

//fifth example

var doubleArray = function(array) {
    for (var i=0; i<array.length; i++) { //runs n times (n + n + n = 3n)
        array[i] = array[i] * 2; //runs n times
    }
    return array;
};

//sixth example

var triangleNumbers = function(n) {
    if (n == 0 || n == 1) { //runs once
        return n;
    }
    return triangleNumbers(n - 1) + triangleNumbers(n - 1) - triangleNumbers(n - 2) + 1; //runs once
};