var modal = document.getElementById('myModal').className;
// var btn = document.getElementById('tutup');

// btn.onclick = function () {
//     modal.style.display = "none";
// }

function close() {
    const element = document.getElementById("tutup");
    if (element.className == "penghalang") {
        element.className = "penghalang";
    } else {
        element.className = "noMargin";
    }
}