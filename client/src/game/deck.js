export class Deck {
    suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    pathSuiteImg = ['./images/spades.svg', './images/hearts.svg', './images/diamonds.svg', './images/clubs.svg'];

    constructor() {
        this.deck = [];
        this.createDeck(this.deck);
        return this.shuffleDeck(this.deck);
    }

    createDeck() {
        for (let i = 0; i < this.values.length; i++) {
            for (let x = 0; x < this.suits.length; x++) {
                let weight = parseInt(this.values[i]);
                if (this.values[i] === "J" || this.values[i] === "Q" || this.values[i] === "K") {
                    weight = 10;
                }

                if (this.values[i] === "A") {
                    weight = 11;
                }

                this.deck.push({Value: this.values[i], Suit: this.suits[x], Weight: weight, Src: this.pathSuiteImg[x]});
            }
        }
    }

    shuffleDeck() {
        for (let i = 0; i < 1000; i++) {
            let location1 = Math.floor((Math.random() * this.deck.length));
            let location2 = Math.floor((Math.random() * this.deck.length));
            let tmp = this.deck [location1];

            this.deck [location1] = this.deck [location2];
            this.deck [location2] = tmp;
        }
        return this.deck;
    }
}
