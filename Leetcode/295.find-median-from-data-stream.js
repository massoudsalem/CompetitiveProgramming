/*
 * @lc app=leetcode id=295 lang=javascript
 *
 * [295] Find Median from Data Stream
 */

// @lc code=start


// Solution 2: Two Heaps
var MedianFinder = function () {
    let medianFinder = Object.create(MedianFinder.prototype);
    medianFinder.leftPartitionHeap = new MinPriorityQueue();
    medianFinder.rightPartitionHeap = new MaxPriorityQueue();

    return medianFinder;
};

MedianFinder.prototype.addNum = function (num) {
    // this function ensures that leftPartitionHeap always has the middle element
    this.leftPartitionHeap.enqueue(num);
    this.rightPartitionHeap.enqueue(this.leftPartitionHeap.dequeue().element);

    if (this.leftPartitionHeap.size() < this.rightPartitionHeap.size()) {
        this.leftPartitionHeap.enqueue(this.rightPartitionHeap.dequeue().element);
    }
};


MedianFinder.prototype.findMedian = function () {
    // if length is odd, leftPartitionHeap will have the median element
    // else, average of leftPartitionHeap and rightPartitionHeap will be the median element
    if (this.leftPartitionHeap.size() > this.rightPartitionHeap.size()) {
        return this.leftPartitionHeap.front().element;
    } else {
        return (this.leftPartitionHeap.front().element + this.rightPartitionHeap.front().element) / 2;
    }
};

// Solution 1: Binary Search Insertion
// var MedianFinder = function () {
//   let medianFinder = Object.create(MedianFinder.prototype);
//   medianFinder.arr = [];
//   medianFinder.len = 0;

//   return medianFinder;
// };

// /**
//  * @param {number} num
//  * @return {void}
//  */
// MedianFinder.prototype.addNum = function (num) {
//   const binarySearch = (arr, target) => {
//     if (!arr) {
//       return 0;
//     }
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);

//       if (arr[mid] === target) {
//         return mid;
//       } else if (arr[mid] < target) {
//         left = mid + 1;
//       } else if (arr[mid] > target) {
//         right = mid - 1;
//       }
//     }

//     return left;
//   };

//   let index = binarySearch(this.arr, num);
//   if (index === this.len) {
//     this.arr.push(num);
//   } else {
//     this.arr.splice(index, 0, num);
//   }
//   this.len++;

//   return;
// };

// /**
//  * @return {number}
//  */
// MedianFinder.prototype.findMedian = function () {
//   if (this.len % 2 === 0) {
//     return (this.arr[this.len / 2 - 1] + this.arr[this.len / 2]) / 2;
//   } else {
//     return this.arr[Math.floor(this.len / 2)];
//   }
// };

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
