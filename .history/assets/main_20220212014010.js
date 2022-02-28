var modal = document.getElementById('myModal');
var btn = document.getElementById('tutup');
var remove = document.getElementById("remove");
var modalFooter = document.getElementById('myFooter');

btn.onclick = function () {
    modal.style.display = "none";
}

remove.onclick = function () {
    modalFooter.style.display = "none";
}

const faders = document.querySelectorAll(".fadeIn");

const appearOptions = {};

const appearOnScroll = new IntersectionObserver
    (function (
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
        appearOptions);

// function myFunction() {
//     const element = document.getElementById("myDIV");
//     if (element.className == "myStyle") {
//         element.className = "newStyle";
//     } else {
//         element.className = "myStyle";
//     }
// }