import {Player} from "./player.js";

export class Players {
    constructor(names) {
        this.players = this.createPlayers(names);
    }

    getPlayers() {
        return this.players;
    }

    createPlayers(names) {
        return names.map((name, i) => new Player({Name: names[i], Id: i,Score:0, Hand: []}));
    }
}