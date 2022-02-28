var modal = document.getElementById('myModal');
var btn = document.getElementById('tutup');
var remove = document.getElementById("remove");
var modalFooter = document.getElementById('myModal');

btn.onclick = function () {
    modal.style.display = "none";
}

remove.onclick = function () {
    modalFooter.styles.display = "none";
}

// function myFunction() {
//     const element = document.getElementById("myDIV");
//     if (element.className == "myStyle") {
//         element.className = "newStyle";
//     } else {
//         element.className = "myStyle";
//     }
// }