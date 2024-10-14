function checkForMultiJump(board, piece) {
  let jumps = [];

  // Check all four diagonal directions for a jump
  for (let dx = -1; dx <= 1; dx += 2) {
    for (let dy = -1; dy <= 1; dy += 2) {
      if (isValidJump(board, piece, piece.x + dx, piece.y + dy, piece.x + 2 * dx, piece.y + 2 * dy)) {
        jumps.push({
          x: piece.x + 2 * dx,
          y: piece.y + 2 * dy,
          capturedPiece: { x: piece.x + dx, y: piece.y + dy }
        });
      }
    }
  }

  return jumps;
}

function isValidJump(board, piece, x1, y1, x2, y2) {
  // Check if the destination square is on the board
  if (x2 < 0 || x2 >= board.length || y2 < 0 || y2 >= board[0].length) {
    return false;
  }

  // Check if the destination square is empty
  if (board[x2][y2] !== null) {
    return false;
  }

  // Check if there is an opponent's piece to jump over
  if (board[x1][y1] === null || board[x1][y1].player === piece.player) {
    return false;
  }

  return true;
}

function handleMultiJump(board, piece) {
  let jumps = checkForMultiJump(board, piece);
  if (jumps.length > 0) {
    // Highlight possible jump destinations
    // ...

    // Wait for the user to select a jump
    // ...

    // Execute the jump
    // ...

    // Recursively check for further jumps
    handleMultiJump(board, piece);
  }
}