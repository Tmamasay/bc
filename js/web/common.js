function selectAll(obj)
{jQuery(":checkbox[id!='"+obj+"']").attr("checked",jQuery("#"+obj).attr("checked"));}
function Combination(n,m)
{m=parseInt(m);n=parseInt(n);if(m<0||n<0)
{return false;}
if(m==0||n==0)
{return 1;}
if(m>n)
{return 0;}
if(m>n/2.0)
{m=n-m;}
var result=0.0;for(i=n;i>=(n-m+1);i--){result+=Math.log(i);}
for(i=m;i>=1;i--){result-=Math.log(i);}
result=Math.exp(result);return Math.round(result);}
Array.prototype.each=function(fn){fn=fn||Function.K;var a=[];var args=Array.prototype.slice.call(arguments,1);for(var i=0;i<this.length;i++){var res=fn.apply(this,[this[i],i].concat(args));if(res!=null)a.push(res);}
return a;};Array.prototype.uniquelize=function(){var ra=new Array();for(var i=0;i<this.length;i++){if(!ra.contains(this[i])){ra.push(this[i]);}}
return ra;};Array.complement=function(a,b){return Array.minus(Array.union(a,b),Array.intersect(a,b));};Array.intersect=function(a,b){return a.uniquelize().each(function(o){return b.contains(o)?o:null});};Array.minus=function(a,b){return a.uniquelize().each(function(o){return b.contains(o)?null:o});};Array.union=function(a,b){return a.concat(b).uniquelize();};Array.prototype.contains=function(element){for(var i=0;i<this.length;i++){if(this[i]==element){return true;}}
return false;}
function GetCombinCount(iBaseNumber,iSelectNumber){if(iSelectNumber>iBaseNumber){return 0;}
if(iBaseNumber==iSelectNumber||iSelectNumber==0){return 1;}
if(iSelectNumber==1){return iBaseNumber;}
var iNumerator=1;var iDenominator=1;for(var i=0;i<iSelectNumber;i++){iNumerator*=iBaseNumber-i;iDenominator*=iSelectNumber-i;}
return iNumerator/iDenominator;}
function movestring(sString){var top='';var middle='01'
var bottom='';var tmpone='';var tmptwo='';var find=false;var findfirst=false;for(var m=0;m<sString.length;m++){if(find==false){top+=sString.substr(m,1);}
if(find==false&&sString.substr(m,1)=='1'){findfirst=true;}else if(find==false&&findfirst==true&&sString.substr(m,1)=='0'){find=true;}else if(find==true){bottom+=sString.substr(m,1);}}
top=top.substr(0,top.length-2);for(var n=0;n<top.length;n++){if(top.substr(n,1)=='1'){tmpone+=top.substr(n,1);}else if(top.substr(n,1)=='0'){tmptwo+=top.substr(n,1);}}
top=tmpone+tmptwo;return top+middle+bottom;}
function getCombination(aBaseArray,iSelectNum){var iBaseNum=aBaseArray.length;var aResult=new Array();var aString=new Array();if(iSelectNum>iBaseNum){return aResult;}
if(iSelectNum==1){return aBaseArray;}
if(iBaseNum==iSelectNum){aResult[0]=aBaseArray.join(",");return aResult;}
var sString='';var sLastString='';var sTempStr='';for(var i=0;i<iSelectNum;i++){sString+='1';sLastString+='1';}
for(var j=0;j<iBaseNum-iSelectNum;j++){sString+='0';}
for(var k=0;k<iSelectNum;k++){sTempStr+=aBaseArray[k]+',';}
aResult[0]=sTempStr.substr(0,sTempStr.length-1);var count=1;sTempStr='';while(sString.substr(sString.length-iSelectNum,iSelectNum)!=sLastString){sString=movestring(sString);for(var k=0;k<iBaseNum;k++){if(sString.substr(k,1)=='1'){sTempStr+=aBaseArray[k]+',';}}
aResult[count]=sTempStr.substr(0,sTempStr.length-1);sTempStr='';count++;}
return aResult;}
function validateUserName(str)
{var patrn=/^[0-9a-zA-Z]{6,16}$/;if(patrn.exec(str)){return true;}else{return false;}}
function validateUserPss(str)
{var patrn=/^[0-9a-zA-Z]{6,16}$/;if(!patrn.exec(str)){return false;}
patrn=/^\d+$/;if(patrn.exec(str)){return false;}
patrn=/^[a-zA-Z]+$/;if(patrn.exec(str)){return false;}
patrn=/(.)\1{2,}/;if(patrn.exec(str)){return false;}
return true;}
function validateNickName(str)
{var patrn=/^(.){2,6}$/;if(patrn.exec(str))
{return true;}
else
{return false;}}
function validateInputDate(str)
{str=jQuery.trim(str);if(str==""||str==null)
{return true;}
var tempArr=str.split(" ");var dateArr=new Array();var timeArr=new Array();if(tempArr[0].indexOf("-")!=-1)
{dateArr=tempArr[0].split("-");}
else if(tempArr[0].indexOf("/")!=-1)
{dateArr=tempArr[0].split("/");}
else
{if(tempArr[0].toString().length<8)
{return false;}
dateArr[0]=tempArr[0].substring(0,4);dateArr[1]=tempArr[0].substring(4,6);dateArr[2]=tempArr[0].substring(6,8);}
if(tempArr[1]==undefined||tempArr[1]==null)
{tempArr[1]="00:00:00";}
if(tempArr[1].indexOf(":")!=-1)
{timeArr=tempArr[1].split(":");}
if(dateArr[2]!=undefined&&(dateArr[0]==""||dateArr[1]==""))
{return false;}
if(dateArr[1]!=undefined&&dateArr[0]=="")
{return false;}
if(timeArr[2]!=undefined&&(timeArr[0]==""||timeArr[1]==""))
{return false;}
if(timeArr[1]!=undefined&&timeArr[0]=="")
{return false;}
dateArr[0]=(dateArr[0]==undefined||dateArr[0]=="")?1970:dateArr[0];dateArr[1]=(dateArr[1]==undefined||dateArr[1]=="")?0:(dateArr[1]-1);dateArr[2]=(dateArr[2]==undefined||dateArr[2]=="")?0:dateArr[2];timeArr[0]=(timeArr[0]==undefined||timeArr[0]=="")?0:timeArr[0];timeArr[1]=(timeArr[1]==undefined||timeArr[1]=="")?0:timeArr[1];timeArr[2]=(timeArr[2]==undefined||timeArr[2]=="")?0:timeArr[2];var newDate=new Date(dateArr[0],dateArr[1],dateArr[2],timeArr[0],timeArr[1],timeArr[2]);if(newDate.getFullYear()==dateArr[0]&&newDate.getMonth()==dateArr[1]&&newDate.getDate()==dateArr[2]&&newDate.getHours()==timeArr[0]&&newDate.getMinutes()==timeArr[1]&&newDate.getSeconds()==timeArr[2])
{return true;}
else
{return false;}
return true;}
function checkMoney(obj)
{obj.value=formatFloat(obj.value);}
function checkWithdraw(obj,chineseid,maxnum)
{obj.value=formatFloat(obj.value);if(parseFloat(obj.value)>parseFloat(maxnum))
{alert("输入金额超出了可用余额");obj.value=maxnum;}
jQuery("#"+chineseid).html(changeMoneyToChinese(obj.value));}
function formatFloat(num)
{num=num.replace(/^[^\d]/g,'');num=num.replace(/[^\d.]/g,'');num=num.replace(/\.{2,}/g,'.');num=num.replace(".","$#$").replace(/\./g,"").replace("$#$",".");if(num.indexOf(".")!=-1)
{var data=num.split('.');num=(data[0].substr(0,15))+'.'+(data[1].substr(0,4));}
else
{num=num.substr(0,15);}
return num;}
function moneyFormat(num)
{var sign=Number(num)<0?"-":"";num=num.toString();if(num.indexOf(".")==-1)
{num=""+num+".0000";}
var data=num.split('.');data[0]=data[0].toString().replace(/[^\d]/g,"").substr(0,15);data[0]=Number(data[0]).toString();var newnum=[];for(var i=data[0].length;i>0;i-=3)
{newnum.unshift(data[0].substring(i,i-3));}
data[0]=newnum.join(",");data[1]=data[1].toString().substr(0,4);return sign+""+data[0]+"."+data[1];}
function JsRound(num,len,keep)
{len=parseInt(len,10);if(len<0)
{len=Math.abs(len);return Math.round(Number(num)/Math.pow(10,len))*Math.pow(10,len);}
else if(len==0)
{return Math.round(Number(num));}
num=Math.round(Number(num)*Math.pow(10,len))/Math.pow(10,len);if(keep&&keep==true)
{var t='',i=0;num=num.toString();if(num.indexOf(".")==-1)
{num=""+num+".0";}
data=num.split('.');for(i=data[1].length;i<len;i++)
{t+=''+'0';}
return''+num+''+t;}
return num;}
function changeMoneyToChinese(money)
{var cnNums=new Array("零","壹","贰","叁","肆","伍","陆","柒","捌","玖");var cnIntRadice=new Array("","拾","佰","仟");var cnIntUnits=new Array("","万","亿","兆");var cnDecUnits=new Array("角","分","厘","毫");var cnInteger="整";var cnIntLast="元";var maxNum=999999999999999.9999;var IntegerNum;var DecimalNum;var ChineseStr="";var parts;var i,m;if(money=="")
{return"";}
money=parseFloat(money);if(money>=maxNum)
{alert('超出最大处理数字');return"";}
if(money==0)
{ChineseStr=cnNums[0]+cnIntLast+cnInteger;return ChineseStr;}
money=money.toString();if(money.indexOf(".")==-1)
{IntegerNum=money;DecimalNum='';}
else
{parts=money.split(".");IntegerNum=parts[0];DecimalNum=parts[1].substr(0,4);}
if(parseInt(IntegerNum,10)>0)
{zeroCount=0;IntLen=IntegerNum.length;for(i=0;i<IntLen;i++)
{n=IntegerNum.substr(i,1);p=IntLen-i-1;q=p/4;m=p%4;if(n=="0")
{zeroCount++;}
else
{if(zeroCount>0)
{ChineseStr+=cnNums[0];}
zeroCount=0;ChineseStr+=cnNums[parseInt(n)]+cnIntRadice[m];}
if(m==0&&zeroCount<4)
{ChineseStr+=cnIntUnits[q];}}
ChineseStr+=cnIntLast;}
if(DecimalNum!='')
{decLen=DecimalNum.length;for(i=0;i<decLen;i++)
{n=DecimalNum.substr(i,1);if(n!='0')
{ChineseStr+=cnNums[Number(n)]+cnDecUnits[i];}}}
if(ChineseStr=='')
{ChineseStr+=cnNums[0]+cnIntLast+cnInteger;}
else if(DecimalNum=='')
{ChineseStr+=cnInteger;}
return ChineseStr;}
function replaceHTML(str)
{str=str.replace(/[&]/g,'&amp;');str=str.replace(/[\"]/g,'&quot;');str=str.replace(/[\']/g,'&#039;');str=str.replace(/[<]/g,'&lt;');str=str.replace(/[>]/g,'&gt;');str=str.replace(/[ ]/g,'&nbsp;');return str;}
function replaceHTML_DECODE(str)
{str=str.replace(/&amp;/g,'&');str=str.replace(/&quot;/g,'"');str=str.replace(/&#039;/g,'\'');str=str.replace(/&lt;/g,'<');str=str.replace(/&gt;/g,'>');str=str.replace(/&nbsp;/g,' ');return str;}
function SetCookie(name,value,expire){var exp=new Date();exp.setTime(exp.getTime()+expire);document.cookie=name+"="+escape(value)+";expires="+exp.toGMTString();}
function getCookie(name){var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));if(arr!=null)return unescape(arr[2]);return null;}
function delCookie(name){var exp=new Date();exp.setTime(exp.getTime()-1);var cval=getCookie(name);if(cval!=null)document.cookie=name+"="+cval+";expires="+exp.toGMTString();}
function copyToClipboard(obj)
{txt=jQuery("#"+obj).html();if(window.clipboardData)
{window.clipboardData.clearData();window.clipboardData.setData("Text",txt);}
else if(navigator.userAgent.indexOf("Opera")!=-1)
{window.location=txt;}
else if(window.netscape)
{try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");}
catch(e)
{alert("您的firefox安全限制限制您进行剪贴板操作，请在地址栏中输入“about:config”将“signed.applets.codebase_principal_support”设置为“true”之后重试");return false;}
var clip=Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);if(!clip)
{return;}
var trans=Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);if(!trans)
{return;}
trans.addDataFlavor('text/unicode');var str=new Object();var len=new Object();var str=Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);var copytext=txt;str.data=copytext;trans.setTransferData("text/unicode",str,copytext.length*2);var clipid=Components.interfaces.nsIClipboard;if(!clip)
{return false;}
clip.setData(trans,null,clipid.kGlobalClipboard);}}
function checkIntWithdraw(obj,chineseid,maxnum){obj.value=parseInt(obj.value,10);obj.value=isNaN(obj.value)?0:obj.value;if(parseFloat(obj.value)>parseFloat(maxnum)){obj.value=parseInt(maxnum,10);}
jQuery("#"+chineseid).html(changeMoneyToChinese(obj.value));}
function checkemailWithdraw(obj,chineseid,maxnum){obj.value=formatFloat(obj.value);if(parseFloat(obj.value)>parseFloat(maxnum)){alert("充值金额不能高于最高充值限额");obj.value=maxnum;}
if(obj.value.substr(0,1)=='0'){obj.value=obj.value.substr(1);}
jQuery("#"+chineseid).html(changeMoneyToChinese(obj.value));}