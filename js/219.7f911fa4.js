(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{909:function(n,e){n.exports="### Remove Nth Node From End of List\n\nGiven a linked list, remove the n-th node from the end of list and return its head.\n\nExample:\n\nGiven linked list: 1->2->3->4->5, and n = 2.\n\nAfter removing the second node from the end, the linked list becomes 1->2->3->5.\n\nNote:\n\nGiven n will always be `valid`.\n\nFollow up:\n\nCould you do this `in one pass`?\n\n### Analyze\n\n对于删除链表节点的题目, 我们需要知道需删除链表节点的上一个节点。那如何找到需要删除节点的上一个节点呢?\n\n* 思路一: 遍历一遍链表得到链表个数 sum, 再次遍历链表则 `sum - n - 1` 表示从正向数过来需删除的链表节点的上一个节点的位数;\n  * 缺点: 这样需要两次遍历;\n* 思路二: 使用双指针的思想确认要删除的节点;\n\n此外从题目的例子可以得到的线索:\n  * n 是从 1 开始的(不是从 0 开始);\n\n```js\n1 -> 2 -> 3 -> 4 -> 5 -> null\n                .\n                .\n第一步: l 与 r 的距离为 n + 1;\n  l                r\ndummy -> 1 -> 2 -> 3 -> 4 -> 5 -> null\n                .\n                .\n第二步: 始终保持 l 与 r 的距离为 n + 1, 向右移动, 直到 r 为 null, 此时 l 的位置就是要删除节点上一个的位置。\n                   l               r\ndummy -> 1 -> 2 -> 3 -> 4 -> 5 -> null\n```\n\n```js\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} n\n * @return {ListNode}\n */\nvar removeNthFromEnd = function(head, n) {\n  const dummy = new ListNode(0)\n  dummy.next = head\n  let l = dummy\n  let r = dummy\n  let offset = n + 1\n\n  while (offset--) {\n    r = r.next\n    if (offset > 1 && r === null) {\n      return dummy.next\n    }\n  }\n\n  while (r) {\n    r = r.next\n    l = l.next\n  }\n\n  l.next = l.next.next\n\n  return dummy.next\n}\n```\n\n![](http://with.muyunyun.cn/8a3c94502a50892aba7f4697487bde32.jpg)\n\n### Sister Title\n\n61"}}]);