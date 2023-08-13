import {
  Interval,
} from '/opt/node/lib/lintcode/index.js';

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

export class Solution {
  /**
   * @param intervals: an array of meeting time intervals
   * @return: the minimum number of conference rooms required
   */
  

  minMeetingRooms(intervals) {
    let starts = intervals.map(i => i.start).sort((a, b) => a - b);
    let ends = intervals.map(i => i.end).sort((a, b) => a - b);
    let rooms = 0;
    let end = 0;
    for (let i = 0; i < intervals.length; i++) {
      if (starts[i] < ends[end]) {
        rooms++;
      } else {
        end++;
      }
    }
    return rooms;
  }
}