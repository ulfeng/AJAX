//1、Get请求参数在URL中显示，Post方式，则不会显示出来
//2、Ge请求发送数据量小，Post请求，发送数据量大
//3、Get请求需注意缓存的问题，Post请求不需担心这个问题
//4、Post请求必须设置Content-Type值为application/x-form-www-urlencoded
var oInput = document.getElementsByTagName("input");
window.onload = function () {
   

    oInput[1].onkeyup = function () {
        this.value = this.value.replace(/[^\d]/, "");  // 将不为数字替换为空
    }

    oInput[2].onclick = function () {
        btn_get_click();
    }

    oInput[3].onclick = function () {
        btn_post_click();
    }
}


//get方法
function btn_get_click() {

    isNull();

    var xmlHttp = window.XMLHttpRequest ?
        new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    var username = document.getElementById("txt_username").value;
    var age = document.getElementById("txt_age").value;

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            document.getElementById("result").innerHTML = xmlHttp.responseText;
        }
    }

    //添加参数，以求每次访问不同的url,以避免缓存问题
    xmlHttp.open("get", "Server.aspx?username=" + encodeURIComponent(username) +
        "&age=" + encodeURIComponent(age) + "&random=" + Math.random());

    //发送请求，参数为null
    xmlHttp.send();
}

//post方法
function btn_post_click() {

    isNull();

    var xmlHttp = window.XMLHttpRequest ?
        new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    var username = document.getElementById("txt_username").value;
    var age = document.getElementById("txt_age").value;

    var data = "username=" + encodeURIComponent(username) + "&age=" + encodeURIComponent(age);

    //不用担心缓存问题
    xmlHttp.open("post", "Server.aspx", true);

    //必须设置否则，服务器端收不到信息
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            document.getElementById("result").innerHTML = xmlHttp.responseText;
        }
    }

    //发送请求，要data数据
    xmlHttp.send(data);
}

function isNull() {
    if (oInput[0].value == "" || oInput[1].value == "") {
        alert("请输入数据！");
    }
}