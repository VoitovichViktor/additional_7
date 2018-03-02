//module.
exports = function solveSudoku(matrix) {
    var values = [1,2,3,4,5,6,7,8,9];

    do {
        for (var row = 0; i < matrix.length; row++) {
            for (var col = 0; col < matrix[row].length; col++) {
                if (matrix[row][col] != 0) {
                    continue;
                }

                var algorithm_1val = algorithm_1(row, col, matrix);
                if (algorithm_1val.length == 1) {
                    matrix[row][col] = algorithm_1val[0];
                    continue;
                }
                

            }
        }
    } while (true);
  };

  function algorithm_1 (row, col, matrix) {
    var rowVal = [];
    var colVal = [];
    var blockVal = [];
    var arr = [];

    for (var i = 0; i < matrix.length; i++) {
        if (matrix[row][i] != 0) {
            rowVal.push(matrix[row][i]);
        }
    }

    for (i = 0; i < matrix.length; i++) {
        if (matrix[i][col] != 0) {
            colVal.push(matrix[i][col]);
        }
    }

    var blockRowStart = 3 * Math.floor(row / 3);
    var blockColumnStart = 3 * Math.floor(col / 3);
  
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (matrix[blockRowStart + i][blockColumnStart + j] != 0) {
                blockVal.push(matrix[blockRowStart + i][blockColumnStart + j]);
            }
        }
    }

    collectArray(arr, rowVal);
    collectArray(arr, colVal);
    collectArray(arr, blockVal);

  };

  function collectArray (arr, cellVal) {
    var values = [1,2,3,4,5,6,7,8,9];

    if (arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < values.length; j++) {
                if (values[j] == arr[i]) {
                    values[j] = undefined;
                }
            }
        }
    }

    for (var i = 0; i < values.length; i++) {
        var flag = false;

        for (var j = 0; j < cellVal.length; j++) {
            if (values[i] == cellVal[j]) {
                flag = true;
            }
        }

        if (!flag) {
            arr.push(values[i]);
        }
    }

    return arr;
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
  ///*
  const initial = [
    [6, 5, 0, 7, 3, 0, 0, 8, 0],
    [0, 0, 0, 4, 8, 0, 5, 3, 0],
    [8, 4, 0, 9, 2, 5, 0, 0, 0],
    [0, 9, 0, 8, 0, 0, 0, 0, 0],
    [5, 3, 0, 2, 0, 9, 6, 0, 0],
    [0, 0, 6, 0, 0, 0, 8, 0, 0],
    [0, 0, 9, 0, 0, 0, 0, 0, 6],
    [0, 0, 7, 0, 0, 0, 0, 5, 0],
    [1, 6, 5, 3, 9, 0, 4, 7, 0]
  ];
  
  console.log(exports(initial)); //*/
  