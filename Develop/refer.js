//   Comparison operators  //


var a = "50";
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;

// Evaluates to true
var expression1 = (b === e);

// Evaluates to false
var expression2 = (e < d);

// Use comparison operators so all expressions below log to the console as true
// Strict equality (===) returns false; Equality returns true (==)
console.log(a == b);

// b and e both hold number 50 and are strictly equal
console.log(b === e);

// c is greater than b returns true
console.log(c > b);

// d is less than 1 returns true
console.log(d < 1);

// Use logical operators so all expressions below log to the console as true
// Use || to return true
console.log(expression1 || expression2);

//Use ! and && to return true
console.log(expression1 && !expression2);


// Remove (!) from expression1 so one is true 
console.log( expression1 || expression2);
  

//   Comparison operators  //


//   Condtional Statements  //


//Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x < 25);
var expression2 = (x > 50);

// Write Your JavaScript Code Here
// Check if both expressions are true using &&

if(expression1 && expression2) {
    console.log("True ✅ True ✅");

// If both conditions are not true, check if expression1 is true
} else if (expression1) {
    console.log("True ✅ False ❌");

// If expression1 is not true, then check if expression2 is true
} else if (expression2) {
    console.log("False ❌ True ✅");

// If none of the conditions above evaluate to true, both expressions must be false
} else {
    console.log("False ❌ False ❌");
}


//   Condtional Statements  //


//   Iteration / For loops  //


// We use a for-loop to execute code more than once
for (var i = 0; i < 5; i++) {
    // This is the block of code that will run each time
    console.log("This is the current value of i: " + i + ".");
}

// For-loops are often used to iterate over arrays
var zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];

//To determine how many times the loop should execute, we use the array's length
for (var i = 0; i < zooAnimals.length; i++) { 
    console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}3


//   Iteration / For loops  //


//   Functions //


// Functions are reusable blocks of code that perform a specific task
// This is a function declaration 
function declareHello() { 
    console.log("Hello, I am a function declaration.");
    console.log("-----------------------------------");
    // Return stops the execution of a function
    return;
  }
  
  // This is a function expression
  var expressHello = function() { 
    console.log("Hello, I am a function expression.");
    console.log("-----------------------------------");
    return;
  };
  
  // Functions must be called to execute
  declareHello(); 
  expressHello();
  
  //Functions can be called again to make the block of code execute again
  declareHello(); 
  
  // Functions can take parameters.
  // Parameters give a name to the data to be passed into the function
  function declareHelloAgain(x,y,z) { 
    console.log("Hello, my parameter's values are " + x + ", " + y + ", and " + z);
    console.log("-----------------------------------");
    return;
  }
  
  // Function arguments give parameters their values
  // Here the parameter x is given the value 7 when the function is called
  declareHelloAgain(7, "Hello", true);


//   Functions  //


//   Scope  //
 

// A variable declared in global scope is available to all functions
var hello = "Hello"; 

function sayHello() {
  console.log(hello);
  return;
}

var sayHelloAgain = function () {
  console.log(hello);
  return;
};

sayHello();
sayHelloAgain();

//A variable declared in local scope is only available to that function
function sayGoodbye() { 
  var goodbye = "Goodbye";
  console.log(goodbye);
  return;
}

//This will throw an error
var sayGoodbyeAgain = function () { 
  console.log(goodbye);
  return;
};

// Shadowing happens when the same variable is used in the local and global scope
var shadow = "Hello";
 console.log(shadow);

// Logs "Hello"
function sayWhat() {
  console.log(shadow);
  return;
}

//Logs "Goodbye"
var sayWhatAgain = function () {
  var shadow = "Goodbye";
  console.log(shadow);   
};

sayGoodbye();
sayWhat();
sayWhatAgain();


//   Scope  //

//   Methods  //


var comparisonOperators = ["Equal", "Not Equal", "Strict Equal", "Strict Not Equal", "Greater Than", "Less Than"];
var arithmaticOperators = ["+", "-", "%"];
var logicalOperators = ["and", "or", "not"];
var myString = "Hello String";

//Array Methods
// Sorts comparisonOperators array and returns the sorted array
comparisonOperators.sort(); 

//Logs sorted array
console.log(comparisonOperators);

// Adds elements to end of an array. Takes in at least one parameter
arithmaticOperators.push("%");

//Logs array with element "%" added to end
console.log(arithmaticOperators);

//Returns selected elements as a new array.
var logicalOperatorsSliced = logicalOperators.slice(0,2);

//Logs new array
console.log(logicalOperatorsSliced);

// The orginal array is unchanged
console.log(logicalOperators);

//String Methods
//Replaces "String" with "World" and returns new string
var myNewString = myString.replace("String", "World");
console.log(myNewString);

//The orginal string is unchanged
console.log(myString);


//   Methods  //

//   Objects  //


// Objects are a collection of properties
var planet = {
    // Properties are made up of key-value pairs
    name: "Earth",
    age: "4.543 billion years",
    moons: 1,
    isPopulated: true,
    population: "7.594 billion"
  };
  
  // To access a property's value that is a string, number or booleean, use the object's name and the associated key	
  // Uses dot notation and logs "Earth"	
  console.log(planet.name);
      
  // Uses bracket notation and logs "Earth"
  console.log(planet["name"]);


  //   Objects  //

  //   Object Methods  //


// Objects can store more than primitive data types like strings, booleans and numbers
var planet = {
    name: "Earth",
    age: "4.543 billion years",
    moons: 1,
    isPopulated: true,
    population: "7.594 billion",
    // Objects can store arrays in a key-value pair
    neighboringPlanets: ["Mars", "Venus"],
    // Objects can also store methods
    tellFunFact: function () {
      console.log("The earth is the only planet in our solar system not named after a Roman god or goddess.");
    },
    showWarning: function () {
      console.log("Space junk falls into Earth's atmosphere at a rate of about one a day.");
    }
  };
  
  // To access a value in an array, use the name of the object, the key and the index.
  // Logs "Mars" using dot notation
  console.log(planet.neighboringPlanets[0]);
  
  // Logs "Mars" using bracket notation
  console.log(planet["neighboringPlanets"][0]);
  
  // To call a method, use the name of the object and the key. Don't forget the ()!
  planet.tellFunFact();
  planet.showWarning();

  
  //   Object Methods  //






