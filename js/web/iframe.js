var browserVersion = window.navigator.userAgent.toUpperCase();
var isOpera = browserVersion.indexOf("OPERA") > -1 ? true : false;
var isFireFox = browserVersion.indexOf("FIREFOX") > -1 ? true : false;
var isChrome = browserVersion.indexOf("CHROME") > -1 ? true : false;
var isSafari = browserVersion.indexOf("SAFARI") > -1 ? true : false;
var isIE = (!!window.ActiveXObject || "ActiveXObject" in window);
var isIE9More = (! -[1, ] == false);
function reinitIframe(iframeId, minHeight) {
    try {
        var iframe = document.getElementById(iframeId);
        var bHeight = 0;
        if (isChrome == false && isSafari == false)
            bHeight = iframe.contentWindow.document.body.scrollHeight;

        var dHeight = 0;
        if (isFireFox == true)
            dHeight = iframe.contentWindow.document.documentElement.offsetHeight + 2;
        else if (isIE == false && isOpera == false)
            dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        else if (isIE == true && isIE9More) {//ie9+
            var heightDeviation = bHeight - eval("window.IE9MoreRealHeight" + iframeId);
            if (heightDeviation == 0) {
                bHeight += 3;
            } else if (heightDeviation != 3) {
                eval("window.IE9MoreRealHeight" + iframeId + "=" + bHeight);
                bHeight += 3;
            }
        }
        else//ie[6-8]、OPERA
            bHeight += 3;

        var height = Math.max(bHeight, dHeight);
        if (height < minHeight) height = minHeight;
        console.log("height:"+height);
        iframe.style.height = height + "px";
    } catch (ex) { }
}
function getUrlPar(strName) {
    var svalue = location.search.match(new RegExp("[\?\&]" + strName + "=([^\&]*)(\&?)", "i"));
    return svalue ? svalue[1] : svalue;
};


function SetWinHeight(obj){
    //alert($("body",window.parent.document).height());
 var win=obj;
 if (document.getElementById){
  if (win && !window.opera){
   if (win.contentDocument && win.contentDocument.body.offsetHeight) {
    win.style.height = win.contentDocument.body.offsetHeight+55+'px';
    console.log("11:"+win.contentDocument.body.offsetHeight);
//    win.height = $("body",window.parent.document).height(); 
   }else if(win.Document && win.Document.body.scrollHeight){
       win.style.height = win.Document.body.scrollHeight+55+'px';
    console.log('22:'+win.Document.body.scrollHeight);
// win.height = $("body",window.parent.document).height(); 
   }
  }
 }
}

function SetIframeHeight(){
	SetWinHeight(document.getElementById('mainFrame'));
}
