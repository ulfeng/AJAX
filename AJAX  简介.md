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
#### GET 还是 POST?
        与POST相比，GET更简单也更快，并且在大部分情况下都能用。
        然而，在以下情况下，请使用POST请求：
        1、无法使用缓存文件(更新服务器上的文件或者数据库)；
        2、向服务器发送大量数据(POST没有数据量限制)；
        3、发送包含未知字符的用户输入时，POST比GET更稳定也更可靠。
######　GET请求：
```javascript
xmlhttp.open("GET","demo_get.html",true);
xmlhttp.send();
```
        上面的例子中，可能得到的是缓存的结果，为了避免这种情况，在URL添加一个唯一的ID:
```javascript
xmlhttp.open("GEt","demo_get.html?t=" + Math.random(),true);
xmlhttp.send();
```
        通过GET方法发送信息，如
```javascript
xmlhttp.open("GET","demo_get.html?fname=sunlifeng&age=45",true);
xmlhttp.open();
```
######　POST请求
````javascript
xmlhttp.open("POST","demo.html",true);
xmlhttp.send();
```
        如果需要像HTML表单那样POST数据，请使用setRequestHeader()来添加HTTP头。然后在send()方法中规定希望发送的数据：
        setRequestHeader(header,value); 向请求中添加HTTP头，header 规定头的名称，value 规定头的值
```javascript
xmlhttp.open("POST","demo.html",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlthttp.send("name=SunLifeng&age=30");
```
#### url - 服务器上的文件
        open()方法的url参数是服务器上文件的地址：
```javascript
xmlhttp.open("GET","ajax_test.html",true);
```
该文件可以是任何类型的文件，比如.txt和.xml，或者服务器脚本文件，比如.asp和.php(在传回响应之前，能够在服务器上执行任务)。
#### 异步 - True or False?
        AJAX 指的是异步JavaScript和XML(Asynchronous Javascript and XML)。
        XMLHttpRequest对象如果要用于AJAX的话，其open()方法的async餐宿必须设置为true;
```javascript
xmlhttp.open("GET","aiax_test.html",true);
```
        对于web开发人员来说，发送异步请求是一个巨大的进步。很多在服务器执行的任务都非常费时。AJAX出现之前这会引起应用程序挂起或停止。
        通过AJAX，JavaScript无需等待服务器的响应，而是：
        1、在等待服务器响应时执行其他脚本；
        2、当响应就绪后对相应进行处理。
#### Async=true
        当使用async=true时，请规定在响应处于onreadystatechange事件中的就绪状态时执行的函数：
```javascript
xmlhttp.onreaderstatechange=function(){
    if(xmlhttp.readyState==4 && xmlhttp.status==200){
    document.getElementById("demo").innerHTML=xmlhttp.responseText;
    }
}
xmlhttp.open("GET","ajax_info.txt",true);
xmlhttp.send();
```
#### Async=false
        如需使用 async=false，请将 open() 方法中的第三个参数改为 false：
```javascript
xmlhttp.open(&quot;GET&quot;,&quot;test1.txt&quot;,false);
```
        我们不推荐使用 async=false，但是对于一些小型的请求，也是可以的。
请记住，JavaScript 会等到服务器响应就绪才继续执行。如果服务器繁忙或缓慢，应用程序会挂起或停止。
注意：当您使用 async=false 时，请不要编写 onreadystatechange 函数 - 把代码放到 send() 语句后面即可：
```javascript
xmlhttp.open("GET","ajax_info.txt",false);
xmlhttp.send();
document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
```





