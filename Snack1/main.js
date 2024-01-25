const guests = [
  "Dwayne Johnson",
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];

const guestsObjects = [];

guests.forEach(_guest, index) => {
    console.log(_guest, index);

    const guest = {
        name: _guest,
        placeholder: index + 1,
        tableName: "Tavolo Vip",
    };

    guestsObjects.push(guest);
}

console.log(guestsObjects);



