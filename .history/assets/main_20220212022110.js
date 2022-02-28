var modal = document.getElementById('myModal');
var btn = document.getElementById('tutup');
var remove = document.getElementById('remove');
var modalFooter = document.getElementById('myFooter');
const faders = document.querySelectorAll('.fadeIn');


btn.onclick = function () {
    modal.style.display = "none";
}

remove.onclick = function () {
    modalFooter.style.display = "none";
}


const appearOptions = {
    treshold: 1,
    rootMargin: "0px 0px -100 0px"
};

const appearOnScroll = new IntersectionObserver
    (function (
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.class.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
        appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});