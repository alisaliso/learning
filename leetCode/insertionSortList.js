function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// var insertionSortList = function (head) {
//   let start = new ListNode(Infinity);
//   let current = start;

//   while (head) {
//     let next = head.next;
//     current = start;

//     while (current.next?.val <= head.val) {
//       current = current.next;
//     }

//     head.next = current.next;
//     current.next = head;
//     head = next;
//   }

//   return start.next;
// };

const parce = (nodes) => {
  const list = [];
  let node = nodes;

  while (node) {
    list.push(node.val);
    node = node.next;
  }

  return list.sort((a, b) => a - b).reverse();
}

var insertionSortList = function (head) {
  const parsed = parce(head);

  return parsed.reduce((acc, elem) => {
    return new ListNode(elem, acc);
  }, null);
}

// 4 -> 2 -> 1 -> 3
// [-1,5,3,4,0]
// [-2147483648, -2147483647]
const l1 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));
const l3 = new ListNode(-2147483648, new ListNode(-2147483647));
const l2 = new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0)))));
const l1Result = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

console.log("%j", insertionSortList(l1));
console.log("%j", insertionSortList(l2));
console.log("%j", insertionSortList(l3));
