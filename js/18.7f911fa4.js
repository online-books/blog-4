(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{708:function(n,t){n.exports="### 图\n\n图是一种`非线性数据结构`。它的表示有以下几种:\n\n1. 邻接矩阵\n2. 邻接表\n3. 关联矩阵\n\n* `邻接矩阵`\n\n邻接矩阵是表示图的常用方法, `用二维数组来表示`, 数组的每个下标对应每个点。当两个点有连线则二维数组的值为 1, 否则二维数组的值为 0。但是这种表示方法会照成存储空间的浪费(因存在大量 0)。\n\n![](http://with.muyunyun.cn/79f5520b6028aa16491649c846430b04.jpg-300)\n\n* `邻接表`\n\n如下图: `左侧为存储的顶点, 右侧为与之想对应的点`, 后文会采用这种方式实现图。\n\n![](http://with.muyunyun.cn/0a1d5ab4a96e83dca8c7aafc948e2f4b.jpg-300)\n\n* `关联矩阵`\n\n行表示点, 列表示边。\n\n![](http://with.muyunyun.cn/48a4bf7ee32827ad4d9016f24a8ffca5.jpg-300)\n\n```js\nfunction Graph() {\n  this.topPointArr = []    // 存储顶点, 笔者认为图的顶点是不会重复的\n  this.edgeMap = new Map() // 存储边\n}\n\n// 往图里添加顶点\nGraph.prototype.addTopPoint = function(point) {\n  this.topPointArr.push(point)\n  this.edgeMap.set(point, [])\n}\n\n// 往指定的点添加相邻的点\nGraph.prototype.addEdge = function(point1, point2) {\n  this.edgeMap.get(point1).push(point2)\n  this.edgeMap.get(point2).push(point1) // 这里默认没有方向, 所以两个点互相指向\n}\n\n// 将图给打印出来\nGraph.prototype.log = function() {\n  let str = ''\n  let neighbour\n  for (let i of this.topPointArr) {\n    str += i + ' -> '\n    neighbour = this.edgeMap.get(i).join(' ')\n    str += neighbour + '\\n'\n  }\n  return str\n}\n```\n\n按之前邻接表的图示, 跑如下测试用例:\n\n```js\nvar graph = new Graph()\nvar topArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']\nfor (let i of topArr) {\n  graph.addTopPoint(i)\n}\n\ngraph.addEdge('A', 'B')\ngraph.addEdge('A', 'C')\ngraph.addEdge('A', 'D')\ngraph.addEdge('B', 'E')\ngraph.addEdge('B', 'F')\ngraph.addEdge('C', 'D')\ngraph.addEdge('C', 'G')\ngraph.addEdge('D', 'G')\ngraph.addEdge('D', 'H')\ngraph.addEdge('E', 'I')\n```\n\n使用自定义打印函数 graph.log(), 打印结果如下, 结果符合预期\n\n```js\nA -> B C D\nB -> A E F\nC -> A D G\nD -> A C G H\nE -> B I\nF -> B\nG -> C D\nH -> D\nI -> E\n```\n\n### 广度优先遍历(BFS)\n\n顾名思义, 广度优先即横向优先, 英文名为 `breadth first search`(BFS), 它示意图如下:\n\n![](http://with.muyunyun.cn/4547193af1645f33359e875559092c6b.jpg-200)\n\n思想: 用到了`队列`的思想。思路如下: (标白: 未发现; 标灰: 已找寻)\n\n* 创建队列 u, 将标灰的顶点插入队列;\n* 若队列 u 不为空;\n  * 从队列取出值 v;\n  * 将 v 的相邻节点标灰并插入队列 u;\n\n代码中用到队列相关的方法可参考 [队列](https://github.com/MuYunyun/blog/blob/master/BasicSkill/algorithm/队列.md)\n\n<details>\n  <summary>Queue实现</summary>\n\n```js\nfunction Queue() {\n  this.items = []\n}\n\nQueue.prototype.push = function(item) {\n  this.items.push(item)\n}\n\nQueue.prototype.shift = function() {\n  return this.items.shift()\n}\n\nQueue.prototype.isEmpty = function() {\n  return this.items.length === 0\n}\n\nQueue.prototype.size = function() {\n  return this.items.length\n}\n\nQueue.prototype.clear = function() {\n  this.items = []\n}\n```\n</details>\n\n```js\nGraph.prototype.bfs = function(v, callback) {\n  const obj = {}\n\n  for (let i of this.topPointArr) { // 初始化颜色\n    obj[i] = 'white'\n  }\n\n  const queue = new Queue()\n  obj[v] = 'gray'\n\n  queue.push(v)\n\n  let shiftQueue, neighbour\n\n  while (!queue.isEmpty()) {\n    shiftQueue = queue.shift()\n    neighbour = this.edgeMap.get(shiftQueue)\n\n    for (let i of neighbour) {\n      if (obj[i] === 'white') {\n        obj[i] = 'gray'\n        queue.push(i)\n      }\n    }\n\n    if (callback) {\n      callback(shiftQueue)\n    }\n  }\n}\n```\n\n检验完成的 bfs 函数, 进行如下调用,\n\n```js\ngraph.bfs('A', (shiftQueue) => {\n  console.log(shiftQueue)\n})\n```\n\n打印结果为 `A B C D E F G H I`, 符合预期。\n\n#### 广度优先遍历求最短路径\n\n在上述 bfs 函数实现的基础上, 加入两个变量分别存储距离以及最短路径上先前的点\n\n```js\nGraph.prototype.BFS = function(v) {\n  const obj = {}\n\n  const d = {}    // 新加入的变量存储距离\n  const prev = {} // 新加入的变量存储最短路径上先前的点\n\n  for (let i of this.topPointArr) { // 初始化颜色\n    obj[i] = 'white'\n    d[i] = 0\n    prev[i] = null\n  }\n\n  const queue = new Queue()\n  obj[v] = 'gray'\n\n  queue.push(v)\n\n  let shiftQueue, neighbour\n\n  while (!queue.isEmpty()) {\n    shiftQueue = queue.shift()\n    neighbour = this.edgeMap.get(shiftQueue)\n\n    for (let i of neighbour) {\n      if (obj[i] === 'white') {\n        obj[i] = 'gray'\n        queue.push(i)\n        d[i] = d[shiftQueue] + 1  // 这个地方卡主了~~~, 思路: 第二行的点距离第一行的点相差为 1, 第三行的点距离第二行的点相差为 1, 以此类推。\n        prev[i] = shiftQueue\n      }\n    }\n  }\n\n  return {\n    distance: d,\n    prev: prev\n  }\n}\n```\n\n调用 `graph.BFS('A')`, 得如下结果:\n\n```js\n{\n  distance: { A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2, I: 3 }\n  prev: { A: null, B: \"A\", C: \"A\", D: \"A\", E: \"B\", F: \"B\", G: \"C\", H: \"D\", I: \"E\" }\n}\n```\n\n接下来我们处理上述返回的 prev 将最短路径打印出来:\n\n```js\nGraph.prototype.logMinPath = function(v) {\n  const { distance, prev } = this.BFS(v)\n  let path = ''\n  const arr = []\n  Object.keys(distance).map(r => {\n    path = r\n    while (prev[r]) { // 终止条件为 prev 中值为 null 时\n      path = prev[r] + ' - ' + path\n      r = prev[r]\n    }\n    arr.push(path)\n  })\n  return arr.join('\\n')\n}\n```\n\n调用 `graph.logMinPath('A')`, 打印结果如下:\n\n```\nA\nA - B\nA - C\nA - D\nA - B - E\nA - B - F\nA - C - G\nA - D - H\nA - B - E - I\n```\n\n### 深度优先遍历(DFS)\n\n深度优先遍历用到了栈的思想。英文名为 `depth first search`(DFS), 其示意图如下:\n\n![](http://with.muyunyun.cn/b4fa9641c9f086cf2702f868b283dbee.jpg-200)\n\n代码实现如下:\n\n```js\nGraph.prototype.dfs = function (v, callback) {\n  const obj = {}\n\n  for (let i of this.topPointArr) { // 初始化颜色\n    obj[i] = 'white'\n  }\n\n  let neighbour\n  const that = this\n  const find = function (v, color, cb) {\n    color[v] = 'gred'\n    if (cb) {\n      cb(v)\n    }\n    neighbour = that.edgeMap.get(v)\n    for (let i of neighbour) {\n      if (color[i] === 'white') {\n        find(i, color, cb)\n      }\n    }\n  }\n\n  find(v, obj, callback)\n}\n```\n\n进行如下函数调用\n\n```js\ngraph.dfs('A', (shiftQueue) => {\n  console.log(shiftQueue)  // 打印结果: A B E I F C D G H\n})\n```\n"}}]);