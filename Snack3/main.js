// Definizione dell'array di oggetti (biciclette)
const biciclette = [
  { nome: "Bici A", peso: 8.2 },
  { nome: "Bici B", peso: 7.5 },
  { nome: "Bici C", peso: 9.1 },
  { nome: "Bici D", peso: 7.8 },
];

// Trovare la bici con il peso minore utilizzando la destructuring e il template literal
let biciMinore = biciclette[0];

for (const bici of biciclette) {
  if (bici.peso < biciMinore.peso) {
    biciMinore = bici;
  }
}

// Stampare la bici con il peso minore
console.log(
  `La bici più leggera è ${biciMinore.nome} con un peso di ${biciMinore.peso} kg.`
);
