//section
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h5');

const section = document.querySelector('.scd');
const end = section.querySelector('h1');
const video2 = section.querySelector('.video2');

const chapter1 = document.querySelector('.chapter1');
const video3 = chapter1.querySelector('.video3');

//Scroll magic
const controller = new ScrollMagic.Controller();

//첫번째 비디오
let scene = new ScrollMagic.Scene({
    duration: 5000,
    triggerElement: intro,
    triggerHook: 0
})
    .setPin(intro)
    .addTo(controller);

//Text 사라지게 하는 에니메이션
const textAnim = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0});

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller);

//두번째 비디오
let scene3 = new ScrollMagic.Scene({
    duration: 5000,
    triggerElement: section,
    triggerHook: 0
})
    .setPin(section)
    .addTo(controller);

//세번째 비디오
let scene4 = new ScrollMagic.Scene({
    duration: 7000,
    triggerElement: chapter1,
    triggerHook: 0
})
    .setPin(chapter1)
    .addTo(controller);


//Video1
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

//Video2
scene3.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;

    video2.currentTime = delay
}, 41.6);

//Video3
scene4.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;

    video3.currentTime = delay
}, 41.6);
