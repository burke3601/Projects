

let dealer = document.getElementById('dealer-hand');
let hand = document.getElementById('player-hand')
let button = document.getElementById('deal-button');

const suits = ["clubs", "diamonds", "hearts", "spades"];
const values = ["ace", 2,3,4,5,6,7,8,9,10,"jack", "queen", "king"]

class Card {
    constructor(points, suit) {
        this.points = points;
        this.suit = suit;
        this.imageURL = '<img src = "cards-images/' + points + '_of_' + suit + '.png">';

    }
}

let deck = [];
function buildDeck() {
    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            deck.push(new Card(values[x], suits[i]));
        }

    }
}

buildDeck();
console.log(deck);
button.addEventListener('click', (e) =>{
    e.preventDefault()
    dealer.innerHTML = '<img src = "cards-images/' + 3 + '_of_' + 'hearts' + '.png">'
})

// document.getElementById("deal-button").addEventListener("click", dealCards);

// function dealCards(){
//     document.
// }



// button.onclick = function(){
//     button.addEventListener("click", dealCards)
// }



