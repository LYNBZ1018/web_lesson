# React

### 1配置环境

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

   

### ES6语法

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

