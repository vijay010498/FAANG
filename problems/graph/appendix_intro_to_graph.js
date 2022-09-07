// Graphs are the collections for the nodes connected together
// nodes - vertex
// connection - edge
// cycle - circular connection - return to start

// Types of graph
// Undirected graph
// Directed Graph - direction is dictated
// weighted - associated weight with every edge
// unweighted

//-----------0---------------------------------------//
// Graph Representation
// Adjacency list and matrix

// adjacency list [[..valued of connected nodes]] // index = nodes
// fast lookup

// adjacency matrix
// 2D array
// takes lots of space
// useful when graph is less sparse

//******************_______________*********************************
// Breadth First Search
// start somewhere / mostly from first in list
// A queue and answers array
// add in queue
// take from queue and add to answers array
// take neighbouring vertexes

// BFS Coding
// First - create adjacency list
const adjList = [[1, 3], [0], [3, 8], [0, 4, 5, 2], [3, 6], [3], [4, 7], [6], [2]] // indexes = vertexes

const traversalBSF = (graph) => {
    const queue = [0];
    const values = [];
    const seen = {};
    while (queue.length) {
        const vertex = queue.shift();
        values.push(vertex);
        seen[vertex] = true;
        const connections = graph[vertex];
        for (let i = 0; i < connections.length; i++) {
            const connection = connections[i];
            if (!seen[connection]) {
                queue.push(connection);
            }
        }
    }
    return values;
}

console.log(traversalBSF(adjList));

//*********************************************************************8//
// DFS
// Recursive
// No need of queue

const traversalDFS = (vertex, graph, values, seen) => {
    values.push(vertex);
    seen[vertex] = true;
    const connections = graph[vertex];
    for (let i = 0 ; i < connections.length;i++) {
        const connection = connections[i];
        if (!seen[connection]) {
            traversalDFS(connection, graph, values, seen);
        }
    }
}

