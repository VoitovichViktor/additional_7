module.exports = function solveSudoku(matrix) {
  
  for (var row = 0; row < 9; row++) {
    for (var col = 0; col < 9; col++) {
      if (matrix[row][col] == 0) {
        for (var number = 1; number <= 9; number++) {
          if (isAllowed(matrix, row,col,number)) {
            matrix[row][col] = number;
            if (solveSudoku(matrix)) {
              return matrix;
            } else {
              matrix[row][col] = 0;
            }
          }
        }
        return false;
      }
    }
  }

  return matrix;
};

function containsInCol (matrix, col, number) {
  for (var i = 0; i < 9; i++) {
    if (matrix[i][col] == number) {
      return true;
    }
  }

  return false;
};

function containsInRow (matrix, row, number) {
  for (var i = 0; i < 9; i++) {
    if (matrix[row][i] == number) {
      return true;
    }
  }

  return false;
};

function containsInBox (matrix, row, col, number) {
  var r = row - row % 3;
  var c = col - col % 3;

  for (var i = r; i < r + 3; i++) {
    for (var j = c; j < c + 3; j++) {
      if (matrix[i][j] == number) {
        return true;
      }
    }
  }

  return false; 
};

function isAllowed (matrix, row, col, number) {
  return !(containsInRow(matrix, row, number) || containsInCol(matrix, col, number) || containsInBox(matrix, row, col, number));
};