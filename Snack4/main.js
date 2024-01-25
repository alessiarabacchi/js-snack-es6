const teams = [
  {
    name: "Team Turtle",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Frog",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Penguin",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Hippopotamus",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Seal",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Crocodile",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Dolphin",
    score: 0,
    foul: 0,
  },
];

// Funzione per generare numeri casuali compresi tra min e max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Valorizza le proprietà dei punti fatti e dei falli subiti con numeri randomici
for (const team of teams) {
  team.score = getRandomNumber(0, 10);
  team.foul = getRandomNumber(0, 5);
}

// Creazione di un nuovo array con nomi e falli subiti utilizzando la destructuring
const teamInfoArray = teams.map(({ name, foul }) => ({ name, foul }));

// Stampare in console
console.log("Array originale:", teams);
console.log("Nuovo array con nomi e falli subiti:", teamInfoArray);
