// helek 1

let startNumber = 1;

for (let i = startNumber; i <= 10; i++) {
  // אם המספר זוגי, נדפיס הודעת שגיאה
  if (i % 2 === 0) {
    console.log("שגיאה: מספר זוגי!");
  } else {
    // אם המספר לא זוגי, נדפיס את המספר עצמו
    console.log(i);
  }
}

// helek 2

let count = 20;
while (count >= 0) {
  console.log(count);
  count--;
}

// helek 3

let number = 20;
do {
  console.log(number);
  number--;
} while (number >= 0);

// helek 4

let person = {
  Firstname: "Michael",
  Lastname: "Kumanov",
  Age: 23,
  Car: "lexus",
  city: "haifa",
  country: "Israel",
};

for (let key in person) {
  console.log(person[key]);
}

// helek 5

person = {
  Firstname: "Michael",
  Lastname: "Kumanov",
  Age: 23,
  Car: "lexus",
  city: "haifa",
  country: "Israel",
};

person.Car = "Lexus ISF",
person.city = "Qrayot"

for (let key in person) {
    console.log(key + ": " + person[key]);
}

// console.log(person)
// for (let key in person) {
//     console.log(person[key])
// }