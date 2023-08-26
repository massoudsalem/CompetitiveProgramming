export class Solution {
  /**
   * @param n: the number of vertices
   * @param edges: the edges of undirected graph
   * @return: the number of connected components
   */
  countComponents(n, edges) {
    let graph = this.createGraph(n, edges);
    let visited = [];
    for (let i = 0; i < n; i++) {
      visited.push(false);
    }
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        this.dfs(graph, visited, i);
        count++;
      }
    }
    return count;
  }
  createGraph(n, edges) {
    let graph = [];
    for (let i = 0; i < n; i++) {
      graph.push([]);
    }
    for (let i = 0; i < edges.length; i++) {
      let edge = edges[i];
      graph[edge[0]].push(edge[1]);
      graph[edge[1]].push(edge[0]);
    }
    return graph;
  }
  dfs(graph, visited, i) {
    if (visited[i]) {
      return;
    }
    visited[i] = true;
    for (let j = 0; j < graph[i].length; j++) {
      this.dfs(graph, visited, graph[i][j]);
    }
  }
}
