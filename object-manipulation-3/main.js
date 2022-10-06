console.log('Lodash is loaded:', typeof _ !== 'undefined');

class Card {
  constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.cards = [];
  }

  createDeck() {
    var suits = ['spades', 'clubs', 'hearts', 'diamonds'];
    var ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    var values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < ranks.length; j++) {
        this.cards.push(new Card(suits[i], ranks[j], values[j]));
      }
    }
  }

  shuffle() {
    for (var i = this.cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * i);
      var placeholder = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = placeholder;
    }
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.playerHand = [];
  }

}

class Game {
  constructor() {
    this.players = [];
  }

  start(player1, player2, player3, player4) {
    this.players.push(new Player(player1));
    this.players.push(new Player(player2));
    this.players.push(new Player(player3));
    this.players.push(new Player(player4));
    var deck = new Deck();
    deck.createDeck();
    deck.shuffle();
    this.players[0].playerHand = deck.cards.slice(0, 2);
    this.players[1].playerHand = deck.cards.slice(2, 4);
    this.players[2].playerHand = deck.cards.slice(4, 6);
    this.players[3].playerHand = deck.cards.slice(6, 8);
  }
}

function whoIsWinner(array) {
  var participants = array;
  var largest = 0;
  var largestName = '';
  for (var i = 0; i < participants.length; i++) {
    var cardValue1 = participants[i].playerHand[0].value;
    var cardValue2 = participants[i].playerHand[1].value;
    var totalValue = cardValue1 + cardValue2;
    if (totalValue > largest) {
      largest = totalValue;
      largestName = participants[i].name;
    }
  }
  return largestName;
}

var game = new Game();
game.start('Mike', 'Terry', 'Jake', 'Martin');
var winner = whoIsWinner(game.players);
console.log('The winner is:', winner);
