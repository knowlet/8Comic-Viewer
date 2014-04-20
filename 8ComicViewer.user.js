// ==UserScript==
// @name            8Comic Viewer
// @version         1.23
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
        // Memory vol.
        localStorage.last > ch && confirm("你上次已經看到第" + localStorage.last + "話（卷）囉！\n是否要前往呢？") && jv(localStorage.last);
        localStorage.setItem("last", ch);
        // Load pic
        for (var d = 1; d <= ps; ++d)
            a.appendChild(document.createElement("img")), a.getElementsByTagName("img")[d - 1].setAttribute("src", "http://img" + ss(c, 4, 2) + ".8comic.com/" + ss(c, 6, 1) + "/" + ti + "/" + ss(c, 0, 4) + "/" + nn(d) + "_" + ss(c, mm(d) + 10, 3, f) + ".jpg"), a.appendChild(document.createElement("br"));
        // Clean table
        a = document.getElementsByTagName("table");
        a[0].remove();
        a[0].remove();
        a[0].remove();
        a[1].remove();
        a[2].remove();
        a[3].remove();
        // Load css
        a = document.createElement("link");
        a.setAttribute("rel", "stylesheet");
        a.setAttribute("type", "text/css");
        a.setAttribute("href", "https://rawgit.com/knowlet/8Comic-Viewer/dev/css/style.css");
        document.head.appendChild(a);
        // Create navbar
        document.body.innerHTML = Form1.innerHTML + "<nav id='nb'><ul><li id='btPrev'><img src='https://raw.githubusercontent.com/knowlet/8Comic-Viewer/dev/img/pv.png' alt='上一卷（話）'/></li><li id='btMenu'><img src='https://raw.githubusercontent.com/knowlet/8Comic-Viewer/dev/img/mu.png' alt='全集列表'/></li><li id='btNext'><img src='https://raw.githubusercontent.com/knowlet/8Comic-Viewer/dev/img/nv.png' alr='下一卷（話）'/></li></ul></nav>";
        // Drag events
        document.onmousemove = function(a) {
            b && (nb.style.left = a.clientX - 20 + "px", nb.style.top = a.clientY - 50 + "px");
        };
        nb.onmousedown = function() {
            b = true;
        };
        document.onmouseup = function() {
            b = false;
        };
        // Btn events
        btPrev.onclick = function() {
            0 >= ch && alert("前面沒有東西喔！");
            pv();
        };
        btMenu.onclick = function() {
            location.assign("http://www.8comic.com/html/" + ti.toString() + ".html");
        };
        btNext.onclick = function() {
            nv();
            ch >= chs && alert("您已看完了！") && btMenu.click();
        };
    } + ")();";
    document.body.appendChild(b);
    document.body.removeChild(b);
})();