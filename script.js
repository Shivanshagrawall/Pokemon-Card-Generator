// Possible Color in Pokemon
const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
};

const generateBtn = document.querySelector('.generateBtn');
const card = document.querySelector('.card');
const url = " https://pokeapi.co/api/v2/pokemon/";

// Generate Card Function
const generate = async () => {

    let id = Math.floor(Math.random() * 150) + 1;
    const finalUrl = url + id;

    let response = await fetch(finalUrl);
    let data = await response.json();
    console.log(data);

    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;
    const themeColor = typeColor[data.types[0].type.name];

    card.innerHTML = `
    <div class="hp-container">
    <button>HP <span>${hp}</span></button>
    </div>
    <div class="img-container">
    <img src="${imgSrc}" alt=""/>
    </div>
    <div class="name-container">
    <h2>${pokeName}</h2>
    </div>
    <div class="pokemon-title">
    </div>
    <div class="poakemon-properties">
    <div class="pokemon-attack">
        <h2>${statAttack}</h2>
        <h3>Attack</h3>
    </div>
    <div class="pokemon-defence">
        <h2>${statDefense}</h2>
        <h3>Defense</h3>
    </div>
    <div class="pokemon-speed">
        <h2>${statSpeed}</h2>
        <h3>Speed</h3>
    </div>
    </div>
    `

    pokemonTitle(data.types, themeColor);
    stylecard(themeColor);
}

// Function that change Background Color in Card
const stylecard = (color) => {
    card.style.background = `radial-gradient(circle at 50% 0%,${color} 50%, #ffffff 36%)`;
}

// Function to Generate Pokemon Title and its color
const pokemonTitle = (items, color) => {
    let title = document.querySelector('.pokemon-title');
    items.forEach(item => {
        let span = document.createElement('button');
        span.className = 'pokemonTitle'
        span.textContent = item.type.name;
        span.style.background = color;
        title.appendChild(span);
    });

}

// Function call
generateBtn.addEventListener('click', generate);
window.addEventListener('load', generate);