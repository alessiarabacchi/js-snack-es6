let cars = [
  {
    color: "purple",
    type: "minivan",
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    capacity: 5,
  },
];

// Chiedi all'utente con quante persone deve viaggiare
let passengers = prompt("Con quante persone devi viaggiare?");

// Converte l'input dell'utente in un numero
passengers = parseInt(passengers);

// Trova la prima auto che soddisfa la richiesta di capacità
let selectedCar = null;

for (let i = 0; i < cars.length; i++) {
  if (cars[i].capacity >= passengers) {
    selectedCar = cars[i];
    break; // Esce dal ciclo una volta trovata l'auto adatta
  }
}

// Verifica se è stata trovata un'auto adatta
if (selectedCar) {
  console.log("Auto selezionata:", selectedCar);
} else {
  console.log("Nessuna auto trovata con la capacità richiesta.");
}
