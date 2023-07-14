/*
 * @lc app=leetcode id=212 lang=javascript
 *
 * [212] Word Search II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function (board, words) {
  let trie = new Trie();
  let result = [];
    for (let word of words) {
        trie.insert(word);
    }
    let node = trie.root;
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            dfs(board, i, j, node, '', result);
        }
    }
    return result;
};
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
var dfs = function (board, i, j, node, word, result) {
    if (node.isEnd) {
        result.push(word);
        node.isEnd = false;
    }
    if (!isValid(board, i, j) || board[i][j] === '#') {
        return;
    }
    if (!node.children[board[i][j]]) { // no match in the trie
        return;
    }
    let temp = board[i][j];
    board[i][j] = '#'; // mark as visited
    for (let k = 0; k < 4; k++) {
        dfs(board, i + dx[k], j + dy[k], node.children[temp], word + temp, result);
    }
    board[i][j] = temp;
};

var isValid = function (board, i, j) {
  return i >= 0 && i < board.length && j >= 0 && j < board[0].length;
};

class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new TrieNode();
      }
      node = node.children[word[i]];
    }
    node.isEnd = true;
  }
  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        return false;
      }
      node = node.children[word[i]];
    }
    return node.isEnd;
  }
  startsWith(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        return false;
      }
      node = node.children[word[i]];
    }
    return true;
  }
  insertChildren(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new TrieNode();
      }
      node = node.children[word[i]];
    }
  }
  print() {
    let node = this.root;
    let result = [];
    var dfs = function (node, word) {
      if (node.isEnd) {
        result.push(word);
      }
      for (let key in node.children) {
        dfs(node.children[key], word + key);
      }
    };
    dfs(node, '');
    console.log(result);
  }
}
// @lc code=end
