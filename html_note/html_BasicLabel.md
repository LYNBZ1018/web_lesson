## html基础标签

### 1.1 html文件结构

html的所有标签为树形结构，例如：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web应用课</title>
</head>
    
<body>
    <h1>第一讲</h1>
</body>
</html>
```

```markdown
UTF-8介绍:
Unicode 联盟（Unicode Consortium）开发了 Unicode 标准（Unicode Standard）。
他们的目标是使用标准的 Unicode 转换格式（即 UTF，全称 Unicode Transformation Format）取代现有的字符集。

UTF8 中的字符可以是1到4字节长。
UTF-8 可以代表 Unicode 标准中的任何字符。
UTF-8 向后兼容 ASCII。UTF-8 是电子邮件和网页的首选编码。
```

```markdown
lang 语言
<html lang="zh-CN">中文</html>
<html lang="en">英文</html
```



***

<font color='red'> **\<html>**</font>标签

HTML html 元素 表示一个 HTML 文档的根（顶级元素），所以它也被称为根元素。所有其他元素必须是此元素的后代。

***

<font color='red'> **\<head>**</font>标签

HTML head 元素 规定文档相关的配置信息（元数据），包括文档的标题，引用的文档样式和脚本等。

***

<font color='red'> **\<body>**</font>标签

HTML body 元素表示文档的内容。document.body 属性提供了可以轻松访问文档的 body 元素的脚本。

***

<font color='red'> **\<title>**</font>标签

HTML  title 元素 定义文档的标题，显示在浏览器的标题栏或标签页上。它只应该包含文本，若是包含有标签，则它包含的任何标签都将被忽略。

***

<font color='red'> **\<meta>**</font>

HTML \<meta>元素表示  那些不能由其它 HTML 元相关（meta-related）元素（\<base>、\<link>, \<script>、\<style> 或 \<title>）之一表示的任何元数据信息。


常见属性：

* charset：这个属性声明了文档的字符编码。如果使用了这个属性，其值必须是与 ASCII 大小写无关（ASCII case-insensitive）的 ”UTF-8”。
* name：name 和 content 属性可以一起使用，以名 - 值对的方式给文档提供元数据，其中 name 作为元数据的名称，content 作为元数据的值。

***

<font color='red'> **\<icon>**</font>

```html
<link rel="icon" href="/images/icon.png">
```

****

<font color='red'> **\<!-- 多行注释 -->**</font>

**示例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
	<!--
		这里都是注释
		<h1>one</<h1>
		<p>
			段落
		</p>
	-->
</body>
</html>
```

***

​        

### 1.2 文本标签

<font color='red'> **\<div>**</font>标签

\<div\>元素 (或 HTML 文档分区元素) 是一个通用型的流内容容器，在不使用CSS的情况下，其对内容或布局没有任何影响。
其他块级标签例如：\<h1>, \<p>, \<pre>,\<ul>, \<ol>, \<table>。

***

<font color='red'> **\<span>**</font>标签

\<span> 元素是短语内容的通用行内容器，并没有任何特殊语义。可以使用它来编组元素以达到某种样式意图（通过使用类或者 Id 属性），或者这些元素有着共同的属性，比如lang。应该在没有其他合适的语义元素时才使用它。\<span> 与 \<div> 元素很相似，但 \<div> 是一个 块元素 而 \<span> 则是 行内元素
其他内联标签例如：\<i>, \<b>, \<del>, \<ins>, \<td>, \<a>。

***

<font color='red'> **\<h1> - \<h6>**</font>标签

HTML \<h1>–\<h6> 标题 (Heading) 元素呈现了六个不同的级别的标题，\<h1> 级别最高，而 \<h6> 级别最低。

***

<font color='red'> **\<p>**</font>标签

HTML \<p>元素（或者说 HTML 段落元素）表示文本的一个段落。该元素通常表现为一整块与相邻文本分离的文本，或以垂直的空白隔离或以首行缩进。另外，\<p> 是块级元素。

***

<font color='red'> **\<pre>**</font>标签

HTML \<pre> 元素表示预定义格式文本。在该元素中的文本通常按照原文件中的编排，以等宽字体的形式展现出来，文本中的空白符（比如空格和换行符）都会显示出来。(紧跟在 \<pre> 开始标签后的换行符也会被省略)

***

<font color='red'> **\<br>**</font>标签

HTML \<br>元素在文本中生成一个换行（回车）符号。此元素在写诗和地址时很有用，这些地方的换行都非常重要。

***

<font color='red'> **\<hr>**</font>标签

HTML \<hr> 元素表示段落级元素之间的主题转换（例如，一个故事中的场景的改变，或一个章节的主题的改变）。

在 HTML 的早期版本中，它是一个水平线。现在它仍能在可视化浏览器中表现为水平线，但目前被定义为语义上的，而不是表现层面上。所以如果想画一条横线，请使用适当的 css 样式来修饰。

***

<font color='red'> **\<i>**</font>标签

HTML 元素 \<i> 用于表现因某些原因需要区分普通文本的一系列文本。例如技术术语、外文短语或是小说中人物的思想活动等，它的内容通常以斜体显示。

***

<font color='red'> **\<b>**</font>标签

HTML 提醒注意（Bring Attention To）元素（\<b>）用于吸引读者的注意到该元素的内容上（如果没有另加特别强调）。这个元素过去被认为是粗体（Boldface）元素，并且大多数浏览器仍然将文字显示为粗体。尽管如此，你不应将 \<b> 元素用于显示粗体文字；替代方案是使用 CSS font-weight 属性来创建粗体文字。

***

<font color='red'> **\<del>**</font>标签

HTML 的\<del>标签表示一些被从文档中删除的文字内容。比如可以在需要显示修改记录或者源代码差异的情况使用这个标签。\<ins>标签的作用恰恰于此相反：表示文档中添加的内容。

***

<font color='red'> **\<ins>**</font>标签

HTML \<ins> 元素定义已经被插入文档中的文本。

***

​         

### 1.3 图片

HTML \<img> 元素将一份图像嵌入文档。
默认为行内元素，即display: inline。

**src**属性
该属性是**必须**的，它包含了你想嵌入的图片的文件路径。

**alt**属性
该属性包含一条对图像的文本描述，这不是强制性的，但对可访问性而言，它**难以置信地有用**——屏幕阅读器会将这些描述读给需要使用阅读器的使用者听，让他们知道图像的含义。如果由于某种原因无法加载图像，普通浏览器也会在页面上显示alt 属性中的备用文本：例如，网络错误、内容被屏蔽或链接过期时。

**height**属性
图像的高度，在 HTML5 中的单位是 CSS 像素，在 HTML 4 中既可以是像素，也可以是百分比。可以只指定 width 和 height 中的一个值，浏览器会根据原始图像进行缩放。

**width**属性
图像的宽度，在 **HTML5 中单位是 CSS 像素**， 在 **HTML 4 中可以是像素也可以是百分比**。

```html
<img width="100" src="/images/kobe" alt="科比">
```

***

​       

### 1.4 音频与视频

**audio**标签

HTML \<audio> 元素用于在文档中嵌入音频内容。 \<audio> 元素可以包含一个或多个音频资源， 这些音频资源可以使用 src 属性或者\<source> 元素来进行描述：浏览器将会选择最合适的一个来使用。也可以使用 MediaStream 将这个元素用于流式媒体。

* 使用**src**属性播放

  ```html
  <audio
         controls
         src="/audios/bgm.mp3">
  </audio>
  ```

* \<audio>与多个\<source>元素

  这个例子包含了多个 <source> 元素。如果能够播放的话，浏览器就会试图去加载第一个 source 元素；如果不行，那就退而求其次去加载第二个。

  ```html
  <audio controls>
      <source src="/audios/sound1" type="audio/mpeg"/>
      <source src="/audios/sound2" type="audio/mpeg"/>
  </audio>
  ```

***

