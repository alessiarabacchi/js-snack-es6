const products = [
  { title: "Mela", price: 2.3 },
  { title: "Banana", price: 1.5 },
  { title: "Mango", price: 2 },
  { title: "Pesca", price: 1.8 },
  { title: "Pera", price: 1.5 },
  { title: "Arancia", price: 2.2 },
];

// Funzione per generare un numero casuale tra min e max inclusi
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funzione per selezionare n frutti casuali dall'array di prodotti
function selectRandomFruits(n) {
  const selectedFruits = [];

  for (let i = 0; i < n; i++) {
    const randomIndex = getRandomNumber(0, products.length - 1);
    selectedFruits.push(products[randomIndex]);
  }

  return selectedFruits;
}

// Funzione per calcolare il prezzo totale della macedonia
function calculateMacedoniaPrice(fruits) {
  let totalPrice = 0;

  for (let i = 0; i < fruits.length; i++) {
    totalPrice += fruits[i].price;
  }

  return totalPrice.toFixed(2);
}

// Scegli 2, 3 o 4 frutti casuali
const numberOfFruits = getRandomNumber(2, 4);
const selectedFruits = selectRandomFruits(numberOfFruits);

// Calcola il prezzo della macedonia
const totalPrice = calculateMacedoniaPrice(selectedFruits);

// Stampa i frutti selezionati e il prezzo totale
console.log(
  `Frutti selezionati: ${selectedFruits.map((fruit) => fruit.title).join(", ")}`
);
console.log(`Prezzo totale: €${totalPrice}`);
