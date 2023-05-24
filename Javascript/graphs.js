//Undirected Path Graph Problem 
const undirectedPath = (edges, nodeA, nodeB) => {
    visited = new Set();
    const graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB, visited);
};

const hasPath = (graph, src, dst, visited) => {
    if(visited.has(src)) return false;
    if(src == dst) return true;

    visited.add(src);

    for (let neighbor of graph[src]) {
        if(hasPath(graph, neighbor, dst, visited) == true) {
            return true;
        }
    }

    return false;
};


const buildGraph = (edges) => {
    const graph = {};

    for(let edge of edges) {
        const [a, b] = edge;

        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
};