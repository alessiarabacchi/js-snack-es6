const vips = [
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

const tavoloVip = "Tavolo Vip";

const segnaposti = vips.map((ospite, indice) => ({
  nomeTavolo: tavoloVip,
  nomeOspite: ospite,
  postoOccupato: indice + 1,
}));

console.log(segnaposti);

const studenti = [
  { id: 213, nome: "Marco della Rovere", voti: 78 },
  { id: 110, nome: "Paola Cortellessa", voti: 96 },
  { id: 250, nome: "Andrea Mantegna", voti: 48 },
  { id: 145, nome: "Gaia Borromini", voti: 74 },
  { id: 196, nome: "Luigi Grimaldello", voti: 68 },
  { id: 102, nome: "Piero della Francesca", voti: 50 },
  { id: 120, nome: "Francesca da Polenta", voti: 84 },
];

const studentiMaiuscolo = studenti.map((studente) =>
  studente.nome.toUpperCase()
);

const studentiVotiSuperiori70 = studenti.filter(
  (studente) => studente.voti > 70
);

const studentiVotiIdSuperiori70 = studenti.filter(
  (studente) => studente.voti > 70 && studente.id > 120
);

console.log("Studenti in maiuscolo:", studentiMaiuscolo);
console.log("Studenti con voti superiori a 70:", studentiVotiSuperiori70);
console.log(
  "Studenti con voti superiori a 70 e id superiori a 120:",
  studentiVotiIdSuperiori70
);

/*/