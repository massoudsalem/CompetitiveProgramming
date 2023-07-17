/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // note that isCyclic function is assume that the graph is directed
    var graph = Array.from({length: numCourses}, () => []);
    var visited = Array.from({length: numCourses}, () => 0);
    for (var i = 0; i < prerequisites.length; i++) {
        graph[prerequisites[i][0]].push(prerequisites[i][1]);
    }
    
    function isCyclic(node) {
        // if node is visited from the same path, then it is cyclic
        if (visited[node] === 1) {
            return true;
        }
        // if node is visited from a different path, then it is not cyclic
        // but we don't need to visit it again
        if (visited[node] === 2) {
            return false;
        }
        visited[node] = 1;
        for (var i = 0; i < graph[node].length; i++) {
            if (isCyclic(graph[node][i])) {
                return true;
            }
        }
        visited[node] = 2;
        return false;
    }

    for (var i = 0; i < numCourses; i++) {
        if (isCyclic(i)) {
            return false;
        }
    }

    return true;    
};
// @lc code=end

