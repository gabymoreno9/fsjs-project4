/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = new Game()

let startGameButton = document.querySelector('#btn__reset')
startGameButton.addEventListener('click', function() {
    game.startGame()
})

let keyboardButtons = document.querySelectorAll('.key')
for (let button of keyboardButtons) {
    button.addEventListener('click', function() {
        game.handleInteraction(button)
    })
}

document.addEventListener('keyup', function(e) {
    for (let button of keyboardButtons) {
        if (!button.disabled && button.innerHTML === e.key) {
            game.handleInteraction(button)
        }
    }
})
