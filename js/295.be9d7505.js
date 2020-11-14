(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{985:function(n,t){n.exports="### Remove Duplicates from Sorted List II\n\nGiven a `sorted linked list`, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.\n\nExample 1:\n\n```js\nInput: 1->2->3->3->4->4->5\nOutput: 1->2->5\n```\n\nExample 2:\n\n```js\nInput: 1->1->1->2->3\nOutput: 2->3\n```\n\n### Analyze\n\n思路: `快慢指针`, 用快指针跳过有重复值的链表, 慢指针负责和快指针拼接! 思路比较精妙, 后面值得二刷。\n\n```js\ns cur/q                     // s: slow; q: quick\n    1 -> 1 -> 1 -> 2 -> 3\n              .\n              .\ns->cur        q\n    1 -> 1 -> 1 -> 2 -> 3\n              .\n              .\n        next\ns ---------------\x3ecur/q\n    1 -> 1 -> 1 -> 2 -> 3\n              .\n              .\n                   s   cur/q\n    1 -> 1 -> 1 -> 2 -> 3\n              .\n              .\n                        s\n    1 -> 1 -> 1 -> 2 -> 3\n```\n\n```js\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar deleteDuplicates = function(head) {\n  const dummyHead = new ListNode(0)\n  dummyHead.next = head\n\n  let slowPoint = dummyHead\n\n  while(slowPoint.next) {\n    let cur = slowPoint.next\n    let quickPoint = cur\n    while(quickPoint.next && quickPoint.next.val === cur.val) {\n      quickPoint = quickPoint.next\n    }\n\n    if (cur === quickPoint) {\n      slowPoint = slowPoint.next\n    } else {\n      slowPoint.next = quickPoint.next\n    }\n  }\n\n  return dummyHead.next\n}\n```\n"}}]);