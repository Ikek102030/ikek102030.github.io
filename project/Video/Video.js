//section
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

const section = document.querySelector('section');
const end = section.querySelector('h1');

//Scroll magic
const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 7000,
    triggerElement: intro,
    triggerHook:0
})
    .addIndicators()
    .setPin(intro)
    .addTo(controller);

//let scene2 = new ScrollMagic.Scene... 두번째 영상

//Video
let accelamount = 0.5;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;

    video.currentTime = delay;
}, 41.6);