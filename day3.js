// 1. Simple function
function sayHello() {
  console.log("Welcome to JavaScript Day 3!");
}
sayHello();

// 2. Function with parameters
function describePerson(name, age) {
  console.log(`${name} is ${age} years old.`);
}
describePerson("Emmanuel", 19);

// 3. Function that returns a value
function square(num) {
  return num * num;
}
console.log(`Square of 5: ${square(5)}`);

// 4. Arrow function
const cube = (num) => num * num * num;
console.log(`Cube of 3: ${cube(5)}`);

// 5. Default parameter
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Rehma");
greet("Steve");
