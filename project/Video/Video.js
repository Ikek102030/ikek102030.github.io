//section
const intro = document.querySelector('#intro');
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

//인디케이터
var indicator = document.getElementsByClassName('indicator');
var indiList = document.getElementsByClassName('indiList');
var item = document.getElementsByClassName('l');
var doc = document.documentElement;

//문서 높이 구하기
var docHeight = Math.max(doc.offsetHeight, doc.scrollHeight);//둘이 다른 결과가 나오는 경우가 있기 때문에 큰값 쓰기

//인디케이터 클릭 이벤트
var indicator1 = document.getElementById('indiList');

indicator1.addEventListener('click', function(e){
    e.preventDefault();

    e.target.innerHTML

    switch(e.target.innerHTML){
        case "Intro":
            document.location.href = '#intro';
            break;
        case '1980년대':
            document.location.href = '#introVideo';
            break;
        case '1980':
            document.location.href = '#chapter1';
            break;
        //TODO 이벤트 추가
    }
});
