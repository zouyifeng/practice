### 349. 两个数组的交集

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if (nums1.length === 0 || nums2.length === 0) {
        return []
    }
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    let ret = new Set()

    for (let item of set1) {
        if (set2.has(item)) {
            ret.add(item)
        }
    }
    
    return Array.from(ret)
};
```