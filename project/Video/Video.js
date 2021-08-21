//section
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h5');

//Scroll magic
const controller = new ScrollMagic.Controller();

//첫번째 비디오
let scene = new ScrollMagic.Scene({
    duration: 4000,
    triggerElement: intro,
    triggerHook: 0
})
    .setPin(intro)
    .addTo(controller);

//Text 사라지게 하는 에니메이션
const textAnim = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0});

let scene2 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller);
