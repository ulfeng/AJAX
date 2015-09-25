function loadXMLDoc() {
    var xmlhttp;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Google, Opera, Sarfri
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("demo").innerHTML = xmlhttp.getResponseHeader("Cache-Control");
        }
    }

    xmlhttp.open("GET", "Ajax_info.xml", true);
    xmlhttp.send();

}

window.onload = function () {
    var oBtn = document.getElementsByTagName("button")[0];
    oBtn.onclick = function () {
        loadXMLDoc();
    }
}