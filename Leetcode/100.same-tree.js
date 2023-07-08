/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// Solution 3: BFS using Queue
var isSameTree = function(p, q) {
    let start1 = p;
    let start2 = q;
    let queue1 = new Queue();
    let queue2 = new Queue();

    if(!start1 && !start2) return true;
    if(!start1 || !start2) return false;

    queue1.enqueue(start1);
    queue2.enqueue(start2);
    while(queue1.size() > 0 && queue2.size() > 0){
        let node1 = queue1.dequeue();
        let node2 = queue2.dequeue();
        if(node1.val !== node2.val) return false;
        if(node1.left && node2.left){
            queue1.enqueue(node1.left);
            queue2.enqueue(node2.left);
        }else if(node1.left || node2.left){
            return false;
        }
        if(node1.right && node2.right){
            queue1.enqueue(node1.right);
            queue2.enqueue(node2.right);
        }else if(node1.right || node2.right){
            return false;
        }
    }

    return true;
};
// @lc code=end


// Solution 2: DFS using Recursion
// var isSameTree = function(p, q) {
//     if(!p && !q) return true;
//     if(!p || !q) return false;
//     if(p.val !== q.val) return false;
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };


// // Solution 1: DFS using Stack
// var isSameTree = function(p, q) {
//     let start1 = p;
//     let start2 = q;
//     let stack1 = [];
//     let stack2 = [];

//     if(!start1 && !start2) return true;
//     if(!start1 || !start2) return false;

//     stack1.push(start1);
//     stack2.push(start2);
//     while(stack1.length > 0 && stack2.length > 0){
//         let node1 = stack1.pop();
//         let node2 = stack2.pop();
//         if(node1.val !== node2.val) return false;
//         if(node1.left && node2.left){
//             stack1.push(node1.left);
//             stack2.push(node2.left);
//         }else if(node1.left || node2.left){
//             return false;
//         }
//         if(node1.right && node2.right){
//             stack1.push(node1.right);
//             stack2.push(node2.right);
//         }else if(node1.right || node2.right){
//             return false;
//         }
//     }

//     return true;    
// };

