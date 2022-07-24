# React

### 1 配置环境

[React官网](https://zh-hans.reactjs.org/) 

**安装** `Git Bash` 

[安装地址](https://gitforwindows.org/)

**安装** `Nodejs` 

[安装地址](https://nodejs.org/en/)

**安装** `create-react-app`

打开`Git Bash`，执行：

```bash
npm i -g create-react-app
```


安装`VSCode`的插件

* Simple React Snippets

* Prettier - Code formatter



创建`React App`

在目标目录下打开`Git Bash`，在终端中执行：

```bash
create-react-app react-app  # 可以替换为其他app名称

cd react-app
npm start  # 启动应用
```

**JSX**

`React`中的一种语言，会被`Babel`编译成标准JavaScript。

   

### 2 ES6语法

**使用`bind()`函数绑定`this`取值**

在JavaScript中，函数里的`this`指向的是执行时的调用者，而非定义时所在的对象。

例如：

```js
const person = {
  name: "yxc",
  talk: function() {
    console.log(this);
  }
}

person.talk();

const talk = person.talk;
talk();
```


运行结果：

```js
{name: 'yxc', talk: ƒ}  // 第一个 使用者是对象person
Window  // 第二个 使用者是talk
```

`bind()`函数，可以绑定`this`的取值。例如：

```js
const talk = person.talk.bind(person);  // 绑定this的取值为person
```


**箭头函数的简写方式**

```js
const f = (x) => {
  return x * x;
};
```

可以简写为：

```js
const f = x => x * x;
```



**箭头函数不重新绑定`this`的取值**
例如：

```js
const person = {
  talk: function() {
    setTimeout(function() {
      console.log(this);
    }, 1000);
  }
};

person.talk();  // 输出Window
```

```js
const person = {
    talk: function() {
        let outer = this;
        setTimeout(function() {
            console.log(outer);
        }, 1000);
    }
};

const person = {
  talk: function() {
    setTimeout(() => {  // 箭头函数不会绑定this
      console.log(this);
    }, 1000);
  }
};

person.talk();  // 输出 {talk: f}
```

**对象的解构**

例如：

```js
const person = {
  name: "yxc",
  age: 18,
  height: 180,
};

const {name : nm, age} = person;  // nm是name的别名
```

**数组和对象的展开**

例如：

```js
let a = [1, 2, 3];
let b = [...a];  // b是a的复制 ...a 是将数组展开
let c = [...a, 4, 5, 6];
```

```js
const a = {name: "yxc"};
const b = {age: 18};
const c = {...a, ...b, height: 180};  // 对象的展开
```

**Named 与 Default exports**

* Named Export：可以export多个，import的时候需要加大括号，名称需要匹配
* Default Export：最多export一个，import的时候不需要加大括号，可以直接定义别名

```js
export default class Player {  // 只能有一个export default
    
}
export id;

import Player, {id} from '';
```



### 3 Components

**1.创建项目**

创建项目`box-app`：

```js
create-react-app box-app
cd box-app
npm start
```

安装`bootstrap`库：

```bash
npm i bootstrap
```

`bootstrap`的引入方式：

```bash
import 'bootstrap/dist/css/bootstrap.css';
```

**2.创建Component**

**创建按钮**

当子节点数量大于1时，可以用`<div>`或`<React.Fragment>`将其括起来。

```jsx
render() { 
        return (
            <React.Fragment>
                <h1>Hello World!</h1>
                <button>Left</button>
                <button>Right</button>
            </React.Fragment>
        );
```

**内嵌表达式**

JSX中使用`{}`嵌入表达式。

```jsx
 toString() {
        const { x } = this.state;
        return `x: ${x}`;
    }

<h1>{this.toString()}</h1>
```



**设置属性**

* `class -> className`
* CSS属性：`background-color -> backgroundColor`，其它属性类似
  * 在css中有 - 这个标签都用驼峰命名法替换

**数据驱动改变Style**

```jsx
getStyles() {
        let style = {
            width: "208px",
            height: "41px",
            marginTop: "10px",
            marginLeft: "8px",
            marginBottom: "0px",
            backgroundColor: "lightblue",
    
            color: "red",
            textAlign: "center",
        }

        if (this.state.x === 1) {
            style.backgroundColor = "red";
        } else {
            style.backgroundColor = "lightblue";
        }

        return style;
    }
```

 **渲染列表**

* 使用map函数
* 每个元素需要具有唯一的key属性，用来帮助React快速找到被修改的DOM元素。

```jsx
state = {
    colors: ['red', 'green', 'yellow'],
}

{
    this.state.colors.map(color => (
    	<div key={color}>{color}</div>
    ))
}
```



**Conditional Rendering**

利用逻辑表达式的短路原则。

* 与表达式中 `expr1 && expr2`，当`expr1`为假时返回`expr1`的值，否则返回`expr2`的值
* 或表达式中 `expr1 || expr2`，当`expr1`为真时返回`expr1`的值，否则返回`expr2`的值

**绑定事件**

* 注意妥善处理好绑定事件函数的`this`
  * **用 => 函数不会重新绑定this** (推荐)
  * 或者用bind重新绑定this

```jsx
handleClickLeft = () => {  // 用箭头函数
    console.log("left", this);
}

handleClickRight() {
    console.log("right", this);
}

 <button onClick={this.handleClickLeft} className='btn btn-primary m-2'>Left</button>
                <button onClick={this.handleClickRight.bind(this)} className='btn btn-success m-2'>Right</button>  // 用bind重新绑定
```



**修改state**

* 需要使用`this.setState()`函数
* 每次调用`this.setState()`函数后，会重新调用`this.render()`函数，用来修改虚拟DOM树。React只会修改不同步的实际DOM树节点。

```jsx
handleClickLeft = () => {
    this.setState({
        x: this.state.x - 1,
    })
}
```



**给事件函数添加参数**

绑定的函数不能传参数

可以写一个临时函数没有参数，调用事件函数传递参数

```jsx
handleClickLeft = (step) => {
    this.setState({
        x: this.state.x - step * this.state.db,
    })
}

handleClickLeftTmp = () => {
     this.handleClickLeft(10);  // 传入参数
 }
 
<button onClick={this.handleClickLeftTmp} className='btn btn-primary m-2'>Left</button>

// 用箭头函数可以传参数
<button onClick={() => this.handleClickLeft(10)} className='btn btn-primary m-2'>Left</button>
```



   

### 4 组合Components

**1.4.1 创建`Boxes`组件**

`Boxes`组件中包含一系列`Box`组件。

```jsx
import React, { Component } from 'react';
import Box from './box';

class Boxes extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Box />
                <Box />
                <Box />
            </React.Fragment>
        );
    }
}
 
export default Boxes;
```

```jsx
class Boxes extends Component {
    state = { 
        boxes : [
            {id: 1, x: 0, db: 1},
            {id: 2, x: 0, db: 1},
            {id: 3, x: 0, db: 1},
            {id: 4, x: 0, db: 1},
        ]
     } 
    render() { 
        return (
            <React.Fragment>
               {this.state.boxes.map(box => (
                   <Box key={box.id} />
               ))}
            </React.Fragment>
        );
    }
}
```



**1.4.2 从上往下传递数据**

通过`this.props`属性可以从上到下传递数据。

father -> son

```jsx
console.log(this.props);
```

**1.4.3 传递子节点**

通过`this.props.children`属性传递子节点

```jsx
{this.props.children[0]}
```

**1.4.4 从下往上调用函数**

注意：每个组件的`this.state`只能在组件内部修改，不能在其他组件内修改。
```jsx
handleDelete = (boxId) => {
    const boxes = this.state.boxes.filter(b => b.id !== boxId);
    this.setState(
        {boxes: boxes},
    )
}
    
{this.state.boxes.map(box => (
    <Box 
        key={box.id}
        x={box.x}
        id={box.id}
        onDelete={this.handleDelete}
        > 
        <h1>Box</h1>
        <p>#{box.id}</p>
    </Box>
))}

<button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-danger m-2'>Delete</button>
```



**1.4.5 每个维护的数据仅能保存在一个this.state中**

不要直接修改`this.state`的值，因为`setState`函数可能会将修改覆盖掉。

```jsx
render() { 
        return (
            <React.Fragment>
                <button onClick={() => this.handleReset()} className='btn btn-info m-2'>Reset</button>
               {this.state.boxes.map(box => (
                   <Box 
                    key={box.id}
                    box={box}
                    onLeft={() => this.handleClickLeft(box)}
                    onRight={() => this.handleClickRight(box)}
                    onDouble={() => this.handleDuble(box)}
                    onDelete={this.handleDelete}
                   > 
                        <h1>Box</h1>
                        <p>#{box.id}</p>
                   </Box>
               ))}
            </React.Fragment>
        );
    }
```



**1.4.6 创建App组件**

包含：

* 导航栏组件
* `Boxes`组件

注意：

* 要将多个组件共用的数据存放到最近公共祖先的`this.state`中。

```jsx
app 里有 boxes 和 navbar
navbar要求boxes有多少个box组件
(目前)把boxes中的属性和操作放到和navbar最近的公共祖先中
```

```jsx
render() { 
        return (
            <React.Fragment>
                <Navbar boxesCount={this.state.boxes.filter(b => b.x !== 0).length} />
                <div className="container">
                    <Boxes
                        boxes={this.state.boxes}
                        onClickLeft={this.handleClickLeft}
                        onClickRight={this.handleClickRight}
                        onDelete={this.handleDelete}
                        onDouble={this.handleDuble}
                        onReset={this.handleReset}
                    >

                    </Boxes>
                </div>
            </React.Fragment>
        );
    }
```



**1.4.7 无状态函数组件**

* 当组件中没有用到`this.state`时，可以简写为无状态的函数组件。
* 函数的传入参数为`props`对象

快捷键**sfc**

```jsx
import React, { Component, createFactory } from 'react';

const Navbar = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Navbar
                        Boxes Count:{props.boxesCount}
                    </a>
                </div>
            </nav>
        </React.Fragment>
    );
}
 
export default Navbar;
```



**1.4.8 组件的生命周期**

* `Mount`周期，执行顺序：`constructor() -> render() -> componentDidMount()`
* `Update`周期，执行顺序：`render() -> componentDidUpdate()`
* `Unmount`周期，执行顺序：`componentWillUnmount()`

  

### 5 路由

**Web分类**

* 静态页面：页面里的数据是写死的
* 动态页面：页面里的数据是动态填充的
  * 后端渲染：数据在后端填充
  * 前端渲染：数据在前端填充

**安装环境**

* VSCODE安装插件：`Auto Import - ES6, TS, JSX, TSX`
* 安装`Route`组件：`npm i react-router-dom`

**Route组件介绍**

* `BrowserRouter`：所有需要路由的组件，都要包裹在`BrowserRouter`组件内
* `Link`：跳转到某个链接，`to`属性表示跳转到的链接
* `Routes`：类似于C++中的`switch`，匹配第一个路径
* `Route`：路由，`path`属性表示路径，`element`属性表示路由到的内容



**URL中传递参数**

解析URL：

```JS
<Route path="/linux/:chapter_id/:section_id/" element={<Linux />} />
```

获取参数，类组件写法：

```js
import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class Linux extends Component {
    state = {  } 
    render() {
        console.log(this.props.params);
        return <h1>Linux</h1>;
    }
}

export default (props) => (
    <Linux
        {...props}
        params={useParams()}
    />
)
```

函数组件写法：

```js
import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

const Linux = () => {
    console.log(useParams());
    return (<h1>Linux</h1>);
}

export default Linux;
```

**Search Params传递参数**

类组件写法：

```js
import React, { Component } from 'react';
import { useSearchParams } from 'react-router-dom';

class Django extends Component {
    state = {
        searchParams: this.props.params[0],  // 获取某个参数
        setSearchParams: this.props.params[1],  // 设置链接中的参数，然后重新渲染当前页面
    }

    handleClick = () => {
        this.state.setSearchParams({
            name: "abc",
            age: 20,
        })
    }
    
    render() {
        console.log(this.state.searchParams.get('age'));
        return <h1 onClick={this.handleClick}>Django</h1>;
    }
}

export default (props) => (
    <Django
        {...props}
        params={useSearchParams()}
    />
);
```

函数组件写法：

```js
import React, { Component } from 'react';
import { useSearchParams } from 'react-router-dom';

const Django = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('age'));
    return (<h1>Django</h1>);
}

export default Django;
```

**重定向**

使用`Navigate`组件可以重定向。

```js
<Route path="*" element={ <Navigate replace to="/404" /> } />
```

**嵌套路由**

```js
<Route path="/web" element={<Web />}>
    <Route index path="a" element={<h1>a</h1>} />
    <Route index path="b" element={<h1>b</h1>} />
    <Route index path="c" element={<h1>c</h1>} />
</Route>
```

注意：需要在父组件中添加`<Outlet />`组件，用来填充子组件的内容。



### 6 Redux

redux将所有数据存储到树中，且树是唯一的。

**Redux基本概念**

* `store`：存储树结构。
* `state`：维护的数据，一般维护成树的结构。
* `reducer`：对`state`进行更新的函数，每个`state`绑定一个`reducer`。传入两个参数：当前`state`和`action`，返回新`state`。
* `action`：一个普通对象，存储`reducer`的传入参数，一般描述对state的更新类型。
* `dispatch`：传入一个参数`action`，对整棵`state`树操作一遍。

**React-Redux基本概念**

* `Provider`组件：用来包裹整个项目，其store属性用来存储redux的store对象。
* `connect(mapStateToProps, mapDispatchToProps)`函数：用来将store与组件关联起来。
* `mapStateToProps`：每次store中的状态更新后调用一次，用来更新组件中的值。
* `mapDispatchToProps`：组件创建时调用一次，用来将store的dispatch函数传入组件。

**安装**

* `npm i redux react-redux @reduxjs/toolkit`



### 7 实战项目——计算机

**API**——login

登录

`https://app165.acapp.acwing.com.cn/calculator/login/`

* 输入参数：`username`、password

* 输出参数：`result`
  * `result = "success"`：表示登录成功
  * `result = "用户名或密码不正确"`：表示错误信息

**API——logout**

退出

`https://app165.acapp.acwing.com.cn/calculator/logout/`

* 输入参数：无
* 输出参数：result
  * result = "success"：表示退出成功

**API——register**

注册

`https://app165.acapp.acwing.com.cn/calculator/register/`

* 输入参数：`username`、`password`、`password_confirm`

* 输出参数：`result`
  * `result = "success"`：表示注册成功
  * `result = "用户名和密码不能为空"`：表示错误信息
  * `result = "两个密码不一致"`：表示错误信息
  * `result = "用户名已存在"`：表示错误信息

**API——get_status**

查询登录状态，如果已登录，则返回用户名

`https://app165.acapp.acwing.com.cn/calculator/get_status/`

* 输入参数：无
* 输出参数：`result`、`username`
  * `result = "login"`，此时有返回值`useranme`，表示已登录的用户名
  * `result = "logout"`，此时`username`不存在，表示未登录

