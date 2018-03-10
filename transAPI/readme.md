# 利用babel插件转化apiList

将
```jsx
request({
    api: 'A0'
}, (result)=> {
    console.log(result);
})
```

转成
```jsx
request({
    api: 'A0',
    apio: {
        server: 'rc',
        url: 'https://mwdsp.superboss.cc/api/a0'
    }
}, result => {
    console.log(result);
});
```

就可以不需要引入apiList了。

# 查看效果

`node run.js`

`out.js`是`example.js`输出的结果。