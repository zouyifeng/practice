### 169. 多数元素
map
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}
    for(let i = 0; i<nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = 1
        } else {
            map[nums[i]] = map[nums[i]] + 1
        }
        if(map[nums[i]] > nums.length/2) {
            return nums[i]
        }
    }
    return null
};
```
