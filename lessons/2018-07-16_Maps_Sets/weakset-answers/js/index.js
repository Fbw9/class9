// Creates a new WeakSet object
var weakset = new WeakSet();
// Defines an object that will be stored in the set
var obj = {name: 'Aurelio De Rosa'};

// Adds an object to the set
weakset.add(obj);
// Adds a function to the set
weakset.add(function(){});
// Adds another object to the set
weakset.add({name: 'John Doe'});

// Checks whether the Object {name: 'John Doe'} exists in the weak set. Prints "false" because despite the fact that the passed object and the stored one have the same values and properties, they are different objects
console.log(weakset.has({name: 'John Doe'}));

// Checks whether the Object obj exists in the weak set. Prints "true" because it's the same object
console.log(weakset.has(obj));

// Deletes the obj element. Prints "true"
console.log(weakset.delete(obj));

// Deletes the function(){} element. Prints "false" because the passed function and the stored one they are different functions (objects)
console.log(weakset.delete(function(){}));

// Deletes all the elements of the weak set
weakset.clear();