## AJAX 简介
AJAX = 异步 JavaScript 和 XML <br>
AJAX是一种在无需加载整个网页的情况下，能够更新部分网页的技术

#### AJAX 实例
```javascript
function loadXMLDoc() {
    var xmlhttp;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else { // code for IE6, IE5 
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("demo").innerHTML = xmlhttp.responseText;
        }
    }

    xmlhttp.open("GET", "Ajax_File.txt", true);
    xmlhttp.send();
}
```
```html
<div id="demo"><h2>使用 AJAX 修改文本内容</h2></div>
<button type="button" onclick="loadXMLDoc()">修改内容</button>
```
#### AJAX - 创建XMLHttpRequest对象
    XMLHttpRequest 是 AJAX的基础<br>
    XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
####　创建 XMLHttpRequest 对象
    所有现代浏览器(IE7、Firefox、Chrome、Safari、以及Opera)均内建XMLHttpRequest对象。
    创建XMLHttpRequest对象的语法：
```javascript
variable = new XMLHttpRequest();
```
    老版本的Internet Explorer（IE 5 和 IE6）使用ActiveX对象：
```javascript
variable = new ActiveXObject("Microsoft.XMLHTTP");
```
    为了应对所有的现代浏览器，包括IE5和IE6，请检查浏览器是否支持XMLHttpRequest对象。如果支持则创建XMLHttpRequest()对象，
如果不支持，则创建ActiveXObject()对象。
#### AJAX - 向服务器发送请求
    XMLHttpRequest对象用于和服务器交换数据。
    如需将请求发送到服务器，我们使用XMLHttpRequest对象的open()和send()方法。
    open()方法：规定请求的类型、URL以及是否异步处理请求，如：
```javascript
xmlhttp.open("Get","ajax_info.txt",true);
```
    send()方法,将请求发送到服务器；send(string)仅用于POST请求，如：
```javascript
xmlhttp.send();
```







