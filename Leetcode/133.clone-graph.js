/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */



// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    // BFS
    if (!node) return null;
    const copy = new Map();
    const queue = new Queue();

    queue.enqueue(node);
    copy.set(node, new Node(node.val));

    while (!queue.isEmpty()) {
        const current = queue.dequeue();
        for (let neighbor of current.neighbors) {
            if (!copy.has(neighbor)) {
                copy.set(neighbor, new Node(neighbor.val));
                queue.enqueue(neighbor);
            }
            copy.get(current).neighbors.push(copy.get(neighbor));
        }
    }

    return copy.get(node);
};
// @lc code=end

