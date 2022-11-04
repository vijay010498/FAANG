// Given an 2D arrays containing 0's (empty cell),
// 1's (fresh orange) and 2's (rotten orange).
// Every minute, all fresh orange immediately
// adjacent (4 directions) to rotten oranges will rot

// How many minutes must pass until all oranges are rotten ?

const oranges = [
    [2, 1, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1]
]

// verify our constraints
// not all oranges are rotten, return -1
