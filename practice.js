let songs = ["Don't Let Me Down", "The Scientist", "Hymn for the Weekend", "Yellow", "Everglow"];

console.log("My songs: ", songs);

songs.push("Our Song");
songs.shift();

console.log("\nUpdated List: ", songs);

console.log(songs[0]);
console.log(songs[4]);

console.log("\nSongs list: ");
for (let song of songs) {
    console.log("🎵 ", song);
}

let longSongs = songs.filter(song => song.length > 10);
console.log("\nSongs with long names: ", longSongs);

let uppercaseSongs = songs.map(song => song.toUpperCase());
console.log("Songs in UPPERCASE: ", uppercaseSongs);

let totalchar = songs.reduce((sum, song) => sum + song.length, 0);
console.log("Total Character of the songs: ", totalchar);

function findSong(song) {
    if (songs.includes(song)) {
        console.log("Found ", song);
    } else {
        console.log(`${song} not found`);
    }
}

findSong("Yellow");
findSong("Random Song");