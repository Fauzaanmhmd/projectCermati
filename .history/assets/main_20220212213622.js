const modal = document.getElementById('myModal');
const btn = document.getElementById('tutup');
const remove = document.getElementById('remove');
const modalFooter = document.getElementById('myFooter');
// const faders = document.querySelectorAll('.fadeIn');


btn.onclick = function () {
    modal.style.display = "none";
}

remove.onclick = function () {
    modalFooter.style.display = "none";
}


// const appearOptions = {
//     threshold: 1,
//     rootMargin: "0px 0px -100 0px"
// };

// const appearOnScroll = new IntersectionObserver
//     (function (
//         entries,
//         appearOnScroll
//     ) {
//         entries.forEach(entry => {
//             if (!entry.isIntersecting) {
//                 return;
//             } else {
//                 entry.target.classList.add('appear');
//                 appearOnScroll.unobserve(entry.target);
//             }
//         });
//     },
//         appearOptions);

// faders.forEach(fader => {
//     appearOnScroll.observe(fader);
// });