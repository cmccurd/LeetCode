/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1 === null && list2 === null) {
        return null
    }
    var result;
    if (list1 === null) {
        return new ListNode(list2.val, mergeTwoLists(list1, list2.next));
    }
    if (list2 === null) {
        return new ListNode(list1.val, mergeTwoLists(list1.next, list2));
    }
    list1.val <= list2.val ? result = new ListNode(list1.val, mergeTwoLists(list1.next, list2)) : result = new ListNode(list2.val, mergeTwoLists(list1, list2.next));
    
    return result;
};