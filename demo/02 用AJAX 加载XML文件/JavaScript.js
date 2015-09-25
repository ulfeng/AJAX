function loadXMLDoc(url) {
    var xmlhttp;
    if (window.XMLHttpRequest) {  // code for IE7+,Firefox,Opera,Sarfri
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("demo1").innerHTML = xmlhttp.status;
            document.getElementById("demo2").innerHTML = xmlhttp.statusText;
            document.getElementById("demo3").innerHTML = xmlhttp.responseText;
        }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

window.onload = function () {
    var oBtn = document.getElementsByTagName("button")[0];
    oBtn.onclick = function () {
        loadXMLDoc("Ajax_info.xml");
    }
}