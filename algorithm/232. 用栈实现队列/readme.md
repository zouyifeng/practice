### 232.

```
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.popArr = []
    this.pushArr = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.pushArr.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (!this.popArr.length) {
        while(this.pushArr.length) {
            this.popArr.push(this.pushArr.pop())
        }
    }
    return this.popArr.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (!this.popArr.length) {
        while(this.pushArr.length) {
            this.popArr.push(this.pushArr.pop())
        }
    }
    return this.popArr[this.popArr.length - 1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.popArr.length === 0 && this.pushArr.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
```