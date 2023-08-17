// export class Solution {
//   /**
//    * @param words: a list of words
//    * @return: a string which is correct order
//    */
//   createGraph(words) {
//     let graph = {};
//     for (let word of words) {
//       for (let char of word) {
//         graph[char] = new Set();
//       }
//     }
//     for (let i = 0; i < words.length - 1; i++) {
//       let word1 = words[i];
//       let word2 = words[i + 1];
//       let minLen = Math.min(word1.length, word2.length);
//       if (
//         word1.length > word2.length &&
//         word1.slice(0, minLen) === word2.slice(0, minLen)
//       ) {
//         return '';
//       }
//       for (let j = 0; j < minLen; j++) {
//         if (word1[j] !== word2[j]) {
//           graph[word1[j]].add(word2[j]);
//           break;
//         }
//       }
//     }
//     return graph;
//   }

//   alienOrder(words) {
//     let graph = this.createGraph(words);
//     let visited = {};
//     let result = [];
//     function dfs(char) {
//       if (char in visited) {
//         return visited[char];
//       }

//       visited[char] = true;

//       for (let neighChar of graph[char]) {
//         if (dfs(neighChar)) {
//           return true;
//         }
//       }

//       visited[char] = false;
//       result.push(char);
//     }

//     for (let char in graph) {
//       if (dfs(char)) {
//         return '';
//       }
//     }

//     return result.reverse().join('');
//   }
  
  

// }

// same as above but using priority queue instead of dfs
// note for some above cases, dfs not work but priority queue works i think 
// because the online judge (LintCode) is not optimized for dfs
export class Solution {
  /**
   * @param {string[]} words
   * @return {string}
   */
  alienOrder(words) {
    let graph = this.buildGraph(words);
    if (!graph) {
      return '';
    }
    return this.topologicalSort(graph);
  }

  buildGraph(words) {
    let graph = {};
    for (let word of words) {
      for (let char of word) {
        graph[char] = '';
      }
    }
    for (let i = 0; i < words.length - 1; i++) {
      let j = 0;
      let w1 = words[i];
      let w2 = words[i + 1];
      let minLen = Math.min(w1.length, w2.length);
      for (j; j < minLen; j++) {
        if (w1[j] !== w2[j]) {
          graph[w1[j]] += w2[j];
          break;
        }
      }
      if (j === minLen && w1.length > w2.length) {
        return false;
      }
    }
    return graph;
  }

  getInDegree(graph) {
    let map = {};
    for (let key in graph) {
      map[key] = 0;
    }
    for (let key in graph) {
      for (let char of graph[key]) {
        map[char]++;
      }
    }
    return map;
  }

  topologicalSort(graph) {
    let inDegree = this.getInDegree(graph);
    let priorityQueue = [];
    for (let key in inDegree) {
      if (inDegree[key] === 0) {
        priorityQueue.push(key);
      }
    }
    let result = [];
    priorityQueue.sort();
    while (priorityQueue.length > 0) {
      let node = priorityQueue.shift();
      result.push(node);
      for (let char of graph[node]) {
        inDegree[char]--;
        if (inDegree[char] === 0) {
          priorityQueue.push(char);
        }
      }
      priorityQueue.sort();
    }
    if (result.length !== Object.keys(inDegree).length) {
      return '';
    }
    return result.join('');
  }
}