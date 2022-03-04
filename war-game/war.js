//card
class Card {
    constructor(suit, score) {
        this.suit = suit
        this.rank = 0
        this.score = score
    }

    rankToScore() {
        switch (this.score) {
            case 14:
                this.rank = "Ace";
            break;

            case 13:
                this.rank = "King";
            break;

            case 12:
                this.rank = "Queen";
            break;

            case 11:
                this.rank = "Jack";

            default:
                this.rank = this.score;
            break;
    }
    }
}
//create a class of player 
//player needs to be able to store values of the card and deck 
//or is player just a type of deck hmm... the only differnce is that player can only have half of the deck. but if you randomize the ray and assign half the length ... hmmm two players need to access the same instance of the deck 
class Player {
    constructor (cards = []) { 
        this.length = 26
        this.cards = cards
    }
}

// Define a Deck class
class Deck {
    constructor(cards = []) {
       this.length = 52
       this.cards = this.deckGenerator();
    }
    draw() {
         return Math.floor(Math.random() * this.length);
    }

}
   function  deckGenerator(deck) {

        Deck.cards = []
        let suits = ['hearts', 'spades', 'clubs','diamonds']
        let scores = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
            for (i = 0; i < suits.length; i++) {
                for (j = 0; j < scores.length; j++) {
                    let newCard = new Card(suits[i], scores[j])
                    newCard.rankToScore();
                    deck.cards.push(newCard)
                }
            }
        return deck
    }


//need to make a deal function 

function deal(player1, player2) {
    let player1 = []
    let player2 = []
    player1.length = 26;
    player2.length = 26; 
    let freshDeck = new Deck();
    freshDeck.deckGenerator(
}
//try using slice to move elements from main deck to player deck 

//create 2 functions: play round and play game. play round is a single instance , play game is the play to completition 
let roundDeck = new Deck();
deckGenerator(roundDeck);
console.log(roundDeck);
let player1 = new Player();
let player2 = new Player();
let p1 = new Deck();
deckGenerator(p1);
//console.log(p1);
p1.draw();
console.log(p1.draw());

// you will need to create a third array within the game to store cards in toie breaker situation 
