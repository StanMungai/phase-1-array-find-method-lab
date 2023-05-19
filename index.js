// code your solution here
function superbowlWin(games) {
    const game = games.find(game => game.result === 'W')

    return game ? game.year : undefined
}

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]


  superbowlWin(record)