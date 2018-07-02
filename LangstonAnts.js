function langtonAnts(n,iterations) {
  let middle = Math.floor(n/2)
  let info = {X: middle, Y: middle, orientation: 'n', previousColor: 0}
  let grid = gridSetup(n)
  grid[info.X][info.Y] = 'X' // ant starts in the middle
  
  for (var i = 0; i < iterations; i++) {
    console.log(grid)
    // console.log('second', grid)
    if (info.previousColor === 0) {
      grid[info.X][info.Y]= 1
    }
    if (info.previousColor === 1) {
      grid[info.X][info.Y]= 0
    } 
    // flip square color
    if (info.orientation === 'n') {
      info.orientation = 'e'
      info.X += 1
      info.previousColor = grid[info.X][info.Y]
      grid[info.X][info.Y] = 'X'
      continue
    }
    if (info.orientation === 'e') {
      info.orientation = 's'
      info.Y += 1
      info.previousColor = grid[info.X][info.Y]
      grid[info.X][info.Y] = "X"
      continue
    }
    if (info.orientation === 's') {
      info.orientation = 'w'
      info.X -= 1
      info.previousColor = grid[info.X][info.Y]
      grid[info.X][info.Y]  = "X"
      continue
    }
    if (info.orientation === 'w') {
      info.orientation = 'n'
      info.Y -= 1
      info.previousColor = grid[info.X][info.Y]
      grid[info.X][info.Y] = "X"

      continue
    }
  }
  console.log(grid)


  return null
}

function gridSetup(n){
  let grid = []
  for (var i = 0; i < n; i++) {
    let row = []
    for (var j = 0; j < n; j++) {
      row.push(0)
    }
    grid.push(row)
  }
  // grid set-up above 
  return grid
  }

langtonAnts(11, 20)