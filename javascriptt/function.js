// Function declaration - hoisting

function sayMyName(name) {
  return "My name is: " + name;
}

let message = sayMyName("Michael");
console.log(message);

// function expression

let dream = function () {
  console.log("My name is Maor Edri");
};
dream();

// Arrow Function

// let people = () => {
//     console.log('My name is Maor Edri')
// }

function addTwoNUmbers2(a, b) {
  return a + b;
}

let addTwoNUmbers2 = (a, b) => a + b;
