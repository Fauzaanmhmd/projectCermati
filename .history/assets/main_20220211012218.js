var modal = document.getElementById('myModal').className;
// var btn = document.getElementById('tutup');

// btn.onclick = function () {
//     modal.style.display = "none";
// }

function close() {
    const element = document.getElementById("myModal");
    if (element.class == "penghalang") {
        element.class == "noMargin";
    } else {
        element.class == "penghalang";
    }
}