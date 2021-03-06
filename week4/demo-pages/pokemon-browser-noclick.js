'use strict';

let spriteElements = [
    document.getElementById('sprite1'),
    document.getElementById('sprite2'),
    document.getElementById('sprite3'),
    document.getElementById('sprite4'),
    document.getElementById('sprite5'),
    document.getElementById('sprite6'),
]

let scrollLeft = document.querySelector('#scroll-left');
let scrollRight = document.querySelector('#scroll-right');
let pokemonInfo = document.querySelector('#pokemon-info');

let startingDisplayIndex = 1;

let baseUri = 'https://pokeapi.co/api/v2/pokemon';

async function getSprites() {
  let windowIndex = 0;
  for(let element of spriteElements) {
    let pokemonNumber = startingDisplayIndex + windowIndex;
    let response = await fetch(`${baseUri}/${pokemonNumber}`)
    let pokemon = await response.json();
    element.src = pokemon.sprites.front_default;
    windowIndex++;
  }
}

scrollLeft.addEventListener('click', ()=>{
  if(startingDisplayIndex <= 6) {
    startingDisplayIndex = 1;
  } else {
    startingDisplayIndex -= 6;
  }
  getSprites();
});

scrollRight.addEventListener('click', ()=>{
  startingDisplayIndex += 6;
  getSprites();
});

getSprites();
