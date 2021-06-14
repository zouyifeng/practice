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