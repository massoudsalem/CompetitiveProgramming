/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Solution 3: BFS using Queue
var maxDepth = function(root) {
    let start = root;
    let queue = new Queue();

    if(!start) return 0;

    queue.enqueue([start, 1]);
    let maxDepth = 0;
    while(queue.size() > 0){
        let [node, depth] = queue.dequeue();
        if(node){
            maxDepth = Math.max(maxDepth, depth);
            queue.enqueue([node.left, depth + 1]);
            queue.enqueue([node.right, depth + 1]);
        }
    }

    return maxDepth;
};
// @lc code=end
   
// Solution 2: DFS using Recursion
// var maxDepth = function(root) {
//     if(!root) return 0;
//     return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };

// Solution 1: DFS using Stack
// var maxDepth = function(root) {
//     let start = root;
//     let stack = [];

//     if(!start) return 0;

//     stack.push([start, 1]);
//     let maxDepth = 0;
//     while(stack.length > 0){
//         let [node, depth] = stack.pop();
//         if(node){
//             maxDepth = Math.max(maxDepth, depth);
//             stack.push([node.left, depth + 1]);
//             stack.push([node.right, depth + 1]);
//         }
//     }
        
//     return maxDepth;
// };

