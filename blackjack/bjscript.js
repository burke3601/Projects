

let dealer = document.getElementById('dealer-hand');
let hand = document.getElementById('player-hand')
let button = document.getElementById('deal-button');
let buttonTwo = document.getElementById('hit-button');



const suits = ["clubs", "diamonds", "hearts", "spades"];
const values = ["ace", 2,3,4,5,6,7,8,9,10,"jack", "queen", "king"]

let dealerHand = [];
let playerHand = [];

class Hands{
    constructor(){
        this.total = 0
        this.cards = []
        this.cardPoints = []
        this.sortPoints = []
    }
}


class Deck{
    constructor(){
        this.deck = [];

        for (let points = 2; points < 15; points++) {
            var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
            for (const suit in suits) {
                this.deck.push(new Card(points, suits[suit]))
            }
        }
    }
}

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

function randomCard(cards) { 

    const random = Math.floor(Math.random() * 51);  
    const cardValue = cards[random].value;
    const cardSuit = cards[random].suit;
  }



const cards = [];
for (let s = 0; s < suits.length; s++) {
  for (let v = 0; v < values.length; v++) {
    const value = values[v];
    const suit = suits[s];
    cards.push({ value, suit });
  }
}






buildDeck();
console.log(deck);
button.addEventListener('click', (e) =>{
    e.preventDefault()
    dealer.innerHTML = randomCard()
    hand.innerHTML = randomCard()
buttonTwo.addEventListener('click', (e) =>{
    e.preventDefault()
    
    hand.innerHTML = randomCard()
})

})


