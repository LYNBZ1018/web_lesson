# css_Basic

​     

## 1.1 样式定义方式

**行内样式表（inline style sheet）**
直接定义在标签的style属性中。

* 作用范围：仅对当前标签产生影响。

例如：

```html
<img src="/images/mountain.jpg" alt="" style="width: 300px; height: 200px;">
```

​    

**内部样式表（internal style sheet）**
定义在style标签中，通过选择器影响对应的标签。

* 作用范围：可以对同一个页面中的多个元素产生影响。

   

**外部样式表（external style sheet）**
定义在css样式文件中，通过选择器影响对应的标签。可以用link标签引入某些页面。

* 作用范围：可以对多个页面产生影响。

   

**注释**
注意不能使用//。
只有：

```css
/* 注释 */ 
```

​      

## 1.2 选择器

**标签选择器**
选择所有div标签：

```css
div {
    width: 200px;
    height: 200px;
    background-color: gray;
}
```

**ID选择器**
选择ID为rect-1的标签：

```css
#rect-1 {
    width: 200px;
    height: 200px;
    background-color: gray;
}
```

**类选择器**
选择所有rectangle类的标签：

```css
.rectangle {
    width: 200px;
    height: 200px;
    background-color: gray;
}
```

**伪类选择器**
伪类用于定义元素的特殊状态。

链接伪类选择器：

* :link：链接访问前的样式
* :visited：链接访问后的样式
* :hover：鼠标悬停时的样式
* :active：鼠标点击后长按时的样式
* :focus：聚焦后的样式

位置伪类选择器：

* :nth-child(n)：选择是其父标签第n个子元素的所有元素。

目标伪类选择器：

* :target：当url指向该元素时生效。

**复合选择器**
由两个及以上基础选择器组合而成的选择器。

* element1, element2：同时选择元素element1和元素element2。
* element.class：选则包含某类的element元素。
* element1 + element2：选择紧跟element1的element2元素。
* element1 element2：选择element1内的所有element2元素。
* element1 > element2：选择父标签是element1的所有element2元素。

**通配符选择器**

* \*：选择所有标签
* [attribute]：选择具有某个属性的所有标签
* [attribute=value]：选择attribute值为value的所有标签

**伪元素选择器**
将特定内容当做一个元素，选择这些元素的选择器被称为伪元素选择器。

* ::first-letter：选择第一个字母
* ::first-line：选择第一行
* ::selection：选择已被选中的内容
* ::after：可以在元素后插入内容
* ::before：可以在元素前插入内容

**样式渲染优先级**
* 权重大小，越具体的选择器权重越大：!important > 行内样式 > ID选择器 > 类与伪类选择器 > 标签选择器 > 通用选择器
* 权重相同时，后面的样式会覆盖前面的样式
* 继承自父元素的权重最低

​     

## 1.3 颜色

**预定义的颜色值**
black、white、red、green、blue、lightblue等。

**16进制表示法**
使用6位16进制数表示颜色，例如：#ADD8E6。
其中第1-2位表示红色，第3-4位表示绿色，第5-6位表示蓝色。

简写方式：#ABC，等价于#AABBCC。

**RGB表示法**
rgb(173, 216, 230)。

其中第一个数表示红色，第二个数表示绿色，第三个数表示蓝色。

**RGBA表示法**
rgba(173, 216, 230, 0.5)。

前三个数同上，第四个数表示透明度。

**取色方式**
网页里的颜色，可以在chrome的调试模式下获取
其他颜色可以使用QQ的截图软件：
直接按c键，可以复制rgb颜色值
按住shift再按c键，可以复制16进制颜色值