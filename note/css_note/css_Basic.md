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

```css
div {  /*子标签会继承父标签的属性*/
    text-align: center;
}
```

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

```css
/*可以用于删除超链接的下划线*/
a {
    text-decoration: none;
}
```


**text-shadow**

text-shadow为文字添加阴影。可以为文字与 text-decorations 添加多个阴影，阴影值之间用逗号隔开。每个阴影值由元素在X和Y方向的偏移量、模糊半径和颜色值组成。

```csss
.mydiv {
	text-shadow: 3px 3px 2px grey;  /*向右偏移3向下偏移3 模糊2 灰色阴影*/
}
```

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

```css
/*font-family 设置字体 可以在MDN中找有什么样的字体*/
.mydiv {
    font-family: system-ui;
}
```



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

   ```css
.mydiv {
    width: 200px;
    height: 200px;
    background-image: url('/static/images/moutains.jpg');
    background-color: lightblue;
    background-size: 50px;  /*设置图片的大小  cover 会使图片覆盖  contain div包含图片*/
    background-repeat: no-repeat;  /*不重复*/
    background-attachment: fixed;  /*固定不动*
    /*scroll 和鼠标一起动*/
}
   ```



**opacity: 0.2** **透明度调节**



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

```css
.mydiv {
    height: 100px;
    width: 100px;
    border-color: lightblue;
    border-style: solid dotted inset;  /*实线 点 内嵌*/
    border-width: 2px 4px 6px 8px;
    border-radius: 50%;  /*圆角 把形状变为圆形或者椭圆*/ 
}

table {
    border-collapse: colloapse; /*公共边重合*/
}
```

```html         
(tr>td*3)*3  <!--快速建立一个三行三列的表格-->
```

## 1.8 元素展示格式

**display**
* block： **块状标签**
  *  **独占一行**(div h1 p)
  * width、height、margin**外边距**、padding**内边距**均可控制
  * width默认100%。
* inline：**行内元素**
  * 可以共占一行(span)
  * width与height无效，水平方向的margin与padding有效，竖直方向的margin与padding无效
  * width默认为本身内容宽度**span 设置width没有任何意义**
* inline-block:  **行内块元素**
  * 可以共占一行
  * width、height、margin、padding均可控制
  * width默认为本身内容宽度

 ```css
div {
    display: inline;  /*div 变成 span*/
}

span {
    display: block;  /*span 变成 div*/
}
 ```



**white-space**
white-space CSS 属性是用来设置如何处理元素中的 空白 (en-US)。

```css
div {
    white-space: nowrap;  /*不换行*/ 
    white-space: pre;  /*就变成了pre格式*/
}
```

**text-overflow**
text-overflow CSS 属性确定如何向用户发出未显示的溢出内容信号。它可以被剪切，显示一个省略号或显示一个自定义字符串。

​     

**overflow**
CSS属性 overflow 定义当一个元素的内容太大而无法适应 块级格式化上下文 时候该做什么。它是 overflow-x 和overflow-y的 简写属性 。

```css
div {
    white-spacce: nowrap;
    overflow: auto;  /*超出会多一个滚轮*/
    /*overflow: scroll 
      overflow-x: scroll 横向有滚轮
      overflow-y: hidden 纵向隐藏*/
    text-overflow: elipsis;  /*超出会以省略号显示(前提是横向超出)*/ 
}
```

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

**两个div 都加入float: left; 可以让这两个div在同一行**

**width = content + padding + border**

```css
/*
有两个上下挨着的div 有上下外边距会取最大的一个margin
左右挨着的话 就是取相加

***定义相邻的外边距的时候可以只定义下边距 margin-bottom
*/

.div-outer {
    width: 400px;
    height: 300px;
    background-color: lightblue;
    /*让子元素在父元素的中间*/
    /*
    1. border-top: 1px solid;
    2. padding-top: 1px;
    3.overflow: hidden;
    */
    
}

.div-inner {
    width: 160x;
    height: 120px;
    background-color: lightcoral;
    margin: 10% auto;  /*auto只能用于左右居中   百分比是父元素宽度的百分之多少*/
}


```



​    

## 1.10 盒子

**box-sizing**

CSS 中的 box-sizing 属性定义了 user agent 应该如何计算一个元素的总宽度和总高度。

* content-box：是默认值，设置border和padding均会增加元素的宽高。

* border-box：设置border和padding不会改变元素的宽高，而是挤占内容区域。

​     

​      

## 1.11 位置

**position**
CSS position 属性用于指定一个元素在文档中的定位方式。

**定位类型：**大家好，我们今天不收第九周的考勤表纸质版。下周跟第十周的考勤表一起收。请知晓。

* 定位元素（positioned element）是其计算后位置属性为 relative, absolute, fixed 或 sticky 的一个元素（换句话说，除static以外的任何东西）。
* 相对定位元素（relatively positioned element）是计算后位置属性为 relative 的元素。
* 绝对定位元素（absolutely positioned element）是计算后位置属性为 absolute 或 fixed 的元素。
* 粘性定位元素（stickily positioned element）是计算后位置属性为 sticky 的元素。

**取值：**

* static：该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 **top, right, bottom, left 和 z-index **属性无效。
* relative：该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。top, right, bottom, left等调整元素相对于初始位置的偏移量。
* absolute：元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的**非 static** 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。
* fixed：元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。
* sticky：元素根据正常文档流进行定位，然后相对它的最近滚动祖先（nearest scrolling ancestor）和 containing block (最近块级祖先 nearest block-level ancestor)，包括table-related元素，基于top, right, bottom, 和 left的值进行偏移。偏移值不会影响任何其他元素的位置。

```css
/*fixed 可以用来做回到顶部*/
/*stick 没到固定距离时是正常的*/
```



​     

## 1.12 浮动

**float**

float CSS属性指定一个元素应沿其容器的左侧或右侧放置，允许文本和内联元素环绕它。该元素从网页的正常流动(文档流)中移除，尽管仍然保持部分的流动性（与绝对定位相反）。

由于float意味着使用块布局，它在某些情况下修改display 值的计算值：

* display为inline或inline-block时，使用float后会统一变成block。
取值：
* left：表明元素必须浮动在其所在的块容器左侧的关键字。
* right：表明元素必须浮动在其所在的块容器右侧的关键字。

**clear**

有时，你可能想要强制元素移至任何浮动元素下方。比如说，你可能希望某个段落与浮动元素保持相邻的位置，但又希望这个段落从头开始强制独占一行。此时可以使用clear。

**取值：**
* left：清除左侧浮动。
* right：清除右侧浮动。
* both：清除左右两侧浮动

```css
/*用来把不用的div放到同一行*/
.div-inner {
    float: left;
}

.div-inner1 {
    clear: left;
}
```





```css
/*数值居中可以让行高等于高度*/
.user-card-body-info-username {
    height: 16px;
    line-height: 16px;
}
```



​      

## 1.13 flex布局

flex CSS简写属性设置了弹性项目如何增大或缩小以适应其弹性容器中可用的空间。

**<font color="red" size="5">flex-direction</font>**

CSS flex-direction 属性指定了内部元素是如何在 flex 容器中布局的，定义了主轴的方向(正方向或反方向)。

**取值：**

* row：flex容器的主轴被定义为与文本方向相同。 主轴起点和主轴终点与内容方向相同。
* row-reverse：表现和row相同，但是置换了主轴起点和主轴终点。
* column：flex容器的主轴和块轴相同。主轴起点与主轴终点和书写模式的前后点相同
* column-reverse：表现和column相同，但是置换了主轴起点和主轴终点

**超出了父节点的范围会进行一下压缩**

![1.png](https://cdn.acwing.com/media/article/image/2022/05/04/189403_33282212cb-1.png) 

**<font color="red" size="5">flex-wrap</font>**

CSS 的 flex-wrap 属性指定 flex 元素单行显示还是多行显示。如果允许换行，这个属性允许你控制行的堆叠方向。

**取值：**

* nowrap：默认值。不换行。
* wrap：换行，第一行在上方。
* wrap-reverse：换行，第一行在下方。

![2.png](https://cdn.acwing.com/media/article/image/2022/05/04/189403_6073cd9ecb-2.png) 

**<font color="red" size="5">flex-flow</font>**

CSS flex-flow 属性是 flex-direction 和 flex-wrap 的简写。默认值为：row nowrap。

**justify-content**  水平对齐

CSS justify-content 属性定义了浏览器之间，如何分配顺着弹性容器主轴(或者网格行轴) 的元素之间及其周围的空间。

**取值：**
* flex-start：默认值。左对齐。
* flex-end：右对齐。
* center: 居中对齐
* space-between：左右两段对齐。
* space-around：在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。
* space-evenly：flex项都沿着主轴均匀分布在指定的对齐容器中。相邻flex项之间的间距，主轴起始位置到第一个flex项的间距，主轴结束位置到最后一个flex项的间距，都完全一样。

**align-items**

CSS align-items属性将所有直接子节点上的align-self值设置为一个组。 align-self属性设置项目在其包含块中在交叉轴方向上的对齐方式。

**取值：**
* flex-start：元素向主轴起点对齐。
* flex-end：元素向主轴终点对齐。
* center：元素在侧轴居中。
* stretch：弹性元素被在侧轴方向被拉伸到与容器相同的高度或宽度。

stretch 会拉伸的前提是 元素没有设置height

![3.png](https://cdn.acwing.com/media/article/image/2022/05/04/189403_7cc1651ecb-3.png) 

**align-content**

CSS 的 align-content 属性设置了浏览器如何沿着弹性盒子布局的纵轴和网格布局的主轴在内容项之间和周围分配空间。

**取值：**
* flex-start：所有行从垂直轴起点开始填充。第一行的垂直轴起点边和容器的垂直轴起点边对齐。接下来的每一行紧跟前一行。
* flex-end：所有行从垂直轴末尾开始填充。最后一行的垂直轴终点和容器的垂直轴终点对齐。同时所有后续行与前一个对齐。
* center：所有行朝向容器的中心填充。**每行互相紧挨(与item的区别)**，相对于容器居中对齐。容器的垂直轴起点边和第一行的距离相等于容器的垂直轴终点边和最后一行的距离。
* stretch：拉伸所有行来填满剩余空间。剩余空间平均地分配给每一行。



**下面是定义的flex内部的属性上边是定义父节点flex属性**

**order**

定义flex项目的顺序，值越小越靠前。

![4.png](https://cdn.acwing.com/media/article/image/2022/05/04/189403_050384d0cb-4.png) 

**flex-grow**

CSS 属性 flex-grow CSS 设置 flex 项主尺寸 的 flex 增长系数。

负值无效，默认为 0。

**flex-shrink**

CSS flex-shrink 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。

负值无效，默认为1。

**flex-basis**

CSS 属性 flex-basis 指定了 flex 元素在主轴方向上的初始大小。

**取值：**

width 值可以是 \<length>; 该值也可以是一个相对于其父弹性盒容器主轴尺寸的百分数 。负值是不被允许的。默认为 auto。

**flex**

flex-grow增长、flow-shrink收缩、flex-basis初始大小的缩写。

**常用取值：**

**auto**：flex: 1 1 auto

**none**：flex: 0 0 auto

​    

## 1.14 响应式布局

**media查询**

当屏幕宽度满足特定条件时应用css。

例如：
```csss
@media(min-width: 768px) {  /*当设备分辨率小于768时就会使用下边的css*/
    .container {
        width: 960px;
        background-color: lightblue;
    }
}
```

**Bootstrap**

* [Bootstrap地址](https://v5.bootcss.com/)

![7.png](https://cdn.acwing.com/media/article/image/2022/05/04/189403_26d055bfcb-7.png) 

一般设置12份

```css
.col-sm-10 {
    width: calc(100% * 10 / 12);
}

.col-sm-11 {
    width: calc(100% * 11 / 12);
}

.col-sm-12 {
    width: calc(100% * 12 / 12);
}

```

![5.png](https://cdn.acwing.com/media/article/image/2022/05/04/189403_12ad23f1cb-5.png) 

![6.png](https://cdn.acwing.com/media/article/image/2022/05/04/189403_3bdc1829cb-6.png) 