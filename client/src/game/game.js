import {Deck} from "./deck.js";

export class Game {
    constructor(players) {
        this.deck = new Deck();
        this.players = players;
        this.currentPlayer = 0;
        this.winners = [];
        this.dealHand();

    }

    dealHand() {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < this.players.length; j++) {
                this.players[j].takeCard(this.cardFromDeck());
            }
        }
    }

    gHit() {
        const player = this.players[this.currentPlayer];
        if (player.getScore() >= 21) {
            return this.nextPlayer();
        }
        player.takeCard(this.cardFromDeck());

        /*return true;*/ //TODO:SKIP
        return this.players;
    }

    stand() {
        return this.nextPlayer();
    }

    getActivePlayer() {
        return this.currentPlayer;
    }

    nextPlayer() {
        if (this.currentPlayer === this.players.length - 1) {
            return false;
        }
        this.currentPlayer++;
        return true;
    }

    cardFromDeck() {
        return this.deck.pop();
    }

    getWinners() {
        const scores = this.players.map(player => player.getScore());

        for (let maxScore = 21; maxScore >= 0; maxScore--) {
             this.winners = [];
            for (let i = 0; i < scores.length; i++) {
                if (scores[i] !== maxScore) {
                    continue;
                }

                this.winners.push(this.players[i].Name);
            }

            if (!this.winners.length) {
                continue;
            }
            return this.winners;
        }
        return [];
    }

    restart() {
        this.deck = new Deck();
        this.players.map(player => player.Hand = []);
        this.currentPlayer = 0;
        this.dealHand();
    }

    leftInDeck(){
        return this.deck.length;
    }
}