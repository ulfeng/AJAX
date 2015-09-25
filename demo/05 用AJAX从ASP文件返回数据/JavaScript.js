
window.onload = function () {
    var oInput = document.getElementsByTagName("input")[0];

    oInput.onkeyup = function () {
        showInit(oInput.value);
    }
}


function showInit(inputValue) {
    var xmlhttp;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Google, Opear, Sarfri
        xmlhttp = new XMLHttpRequest();
    }
    else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // var xmlhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("suggestion").innerHTML = xmlhttp.responseText;
        }
    }

    xmlhttp.open("GET", "Server.aspx?inputValue="+encodeURIComponent(inputValue), true);
    xmlhttp.send();
}