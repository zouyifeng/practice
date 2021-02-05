### 1. 两数之和

暴力
```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        const index = nums.findIndex(t => (nums[i]+t === target))
        if (index !== -1 && index !== i) {
            return [i, index]
        }
    }    
};
```

哈希表
```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}
    let ret = []
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i
    }
    for (let i  = 0; i< nums.length; i++) {
        const a = target - nums[i]
        if (typeof map[a] !== 'undefined' && i !== map[a]) {
            ret = [map[a], i]
        }
    }
    return ret
};
```