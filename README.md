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
if条件语句我们用 **<% %>**  
更多语法 ……

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

# html 模板

loader有多少，webpack就能处理多少文件。处理图片，我们用 **file-loader**。 处理html文件，我们用 **html-loader**， 处理 ejs 文件，我们用 **ejs-loader**。有多少文件要处理，我们就有多少loader。

webpack loader 列表： [http://webpack.github.io/docs/list-of-loaders.html](http://webpack.github.io/docs/list-of-loaders.html)

当然，你也可以自己编写loader。

回归正题，使用html模板和使用ejs模板类似。只是处理html模板用到的loader是**html-loader**。

一个html模板，就是一堆html代码。模板在使用中，只是以字符串的形式存在。嵌入dom中需要调用对应api。比如 ***xxx.innerHTML = 模板内容**

下载loader，编写配置，开始打包。

# 图片打包

图片是文件的一种。最基础的处理图片，我们用 **file-loader**。在html，js，css中使用img，都可以被编译，如果是在模板中，则不能。这个时候，需要特殊的处理。

更多 file-loader，请访问：[https://github.com/webpack-contrib/file-loader](https://github.com/webpack-contrib/file-loader)

**url-loader** 处理图片更好。可以自由设置图片的一个文件量最小值，小于这个值的时候，使用地方会转换成图片的base64。虽然这样转换可以减少http的请求，如果相同转换成base64的图片过多，则会增加文件量的大小。

更多 url-loader, 请访问：[https://github.com/webpack-contrib/url-loader](https://github.com/webpack-contrib/url-loader)

# css 压缩

css 压缩，请使用 **optimize-css-assets-webpack-plugin** 插件。

``` javascript
npm install --save-dev optimize-css-assets-webpack-plugin
```

配置。

```
  //压缩css代码
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: { discardComments: {removeAll: true } },
			canPrint: true
		})
```
