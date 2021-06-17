### 剑指 Offer 25. 合并两个排序的链表


https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let c1 = l1
    let c2 = l2
    let node = new ListNode()
    let dummyHead = node
    while(c1 && c2) {
        node.next = new ListNode()
        node = node.next
        if (c1.val < c2.val) {
            node.val = c1.val
            c1 = c1.next
        } else {
            node.val = c2.val
            c2 = c2.next
        }
    }
    if (c1) {
        node.next = c1
    }
    if (c2) {
        node.next = c2
    }
    return dummyHead.next
};
```


```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};
```