/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let str1 = ransomNote.split('').sort().join('');
  let str2 = magazine.split('').sort().join('');
  let i,
    j = 0;
  for (i = 0; i < str2.length; i++) {
    if (str2[i] <= str1[j]) {
      if (str2[i] === str1[j]) {
        j++;
      }
    } else {
      break;
    }
  }
  return j === str1.length;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = canConstruct;
// @after-stub-for-debug-end
