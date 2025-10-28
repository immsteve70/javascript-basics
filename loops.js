// 1. Print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Print only even numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) console.log("Even:", i);
}

// 3. Use a while loop to count down from 5 to 1
let count = 5;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}

// 4. Use forEach to print each fruit
let fruits = ["apple", "mango", "grape", "orange"];
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});

// 5. Bonus: Use break/continue
for (let i = 1; i <= 10; i++) {
  if (i === 4) continue; // skip 4
  if (i === 8) break;    // stop at 8
  console.log("Loop number:", i);
}
