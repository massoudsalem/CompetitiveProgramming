import {Interval} from '/opt/node/lib/lintcode/index.js';

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
   * @return: if a person could attend all meetings
   */
  isOverlap(a, b) {
    return a.start < b.end && b.start < a.end;
  }

  canAttendMeetings(intervals) {
    for (let i = 0; i < intervals.length; i++) {
      for (let j = i + 1; j < intervals.length; j++) {
        if (this.isOverlap(intervals[i], intervals[j])) {
          return false;
        }
      }
    }
    return true;
  }
}
