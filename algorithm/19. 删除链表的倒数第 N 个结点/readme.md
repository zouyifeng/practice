### 19. 删除链表的倒数第 N 个结点

https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/


```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode()
    dummyHead.next = head
    let current = dummyHead
    let len = 0
    while(current) {
        current = current.next
        len++
    }
    current = dummyHead
    let index = len - n
    while(--index) {
        current = current.next
    }
    current.next = current.next.next

    return dummyHead.next
};
```