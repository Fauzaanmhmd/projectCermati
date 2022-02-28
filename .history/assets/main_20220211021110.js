var modal = document.getElementById('myModal');
var btn = document.getElementById('tutup');

btn.onclick = function () {
    modal.style.display = "none";
}

function myFunction() {
    const element = document.getElementById("myDIV");
    if (element.className == "myStyle") {
        element.className = "newStyle";
    } else {
        element.className = "myStyle";
    }
}