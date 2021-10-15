/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");

function buildElem(pokemon) {
  let parent = document.createElement("div");
  let header = document.createElement("div");

  let pName = document.createElement("h1");
  let pImg = document.createElement("img");
  let pId = document.createElement("h2");
  let pTypesContainer = document.createElement("div");

  pName.innerText = pokemon.name;
  pImg.src = pokemon.image;
  pId.innerText = pokemon.id;

  for (let i = 0; i < pokemon.types.length; i++) {
    const pokemonType = pokemon.types[i];
    let pType = document.createElement("div");
    pType.innerText = pokemonType;
    pType.classList = "tag is-small";
    pTypesContainer.appendChild(pType);
  }

  parent.classList = "box is-4 pokemon-container mr-5";
  pName.classList = "is-size-4 has-text-weight-bold pr-1";  
  pImg.classList = "";
  pId.classList = "is-size-4 has-text-gray-lighter";
  header.classList = "is-flex is-flex-direction-row";
  pTypesContainer.classList = "tags";

  header.appendChild(pName);
  header.appendChild(pId);

  parent.appendChild(header);
  parent.appendChild(pImg);
  parent.appendChild(pTypesContainer);

  return parent;
}


function renderPokemons(pokemons) {
  pokemonsContainer.innerHTML = "";
  for (let i = 0; i < pokemons.length; i++) {
    const element = pokemons[i];
    pokemonsContainer.appendChild(buildElem(element));
  }
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/


function filterPokemons(pokemons) {
  // uzupełnij tutaj
  // zwróć odfiltrowaną tablicę pokemonów
  let filterList = [];
  const formElem = document.getElementById("form-filters");
  console.log(formElem.elements);
  for (let i = 0; i < formElem.elements.length; i++) {
    const element = formElem.elements[i];
    if (element.type == "checkbox" && element.checked) {
      console.log(element.id);
      filterList.push(element.id);
    }
    
  }

  function toFilter(pokemon) {
    if (pokemon.name.toLowerCase().indexOf(formElem.elements["pokemon-name"].value.toLowerCase()) != -1) {
      for (let i = 0; i < pokemon.types.length; i++) {
        const element = pokemon.types[i];
        if (filterList.includes(element)) return true;      
      }
    }
    return false;
  }

  return pokemons.filter(toFilter);

}

const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
  renderPokemons(filterPokemons(pokemons));
  // console.log(filterPokesmons(pokemons));
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
