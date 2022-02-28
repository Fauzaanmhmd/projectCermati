var modal = document.getElementById('myModal');
var btn = document.getElementById('tutup');
var remove = document.getElementById('remove');
var modalFooter = document.getElementById('myFooter');
var faders = document.querySelectorAll('.fadeIn');


btn.onclick = function () {
    modal.style.display = "none";
}

remove.onclick = function () {
    modalFooter.style.display = "none";
}


var appearOptions = {
    treshold: 1,
    rootMargin: "0px 0px -100 0px"
};

var appearOnScroll = new IntersectionObserver
    (function (
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
        appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});