(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{930:function(n,e){n.exports="### 235. Lowest Common Ancestor of a Binary Search Tree\n\nGiven a `binary search tree` (BST), find the `lowest common ancestor` (LCA) of two given nodes in the BST.\n\nAccording to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”\n\nGiven binary search tree: root = [6,2,8,0,4,7,9,null,null,3,5]\n\n```js\n       6\n     /   \\\n    2      8\n   / \\    / \\\n  0   4  7   9\n     / \\\n    3   5\n```\n\nExample 1:\n\n```js\nInput: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8\nOutput: 6\n```\n\nExplanation: The LCA of nodes 2 and 8 is 6.\n\nExample 2:\n\n```js\nInput: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4\nOutput: 2\n``` \n\nExplanation: The LCA of nodes 2 and 4 is 2, since `a node can be a descendant of itself` according to the LCA definition.\n\nConstraints:\n\n* `All of the nodes' values will be unique`.\n* `p and q are different and both values will exist in the BST`.\n\n### Analyze\n\n1. if `p` node and `q` node are in `two` side of current iterator node `n`, the LCA is `n`;\n2. if `p` node and `q` node are in `one` side of current iterator node `n`, to loop the one step in the other side node;\n\n```js\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n\n/**\n * @param {TreeNode} root\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {TreeNode}\n */\nvar lowestCommonAncestor = function(root, p, q) {\n  return lca(root, p, q)\n};\n\nvar lca = function(node, p, q) {\n  if (!node) return null\n  if ((p.val - node.val) * (q.val - node.val) <= 0) {\n    return node\n  } else if (p.val - node.val < 0) {\n    return lca(node.left, p, q)\n  } else {\n    return lca(node.right, p, q)\n  }\n}\n```\n"}}]);