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

//Раскрывает определённый эллемент SERVICES с первого по 5
//Эллемент SERVICE 1
document.getElementById('statistickId').style.width = "100%";
document.getElementById('statistickId').addEventListener('click', statistickClick, true);
function statistickClick(){
    if (window.matchMedia('max-width: 832px') && document.getElementById('statistickId').classList.contains('statistick_hover') != true)
    {
        document.getElementById('statistickId').classList.add('statistick_hover');

        document.getElementById('inboxId').classList.remove('statistick_hover');
        document.getElementById('teamId').classList.remove('statistick_hover');
        document.getElementById('settingsId').classList.remove('statistick_hover');
        document.getElementById('feedId').classList.remove('statistick_hover');
    }
    else if (document.getElementById('statistickId').classList.contains('statistick_hover') == true)
    {
        document.getElementById('statistickId').classList.remove('statistick_hover');
        document.getElementById('statistickId').style.width = "100%";
    }
}

//Эллемент SERVICE 2
document.getElementById('inboxId').style.width = "100%";
document.getElementById('inboxId').addEventListener('click', inboxClick, true);
function inboxClick(){
    if (window.matchMedia('max-width: 832px') && document.getElementById('inboxId').classList.contains('statistick_hover') != true)
    {
        document.getElementById('inboxId').classList.add('statistick_hover');

        document.getElementById('statistickId').classList.remove('statistick_hover');
        document.getElementById('teamId').classList.remove('statistick_hover');
        document.getElementById('settingsId').classList.remove('statistick_hover');
        document.getElementById('feedId').classList.remove('statistick_hover');
    }
    else
    {
        document.getElementById('inboxId').classList.remove('statistick_hover');
        document.getElementById('inboxId').style.width = "100%";
    }
}

//Эллемент SERVICE 3
document.getElementById('teamId').style.width = "100%";
document.getElementById('teamId').addEventListener('click', teamClick, true);
function teamClick(){
    if (window.matchMedia('max-width: 832px') && document.getElementById('teamId').classList.contains('statistick_hover') != true)
    {
        document.getElementById('teamId').classList.add('statistick_hover');

        document.getElementById('statistickId').classList.remove('statistick_hover');
        document.getElementById('inboxId').classList.remove('statistick_hover');
        document.getElementById('settingsId').classList.remove('statistick_hover');
        document.getElementById('feedId').classList.remove('statistick_hover');
    }
    else
    {
        document.getElementById('teamId').classList.remove('statistick_hover');
        document.getElementById('teamId').style.width = "100%";
    }
}

//Эллемент SERVICE 4
document.getElementById('settingsId').style.width = "100%";
document.getElementById('settingsId').addEventListener('click', settingsClick, true);
function settingsClick(){
    if (window.matchMedia('max-width: 832px') && document.getElementById('settingsId').classList.contains('statistick_hover') != true)
    {
        document.getElementById('settingsId').classList.add('statistick_hover');

        document.getElementById('statistickId').classList.remove('statistick_hover');
        document.getElementById('inboxId').classList.remove('statistick_hover');
        document.getElementById('teamId').classList.remove('statistick_hover');
        document.getElementById('feedId').classList.remove('statistick_hover');
    }
    else
    {
        document.getElementById('settingsId').classList.remove('statistick_hover');
        document.getElementById('settingsId').style.width = "100%";
    }
}

//Эллемент SERVICE 5
document.getElementById('feedId').style.width = "100%";
document.getElementById('feedId').addEventListener('click', feedClick, true);
function feedClick(){
    if (window.matchMedia('max-width: 832px') && document.getElementById('feedId').classList.contains('statistick_hover') != true)
    {
        document.getElementById('feedId').classList.add('statistick_hover');

        document.getElementById('statistickId').classList.remove('statistick_hover');
        document.getElementById('inboxId').classList.remove('statistick_hover');
        document.getElementById('teamId').classList.remove('statistick_hover');
        document.getElementById('settingsId').classList.remove('statistick_hover');
    }
    else
    {
        document.getElementById('feedId').classList.remove('statistick_hover');
        document.getElementById('feedId').style.width = "100%";
    }
}