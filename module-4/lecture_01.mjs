"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

function selectTask5AnimalsChanged() {
    const animalValue = selectTask5Animals.value;
    txtTask5Output.value = "You selected: " + animalValue;
}

selectTask5Animals.addEventListener("change", selectTask5AnimalsChanged);

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const selectTask6girls = document.getElementById("selectTask6girls");
const txtTask6Output = document.getElementById("txtTask6Output");
for(let i = 0; i < GirlsNames.length; i++) {
    const option = document.createElement("option");
    option.value = i.toString();
    option.appendChild(document.createTextNode(GirlsNames[i]));
    selectTask6girls.appendChild(option);

}
function selectGirlsChange() {
    const value = parseInt(selectTask6girls.value);
    const girlName = GirlsNames[value];
    txtTask6Output.innerHTML = 'You selected: $(value), $(name)';
}
selectTask6girls.addEventListener("change", selectGirlsChange);