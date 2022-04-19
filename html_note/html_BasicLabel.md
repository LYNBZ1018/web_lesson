## html文件结构

### 文档结构

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
HTML <meta>元素表示  那些不能由其它 HTML 元相关（meta-related）元素（<base>、<link>, <script>、<style> 或 <title>）之一表示的任何元数据信息。


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

