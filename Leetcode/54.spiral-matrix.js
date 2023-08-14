/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const directions = {
    right: 0,
    down: 1,
    left: 2,
    up: 3
}

const getNextDirection = (direction) => {
    switch (direction) {
        case directions.right:
            return directions.down;
        case directions.down:
            return directions.left;
        case directions.left:
            return directions.up;
        case directions.up:
            return directions.right;
    }
}

const getNextPosition = (position, direction) => {
    switch (direction) {
        case directions.right:
            return [position[0], position[1] + 1];
        case directions.down:
            return [position[0] + 1, position[1]];
        case directions.left:
            return [position[0], position[1] - 1];
        case directions.up:
            return [position[0] - 1, position[1]];
    }
}

const isOutOfBounds = (position, matrix) => {
    const [row, col] = position;
    return row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length;
}

var spiralOrder = function(matrix) {
    if (matrix.length === 0) return [];
    const result = [];
    let direction = directions.right;
    let position = [0, 0];
    let count = 0;
    while (count < matrix.length * matrix[0].length) {
        result.push(matrix[position[0]][position[1]]);
        matrix[position[0]][position[1]] = null;
        count++;
        const nextPosition = getNextPosition(position, direction);
        if (isOutOfBounds(nextPosition, matrix) || matrix[nextPosition[0]][nextPosition[1]] === null) {
            direction = getNextDirection(direction);
            position = getNextPosition(position, direction);
        } else {
            position = nextPosition;
        }
    }
    return result;    
};
// @lc code=end

