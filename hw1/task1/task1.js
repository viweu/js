const musicCollection = {
  albums: [
    { title: "Huncho Jack", artist: "Travis Scott", year: 2017 },
    { title: "23", artist: "Central Cee", year: 2022 },
    { title: "I Am Music", artist: "Lil Wayne", year: 2023 },
    { title: "Pink Friday", artist: "Nicki Minaj", year: 2020 },
  ],

  [Symbol.iterator]: function() {
    let index = 0;
    const albums = this.albums;
    return {
      next: function() {
        if (index < albums.length) {
          return {
            value: albums[index++],
            done: false,
          };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// Перебор коллекции с помощью цикла for...of
for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
