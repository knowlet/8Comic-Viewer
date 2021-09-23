// ==UserScript==
// @name         8Comic Viewer
// @namespace    https://knowlet3389.blogspot.tw/
// @version      1.71
// @description  Auto load 8comic pic.
// @author       KNowlet
// @include      /^http[s]?\:\/\/.*\/online\/(new-|best_|comic-|manga_|a-|b-)\d+\.html(\?ch=\d+.*)?$/
// @grant        none
// @downloadURL  https://github.com/knowlet/8Comic-Viewer/raw/master/8ComicViewer.user.js
// ==/UserScript==

(function() {
    var a = document.getElementById("TheImg").parentNode, b = false;
    // resize table
    a.parentNode.parentNode.parentNode.width = "100%";
    document.getElementById("TheImg").remove();
    // Memory Vol.
    localStorage.getItem(ti) > ch && confirm("你上次已經看到第" + localStorage.getItem(ti) + "話（卷）囉！\n是否要前往呢？") ? jv(localStorage.getItem(ti)) : localStorage.setItem(ti, ch);
    // Load Pic
    var z = document.body.innerHTML.match(/\'\/\/img.*\'\.jpg\'/);
    if(z == null){
        z = document.body.innerHTML.match(/\.src\=unescape\(.*?\);/);
        z[0] = z[0].replace(".src=","");
    }
    var images = document.createDocumentFragment();

    if (z === null) {
        for (var d = 1; d <= ps; ++d) {
            var image = document.createElement("img");
            image.setAttribute("src", "//img" + su(tmkqp, 0, 1) + ".8comic.com/" + su(tmkqp, 1, 1) + "/" + ti + "/" + vnnlw + "/" + nn(d) + "_" + su(cewds, mm(d), 3) + ".jpg");
            images.appendChild(image);
            images.appendChild(document.createElement("br"));
        }
    }
    else {
        for (var p = 1; p <= ps; ++p) {
            var image = document.createElement("img");
            image.setAttribute("src", eval(z[0]));
            images.appendChild(image);
            images.appendChild(document.createElement("br"));
        }
    }

    a.appendChild(images);
    // Load CSS
    a = document.createElement("link");
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
    a.setAttribute("href", "https://8comic.knowlet.me/files/css/style.css");
    document.head.appendChild(a);
    // Create Navbar
    var navX, navY;
    document.body.innerHTML = document.getElementById("Formimg").innerHTML + "<nav id='nb'><span id='btDrag'>x</span><ul><li id='btPrev'><img src='//8comic.knowlet.me/files/img/pv.png' alt='上一卷（話）' /></li><li id='btMenu'><img src='//8comic.knowlet.me/files/img/mu.png' alt='全集列表' /></li><li id='btNext'><img src='//8comic.knowlet.me/files/img/nv.png' alr='下一卷（話）' /></li><li id='Scroll'><img src='//8comic.knowlet.me/files/img/sc.png' alr='自動捲頁' /></li></ul></nav>";
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
