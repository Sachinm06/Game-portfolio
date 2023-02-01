let character = document.getElementById('character');
let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue('bottom'));
let characterRight = parseInt(window.getComputedStyle(character).getPropertyValue('right'));
let characterWidth = parseInt(window.getComputedStyle(character).getPropertyValue('width'));

let ground = document.getElementById('ground');
let groundBottom = parseInt(window.getComputedStyle(ground).getPropertyValue('bottom'));
let groundHeight = parseInt(window.getComputedStyle(ground).getPropertyValue('height'));


let isJumping = false
let upTime;
let downTime;

function jump() {
    if (isJumping) return;
    upTime = setInterval(() => {
        if (characterBottom >= groundHeight + 200) {
            clearInterval(upTime);
            downTime = setInterval(() => {
                if(characterBottom <= groundHeight +10){
                    clearInterval(downTime);
                    isJumping=false;
                }
                characterBottom -= 10;
                character.style.bottom = characterBottom + 'px';
            }, 20)
        }
        characterBottom += 10;
        character.style.bottom = characterBottom + 'px';
        isJumping = true;
    }, 20)
}
function control(e) {
    if (e.key == 'ArrowUp' || e.key == ' ') {
        jump()
    }

}
document.addEventListener('keydown', control);