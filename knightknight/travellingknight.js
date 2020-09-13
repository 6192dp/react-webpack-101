const movePossibilities = [
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1]
];

// initialize a chessboard of size 'boardSize'
function initBoard(boardSize) {
  return [...Array(boardSize)].map(() =>
    [...Array(boardSize)].map(() => false)
  );
}

// x, y -> co-ordinates and n - size of board
function travellingKnight(x, y, n) {
  let cellVisitedCount = 0;
  const boardLayout = initBoard(n);

  return goToNextCell(x, y, n, boardLayout, cellVisitedCount);
}

function getPossibleMoves(x, y, n, boardLayoutCopy) {
  const movesUtilArr = [];
  movePossibilities.map(move => {
    const x1 = move[0] + x;
    const y1 = move[1] + y;
    // check if the move doesnot fall out of the boad and that the cell is not already visited
    if (x1 < n && y1 < n && x1 >= 0 && y1 >= 0 && !boardLayoutCopy[x1][y1]) {
      movesUtilArr.push([x1, y1]);
    }
  });
  return movesUtilArr;
}

function hasVisitedAllCells(boardLayoutCopy) {
  return boardLayoutCopy.every(item => item.every(cell => cell));
}

function goToNextCell(x, y, n, boardLayout, cellVisitedCount) {
  let possibleMoves = [];
  cellVisitedCount = cellVisitedCount + 1;
  const boardLayoutCopy = boardLayout.map(item => item.slice());
  boardLayoutCopy[x][y] = true;
  possibleMoves = getPossibleMoves(x, y, n, boardLayoutCopy);

  if (possibleMoves.length === 0) {
    if (hasVisitedAllCells(boardLayoutCopy)) {
      return [[x, y]];
    } else {
      return false;
    }
  }

  //can break. need to check again
  possibleMoves.length &&
    possibleMoves.map(nextMove => {
      let followedPath = [];
      followedPath = goToNextCell(
        nextMove[0],
        nextMove[1],
        n,
        boardLayoutCopy,
        cellVisitedCount
      );
      if (!!followedPath) {
        followedPath.push([x, y]);
        return followedPath;
      }
    });

  return false;
}
