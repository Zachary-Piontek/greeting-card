// grab DOM elements

// set event listeners
    // get info from user input

const seasonInput = document.getElementById('season-input');
const dayInput = document.getElementById('day-input');
seasonInput.addEventListener('input', () => {
    dayInput.textContent = seasonInput.value;
});

const seasonWishTextarea = document.getElementById('season-wish-textarea');
const greetingDisplay = document.getElementById('greeting-display');
seasonWishTextarea.addEventListener('input', () => {
    greetingDisplay.textContent = seasonWishTextarea.value;
});
    // use user input to update state
    // update DOM to reflect the new state
const dogSelect = document.getElementById('dog-select');
const typeSeason = document.getElementById('type-season');
dogSelect.addEventListener('change', () => {
    typeSeason.src = dogSelect.value;
});