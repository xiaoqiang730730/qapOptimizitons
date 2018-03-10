# qap包大小优化demo

先`npm i`所有的依赖

# 问题

[qap](http://open.taobao.com/docs/doc.htm?spm=a219a.7629140.0.0.Stgo7V&treeId=260&articleId=105545&docType=1)不支持多文件机制，也就是说每个页面只能有一个js文件，而我们的apiList是每个页面的api集合。对于单个页面而且，apiList就冗余了。

# 优化之前

`npm run before`

# 优化之后

`npm run build`

# 查看优化后效果

![](image/size.png)

业务代码没有变，在`src/lib/fetch`改变了一点。

index.html 和 index2.html 打开效果都一样。

这只是简单的demo，并不是真正能减少一半体积。

# 原理

利用babel插件**提前**将apiList里面的值处理到每个api请求里面。[具体查看这里](/transAPI)。