// elly boyd - web150 - Final Project
// javascript drum kit (from the JavaScript 30 challenge)
// bonus final project content -- it was fun, so I included it!

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // if no audio attached to key, stops function
    audio.currentTime = 0; // starts sound from beginning when associated key is pressed
    audio.play(); // play the associated audio file
    key.classList.add('playing'); // add add class of "playing" to the associated element (changes appearance when sound played)
}
        
function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip if transform property isn't present
    this.classList.remove('playing'); // if transform property is present, remove class of "playing" (changes appearance back to original)
}
        
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //event listener for removing transition
window.addEventListener('keydown', playSound); // event listener to play sound when key is pressed