/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = [];
    for (let i = 1; i<=n; i++){
        answer[i] = `${i}`;
        if(i%3==0){
            answer[i] = "Fizz";
        }
        if(i%5==0){
            answer[i] = answer[i] + "Buzz";
        }
        if(i%5==0 && !(i%3==0)){
            answer[i] = "Buzz";
        }
    }
    answer.shift();
    return answer;
};
// @lc code=end

