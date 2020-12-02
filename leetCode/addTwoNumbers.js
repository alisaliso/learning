
//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function reverse(list, prev) {
  if (list.next == null) {
    list.next = prev;
    return list;
  }

  var ret = reverse(list.next, list);
  list.next = prev;
  return ret;
}

function addTwoNumbers(list1, list2) {
  let remember = 0;

  const iter = (one, two, acc) => {
    const currentVal1 = one.val || 0;
    const currentVal2 = two.val || 0;

    let sum = currentVal1 + currentVal2 + remember;

    if (sum > 9) {
      remember = Math.floor(sum / 10);
      sum = sum % 10;
    } else {
      remember = 0
    }

    acc = new ListNode(sum, acc);
    if (!one?.next && !two?.next) return acc;

    return iter(one.next || 0, two.next || 0, acc);
  };

  let result = iter(list1, list2, null);

  if (remember > 0) {
    result = new ListNode(remember, result);
  }

  return reverse(result, null);
};


var l1 = new ListNode(2, new ListNode(4, new ListNode(3))),
  l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log("Result ->> 7, 0, 8", addTwoNumbers(l1, l2));

var l1 = new ListNode(0),
  l2 = new ListNode(0);

console.log("Result ->> 0", addTwoNumbers(l1, l2));

var l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))),
  l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

console.log('[8,9,9,9,0,0,0,1]', addTwoNumbers(l1, l2));
