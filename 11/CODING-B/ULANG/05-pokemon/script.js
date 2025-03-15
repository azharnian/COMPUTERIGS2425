function addElement(data)
{
    const el  = document.createElement("div");
    el.innerHTML = `
        <h1>${data.name}</h1>
        <img src=${data.sprites.front_default}  alt=${data.name}>
    `;
    document.body.append(el);
}

async function getPokemon(pokemon) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();
    addElement(data);
}
/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        addElement(data);
    })
*/
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const searchText = document.getElementById("searchText").value;
    getPokemon(searchText);
})