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


// Даём всем вкладкам SERVICE стандартный размер в 50px
document.getElementById('statistickId').style.height = "50px"
document.getElementById('inboxId').style.height = "50px"
document.getElementById('teamId').style.height = "50px"
document.getElementById('settingsId').style.height = "50px"
document.getElementById('feedId').style.height = "50px"
document.getElementById('statistickId').addEventListener('click', statistickClick, true);

//Даёт отступы всем выезжаящим спискам 
document.getElementById('statistickCollumnId').style.margin = "0px 30px 0px 30px"
document.getElementById("statistickId").style.width = "100%";
document.getElementById("inboxId").style.width = "100%"
document.getElementById("teamId").style.width = "100%"
document.getElementById("settingsId").style.width = "100%"
document.getElementById("feedId").style.width = "100%"


//Откртие вкладок SRVICES с помощью JS
document.getElementById('statistickId').addEventListener("click", statistickClick, true);
function statistickClick(){
    if (document.getElementById('statistickId').style.height == "50px")
    {
        if (window.screen.width >= 835)
        {
            document.getElementById('statistickId').style.height = "220px";

        }
        else if (window.screen.width <= 832 && window.screen.width > 744)
        {
            document.getElementById('statistickId').style.height = "250px"
            
        }
        else if (window.screen.width <= 744 && window.screen.width > 633) 
        {
            document.getElementById('statistickId').style.height = "380px";
            document.getElementById('statistickTextId').style.maxWidth = "200px"
        }
        else
        {
            document.getElementById('statistickId').style.height = "450px"
            document.getElementById('statistickTextId').style.maxWidth = "320px"
        }
    }
    else
    {
        document.getElementById('statistickId').style.height = "50px"
    }
    document.getElementById("inboxId").style.height = "50px"
    document.getElementById("teamId").style.height = "50px"
    document.getElementById("settingsId").style.height = "50px"
    document.getElementById("feedId").style.height = "50px"
}

document.getElementById('inboxId').addEventListener("click", inboxClick, true);
function inboxClick(){
    if (document.getElementById('inboxId').style.height == "50px")
    {
        if (window.screen.width >= 835)
        {
            document.getElementById('inboxId').style.height = "220px";

        }
        else if (window.screen.width <= 832 && window.screen.width > 744)
        {
            document.getElementById('inboxId').style.height = "250px"
            
        }
        else if (window.screen.width <= 744 && window.screen.width > 633) 
        {
            document.getElementById('inboxId').style.height = "380px";
            document.getElementById('inboxTextId').style.maxWidth = "200px"
            console.log("work")
        }
        else
        {
            document.getElementById('inboxId').style.height = "450px"
            document.getElementById('inboxTextId').style.maxWidth = "320px"
        }
    }
    else
    {
        document.getElementById('inboxId').style.height = "50px"
    }
    document.getElementById("statistickId").style.height = "50px"
    document.getElementById("teamId").style.height = "50px"
    document.getElementById("settingsId").style.height = "50px"
    document.getElementById("feedId").style.height = "50px"
}

document.getElementById('teamId').addEventListener("click", teamClick, true);
function teamClick(){
    if (document.getElementById('teamId').style.height == "50px")
    {
        if (window.screen.width >= 835)
        {
            document.getElementById('teamId').style.height = "220px";

        }
        else if (window.screen.width <= 832 && window.screen.width > 744)
        {
            document.getElementById('teamId').style.height = "250px"
            
        }
        else if (window.screen.width <= 744 && window.screen.width > 633) 
        {
            document.getElementById('teamId').style.height = "380px";
            document.getElementById('teamIdText').style.maxWidth = "200px"
        }
        else
        {
            document.getElementById('teamId').style.height = "450px"
            document.getElementById('teamIdText').style.maxWidth = "320px"
        }
    }
    else
    {
        document.getElementById('teamId').style.height = "50px"
    }
    document.getElementById("inboxId").style.height = "50px"
    document.getElementById("statistickId").style.height = "50px"
    document.getElementById("settingsId").style.height = "50px"
    document.getElementById("feedId").style.height = "50px"
}

document.getElementById('settingsId').addEventListener("click", settingsClick, true);
function settingsClick(){
    if (document.getElementById('settingsId').style.height == "50px")
    {
        if (window.screen.width >= 835)
        {
            document.getElementById('settingsId').style.height = "220px";

        }
        else if (window.screen.width <= 832 && window.screen.width > 744)
        {
            document.getElementById('settingsId').style.height = "250px"
            
        }
        else if (window.screen.width <= 744 && window.screen.width > 633) 
        {
            document.getElementById('settingsId').style.height = "380px";
            document.getElementById('statistickIdText').style.maxWidth = "200px"
        }
        else
        {
            document.getElementById('settingsId').style.height = "450px"
            document.getElementById('statistickIdText').style.maxWidth = "320px"
        }
    }
    else
    {
        document.getElementById('settingsId').style.height = "50px"
    }
    document.getElementById("inboxId").style.height = "50px"
    document.getElementById("teamId").style.height = "50px"
    document.getElementById("statistickId").style.height = "50px"
    document.getElementById("feedId").style.height = "50px"
}

document.getElementById('feedId').addEventListener("click", feedClick, true);
function feedClick(){
    if (document.getElementById('feedId').style.height == "50px")
    {
        if (window.screen.width >= 835)
        {
            document.getElementById('feedId').style.height = "220px";

        }
        else if (window.screen.width <= 832 && window.screen.width > 744)
        {
            document.getElementById('feedId').style.height = "250px"
            
        }
        else if (window.screen.width <= 744 && window.screen.width > 633) 
        {
            document.getElementById('feedId').style.height = "380px";
            document.getElementById('feedIdText').style.maxWidth = "200px"
        }
        else
        {
            document.getElementById('feedId').style.height = "450px"
            document.getElementById('feedIdText').style.maxWidth = "320px"
        }
    }
    else
    {
        document.getElementById('feedId').style.height = "50px"
    }
    document.getElementById("inboxId").style.height = "50px"
    document.getElementById("teamId").style.height = "50px"
    document.getElementById("settingsId").style.height = "50px"
    document.getElementById("statistickId").style.height = "50px"
}