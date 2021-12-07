document.getElementById('btnPlay').addEventListener('click', playMove, true);

var myVideo = document.getElementsByTagName('video')[0];
function playMove(){
    if (document.getElementById('btnPlay').style.opacity == 1 
    || document.getElementById('btnPlay').style.opacity == "")
    {
        document.getElementById("btnPlay").style.opacity = "0";
        document.getElementById("btnPlay").style.transition = "1s"
        console.log('работает на воспроизведение')
        myVideo.play();
    }
    else if (myVideo.style.opacity == 0)
    {
        document.getElementById("btnPlay").style.opacity = "1";
        document.getElementById("btnPlay").style.transition = "1s"
        console.log('работает на паузу')
        myVideo.pause();
    }


}
