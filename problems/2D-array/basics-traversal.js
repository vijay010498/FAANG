// 122

// 2D Arrays - what are they ?
// an array holds an array in inside
// abstracted as a grid
// [ [], [], [], [] ]
// row col pair

// 2D Arrays Traversals

// Depth first search
// One of four directions up, down, left, right

// [
//     [1, 2, 3, 4, 5]
//     [6, 7, 8, 9, 10]
//     [11, 12, 13, 14, 15]
//     [16, 17, 18, 19, 20]
// ]

// Formula => UP, RIGHT, DOWN, LEFT
// DFS [1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8, 13, 18, 17, 12, 7, 6, 11, 16]

const testMatrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
];

const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
]

// Time : O(N)
// Space : O(N)
const traversalDFS = function (matrix) {
    const seen =
        new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));

    const values = [];

    dfs(matrix, 0, 0, seen, values);

    return values;
}

const dfs = function (matrix, row, col, seen, values) {
    if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col]) return;

    seen[row][col] = true;
    values.push(matrix[row][col]);

    for (let i = 0; i < directions.length; i++) {
        const currentDir = directions[i];
        dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values);
    }
}

//console.log(traversalDFS(testMatrix));

// 2-D arrays BFS
// using queue - tells the next element
// starting at mid would be easy
// [
//     [1, 2, 3, 4, 5]
//     [6, 7, 8, 9, 10]
//     [11, 12, 13, 14, 15]
//     [16, 17, 18, 19, 20]
// ]

// queue = [8,14,18,12]
// values = [13,8,14,18,12,3,9,7,15,19,17,11,4,2,10,6,20,16,5,1]

// Time : O(N)
// Space : O(N)
const traversalBFS = function (matrix) {
    const seen =
        new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));

    const values = [];
    const queue = [[0, 0]];
    while (queue.length) {
        const currentPos = queue.shift();
        const row = currentPos[0];
        const col = currentPos[1];
        if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || seen[row][col]) {
            continue
        }
        seen[row][col] = true;
        values.push(matrix[row][col]);
        for (let i = 0; i < directions.length; i++) {
            const currentDir = directions[i];
            queue.push([row + currentDir[0], col + currentDir[1]])
        }
    }
    return values;
}

console.log(traversalBFS(testMatrix))
