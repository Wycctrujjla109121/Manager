//Переменная для того, чтобы убрать постер при первой загрузке страницы
const myVideo = document.getElementsByTagName('video')[0];
//Убирает POSTER при первом нажатии на него
document.getElementById('btnPlay').addEventListener('click', hiden, true);
function hiden(){
    document.getElementById("btnPlay").style.visibility = "hidden";
    document.getElementById("btnPlay").style.opacity = "0";
    document.getElementById("btnPlay").style.transition = "0.7s";
        myVideo.play();
}
//Добавляет POSTER, когда видео на паузе
document.getElementsByTagName('video')[0].addEventListener("pause", videoStop, true);
function videoStop(){
    document.getElementById("btnPlay").style.visibility = "visible";
    document.getElementById("btnPlay").style.opacity = "1";
    document.getElementById("btnPlay").style.transition = "0.7s";
}
//Запускает видео и скрывает POSTER
document.getElementsByTagName('video')[0].addEventListener("play", videoStart, true);
function videoStart(){
    document.getElementById("btnPlay").style.visibility = "hidden";
    document.getElementById("btnPlay").style.opacity = "0";
    document.getElementById("btnPlay").style.transition = "0.7s";
}
//Запрещает появление POSTERA, когда перематываешь видео
document.getElementsByTagName('video')[0].addEventListener("seeking", videoSeeking, true);
function videoSeeking(){
    document.getElementById("btnPlay").style.visibility = "hidden";
}
