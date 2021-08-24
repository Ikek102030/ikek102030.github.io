var box = document.getElementsByClassName('box');
var modalbox = document.querySelector('.modalbox');
var close = document.getElementsByClassName('btn_close');

var albumName = document.getElementById('albumName');//Modal

var songs = document.getElementById('songs');//<ul>기입력 수록곡 목록
var songList = document.getElementById('realSongName');//Modal <li>

var video = document.getElementById('video');

//모든 사진 누를때 마다 엘범정보 모달 띄우기
for(var i = 0; i<box.length; i++){
    //모달 띄우기
    box[i].addEventListener('click', function(){
        modalbox.classList.add('mb-active');

        //엘범 이름
        albumName.innerHTML = this.children[1].innerHTML;

        //사진
        var srcImg = this.children[0];
        let imgForModal = document.getElementById('imgForModal');
        imgForModal.src = srcImg.src;

        //주요 수록곡 목록
        var list = this.getElementsByClassName('songs');
        var a = document.getElementsByClassName('a');
        var songNameArr = [];

        for (var j = 0; j < a.length; j++) {
            if (list[0].children[j] == null) break;

            var text = list[0].children[j].innerHTML;
            songNameArr.push(text);//선택한 앨범 안에 있는 수록곡 리스트를 담은 배열
        }
        
        songList.innerHTML = songNameArr[0];
        for (var j = 1; j < songNameArr.length; j++) {
            let node = document.createElement('li');
            let textNode = document.createTextNode(songNameArr[j]);
            node.appendChild(textNode);
            songList.appendChild(node);
        }

        var scrVideo = this.children[3];
        let videoForModal = document.getElementById('video');
        videoForModal.src = scrVideo.src;
    });
}

//닫기 버튼 누르면 닫기
close[0].addEventListener('click', function(){
    modalbox.classList.remove('mb-active');
})

var btt = document.getElementById('backToTop');
var doc = document.documentElement;
var offset;
var scrollPosition;
var docHeight;

//문서 높이 구하기
docHeight = Math.max(doc.offsetHeight, doc.scrollHeight);//둘이 다른 결과가 나오는 경우가 있기 때문에 큰값 쓰기

if (docHeight != 0) {
    offset = docHeight / 4;//4분의 1 스크롤 하면 버튼 생성
}

//스크롤 이벤트
window.addEventListener('scroll', function(){
    scrollPosition = doc.scrollTop;//스크롤 양 확인
    
    btt.className = (scrollPosition>offset)?'visible':'';//class 이름 바꾸기
});

btt.addEventListener('click', function(e){
    e.preventDefault();

    scrollToTop();
});

function scrollToTop(){
    //Interval로 일정 시간 딜레이를 적용한다.
    var scrollInterval = setInterval(function(){
        if(scrollPosition != 0){
            //스크롤이 조금이라도 되있는 상태면 위로 올리기
            window.scrollBy(0,-55);
        }
        else{
            //스크롤이 안되어 있으면 변화 안주기
            clearInterval(scrollInterval);
        }
    },15);
}
