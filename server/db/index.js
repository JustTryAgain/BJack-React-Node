import mongoose from "mongoose";

const Schema = mongoose.Schema;

const gameResultSchema = new Schema({
  userID: String,
  players: [],
  winners: [],
  time: {type: Date, default: new Date()}
});
const db = 'mongodb+srv://dbUser:o108GD7gjpVnp0FT@testblackjack.k3hzp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, error => {
    if (error) {
      console.log(error)
    }
  });

export const GameResult = mongoose.model('gamesHistory', gameResultSchema);