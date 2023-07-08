/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 * 
 */
var isSameTree = function(p, q) {
    if(!p && !q) return true;
    if(!p || !q) return false;
    if(p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Solution 4:Stringify and compare
var isSubtree = function(root, subRoot) {
    let str1 = JSON.stringify(root);
    let str2 = JSON.stringify(subRoot);
    return str1.includes(str2);
};
// @lc code=end

// Solution 3: BFS using Queue
// var isSubtree = function(root, subRoot) {
//     if(!root && !subRoot) return true;
//     if(!root || !subRoot) return false;
//     let queue = new Queue();
//     queue.enqueue(root);
//     while(queue.size() > 0){
//         let node = queue.dequeue();
//         if(node.val === subRoot.val && isSameTree(node, subRoot)) return true;
//         if(node.left) queue.enqueue(node.left);
//         if(node.right) queue.enqueue(node.right);
//     }
//     return false;
// };



// Solution 2: DFS using Stack
// var isSubtree = function(root, subRoot) {
//     if(!root && !subRoot) return true;
//     if(!root || !subRoot) return false;
//     let stack = [];
//     stack.push(root);
//     while(stack.length > 0){
//         let node = stack.pop();
//         if(node.val === subRoot.val && isSameTree(node, subRoot)) return true;
//         if(node.left) stack.push(node.left);
//         if(node.right) stack.push(node.right);
//     }
//     return false;
// };

// Solution 1: DFS using Recursion
// var isSubtree = function(root, subRoot) {
//     if(!root && !subRoot) return true;
//     if(!root || !subRoot) return false;
//     if(root.val === subRoot.val &&isSameTree(root, subRoot)) return true;
//     return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
// };

