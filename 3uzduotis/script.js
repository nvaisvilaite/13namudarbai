var countries = [
  {name: "Portugalija", area: 92212, people: 10347892},
  {name: "Graikija", area: 131957, people: 10718565},
  {name: "Italija", area: 301338, people: 60317116},
  {name: "Norvegija", area: 385207, people: 5391369},
  {name: "Prancūzija", area: 551695, people: 67413000}
]

function data(name, area, people){
  var m = area * 1000000;
  var peopleArea = m / people;
  var peopleInM = people / 1000000;
  console.log("Šalis: " + name + " joje gyvena " + peopleInM.toFixed(2) + " mln. gyventojų.");
  console.log("Valstybės plotas: " + area + " km², Valstybės plotas tenkantis vienam gyventojui: " + peopleArea.toFixed(2) + " m²");
}

for (var i = 0; i < countries.length; i++){
  data(countries[i].name, countries[i].area, countries[i].people);
}
