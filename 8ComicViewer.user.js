// ==UserScript==
// @name            8Comic Viewer
// @version         1.22
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
    var content = document.getElementById("TheImg").parentNode,
        cleanTable = function() {
            var x = document.getElementsByTagName("table");
            x[0].remove();
            x[0].remove();
            x[0].remove();
            x[1].remove();
            x[2].remove();
            x[3].remove();
        }, loadStyle = function() {
            var style = document.createElement("link");
            style.setAttribute("rel", "stylesheet")
            style.setAttribute("type", "text/css")
            style.setAttribute("href", "https://rawgit.com/knowlet/8Comic-Viewer/dev/css/style.css")
            document.head.appendChild(style);
        }, a = false,
        setEvent = function() {
            document.onmousemove = function(e) {
                if (a) {
                    nb.style.left = e.clientX - 20 + 'px';
                    nb.style.top = e.clientY - 50 + 'px';
                }
            };
            nb.onmousedown = function(e) {
                a = true;
            }
            document.onmouseup = function(e) {
                a = false;
            }
            btPrev.onclick = function onclick(event) {
                ch <= 1 && alert("前面沒有東西喔！");
                pv();
                return;
            }
            btMenu.onclick = function onclick(event) {
                location.assign("http://www.8comic.com/html/" + ti.toString() + ".html");
                return;
            }
            btNext.onclick = function onclick(event) {
                nv();
                ch >= chs && alert("您已看完了！") && btMenu.click();
                return;
            }
        }
    document.getElementById("TheImg").remove();
    for (var i = 1; i <= ps; ++i) {
        content.appendChild(document.createElement("img"));
        content.getElementsByTagName("img")[i - 1].setAttribute("src", 'http://img' + ss(c, 4, 2) + '.8comic.com/' + ss(c, 6, 1) + '/' + ti + '/' + ss(c, 0, 4) + '/' + nn(i) + '_' + ss(c, mm(i) + 10, 3, f) + '.jpg');
        content.appendChild(document.createElement("br"));
    }
    cleanTable();
    loadStyle();
    document.body.innerHTML = Form1.innerHTML + "<nav id='nb'><ul><li id='btPrev'><img src='https://raw.githubusercontent.com/knowlet/8Comic-Viewer/dev/img/pv.png' alt='上一卷（話）'/></li><li id='btMenu'><img src='https://raw.githubusercontent.com/knowlet/8Comic-Viewer/dev/img/mu.png' alt='全集列表'/></li><li id='btNext'><img src='https://raw.githubusercontent.com/knowlet/8Comic-Viewer/dev/img/nv.png' alr='下一卷（話）'/></li></ul></nav>";
    setEvent();
});