### 排序算法

![total](./img/total.png)

#### 常用函数
```js
// 数组中交换某两下标的数
function swap (arr, index1, index2) {
  let temp = arr[index2]
  arr[index2] = arr[index1]
  arr[index1] = temp
}
```


#### 冒泡排序
![bubble](./img/162b895b452b306c)
时间复杂度：O(n*n)
```js
function bubbleSort(list) {
  if(!Array.isArray(list)) return
  const len = list.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (list[j] < list[j+1]) {
        swap(list, j, j+1)
      }
    }
  }
}
```


### 插入排序
![insert](./img/162b895c7e59dcd1)
时间复杂度：O(n*n)
```js
function insertSort(list) {
  if(!Array.isArray(list)) return
  const len = list.length
  for(let i = 1; i < len; i++) {
    for(let j = j-1; list[j] > list[j+1]; j--) {
      swap(list, j, j+1)
    }
  }
}
```


### 选择排序
![insert](./img/162bc8ea14567e2e)
时间复杂度：O(n*n)
```js
function selectSort(list) {
  if (!Array.isArray(list)) return
  const len = list.length
  for (let i = 0; i < len - 1; i ++) {
    let minIndex = i
    for (let j = i+1; j < len; j++) {
      minIndex = list[i] > list[j] ? j : minIndex
    }
    swap(list, i, minIndex)
  }
}
```

### 快速排序


#### 实现一
[参考：快速排序（Quicksort）的Javascript实现](https://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html)
```js
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  var pivotIndex = Math.floor(arr.length/2)
  var pivot = arr.splice(pivotIndex, 1)[0]
  var left = []
  var right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

```

#### 实现二
[参考：js算法-快速排序(Quicksort)](https://segmentfault.com/a/1190000017814119)
```js
function swap(arr, i ,j){
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

/**
 * 
 * @param {*} arr  数组
 * @param {*} start  起始下标
 * @param {*} end  结束下标 + 1
 */
 function divide(arr, start, end){
    // 基准点
    const pivot = arr[end-1];
    
    // i初始化是-1，也就是起始下标的前一个
    let i = start - 1;
    
    // 循环
    for(let j = start; j < end-1; j++){
      // 如果比基准点小就i++，然后交换元素位置
      if(arr[j] <= pivot){
        i++;
        swap(arr, i, j);
      }
    }
    // 最后将基准点插入到i+1的位置
    swap(arr, i+1, end-1);
    // 返回最终指针i的位置
    return i+1;
 }

/**
  * 
  * @param {*} arr  数组
  * @param {*} start  起始下标
  * @param {*} end  结束下标 + 1
  */
function qsort(arr, start=0, end=arr.length){
  if(start < end - 1){
    const qivot = divide(arr, start, end);
    qsort(arr, start, qivot);
    qsort(arr, qivot + 1, end);
  }
  return arr;
}
```

### 归并排序

![归并排序](./img/162be13c7e30bd86)

```js
function sort(array) {
  checkArray(array);
  mergeSort(array, 0, array.length - 1);
  return array;
}

function mergeSort(array, left, right) {
  // 左右索引相同说明已经只有一个数
  if (left === right) return;
  // 等同于 `left + (right - left) / 2`
  // 相比 `(left + right) / 2` 来说更加安全，不会溢出
  // 使用位运算是因为位运算比四则运算快
  let mid = parseInt(left + ((right - left) >> 1));
  mergeSort(array, left, mid);
  mergeSort(array, mid + 1, right);

  let help = [];
  let i = 0;
  let p1 = left;
  let p2 = mid + 1;
  while (p1 <= mid && p2 <= right) {
    help[i++] = array[p1] < array[p2] ? array[p1++] : array[p2++];
  }
  while (p1 <= mid) {
    help[i++] = array[p1++];
  }
  while (p2 <= right) {
    help[i++] = array[p2++];
  }
  for (let i = 0; i < help.length; i++) {
    array[left + i] = help[i];
  }
  return array;
}
```