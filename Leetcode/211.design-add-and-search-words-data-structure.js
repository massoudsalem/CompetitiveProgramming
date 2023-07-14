/*
 * @lc app=leetcode id=211 lang=javascript
 *
 * [211] Design Add and Search Words Data Structure
 */

// @lc code=start

var WordDictionary = function() {
    let wordDictionary = Object.create(WordDictionary.prototype);
    wordDictionary.root = {};
    return wordDictionary;  
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    for(let i = 0; i < word.length; i++) {
        if(!node[word[i]]) {
            node[word[i]] = {};
        }
        node = node[word[i]];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let search = function(word, node) {
        for(let i = 0; i < word.length; i++) {
            if(word[i] === '.') {
                for(let key in node) {
                    if(search(word.slice(i + 1), node[key])) {
                        return true;
                    }
                }
                return false;
            }
            if(!node[word[i]]) {
                return false;
            }
            node = node[word[i]];
        }
        return node.isEnd === true;
    }
    return search(word, this.root);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

