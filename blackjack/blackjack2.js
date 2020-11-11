//Dom ELements

dealer_hand_location = document.querySelector('#dealer-hand')
player_hand_location = document.querySelector('#player-hand')
dealer_hand_points_loc = document.querySelector('#dealer-label')
player_hand_points_loc = document.querySelector('#player-label')
bet_loc = document.querySelector('#bet')
pot_loc = document.querySelector('#pot')
messages_loc = document.querySelector('#messages')

var money = 500;
var bet = 0;
var cardBack 

class Hands{
    constructor(){
        this.total = 0
        this.cards = []
        
        this.sortedCards = []
    }
    updater = function(){
        this.total =0
        this.sortedCards =[]

        for(let i in this.cards){
            switch(this.cards[i].points){
                case 14:
                    this.total += 11
                    break;
                case 13:
                case 12:
                case 11:
                    this.total += 10
                    break;
                default:
                    this.total += parseInt(this.cards[i].points)
                    break;
            }
            
        }

        var totalpoints = this.total
        return totalpoints
    }
}

var dealerHand = new Hands()
var playerHand = new Hands ()

class Card{
    constructor(points, suit) {
        this.points = points
        this.suit = suit
    }
    getImageUrl = function(){
        var points = this.points
        
        if (this.points === 14)  {points = 'A';}
        if (this.points === 11) {points= 'J';}
        if (this.points === 12) {points = 'Q';}
        if (this.points === 13) {points = 'K';}

        return '<img src="' //add image URL here


        }
    }


let deck = []
for (let points = 2; points < 15; points++){
    var suits = ['clubs', 'diamonds', 'hearts', 'spades']
    for (let i in suits){
        deck.push(new Card(points, suits[i]))
    }
}


// Event Listeners

var buttons = document.querySelectorAll('.play')

//el is a DOM Node for each button
button.forEach(el => {
    el.addEventListener('click', (e) =>{
        
        console.log(e.target.id)
        switch (e.target.id){
            case "deal-button":
                newDeal()
                stateUpdater()
                //deal function
                break;
            case "hit-button":
                //deal function
                break;
            case "stand-button":
                //deal function
                break;
           
            case "reset-button":
                //deal function
                break;
            default:
                break;

        }
    })
})

function newDeal(){
    //check if the deck has less than 26 cards

    //make a deck
    if (deck.length < 26){
        deck = newDeck()
    }
    //deal out cards to the player and dealer
    dealerHand.cards = []
    playerHand.cards = []

    dealerHand.cards.push(deck.shift())
    dealerHand.cards.push(deck.shift())
    playerHand.cards.push(deck.shift())
    playerHand.cards.push(deck.shift())



    // dealer_hand_location.innerHTML += deck.shift().getImageUrl()
    // dealer_hand_location.innerHTML += deck.shift().getImageUrl()
    // player_hand_location.innerHTML += deck.shift().getImageUrl()
    // player_hand_location.innerHTML += deck.shift().getImageUrl()

}
//Update board state
function stateUpdater(){

    //reset card and point displays

    dealer_hand_location.innerHTML = ""
    player_hand_location.innerHTML = ""
    dealer_hand_points_loc.innerHTML ="Dealer: "
    player_hand_points_loc.innerHTML = "Player: "


    //Dealer Display
    for (let i=0; i < dealerHand.cards.length; i++){
        dealer_hand_location.innerHTML += dealerHand.cards[i].getImageUrl()
    }
    var dealer_points = dealerHand.updater()

    //Player Display
    for (let i = 0; i < playerHand.cards.length; i++) {
        player_hand_location.innerHTML += playerHand.cards[i].getImageUrl()
    }

    var player_points = playerHand.updater()
}

function newDeck(){
    // return an array of shuffled card Objects
    deck = []
    for (let points = 2; points < 15; points++){
        var suits = ['clubs', 'diamonds', 'hearts', 'spades']
        for (let i in suits){
            deck.push(new Card(points, suits[i]))
        }
    }
}
    //look at his shuffle function in his css
    return _.shuffle(deck)