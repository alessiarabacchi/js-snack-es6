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

const guestObject = guest.map((guest, index) =>
  generateGuestObject(guest, index + 1, "Tavolo Vip")
);

function generateGuestObject(_name, _placeholder, _table) {
  return {
    name: _name,
    placeholder: _placeholder,
    table: _table,
  };
}

console.log(guestObject);
