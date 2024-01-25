const students = [
  { id: 213, name: "Marco della Rovere", grades: 78 },
  { id: 110, name: "Paola Cortellessa", grades: 96 },
  { id: 250, name: "Andrea Mantegna", grades: 48 },
  { id: 145, name: "Gaia Borromini", grades: 74 },
  { id: 196, name: "Luigi Grimaldello", grades: 68 },
  { id: 102, name: "Piero della Francesca", grades: 50 },
  { id: 120, name: "Francesca da Polenta", grades: 84 },
];

// Array di stringhe contenente i nomi in maiuscolo
const uppercaseNames = students.map((student) => student.name.toUpperCase());

// Array di oggetti "studente" con un totale di voti superiore a 70
const highGradesStudents = students.filter((student) => student.grades > 70);

// Array di oggetti "studente" con un totale di voti superiore a 70 e id superiore a 120
const highGradesAndIdStudents = students.filter(
  (student) => student.grades > 70 && student.id > 120
);

// Stampare i risultati
console.log("Nomi in maiuscolo:", uppercaseNames);
console.log("Studenti con voti superiori a 70:", highGradesStudents);
console.log(
  "Studenti con voti superiori a 70 e id superiore a 120:",
  highGradesAndIdStudents
);
