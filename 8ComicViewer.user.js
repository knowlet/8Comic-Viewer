// ==UserScript==
// @name         8Comic Viewer
// @namespace    http://knowlet3389.blogspot.tw/
// @version      1.43
// @description  Auto load 8comic pic.
// @author       KNowlet
// @match        http://www.comicvip.com/show/*
// @include      http://www.comicvip.com/show/*
// @match        http://v.comicbus.com/online/*
// @include      http://v.comicbus.com/online/*
// @grant        none
// @downloadURL  https://github.com/knowlet/8Comic-Viewer/raw/master/8ComicViewer.user.js
// ==/UserScript==
(function() {
    var a = document.getElementById("TheImg").parentNode, b = false;
    document.getElementById("TheImg").remove();
    // Memory Vol.
    localStorage.getItem(ti) > ch && confirm("你上次已經看到第" + localStorage.getItem(ti) + "話（卷）囉！\n是否要前往呢？") ? jv(localStorage.getItem(ti)) : localStorage.setItem(ti, ch);
    // Load Pic
    for (var d = 1; d <= ps; ++d)
        a.appendChild(document.createElement("img")), a.getElementsByTagName("img")[d - 1].setAttribute("src", "http://img" + ss(c, 4, 2) + ".8comic.com/" + ss(c, 6, 1) + "/" + ti + "/" + ss(c, 0, 4) + "/" + nn(d) + "_" + ss(c, mm(d) + 10, 3, f) + ".jpg"), a.appendChild(document.createElement("br"));
    // Clean Table
    a = document.getElementsByTagName("table");
    a[0].remove();
    a[0].remove();
    a[0].remove();
    a[1].remove();
    a[2].remove();
    a[3].remove();
    // Load CSS
    a = document.createElement("link");
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
    a.setAttribute("href", "http://knowlet.github.io/8Comic-Viewer/files/css/style.css");
    document.head.appendChild(a);
    // Create Navbar
    var navX, navY;
    document.body.innerHTML = Form1.innerHTML + "<nav id='nb'><span id='btDrag'>x</span><ul><li id='btPrev'><img src='http://knowlet.github.io/8Comic-Viewer/files/img/pv.png' alt='上一卷（話）' /></li><li id='btMenu'><img src='http://knowlet.github.io/8Comic-Viewer/files/img/mu.png' alt='全集列表' /></li><li id='btNext'><img src='http://knowlet.github.io/8Comic-Viewer/files/img/nv.png' alr='下一卷（話）' /></li><li id='Scroll'><img src='http://knowlet.github.io/8Comic-Viewer/files/img/sc.png' alr='自動捲頁' /></li></ul></nav>";
    parseInt(localStorage.navX) < document.body.clientWidth && parseInt(localStorage.navY) < document.body.clientHeight && parseInt(localStorage.navX) > 0 && parseInt(localStorage.navY) > 0 && (navX = localStorage.navX, navY = localStorage.navY) && (nb.style.left = navX, nb.style.top = navY);
    // Drag Events
    document.onmousemove = function(a) {
        b && (nb.style.left = navX = a.clientX + "px", nb.style.top = navY = a.clientY - 10 + "px");
    };
    btDrag.onmousedown = function() {
        b = true;
    };
    document.onmouseup = function() {
        b && (localStorage.setItem("navX", navX), localStorage.setItem("navY", navY));
        b = false;
    };
    // Btn Events
    btPrev.onclick = function() {
        1 >= ch ? alert("前面沒有東西喔！") : (localStorage.setItem(ti,pi), pv());
    };
    btMenu.onclick = function() {
        location.assign("http://www.8comic.com/html/" + ti.toString() + ".html");
    };
    btNext.onclick = function() {
        nv();
        ch >= chs && alert("您已看完了！") && localStorage.removeItem(ti);
    };
    // Auto load next page
    window.onscroll = function() {
        scrollY == document.body.scrollHeight - document.body.clientHeight && setTimeout(function() {
            btNext.click();
        }, 800);
    };
    // Recover contextMenu
    document.oncontextmenu = null;
    // Auto scrolling
    var speed = 0;
    var intervalHandle;
    Scroll.onclick = function() {
        ++speed;
        clearInterval(intervalHandle);
        intervalHandle = setInterval(function() { window.scrollBy(0, speed); }, 1);
    };
    Scroll.onmouseout = function() {
        speed = 0;
        clearInterval(intervalHandle);
    };
})();
