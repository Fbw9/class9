// Creates a new Map object
var mapObj = new Map();
// Defines an object that will be used a key in the map
var objKey = {third: 'c'};

// Adds a new element having a String as its key and a String as its value
mapObj.set('first', 'a');
// Adds a new element having a Number as its key and an Array as its value
mapObj.set(2, ['b']);
// Adds a new element having an Object as its key and a Number as its value
mapObj.set(objKey, 3);
// Adds a new element having an Array as its key and a String as its value
mapObj.set(['crazy', 'stuff'], 'd');

// Checks whether an element having a key of "2" exists in the map. Prints "true"
console.log(mapObj.has(2));

// Checks whether an element having a key of "test" exists in the map. Prints "false"
console.log(mapObj.has('test'));

// Retrieves the element having key of "first". Prints "a"
console.log(mapObj.get('first'));

// Retrieves the element having key of "['crazy', 'stuff']". Prints "undefined" because even if the value of this array are identical to the one used to set a value, they are not the same array
console.log(mapObj.get(['crazy', 'stuff']));

// Retrieves the element having as a key the value of objKey. Prints "3" because it's exactly the same object using to set the element
console.log(mapObj.get(objKey));

// Retrieves the element having key of "empty". Prints "undefined"
console.log(mapObj.get('empty'));

// Retrieves the map size. Prints "4"
console.log(mapObj.size);

// Deletes the element having key of "first". Prints "true"
console.log(mapObj.delete('first'));

// Retrieves the map size. Prints "3"
console.log(mapObj.size);

// Loops over each element of the map
mapObj.forEach(function(value, key, map) {
    // Prints both the value and the key
    console.log('Value ' + value + ' is associated to key ' + key);
});

var entries = mapObj.entries();
var entry = entries.next();
// Loops over each element of the map
while(!entry.done) {
    // Prints both the value and the key
    console.log('Value ' + entry.value[1] + ' is associated to key ' + entry.value[0]);
    entry = entries.next();
}

var values = mapObj.values();
var value = values.next();
// Loops over each value of the map
while(!value.done) {
    // Prints the value
    console.log('Value: ' + value.value);
    value = values.next();
}

var keys = mapObj.keys();
var key = keys.next();
// Loops over each key of the map
while(!key.done) {
    // Prints the key
    console.log('Key: ' + key.value);
    key = keys.next();
}

// Deletes all the elements of the map
mapObj.clear();

// Retrieves the map size. Prints "0"
console.log(mapObj.size);