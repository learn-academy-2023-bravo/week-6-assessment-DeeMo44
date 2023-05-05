// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("sentence", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" },
    ];

    expect(sentence(people)).toEqual([
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is president of the galaxy.",
      "Arthur Dent is a radio employee.",
    ]);
  });
});

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
//create a function that recieves an array as a parameter
const sentence = (array) => {
  //use map method to iterate through the array, since there are objects in the array we will use object as an alias for our values
  //using dot notation we want to access the names
  //use split method with a space to seperate first and last name
  //use charAt method and toUpperCase method to target the first letter (0 index) of each name
  //use the slice method to and combine the capitalized first letter with the rest of the name using + operator
  //use join method with a space to bring the first and last names together
  //use the + operator to add the word "is"
  //use the + operator to add the occupation of each name
  //use the  + operator to add the period at the end
  //return that all at once as a new array since we used .map()
  return array.map(
    (object) => object.name.split(" ").map((value) => value.charAt(0).toUpperCase() + value.slice(1)).join(" ") + " is " +object.occupation +".")}

//this was a previous attempt that i kept to help me make the one liner
// const sentence = (array) => {
//   for(i=0; i<array.length; i++){
//     let firstName = array[i].name.split(" ")[0].charAt(0)
//     let lastName = array[i].name.split(" ")[1]
//   }
// }

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("divideBy3", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {

    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
    // Expected output: [ 2, 1, -1 ]

    expect(divideBy3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(divideBy3(hodgepodge2)).toEqual([ 2, 1, -1 ])
  });
});

// b) Create the function that makes the test pass.
//create a function named divideBy3 that takes an array as a parameter
const divideBy3 = (array) => {
  //filter all values in the array for only numbers using typeof operator
  //the typeof operator is checking to see if the current value being iterated is a number
  //since the typeof operator returns a string we use "number" 
  //map through the array of only numbers with number as our alias for them
  //number % 3 will give us our remainders
  //return the new array
  return array.filter(value =>(typeof value === "number")).map(number=>(number%3))
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("sumCube", ()=>{
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4];
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10];
    // Expected output: 1125

    expect(sumCube(cubeAndSum1)).toEqual(99)
    expect(sumCube(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.

//create a function named sumCube that takes an array as a parameter
const sumCube = (array) => {
  //use map method to iterate through the array and cube all values
  //use reduce method to take each value of the array and add them togther using the + operator, starting at 0
  //return that new array
  return array.map(value=> (value**3)).reduce((sum, num) => sum + num, 0)
}
