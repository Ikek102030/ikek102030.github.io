var modalbox = document.querySelector('.modalbox');
var close = document.getElementsByClassName('btn_close');

var card_anime = document.getElementsByClassName('card-animation');
var a = document.getElementsByClassName('a');

var link = document.getElementsByClassName('a2');
var btn_link = document.getElementsByClassName('btn_link');

a[0].addEventListener('click',function(){
    modalbox.classList.add('mb-active');

    btn_link[0].addEventListener("click", function(){
        document.location.href = '../project/Music/80sMusic.html';
    });
    btn_link[1].addEventListener('click', function(){
        document.location.href = '../project/Video/80sVideo.html';
    });
});

a[1].addEventListener('click',function(){
    modalbox.classList.add('mb-active');

    btn_link[0].addEventListener("click", function(){
        document.location.href = '../project/Music/90sMusic.html';
    });
    btn_link[1].addEventListener('click', function(){
        document.location.href = '../project/Video/90sVideo.html';
    });
});

close[0].addEventListener('click', function(){
    modalbox.classList.remove('mb-active');
});