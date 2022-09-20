var $leftChev = document.querySelector('.fa-chevron-left');
var $rightChev = document.querySelector('.fa-chevron-right');
var $dotContainer = document.querySelector('.dot-container');
var currentPokemonID = 1;
var interval = setInterval(rightClick, 3000);

function hideCurrentPokemon() {
  var $currentPokemon = document.querySelector('.poke' + currentPokemonID);
  $currentPokemon.className = 'pokemon-image poke' + currentPokemonID + ' hidden';

  var $currentDot = document.querySelector('.dot' + currentPokemonID);
  $currentDot.className = 'fa-regular fa-circle dot' + currentPokemonID;
}

function showNextPokemon() {
  currentPokemonID++;
  if (currentPokemonID > 5) {
    currentPokemonID = 1;
  }

  var $nextPokemon = document.querySelector('.poke' + currentPokemonID);
  $nextPokemon.className = 'pokemon-image poke' + currentPokemonID;

  var $nextDot = document.querySelector('.dot' + currentPokemonID);
  $nextDot.className = 'fa-solid fa-circle dot' + currentPokemonID;
}

function showPreviousPokemon() {
  currentPokemonID--;
  if (currentPokemonID < 1) {
    currentPokemonID = 5;
  }
  var $previousPokemon = document.querySelector('.poke' + currentPokemonID);
  $previousPokemon.className = 'pokemon-image poke' + currentPokemonID;

  var $previousDot = document.querySelector('.dot' + currentPokemonID);
  $previousDot.className = 'fa-solid fa-circle dot' + currentPokemonID;
}

$rightChev.addEventListener('click', rightClick);
function rightClick() {
  hideCurrentPokemon();
  showNextPokemon();
  resetTimer();
}

$leftChev.addEventListener('click', leftClick);
function leftClick() {
  hideCurrentPokemon();
  showPreviousPokemon();
  resetTimer();
}

function resetTimer() {
  clearInterval(interval);
  interval = setInterval(rightClick, 3000);
}

$dotContainer.addEventListener('click', dotSelectedImage);
function dotSelectedImage(event) {
  var $selectedDot = event.target.closest('.fa-circle');
  var $dots = document.querySelectorAll('.fa-circle');
  hideCurrentPokemon();

  for (var i = 0; i < $dots.length; i++) {
    if ($selectedDot === $dots[i]) {
      currentPokemonID = i;
    }
  }

  showNextPokemon();
  resetTimer();
}
