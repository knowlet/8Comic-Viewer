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

window.addEventListener("load", function() {
    exec(function() {
        var cc = cs.length;
        var content = document.getElementById("TheImg").parentNode;
        document.getElementById("TheImg").remove();
        for (var i = 1; i <= ps; ++i) {
            content.appendChild(document.createElement("img"));
            content.getElementsByTagName("img")[i-1].src = 'http://img' + ss(c, 4, 2) + '.8comic.com/' + ss(c, 6, 1) + '/' + ti + '/' + ss(c, 0, 4) + '/' + nn(i) + '_' + ss(c, mm(i) + 10, 3, f) + '.jpg';
            content.appendChild(document.createElement("br"));
        }
        prev2.innerText = "[ 上一話 ]";
        prev2.onclick = function onclick(event) {
            ch <= 1 && alert("前面沒有東西喔！");
            pv();
            return;
        }
        next2.innerText = "[ 下一話 ]";
        next2.onclick = function onclick(event) {
            nv();
            ch >= chs && alert("您已看完了！");
            return;
        }
    });
}, true);
