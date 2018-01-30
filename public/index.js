function contactServer() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var _object = JSON.parse(this.responseText);
            document.getElementById("response").innerHTML = _object.firstName;
        }
    };

    xhttp.open("GET", "ajax-request", true);
    xhttp.send();
}