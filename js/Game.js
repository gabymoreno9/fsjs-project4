/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor(){
        this.missed = 0
        this.activePhrase = null
        this.phrases = [
            new Phrase("Somebody once told me"),
            new Phrase("Stick em with the pointy end"),
            new Phrase("Ahh look where you eating at"),
            new Phrase("One does not simply walk into More Door"),
            new Phrase("Does he know about second breakfast")
        ]
    }

    startGame(){
        // Reset the game board
        this.missed = 0
        let phraseElement = document.querySelector('#phrase ul')
        phraseElement.innerHTML = ''
        let keyboardButtons = document.querySelectorAll('.key')
        for (let button of keyboardButtons) {   
            button.disabled = false
            button.className = 'key'
        }
        let heartIcons = document.querySelectorAll('.tries img')
        for (let heartIcon of heartIcons) {
            heartIcon.setAttribute('src', 'images/liveHeart.png')
        }

        let overlay = document.querySelector('#overlay')
        overlay.style.display = 'none'
        let randomPhrase = this.getRandomPhrase()
        this.activePhrase = randomPhrase
        randomPhrase.addPhraseToDisplay()
    }
    getRandomPhrase(){
        let allPhrases = this.phrases
        let randomIndex = Math.floor(Math.random() * 5)
        let randomPhrase = allPhrases[randomIndex]
        return randomPhrase
    }
    handleInteraction(button){
        button.disabled = true
        let letter = button.innerHTML
        let phraseContainsLetter = this.activePhrase.checkLetter(letter)
        if(phraseContainsLetter){
            button.classList.add('chosen')
            this.activePhrase.showMatchedLetter(letter)
            let won = this.checkForWin()
            let correct = new Audio('media/correct.mp3')
            correct.play()
            if (won) {
                this.gameOver(true)
            }
        }
        else{
            button.classList.add('wrong')
            this.removeLife()
        }
    }
    removeLife(){
        let heart = document.querySelector('.tries img[src="images/liveHeart.png"]')
        heart.setAttribute('src', 'images/lostHeart.png')
        let miss = new Audio('media/oof.mp3')
        miss.play()
        this.missed += 1
        if(this.missed == 5){
            this.gameOver(false)
        }
    }
    checkForWin(){
        let hiddenLetters = document.querySelectorAll('#phrase li.hide')
        if(hiddenLetters.length === 0){
            return true
        }
        else{
            return false
        }
    }
    gameOver(wonGame){
        let overlay = document.querySelector('#overlay')
        overlay.style.display = 'flex'
        let overlayTitle = document.querySelector('#overlay h1')
        if (wonGame){
            overlay.className = 'win'
            overlayTitle.innerHTML = "You won!"
            let winner = new Audio('media/letsgo.mp3')
            winner.play()
        }
        else{
            overlay.className = 'lose'
            overlayTitle.innerHTML = "You lost :("
            let lost = new Audio('media/boom.mp3')
            lost.play()
        }
    }
}