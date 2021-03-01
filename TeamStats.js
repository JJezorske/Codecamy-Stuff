const team = {
  _players: [
    {
      firstName: 'Steven',
      lastName: 'Gerrard',
      age: 24
    },
    {
      firstName: 'Jamie',
      lastName: 'Carragher',
      age: 27
    },
    {
      firstName: 'Jerzy',
      lastName: 'Dudek',
      age: 28
    }
  ],
  _games: [
    {
      opponent: 'AC Milan',
      teamGoals: 3,
      opponentGoals: 3
    },
    {
      opponent: 'Chelsea',
      teamGoals: 1,
      opponentGoals: 0
    },
    {
      opponent: 'Juventus',
      teamGoals: 2,
      opponentGoals: 1
    }
  ],
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    return this._players.push(player);
  },
  addGame(opponent, teamGoals, opponentGoals) {
    const game = {
      opponent: opponent,
      teamGoals: teamGoals,
      opponentGoals: opponentGoals
    }
    return this._games.push(game);
  },
};
team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)
team.addGame('Leverkusen', 6, 2)
team.addGame('Olympiakos', 3, 2)
team.addGame('Monaco', 2, 1)
console.log(team._players)
console.log(team._games)
