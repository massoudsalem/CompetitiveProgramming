/*
 * @lc app=leetcode id=417 lang=javascript
 *
 * [417] Pacific Atlantic Water Flow
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
// 
// solution 2: floodFill using one visited array
var pacificAtlantic = function(heights) {
    let result = [];
    let visited = Array.from({length: heights.length}, () => Array.from({length: heights[0].length}, () => 0));
    const pacific = 1;
    const atlantic = 2;

    for(let i = 0; i < heights.length; i++) {
        floodFill(heights, visited, Number.MIN_SAFE_INTEGER, i, 0, pacific);
        floodFill(heights, visited, Number.MIN_SAFE_INTEGER, i, heights[0].length - 1, atlantic);
    }
    for(let i = 0; i < heights[0].length; i++) {
        floodFill(heights, visited, Number.MIN_SAFE_INTEGER, 0, i, pacific);
        floodFill(heights, visited, Number.MIN_SAFE_INTEGER, heights.length - 1, i, atlantic);
    }

    for(let i = 0; i < heights.length; i++) {
        for(let j = 0; j < heights[0].length; j++) {
            //check if both pacific and atlantic can be reached 1(01) | 2(10) is 3(11)
            if(visited[i][j] === 3) {
                result.push([i, j]);
            }
        }
    }
    return result;
};
var dx = [0, 0, 1, -1];
var dy = [1, -1, 0, 0];
function isValid (i,j , maxI, maxJ) {
    return i >= 0 && i < maxI && j >= 0 && j < maxJ;
}

const floodFill = (heights, visited, preHeight, i, j, ocean) => {
    if(!isValid(i, j, heights.length, heights[0].length) || visited[i][j] & ocean || heights[i][j] < preHeight) {
        return;
    }
    visited[i][j] |= ocean;
    for(let k = 0; k < 4; k++) {
        floodFill(heights, visited, heights[i][j], i + dx[k], j + dy[k], ocean);
    }
}
// @lc code=end


// solution 1: floodFill using two visited arrays
// var pacificAtlantic = function(heights) {
//     let result = [];
//     let pacificVisited = Array.from({length: heights.length}, () => Array.from({length: heights[0].length}, () => false));
//     let atlanticVisited = Array.from({length: heights.length}, () => Array.from({length: heights[0].length}, () => false));
    
//     for(let i = 0; i < heights.length; i++) {
//         floodFill(heights, pacificVisited, Number.MIN_SAFE_INTEGER, i, 0);
//         floodFill(heights, atlanticVisited, Number.MIN_SAFE_INTEGER, i, heights[0].length - 1);
//     }
//     for(let i = 0; i < heights[0].length; i++) {
//         floodFill(heights, pacificVisited, Number.MIN_SAFE_INTEGER, 0, i);
//         floodFill(heights, atlanticVisited, Number.MIN_SAFE_INTEGER, heights.length - 1, i);
//     }

//     for(let i = 0; i < heights.length; i++) {
//         for(let j = 0; j < heights[0].length; j++) {
//             if(pacificVisited[i][j] && atlanticVisited[i][j]) {
//                 result.push([i, j]);
//             }
//         }
//     }
//     return result;
// };
// var dx = [0, 0, 1, -1];
// var dy = [1, -1, 0, 0];
// function isValid (i,j , maxI, maxJ) {
//     return i >= 0 && i < maxI && j >= 0 && j < maxJ;
// }

// const floodFill = (heights, visited, preHeight, i, j) => {
//     if(!isValid(i, j, heights.length, heights[0].length) || visited[i][j] || heights[i][j] < preHeight) {
//         return;
//     }
//     visited[i][j] = true;
//     for(let k = 0; k < 4; k++) {
//         floodFill(heights, visited, heights[i][j], i + dx[k], j + dy[k]);
//     } 
// }

