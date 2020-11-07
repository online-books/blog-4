(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{707:function(n,e){n.exports="### 字典\n\n类似于集合, 字典也是一种`无重复元素`, `无顺序`的数据结构。\n\n区别在于在集合中, 我们以 `[值,  值]` 的形式存储; 在字典中, 我们以 `[键, 值]` 的形式存储; 集合的知识点可以阅读 [集合](https://github.com/MuYunyun/blog/blob/master/BasicSkill/algorithm/集合.md)\n\nES6 引入的 Map 就是字典的数据类型。\n\n#### 简易版 Map 实现\n\n我们来动手实现一个简易版的 Map, 它拥有的 api 如下:\n\n```js\nfunction Map() {\n  this.items = {}\n  this.size = 0\n}\n\nMap.prototype.has = function(key) {\n  for (let i in this.items) {\n    if (this.items.hasOwnProperty(i)) {\n      return true\n    }\n  }\n  return false\n}\n\nMap.prototype.delete = function(key) {\n  if (this.has(key)) {\n    delete(this.items[key])\n    this.size--\n    return true\n  }\n  return false\n}\n\nMap.prototype.set = function(key, value) {\n  this.items[key] = value // 这里是不严谨的实现\n  this.size++\n}\n\nMap.prototype.get = function(key) {\n  return this.items[key]\n}\n\nMap.prototype.clear = function() {\n  this.items = {}\n  this.size = 0\n}\n\nMap.prototype.values = function() {\n  const arr = []\n  Object.keys(this.items).forEach(r => {\n    arr.push(this.items[r])\n  })\n  return arr\n}\n```\n\n### 创建一个 Map 对象\n\n```js\n// 方式一\nconst map1 = new Map()\nmap.set('a', 1)\n\n// 方式二\nconst map2 = new Map([['a', 1]])\n```\n\n### Map 和 WeakMap 的区别\n\nMap 和 WeakMap 相差 Weak 这个单词, 本质知识点是对对象的直接引用(WeakMap)。它这个点造成的差异整理如下:\n\n* Map 的 key 范围更广, WeakMap 的 key 只能为对象;\n* Map 的 key 可以枚举, WeakMap 的 key 不能枚举;\n* 垃圾回收相关, 见如下例子;\n\n```js\nvar map = new Map();\nvar weakmap = new WeakMap();\n\n(function(){\n  var a = {x: 12}\n  var b = {y: 12}\n\n  map.set(a, 1)\n  weakmap.set(b, 2)\n})()\n```\n\n解析: 在这个例子中, IIFE 执行完后, 垃圾回收机制会回收常量 a, b。WeakMap 可以类比成直接对 b 的引用, Map 里可以类比成在其内部对 a 作了层拷贝。所以 map 依然保持着相应的 key 值的对象, 而 weakmap 的 key 值的对象以被回收(这步认为是垃圾回收机制做的)。它们的差异如下图所示:\n\n```js\n// map\nMap(1) {{…} => 1}\n  size: (...)\n  __proto__: Map\n  [[Entries]]: Array(1)\n    0: {Object => 1}\n      key: {x: 12}\n      value: 1\n\n// weakmap\nWeakMap {}\n  __proto__: WeakMap\n  [[Entries]]: Array(0)\n    length: 0\n```"}}]);