let parent = i => ((i + 1) >>> 1) - 1;
let left = i => (i << 1) + 1;
let right = i => (i + 1) << 1;

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }
  
  isEmpty() {
    return this.size() == 0;
  }
  
  peek() {
    return this._heap[0];
  }
  
  push(...values) {
    values.forEach(value => {
      this._heap.push(value);
      this._siftUp();
    });
    return this.size();
  }
  
  pop() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > 0) {
      this._swap(0, bottom);
    }
    this._heap.pop();
    this._siftDown();
    return poppedValue;
  }
  
  replace(value) {
    const replacedValue = this.peek();
    this._heap[0] = value;
    this._siftDown();
    return replacedValue;
  }
  
  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  
  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }
 
  _siftUp() {
    let node = this.size() - 1;
    while (node > 0 && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }
 
  _siftDown() {
    let node = 0;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
      let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}