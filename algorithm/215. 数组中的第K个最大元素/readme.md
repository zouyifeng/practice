### 215. 数组中的第K个最大元素
在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

https://leetcode-cn.com/problems/kth-largest-element-in-an-array/

### 解法

#### 暴力排序
排序，取第k个元素
```
let findKthLargest = function(nums, k) {
    // 倒序排列
    nums.sort((a, b) => b - a)
    return nums[k-1]
};
```

取前k个元素，建小顶堆。堆顶依次与k到数组末尾元素对比，如果堆顶元素更小，则替换，再堆化。
```
let findKthLargest = function(nums, k) {
  let heap = [, ],
    i = 0
  while (i < k) {
    heap.push(nums[i++])
  }
  console.log(heap)
  buildHeap(heap, 1)
  console.log(heap)

  for (let i = k; i < nums.length; i++) {
    if (nums[i] > heap[1]) {
      heap[1] = nums[i]
      buildHeap(heap, 1)
    }
  }
  return heap[1]
}

let heapify = (items, i) => {
  // 自下而上式堆化
  while (Math.floor(i / 2) > 0 && items[i] < items[Math.floor(i / 2)]) {
    swap(items, i, Math.floor(i / 2)); // 交换 
    i = Math.floor(i / 2);
  }
}

// 原地建堆
function buildHeap(items, heapSize) {
  while(heapSize < items.length - 1) {
    heapSize ++
    heapify(items, heapSize)
  }
}

function swap(items, i, j) {
  let temp = items[i]
  items[i] = items[j]
  items[j] = temp
}
```



