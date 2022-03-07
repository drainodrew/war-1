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

    deckGenerator() {

        let cards = []
        let suits = ['hearts', 'spades', 'clubs','diamonds']
        let scores = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
            for (let i = 0; i < suits.length; i++) {
                for (let j = 0; j < scores.length; j++) {
                    let newCard = new Card(suits[i], scores[j])
                    newCard.rankToScore();
                    cards.push(newCard)
                }
            }
    

    function shuffle(cards) { 
         let currentIndex = cards.length, randomIndex; 
         while (currentIndex != 0) { 
              randomIndex = Math.floor(Math.random() * currentIndex); 
              currentIndex--;
             [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
          }
        }

    shuffle(cards); 

    return cards;
   }
}

let newDeck = new Deck();
let player1 = [];
let player2 = [];

function deal() {
  for (let i = 0; i < 26; i++) {
    player1.push(newDeck.cards[i])
  }
  for (let j = 26; j < 52; j++) {
    player2.push(newDeck.cards[j])
  }
}

deal();

function goToWar() {
  

  //play one round 
  while ((player1.length < 52) && (player2.length < 52)) {
   
    function playRound() {
      if (player1[0].score > player2[0].score) {
        console.log("Player 1 wins this battle with a " + player1[0].score + "of " + player1[0].suit + ". Player 2 played a " + player2[0].score + " of " + player2[0].suit);
        player1.push(player1[0])
        player1.shift()
        player2.push(player2[0])
        player2.shift()
        console.log("Player  1 added to his bag to net " + player1.length + "cards. Player 2 has " + player2.length + " cards")
        return
      }
      if (player1[0].score < player2[0].score) {
        console.log("Player w wins this battle with a " + player2[0].score + "of " + player2[0].suit + ". Player 1 played a " + player1[0].score + " of " + player1[0].suit);
        player2.push(player1[0])
        player2.shift()
        player2.push(player2[0])
        player2.shift()
        console.log("Player 2 added to his bag to net " + player1.length + "cards. Player 2 has " + player2.length + " cards")
        return
      }
      if (player1[0].score === player2[0].score) {
        let duelCards = []
        
        while (player1[0].score === player2[0].score) {
          console.log("ooohhhhhhh snappppppp! It's a tie!!!! grrrrrrah! Player 1 card: " + player1[0].score + " of " + player1[0].suit + " Player 2 card: " + player2[0].score + " of " + player2[0].suit);
          duelCards.push(player1[0], player1[1], player1[2], player1[3], player2[0], player2[1], player2[2], player2[3]);
          player1.splice(0, 4)
          player2.splice(0, 4)
        }
        if (player1[0].score > player2[0].score) {
          console.log("Player 1 wins this battle with a " + player1[0].score + "of " + player1[0].suit + ". Player 2 played a " + player2[0].score + " of " + player2[0].suit);
          player1.push(player1[0])
          player1.shift()
          player2.push(player2[0])
          player2.shift()
          for (let i = 0; i < duelCards.length; i++) {
            player1.push(duelCards[i]);
            duelCards.shift();
          }
          console.log("Player  1 added to his bag to net " + player1.length + "cards. Player 2 has " + player2.length + " cards")
          return
        }
        if (player1[0].score < player2[0].score) {
          console.log("Player w wins this battle with a " + player2[0].score + "of " + player2[0].suit + ". Player 1 played a " + player1[0].score + " of " + player1[0].suit);
          player2.push(player1[0])
          player2.shift()
          player2.push(player2[0])
          player2.shift()
          for (let i = 0; i < duelCards.length; i++) {
            player2.push(duelCards[i]);
            duelCards.shift();
          }
          console.log("Player 2 added to his bag to net " + player1.length + "cards. Player 2 has " + player2.length + " cards")
          return
        }

      }
    }

    playRound();
  }
  if (player1.length === 52) {
    console.log("player 1 with the dub, family")
  }
  if (player2.length === 52) {
    console.log("player 2 with the dub, family")
  }
}
  console.log("hey")
goToWar();
  





//try using slice to move elements from main deck to player deck 

//create 2 functions: play round and play game. play round is a single instance , play game is the play to completition 

// you will need to create a third array within the game to store cards in toie breaker situation 