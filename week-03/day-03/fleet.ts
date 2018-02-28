import { Thing } from "./things";

class Fleet {
  private things: Thing[] = []; //there was a bug

  constructor() { }

  add(thing: Thing) {
    this.things.push(thing);
  }

  print() {
    this.things.forEach(function (item) {
      let mark: string = ' ';
      if (item.getCompleted()) {
        mark = 'X';
      }
      console.log(`[${mark}] ${item.getName()}`);
      // console.log(`[${item.getCompleted() ? 'X' : ' '}] ${item.getName()}`);
    })
  }
}

export { Fleet };