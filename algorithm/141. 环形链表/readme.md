### linked-list-cycle 141.探测是否有环

· 思路一 限定时间内遍历链表，如果指针没指向null，则为有环
· 思路二 遍历链表并用利用set存放链表节点，如果发现存在相同节点（地址相同），则为有环
· 思路三 快慢指针，如下。如果指针能够相遇，则表示有环

```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) { 
    let fast = head
    let slow = head
    while(fast && fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
        if(fast === slow) {
            return true
        }
    }
    return false
};
```
