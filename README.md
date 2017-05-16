 
# 微信小程序学习路程
>### 推荐学习资源：
[网易云的免费小程序教学视频](http://study.163.com/course/courseMain.htm?courseId=1003283028)  
[微信官方教程](https://mp.weixin.qq.com/debug/wxadoc/dev/component/label.html)
>### 部分常用组件：
1. [view（视图容器）](https://mp.weixin.qq.com/debug/wxadoc/dev/component/view.html)
2. [scroll-view (可滚动视图区域)](https://mp.weixin.qq.com/debug/wxadoc/dev/component/scroll-view.html)
3. [text (文本)](https://mp.weixin.qq.com/debug/wxadoc/dev/component/text.html)
4. [navigator(页面链接)](https://mp.weixin.qq.com/debug/wxadoc/dev/component/navigator.html)
5. [form(表单)](https://mp.weixin.qq.com/debug/wxadoc/dev/component/form.html)
6. [input(输入框)](https://mp.weixin.qq.com/debug/wxadoc/dev/component/input.html)
7. [button(按钮)](https://mp.weixin.qq.com/debug/wxadoc/dev/component/button.html)

>### 部分常用API：
1. [wx.request(发起的 HTTPS 请求)](https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html#wxrequestobject)
2. [wx.showToast(显示消息提示框,配合wx.hideToast使用)](https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowtoastobject)
3. [wx.hideToast(隐藏消息提示框,配合wx.showToast)](https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxhidetoast)
4. [wx.login(调用接口获取登录凭证（code）进而换取用户登录态信息)](https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html#wxloginobject)
5. [wx.getUserInfo(获取用户信息，需要先调用 wx.login 接口)](https://mp.weixin.qq.com/debug/wxadoc/dev/api/open.html#wxgetuserinfoobject)


>### 个人在跟着教学视频开发中遇到的问题总结
1. wx.request()中header的'content-type': 'application/json'，因为没有选择好数据类型，发送请求出现错误，获取不到数据。
2. this.detail.value "获取当前input表单的value"。
3. onLoad:function(options){} "options为页面跳转带来的参数"。
4. 小程序布局用flex比较方便。
5. this.setData({data:'data'}) "用this.setData()来修改js文件中的pages里data的数据"。
6. app.json中的pages中的文件路径为页面要加载渲染的页面，window为小程序顶部的内容，大小，颜色等数据设置。
7. tabBar 存在时，至少存在2个。

>### 开发一个简单的微信小程序，读取豆瓣的api接口，实现显示，和搜索功能

1. 主页

![主页](/source/img1.jpg)

2. 搜索页

![搜索前](/source/img2.jpg)
![搜索后](/source/img3.jpg)
