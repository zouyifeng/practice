### 2. 两数相加

https://leetcode-cn.com/problems/add-two-numbers/

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
var addTwoNumbers = function(l1, l2) {
    let f = 0
    let node = new ListNode()
    const head = node
    while(l1 || l2) {
        node.next = new ListNode()
        node = node.next
        let val
        if (l1 && l2) {
            val = l1.val + l2.val + f 
        } else if (l1) {
            val = l1.val + f 
        } else if (l2) {
            val = l2.val + f 
        }
        node.val = val%10
        f = Math.floor(val/10)

        l2 = l2 && l2.next
        l1 = l1 && l1.next
    }
    if (f) {
        node.next = new ListNode()
        node = node.next
        node.val = f
    }
    return head.next
};
```