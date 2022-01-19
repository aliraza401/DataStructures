// Stack -> LIFO(Last In First Out)
// data can be incertaed from one end and removed from the same end.
// Operations -> PUSH, POP, PEEK, ISEMPTY, SEARCH, MIN, MAX, TRUNCATE

class Stack {
  constructor() {
    this._data = [];
  }
  push(e) {
    this._data.push(e);
  }
  pop() {
    return !this.isEmpty() ? this._data.pop() : -1;
  }
  peek() {
    return !this.isEmpty() ? this._data[this._data.length - 1] : -1;
  }
  isEmpty() {
    return this._data.length === 0;
  }
  min() {
    return this._data.every((e) => typeof e == "number")
      ? Math.min(...this._data)
      : "Not a integer array";
  }
  max() {
    return this._data.every((e) => typeof e == "number")
      ? Math.max(...this._data)
      : "Not a integer array";
  }
  getStack() {
    return this._data;
  }
  truncate() {
    this._data.length = 0;
  }
}

module.exports = Stack;
