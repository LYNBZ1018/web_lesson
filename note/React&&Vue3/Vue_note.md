### 1 配置环境

[Vue官网](https://vuejs.org/)

**终端**

`Linux`和`Mac`上可以用自带的终端。

`Windows`上推荐用`powershell`或者`cmd`。`Git Bash`有些指令不兼容。

**安装`Nodejs`**

[安装地址](https://nodejs.org/en/)

**安装@vue/cli**

打开`Git Bash`，执行：

```bash
npm i -g @vue/cli
```



如果执行后面的操作有bug，可能是最新版有问题，可以尝试安装早期版本，比如：

```bash
npm i -g @vue/cli@4
```



**启动vue自带的图形化项目管理界面**

```bash
vue ui
```



常见问题1：Windows上运行`vue`，提示无法加载文件，表示用户权限不足。
解决方案：用管理员身份打开终端，输入`set-ExecutionPolicy RemoteSigned`，然后输入`y`



### 2 基本概念

**script部分**

`export default`对象的属性：

* `name`：组件的名称
* `components`：存储`<template>`中用到的所有组件
* `props`：存储父组件传递给子组件的数据
* `watch()`：当某个数据发生变化时触发
* `computed`：动态计算某个数据
* `setup(props, context)`：初始化变量、函数
  * `ref`定义变量，可以用`.value`属性重新赋值
  * `reactive`定义对象，不可重新赋值
  * `props`存储父组件传递过来的数据
  * `context.emit()`：触发父组件绑定的函数

*****

**template部分**

* `<slot></slot>`：存放父组件传过来的`children`。
* `v-on:click`或`@click`属性：绑定事件
* `v-if`、`v-else`、`v-else-if`属性：判断
* `v-for`属性：循环，:`key`循环的每个元素需要有唯一的`key`
* `v-bind:`或`:`：绑定属性

*****

**style部分**

* `<style>`标签添加`scope`属性后，不同组件间的css不会相互影响。

*****

**第三方组件**

* `view-router`包：实现路由功能。
* `vuex`：存储全局状态，全局唯一。
  * `state`: 存储所有数据，可以用`modules`属性划分成若干模块
  * `getters`：根据`state`中的值计算新的值
  * `mutations`：所有对state的修改操作都需要定义在这里，不支持异步，可以通过`$store.commit()`触发
  * `actions`：定义对state的复杂修改操作，支持异步，可以通过`$store.dispatch()`触发。注意不能直接修改`state`，只能通过`mutations`修改`state`。
  * `modules`：定义`state`的子模块

   

### 3 项目API

**1.获取Json Web Token（JWT）**

* 地址：https://app165.acapp.acwing.com.cn/api/token/
* 方法：`POST`
* 是否验证jwt：否
* 输入参数：
  * `username:` 用户名
  * `password`: 密码
* 返回结果：
  * `access`: 访问令牌，有效期5分钟
  * `refresh`: 刷新令牌，有效期14天

**2.刷新JWT令牌**

* 地址：https://app165.acapp.acwing.com.cn/api/token/refresh/
* 方法：`POST`
* 是否验证jwt：否
* 输入参数：
  * `refresh`: 刷新令牌
* 返回结果：
  * `access`: 访问令牌，有效期5分钟

**3.获取用户列表**

* 地址：https://app165.acapp.acwing.com.cn/myspace/userlist/
* 方法：`GET`
* 是否验证jwt：否
* 输入参数：无
* 返回结果：返回10个用户的信息

**4.获取某个用户的信息**

* 地址：https://app165.acapp.acwing.com.cn/myspace/getinfo/
* 方法：`GET`
* 是否验证jwt：是
* 输入参数：
  * `user_id`：用户的ID
* 返回结果：该用户的信息

**5.获取某个用户的所有帖子**

* 地址：https://app165.acapp.acwing.com.cn/myspace/post/
* 方法：`GET`
* 是否验证jwt：是
* 输入参数：
  * `user_id`：用户的ID
* 返回结果：该用户的所有帖子

**6.创建一个帖子**

* 地址：https://app165.acapp.acwing.com.cn/myspace/post/
* 方法：`POST`
* 是否验证jwt：是
* 输入参数：
  * `content`：帖子的内容
* 返回结果：`result: success`

**7.删除一个帖子**

* 地址：https://app165.acapp.acwing.com.cn/myspace/post/
* 方法：`DELETE`
* 是否验证jwt：是
* 输入参数：
  * `post_id`：被删除帖子的ID
* 返回结果：`result: success`

**8.更改关注状态**

如果未关注，则关注；如果已关注，则取消关注。

* 地址：https://app165.acapp.acwing.com.cn/myspace/follow/
* 方法：`POST`
* 是否验证jwt：是
* 输入参数：
  * `target_id`: 被关注的用户ID
* 返回结果：`result: success`

**9.注册账号**

* 地址：https://app165.acapp.acwing.com.cn/myspace/user/
* 方法：`POST`
* 是否验证jwt：否

* 输入参数：
  * `username`: 用户名
  * `password`：密码
  * `password_confirm`：确认密码

* 返回结果：
  * `result: success`
  * `result: 用户名和密码不能为空`
  * `result: 两个密码不一致`
  * `result: 用户名已存在`