# 使用

``` javascript

git clone xxx

npm install

npm test
```

# 更新（针对 webpack_s1）

1. 模板的使用。（ejs模板和html模板）
2. 针对图片打包。
2. css压缩。

# ejs模板

编写模板：

``` javascript
// 我们将模板文件命名为 test.tpl
<h2><%=  username %></h2>
<% for(var key in usergames){ %>
  <span class="u-games"><%= usergames[key] %></span>
<% } %>
```
> 赋值我们用 **<%=  %>**
> if条件语句我们用 **<% %>**
> 更多语法 ……

使用模板：

``` javascript
// test.js
import content from './test.tpl'

let htmlRaw = content({
          username: 'vini123',
          usergames:['王者荣耀', '热血江湖', '跑跑卡丁车']
      })
      
export {htmlRaw}

```

因为使用了 ejs模板，我们需要 **ejs-loader**，请安装loader。
``` javascript
npm install --save-dev ejs-loader
```

安装成功后，需要在 **webpack.config.js** 中添加一条配置，如下：

``` javascript
{
  test:/\.tpl$/,
  use:{
    loader:'ejs-loader'
  }
}
```

一切就绪后（当然上边只是设置，你得在代码中使用模板），然后开始打包。
```
npm test
```


