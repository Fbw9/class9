// //1 Write a function that takes an array and a callback function as arguments. When the callback function is called, it should write "The first name in names is Tyler" to the console.

// var names = ["Tyler", "Cahlan", "Ryan", "Colt", "Tyler", "Blaine", "Cahlan"];

// function first(array, secondFunction) {
//   secondFunction(array[0]);
// };

// function writeSentence(x) {
//   console.log(`The first name in names is ${x}`);
// }

// first(names, writeSentence);

// //2 Do the same, but for the last name in the array. It should print out The last name in names is Cahlan".


// function last(array, callback) {
//   callback(array[array.length - 1]);
// }

// last(names, function(nameLast){
//   console.log(`The last name in names is ${nameLast}`)
// });

// //3 Write a function (and set to a variable) with the arguments num1, num2, and a callback function. When the function is called with 4, 3, and the callback function, it should console log "The answer is 12"

// function multiply(numA, numB, callback) {
//   callback(numA * numB);
// };

// multiply(4, 3, function(answer) {
//   console.log("The answer is " + answer);
// });

// //4 Write a function that passes an array, a name (string), and a callback function. When calling the function with the name 'Colt' for example, it should loop through the array, check if any of the elements match that name before calling the callback function. If the name is in the array, it should print 'Colt is in the array'...If not, it should print 'Colt is not in the array'

var names = ["Tyler", "Cahlan", "Ryan", "Colt", "Blaine"];

// function contains(array, str, callback) {
//   callback(array.indexOf(str), str);
  
// };


// contains(names, "Cahlan", function(result, string) {
//   if (result == -1) {
//     console.log("Colt is not in the array") 
//   } else {
//     console.log(`${string} is in the array in position ${result}`);
//   }
// });

// console.log(names[0]);


function contains2(array, string, callback) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == string) {
      callback(true);
    } else {
      callback(false);
    }
  }
}

contains2(names, 'Ryan', function(result) {
  if (result) {
    console.log("This is name is in the array");
  } else {
    console.log("This name is not in here!");
  }
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//5 Write a function that passes an array and a callback function. When the function is called with the callback function, the output should be:
//"The item in the 1 position is Cachlan"
//"The item in the 2 position is Ryan"
//ETC for all names and indeces 
// var names = ["Tyler", "Cahlan", "Ryan", "Colt", "Tyler", "Blaine", "Cahlan"];
var each = function(array, callback) {
  for (i = 0; i < array.length; i++) {
    // let items = array[i];
    // let index = array.indexOf(array[i]);
    callback(array[i], i);
  }
};

//Code Here for each


each(names, function(item, index) {
  console.log(`The item in the ${index} position is ${item}`);
});

//6 Create a function that has a value (of the id key in the below object as a parameter) and a callback function. When the function with "15a" and the callback function is passed, it should spit out "The user with the id 16t has the email of cahlan@gmail.comthe name of Cahlan and the address of 135 East 320 North"

var users = [
  {
    id: "12d",
    email: "tyler@gmail.com",
    name: "Tyler",
    address: "167 East 500 North"
  },
  {
    id: "15a",
    email: "cahlan@gmail.com",
    name: "Cahlan",
    address: "135 East 320 North"
  },
  {
    id: "16t",
    email: "ryan@gmail.com",
    name: "Ryan",
    address: "192 East 32 North"
  }
];

var getUserById = function(value, cb) {
  for(let i = 0; i < users.length; i++) {
    if (users[i].id == value) {
      cb(users[i]);
    }
  }
};



getUserById("15a", function(user) {
  console.log(`The user with the id ${user.id} has the email of ${user.email} the name of ${user.name} and the address of ${user.address}`);
});
