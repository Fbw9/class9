// Creates a new Set object
var set = new Set();
// Defines an array will be stored in the set
var arr = [4, 1, 9];

// Adds a new Number to the set
set.add(1);
// Adds a new String to the set
set.add('Aurelio De Rosa');
// Adds a new Object to the set
set.add({name: 'John Doe'});
// Adds a new Array element to the set
set.add(arr);

// Checks whether the string "test" is stored in the set. Prints "false"
console.log(set.has('test'));

// Checks whether the number "1" is stored in the set. Prints "true"
console.log(set.has(1));

// Retrieves the set size. Prints "4"
console.log(set.size);

// Deletes the object {name: 'Aurelio De Rosa'}. Prints "false" because even if it has the same values and properties, it's a different object
console.log(set.delete({name: 'Aurelio De Rosa'}));

// Retrieves the set size. Prints "4"
console.log(set.size);

// Deletes the array arr. Prints "true" because it's the same array
console.log(set.delete(arr));

// Retrieves the set size. Prints "3"
console.log(set.size);

// Loops over each element of the set
set.forEach(function(value, samevalue, set) {
    // Prints the value twice
    console.log('Value ' + value + ' is the same as ' + samevalue);
});

var entries = set.entries();
var entry = entries.next();
// Loops over each element of the set
while(!entry.done) {
    // Prints both the value and the key
    console.log('Value ' + entry.value[1] + ' is the same as ' + entry.value[0]);
    entry = entries.next();
}

var values = set.values();
var value = values.next();
// Loops over each value of the set
while(!value.done) {
    // Prints the value
    console.log('Value: ' + value.value);
    value = values.next();
}

// Deletes all the elements in the set
set.clear();

// Retrieves the set size. Prints "0"
console.log(set.size);