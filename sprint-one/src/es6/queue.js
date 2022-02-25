class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    let keys = Object.keys(this.storage);
    if (keys.length === 0) {
      this.storage[0] = value;
    } else {
      let newKey = keys[keys.length - 1] + 1;
      this.storage[newKey] = value;
    }
  }

  dequeue() {
    let keys = Object.keys(this.storage);
    let dequeued = this.storage[keys[0]];
    delete this.storage[keys[0]];
    return dequeued;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
