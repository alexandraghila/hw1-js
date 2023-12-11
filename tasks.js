// Task 1
const person = " ";
const age = 23;
const surname = "Popescu";
const CID = "12345678910";
console.log(
  `Task 1:
  The person's information is: 
    Name: ${surname}
    Age: ${age}
    ID: ${CID}`
);

// Task 2
let toBeMultiplied = 6;
console.log(
  `Task 2:
    Mutiplication table fro the variable 'toBeMultiplied':`
);
for (let i = 1; i <= 10; i++) {
  let result = toBeMultiplied * i;
  console.log(`${toBeMultiplied} * ${i} = ${result}`);
}

// Task 3
const matthewName = "matthew";
let promptName = prompt("Please enter the name:");
const firstSport = "volley";
const secondSport = "football";
const thirdSport = "tennis";
const story = `Matthew's hobby list wil expand after years. He learned to play ${firstSport}. Then he goes to ${secondSport}, loves that sport. In the end, he switched to ${thirdSport} and started playing it at a professional level.`;
console.log("Task 3:");
if (promptName.toLowerCase() === matthewName) {
  console.log(`Matthew is a clever boy and likes sports. ${story}`);
} else {
  console.log(" The name you entered is incorrect!");
}

// Task 4
let ageLimit = 18;
let promptAge = prompt("Please enter your age:");
console.log(
  `Task 4:
  Is your age over the age limit?`,
  Boolean(promptAge >= ageLimit)
);

// Task 5
let firstName = prompt("Please enter your first name:");
let lastName = prompt("Please enter your last name:");
let fullName = firstName + " " + lastName;
console.log(
  `Task 5:
  Your complete name is: ${fullName}.`
);
