function setTab(name,cursel,n){for(i=0;i<=n;i++){try{var menu=document.getElementById(name+i);menu.className=i==cursel?"hover":"";var con=document.getElementById("con_"+name+"_"+i);con.style.display=i==cursel?"block":"none";}catch(e){}
SetIframeHeight();}}
var pauseTime=3000;var timer;function clip_Switch(name,cursel,tNum){for(i=1;i<=tNum;i++){var menu=document.getElementById(name+i);var con=document.getElementById("con_"+name+"_"+i);menu.className=i==cursel?"hover":"";con.style.display=i==cursel?"block":"none";}}
function fwdScroll(name,scrollCt,tNum){stopScroll();clip_Switch(name,scrollCt,tNum);scrollCt+=1;if(scrollCt==tNum){scrollCt=1;}
timer=setTimeout("fwdScroll('"+name+"',"+scrollCt+","+tNum+")",pauseTime);}
function stopScroll(){clearTimeout(timer);}
function bwdScroll(name,scrollCt,tNum){stopScroll();scrollCt+=1;if(scrollCt==tNum+1){scrollCt=1;}
clip_Switch(name,scrollCt,tNum);timer1=setTimeout("bwdScroll('"+name+"',"+scrollCt+","+tNum+")",pauseTime);}