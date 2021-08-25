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

//스크롤 위치 구하기
scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;

    video.currentTime = delay;
}, 41.6);

//인디케이터

//문서 높이 구하기
var doc = document.documentElement;
var docHeight = Math.max(doc.offsetHeight, doc.scrollHeight);//둘이 다른 결과가 나오는 경우가 있기 때문에 큰값 쓰기

//인디케이터 클릭 이벤트
var indiList1 = document.getElementById('indiList');

indiList.addEventListener('click', function(e){
    e.preventDefault();

    switch(e.target.innerHTML){
        case "Intro":
            document.location.href = '#intro';
            break;
        case '1980년대':
            document.location.href = '#introVideo';
            //scrollToLink('#introVideo');
            break;
        case '1980':
            document.location.href = '#chapter1';
            break;
        case '1983':
            document.location.href = '#chapter2';
            break;
        case '1987':
            document.location.href = '#chapter3';
            break;
        case '1988':
            document.location.href = '#chapter4';
            break;

        case '1990년대':
            document.location.href = '#introVideo';
            break;
        case '1991':
            document.location.href = '#chapter1';
            break;
        case '1992':
            document.location.href = '#chapter2';
            break;
        case '1997':
            document.location.href = '#chapter3';
    }
});

// var offset;
// var scrollPosition;
// var docHeight;

// //문서 높이 구하기
// docHeight = Math.max(doc.offsetHeight, doc.scrollHeight);//둘이 다른 결과가 나오는 경우가 있기 때문에 큰값 쓰기

// if (docHeight != 0) {
//     offset = docHeight / 4;//4분의 1 스크롤 하면 버튼 생성
// }

// //스크롤 이벤트
// window.addEventListener('scroll', function(){
//     scrollPosition = doc.scrollTop;//스크롤 양 확인
    
//     btt.className = (scrollPosition>offset)?'visible':'';//class 이름 바꾸기
// });

// function scrollToLink(link){
//     //Interval로 일정 시간 딜레이를 적용한다.
//     setInterval(function(){
//         if(scrollPosition != 0){
//             //스크롤이 조금이라도 되있는 상태면 위로 올리기
//             window.scrollBy('#chapter1');
//         }
//         else{
//             //스크롤이 안되어 있으면 변화 안주기
//             clearInterval(scrollInterval);
//         }
//     },15);
// }
