## 1.1 JS的调用方式与执行顺序

**使用方式**

HTML页面中的任意位置加上\<script type="module">\</script>标签即可。

常见使用方式有以下几种：

* 直接在\<script type="module">\</script>标签内写JS代码。
  * 一定要写 type="module"
  * type="module" 可以严格限制变量的作用域 写的工程比较大时不会变量的冲突

* 直接引入文件：\<script type="module" src="/static/js/index.js">\</script>。

  * 可以写到head里 可以写到任何位置

* 将所需的代码通过import关键字引入到当前作用域。

  

例如：

/static/js/index.js文件中的内容为：

```js
let name = "acwing";

function print() {
    console.log("Hello World!");
}

export {  // 把name 和 print 暴露出去
    name,
    print
}
```

\<script type="module">\</script>中的内容为：

```js
<script type="module">
    import { name, print } from "/static/js/index.js";  // 引入name 和 print
	import {print_x } from "static/js/index1.js";  // 可以引入多个 不同文件的函数和变量
    console.log(name);
    print();
</script>
```

**执行顺序**

类似于HTML与CSS，按从上到下的顺序执行；

事件驱动执行；



**HTML, CSS, JavaScript三者之间的关系**

1. CSS控制HTML
2. JavaScript控制HTML与CSS
3. 为了方便开发与维护，尽量按照上述顺序写代码。例如：不要在HTML中调用JavaScript中的函数。

​     

## 1.2 变量与运算符

**let 与 const**

用来声明变量，作用范围为当前作用域。

* let用来定义变量；
* const用来定义常量；

例如：
```js
let s = "acwing", x = 5;

let d = {
    name: "yxc",
    age: 18,
}

const n = 100;
```

**变量类型**

* number：数值变量，例如1, 2.5

* string：字符串，例如"acwing", 'yxc'，单引号与双引号均可。字符串中的每个字符为只读类型。

* boolean：布尔值，例如true, false

* object：对象，类似于C++中的指针，例如[1, 2, 3]，let d = {name: "yxc", age: 18}，null

  * d['name']   也可以用 d.name 这种写法一旦固定代码就不能修改了

  * ```js
    //比如
    let d = {
        name = "lyn",
        age = 20;
    }
    
    let key = "name";
    console.log(d[key]);
    key = "age";
    console.log(d[key]);
    ```

  * ```js
    let d = {
        name = "lyn",
        age = 20;
    }
    d['school'] = 'xju';  // 就增加了一对键值
    delete d.age;  // 删除了一个
    ```

  * ```js
    for (let key in d) {
        console.log(d[key]);  // 遍历字典
    }
    ```

  * 

* undefined：未定义的变量

* 
类似于Python，JavaScript中的变量类型可以动态变化。

**运算符**

与C++、Python、Java类似，不同点：

* **表示乘方
* **等于与不等于用===和!==**

    ```js
// 整除
console.log(parseInt(5 / 3));
// 乘方
console.log(3 ** 3);
    ```



## 1.3 入与输出

**输入**

* 从HTML与用户的交互中输入信息，例如通过input、textarea等标签获取用户的键盘输入，通过click、hover等事件获取用户的鼠标输入。
* 通过Ajax与WebSocket从服务器端获取输入
* 标准输入，参考AcWing 1. A + B
  

**输出**

* 调试用console.log，会将信息输出到浏览器控制台
* 改变当前页面的HTML与CSS
* 通过Ajax与WebSocket将结果返回到服务器

**格式化字符串**

* 字符串中填入数值：
```js
let name = 'yxc', age = 18;
let s = `My name is ${name}, I'm ${age} years old.`;
```
* 定义多行字符串：
```js
let s = 
`<div>
    <h2>标题</h2>
    <p>段落</p>
/div>`
```
* 保留两位小数如何输出
```js
let x = 1.234567;
let s = `${x.toFixed(2)}`;
```



输入  从textarea获取点击后再pre输出

```js 
let input = document.querySelector("textarea");
let run = document.querySelector("button");
let output = document.querySelector("pre");

function main() {
    run.addEventListener("click", function () {
        let s = input.value;
        output.innerHTML = s;
    })
}

export {
    main,
}
```



**练习**

1. 输出Hello World。

2. 输入两个数，计算两个数的和。

3. 输入一个小数，返回向零取整之后的结果。

4. 输入a, b, c，输出 (a + b) * c 的值。

5. 求反三位数。

   ```js
   function main() {
       run.addEventListener("click", function () {
           let x = parseInt(input.value);
           let a = x % 10;
           x = parseInt(x / 10);
           let b = x % 10;
           x = parseInt(x / 10);
           let c = x;
   
           let s = `${a}${b}${c}`
           output.innerHTML = s;
       })
   }
   ```

6. 输出如下的菱形。

```markdown
  *
 ***
*****
 ***
  *
```

   ```js
function main() {
    run.addEventListener("click", function () {
        let s = "";
        s += "  *\n";
        s += " ***\n";
        s += "*****\n";
        s += " ***\n";
        s += "  *\n";

        output.innerHTML = s;
    })
   ```



## 1.4 判断语句

JavaScript中的if-else语句与C++、Python、Java中类似。

例如：

```js
let score = 90;
if (score >= 85) {
    console.log("A");
} else if (score >= 70) {
    console.log("B");
} else if (score >= 60) {
    console.log("C");
} else {
    console.log("D");
}
```

JavaScript中的逻辑运算符也与C++、Java中类似：

* &&表示与
* ||表示或
* !表示非

**练习**

1. 输入一个年份，如果是闰年输出yes，否则输出no。
2. 输入三个数，输出三个数中的最大值。

​    

## 1.5 循环语句

JavaScript中的循环语句与C++中类似，也包含for、while、do while循环。

**for循环**

```js
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

枚举对象或数组时可以使用：

* for-in循环，可以枚举数组中的下标，以及对象中的key
* for-of循环，可以枚举数组中的值，以及对象中的value

**while循环**

```js
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

**do while循环**

do while语句与while语句非常相似。唯一的区别是，do while语句限制性循环体后检查条件。不管条件的值如何，我们都要至少执行一次循环。
```js
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
```

**练习**

1. 求1~100中所有数的立方和。
2. 求斐波那契数列的第n项。f(1) = 1, f(2) = 1, f(3) = 2, f(n) = f(n-1) + f(n-2)。
3. 打印1~100中的所有质数。

