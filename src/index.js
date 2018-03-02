module.exports = function solveSudoku(matrix) {
  var counter = 0;
  do {
    var f = false;

    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] != 0) {
          continue;
        }

        var possibleValues = findPossibleValues(i, j, matrix);
        var possibleValuesCount = possibleValues.length;
        if (possibleValuesCount == 0) {
          return 0;
        }
        if (possibleValuesCount == 1) {
          matrix[i][j] = possibleValues[0];
        }
        if (possibleValuesCount == 2 && counter > 2) {
          var x = possibleValues[possibleValues.length-1];
    
          var arr = [];
          arr = arr.concat(matrix);
          arr[i][j] = possibleValues[0];

          if (solveSudoku(arr) == 0) {
            matrix[i][j] = possibleValues[x];
          }
        }
      } 
    }
    //конец перебора 
    for(var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == 0) {
          f = true;
        }
      }
    }

    if (counter == 500) {
      return 0;
    }
    counter++;
  } while (f);

  return matrix;
}

function findPossibleValues (rowIndex, columnIndex, matrix) {
  var values = [];
  var result = [];

  for (var i = 1; i < 10; i++) {
      values.push(i);
  }

  var rowValues = getRowValues (rowIndex, matrix);
  var columnValues = getColumnValues (columnIndex, matrix);
  var blockValues = getBlockValues (rowIndex, columnIndex, matrix);

  deleteCopy(values, rowValues);
  deleteCopy(values, columnValues);
  deleteCopy(values, blockValues);

  for (var i = 0; i < values.length; i++) {
      if (values[i] != 0) {
          result.push(values[i]);
      }
  }

  return result;
};

function deleteCopy (values, matrixValues) {
  for (var i = 0; i < matrixValues.length; i++) {
      for (var j = 0; j < values.length; j++) {
          if (values[j] == matrixValues[i]) {
              values[j] = 0;
          }
      }
  }
};

function getRowValues (rowIndex, matrix) {
  values = [];

  for (var i = 0; i < matrix[rowIndex].length; i++) {
      //if (matrix[rowIndex][i] != 0) {
          values.push(matrix[rowIndex][i]);
      //}
  }

  return values;
};

function getColumnValues (columnIndex, matrix) {
  var values = [];

  for (var i = 0; i < matrix.length; i++) {
      //if (matrix[i][columnIndex] != 0) {
          values.push(matrix[i][columnIndex]);
      //}
  }

  return values;
};

function getBlockValues (rowIndex, columnIndex, matrix) {
  var values = [];

  var blockRowStart = 3 * Math.floor(rowIndex / 3);
  var blockColumnStart = 3 * Math.floor(columnIndex / 3);

  for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
          //if (matrix[blockRowStart + i][blockColumnStart + j] != 0) {
              values.push(matrix[blockRowStart + i][blockColumnStart + j]);
          //}
      }
  }

  return values;
};

