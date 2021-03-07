### 1. 两数之和

https://leetcode-cn.com/problems/two-sum/

暴力
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 第一层遍历数组
    for(let i = 0; i < nums.length; i++) {
        const index = nums.findIndex(t => (nums[i] + t === target))
        // 在剩余数组元素找到
        if (index !== -1 && index !== i) {
            return [i, index]
        }
    }    
};
```

哈希表
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}
    let ret = []
    // 构造map，key为数组元素值，value为数组下标
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i
    }
    for (let i  = 0; i < nums.length; i++) {
        const a = target - nums[i]
        // 通过map查找，降低时间复杂度
        if (typeof map[a] !== 'undefined' && i !== map[a]) {
            ret = [map[a], i]
        }
    }
    return ret
};
```