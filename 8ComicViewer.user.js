// ==UserScript==
// @name            8Comic Viewer
// @version         1.24
// @author          knowlet
// @namespace       http://knowlet3389.blogspot.tw/
// @description     Auto load 8comic pic.
// @match           http://new.comicvip.com/show/*
// ==/UserScript==
(function() {
    var b = document.createElement("script");
    b.setAttribute("type", "application/javascript");
    b.textContent = "(" + function() {
        var a = document.getElementById("TheImg").parentNode, b = false;
        document.getElementById("TheImg").remove();
        // Memory Vol.
        localStorage.getItem(ti) > ch ? confirm("你上次已經看到第" + localStorage.getItem(ti) + "話（卷）囉！\n是否要前往呢？") ? jv(localStorage.getItem(ti)) : confirm("那這次瀏覽進度是否要儲存呢？") && localStorage.setItem(ti, ch) : localStorage.setItem(ti, ch);
        // Load Pic
        a.appendChild(document.createElement("div"));
        for (var a = a.children[0], d = 1; d <= ps; ++d)
            a.appendChild(document.createElement("img")), a.getElementsByTagName("img")[d-1].setAttribute("src", "http://img" + ss(c, 4, 2) + ".8comic.com/" + ss(c, 6, 1) + "/" + ti + "/" + ss(c, 0, 4) + "/" + nn(d) + "_" + ss(c, mm(d) + 10, 3, f) + ".jpg"), a.appendChild(document.createElement("br"));
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
        a.setAttribute("href", "https://rawgit.com/knowlet/8Comic-Viewer/dev/css/style.css");
        document.head.appendChild(a);
        // Create Navbar
        document.body.innerHTML = Form1.innerHTML + "<nav id='nb'><ul><li id='btPrev'><img src='https://raw.githubusercontent.com/knowlet/8Comic-Viewer/dev/img/pv.png' alt='上一卷（話）'/></li><li id='btMenu'><img src='https://raw.githubusercontent.com/knowlet/8Comic-Viewer/dev/img/mu.png' alt='全集列表'/></li><li id='btNext'><img src='https://raw.githubusercontent.com/knowlet/8Comic-Viewer/dev/img/nv.png' alr='下一卷（話）'/></li></ul></nav>";
        // Drag Events
        document.onmousemove = function(a) {
            b && (nb.style.left = a.clientX - 20 + "px", nb.style.top = a.clientY - 50 + "px");
        };
        nb.onmousedown = function() {
            b = true;
        };
        document.onmouseup = function() {
            b = false;
        };
        // Btn Events
        btPrev.onclick = function() {
            1 >= ch && alert("前面沒有東西喔！");
            pv();
        };
        btMenu.onclick = function() {
            location.assign("http://www.8comic.com/html/" + ti.toString() + ".html");
        };
        btNext.onclick = function() {
            nv();
            ch >= chs && alert("您已看完了！") && localStorage.removeItem(ti) && btMenu.click();
        };
    } + ")();";
    document.body.appendChild(b);
    document.body.removeChild(b);
})();