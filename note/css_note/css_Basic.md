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


```css
<style type="text/css">
        img {
            /* 按照标签进行修改 标签选择器*/
            width: 300px;
            border-radius: 10%;
        }

        p {
            width: 100px;
            height: 100px;
            background-color: lightblue;
        }

        .green-p {
            font-size: 30px;
            background-color: lightgreen;
        }

        .big {
            width: 80px;
            height: 80px;
        }
    </style>
```



**外部样式表（external style sheet）**

定义在css样式文件中，通过选择器影响对应的标签。可以用link标签引入某些页面。

* 作用范围：可以对多个页面产生影响。


```html
<!--外部链接css-->
    <link rel="stylesheet" href="/static/css/style.css">
```



**注释**

注意不能使用//。
只有：

```css
/* 注释 */ 
```

​      

## 1.2 选择器

1. 啥都不加 标签
2.   \# id
3.   .    class

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

同一个文件内id一般是不重复的（也可以定义重复的）

```html
<p id="myp">p 1</p>
```

#id    .class

```css
#rect-1 {
    width: 200px;
    height: 200px;
    background-color: gray;
}
```

**类选择器**



class可以重复

选择所有rectangle类的标签：

一个标签里可以有多个类只需要用空格隔开

```html
<p class="blue-p big">1</p>
```

```css
.rectangle {
    width: 200px;
    height: 200px;
    background-color: gray;
}
```

**伪类选择器**  **状态标签**

伪类用于定义元素的特殊状态。

链接伪类选择器：

* :link：链接访问前的样式

* :visited：链接访问后的样式

* :hover：鼠标悬停时的样式

* :active：鼠标点击后长按时的样式

* :focus：聚焦后的样式

  ```css
  .effect:hover {
      transform: scale(1.1);  /*变大*/
      transition: 200ms;  /*延缓*/
  }
  
  #effc:hover {
      background-color: lightgreen;
      transition: 200ms;
  }
  
  /*聚焦之后点击后才会发生变化 hover是鼠标悬浮在上边就会变换*/
  input {
      width: 20px;
      background-color: azure;
  }
  
  input:focus {
      width: 50px;
      background-color: lightblue;
  }
  ```

  

位置伪类选择器：

会判断每个是否满足 满足的话才会触发

* :nth-child(n)：选择是其父标签第n个子元素的所有元素。

  ```css
  p:nth-chile(odd) { /*会进行一个判断从第一个标签开始，若果p标签不是奇数儿子就不会变红*/ 
  	color: red;
  }
  ```

  

目标伪类选择器：

* :target：当url指向该元素时生效。

```css
也可以指向对应的id
<a href="#p-5">p5</a>
```



**复合选择器**

由两个及以上基础选择器组合而成的选择器。

* element1, element2：同时选择元素element1和元素element2。

* element.class：选则包含某类的element元素。

  ```css
  div.big.real
  /*同时big 和 real的才会变化*/
  ```

* element1 + element2：选择紧跟element1的element2元素。

  ```css
  div + p {  /*只修改div后边的那个p*/
      
  }
  ```

* element1 element2：选择element1内的所有element2元素。

  ```css
  ul ul {  /*ul 里的 ul 会变化  祖先节点是ul 的 ul*/
      
  }
  ```

* element1 > element2：选择父标签是element1的所有element2元素。

**通配符选择器**



* \*：选择所有标签
* [attribute]：选择具有某个属性的所有标签
* [attribute=value]：选择attribute值为value的所有标签

```css
input[id] {
    
}
inputp[require] {
    
}
input[type=number] {  /*选择type为number的标签*/
    
}
```

**伪元素选择器**

将特定内容当做一个元素，选择这些元素的选择器被称为伪元素选择器。

* ::first-letter：选择第一个字母
* ::first-line：选择第一行
* ::selection：选择已被选中的内容
* ::after：可以在元素后插入内容
* ::before：可以在元素前插入内容

```css
/*一个段落上的第一个字进行修改 可以把一个字加入一个span标签中*/
/*也可以*/
p::first-letter {
    color: red;
}

h1::before {  /*在标题的前后加上书名号*/
    content: "《";
    color: red;
}

h1::after {
    content: "》";
    color: red;
}
```

**样式渲染优先级**



* 权重大小，越具体的选择器权重越大：!important > 行内样式 > ID选择器 > 类与伪类选择器 > 标签选择器 > 通用选择器

  ```html
  p {
  	width: 50px;
  	height: 70px;
  	background-color: blue !important;  /*提到最高优先级*/
  }
  ```

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
其他颜色可以使用QQ的截图软件：**ctrl + alt + a**
直接按c键，可以复制rgb颜色值
按住shift再按c键，可以复制16进制颜色值

​     

## 1.4 文本

**text-align**

text-align CSS属性定义行内内容（例如文字）如何相对它的块父元素对齐。text-align 并不控制块元素自己的对齐，只控制它的行内内容的对齐。

​    

**line-height**

line-height CSS 属性用于设置多行元素的空间量，如多行文本的间距。对于块级元素，它指定元素行盒（line boxes）的最小高度。对于非替代的 inline 元素，它用于计算行盒（line box）的高度。

<table>
    <thead>
        <th>单位</th>
        <th>描述</th>
    </thead>
	<tbody>
		<tr>
			<th>px</th>
			<th>设备上的像素点</th>
		</tr>
		<tr>
			<th>%</th>
			<th>相对于父元素的百分比</th>
		</tr>
		<tr>
			<th>em</th>
			<th>相对于当前元素的字体大小</th>
		</tr>
		<tr>
			<th>rem</th>
			<th>相对于根元素的字体大小</th>
		</tr>
		<tr>
			<th>vw</th>
			<th>相对于视窗宽度的百分比</th>
		</tr>
		<tr>
			<th>vh</th>
			<th>相对于视窗高度的百分比</th>
		</tr>
	</tbody>
</table>
**letter-spacing**

CSS 的 letter-spacing 属性用于设置文本字符的间距。
        
**text-indent**

text-indent属性能定义一个块元素首行文本内容之前的缩进量。
    
**text-decoration**

text-decoration 这个 CSS 属性是用于设置文本的修饰线外观的（下划线、上划线、贯穿线/删除线 或 闪烁）它是 text-decoration-line, text-decoration-color, text-decoration-style, 和新出现的 text-decoration-thickness 属性的缩写。
    
**text-shadow**

text-shadow为文字添加阴影。可以为文字与 text-decorations 添加多个阴影，阴影值之间用逗号隔开。每个阴影值由元素在X和Y方向的偏移量、模糊半径和颜色值组成。

​     

## 1.5 字体

**font-size**

font-size CSS 属性指定字体的大小。因为该属性的值会被用于计算em和ex长度单位，定义该值可能改变其他元素的大小。

**font-style**

font-style CSS 属性允许你选择 font-family 字体下的 italic 或 oblique 样式。

**font-weight**

font-weight CSS 属性指定了字体的粗细程度。 一些字体只提供 normal 和 bold 两种值。

**font-family**

CSS 属性 font-family 允许您通过给定一个有先后顺序的，由字体名或者字体族名组成的列表来为选定的元素设置字体。
属性值用逗号隔开。浏览器会选择列表中第一个该计算机上有安装的字体，或者是通过 @font-face 指定的可以直接下载的字体。

​     

## 1.6 背景

**background-color**

CSS属性中的background-color会设置元素的背景色, 属性的值为颜色值或关键字”transparent”二者选其一。

**background-image**

CSS background-image 属性用于为一个元素设置一个或者多个背景图像。

* 渐变色：linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))

**background-size**

background-size 设置背景图片大小。图片可以保有其原有的尺寸，或者拉伸到新的尺寸，或者在保持其原有比例的同时缩放到元素的可用空间的尺寸。

**background-repeat**

background-repeat CSS 属性定义背景图像的重复方式。背景图像可以沿着水平轴，垂直轴，两个轴重复，或者根本不重复。

**background-position**

background-position 为背景图片设置初始位置。

**background-attachment**

background-attachment CSS 属性决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动。

   

## 1.7 边框

**border-style**

border-style 是一个 CSS 简写属性，用来设定元素所有边框的样式。

​      

**border-width**

border-width属性可以设置盒子模型的边框宽度。

​       

**border-color**

SS属性border-color 是一个用于设置元素四个边框颜色的快捷属性： border-top-color, border-right-color, border-bottom-color, border-left-color

​      

**border-radius**

CSS 属性 border-radius 允许你设置元素的外边框圆角。当使用一个半径时确定一个圆形，当使用两个半径时确定一个椭圆。这个(椭)圆与边框的交集形成圆角效果。

​        

**border-collapse**

border-collapse CSS 属性是用来决定表格的边框是分开的还是合并的。在分隔模式下，相邻的单元格都拥有独立的边框。在合并模式下，相邻单元格共享边框。

​         

## 1.8 元素展示格式

**display**
* block：
  *  独占一行
  * width、height、margin、padding均可控制
  * width默认100%。
* inline：
  * 可以共占一行
  * width与height无效，水平方向的margin与padding有效，竖直方向的margin与padding无效
  * width默认为本身内容宽度
* inline-block
  * 可以共占一行
  * width、height、margin、padding均可控制
  * width默认为本身内容宽度

​    

**white-space**
white-space CSS 属性是用来设置如何处理元素中的 空白 (en-US)。

​    

**text-overflow**
text-overflow CSS 属性确定如何向用户发出未显示的溢出内容信号。它可以被剪切，显示一个省略号或显示一个自定义字符串。

​     

**overflow**
CSS属性 overflow 定义当一个元素的内容太大而无法适应 块级格式化上下文 时候该做什么。它是 overflow-x 和overflow-y的 简写属性 。

​     

## 1.9 内边距与外边距

**margin**

margin属性为给定元素设置所有四个（上下左右）方向的外边距属性。

* 可以接受1~4个值（上、右、下、左的顺序）
* 可以分别指明四个方向：margin-top、margin-right、margin-bottom、margin-left
* 可取值
  * length：固定值
  * percentage：相对于包含块的宽度，以百分比值为外边距。
  * auto：让浏览器自己选择一个合适的外边距。有时，在一些特殊情况下，该值可以使元素居中。
* 外边距重叠
  * 块的上外边距(margin-top)和下外边距(margin-bottom)有时合并(折叠)为单个边距，其大小为单个边距的最大值(或如果它们相等，则仅为其中一个)，这种行为称为边距折叠。
  * 父元素与后代元素：父元素没有上边框和padding时，后代元素的margin-top会溢出，溢出后父元素的margin-top会与后代元素取最大值。

***

**padding**

padding CSS 简写属性控制元素所有四条边的内边距区域。

* 可以接受1~4个值（上、右、下、左的顺序）
* 可以分别指明四个方向：padding-top、padding-right、padding-bottom、padding-left
* 可取值
  * length：固定值
  * percentage：相对于包含块的宽度，以百分比值为内边距。

​    

## 1.10 盒子

**box-sizing**

CSS 中的 box-sizing 属性定义了 user agent 应该如何计算一个元素的总宽度和总高度。

* content-box：是默认值，设置border和padding均会增加元素的宽高。

* border-box：设置border和padding不会改变元素的宽高，而是挤占内容区域。

​     