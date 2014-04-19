// ==UserScript==
// @name            8Comic Viewer
// @version         1.2
// @author          knowlet
// @namespace       http://knowlet3389.blogspot.tw/
// @description     Auto load 8comic pic.
// @match           http://new.comicvip.com/show/*
// ==/UserScript==
function exec(fn) {
    var script = document.createElement('script');
    script.setAttribute("type", "application/javascript");
    script.textContent = '(' + fn + ')();';
    document.body.appendChild(script);
    document.body.removeChild(script);
}

exec(function() {
    var cc = cs.length;
    var content = document.getElementById("TheImg").parentNode;
    var cleanTable = function() {
        var x = document.getElementsByTagName("table");
        x[0].remove();
        x[0].remove();
        x[0].remove();
        x[1].remove();
        x[2].remove();
        x[3].remove();
    }
    document.getElementById("TheImg").remove();
    for (var i = 1; i <= ps; ++i) {
        content.appendChild(document.createElement("img"));
        content.getElementsByTagName("img")[i-1].src = 'http://img' + ss(c, 4, 2) + '.8comic.com/' + ss(c, 6, 1) + '/' + ti + '/' + ss(c, 0, 4) + '/' + nn(i) + '_' + ss(c, mm(i) + 10, 3, f) + '.jpg';
        content.appendChild(document.createElement("br"));
    }
    cleanTable();
    document.body.innerHTML = Form1.innerHTML + "<nav><ul><li id='btPrev'><img src='https://raw.githubusercontent.com/knowlet/8Comic-Viewer/dev/img/pv.png' alt='上一卷（話）'></li><li id='menu'><img src='https://raw.githubusercontent.com/knowlet/8Comic-Viewer/dev/img/mu.png' alt='全集列表'></li><li id='btNext'><img src='https://raw.githubusercontent.com/knowlet/8Comic-Viewer/dev/img/nv.png' alr='下一卷（話）'></li></ul></nav>";
    btPrev.onclick = function onclick(event) {
        ch <= 1 && alert("前面沒有東西喔！");
        pv();
        return;
    }
    btNext.onclick = function onclick(event) {
        nv();
        ch >= chs && alert("您已看完了！");
        return;
    }
});