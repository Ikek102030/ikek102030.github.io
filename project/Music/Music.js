var box = document.getElementsByClassName('box');
var modalbox = document.querySelector('.modalbox');
var close = document.getElementsByClassName('btn_close');

var albumTitle = document.getElementsByClassName('albumTitle');
var albumName = document.getElementById('albumName');//Modal
var albumInfo = document.getElementsByClassName('albumSongs');

var songNameList = document.getElementsByClassName('songNameList');
var songs = document.getElementById('songs');
var songListForModal = document.getElementById('songList');//Modal

var songList = document.getElementsByClassName('s');

//모든 사진 누를때 마다 엘범정보 모달 띄우기
for(var i = 0; i<box.length; i++){
    //모달 띄우기
    box[i].addEventListener('click', function(e){
        modalbox.classList.add('mb-active');

        //엘범 이름
        albumName.innerHTML = this.children[1].innerHTML;

        //사진
        var srcImg = this.children[0];
        let imgForModal = document.getElementById('imgForModal');
        imgForModal.src = srcImg.src;

        //songs
        var a = this.children[2].children[0].children[1];
        
        var b =songs.length;
        //alert(a);
        
        //수록곡
        for(var j = 0; j<songs.length; j++){
            let inputSongName = this.children[2].children[0].children[j];
            

            if (inputSongName == null) {
                continue;
            }

            if (inputSongName.innerHTML != null && inputSongName_Snd != null) {
                songList[j].innerHTML = inputSongName.innerHTML;

                let textNode = document.createTextNode(inputSongName_Snd.innerHTML);
                songListForModal.appendChild(textNode);
            }
        }
    });
}

//닫기 버튼 누르면 닫기
close[0].addEventListener('click', function(){
    modalbox.classList.remove('mb-active');
})
