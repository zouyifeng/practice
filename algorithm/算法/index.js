// 冒泡
// 冒泡
// 冒泡
// 冒泡
// 冒泡排序  平均时间复杂度O(n*n) 、最好情况O(n)、最差情况O(n*n)
(function () {
  var arr = [3, 4, 1, 2];
  // 遍历数组，次数就是arr.length - 1
  for (var j = 0; j < arr.length - 1; j++) {
    // 这里 i < arr.length - 1 ，要思考思考合适吗？我们下面继续说
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  console.log('冒泡排序结果', arr) // [1,2,3,4]
})()


// 冒泡
// 冒泡
// 冒泡
// 冒泡
// 冒泡排序  平均时间复杂度O(n*n) 、最好情况O(n)、最差情况O(n*n)
var arr = [3, 4, 1, 2];

function bubbleSort(arr) {
  for (var j = 0; j < arr.length - 1; j++) {
    // 这里要根据外层for循环的 j，逐渐减少内层 for循环的次数
    for (var i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}
console.log('冒泡排序结果', bubbleSort(arr));


// 快排
// 快排
// 快排 其时间复杂度在平均情况下是nlogn，在最坏的情况下（有序时）时间复杂度是o(n^2)
;(function () {
  var arr = [17, 2, 34, 6, 2, 6, 78, 3, 5]
  console.log('快排', quickSort(arr))
  
  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr
    }
    var index = Math.floor(arr.length / 2)
    var indexItem = arr.splice(index, 1)[0]
    var left = []
    var right = []
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < indexItem) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return quickSort(left).concat([indexItem], quickSort(right))
  }
})();


// 二分查找
;
(function () {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8]

  function binarySearch(target, arr, start, end) {
    if (start > end) {
      return -1
    }
    var start = start || 0;
    var end = end || arr.length - 1;

    var mid = parseInt(start + (end - start) / 2);
    if (target == arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      return binarySearch(target, arr, mid + 1, end);
    } else {
      return binarySearch(target, arr, start, mid - 1);
    }
    return -1;
  }
  console.log('二分查找', binarySearch(4, arr))
})();




