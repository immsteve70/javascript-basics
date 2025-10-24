// Ask for (or set) your age
let age = 21;

// Check if the user is eligible to vote
if (age >= 18) {
  console.log("You are old enough to vote!");
} else {
  console.log("Sorry, you are too young to vote.");
}

// Add a second check:
let country = "USA";
if (country === "USA" && age >= 22) {
  console.log("You can vote in Malaysia!");
} else {
  console.log("Not eligible to vote here.");
}

// Try a ternary version:
let message = age >= 18 ? "Adult" : "Minor";
console.log("You are an:", message);
