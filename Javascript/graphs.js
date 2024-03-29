
//Has path problem 

//depth first 
const hasPathDepth = (graph, src, dst) => {
    if(src == dst) return true;

    for(let neighbor of graph[src]) {
        if(hasPathDepth(graph, neighbor, dst) == true) {
            return true;
        }
    }

    return false;
};


//breadth first (iterative obviously)
const hasPathBreadth = (graph, src, dst) => {
   const queue = [ src ];

   while(queue.length > 0) {
       const current = queue.shift();
       if(current == dst) return true;

       for(let neighbor of graph[current]) {
           queue.push(neighbor);
       }
   }

   return false;
};



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


//Connected components count 
const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0;

    for(let node in graph) {
        if(explore(graph, node, visited) == true) {
            ++count;
        }
    }

    return count;
};

const explore = (graph, current, visited) => {
    if(visited.has(String(current))) return false;

    visited.add(String(current));

    for(let neighbor of graph[current]) {
        explore(graph, neighbor);
    }

    return true;
};



//Largest component 
const largestComponent = (graph) => {
    const visited = new Set();
    let longest = 0;

    for(let node in graph) {
        const size = exploreSize(graph, node, visited);
        if(size > longest) longest = size;
    }

    return longest; 
};

const exploreSize = (graph, node, visited) => {
    if(visited.has(node)) return 0;

    visited.add(node);

    let size = 1;

    for(let neighbor of graph[node]) {
        size += exploreSize(graph, neighbor, visited);
    }

    return size;
};