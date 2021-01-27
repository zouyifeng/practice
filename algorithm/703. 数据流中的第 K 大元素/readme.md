### 703. 数据流中的第 K 大元素

数组排序法
```
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    nums.sort((a, b) => b - a)
    this.nums = nums
    this.k = k
    if (this.nums.length > k) {
        this.nums.length = k
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.nums.length < this.k) {
        this.nums.push(val)
        this.nums.sort((a, b) => b - a)
    } else {
        const index = this.nums.findIndex(item => item < val)
        if (index !== -1) {
            this.nums.splice(index, 0 ,val)
            this.nums.length = this.k
        }
    }
    console.log(this.nums)
    return this.nums[this.k-1]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
```

最小堆