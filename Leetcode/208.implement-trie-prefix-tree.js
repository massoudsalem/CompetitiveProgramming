/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start

var Trie = function() {
    let trie = Object.create(Trie.prototype);
    trie.root = {};
    return trie;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
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
Trie.prototype.search = function(word) {
    let node = this.root;
    for(let i = 0; i < word.length; i++) {
        if(!node[word[i]]) {
            return false;
        }
        node = node[word[i]];
    }
    return node.isEnd === true;    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for(let i = 0; i < prefix.length; i++) {
        if(!node[prefix[i]]) {
            return false;
        }
        node = node[prefix[i]];
    }
    return true;    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

