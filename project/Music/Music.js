var box = document.getElementsByClassName('box');
var modalbox = document.querySelector('.modalbox');
var close = document.getElementsByClassName('btn_close');

var albumTitle = document.getElementsByClassName('albumTitle');
var albumName = document.getElementById('albumName');//Modal
var albumInfo = document.getElementsByClassName('albumSongs');

var songNameList = document.getElementsByClassName('songNameList');//<span> 대표 수록곡
var songs = document.getElementById('songs');//<ul>기입력 수록곡 목록
var songListForModal = document.getElementById('songList');//Modal
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