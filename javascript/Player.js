class Player {
  constructor(name, turn, score) {
    this.name = name;
    this.score = 0;
    this.turn = turn;
  }
}


if (typeof module !== 'undefined') {
  module.exports = Player;
}