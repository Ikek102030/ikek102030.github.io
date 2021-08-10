var box = document.getElementsByClassName('box');
var modalbox = document.querySelector('.modalbox');
var close = document.getElementsByClassName('btn_close');
var albumName = document.getElementById('albumName');
//var albumImg = document.getElementsByClassName('albumImg');
// var imgForModal = document.getElementById('imgForModal').scr;

//모든 사진 누를때 마다 엘범정보 모달 띄우기
for(var i = 0; i<box.length; i++){
    box[i].addEventListener('click', function(e){
        modalbox.classList.add('mb-active');

        var img = document.getElementById('albumImg').src;
        //alert(img);
        var imgForModal = document.getElementById('imgForModal').src;
        //alert(imgForModal);

        imgForModal = img;

        // var img = document.getElementsByClassName('albumImg').scr;
        // alsert(img);
    });
}

//닫기 버튼 누르면 닫기
close[0].addEventListener('click', function(){
    modalbox.classList.remove('mb-active');
})