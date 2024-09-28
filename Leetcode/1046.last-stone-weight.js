/*
 * @lc app=leetcode id=1046 lang=javascript
 *
 * [1046] Last Stone Weight
 */

// @lc code=start
// Solution 3: Max Heap
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let maxHeap = new MaxPriorityQueue();
    for(let stone of stones){
        maxHeap.enqueue(stone);
    }
    while(maxHeap.size()>1){
        let stone1 = maxHeap.dequeue().element;
        let stone2 = maxHeap.dequeue().element;
        if(stone1 !== stone2){
            maxHeap.enqueue(stone1 - stone2);
        }
    }
    return maxHeap.size() === 0 ? 0 : maxHeap.dequeue().element;
};
// Solution 2: Sorting
/**
//  * @param {number[]} stones
//  * @return {number}
//  */
// var lastStoneWeight = function(stones) {
//     while(stones.length > 1){
//         stones.sort((a, b) => a - b);
//         let stone1 = stones.pop();
//         let stone2 = stones.pop();
//         if(stone1 !== stone2){
//             stones.push(stone1 - stone2);
//         }
//     }
//     return stones.length === 0 ? 0 : stones[0];
// }
// Solution 1: Brute Force
// /**
//  * @param {number[]} stones
//  * @return {number}
//  */
// var findMax = (stones) => {
//     let max = 0;
//     let maxIndex = 0;
//     for(let i = 0; i < stones.length; i++){
//         if(stones[i] > max){
//             max = stones[i];
//             maxIndex = i;
//         }
//     }
//     return maxIndex;
// }
// var popMax = (stones) => {
//     let maxIndex = findMax(stones);
//     let max = stones[maxIndex];
//     stones.splice(maxIndex, 1);
//     return max;
// }
// var lastStoneWeight = function(stones) {
//     while(stones.length > 1){
//         let stone1 = popMax(stones);
//         let stone2 = popMax(stones);
//         if(stone1 !== stone2){
//             stones.push(stone1 - stone2);
//         }
//     }
//     return stones.length === 0 ? 0 : stones[0];
// }
// @lc code=end

