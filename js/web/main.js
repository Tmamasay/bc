function getUrlPar(strName) { var svalue = location.search.match(new RegExp("[\?\&]" + strName + "=([^\&]*)(\&?)", "i")); return svalue ? svalue[1] : svalue; }
var cur_cz = 1; var cur_methord = "0"; var cur_c_methord = "0"; var cur_jqjq = []; function validateUserName(str) {
    var partern = /(.)\1{3,}/; if (partern.exec(str)) { return false; }
    var patrn = /^[0-9a-zA-Z]{6,16}$/; if (patrn.exec(str)) { return true; } else { return false; }
}
function isinarr(arrstr, num) {
    var arr = arrstr.split(","); var index = -1; for (var i = 0; i < arr.length; i++) { if (num == arr[i]) { index = i; return index; } }
    return index;
}
function getcz() { var ssc = "1,3,6,14,15,16,18,19,26,28,29,31,22,36,41"; var llx5 = "5,7,8,10,21,33,40,48"; var three3d = "11,12,17"; var pk10 = "27,34"; var obj = {}; obj.isssc = isinarr(ssc, cur_cz) > -1 ? 1 : 0; obj.isllx5 = isinarr(llx5, cur_cz) > -1 ? 1 : 0; obj.is3d = isinarr(three3d, cur_cz) > -1 ? 1 : 0; obj.isjsks = cur_cz == 20 ? 1 : 0; obj.isjsks = cur_cz == 30 ? 1 : obj.isjsks; obj.isjsks = cur_cz == 35 ? 1 : obj.isjsks; obj.ispk10 = isinarr(pk10, cur_cz) > -1 ? 1 : 0; return obj; }
function getmid() {
    var mid = 0; var obj = getcz(); mid = cur_methord.indexOf("前三") > -1 ? 1 : mid; mid = cur_methord.indexOf("后三") > -1 ? 2 : mid; mid = cur_methord.indexOf("前二") > -1 ? 3 : mid; mid = cur_methord.indexOf("后二") > -1 ? 4 : mid; mid = cur_methord.indexOf("四星") > -1 ? 5 : mid; mid = cur_methord.indexOf("中三") > -1 ? 6 : mid; mid = cur_methord.indexOf("三码") == 0 ? 7 : mid; mid = cur_methord.indexOf("猜冠军") == 0 ? 8 : mid; mid = cur_methord.indexOf("猜冠亚军") == 0 ? 9 : mid; if (isinarr("二码,不定胆,大小单双", cur_methord) > -1 && cur_cz != 27) { mid = cur_c_methord.indexOf("前三") > -1 ? 1 : mid; mid = cur_c_methord.indexOf("后三") > -1 ? 2 : mid; mid = cur_c_methord.indexOf("前二") > -1 ? 3 : mid; mid = cur_c_methord.indexOf("后二") > -1 ? 4 : mid; }
    if (cur_methord.indexOf("定位胆") > -1 && obj.isllx5) { }
    if (cur_methord.indexOf("定位胆") > -1 && obj.ispk10) {
        if (cur_c_methord.indexOf("第1") > -1) { mid = 10; } else { mid = 11; }
        if (cur_c_methord == 0) { mid = 10; }
    }
    if (cur_methord.indexOf("前四") > -1) { mid = 12; }
    if (cur_methord.indexOf("前五") > -1) { mid = 10; }
    if (cur_methord.indexOf("不定胆") > -1) { if (obj.isllx5) { mid = 1; } else if (obj.isssc) { mid = 2; } else { mid = 0; } }
    if (cur_c_methord.indexOf("冠亚和值") > -1) { mid = 9; }
    return mid;
}
function getForm(code, type, gaparr) {
    var iscz = getcz(); var codearr = []; if (iscz.isllx5 || iscz.ispk10) { codearr = code.split(" "); } else { codearr = code.split(""); }
    var ncodearr = []; for (var i = gaparr[0] + 1; i < gaparr[1]; i++) { ncodearr.push(parseInt(codearr[i])); }
    var cstr = "-"; var str = ""; var sum = 0; if (type == "zx") { if (isinarr("组三,组六,混合组选", cur_c_methord) > -1) { type = "z3or6"; } else { type = cur_c_methord.replace("组选", "z").replace(" ", ""); } }
    switch (type) {
        case "z120": case "z60": case "z30": case "z24": case "z20": case "z12": case "z10": case "z6": case "z5": case "z4": cstr = judgecode(ncodearr); if (cstr != type)
        { cstr = "-" }
            cstr = cstr.replace("z", ""); break; case "z3or6": cstr = judgecode(ncodearr); if (cstr != 'z3' && cstr != 'z6')
            { cstr = "-" }
                cstr = cstr.replace("z3", "组三"); cstr = cstr.replace("z6", "组六"); break; case "hz": cstr = getSum(ncodearr); break; case "dxds": cstr = ""; var da = ncodearr[0] > 4 ? "d" : "x"; var xiao = ncodearr[1] > 4 ? "d" : "x"; var dan = ncodearr[0] % 2 == 0 ? "s" : "d"; var shuang = ncodearr[1] % 2 == 0 ? "s" : "d"; var qe = da + dan; var he = xiao + shuang; qe = qe.toUpperCase(); he = he.toUpperCase(); cstr = "<i class=\"" + qe + "\"></i><i class=\"" + he + "\"></i>"; break; case "jsksdx": sum = getSum(ncodearr); cstr = sum < 11 ? "小" : "大"; break; case "jsksds": sum = getSum(ncodearr); cstr = sum % 2 == 0 ? "双" : "单"; break; case "kd": ncodearr.sort(); cstr = ncodearr[ncodearr.length - 1] - ncodearr[0]; break;
    }
    alert("main.js="+cstr)
    return cstr;
}
function getSum(codearr) {
    var sum = 0; for (var i = 0; i < codearr.length; i++) { sum += codearr[i]; }
    return sum;
}
function judgecode(codearr) {
    var result = []; var len = codearr.length; for (var i = 0; i < len; i++) {
        if (i == 0) { result.push(1); } else {
            for (var j = 0; j < i; j++) {
                if (codearr[i] == codearr[j]) {
                    if (result.length > j) { result[j] += 1; } else { result[result.length - 1] += 1; }
                    break;
                } else { if (result.length < i + 1 && j == i - 1) { result.push(1); break; } }
            }
        }
    }
    var len1 = result.length; var str = "-"; switch (len) {
        case 3: if (len1 == 2) { str = "z3"; } else if (len1 == 3) { str = "z6"; }
            break; case 4: if (len1 == 2) { if (result[0] == 2) { str = "z6"; } else { str = "z4"; } } else if (len1 == 3) { str = "z12"; } else if (len1 == 4) { str = "z24"; }
                break; case 5: if (len1 == 2) { if (result[0] == 3 || result[1] == 3) { str = "z10"; } else { str = "z5"; } } else if (len1 == 3) { if (result[0] == 3 || result[1] == 3 || result[2] == 3) { str = "z20"; } else { str = "z30"; } } else if (len1 == 4) { str = "z60"; } else if (len1 == 5) { str = "z120"; }
                    break;
    }
    return str;
}
function getcodegap(mid) {
    var iscz = getcz(); var begin = -1; var end = 5; if (iscz.is3d || iscz.isjsks) { end = 3; }
    var iscz = getcz(); switch (mid) {
        case 1: end = 3; break; case 2: begin = 1; break; case 3: end = 2; break; case 4: if (iscz.is3d) { begin = 0; } else { begin = 2; }
            break; case 5: begin = 0; break; case 6: begin = 0; end = 4; break; case 7: end = 3; break; case 8: break; case 9: end = 2; break;
    }
    return [begin, end];
}
function changeCssOfcode(max, mid, isssc, isllx5, is3d) {
    for (var j = 0; j < max; j++) {
        $(".code" + j).removeClass('mark'); switch (mid) {
            case 1: if (j < 3) { $(".code" + j).addClass('mark'); }
                break; case 2: if (j > 1) { $(".code" + j).addClass('mark'); }
                    break; case 3: if (j < 2) { $(".code" + j).addClass('mark'); }
                        break; case 4: if (!is3d && j > 2) { $(".code" + j).addClass('mark'); }
                            if (is3d && j > 0) { $(".code" + j).addClass('mark'); }
                            break; case 5: if (j > 0) { $(".code" + j).addClass('mark'); }
                                break; case 6: if (j > 0 && j < 4) { $(".code" + j).addClass('mark'); }
                                    break; case 7: if (j < 3 && isllx5) { $(".code" + j).addClass('mark'); }
                                        break; case 8: if (j < 1) { $(".code" + j).addClass('mark'); }
                                            break; case 9: if (j < 2) { $(".code" + j).addClass('mark'); }
                                                break; case 10: if (j < 5) { $(".code" + j).addClass('mark'); }
                                                    break; case 11: if (j > 4) { $(".code" + j).addClass('mark'); }
                                                        break; case 12: if (j < 4) { $(".code" + j).addClass('mark'); }
                                                            break;
        }
    }
}
function changeFormTitle(type) { if (type == "zx") { $("#tzxt").html("组选"); } else if (type == "hz") { $("#tzxt").html("和值"); } else if (type == "dxds") { $("#tzxt").html("单双"); } else if (type == "jsksdx") { $("#tzxt").html("大小"); } else if (type == "jsksds") { $("#tzxt").html("单双"); } else if (type == "kd") { $("#tzxt").html("跨度"); } else { $("#tzxt").html("形态"); } }
function changecssofform(type) {
    var mid = getmid(); var iscz = getcz(); if (iscz.isllx5) { return; }
    var gaparr = getcodegap(mid); console.log("mid：" + mid); var str = "-"; changeFormTitle(type); $("#tzxt").css("display", "inline-block"); $(".tzjq").css('width', '30%'); for (var i = 0; i < cur_jqjq.length; i++) {
        str = getForm(cur_jqjq[i].code, type, gaparr); var obj = $("#WinnerNumList_div").find("li").eq(i).find("span").eq(2)
        $("#WinnerNumList_div").find("li").eq(i).find("span").eq(0).css("width", "30%"); obj.css("display", "inline-block"); obj.html(str); if (str == "组三" && cur_c_methord == "组三") { obj.addClass('numberType'); } else if (str == "组六" && cur_c_methord == "组六") { obj.addClass('numberType'); } else { obj.removeClass('numberType'); obj.css("width", "18%"); }
        if (type == "dxds") { obj.css("width", "20%"); obj.addClass('dxds'); }
    }
}
function hidext() { $("#tzxt").css("display", "none"); $(".tzjq").css('width', '50%'); for (var i = 0; i < cur_jqjq.length; i++) { $("#WinnerNumList_div").find("li").eq(i).find("span").eq(0).css("width", "50%"); $("#WinnerNumList_div").find("li").eq(i).find("span").eq(2).css("display", "none"); } }
function setCookie(name, value, expire, path) {
    var curdate = new Date(); var cookie = name + "=" + encodeURIComponent(value) + "; "; if (expire != undefined || expire == 0) {
        if (expire == -1) { expire = 366 * 86400 * 1000; } else { expire = parseInt(expire); }
        curdate.setTime(curdate.getTime() + expire); cookie += "expires=" + curdate.toUTCString() + "; ";
    }
    path = path || "/"; cookie += "path=" + path; document.cookie = cookie;
}
function getCookie(name) {
    var re = "(?:; )?" + encodeURIComponent(name) + "=([^;]*);?"; re = new RegExp(re); if (re.test(document.cookie)) { return decodeURIComponent(RegExp.$1); }
    return '';
}
function chagetheme() { setCookie('skins', 'xingcai'); window.location.reload(); }
function validateUserPss(str) {
    var patrn = /^[0-9a-zA-Z]{6,16}$/; if (!patrn.exec(str)) { return false; }
    patrn = /^\d+$/; if (patrn.exec(str)) { return false; }
    patrn = /^[a-zA-Z]+$/; if (patrn.exec(str)) { return false; }
    patrn = /(.)\1{2,}/; if (patrn.exec(str)) { return false; }
    return true;
}
function validateInputDate(str) {
    str = $.trim(str); if (str == "" || str == null) { return true; }
    var tempArr = str.split(" "); var dateArr = new Array(); var timeArr = new Array(); if (tempArr[0].indexOf("-") != -1) { dateArr = tempArr[0].split("-"); } else if (tempArr[0].indexOf("/") != -1) { dateArr = tempArr[0].split("/"); } else {
        if (tempArr[0].toString().length < 8) { return false; }
        dateArr[0] = tempArr[0].substring(0, 4); dateArr[1] = tempArr[0].substring(4, 6); dateArr[2] = tempArr[0].substring(6, 8);
    }
    if (tempArr[1] == undefined || tempArr[1] == null) { tempArr[1] = "00:00:00"; }
    if (tempArr[1].indexOf(":") != -1) { timeArr = tempArr[1].split(":"); }
    if (dateArr[2] != undefined && (dateArr[0] == "" || dateArr[1] == "")) { return false; }
    if (dateArr[1] != undefined && dateArr[0] == "") { return false; }
    if (timeArr[2] != undefined && (timeArr[0] == "" || timeArr[1] == "")) { return false; }
    if (timeArr[1] != undefined && timeArr[0] == "") { return false; }
    dateArr[0] = (dateArr[0] == undefined || dateArr[0] == "") ? 1970 : dateArr[0]; dateArr[1] = (dateArr[1] == undefined || dateArr[1] == "") ? 0 : (dateArr[1] - 1); dateArr[2] = (dateArr[2] == undefined || dateArr[2] == "") ? 0 : dateArr[2]; timeArr[0] = (timeArr[0] == undefined || timeArr[0] == "") ? 0 : timeArr[0]; timeArr[1] = (timeArr[1] == undefined || timeArr[1] == "") ? 0 : timeArr[1]; timeArr[2] = (timeArr[2] == undefined || timeArr[2] == "") ? 0 : timeArr[2]; var newDate = new Date(dateArr[0], dateArr[1], dateArr[2], timeArr[0], timeArr[1], timeArr[2]); if (newDate.getFullYear() == dateArr[0] && newDate.getMonth() == dateArr[1] && newDate.getDate() == dateArr[2] && newDate.getHours() == timeArr[0] && newDate.getMinutes() == timeArr[1] && newDate.getSeconds() == timeArr[2]) { return true; } else { return false; }
    return true;
}
function srip2tInit() {
    if (sriptSetInterval1) clearInterval(sriptSetInterval1); $("#newsList li:odd").addClass("odd"); $("#newsList li:even").addClass("even"); $(".formTable tr:odd").addClass("odd"); $(".formTable tr:even").addClass("even"); $(".grayTable tr th:first-child").css("borderLeft", "1px solid #D5D8DE"); $(".grayTable tr td:first-child").css("borderLeft", "1px solid #EFEFEF"); $(".grayTable tr td:last-child").css("borderRight", "1px solid #EFEFEF"); $("#checkAll").click(function () { if (this.checked) $('input[type=checkbox][name=items]').attr("checked", true); else $('input[type=checkbox][name=items]').attr("checked", false); }); var tyAll = false; $("#tyAll1").click(function () { $('input[type=checkbox][name=tyAll]').attr("checked", true); var value = $("#tyText1").val(); $('input[type=text][name=tyText1]').val(value); tyAll = true; }); $("#tyAll2").click(function () { $('input[type=checkbox][name=tyAll]').attr("checked", true); var value = $("#tyText2").val(); $('input[type=text][name=tyText2]').val(value); tyAll = true; }); $("#tyText1").keyup(function () { if (tyAll) { var value = $(this).val(); $('input[type=text][name=tyText1]').val(value); } }).keyup(); $("#tyText2").keyup(function () { if (tyAll) { var value = $(this).val(); $('input[type=text][name=tyText2]').val(value); } }).keyup(); $("#setDetail").click(function () {
        var allbacksetHeight = parseInt($("#allbackset").css("height"))
        if (allbacksetHeight == 0) { $(this).val("收起详细"); $('#allbackset').animate({ height: '430px' }, 500, function () { }); }
        else { $(this).val("详细设置"); $('#allbackset').animate({ height: '0px' }, 500, function () { }); }
    }); $("#starttime").dynDateTime({ ifFormat: "%Y-%m-%d %H:%M", daFormat: "%l;%M %p, %e %m,  %Y", align: "Br", electric: true, singleClick: false, button: ".next()", onUpdate: function () { $("#starttime").change(); }, showOthers: true, weekNumbers: true, showsTime: true }); $("#starttime").change(function () {
        if (!validateInputDate($("#starttime").val()))
        { $("#starttime").val(''); $.alert("时间格式不正确,正确的格式为:2009-06-10 10:59"); }
        if ($("#endtime").val() != "") {
            if ($("#starttime").val() > $("#endtime").val())
            { $("#starttime").val(""); $.alert("输入的时间不符合逻辑"); }
        }
    }); $("#endtime").dynDateTime({ ifFormat: "%Y-%m-%d %H:%M", daFormat: "%l;%M %p, %e %m,  %Y", align: "Br", electric: true, singleClick: false, button: ".next()", onUpdate: function () { $("#endtime").change(); }, showOthers: true, weekNumbers: true, showsTime: true }); $("#endtime").change(function () {
        if (!validateInputDate($("#endtime").val()))
        { $("#endtime").val(''); $.alert("时间格式不正确,正确的格式为:2009-06-10 10:59"); }
        if ($("#starttime").val() != "") {
            if ($("#starttime").val() > $("#endtime").val())
            { $("#endtime").val(""); $.alert("输入的时间不符合逻辑"); }
        }
    });
}
function validateUserPss(str) {
    var patrn = /^[0-9a-zA-Z]{6,16}$/g; if (!patrn.exec(str)) { return false; }
    patrn = /^\d+$/g; if (patrn.exec(str)) { return false; }
    patrn = /^[a-zA-Z]+$/g; if (patrn.exec(str)) { return false; }
    return true;
}
function changeAddress(obj, trl) {
    if (trl == 'emaildeposit') { if (obj == 'icbcChongzhi') { $("#siderbar li:nth-child(1)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 工行充值'); } else if (obj == 'abcChongzhi') { $("#siderbar li:nth-child(2)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 农行充值'); } else if (obj == 'ccbChongzhi') { $("#siderbar li:nth-child(3)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 建行充值'); } else if (obj == 'tenpaychongzhi') { $("#siderbar li:nth-child(4)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 财付通充值'); } else if (obj == 'platwithdraw') { $("#siderbar li:nth-child(5)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 我要提现'); } }
    else if (trl == 'userCenter') { if (obj == 'userset') { $("#siderbar li:nth-child(1)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 频道设定'); } else if (obj == 'changeloginpass') { $("#siderbar li:nth-child(2)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 修改密码'); } else if (obj == 'changename') { $("#siderbar li:nth-child(3)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 修改昵称'); } else if (obj == 'emailbind') { $("#siderbar li:nth-child(4)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 邮箱绑定'); } else if (obj == 'userbankinfo') { $("#siderbar li:nth-child(5)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 卡号绑定'); } else if (obj == 'myEmails') { $("#siderbar li:nth-child(6)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 我的消息'); } else if (obj == 'userlist') { $("#siderbar li:nth-child(7)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表'); } else if (obj == 'userlist_yhxx') { $("#siderbar li:nth-child(7)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 用户信息'); } else if (obj == 'userlist_td') { $("#siderbar li:nth-child(7)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 团队'); } else if (obj == 'userlist_cz') { $("#siderbar li:nth-child(7)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 彩种设置'); } else if (obj == 'userlist_yxzb') { $("#siderbar li:nth-child(7)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 游戏账变'); } else if (obj == 'userlist_czjl') { $("#siderbar li:nth-child(7)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 充值记录'); } else if (obj == 'userlist_dj') { $("#siderbar li:nth-child(7)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 冻结'); } else if (obj == 'userlist_cz') { $("#siderbar li:nth-child(7)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 充值'); } else if (obj == 'openadmin') { $("#siderbar li:nth-child(8)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 开户管理'); } else if (obj == 'adduser') { $("#siderbar li:nth-child(9)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 增加用户'); } }
    else if (trl == 'gameinfo') { if (obj == 'gamelist') { $("#siderbar li:nth-child(1)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 游戏记录 <span class="st"> > </span> 购彩查询'); } else if (obj == 'task') { $("#siderbar li:nth-child(2)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 游戏记录 <span class="st"> > </span> 追号查询'); } }
    else if (trl == 'report') { if (obj == 'checkbalance') { $("#siderbar li:nth-child(1)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 余额查询'); } else if (obj == 'bankreport') { $("#siderbar li:nth-child(2)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 充提记录'); } else if (obj == 'orders') { $("#siderbar li:nth-child(3)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 游戏账变'); } else if (obj == 'userpoint') { $("#siderbar li:nth-child(4)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 返点总额'); } else if (obj == 'list') { $("#siderbar li:nth-child(5)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 报表查询'); } }
    else if (trl == 'help') { if (obj == 'noticelist') { $("#siderbar li:nth-child(1)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 新手指南 <span class="st"> > </span> 公告列表'); } else if (obj == 'noticeDetail') { $("#siderbar li:nth-child(1)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 新手指南 <span class="st"> > </span> 公告列表 <span class="st"> > </span> 详细'); } else if (obj == 'playinfo') { $("#siderbar li:nth-child(2)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 新手指南 <span class="st"> > </span> 玩法介绍'); } else if (obj == 'answer') { $("#siderbar li:nth-child(3)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 新手指南 <span class="st"> > </span> 常见问题'); } }
}
function validateNickName(str)
{ var patrn = /^.{2,10}$/g; if (patrn.exec(str)) { return true; } else { return false; } }
function siderbarInit(obj, trl, tag) {
    if (trl == 'emaildeposit') { $("#siderbar .title").html('充值提现'); $("#mainContent .topName").html('充值提现'); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现'); $("#siderbar .list").html("<li><a href=javascript:void(0) onclick=ListClick('chongzhi','emaildeposit','mdeposit') id=mdeposit>工行充值</a></li>"); $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('chongzhi','emaildeposit','abc') id=abc>农行充值</a></li>"); $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('chongzhi','emaildeposit','ccb') id=ccb>建行充值</a></li>"); $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('chongzhi','emaildeposit','tenpay') id=tenpay>财付通充值</a></li>"); $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('platwithdraw','security','platwithdraw') id=platwithdraw>我要提现</a></li>"); if (tag == 'mdeposit') { $("#siderbar li:nth-child(1)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 工行充值'); } else if (tag == 'abc') { $("#siderbar li:nth-child(2)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 农行充值'); } else if (tag == 'ccb') { $("#siderbar li:nth-child(3)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 建行充值'); } else if (tag == 'tenpay') { $("#siderbar li:nth-child(4)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 财付通充值'); } else if (tag == 'platwithdraw') { $("#siderbar li:nth-child(5)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 充值提现 <span class="st"> > </span> 我要提现'); } }
    else if (trl == 'user') { $("#siderbar .title").html('账户信息'); $("#mainContent .topName").html('账户信息'); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息'); $("#siderbar .list").html("<li><a href=javascript:void(0) onclick=ListClick('userset','user','userset') id=userset>频道设定</a></li>"); $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('changeloginpass','user','changeloginpass') id=changeloginpass>修改密码</a></li>"); $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('changename','user','changename') id=changename>修改昵称</a></li>"); $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('emailbind','user','emailbind') id=emailbind>邮箱绑定</a></li>"); $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('userbankinfo','user','userbankinfo') id=userbankinfo>卡号绑定</a></li>"); $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('myEmails','userCenter') id=myEmails>我的消息</a></li>"); $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('userlist','userCenter') id=userlist>用户列表</a></li>"); $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('openadmin','userCenter') id=openadmin>开户管理</a></li>"); $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('adduser','userCenter') id=adduser>增加用户</a></li>"); if (obj == 'userset') { $("#siderbar li:nth-child(1)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 频道设定'); } else if (obj == 'changeloginpass') { $("#siderbar li:nth-child(2)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 修改密码'); } else if (obj == 'changename') { $("#siderbar li:nth-child(3)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 修改昵称'); } else if (obj == 'emailbind') { $("#siderbar li:nth-child(4)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 邮箱绑定'); } else if (obj == 'userbankinfo') { $("#siderbar li:nth-child(5)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 卡号绑定'); } else if (obj == 'myEmails') { $("#siderbar li:nth-child(6)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 我的消息'); } else if (obj == 'userlist') { $("#siderbar li:nth-child(7)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表'); } else if (obj == 'userlist_yhxx') { $("#siderbar li:nth-child(7)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 用户信息'); } else if (obj == 'userlist_td') { $("#siderbar li:nth-child(7)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 团队'); } else if (obj == 'userlist_cz') { $("#siderbar li:nth-child(7)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 彩种'); } else if (obj == 'userlist_yxzb') { $("#siderbar li:nth-child(7)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 游戏账变'); } else if (obj == 'userlist_czjl') { $("#siderbar li:nth-child(7)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 充值记录'); } else if (obj == 'userlist_dj') { $("#siderbar li:nth-child(7)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 冻结'); } else if (obj == 'userlist_cz') { $("#siderbar li:nth-child(7)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 用户列表 <span class="st"> > </span> 充值'); } else if (obj == 'openadmin') { $("#siderbar li:nth-child(8)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 开户管理'); } else if (obj == 'adduser') { $("#siderbar li:nth-child(9)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 账户信息 <span class="st"> > </span> 增加用户'); } }
    else if (trl == 'gameinfo') { $("#siderbar .title").html('游戏记录'); $("#mainContent .topName").html('游戏记录'); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 游戏记录'); $("#siderbar .list").html("<li><a href=javascript:void(0) onclick=ListClick('gamelist','gameinfo') id=gamelist>购彩查询</a></li>"); $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('task','gameinfo') id=task>追号查询</a></li>"); if (obj == 'gamelist') { $("#siderbar li:nth-child(1)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 游戏记录 <span class="st"> > </span> 购彩查询'); } else if (obj == 'task') { $("#siderbar li:nth-child(2)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 游戏记录 <span class="st"> > </span> 追号查询'); } }
    else if (trl == 'report') { $("#siderbar .title").html('报表管理'); $("#mainContent .topName").html('报表管理'); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理'); $("#siderbar .list").html("<li><a href=javascript:void(0) onclick=ListClick('checkbalance','report') id=checkbalance>余额查询</a></li>"); $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('bankreport','report') id=bankreport>充提记录</a></li>"); $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('orders','report') id=orders>游戏账变</a></li>"); $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('userpoint','report') id=userpoint>返点总额</a></li>"); $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('list','report') id=list>报表查询</a></li>"); if (obj == 'checkbalance') { $("#siderbar li:nth-child(1)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 余额查询'); } else if (obj == 'bankreport') { $("#siderbar li:nth-child(2)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 充提记录'); } else if (obj == 'orders') { $("#siderbar li:nth-child(3)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 游戏账变'); } else if (obj == 'userpoint') { $("#siderbar li:nth-child(4)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 返点总额'); } else if (obj == 'list') { $("#siderbar li:nth-child(5)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 报表管理 <span class="st"> > </span> 报表查询'); } }
    else if (trl == 'help') { $("#siderbar .title").html('新手指南'); $("#mainContent .topName").html('新手指南'); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 新手指南'); $("#siderbar .list").html("<li><a href=javascript:void(0) onclick=ListClick('noticelist','help') id=noticelist>公告列表</a></li>"); $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('playinfo','help') id=playinfo>玩法介绍</a></li>"); $("#siderbar .list").append("<li><a href=javascript:void(0) onclick=ListClick('answer','help') id=answer>常见问题</a></li>"); if (obj == 'noticelist') { $("#siderbar li:nth-child(1)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 新手指南 <span class="st"> > </span> 公告列表'); } else if (obj == 'noticeDetail') { $("#siderbar li:nth-child(1)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 新手指南 <span class="st"> > </span> 公告列表 <span class="st"> > </span> 详细'); } else if (obj == 'playinfo') { $("#siderbar li:nth-child(2)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 新手指南 <span class="st"> > </span> 玩法介绍'); } else if (obj == 'answer') { $("#siderbar li:nth-child(3)").addClass("current"); $("#address").html('<span class="st">·</span>首页 <span class="st"> > </span> 新手指南 <span class="st"> > </span> 常见问题'); } }
}
var temp = getUrlPar("tag"); function ListClick(obj, trl, tag) {
    $("#" + tag).parents("#siderbar").find("li").removeClass("current"); $("#" + tag).parent().addClass("current"); if (tag != temp) { siderbarInit(obj, trl, tag); } else { changeAddress(obj, trl, tag); }
    temp = tag; if (tag) { var tagurl = '&tag=' + tag; }
    $("#contentBox").each(function () {
        var spanTemp = $(this); spanTemp.html('<div align=center><img src="images/mbo2012/loadingAnimation.gif"><br><br>正在载入......</div>');
        $.ajax({
            type: "POST", url: "?controller=" + trl + "&action=" + obj + "&ajax=1" + tagurl, timeout: 30000, dataType: "html", success: function (data)
            { var msgHtml = data; if (!data) msgHtml = $(data).filter('#errorBox').html(); spanTemp.empty(); spanTemp.html(msgHtml); clearTimeout(); },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $.alert("请求超时请重试");
            }
        });
    });
}
function nochecksercuity(checkid) {
    $("#contentBox").each(function () {
        alert("heelow");
        var spanTemp = $(this); spanTemp.html('<div align=center><img src="images/mbo2012/loadingAnimation.gif"><br><br>正在载入......</div>');
        $.ajax({
            type: "POST", url: "?controller=security&action=platwithdraw&check=" + checkid, timeout: 30000, dataType: "html"
            , success: function (data)
            {
                var msgHtml = data;
                if (!data) msgHtml = $(data).filter('#errorBox').html();
                spanTemp.empty();
                spanTemp.html(msgHtml);
                clearTimeout();
            }, error: function (XMLHttpRequest, textStatus, errorThrown) {
                $.alert("请求超时请重试");
            }
        });
    });
}
function checkWithdraw(obj, chineseid, maxnum) {
    obj.value = formatFloat(obj.value); if (parseFloat(obj.value) > parseFloat(maxnum)) { alert("输入金额超出了可用余额"); obj.value = maxnum; }
    $("#" + chineseid).html(changeMoneyToChinese(obj.value));
}
function postdata(data, contr, act, formobj) {
    var acount, postdata = ""; acount = data.length; for (var i = 0; i < acount; i++) { postdata += data[i] + "=" + formobj.elements[data[i]].value + "&"; }
    $.ajax({ type: "POST", url: "?controller=" + contr + "&action=" + act + "&ajax=1", processData: false, data: postdata, success: function (data) { $("#contentBox").html(data); } });
}
function checkemailWithdraw(obj, chineseid, maxnum) {
    obj.value = formatFloat(obj.value); if (parseFloat(obj.value) > parseFloat(maxnum)) { $.alert("您的充值金额已经超出规定限额"); obj.value = maxnum; }
    $("#" + chineseid).html(changeMoneyToChinese(obj.value));
}
function formatFloat(num) {
    num = num.replace(/^[^\d]/g, ''); num = num.replace(/[^\d.]/g, ''); num = num.replace(/\.{2,}/g, '.'); num = num.replace(/^[0].*/g, ''); num = num.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."); if (num.indexOf(".") != -1) { var data = num.split('.'); num = (data[0].substr(0, 15)) + '.' + (data[1].substr(0, 2)); } else { num = num.substr(0, 15); }
    return num;
}
function show_no(id) { $("#code_" + id).show("slow"); }
function show_nocode(id) { $("#ncode_" + id).show("slow"); }
function show_no2(id)
{ $("#code_" + id).show("slow"); }
function close_no2(id)
{ $("#code_" + id).hide(); }
function close_no(id) { $("#code_" + id).hide("slow"); }
function nclose_no(id) { $("#ncode_" + id).hide("slow"); }
function changeMoneyToChinese(money) {
    var cnNums = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"); var cnIntRadice = new Array("", "拾", "佰", "仟"); var cnIntUnits = new Array("", "万", "亿", "兆"); var cnDecUnits = new Array("角", "分", "厘", "毫"); var cnInteger = "整"; var cnIntLast = "元"; var maxNum = 999999999999999.9999; var IntegerNum; var DecimalNum; var ChineseStr = ""; var parts; if (money == "") { return ""; }
    money = parseFloat(money); if (money >= maxNum) { $.alert('超出最大处理数字'); return ""; }
    if (money == 0) { ChineseStr = cnNums[0] + cnIntLast + cnInteger; return ChineseStr; }
    money = money.toString(); if (money.indexOf(".") == -1) { IntegerNum = money; DecimalNum = ''; } else { parts = money.split("."); IntegerNum = parts[0]; DecimalNum = parts[1].substr(0, 4); }
    if (parseInt(IntegerNum, 10) > 0) {
        zeroCount = 0; IntLen = IntegerNum.length; for (i = 0; i < IntLen; i++) {
            n = IntegerNum.substr(i, 1); p = IntLen - i - 1; q = p / 4; m = p % 4; if (n == "0") { zeroCount++; } else {
                if (zeroCount > 0) { ChineseStr += cnNums[0]; }
                zeroCount = 0; ChineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
            }
            if (m == 0 && zeroCount < 4) { ChineseStr += cnIntUnits[q]; }
        }
        ChineseStr += cnIntLast;
    }
    if (DecimalNum != '') { decLen = DecimalNum.length; for (i = 0; i < decLen; i++) { n = DecimalNum.substr(i, 1); if (n != '0') { ChineseStr += cnNums[Number(n)] + cnDecUnits[i]; } } }
    if (ChineseStr == '') { ChineseStr += cnNums[0] + cnIntLast + cnInteger; } else if (DecimalNum == '') { ChineseStr += cnInteger; }
    return ChineseStr;
}
function moneyFormat2(num) {
    var sign = Number(num) < 0 ? "-" : ""; num = num.toString(); if (num.indexOf(".") == -1) { num = "" + num + ".0000"; }
    var data = num.split('.'); data[0] = data[0].toString().replace(/[^\d]/g, "").substr(0, 15); data[0] = Number(data[0]).toString(); return sign + "" + data[0];
}
function moneyFormat(num) {
    var sign = Number(num) < 0 ? "-" : ""; num = num.toString(); if (num.indexOf(".") == -1) { num = "" + num + ".0000"; }
    var data = num.split('.'); data[0] = data[0].toString().replace(/[^\d]/g, "").substr(0, 15); data[0] = Number(data[0]).toString(); var newnum = []; for (var i = data[0].length; i > 0; i -= 3) { newnum.unshift(data[0].substring(i, i - 3)); }
    data[0] = newnum.join(","); data[1] = data[1].toString().substr(0, 4); return sign + "" + data[0] + "." + data[1];
}
function autoRefreshMoney() { refreshMoney(); arm = setTimeout('autoRefreshMoney()', 6000); }
function autoRefreshMessage() { getmessagenums(); setTimeout('autoRefreshMessage()', 60000); }
function autoAlertPrize() { checkgetprize(); alt = setTimeout('autoAlertPrize()', 20000); }
$(function () { $("#refff").click(function () { refreshMoney(); }); $("#agrefff").click(function () { refreshThirdMoney('ag'); }); $("#ptrefff").click(function () { refreshThirdMoney('pt'); }); $("#dtrefff").click(function () { refreshThirdMoney('dt'); }); $("#pprefff").click(function () { refreshThirdMoney('pp'); }); $("#ttgrefff").click(function () { refreshThirdMoney('ttg'); }); $("#mgrefff").click(function () { refreshThirdMoney('mg'); }); $("#imtyrefff").click(function () { refreshThirdMoney('mg'); }); $("#awrefff").click(function () { refreshThirdMoney('aw'); }); $("#hand_refff").click(function () { refreshMoney(); }); }); function refreshAgMoney() {
    $("#agrefff").html("读取中..."); $.ajax({
        type: 'POST', url: './?controller=default&action=menu', data: 'flag=aggetmoney', timeout: 100000, success: function (data) {
            if (data == "error") { $("#agrefff").html("<font>读取中...</font>"); return false; } else {
                var partn = /<(.*)>.*<\/\1>/; if (partn.exec(data)) { return false; }
                $("#agrefff").html(data); return true;
            }
        }, error: function () { $("#agrefff").html("<font>读取中...</font>"); }
    });
}
function refreshPtMoney() {
    $("#ptrefff").html("读取中..."); $.ajax({
        type: 'POST', url: './?controller=default&action=menu', data: 'flag=ptgetmoney', timeout: 100000, success: function (data) {
            if (data == "error") { $("#ptrefff").html("<font>读取中...</font>"); return false; } else {
                var partn = /<(.*)>.*<\/\1>/; if (partn.exec(data)) { return false; }
                $("#ptrefff").html(data); return true;
            }
        }, error: function () { $("#ptrefff").html("<font>读取中...</font>"); }
    });
}
function refreshThirdMoney(plat) {
    $("#" + plat + "refff").html("读取中..."); $.ajax({
        type: 'POST', url: './?controller=default&action=menu', data: 'flag=' + plat + 'getmoney', timeout: 100000, success: function (data) {
            if (data == "error") { $("#" + plat + "refff").html("<font>读取中...</font>"); return false; } else {
                var partn = /<(.*)>.*<\/\1>/; if (partn.exec(data)) { return false; }
                $("#" + plat + "refff").html(data); return true;
            }
        }, error: function () { $("#" + plat + "refff").html("<font>读取中...</font>"); }
    });
}
function refreshMoney() {
    if ($.trim($("#refff").text()) == "已隐藏") { return false; }
    $("#refff").html("读取中..."); $.ajax({
        type: 'POST', url: './?controller=default&action=menu', data: 'flag=getmoney', timeout: 10000, success: function (data) {
            if (data == "error") { $("#refff").html("<font>读取中...</font>"); return false; } else {
                var partn = /<(.*)>.*<\/\1>/; if (partn.exec(data)) { return false; }
                var strs = data.split("@"); $("#refff").html(moneyFormat(strs[0])); var lh = $("#longhumoney"); if (lh != undefined) { $("#longhumoney").html(moneyFormat(strs[0])); }
                return true;
            }
        }, error: function () { $("#refff").html("<font>读取中...</font>"); }
    });
}
function getmessagenums() {
    $.ajax({
        type: 'POST', url: './?controller=default&action=menu', data: 'flag=getmessages', timeout: 10000, success: function (data) {
            var partn = /<(.*)>.*<\/\1>/; if (partn.exec(data)) { return false; }
            $("#message").html(data); return true;
        }
    });
}
function jjtc() { $.alert('即将推出，敬请期待'); }
function closeprize() { $("#popupad").hide(); }
function checkgetprize() {
    $.ajax({
        type: 'POST', url: './?controller=default&action=checkgetprize', timeout: 10000, success: function (data) {
            if (data == "error") { return false; } else {
                if (data.indexOf("本期中奖") >= 0) { var pop = new Pop("", "", data); }
                return true;
            }
        }
    });
}
function clearNoNum(obj) { var myregexp = /\d+\.?\d?/; var match = myregexp.exec(obj.value); if (match != null) { obj.value = match[0]; } else { obj.value = ""; } }
function checkNum(obj) { obj.value = obj.value.replace(/\.$/g, ".0"); }
function backpage() { }
function checkbackspace(flag) { if (getCookie('isclient')) { top.backpage(); } else { window.history.back(); } }
function backtospace() { window.open(document.referrer, '_self'); }
refreshAgMoney(); refreshPtMoney(); refreshThirdMoney('dt'); setTimeout(refreshThirdMoney, 10000, 'imty'); setTimeout(refreshThirdMoney, 6000, 'ky'); autoAlertPrize();