/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase()
    }

    addPhraseToDisplay(){
        let phraseElement = document.querySelector('#phrase ul')
        for(let i = 0; i < this.phrase.length; i++){
            let letter = document.createElement('li')
            let currentLetter = this.phrase[i]
            letter.innerHTML = currentLetter
            if(currentLetter === ' '){
                letter.className = 'space'
            }
            else{
                letter.className = 'hide letter ' + currentLetter
            }
            phraseElement.appendChild(letter)
        }
    }
    checkLetter(letter){
        if(this.phrase.includes(letter)){
            return true
        }
        else{
            return false
        }
    }
    showMatchedLetter(matchedLetter){
        let allLetters = document.querySelectorAll('#phrase li')
        for(let letterElement of allLetters){
            if(letterElement.classList.contains(matchedLetter)) {
                letterElement.classList.remove('hide')
                letterElement.classList.add('show')
            }
        }
    }
}