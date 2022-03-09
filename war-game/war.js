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
    constructor() {
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
// console.log(player1.length)
  //  console.log(player1.cards)
  }
  console.log(player1.length)
   // console.log(player1.cards)
  for (let j = 26; j < 52; j++) {
    player2.push(newDeck.cards[j])
  }
}

deal();

function goToWar() {
// console.log(newDeck)

  //while loop to keep game going until a player has all 52 cards 
  while ((player1.length < 52) && (player2.length < 52)) {
   
    //function to play 1 round 
    function playRound() {

      if (player1[0].score > player2[0].score) {
        console.log("Player 1 wins this battle with a " + player1[0].score + " of " + player1[0].suit + ". Player 2 played a " + player2[0].score + " of " + player2[0].suit);
        player1.push(player1[0])
        player1.shift()
        player1.push(player2[0])
        player2.shift()
        console.log("Player 1 added to their bag to net " + player1.length + " cards. Player 2 has " + player2.length + " cards")
        return
      }
      if (player1[0].score < player2[0].score) {
        console.log("Player 2 wins this battle with a " + player2[0].score + " of " + player2[0].suit + ". Player 1 played a " + player1[0].score + " of " + player1[0].suit);
        player2.push(player1[0])
        player2.shift()
        player2.push(player2[0])
        player1.shift()
        console.log("Player 2 added to their bag to net " + player1.length + " cards. Player 2 has " + player2.length + " cards")
        return
      }
        //if tie
      if (player1[0].score === player2[0].score) {
       
          //an array to store the 4 cards each player puts down in the event of a tie
          let duelCards = []
        
        //need to change order of stored array so that we don't keep on tieing... ie shuffle 

        function lilShuffle(duelCards) {
          let currentIndex = duelCards.length, randomIndex;

          while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [duelCards[currentIndex], duelCards[randomIndex]] = [duelCards[randomIndex], duelCards[currentIndex]];
          }
        }

        while (player1[0].score === player2[0].score) {
          
          console.log("ooohhhhhhh snappppppp! It's a tie!!!! grrrrrrah! Player 1 card: " + player1[0].score + " of " + player1[0].suit + " Player 2 card: " + player2[0].score + " of " + player2[0].suit);
          
        function tieBreaker() { 
          if (player1.length > 4 && player2.length > 4) { 
          duelCards.push(player1[0], player1[1], player1[2], player1[3], player2[0], player2[1], player2[2], player2[3]);
          lilShuffle(duelCards);
          player1.splice(0, 4)
          player2.splice(0, 4)
            return
        }
          if (player1.length === 4 || player2.length === 4) { 
            duelCards.push(player1[0], player1[1], player1[2], player2[0], player2[1], player2[2]);
            lilShuffle(duelCards);    
            player1.splice(0, 3) 
            player2.splice(0, 3) 
                return 
        }
          if (player1.length === 3 || player2.length === 3) { 
            duelCards.push(player1[0], player1[1], player2[0], player2[1]);
            lilShuffle(duelCards);
            player1.splice(0, 2) 
            player2.splice(0, 2) 
                return 
        }
          if (player1.length === 2 || player2.length === 2) { 
            duelCards.push(player1[0], player2[0]);
            lilShuffle(duelCards);
            player1.splice(0, 1) 
            player2.splice(0, 1) 
                return 
        }
         if (player1.length === 1) { 
            duelCards.push(player2[0])
            player2.shift()
            return 
        }
         if (player2.length === 1) {
            duelCards.push(player1[0])
            player1.shift()
            return
        }
        }
          tieBreaker();
      }
        if (player1[0].score > player2[0].score) {
          console.log("Player 1 wins this battle with a " + player1[0].score + " of " + player1[0].suit + ". Player 2 played a " + player2[0].score + " of " + player2[0].suit);
          duelCards.push(player1[0])  
          player1.shift()
          duelCards.push(player2[0])
          player2.shift()
          lilShuffle(duelCards)  
          while (duelCards.length > 0) {
            player1.push(duelCards[0]);
            duelCards.shift();
          }
          console.log("Player 1 added to his bag to net " + player1.length + " cards. Player 2 has " + player2.length + " cards")
          return
        }
        if (player1[0].score < player2[0].score) {
          console.log("Player 2 wins this battle with a " + player2[0].score + " of " + player2[0].suit + ". Player 1 played a " + player1[0].score + " of " + player1[0].suit);
          duelCards.push(player1[0])
          player1.shift()
          duelCards.push(player2[0])
          player2.shift()
          lilShuffle(duelCards)  
          while (duelCards.length > 0) {
            player2.push(duelCards[0]);
            duelCards.shift();
          }
            console.log("Player 2 added to their bag to net " + player1.length + " cards. Player 2 has " + player2.length + " cards")
            return
        }
    }
  
    }

playRound();
  }
  console.log(playRound)
  if (player1.length === 52) {
    console.log("player 1 with the dub, family")
  }
  if (player2.length === 52) {
    console.log("player 2 with the dub, family")
  }
}

goToWar();
//console.log(goToWar);
  
