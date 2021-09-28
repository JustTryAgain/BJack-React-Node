export class Player {
    constructor({Name, Id, Score, Hand}) {
        this.Name = Name;
        this.Id = Id;
        this.Hand = Hand;
        this.Score = Score;
    }

    takeCard(card) {
        this.Hand.push(card);
    }

    getScore() {
        return this.Hand.reduce((acc, currValue) => {
            return acc + currValue.Weight;
        }, 0);
    }
}