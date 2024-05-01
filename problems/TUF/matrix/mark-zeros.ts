//
// Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.
//
//   Examples
// Examples 1:
// Input:
//   matrix=[[1,1,1],[1,0,1],[1,1,1]]
//
// Output:
//   [[1,0,1],[0,0,0],[1,0,1]]
//
// Explanation:
//   Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.
//
// Input:
//   matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]
//
// Output:
//   [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
//
// Explanation:
//   Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0

const markZero = (arr: number[][]): number[][] => {
  const markRow = (row: number, array: any[][]) => {
    for (let j = 0; j < array[row].length; j++) {
      if (array[row][j] !== 0) {
        array[row][j] = -1;
      }
    }
  }


  const markCol = (col: number, array: any[][]) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i][col] !== 0) {
        array[i][col] = -1;
      }
    }
  }


  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[1].length; j++) {
      if (arr[i][j] === 0) {
        markRow(i, arr);
        markCol(j, arr);
      }
    }
  }


  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === -1) {
        arr[i][j] = 0;
      }
    }
  }

  return arr;
}


const markZeroOpti = (arr: number[][]): number[][] => {
  const col: Map<number, boolean> = new Map();
  const row: Map<number, boolean> = new Map();


  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0 ) {
        row.set(i, true);
        col.set(j, true);
      }
    }
  }


  for (let i =0  ; i  < arr.length; i++ ){
    for(let j = 0 ; j  < arr[i].length;j++) {
      if (row.has(i) || col.has(j)) {
        arr[i][j] = 0;
      }
    }
  }

  return arr;
}

console.log(markZeroOpti([[1,1,1],[1,0,1],[1,1,1]]))
