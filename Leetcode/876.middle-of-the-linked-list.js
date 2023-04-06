/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let a = [];
    while(head){
        a.push(head)
        head=head.next;
    }  
    let _ = Math.trunc(a.length/2);  
    return a[_];
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = middleNode;
// @after-stub-for-debug-end