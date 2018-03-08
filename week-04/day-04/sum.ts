'use strict';
export class SumClass {
  list: number[];
  
  constructor(list: number[]) {
    this.list = list;
  }

  sum(list: number[]): number {
    let summary: number = 0;
    this.list.forEach(e => {
      summary += e
    });
    return summary
  }
}

