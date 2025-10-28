// let names = ["Emmanuel", "Joycelyn", "Kavinesh", "Zechariah", "Yavinthrran"];


// for (let name of names) {
    // console.log(name);
// }

//    let numbers = [1, 2, 3, 4, 5];

// map → transform each element
//    let doubled = numbers.map(num => num * 2);
//    console.log(doubled); // [2, 4, 6, 8, 10]

    // filter → keep only matching elements
//    let even = numbers.filter(num => num % 2 === 0);
//    console.log(even); // [2, 4]

    // reduce → combine into a single value
//    let total = numbers.reduce((sum, num) => sum + num, 0);
//    console.log(total); // 15

// 1. Create an array of your 5 favorite movies
let movies = ["Inception", "Interstellar", "Avatar", "Tenet", "The Batman"];
console.log("My movies:", movies);

// 2. Add one movie and remove one
movies.push("Oppenheimer");
movies.shift();
console.log("Updated list:", movies);

// 3. Loop through and print each movie
for (let movie of movies) {
  console.log("🎬", movie);
}

// 4. Filter movies with name length > 7
let longNames = movies.filter(movie => movie.length > 7);
console.log("Movies with long names:", longNames);

// 5. Count total characters in all movie names combined
let totalChars = movies.reduce((sum, movie) => sum + movie.length, 0);
console.log("Total characters:", totalChars);
