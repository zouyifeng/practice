### 225.用队列实现栈

```
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.pushArr = []
    this.popArr = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.pushArr.push(x)
    while(this.popArr.length) {
        this.pushArr.push(this.popArr.shift())
    }
    [this.pushArr, this.popArr] = [this.popArr, this.pushArr]
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.popArr.shift()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.popArr[0]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.popArr.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
```