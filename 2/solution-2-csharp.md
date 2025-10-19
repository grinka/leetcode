- [Problem](index)
- [Solution 1. Javascript](solution-1-javascript)
- [Detailed problem desription](description)


```csharp
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        var ll1 = l1;
        var ll2 = l2;
        int adder = 0;
        ListNode result = null, current = null;
        while(ll1 != null || ll2 != null) {
            var digit = adder + 
                (ll2 == null ? 0 : ll2.val) +
                (ll1 == null ? 0 : ll1.val);
            if(digit >= 10) {
                adder = 1;
                digit = digit % 10;
            } else {
                adder = 0;
            }
            if(result == null) {
                result = new ListNode(digit);
                current = result;
            } else {
                current.next = new ListNode(digit);
                current = current.next;
            }
            
            ll1 = ll1 == null ? null : ll1.next;
            ll2 = ll2 == null ? null : ll2.next;
        }
        if(adder > 0) {
            current.next = new ListNode(1);
        }
        
        return result;
    }
}
```