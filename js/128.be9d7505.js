(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{818:function(e,n){e.exports="```js\n// 这个文件为上下文文件, 可以理解为承上启下作用\n// module.exports = {\n//   get query() {\n//     return this.request.query    // 比如这个 this.request 为 ./request.js 中的内容\n//   },\n\n//   set body(content) {\n//     this.response.body = content // 比如这个 this.response.body 为 ./response.js 的内容\n//   },\n\n//   get body() {\n//     return this.response.body\n//   },\n// }\n\n// 当 context 中属性越来越多, 我们可以使用 __defineGetter__ 以及 __defineSetter__\n// 属性封装相应方法来减少重复劳动, 日后要增加属性只要在数组中填入相应字段就行。\n\nconst proto = {}\n\nfunction set(type, property) {\n  proto.__defineSetter__(property, function(val) {\n    this[type][property] = val  // 这里 this 指向 proto, 原因指向调用函数的对象\n  })\n}\n\nfunction get(type, property) {\n  proto.__defineGetter__(property, function() {\n    return this[type][property]\n  })\n}\n\nconst setRequest = []\nconst getRequest = ['query']\nconst setResponse = ['body', 'statusCode']\nconst getResponse = ['body', 'statusCode']\n\ngetRequest.forEach(r => {\n  get('request', r)\n})\n\nsetResponse.forEach(r => {\n  set('response', r)\n})\n\ngetResponse.forEach(r => {\n  get('response', r)\n})\n\nmodule.exports = proto\n```"}}]);