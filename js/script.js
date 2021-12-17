//Переменная для того, чтобы убрать постер при первой загрузке страницы
const myVideo = document.getElementsByTagName('video')[0];
//Убирает POSTER при первом нажатии на него
document.getElementById('btnPlay').addEventListener('click', hiden, true);
function hiden() {
    document.getElementById("btnPlay").style.visibility = "hidden";
    document.getElementById("btnPlay").style.opacity = "0";
    document.getElementById("btnPlay").style.transition = "0.7s";
    myVideo.play();
}
//Добавляет POSTER, когда видео на паузе
document.getElementsByTagName('video')[0].addEventListener("pause", videoStop, true);
function videoStop() {
    document.getElementById("btnPlay").style.visibility = "visible";
    document.getElementById("btnPlay").style.opacity = "1";
    document.getElementById("btnPlay").style.transition = "0.7s";
}
//Запускает видео и скрывает POSTER
document.getElementsByTagName('video')[0].addEventListener("play", videoStart, true);
function videoStart() {
    document.getElementById("btnPlay").style.visibility = "hidden";
    document.getElementById("btnPlay").style.opacity = "0";
    document.getElementById("btnPlay").style.transition = "0.7s";
}
//Запрещает появление POSTERA, когда перематываешь видео
document.getElementsByTagName('video')[0].addEventListener("seeking", videoSeeking, true);
function videoSeeking() {
    document.getElementById("btnPlay").style.visibility = "hidden";
}

//Раскрывает определённый эллемент SERVICES с первого по 5
//Эллемент SERVICE 1
document.getElementById('statistickId').style.width = "100%";
document.getElementById('statistickId').addEventListener('click', statistickClick, true);
function statistickClick() {
    if (document.getElementById('statistickId').classList.contains('statistick_hover') != true) {
        document.getElementById('statistickId').classList.add('statistick_hover');

        document.getElementById('inboxId').classList.remove('statistick_hover');
        document.getElementById('teamId').classList.remove('statistick_hover');
        document.getElementById('settingsId').classList.remove('statistick_hover');
        document.getElementById('feedId').classList.remove('statistick_hover');
    }
    else if (document.getElementById('statistickId').classList.contains('statistick_hover') == true) {
        document.getElementById('statistickId').classList.remove('statistick_hover');
        document.getElementById('statistickId').style.width = "100%";
    }
}

//Эллемент SERVICE 2
document.getElementById('inboxId').style.width = "100%";
document.getElementById('inboxId').addEventListener('click', inboxClick, true);
function inboxClick() {
    if (document.getElementById('inboxId').classList.contains('statistick_hover') != true) {
        document.getElementById('inboxId').classList.add('statistick_hover');

        document.getElementById('statistickId').classList.remove('statistick_hover');
        document.getElementById('teamId').classList.remove('statistick_hover');
        document.getElementById('settingsId').classList.remove('statistick_hover');
        document.getElementById('feedId').classList.remove('statistick_hover');
    }
    else {
        document.getElementById('inboxId').classList.remove('statistick_hover');
        document.getElementById('inboxId').style.width = "100%";
    }
}

//Эллемент SERVICE 3
document.getElementById('teamId').style.width = "100%";
document.getElementById('teamId').addEventListener('click', teamClick, true);
function teamClick() {
    if (document.getElementById('teamId').classList.contains('statistick_hover') != true) {
        document.getElementById('teamId').classList.add('statistick_hover');

        document.getElementById('statistickId').classList.remove('statistick_hover');
        document.getElementById('inboxId').classList.remove('statistick_hover');
        document.getElementById('settingsId').classList.remove('statistick_hover');
        document.getElementById('feedId').classList.remove('statistick_hover');
    }
    else {
        document.getElementById('teamId').classList.remove('statistick_hover');
        document.getElementById('teamId').style.width = "100%";
    }
}

//Эллемент SERVICE 4
document.getElementById('settingsId').style.width = "100%";
document.getElementById('settingsId').addEventListener('click', settingsClick, true);
function settingsClick() {
    if (document.getElementById('settingsId').classList.contains('statistick_hover') != true) {
        document.getElementById('settingsId').classList.add('statistick_hover');

        document.getElementById('statistickId').classList.remove('statistick_hover');
        document.getElementById('inboxId').classList.remove('statistick_hover');
        document.getElementById('teamId').classList.remove('statistick_hover');
        document.getElementById('feedId').classList.remove('statistick_hover');
    }
    else {
        document.getElementById('settingsId').classList.remove('statistick_hover');
        document.getElementById('settingsId').style.width = "100%";
    }
}

//Эллемент SERVICE 5
document.getElementById('feedId').style.width = "100%";
document.getElementById('feedId').addEventListener('click', feedClick, true);
function feedClick() {
    if (document.getElementById('feedId').classList.contains('statistick_hover') != true) {
        document.getElementById('feedId').classList.add('statistick_hover');

        document.getElementById('statistickId').classList.remove('statistick_hover');
        document.getElementById('inboxId').classList.remove('statistick_hover');
        document.getElementById('teamId').classList.remove('statistick_hover');
        document.getElementById('settingsId').classList.remove('statistick_hover');
    }
    else {
        document.getElementById('feedId').classList.remove('statistick_hover');
        document.getElementById('feedId').style.width = "100%";
    }
}

//Навигация отзывов кнопкой вверх
document.querySelector('#reviewBtnUp').addEventListener('click', reviewBtnUp, true);


function reviewBtnUp() {
        document.querySelector('#reviewBtnDown').style.opacity = "1";
        document.querySelector('#reviewBtnDown').style.transition = "0.5s";
        document.querySelector('#reviewBtnDown').style.visibility = "visible";
    if (window.screen.width > "1163") {

        if (document.getElementById('reviewInfo1').style.marginTop == "20px" || document.getElementById('reviewInfo1').style.marginTop == "") {
            document.getElementById('reviewInfo1').style.marginTop = "-500px";
        }
        else if (document.getElementById('reviewInfo1').style.marginTop == "-500px") {
            document.getElementById('reviewInfo1').style.marginTop = "-1000px";
            document.querySelector('#reviewBtnUp').style.opacity = "0";
            document.querySelector('#reviewBtnUp').style.transition = "0.5s";
            document.querySelector('#reviewBtnUp').style.visibility = "hidden";
        }
    }
    else if (window.screen.width < "1163" && window.screen.width > "605")
    {
        if (document.getElementById('reviewInfo1').style.marginTop == "20px" || document.getElementById('reviewInfo1').style.marginTop == "") {
            document.getElementById('reviewInfo1').style.marginTop = "-500px";
        }
        else if (document.getElementById('reviewInfo1').style.marginTop == "-500px") {
            document.getElementById('reviewInfo1').style.marginTop = "-1000px";
            document.querySelector('#reviewBtnUp').style.opacity = "0";
            document.querySelector('#reviewBtnUp').style.transition = "0.5s";
            document.querySelector('#reviewBtnUp').style.visibility = "hidden";
        }
    }
    else if (window.screen.width <="605")
    {
        if (document.getElementById('reviewInfo1').style.marginTop == "20px" || document.getElementById('reviewInfo1').style.marginTop == "") {
            document.getElementById('reviewInfo1').style.marginTop = "-800px";
        }
        else if (document.getElementById('reviewInfo1').style.marginTop == "-800px") {
            document.getElementById('reviewInfo1').style.marginTop = "-1650px";
            document.querySelector('#reviewBtnUp').style.opacity = "0";
            document.querySelector('#reviewBtnUp').style.transition = "0.5s";
            document.querySelector('#reviewBtnUp').style.visibility = "hidden";
        }
    }
    document.querySelector('.reviews_info').style.transition = "1s";
}

//Навигация отзывов кнопкой вниз
document.querySelector('#reviewBtnDown').addEventListener('click', reviewBtnDown, true);

function reviewBtnDown() {
        document.querySelector('#reviewBtnUp').style.opacity = "1";
        document.querySelector('#reviewBtnUp').style.transition = "0.5s";
        document.querySelector('#reviewBtnUp').style.visibility = "visible";
    if (window.screen.width > "1163") {

        if (document.getElementById('reviewInfo1').style.marginTop == "-500px") {
            document.getElementById('reviewInfo1').style.marginTop = "20px";
            document.querySelector('#reviewBtnDown').style.opacity = "0";
            document.querySelector('#reviewBtnDown').style.transition = "0.5s";
            document.querySelector('#reviewBtnDown').style.visibility = "hidden";
        }
        else if (document.getElementById('reviewInfo1').style.marginTop == "-1000px") {
            document.getElementById('reviewInfo1').style.marginTop = "-500px";
            
        }
    }
    else if (window.screen.width < "1163" && window.screen.width > "605")
    {
        if (document.getElementById('reviewInfo1').style.marginTop == "-500px" || document.getElementById('reviewInfo1').style.marginTop == "") {
            document.getElementById('reviewInfo1').style.marginTop = "20px";
            document.querySelector('#reviewBtnDown').style.opacity = "0";
            document.querySelector('#reviewBtnDown').style.transition = "0.5s";
            document.querySelector('#reviewBtnDown').style.visibility = "hidden";
        }
        else if (document.getElementById('reviewInfo1').style.marginTop == "-1000px") {
            document.getElementById('reviewInfo1').style.marginTop = "-500px";
            
        }
    }
    else if (window.screen.width <="605")
    {
        if (document.getElementById('reviewInfo1').style.marginTop == "-800px" || document.getElementById('reviewInfo1').style.marginTop == "") {
            document.getElementById('reviewInfo1').style.marginTop = "20px";
            document.querySelector('#reviewBtnDown').style.opacity = "0";
            document.querySelector('#reviewBtnDown').style.transition = "0.5s";
            document.querySelector('#reviewBtnDown').style.visibility = "hidden";
        }
        else if (document.getElementById('reviewInfo1').style.marginTop == "-1650px") {
            document.getElementById('reviewInfo1').style.marginTop = "-800px";
            
        }
    }
    document.querySelector('.reviews_info').style.transition = "1s";
}