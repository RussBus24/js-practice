var numbers = [1, 10, 7, 5, 3];

var swap = function(array, i, j) {
    var tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

for(var i = 0; i < numbers.length; i++) {
    console.log("You have a number of: " + numbers[i]);
    if (numbers[i + 1] < numbers[i]) {
        swap(numbers, i, i + 1);
    }
};

console.log(numbers);