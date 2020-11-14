(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{833:function(n,p){n.exports='### 商家端模块职责\n\n* 创建店铺: [官网](https://www.pinduoduo.com/) -> 商家入驻\n  * 目前 BApp + 微信的入驻率有 45% 左右。\n* 模块职责\n  * `发货管理`: 处理日常发货、退换货等服务。\n    * 订单查询\n    * 发货中心\n      * 急速发货\n    * 物流工具\n    * 物流概况\n    * 包裹中心\n    * 电子面单\n    * 打单工具\n    * 订单开票\n      * 正品心智\n        * 与商家评分打通\n  * `售后管理`\n    * 售后工作台\n    * 工单管理\n    * 商家举证\n    * 小额打款\n    * 退货包运费\n    * 急速退款\n  * `商品管理`\n    * 发布新商品\n      * 店铺装修\n    * 商品列表\n    * 商品体验\n    * 商品素材\n    * 评价管理\n    * 商品工具\n    * 供货管理\n      * 批发供货\n        * 分销\n      * 快团团供货\n  * `采购管理`\n    * 批发采购\n    * 采购订单\n  * `店铺营销`\n    * 营销活动\n    * 竞价活动\n      * 取倒数第二位价格: 平台与商家的博弈, 商家提前知道竞价规则。这时商家会产生错觉, "我的价格是最低的, 我能盈利比我竞价的价格多一些的利润", 所以在竞价的时候会更接近成本的竞价。case: 多多果园。\n    * 平台招标\n    * 营销工具\n      * 转化提升\n        * 优惠券\n        * 限时限量\n        * 秒杀\n      * 收藏、满返(部分代替购物车)\n      * 粉丝运营\n        * 关注(直播等)\n          * 3 ~ 5 块一个粉丝\n        * 群聊(红包群)\n        * 店铺设砍价\n    * 短信营销\n    * 店铺装修\n    * 店铺页设计\n    * 多多直播\n  * `数据中心`\n  * `账户资金`\n  * `多多客服`\n  * `多多进宝`\n  * `推广中心`\n  * `店铺管理`\n  * `商家服务市场`\n  * `多多国际`\n    * 消费者不匹配 —> 海淘价廉物品\n    * 不敢买 —> 溯源系统、代报关\n    * 不了解品牌 —> 种草\n\n### 运营引流\n\n* 运营\n  * 视觉运营\n    * 店铺视觉\n      * 品牌型\n      * 价格型\n    * 店铺指标\n      * 店铺转换率\n      * 热销产品排行\n    * 首页关注指标\n      * 访问量、访客量\n      * 跳失率、出店率\n      * 首页到商品详情页、分类页点击率\n  * 口碑运营\n  * 客服运营\n* 引流推广\n  * 拼多多`流量来源`\n    * 社交裂变\n      * 拼单卡、砍价免费拿、多多果园等引流渠道\n    * 广告\n      * CPT(Cost Per Time, 按时长付费)、CPM(Cost Per Mile, 每千人成本)、CPC(按单次点击扣费)、明星店铺推广、数据银行推广、品类关键词库、短信营销等引流渠道\n    * App 展示\n      * 首页开屏、首页 Banner、类目类 Banner、个人中心 Banner、新人专区、App 推送消息等引流渠道\n    * 搜索\n    * 活动\n      * 限时秒杀、品牌清仓、名片折扣、爱逛街、食品超市、时尚穿搭、新品推荐、微信公众号推文、微信公众消息和领券中心等引流渠道\n    * 其它渠道\n      * 多多进宝、微信群等\n  * 站内免费引流\n    * 运用标签精准引流\n      * 千人前面推荐算法 => `人群标签匹配商品标签`\n        * 人群标签\n          * 用户行为\n          * 个人属性\n          * 用户喜好\n        * 商品标签\n          * 类目标签\n          * 价格标签\n          * 属性标签\n  * 站外免费引流\n  * 付费引流\n    * ![](http://with.muyunyun.cn/77b7424d86a601b6c2cdbe02884be330.jpg)\n    * 搜索推广\n    * 场景展示推广\n      * 排名公式: 综合排名 = 商品质量分 * 广告单击出价\n    * 其他推广工具\n  * 活动引流\n    * 活动报名\n    * 营销活动\n      * 品牌特卖、电器城、爱逛街、9 块 9 特卖、限时秒杀\n    * 店铺活动\n      * 限量促销、拼单返现、限时免单\n    * 竞价活动\n      * 竞价活动\n      * 品质招标\n    * 社交活动\n      * 助力享免单\n      * 多多果园\n  * 推手引流\n    * 多多进宝\n      * 综合流量 GMV = 多多进宝 + 自然搜索 + 场景推广\n\n### 产品方法论\n\n* 职能范围\n  * 终端: BAPP、Windows 客户端、MMS 工作台、Mac 客户端、商家版小程序、多多公众号、商家服务号\n  * xx\n* 目标\n  * DAU\n  * 动销商家数\n    * 动销率: 店铺的动销率其实就是店铺有销售的商品的数量占比全店铺的商品数量比。\n* 主线\n  * 以小程序为基石的私域流量\n    * 提升 DAU\n  * 商家成长\n    * 通过商家成长, 中小商家成长为大商家\n  * 供应链\n    * 武汉、南昌'}}]);