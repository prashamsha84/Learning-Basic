let player = { name:"Prashamsha", chips: 200}
let cards = []
let sum = 0
let hasblackJack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el")
let message = ""
// let sumEl = document.getElementById("sum-el") //id selector
let sumEl = document.querySelector("#sum-el")   //query selector using #
// let sumEl = document.querySelector("sum-el")   //query selector using . for class
let cardsEl = document.getElementById("cards-el")

// let player = {
//     name: "Prashamsha",
//     chips: 200
// }
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
//function
//function for randomcard
function getRandomCard(){
    // let randomNumber = Math.floor(Math.random()*13)+1 --lenthy 
    // return randomNumber
    // return Math.floor(Math.random()*13)+1 //shortcut
    // return 5
    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber > 10){
        return 10
    }
    else if (randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}
// calling the new function
function startGame(){
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] //array -orders list of item
     sum = firstCard + secondCard
    renderGame()
}

//new function
function renderGame(){
    // cardsEl.textContent = "Cards:" + firstCard + " " + secondCard
    cardsEl.textContent = "Cards:" 
    // + cards[0] + " " + cards[1]
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    // sumEl.textContent += sum
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20){
        message = "Do you want to draw a card?"
    }
    else if (sum === 21){
        message = "You've got Blackjack!"
        hasblackJack = true
    }
    else{
        message = "You're out of the game!"
        isAlive = false
    }
    // console.log(message)
    messageEl.textContent =message
}
function newCard(){
    // console.log("Drawing a new card from deck!")
    if (isAlive === true && hasblackJack === false){
 let card = getRandomCard()
 sum += card
 cards.push(card)
 renderGame()
    }
}

