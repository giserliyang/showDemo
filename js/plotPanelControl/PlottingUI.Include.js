﻿(function() {
   // var isWinRT = (typeof Windows === "undefined") ? false : true;
    var r = new RegExp("(^|(.*?\\/))(PlottingUI.Include\.js)(\\?|$)"),
    s = document.getElementsByTagName('script'),
    src, m, baseurl = "";
    for(var i=0, len=s.length; i<len; i++) {
        src = s[i].getAttribute('src');
        if(src) {
            var m = src.match(r);
            if(m) {
                baseurl = m[1];
                break;
            }
        }
    }
    function inputScript(inc){
       // if (!isWinRT) {
            var script = '<' + 'script type="text/javascript" src="' + inc + '"' + '><' + '/script>';
            document.writeln(script);
   //     } else {
   //         var script = document.createElement("script");
    //        script.src = inc;
    //        document.getElementsByTagName("HEAD")[0].appendChild(script);
      //  }
    }
    //加载类库资源文件
    function loadSMLibs() {
        inputScript(baseurl+'PlottingUI.js');
    }
    loadSMLibs();
    window.isLocalPlot = true;//更新管网包时，需要将此变量修改为false
    window.plotServer = document.location.toString().match(/file:\/\//) ? 'http://localhost:8090' : document.location.protocol + '//' + document.location.host;
    window.plotVersion = "11.2.0";
})();
