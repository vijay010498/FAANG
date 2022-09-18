// first it's hard to find it's a graph questions to solve

// A company has n employees with unique IDs from 0 to n-1. The head of the company
// has the ID headID.
// if n = 8 // 8 employees : 0,1,2,3,4,5,6,7 // one of the ID is headID = 4
// you will receive a managers array where managers[i] is the ID of the manager
// for employee i. Each employee has one direct manager. The company head has no
// manager (managers[headID] = -1). It's guaranteed that subordination relationships
// will have a tree structure. The head of the company wants to inform all employees of news
// He will inform his direct subordinates who will inform their direct subordinates
// and so on until everyone knows the news. You will receive an informTime array where
// informTime[i] is the time it takes for employee i to inform all their direct subordinates.
// Return the total number of minutes it takes to inform all employees of the news
// managers = [2,2,4,6,-1,4,4,5]
// informTime = [0,0,4,0,7,3,6,0] - inform all the employees

// nery tree = graph - starting from headID


// verifying our constraints and test cases
// 1. Verify the constraints
// Graphs variations generally - cyclic ?, unconnected ?, weighted ?, directed ?
// Here it's a tree - so no cyclic
// can employees have more than 1 manager - No - no cyclic
// Does every employee have a manager - yes - not unconnected

// 2. Test cases
// Best case test case
// n = 8, headID = 4, managers = [2,2,4,6,-1,4,4,5]
// informTime = [0,0,4,0,7,3,6,0]
// O/p = 13

// Represent as an adjacency list
// traverse the managers array
//[[], [], [0,1], [], [2,5,6], [7], [3], []]

const MANAGERS = [2, 2, 4, 6, -1, 4, 4, 5]
const N = 8;
const INFORM_TIME = [0, 0, 4, 0, 7, 3, 6, 0];

function createAdjacencyList(N, managers = []) {
    const adjacencyList = managers.map(() => []);
    managers.forEach((manager, index) => {
        if (manager >= 0) {
            adjacencyList[manager].push(index)
        }
    });
    return adjacencyList;
}


// Time  = O(N)
// Space = O(N)
const numOfMinutes = function (n, headId, managers, informTime) {
    const adjacencyList = createAdjacencyList(n, managers)
    return dfs(headId, adjacencyList, informTime)
}

const dfs = function (currentId, adjacencyList, informTime) {
    if (adjacencyList[currentId].length === 0) {
        return 0;
    }
    let max = 0;
    const subordinates = adjacencyList[currentId];
    for (let i = 0; i < subordinates.length; i++) {
        max = Math.max(max, dfs(subordinates[i],adjacencyList, informTime))
    }
    return max + informTime[currentId];
}

console.log(numOfMinutes(N, 4, MANAGERS, INFORM_TIME));



