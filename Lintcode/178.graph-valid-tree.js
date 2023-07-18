export class Solution {
    /**
     * @param n: An integer
     * @param edges: a list of undirected edges
     * @return: true if it's a valid tree, or false
     */
    buildGraph(n, edges) {
        let graph = new Array(n).fill(0).map(() => []);
        for (let [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }
        return graph;
    }
    
    dfs(node, graph, visited) {
        visited[node] = true;
        for (let neighbor of graph[node]) {
            if (!visited[neighbor]) {
                this.dfs(neighbor, graph, visited);
            }
        }
    }

    validTree(n, edges) {
        let connectedComponents = 0;
        let visited = new Array(n).fill(false);
        let graph = this.buildGraph(n, edges);
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                connectedComponents++;
                this.dfs(i, graph, visited);
            }
        }
        return connectedComponents === 1 && edges.length === n - 1;      
    }
  }