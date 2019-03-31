; (function ($) {
    $.fn.lt_selectarea = function (opts) {
        var ps = {
            type: 'digital', layout: [{ title: '百位', no: '0|1|2|3|4|5|6|7|8|9', place: 0, cols: 1 },
                { title: '十位', no: '0|1|2|3|4|5|6|7|8|9', place: 1, cols: 1 },
                { title: '个位', no: '0|1|2|3|4|5|6|7|8|9', place: 2, cols: 1 }],
            noBigIndex: 5, isButton: true, imagedir: './js/lottery/image/'
        };
        opts = $.extend({}, ps, opts || {});
        var data_sel = [];
        var random_bets = false;
        var minchosen = []; var max_place = 0; var otype = opts.type.toLowerCase();
        var methodname = $.lt_method[$.lt_method_data.methodid];
        var defaultposition = $.lt_method_data.defaultposition;
        $.lt_position_sel = []; $("input[name='poschoose']").val("");
        if (opts.selPosition == 'true') {
            defaultposition = defaultposition.split("");
            var phtml = '<span class="methodgroupname">' + lot_lang.dec_s32 + '</span>';
            $.each(defaultposition, function (i, v) {
                if (v == 1) {
                    $.lt_position_sel.push(i);
                    phtml += '<label><input type="checkbox" name="pos[]"   class="posChoose" value="' + (i + 1) + '" checked>' + lot_lang.dec_s31[i] + '</label>';
                }
                else {
                    phtml += '<label><input type="checkbox" name="pos[]"   class="posChoose" value="' + (i + 1) + '">' + lot_lang.dec_s31[i] + '</label>';
                }
            });
            $($.lt_id_data.id_poschoose).addClass("minitype");
        } else { var phtml = ''; }
        $($.lt_id_data.id_poschoose).html(phtml); var aacg_postion = getCookie("aac_postion"); var ac_length = $(".posChoose").length; if (aacg_postion && ac_length > 0) {
            var aacgarr = aacg_postion.split(","); if (aacgarr.length > 0) {
                $.lt_position_sel = []; $(".posChoose").attr("checked", false); for (var ac = 0; ac < aacgarr.length; ac++) { $(".posChoose[value='" + aacgarr[ac] + "']").attr("checked", true); }
                $.each($(".posChoose"), function (i, v) { if ($(this).attr("checked") != undefined) { $.lt_position_sel.push(i); } });
            }
        }
        $(".posChoose").click(function () { $.lt_position_sel = []; $.each($(".posChoose"), function (i, v) { if ($(this).attr("checked") != undefined) { $.lt_position_sel.push(i); } }); checkNum(); var aac_postion = $(".posChoose:checked").map(function () { return $(this).val(); }).get().join(","); setCookie("aac_postion", aac_postion); }); switch (methodname)
        { case 'BJRX1': case 'BJRX2': case 'BJRX3': case 'BJRX4': case 'BJRX5': case 'BJRX6': case 'BJRX7': var html = '<div class="grayContent_k8" id="right_05">'; break; default: var html = '<div class="grayContent" id="right_05">'; break; }
        $("#right_03").css("display", "block"); if (1) {
            if (otype == 'input') {
                var html = '<div>'; var tempdes = ''; switch (methodname) { case 'SDZX3': case 'SDZU3': case 'SDZX2': case 'N2cai': case 'SDRX1': case 'SDRX2': case 'SDRX3': case 'SDRX4': case 'SDRX5': case 'SDRX6': case 'SDRX7': case 'SDRX8': case 'SDZU2': tempdes = lot_lang.dec_s26; break; default: tempdes = lot_lang.dec_s4; break; }
                $("#right_03").css("display", "none"); $("#right_04").css("display", "none"); html += '<div class="grayTop"></div><div class="grayContent clearfix">'; html += '<textarea id="lt_write_box" class="textareaLong floatL"></textarea>'; html += '<div class="floatL">'; html += '<p class="marginb5px"><input id="lt_write_del" type="button" value="删除重复号" class="formWord" /></p><p class="marginb5px"></p><p class="marginb5px"><input id="lt_write_empty" type="button" value="清空" class="formWord" /></p>'; html += '</div>'; html += '</div>'; html += '<div class="yellow">' + tempdes + '</div><div class="grayBottom"></div>'; data_sel[0] = []; tempdes = null;
            } else if (otype == 'digital') {
                $.os_place_data = []; $.each(opts.layout, function (i, n) {
                    var m = i; var islinenum = opts.islinenum; var is4linenum = opts.is4linenum; var isanimalnum = opts.isanimalnum; var classt = opts.classt; var classtv = opts.classtv; var html_O = ""; if (typeof (n) == 'object') {
                        n.place = parseInt(n.place, 10); max_place = n.place > max_place ? n.place : max_place; data_sel[n.place] = []; minchosen[n.place] = (typeof (n.minchosen) == 'undefined') ? 0 : n.minchosen; var prg = ''; var kk33 = false; var locaclass = "button1"; if ($.lt_lottid == 20 || $.lt_lottid == 30 || $.lt_lottid == 35) { kk33 = true; }
                        if (kk33 == true) { prg = "_k3"; if (methodname == "STHTX" || methodname == "SBTHTX") { locaclass = "sthtx"; } }
                        switch (methodname) {
                            case 'BJRX1': case 'BJRX2': case 'BJRX3': case 'BJRX4': case 'BJRX5': case 'BJRX6': case 'BJRX7': html += '<div class="each_k8 clearfix">'; break; default: html += '<div class="each' + prg + ' clearfix">'; if (islinenum) { if (m % 2 == 0) { html_O += '<div class="Omission" name="omission_' + n.place + '"><h3 class="name">当前遗漏</h3>'; } else { html_O += '<div class="Omission" name="omission_' + n.place + '"><h3 class="name"></h3>'; } } else { html_O += '<div class="Omission" name="omission_' + n.place + '"><h3 class="name">当前遗漏</h3>'; }
                                html_O += '<div class="Omission" name="omission_' + n.place + '"><h3 class="name">当前遗漏</h3>'; break;
                        }
                        $selectimgs = { 个位: 'images/xingcai/text_g' }
                        if (n.cols > 0) {
                            if (n.title.length > 0) { var tmptitle = n.title; if ((typeof (tmpImg) != "undefined")) { html += '<h3 class="name"><img src= "' + tmpImg + '"/></h3>'; } else { html += '<h3 class="name">' + tmptitle + '</h3>'; } } else {
                                if (methodname != 'ZXHZ2' && methodname != 'ZUHZ2' && methodname != 'N2caihz')
                                    html += '<h3 class="name_2"></h3>';
                            }
                        }
                        html += '<ul class="numList floatL">'; html_O += '<ul class="numList">'; numbers = n.no.split("|"); var classhtml = ""; var classd = ""; for (i = 0; i < numbers.length; i++) {
                            if (classt != '' && classt != null) {
                                if (classtv == 'n') { classhtml = ' ' + classt + '' + numbers[i]; classd = 'dt="' + classt + '' + numbers[i] + '"'; } else if (classtv == 'm') {
                                    var mxx = i + numbers.length * m + 1; if (mxx < 10) { mxx = "0" + mxx; }
                                    classhtml = ' ' + classt + '' + mxx; classd = 'dt="' + classt + '' + mxx + '"';
                                } else if (classtv == 'k') {
                                    var mxx = i + numbers.length * m + 1; if (mxx < 10) { mxx = "0" + mxx; }
                                    classhtml = ' ' + classt + '' + mxx; classd = 'dt="' + classt + '' + mxx + '"';
                                } else if (classtv == 'v') { var mxx = i + numbers.length * m + 1; classhtml = ' ' + classt + '' + mxx; classd = 'dt="' + classt + '' + mxx + '"'; }
                            }
                            if (methodname != "NNWH") { html += '<li name="lt_place_' + n.place + '" class="' + locaclass + '' + classhtml + '" ' + classd + '>' + numbers[i] + '</li>'; } else { var kj = i + 1; html += '<li name="lt_place_' + n.place + '" class="' + locaclass + kj + '' + classhtml + '" ' + classd + '>' + numbers[i] + '</li>'; }
                            html_O += '<li class="num" name="osplace_' + numbers[i] + '">--</li>';
                        }
                        html += '</ul><ul class="btnList">'; if (opts.isButton == true) {
                            if (islinenum) { if (m % 2 == 0) { html += '<li loca=' + m + ' name="all" class="selectType">' + lot_lang.bt_sel_all + '</li><li loca=' + m + '  class="selectType" name="big">' + lot_lang.bt_sel_big + '</li><li loca=' + m + '  class="selectType" name="small">' + lot_lang.bt_sel_small + '</li><li loca=' + m + '  class="selectType" name="odd">' + lot_lang.bt_sel_odd + '</li><li loca=' + m + '  class="selectType" name="even">' + lot_lang.bt_sel_even + '</li><li loca=' + m + '  class="selectType" name="clean">' + lot_lang.bt_sel_clean + '</li>'; } } else if (is4linenum) { if (m == 4) { html += '<li loca=' + m + ' name="all" class="selectType">' + lot_lang.bt_sel_all + '</li><li loca=' + m + '  class="selectType" name="big">' + lot_lang.bt_sel_big + '</li><li loca=' + m + '  class="selectType" name="small">' + lot_lang.bt_sel_small + '</li><li loca=' + m + '  class="selectType" name="odd">' + lot_lang.bt_sel_odd + '</li><li loca=' + m + '  class="selectType" name="even">' + lot_lang.bt_sel_even + '</li><li loca=' + m + '  class="selectType" name="clean">' + lot_lang.bt_sel_clean + '</li>'; } } else if (isanimalnum) { if (m == 0) { html += '<li class="selectType" name="jiaqin_sx">' + lot_lang.bt_sel_jiaqin + '</li>' + '<li class="selectType" name="yeshou_sx">' + lot_lang.bt_sel_yeshou + '</li>' + '<li class="selectType" name="daxiao_sx">' + lot_lang.bt_sel_daxiao + '</li>' + '<li class="selectType" name="xiaoxiao_sx">' + lot_lang.bt_sel_xiaoxiao + '</li>' + '<li class="selectType" name="jimei_sx">' + lot_lang.bt_sel_jimei + '</li>' + '<li class="selectType" name="xchou_sx">' + lot_lang.bt_sel_xchou + '</li>' + '<li class="selectType" name="yangxing_sx">' + lot_lang.bt_sel_yangxing + '</li>' + '<li class="selectType" name="yinxing_sx">' + lot_lang.bt_sel_yinxing + '</li>' + '<li class="selectType" name="wxjin_sx">' + lot_lang.bt_sel_wxjin + '</li>' + '<li class="selectType" name="wxmu_sx">' + lot_lang.bt_sel_wxmu + '</li>' + '<li class="selectType" name="wxshui_sx">' + lot_lang.bt_sel_wxshui + '</li>' + '<li class="selectType" name="wxhuo_sx">' + lot_lang.bt_sel_wxhuo + '</li>' + '<li class="selectType" name="wxtu_sx">' + lot_lang.bt_sel_wxtu + '</li>' + '<li class="selectType" name="cleanAll">' + lot_lang.bt_sel_clean + '</li>'; } }
                            else { html += '<li name="all" class="selectType">' + lot_lang.bt_sel_all + '</li><li class="selectType" name="big">' + lot_lang.bt_sel_big + '</li><li class="selectType" name="small">' + lot_lang.bt_sel_small + '</li><li class="selectType" name="odd">' + lot_lang.bt_sel_odd + '</li><li class="selectType" name="even">' + lot_lang.bt_sel_even + '</li><li class="selectType" name="clean">' + lot_lang.bt_sel_clean + '</li>'; }
                        }
                        html += '</ul>'; html_O += '</ul>'; html += '</div>'; html_O += '</div>';
                    }
                    if ($.isplacemss == 1)
                        html = html + html_O; html_O = ""; $.os_place_data.push(n.place);
                });
            } else if (otype == 'dxds') {
                $.each(opts.layout, function (i, n) {
                    var islinenum = opts.islinenum; var m = i; if (n) {
                        n.place = parseInt(n.place, 10); max_place = n.place > max_place ? n.place : max_place; data_sel[n.place] = []; html += '<div class="each clearfix">'; if (n.cols > 0) { if (n.title.length > 0) { html += '<h3 class="name">' + n.title + '</h3>'; } else { html += '<h3 class="name_2"></h3>'; } }
                        if (lotterytype == 0 || lotterytype == 2) { html += '<ul class="numList floatL">'; } else if (lotterytype == 3) { if (n.no.indexOf('codedesc') == -1) { html += '<ul class="numList floatL bigBt">'; } else { html += '<ul class="numList floatL bigBt twoRow">'; } }
                        numbers = n.no.split("|"); for (i = 0; i < numbers.length; i++) { html += '<li name="lt_place_' + n.place + '" class="button1" style="margin:2px 15px 2px 15px">' + numbers[i] + '</li>'; }
                        html += '</ul><ul class="btnList">'; var lineflag = opts.lineflag; if (islinenum) {
                            if (m % 2 == 0) {
                                if (lineflag) {
                                    if (m == 0)
                                        html += '<li loca=' + m + '  name="all" class="selectType" style="margin:4px 12px 4px 10px">' + lot_lang.bt_sel_all + '</li><li loca=' + m + '  class="selectType" name="clean" style="margin:4px 12px 4px 10px">' + lot_lang.bt_sel_clean + '</li></ul></div>'; else
                                        html += '</ul></div>';
                                } else if (opts.isButton == false) { html += '</ul></div>'; } else { html += '<li loca=' + m + '  name="all" class="selectType" style="margin:4px 12px 4px 10px">' + lot_lang.bt_sel_all + '</li><li loca=' + m + '  class="selectType" name="clean" style="margin:4px 12px 4px 10px">' + lot_lang.bt_sel_clean + '</li></ul></div>'; }
                            } else { html += '</ul></div>'; }
                        } else { html += '<li name="all" class="selectType" style="margin:4px 12px 4px 10px">' + lot_lang.bt_sel_all + '</li><li class="selectType" name="clean" style="margin:4px 12px 4px 10px">' + lot_lang.bt_sel_clean + '</li></ul></div>'; }
                    }
                });
            } else if (otype == 'dds') {
                $.each(opts.layout, function (i, n) {
                    n.place = parseInt(n.place, 10); max_place = n.place > max_place ? n.place : max_place; data_sel[n.place] = []; html += '<div class="each clearfix">'; if (n.cols > 0) { if (n.title.length > 0) { alert(n.title); html += '<div class="seltitle"><div>' + n.title + '</div></div>'; } }
                    html += '<div class="selddsbox"><ul class="numList floatL bigBt">'; numbers = n.no.split("|"); temphtml = ''; if (n.prize) { tmpprize = n.prize.split(","); }
                    for (i = 0; i < numbers.length; i++) { html += '<li name="lt_place_' + n.place + '">' + numbers[i] + '</li>'; if (n.prize) { alert("span_astest[" + $.lt_method_data.prize[parseInt(tmpprize[i], 10)]); temphtml += '<span>' + $.lt_method_data.prize[parseInt(tmpprize[i], 10)] + '</span>'; } }
                    html += temphtml + '</ul></div>';
                });
            }
            html += '</div>';
        }
        $html = $(html)
        $(this).empty(); $html.appendTo(this); var me = this; var _SortNum = function (a, b) {
            if (otype != 'input') { a = a.replace(/5单0双/g, 0).replace(/4单1双/g, 1).replace(/3单2双/g, 2).replace(/2单3双/g, 3).replace(/1单4双/g, 4).replace(/0单5双/g, 5); a = a.replace(/大/g, 0).replace(/小/g, 1).replace(/单/g, 2).replace(/双/g, 3).replace(/\s/g, ""); b = b.replace(/5单0双/g, 0).replace(/4单1双/g, 1).replace(/3单2双/g, 2).replace(/2单3双/g, 3).replace(/1单4双/g, 4).replace(/0单5双/g, 5); b = b.replace(/大/g, 0).replace(/小/g, 1).replace(/单/g, 2).replace(/双/g, 3).replace(/\s/g, ""); }
            a = parseInt(a, 10); b = parseInt(b, 10); if (isNaN(a) || isNaN(b)) { return true; }
            return (a - b);
        }; var _HHZXcheck = function (n, len) {
            if (len == 2) { var a = ['00', '11', '22', '33', '44', '55', '66', '77', '88', '99']; } else { var a = ['000', '111', '222', '333', '444', '555', '666', '777', '888', '999']; }
            n = n.toString(); if ($.inArray(n, a) == -1) { return true; }
            return false;
        }; var _SDinputCheck = function (n, len) {
            var max = 11; if ($.lt_lottid == 48) { max = 12; }
            t = n.split(" "); l = t.length; for (i = 0; i < l; i++) {
                if (Number(t[i]) > max || Number(t[i]) < 1) { return false; }
                for (j = i + 1; j < l; j++) { if (Number(t[i]) == Number(t[j])) { return false; } }
            }
            return true;
        }; var _SBTHDScheck = function (n, len) {
            if (len != 3) { return false }
            var first = ""; var second = ""; var third = ""; var i = 0; for (i = 0; i < len; i++) {
                if (i == 0) { first = n.substr(i, 1) }
                if (i == 1) { second = n.substr(i, 1) }
                if (i == 2) { third = n.substr(i, 1) }
            }
            if (first == second || second == third || third == first) { return false } else { return true }
            return false
        }; var _EBTHDScheck = function (n, len) {
            if (len != 2) { return false }
            var first = ""; var second = ""; var i = 0; for (i = 0; i < len; i++) {
                if (i == 0) { first = n.substr(i, 1) }
                if (i == 1) { second = n.substr(i, 1) }
            }
            if (first == second) { return false }
            return true
        }; var _ETHDXcheck = function (n, len) {
            if (len != 3) { return false }
            var first = ""; var second = ""; var third = ""; var i = 0; for (i = 0; i < len; i++) {
                if (i == 0) { first = n.substr(i, 1) }
                if (i == 1) { second = n.substr(i, 1) }
                if (i == 2) { third = n.substr(i, 1) }
            }
            if (first == second && second == third) { return false }
            if (first == second || second == third || third == first) { return true }
            return false
        }; var _PK10inputCheck = function (n, len) {
            t = n.split(" "); l = t.length; for (i = 0; i < l; i++) {
                if (Number(t[i]) > 10 || Number(t[i]) < 1) { return false; }
                for (j = i + 1; j < l; j++) { if (Number(t[i]) == Number(t[j])) { return false; } }
            }
            return true;
        }; var _inputCheck_Num = function (l, e, fun, sort) {
            var nums = data_sel[0].length; var error = []; var newsel = []; var partn = ""; l = parseInt(l, 10); if (methodname == "ETHDX") { switch (l) { case 2: partn = /^[1-6]{2}$/; break; case 3: partn = /^[1-6]{3}$/; break; default: partn = /^[1-6]{3}$/; break; } } else { switch (l) { case 2: partn = /^[0-9]{2}$/; break; case 4: partn = /^[0-9\s]{4}$/; break; case 5: partn = /^[0-9\s]{5}$/; break; case 8: partn = /^[0-9\s]{8}$/; break; case 11: partn = /^[0-9\s]{11}$/; break; case 14: partn = /^[0-9\s]{14}$/; break; case 17: partn = /^[0-9\s]{17}$/; break; case 20: partn = /^[0-9\s]{20}$/; break; case 23: partn = /^[0-9\s]{23}$/; break; default: partn = /^[0-9]{3}$/; break; } }
            fun = $.isFunction(fun) ? fun : function (s) { return true; }; $.each(data_sel[0], function (i, n) {
                n = $.trim(n); if (partn.test(n) && fun(n, l)) {
                    if (sort) { if (n.indexOf(" ") == -1) { n = n.split(""); n.sort(_SortNum); n = n.join(""); } else { n = n.split(" "); n.sort(_SortNum); n = n.join(" "); } }
                    data_sel[0][i] = n; newsel.push(n);
                } else {
                    if (n.length > 0) { error.push(n); }
                    nums = nums - 1;
                }
            }); if (e == true) { data_sel[0] = newsel; return error; }
            return nums;
        }; function recordPoschoose() {
            var str = ""; $("input[name='pos[]']:checked").each(function () { if ($(this).attr("checked")) { str += $(this).val() + ","; } })
            $("input[name='poschoose']").val(str.slice(0, -1));
        }
        function checkNum() {
            var nums = 0, mname = $.lt_method[$.lt_method_data.methodid]; var modes = parseInt($("select[name='lt_project_modes']").val(), 10); if (otype == 'input') { if (data_sel[0].length > 0) { switch (mname) { case 'ZX3': nums = _inputCheck_Num(3, false); break; case 'ZX4': nums = _inputCheck_Num(4, false); break; case 'ZX5': nums = _inputCheck_Num(5, false); break; case 'RZX3HZ': case 'HHZX': nums = _inputCheck_Num(3, false, _HHZXcheck, true); break; case 'R3HHZC': nums = _inputCheck_Num(3, false, _HHZXcheck, true); nums *= $.lt_position_sel.length == 0 ? 0 : Combination($.lt_position_sel.length, 3); recordPoschoose(); break; case 'ZX2': nums = _inputCheck_Num(2, false); break; case 'ZU2': nums = _inputCheck_Num(2, false, _HHZXcheck, true); break; case 'SDZX3': nums = _inputCheck_Num(8, false, _SDinputCheck, false); break; case 'N3cai': nums = _inputCheck_Num(8, false, _SDinputCheck, false); break; case 'N4cai': nums = _inputCheck_Num(11, false, _PK10inputCheck, false); break; case 'N5cai': nums = _inputCheck_Num(14, false, _PK10inputCheck, false); break; case 'N6cai': nums = _inputCheck_Num(17, false, _PK10inputCheck, false); break; case 'SDZU3': nums = _inputCheck_Num(8, false, _SDinputCheck, true); break; case 'SDZX2': nums = _inputCheck_Num(5, false, _SDinputCheck, false); break; case 'N2cai': nums = _inputCheck_Num(5, false, _SDinputCheck, false); break; case 'SDZU2': nums = _inputCheck_Num(5, false, _SDinputCheck, true); break; case 'SDRX1': nums = _inputCheck_Num(2, false, _SDinputCheck, false); break; case 'SDRX2': nums = _inputCheck_Num(5, false, _SDinputCheck, true); break; case 'SDRX3': nums = _inputCheck_Num(8, false, _SDinputCheck, true); break; case 'SDRX4': nums = _inputCheck_Num(11, false, _SDinputCheck, true); break; case 'SDRX5': nums = _inputCheck_Num(14, false, _SDinputCheck, true); break; case 'SDRX6': nums = _inputCheck_Num(17, false, _SDinputCheck, true); break; case 'SDRX7': nums = _inputCheck_Num(20, false, _SDinputCheck, true); break; case 'SDRX8': nums = _inputCheck_Num(23, false, _SDinputCheck, true); break; case 'ETHDX': nums = _inputCheck_Num(3, false, _ETHDXcheck, true); break; case 'EBTH': nums = _inputCheck_Num(2, false, _EBTHDScheck, true); break; case 'SBTH': nums = _inputCheck_Num(3, false, _SBTHDScheck, true); break; case "RZX2": nums = _inputCheck_Num(2, false); nums *= $.lt_position_sel.length == 0 ? 0 : Combination($.lt_position_sel.length, 2); recordPoschoose(); break; case "R2ZU": nums = _inputCheck_Num(2, false, _HHZXcheck, true); nums *= $.lt_position_sel.length == 0 ? 0 : Combination($.lt_position_sel.length, 2); recordPoschoose(); break; case "RZX3": nums = _inputCheck_Num(3, false); nums *= $.lt_position_sel.length == 0 ? 0 : Combination($.lt_position_sel.length, 3); recordPoschoose(); break; case "RZX4": nums = _inputCheck_Num(4, false); nums *= $.lt_position_sel.length == 0 ? 0 : Combination($.lt_position_sel.length, 4); recordPoschoose(); break; case 'ZUS': nums = _inputCheck_Num(3, false, _ETHDXcheck, true); break; case 'ZUL': nums = _inputCheck_Num(3, false, _SBTHDScheck, true); break; default: break; } } } else {
                var tmp_nums = 1; switch (mname) {
                    case "SBTHHZ": var cc = { 6: 1, 7: 1, 8: 2, 9: 3, 10: 3, 11: 3, 12: 3, 13: 2, 14: 1, 15: 1 }; var s = data_sel[0].length; if (s > 0) { for (j = 0; j < s; j++) { nums += cc[parseInt(data_sel[0][j], 10)]; } }
                        break; case "SBTHDT": var danlen = data_sel[0].length; var tuolen = data_sel[1].length; if (danlen + tuolen < 3 || danlen < 1) { nums = 0; } else { nums = Combination(tuolen, 3 - danlen); }
                            break; case "SBTH": if (data_sel[0].length >= 3) { nums += Combination(data_sel[0].length, 3); }
                                break; case "EBTH": if (data_sel[0].length >= 2) { nums += Combination(data_sel[0].length, 2); }
                                    break; case "WXZU120": var s = data_sel[0].length; if (s > 4) { nums += Combination(s, 5) } break; case "WXZU60": case "WXZU30": case "WXZU20": case "WXZU10": case "WXZU5": if (data_sel[0].length >= minchosen[0] && data_sel[1].length >= minchosen[1]) {
                                        var h = Array.intersect(data_sel[0], data_sel[1]).length; tmp_nums = Combination(data_sel[0].length, minchosen[0]) * Combination(data_sel[1].length, minchosen[1]); if (h > 0) { if (mname == "WXZU60") { tmp_nums -= Combination(h, 1) * Combination(data_sel[1].length - 1, 2) } else { if (mname == "WXZU30") { tmp_nums -= Combination(h, 2) * Combination(2, 1); if (data_sel[0].length - h > 0) { tmp_nums -= Combination(h, 1) * Combination(data_sel[0].length - h, 1) } } else { if (mname == "WXZU20") { tmp_nums -= Combination(h, 1) * Combination(data_sel[1].length - 1, 1) } else { if (mname == "WXZU10" || mname == "WXZU5") { tmp_nums -= Combination(h, 1) } } } } }
                                        nums += tmp_nums
                                    }
                                        break; case 'RZX3HZ': var cc = { 0: 1, 1: 3, 2: 6, 3: 10, 4: 15, 5: 21, 6: 28, 7: 36, 8: 45, 9: 55, 10: 63, 11: 69, 12: 73, 13: 75, 14: 75, 15: 73, 16: 69, 17: 63, 18: 55, 19: 45, 20: 36, 21: 28, 22: 21, 23: 15, 24: 10, 25: 6, 26: 3, 27: 1 }; for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; for (j = 0; j < s; j++) { nums += cc[parseInt(data_sel[i][j], 10)]; } }
                                            nums *= $.lt_position_sel.length == 0 ? 0 : Combination($.lt_position_sel.length, 3); recordPoschoose(); break; case 'ZXHZ': var cc = { 0: 1, 1: 3, 2: 6, 3: 10, 4: 15, 5: 21, 6: 28, 7: 36, 8: 45, 9: 55, 10: 63, 11: 69, 12: 73, 13: 75, 14: 75, 15: 73, 16: 69, 17: 63, 18: 55, 19: 45, 20: 36, 21: 28, 22: 21, 23: 15, 24: 10, 25: 6, 26: 3, 27: 1 }; case 'ZUHZ': if (mname == 'ZUHZ') { cc = { 1: 1, 2: 2, 3: 2, 4: 4, 5: 5, 6: 6, 7: 8, 8: 10, 9: 11, 10: 13, 11: 14, 12: 14, 13: 15, 14: 15, 15: 14, 16: 14, 17: 13, 18: 11, 19: 10, 20: 8, 21: 6, 22: 5, 23: 4, 24: 2, 25: 2, 26: 1 }; }
                                                for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; for (j = 0; j < s; j++) { nums += cc[parseInt(data_sel[i][j], 10)]; } }; break; case 'ZXKD': var cc = { 0: 10, 1: 54, 2: 96, 3: 126, 4: 144, 5: 150, 6: 144, 7: 126, 8: 96, 9: 54 }; for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; for (j = 0; j < s; j++) { nums += cc[parseInt(data_sel[i][j], 10)]; } }; break; case 'R3ZUHZ': if (mname == 'R3ZUHZ') { cc = { 1: 1, 2: 2, 3: 2, 4: 4, 5: 5, 6: 6, 7: 8, 8: 10, 9: 11, 10: 13, 11: 14, 12: 14, 13: 15, 14: 15, 15: 14, 16: 14, 17: 13, 18: 11, 19: 10, 20: 8, 21: 6, 22: 5, 23: 4, 24: 2, 25: 2, 26: 1 }; }
                                                    for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; for (j = 0; j < s; j++) { nums += cc[parseInt(data_sel[i][j], 10)]; } }
                                                    nums *= $.lt_position_sel.length == 0 ? 0 : Combination($.lt_position_sel.length, 3); recordPoschoose(); break; case 'ZUS': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 1) { nums += s * (s - 1); } }; break; case 'R3ZUS': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 1) { nums += s * (s - 1); } }
                                                        nums *= $.lt_position_sel.length == 0 ? 0 : Combination($.lt_position_sel.length, 3); recordPoschoose(); break; case 'R3ZUL': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 2) { nums += s * (s - 1) * (s - 2) / 6; } }
                                                            nums *= $.lt_position_sel.length == 0 ? 0 : Combination($.lt_position_sel.length, 3); recordPoschoose(); break; case 'ZUL': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 2) { nums += s * (s - 1) * (s - 2) / 6; } }; break; case 'ZH5': case 'ZH4': case 'ZH3': for (i = 0; i <= max_place; i++) {
                                                                if (data_sel[i].length == 0)
                                                                { tmp_nums = 0; break; }
                                                                tmp_nums *= data_sel[i].length;
                                                            }
                                                                nums = tmp_nums * parseInt(mname.charAt(mname.length - 1)); break; case "SXZU24": var s = data_sel[0].length; if (s > 3) { nums += Combination(s, 4) }
                                                                    break; case 'SXZU6': if (data_sel[0].length >= minchosen[0])
                                                                    { nums += Combination(data_sel[0].length, minchosen[0]); }
                                                                        break; case "SXZU12": case "SXZU4": if (data_sel[0].length >= minchosen[0] && data_sel[1].length >= minchosen[1]) {
                                                                            var h = Array.intersect(data_sel[0], data_sel[1]).length; tmp_nums = Combination(data_sel[0].length, minchosen[0]) * Combination(data_sel[1].length, minchosen[1]); if (h > 0) {
                                                                                if (mname == "SXZU12") { tmp_nums -= Combination(h, 1) * Combination(data_sel[1].length - 1, 1) }
                                                                                else { if (mname == "SXZU4") { tmp_nums -= Combination(h, 1) } }
                                                                            }
                                                                            nums += tmp_nums
                                                                        }
                                                                            break; case 'BDW2': case 'ZU2': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 1) { nums += s * (s - 1) / 2; } }; break; case 'ZXHZ2': cc = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8, 8: 9, 9: 10, 10: 9, 11: 8, 12: 7, 13: 6, 14: 5, 15: 4, 16: 3, 17: 2, 18: 1 }; for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; for (j = 0; j < s; j++) { nums += cc[parseInt(data_sel[i][j], 10)]; } }; break; case 'ZUHZ2': cc = { 0: 0, 1: 1, 2: 1, 3: 2, 4: 2, 5: 3, 6: 3, 7: 4, 8: 4, 9: 5, 10: 4, 11: 4, 12: 3, 13: 3, 14: 2, 15: 2, 16: 1, 17: 1, 18: 0 }; for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; for (j = 0; j < s; j++) { nums += cc[parseInt(data_sel[i][j], 10)]; } }; break; case 'PKDX': case 'DWDK': case 'DWD': for (i = 0; i <= max_place; i++) { nums += data_sel[i].length; }; break; case 'N3cai': case 'SDZX3': nums = 0; if (data_sel[0].length > 0 && data_sel[1].length > 0 && data_sel[2].length > 0) { for (i = 0; i < data_sel[0].length; i++) { for (j = 0; j < data_sel[1].length; j++) { for (k = 0; k < data_sel[2].length; k++) { if (data_sel[0][i] != data_sel[1][j] && data_sel[0][i] != data_sel[2][k] && data_sel[1][j] != data_sel[2][k]) { nums++; } } } } }
                                                                                break; case 'N4cai': nums = 0; if (data_sel[0].length > 0 && data_sel[1].length > 0 && data_sel[2].length > 0 && data_sel[3].length > 0) { for (i = 0; i < data_sel[0].length; i++) { for (j = 0; j < data_sel[1].length; j++) { for (k = 0; k < data_sel[2].length; k++) { for (l = 0; l < data_sel[3].length; l++) { if (data_sel[0][i] != data_sel[1][j] && data_sel[0][i] != data_sel[2][k] && data_sel[0][i] != data_sel[3][l] && data_sel[1][j] != data_sel[2][k] && data_sel[1][j] != data_sel[3][l] && data_sel[2][k] != data_sel[3][l]) { nums++; } } } } } }
                                                                                    break; case 'N5cai': nums = 0; if (data_sel[0].length > 0 && data_sel[1].length > 0 && data_sel[2].length > 0 && data_sel[3].length > 0 && data_sel[4].length > 0) { for (i = 0; i < data_sel[0].length; i++) { for (j = 0; j < data_sel[1].length; j++) { for (k = 0; k < data_sel[2].length; k++) { for (l = 0; l < data_sel[3].length; l++) { for (m = 0; m < data_sel[4].length; m++) { if (data_sel[0][i] != data_sel[1][j] && data_sel[0][i] != data_sel[2][k] && data_sel[0][i] != data_sel[3][l] && data_sel[0][i] != data_sel[4][m] && data_sel[1][j] != data_sel[2][k] && data_sel[1][j] != data_sel[3][l] && data_sel[1][j] != data_sel[4][m] && data_sel[2][k] != data_sel[3][l] && data_sel[2][k] != data_sel[4][m] && data_sel[3][l] != data_sel[4][m]) { nums++; } } } } } } }
                                                                                        break; case 'SDZU3': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 2) { nums += s * (s - 1) * (s - 2) / 6; } }; break; case 'N5cai': nums = 0; if (data_sel[0].length > 0) { for (i = 0; i < data_sel[0].length; i++) { nums++; } }
                                                                                            if (data_sel[1].length > 0) { for (i = 0; i < data_sel[0].length; i++) { nums++; } }
                                                                                            if (data_sel[2].length > 0) { for (i = 0; i < data_sel[0].length; i++) { nums++; } }
                                                                                            if (data_sel[3].length > 0) { for (i = 0; i < data_sel[0].length; i++) { nums++; } }
                                                                                            if (data_sel[4].length > 0) { for (i = 0; i < data_sel[0].length; i++) { nums++; } }
                                                                                            break; case 'N2cai': case 'SDZX2': nums = 0; if (data_sel[0].length > 0 && data_sel[1].length > 0) { for (i = 0; i < data_sel[0].length; i++) { for (j = 0; j < data_sel[1].length; j++) { if (data_sel[0][i] != data_sel[1][j]) { nums++; } } } }
                                                                                                break; case 'SDZU2': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 1) { nums += s * (s - 1) / 2; } }; break; case 'SDBDW': case 'SDDWD': case 'SDDDS': case 'SDCZW': case 'SDRX1': for (i = 0; i <= max_place; i++) { nums += data_sel[i].length; }; break; case 'SDRX2': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 1) { nums += s * (s - 1) / 2; } }; break; case 'SDRX3': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 2) { nums += s * (s - 1) * (s - 2) / 6; } }; break; case 'SDRX4': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 3) { nums += s * (s - 1) * (s - 2) * (s - 3) / 24; } }; break; case 'SDRX5': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 4) { nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) / 120; } }; break; case 'SDRX6': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 5) { nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) * (s - 5) / 720; } }; break; case 'SDRX7': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 6) { nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) * (s - 5) * (s - 6) / 5040; } }; break; case 'SDRX8': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 7) { nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) * (s - 5) * (s - 6) * (s - 7) / 40320; } }; break; case 'BJRX2': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 1) { nums += s * (s - 1) / 2; } }; break; case 'BJRX3': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 2) { nums += s * (s - 1) * (s - 2) / 6; } }; break; case 'BJRX4': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 3) { nums += s * (s - 1) * (s - 2) * (s - 3) / 24; } }; break; case 'BJRX5': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 4) { nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) / 120; } }; break; case 'BJRX6': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 5) { nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) * (s - 5) / 720; } }; break; case 'BJRX7': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 6) { nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) * (s - 5) * (s - 6) / 5040; } }; break; case 'LTRXDT2': case 'LTRXDT3': case 'LTRXDT4': case 'LTRXDT5': case 'LTRXDT6': case 'LTRXDT7': case 'LTRXDT8': var danlen = data_sel[0].length; var tuolen = data_sel[1].length; var sellen = mname.substring(mname.length - 1); if (danlen < 1 || tuolen < 1 || danlen >= sellen) { nums = 0; } else { nums = Combination(tuolen, sellen - danlen); }
                                                                                                    break; case "RZX2": var wan = data_sel[0].length; var qian = data_sel[1].length; var bai = data_sel[2].length; var shi = data_sel[3].length; var ge = data_sel[4].length; nums += wan * qian + wan * bai + wan * shi + wan * ge + qian * bai + qian * shi + qian * ge + bai * shi + bai * ge + shi * ge; break; case "R2ZU": for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 1) { nums += s * (s - 1) / 2; } }; var select_num = $("input[name='pos[]']:checked").length; var multi = 0; switch (select_num) { case 0: multi = 0; break; case 1: multi = 0; break; case 2: multi = 1; break; case 3: multi = 3; break; case 4: multi = 6; break; case 5: multi = 10; break; }
                                                                                                        nums = nums * multi; recordPoschoose(); break; case "RZX2HZ": cc = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8, 8: 9, 9: 10, 10: 9, 11: 8, 12: 7, 13: 6, 14: 5, 15: 4, 16: 3, 17: 2, 18: 1 }; for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; for (j = 0; j < s; j++) { nums += cc[parseInt(data_sel[i][j], 10)]; } }
                                                                                                            nums *= $.lt_position_sel.length == 0 ? 0 : Combination($.lt_position_sel.length, 2); recordPoschoose(); break; case "R2ZUHZ": cc = { 0: 0, 1: 1, 2: 1, 3: 2, 4: 2, 5: 3, 6: 3, 7: 4, 8: 4, 9: 5, 10: 4, 11: 4, 12: 3, 13: 3, 14: 2, 15: 2, 16: 1, 17: 1, 18: 0 }; for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; for (j = 0; j < s; j++) { nums += cc[parseInt(data_sel[i][j], 10)]; } }
                                                                                                                nums *= $.lt_position_sel.length == 0 ? 0 : Combination($.lt_position_sel.length, 2); recordPoschoose(); break; case "RZX3": var aCodePosition = []; for (i = 0; i <= max_place; i++) { var codelen = data_sel[i].length; if (codelen > 0) { aCodePosition.push(i); } }
                                                                                                                    var aPositionCombo = getCombination(aCodePosition, 3); var iComboLen = aPositionCombo.length; var aCombo = []; var iLen = 0; var tmpNums = 1; for (j = 0; j < iComboLen; j++) {
                                                                                                                        aCombo = aPositionCombo[j].split(","); iLen = aCombo.length; tmpNums = 1; for (h = 0; h < iLen; h++) { tmpNums *= data_sel[aCombo[h]].length; }
                                                                                                                        nums += tmpNums;
                                                                                                                    }
                                                                                                                    break; case "RZX4": var aCodePosition = []; for (i = 0; i <= max_place; i++) { var codelen = data_sel[i].length; if (codelen > 0) { aCodePosition.push(i); } }
                                                                                                                        var aPositionCombo = getCombination(aCodePosition, 4); var iComboLen = aPositionCombo.length; var aCombo = []; var iLen = 0; var tmpNums = 1; for (j = 0; j < iComboLen; j++) {
                                                                                                                            aCombo = aPositionCombo[j].split(","); iLen = aCombo.length; tmpNums = 1; for (h = 0; h < iLen; h++) { tmpNums *= data_sel[aCombo[h]].length; }
                                                                                                                            nums += tmpNums;
                                                                                                                        }
                                                                                                                        break; case "R4ZU24": var s = data_sel[0].length; if (s > 3) { nums += Combination(s, 4); }
                                                                                                                            nums *= $.lt_position_sel.length == 0 ? 0 : Combination($.lt_position_sel.length, 4); recordPoschoose(); break; case "R4ZU12": case "R4ZU4": if (data_sel[0].length >= minchosen[0] && data_sel[1].length >= minchosen[1]) {
                                                                                                                                var h = Array.intersect(data_sel[0], data_sel[1]).length; tmp_nums = Combination(data_sel[0].length, minchosen[0]) * Combination(data_sel[1].length, minchosen[1]); if (h > 0) { if (mname == "R4ZU12") { tmp_nums -= Combination(h, 1) * Combination(data_sel[1].length - 1, 1); } else { if (mname == "R4ZU4") { tmp_nums -= Combination(h, 1); } } }
                                                                                                                                nums += tmp_nums;
                                                                                                                            }
                                                                                                                                nums *= $.lt_position_sel.length == 0 ? 0 : Combination($.lt_position_sel.length, 4); recordPoschoose(); break; case 'R4ZU6': if (data_sel[0].length >= minchosen[0]) { nums += Combination(data_sel[0].length, minchosen[0]); }
                                                                                                                                    nums *= $.lt_position_sel.length == 0 ? 0 : Combination($.lt_position_sel.length, 4); recordPoschoose(); break; case "LHD_LH": case "LHD_H": for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 0) { nums = s; } }; var select_num = $("input[name='pos[]']:checked").length; var multi = 0; switch (select_num) { case 0: multi = 0; break; case 1: multi = 0; break; case 2: multi = 1; break; case 3: multi = 3; break; case 4: multi = 6; break; case 5: multi = 10; break; }
                                                                                                                                        nums = nums * multi; recordPoschoose(); break; case 'KLSFRX1': for (i = 0; i <= max_place; i++) { nums += data_sel[i].length; }; break; case 'KLSFRX2': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 1) { nums += s * (s - 1) / 2; } }; break; case 'KLSFRX3': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 2) { nums += s * (s - 1) * (s - 2) / 6; } }; break; case 'KLSFRX4': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 3) { nums += s * (s - 1) * (s - 2) * (s - 3) / 24; } }; break; case 'KLSFRX5': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 4) { nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) / 120; } }; break; case 'KLSFQSZHIXUAN': case 'KLSFHSZHIXUAN': nums = 0; if (data_sel[0].length > 0 && data_sel[1].length > 0 && data_sel[2].length > 0) { for (i = 0; i < data_sel[0].length; i++) { for (j = 0; j < data_sel[1].length; j++) { for (k = 0; k < data_sel[2].length; k++) { if (data_sel[0][i] != data_sel[1][j] && data_sel[0][i] != data_sel[2][k] && data_sel[1][j] != data_sel[2][k]) { nums++; } } } } }
                                                                                                                                            break; case 'KLSFQSZUXUAN': case 'KLSFHSZUXUAN': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 2) { nums += s * (s - 1) * (s - 2) / 6; } }; break; case 'KLSFEXZHX': nums = 0; if (data_sel[0].length > 0 && data_sel[1].length > 0) { for (i = 0; i < data_sel[0].length; i++) { for (j = 0; j < data_sel[1].length; j++) { if (data_sel[0][i] != data_sel[1][j]) { nums++; } } } }
                                                                                                                                                break; case 'KLSFEXZX': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 1) { nums += s * (s - 1) / 2; } }; break; case 'KLSFDXDS1': case 'KLSFDXDS2': case 'KLSFDXDS3': case 'KLSFDXDS4': case 'KLSFDXDS5': case 'KLSFDXDS6': case 'KLSFDXDS7': case 'KLSFDXDS8': for (i = 0; i <= max_place; i++) { nums += data_sel[i].length; }; break; case 'KLSFSJFW1': case 'KLSFSJFW2': case 'KLSFSJFW3': case 'KLSFSJFW4': case 'KLSFSJFW5': case 'KLSFSJFW6': case 'KLSFSJFW7': case 'KLSFSJFW8': for (i = 0; i <= max_place; i++) { nums += data_sel[i].length; }; break; case 'KLSFWX1': case 'KLSFWX2': case 'KLSFWX3': case 'KLSFWX4': case 'KLSFWX5': case 'KLSFWX6': case 'KLSFWX7': case 'KLSFWX8': for (i = 0; i <= max_place; i++) { nums += data_sel[i].length; }; break; case 'KLSFLONG': case 'KLSFHU': for (i = 0; i <= max_place; i++) { nums += data_sel[i].length; }; break; case 'KLSFDT2': case 'KLSFDT3': case 'KLSFDT4': case 'KLSFDT5': var danlen = data_sel[0].length; var tuolen = data_sel[1].length; var sellen = mname.substring(mname.length - 1); if (danlen < 1 || tuolen < 1 || danlen >= sellen) { nums = 0; } else { nums = Combination(tuolen, sellen - danlen); }
                                                                                                                                                    break; case 'N2caihz': cc = { 3: 2, 4: 2, 5: 4, 6: 4, 7: 6, 8: 6, 9: 8, 10: 8, 11: 10, 12: 8, 13: 8, 14: 6, 15: 6, 16: 4, 17: 4, 18: 2, 19: 2 }; for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; for (j = 0; j < s; j++) { nums += cc[parseInt(data_sel[i][j], 10)]; } }; break; case 'N6cai': nums = 0; if (data_sel[0].length > 0 && data_sel[1].length > 0 && data_sel[2].length > 0 && data_sel[3].length > 0 && data_sel[4].length > 0 && data_sel[5].length > 0) { for (i = 0; i < data_sel[0].length; i++) { for (j = 0; j < data_sel[1].length; j++) { for (k = 0; k < data_sel[2].length; k++) { for (l = 0; l < data_sel[3].length; l++) { for (m = 0; m < data_sel[4].length; m++) { for (n = 0; n < data_sel[5].length; n++) { if (data_sel[0][i] != data_sel[1][j] && data_sel[0][i] != data_sel[2][k] && data_sel[0][i] != data_sel[3][l] && data_sel[0][i] != data_sel[4][m] && data_sel[0][i] != data_sel[5][n] && data_sel[1][j] != data_sel[2][k] && data_sel[1][j] != data_sel[3][l] && data_sel[1][j] != data_sel[4][m] && data_sel[1][j] != data_sel[5][n] && data_sel[2][k] != data_sel[3][l] && data_sel[2][k] != data_sel[4][m] && data_sel[2][k] != data_sel[5][n] && data_sel[3][l] != data_sel[4][m] && data_sel[3][l] != data_sel[5][n] && data_sel[4][m] != data_sel[5][n]) { nums++; } } } } } } } }
                                                                                                                                                        break; case 'PKLH': for (i = 0; i <= max_place; i++) { nums += data_sel[i].length; }; break; case 'BDW3': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 1) { nums += s * (s - 1) * (s - 2) / 6; } }; break
                    case 'ZU3BD': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s == 1) { nums += s * 54; } }; break
                    case 'ZU2BD': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s == 1) { nums += s * 9; } }; break
                    case 'ZXKD2': var cc = { 0: 10, 1: 18, 2: 16, 3: 14, 4: 12, 5: 10, 6: 8, 7: 6, 8: 4, 9: 2 }; for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; for (j = 0; j < s; j++) { nums += cc[parseInt(data_sel[i][j], 10)]; } }; break; case 'SANLX': case 'LMSANZE': case 'LMSANZS': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 2) { nums += s * (s - 1) * (s - 2) / 6; } }; break; case 'ERLX': case 'LMERZE': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 1) { nums += s * (s - 1) / 2; } }; break; case 'SILX': for (i = 0; i <= max_place; i++) { var s = data_sel[i].length; if (s > 3) { nums += s * (s - 1) * (s - 2) * (s - 3) / 24; } }; break; default: for (i = 0; i <= max_place; i++) {
                        if (data_sel[i].length == 0) { tmp_nums = 0; break; break; }
                        tmp_nums *= data_sel[i].length;
                    }
                        nums = tmp_nums; break;
                }
            }
            var times = parseInt($($.lt_id_data.id_sel_times).val(), 10); if (isNaN(times))
            { times = 1; $($.lt_id_data.id_sel_times).val(1); }
            var money = Math.round(times * nums * 2 * ($.lt_method_data.modes[modes].rate * 1000)) / 1000; money = isNaN(money) ? 0 : money; $($.lt_id_data.id_sel_num).html(nums); $($.lt_id_data.id_sel_money).html(money);
        }; var dumpNum = function (isdeal) {
            var ccJson = {}; var l = data_sel[0].length; var err = []; var news = []; if (l == 0) { return err; }
            for (i = 0; i < l; i++) {
                if ($.inArray(data_sel[0][i], err) != -1) { continue; }
                if (typeof ccJson[data_sel[0][i]] == "undefined" || ccJson[data_sel[0][i]] == "" || ccJson[data_sel[0][i]] == null) { news.push(data_sel[0][i]); } else { err.push(data_sel[0][i]); }
                ccJson[data_sel[0][i]] = data_sel[0][i];
            }
            if (isdeal) { data_sel[0] = news; }
            return err;
        }; function _inptu_deal() {
            var s = $.trim($("#lt_write_box", $(me)).val()); s = $.trim(s.replace(/[^\s\r,;，；　０１２３４５６７８９0-9]/g, "")); var m = s; switch (methodname) { case 'SDZX3': case 'SDZU3': case 'SDZX2': case 'N2cai': case 'N3cai': case 'N4cai': case 'N5cai': case 'N6cai': case 'SDRX1': case 'SDRX2': case 'SDRX3': case 'SDRX4': case 'SDRX5': case 'SDRX6': case 'SDRX7': case 'SDRX8': case 'SDZU2': s = s.replace(/[\r\n,;，；]/g, "|").replace(/(\|)+/g, "|"); break; default: s = s.replace(/[\s\r,;，；　]/g, "|").replace(/(\|)+/g, "|"); break; }
            s = s.replace(/０/g, "0").replace(/１/g, "1").replace(/２/g, "2").replace(/３/g, "3").replace(/４/g, "4").replace(/５/g, "5").replace(/６/g, "6").replace(/７/g, "7").replace(/８/g, "8").replace(/９/g, "9"); if (s == "") { data_sel[0] = []; } else { data_sel[0] = s.split("|"); }
            return m;
        }; if (otype == 'input') { $("#lt_write_del", $(me)).click(function () { var err = dumpNum(true); if (err.length > 0) { checkNum(); switch (methodname) { case 'SDZX3': case 'SDZU3': case 'N2cai': case 'SDZX2': case 'SDRX1': case 'SDRX2': case 'SDRX3': case 'SDRX4': case 'SDRX5': case 'SDRX6': case 'SDRX7': case 'SDRX8': case 'SDZU2': $("#lt_write_box", $(me)).val(data_sel[0].join(";")); $.alert(lot_lang.am_s3 + '\r\n' + err.join(";")); break; default: $("#lt_write_box", $(me)).val(data_sel[0].join(" ")); $.alert(lot_lang.am_s3 + '\r\n' + err.join(" ")); break; } } else { $.alert(lot_lang.am_s4); } }); $("#lt_write_import", $(me)).click(function () { $.ajaxUploadUI({ title: lot_lang.dec_s27, url: './?dialogUI=fileupload.php', loadok: lot_lang.dec_s28, filetype: ['txt', 'csv'], success: function (data) { $("#lt_write_box", $(me)).val(data).change(); }, onfinish: function () { $("#lt_write_box", $(me)).focus(); } }); }); $("#lt_write_box", $(me)).change(function () { var s = _inptu_deal(); $(this).val(s); checkNum(); }).keyup(function () { _inptu_deal(); checkNum(); }); $("#lt_write_empty", $(me)).click(function () { data_sel[0] = []; $("#lt_write_box", $(me)).val(""); checkNum(); }); }
        function replaceKS(jscode, numberStr, lotteryid) {
            numberStr = numberStr.replace(/111/gi, 1).replace(/222/gi, 2).replace(/333/gi, 3).replace(/444/gi, 4).replace(/555/gi, 5).replace(/666/gi, 6); if (jscode == "ETHDX" || jscode == 'ETHFX') { numberStr = numberStr.replace(/11/gi, 1).replace(/22/gi, 2).replace(/33/gi, 3).replace(/44/gi, 4).replace(/55/gi, 5).replace(/66/gi, 6) }
            numberStr = numberStr.replace(/\*/gi, ""); return numberStr;
        }
        function selectNum(obj, isButton) {
            if ($(obj).hasClass('selected')) { return; }
            $(obj).attr("class", "selected"); place = Number($(obj).attr("name").replace("lt_place_", "")); var classdt = $(obj).attr("dt"); if (classdt == '' || classdt == null) { classdt = ""; } else { classdt = " " + classdt; }
            $(obj).attr("class", "selected" + classdt); var number = $.trim($(obj).html()); if (methodname == 'KLSFLONG' || methodname == 'KLSFHU') {; } else { number = number.toLowerCase(); }
            number = number.replace(/\<div.*\<\/div>/g, "").replace(/\r\n/g, ""); number = replaceKS(methodname, number, null); if (methodname == "NNWH") { var rsclass = niuniureplace($(obj).html()); $(obj).addClass(rsclass); }
            if (methodname == "STHTX" || methodname == "SBTHTX") { $(obj).addClass("sthtx"); }
            if (methodname == 'KLSFDT2' || methodname == 'KLSFDT3' || methodname == 'KLSFDT4' || methodname == 'KLSFDT5') { var danlen = Number(methodname.substring(methodname.length - 1)); if (data_sel[0].length + 2 > danlen && place == 0) { var lastnumber = data_sel[0][data_sel[0].length - 1]; $.each($('li[name="lt_place_0"][class="selected"]'), function (i, n) { if ($(this).html() == lastnumber) { $(this).attr("class", ""); data_sel[0] = $.grep(data_sel[0], function (n, i) { return n == lastnumber; }, true); } }); } }
            if (methodname == 'LTRXDT2' || methodname == 'LTRXDT3' || methodname == 'LTRXDT4' || methodname == 'LTRXDT5' || methodname == 'LTRXDT6' || methodname == 'LTRXDT7' || methodname == 'LTRXDT8') { var danlen = Number(methodname.substring(methodname.length - 1)); if ((data_sel[0].length + 2 > danlen || data_sel[0].length > 3) && place == 0) { var lastnumber = data_sel[0][data_sel[0].length - 1]; $.each($('li[name="lt_place_0"][class="selected"]'), function (i, n) { if ($(this).html() == lastnumber) { $(this).attr("class", ""); data_sel[0] = $.grep(data_sel[0], function (n, i) { return n == lastnumber; }, true); } }); } }
            if (methodname == 'KLSFDT2' || methodname == 'KLSFDT3' || methodname == 'KLSFDT4' || methodname == 'KLSFDT5' || methodname == 'LTRXDT2' || methodname == 'LTRXDT3' || methodname == 'LTRXDT4' || methodname == 'LTRXDT5' || methodname == 'LTRXDT6' || methodname == 'LTRXDT7' || methodname == 'LTRXDT8') { var unplace = 1 - place; if (data_sel[unplace].contains(number)) { $.each($('li[name="lt_place_' + unplace + '"][class="selected"]'), function (i, n) { var tmphtml = $(this).html(); if (tmphtml == number) { $(this).attr("class", ""); data_sel[unplace] = $.grep(data_sel[unplace], function (n, i) { return n == number; }, true); } }); } }
            if (methodname == "EBTHDT" || methodname == "SBTHDT") {
                var danlen = 1; if (methodname == "SBTHDT") { danlen = 2; }
                if (data_sel[0].length + 1 > danlen && place == 0) { var lastnumber = data_sel[0][data_sel[0].length - 1]; $.each($('li[name="lt_place_0"][class="selected"]'), function (i, n) { if ($(this).html() == lastnumber) { $(this).attr("class", ""); data_sel[0] = $.grep(data_sel[0], function (n, i) { return n == lastnumber; }, true); } }); }
            }
            if (methodname == "ETHDX" || methodname == "EBTHDT" || methodname == "SBTHDT") {
                var unplace = 1 - place; if (data_sel[unplace].contains(number)) {
                    $.each($('li[name="lt_place_' + unplace + '"][class="selected"]'), function (i, n) {
                        var tmphtml = $(this).html(); if (methodname == "ETHDX") { tmphtml = tmphtml.replace(/11/gi, 1).replace(/22/gi, 2).replace(/33/gi, 3).replace(/44/gi, 4).replace(/55/gi, 5).replace(/66/gi, 6); }
                        if (tmphtml == number) { $(this).attr("class", ""); data_sel[unplace] = $.grep(data_sel[unplace], function (n, i) { return n == number; }, true); }
                    });
                }
            }
            data_sel[place].push(number); if (!isButton) {
                var numlimit = parseInt($.lt_method_data.maxcodecount); if (numlimit > 0) {
                    if (data_sel[place].length > numlimit)
                    { $.alert(lot_lang.am_s35.replace('%s', numlimit)); unSelectNum(obj, false); }
                }
                checkNum();
            }
        }; function unSelectNum(obj, isButton) {
            if (!$(obj).hasClass('selected')) { return; }
            var classdt = $(obj).attr("dt"); if (classdt == '' || classdt == null) { classdt = ""; } else { classdt = " " + classdt; }
            $(obj).attr("class", "button1" + classdt); place = Number($(obj).attr("name").replace("lt_place_", "")); var number = $.trim($(obj).html()); if (methodname == 'KLSFLONG' || methodname == 'KLSFHU') {; } else { number = number.toLowerCase(); }
            number = number.replace(/\<div.*\<\/div>/g, "").replace(/\r\n/g, ""); number = replaceKS(methodname, number, null); data_sel[place] = $.grep(data_sel[place], function (n, i) { return n == number; }, true); if (!isButton) { checkNum(); }
            if (methodname == "STHTX" || methodname == "SBTHTX") { $(obj).addClass("sthtx"); }
        }; function changeNoCss(obj) { if ($(obj).hasClass('selected')) { unSelectNum(obj, false); } else { selectNum(obj, false); } }; function selectOdd(obj) { if (Number($(obj).html()) % 2 == 1) { selectNum(obj, true); } else { unSelectNum(obj, true); } }; function selectEven(obj) { if (Number($(obj).html()) % 2 == 0) { selectNum(obj, true); } else { unSelectNum(obj, true); } }; function selectBig(i, obj) { if (i >= opts.noBigIndex) { selectNum(obj, true); } else { unSelectNum(obj, true); } }; function selectSmall(i, obj) { if (i < opts.noBigIndex) { selectNum(obj, true); } else { unSelectNum(obj, true); } }; function selectOpp(obj) { if ($(obj).hasClass('selected')) { unSelectNum(obj, false); } else { selectNum(obj, false); } }; $(this).find("[name^='lt_place_']").click(function () { changeNoCss(this); }); $(".posChoose").change(function () { checkNum(); }); if (1) {
            $("[class='selectType']", $(this)).click(function () {
                if (opts.islinenum || opts.is4linenum) {
                    var loca = $(this).attr("loca"); var wei = 0; if (opts.islinenum) { var wei = Number(loca) / 2; }
                    var td = $(this).parent().parent().parent().find("div").children('ul').children("li[name='lt_place_" + wei + "']"); switch ($(this).attr('name')) { case 'all': $.each(td, function (i, n) { selectNum(n, true); }); break; case 'big': $.each(td, function (i, n) { selectBig(i, n); }); break; case 'small': $.each(td, function (i, n) { selectSmall(i, n); }); break; case 'odd': $.each(td, function (i, n) { selectOdd(n); }); break; case 'even': $.each(td, function (i, n) { selectEven(n); }); break; case 'clean': $.each(td, function (i, n) { unSelectNum(n, true); }); break; default: break; }
                } else { var td = $(this).parent().parent().children('ul')[0]; td = $(td); switch ($(this).attr('name')) { case 'all': $.each(td.children(), function (i, n) { selectNum(n, true); }); break; case 'big': $.each(td.children(), function (i, n) { selectBig(i, n); }); break; case 'small': $.each(td.children(), function (i, n) { selectSmall(i, n); }); break; case 'odd': $.each(td.children(), function (i, n) { selectOdd(n); }); break; case 'even': $.each(td.children(), function (i, n) { selectEven(n); }); break; case 'opp': $.each(td.children(), function (i, n) { selectOpp(n); }); break; case 'clean': $.each(td.children(), function (i, n) { unSelectNum(n, true); }); break; case 'jiaqin_sx': var jiaqingArray = new Array("马", "牛", "羊", "鸡", "狗", "猪"); for (var i = 0; i < jiaqingArray.length; i++) { var dataCode = jiaqingArray[i]; var obj = $("li[name='lt_place_0']:contains(" + dataCode + ")"); selectNum(obj, true); } break; case 'yeshou_sx': var yeshouArray = new Array("虎", "兔", "龙", "猴", "蛇", "鼠"); for (var i = 0; i < yeshouArray.length; i++) { var dataCode = yeshouArray[i]; var obj = $("li[name='lt_place_0']:contains(" + dataCode + ")"); selectNum(obj, true); } break; case 'daxiao_sx': var yeshouArray = new Array("鼠", "牛", "虎", "兔", "龙", "蛇"); for (var i = 0; i < yeshouArray.length; i++) { var dataCode = yeshouArray[i]; var obj = $("li[name='lt_place_0']:contains(" + dataCode + ")"); selectNum(obj, true); } break; case 'xiaoxiao_sx': var yeshouArray = new Array("马", "羊", "猴", "鸡", "狗", "猪"); for (var i = 0; i < yeshouArray.length; i++) { var dataCode = yeshouArray[i]; var obj = $("li[name='lt_place_0']:contains(" + dataCode + ")"); selectNum(obj, true); } break; case 'jimei_sx': var yeshouArray = new Array("兔", "龙", "蛇", "马", "羊", "鸡"); for (var i = 0; i < yeshouArray.length; i++) { var dataCode = yeshouArray[i]; var obj = $("li[name='lt_place_0']:contains(" + dataCode + ")"); selectNum(obj, true); } break; case 'xchou_sx': var yeshouArray = new Array("鼠", "牛", "虎", "猴", "狗", "猪"); for (var i = 0; i < yeshouArray.length; i++) { var dataCode = yeshouArray[i]; var obj = $("li[name='lt_place_0']:contains(" + dataCode + ")"); selectNum(obj, true); } break; case 'yangxing_sx': var yeshouArray = new Array("牛", "虎", "兔", "羊", "猴", "鸡"); for (var i = 0; i < yeshouArray.length; i++) { var dataCode = yeshouArray[i]; var obj = $("li[name='lt_place_0']:contains(" + dataCode + ")"); selectNum(obj, true); } break; case 'yinxing_sx': var yeshouArray = new Array("鼠", "龙", "蛇", "马", "狗", "猪"); for (var i = 0; i < yeshouArray.length; i++) { var dataCode = yeshouArray[i]; var obj = $("li[name='lt_place_0']:contains(" + dataCode + ")"); selectNum(obj, true); } break; case 'wxjin_sx': var yeshouArray = new Array("猴", "鸡"); for (var i = 0; i < yeshouArray.length; i++) { var dataCode = yeshouArray[i]; var obj = $("li[name='lt_place_0']:contains(" + dataCode + ")"); selectNum(obj, true); } break; case 'wxmu_sx': var yeshouArray = new Array("虎", "兔"); for (var i = 0; i < yeshouArray.length; i++) { var dataCode = yeshouArray[i]; var obj = $("li[name='lt_place_0']:contains(" + dataCode + ")"); selectNum(obj, true); } break; case 'wxshui_sx': var yeshouArray = new Array("鼠", "猪"); for (var i = 0; i < yeshouArray.length; i++) { var dataCode = yeshouArray[i]; var obj = $("li[name='lt_place_0']:contains(" + dataCode + ")"); selectNum(obj, true); } break; case 'wxhuo_sx': var yeshouArray = new Array("蛇", "马"); for (var i = 0; i < yeshouArray.length; i++) { var dataCode = yeshouArray[i]; var obj = $("li[name='lt_place_0']:contains(" + dataCode + ")"); selectNum(obj, true); } break; case 'wxtu_sx': var yeshouArray = new Array("牛", "龙", "羊", "狗"); for (var i = 0; i < yeshouArray.length; i++) { var dataCode = yeshouArray[i]; var obj = $("li[name='lt_place_0']:contains(" + dataCode + ")"); selectNum(obj, true); } break; case 'cleanAll': var liArray = $("li[name='lt_place_0']"); $.each(liArray, function (i, n) { unSelectNum(n, true); }); break; default: break; } }
                checkNum();
            });
        } else if (otype == 'dxds') { $("div[class='selcleanbutton']", $(this)).click(function () { $.each($(this).parent().children(":first").children(), function (i, n) { unSelectNum(n, true); }); checkNum(); }); }
        $($.lt_id_data.id_sel_times).keyup(function () {
            var times = $(this).val().replace(/[^0-9]/g, "").substring(0, 5); $(this).val(times); if (times == "") { times = 0; } else { times = parseInt(times, 10); }
            var nums = parseInt($($.lt_id_data.id_sel_num).html(), 10); var modes = parseInt($("select[name='lt_project_modes']").val(), 10); var money = Math.round(times * nums * 2 * ($.lt_method_data.modes[modes].rate * 1000)) / 1000; money = isNaN(money) ? 0 : money; $($.lt_id_data.id_sel_money).html(money);
        }); $($.lt_id_data.id_beishuselect).change(function () { $($.lt_id_data.id_sel_times).val($(this).val()).keyup(); }); $("select[name='lt_project_modes']").change(function () { var nums = parseInt($($.lt_id_data.id_sel_num).html(), 10); var times = parseInt($($.lt_id_data.id_sel_times).val(), 10); var modes = parseInt($("select[name='lt_project_modes']").val(), 10); var money = Math.round(times * nums * 2 * ($.lt_method_data.modes[modes].rate * 1000)) / 1000; money = isNaN(money) ? 0 : money; $($.lt_id_data.id_sel_money).html(money); }); $(".PlusSub > i:eq(0)").unbind("click").click(function () { var InputValue = $.trim($("#lt_sel_times").val()); if (parseInt(InputValue) > 1) { $("#lt_sel_times").val(parseInt(InputValue) - 1); $($.lt_id_data.id_sel_times).keyup(); } }); $(".PlusSub > i:eq(1)").unbind("click").click(function () { var InputValue = $.trim($("#lt_sel_times").val()); if (InputValue.length <= 5) { $("#lt_sel_times").val(parseInt(InputValue) + 1); $($.lt_id_data.id_sel_times).keyup(); } }); $("#delteAllNum").unbind("click").click(function () { $.lt_reset(); }); function newNumber(start, end) { return Math.round(Math.random() * (end - start) + start); }
        function isHaveThisNumber(para, num) {
            if (typeof (para) == "object") {
                if (para.length == 0)
                { return false; }
            }
            for (var i = 0; i < para.length; i++) { if (para[i] == num) { return true; } }
            return false;
        }
        function newRandomNumbersWithNoRepeat(start, end, size) {
            var para = new Array(); var rnum; var currentIndex = 0; if (start > end || start < 0 || end < 0 || size < 0) { return; }
            if (end - start + 1 < size) { return; }
            for (var i = 0; i < size; i++) {
                rnum = newNumber(start, end); if (isHaveThisNumber(para, rnum)) { while (isHaveThisNumber(para, rnum)) { rnum = newNumber(start, end); } }
                para[currentIndex++] = rnum;
            }
            return para;
        }
        function clearNumberArea() {
            for (i = 0; i < data_sel.length; i++) { data_sel[i] = []; }
            if (otype == 'input') { $("#lt_write_box", $(me)).val(""); }
            else if (otype == 'digital' || otype == 'dxds' || otype == 'dds') { $.each($("li", $(me)).filter(".selected"), function (i, n) { $(this).removeClass("selected").addClass("button1"); }); }
            select_init(); checkNum(); cleanTraceIssue();
        }
        $($.lt_id_data.id_random_area).unbind("change").change(function () {
            var random_count = $($.lt_id_data.id_random_area).val(); for (var i = 0; i < random_count; i++) { random_j_1(); }
            $($.lt_id_data.id_random_area).find("option[value='0']").attr("selected", "selected");
        }); $($.lt_id_data.newid_random_area).find('li').unbind("click").click(function () {
            var random_count = $(this).val(); for (var i = 0; i < random_count; i++) { random_j_1(); }
            $($.lt_id_data.id_random_area).find("option[value='0']").attr("selected", "selected");
        }); $(".rightCont > a").unbind("click").click(function () {
            if ($(this).hasClass('dis')) return; var random_count = $.trim($(this).attr("valxun")); random_count = Number(random_count); if (random_count == 20) { $.lt_reset(); return; }
            for (var i = 0; i < random_count; i++) { random_j_1(); }
        }); function random_j_1() {
            clearNumberArea(); if (random_bets) {
                for (i = 0; i < data_sel.length; i++) { data_sel[i] = []; }
                if (otype == 'input') { $("#lt_write_box", $(me)).val(""); }
                else if (otype == 'digital' || otype == 'dxds' || otype == 'dds') { $.each($("li", $(me)).filter(".selected"), function (i, n) { $(this).removeClass("selected").addClass("button1"); }); }
            }
            var randomcos = $("#randomcos").val(); var randomcosvalue = $("#randomcosvalue").val(); var totalnum = 0; var minsize = randomcosvalue.split('|'); for (var i = 0; i < minsize.length; i++) { if (minsize[i] > 0) { totalnum += parseInt(minsize[i]); } }
            var end = $("li[name^='lt_place_0']").length; var para = newRandomNumbersWithNoRepeat(0, end - 1, totalnum); var randomcos_arr = []; randomcos_arr.length = randomcos; $.each(randomcos_arr, function (i, v1) { var minsize_arr = []; minsize_arr.length = minsize[i]; $.each(minsize_arr, function (j, v2) { $.each($("li[name^='lt_place_" + i + "']"), function (n, val) { if (n == para[j]) { $(this).trigger("click"); } }); }); para.shift(); }); para = []; $($.lt_id_data.id_sel_insert).trigger("click");
        }; $($.lt_id_data.id_sel_insert).unbind("click").click(function () {
            var nums = parseInt($($.lt_id_data.id_sel_num).html(), 10); var times = parseInt($($.lt_id_data.id_sel_times).val(), 10); var modes = parseInt($("select[name='lt_project_modes']").val(), 10); var money = Math.round(times * nums * 2 * ($.lt_method_data.modes[modes].rate * 1000)) / 1000; var mid = $.lt_method_data.methodid; var current_positionsel = $.lt_position_sel; var cur_position = 0; if (current_positionsel.length > 0) { $.each(current_positionsel, function (i, n) { cur_position += Math.pow(2, 4 - parseInt(n, 10)) }) }
            if (isNaN(nums) || isNaN(times) || isNaN(money) || money <= 0) { $.alert(otype == 'input' ? lot_lang.am_s29 : lot_lang.am_s19); return; }
            if (otype == 'input') {
                var mname = $.lt_method[mid]; var error = []; var edump = []; var ermsg = ""; edump = dumpNum(true); if (edump.length > 0) {
                    if (edump.length > 10) { ermsg += lot_lang.em_s2 + '\n' + edump.slice(0, 10).join(", ") + "\n" + "......"; } else { ermsg += lot_lang.em_s2 + '\n' + edump.join(", ") + "\n"; }
                    checkNum(); nums = parseInt($($.lt_id_data.id_sel_num).html(), 10); money = Math.round(times * nums * 2 * ($.lt_method_data.modes[modes].rate * 1000)) / 1000;
                }
                switch (mname) { case 'RZX3': case 'ZX3': error = _inputCheck_Num(3, true); break; case 'HHZX': error = _inputCheck_Num(3, true, _HHZXcheck, true); break; case "RZX2": case 'ZX2': error = _inputCheck_Num(2, true); break; case 'R2ZU': case 'ZU2': error = _inputCheck_Num(2, true, _HHZXcheck, true); break; case 'ZU2': error = _inputCheck_Num(2, true, _HHZXcheck, true); break; case 'ZX5': error = _inputCheck_Num(5, true); break; case 'ZX4': error = _inputCheck_Num(4, true); break; case 'ZUS': error = _inputCheck_Num(3, true, _ETHDXcheck, true); break; case 'R3ZUS': error = _inputCheck_Num(3, true, _ZUSDScheck, true); break; case 'R3ZUL': error = _inputCheck_Num(3, true, _ZULDScheck, true); break; case 'ZUL': error = _inputCheck_Num(3, true, _SBTHDScheck, true); break; case 'SDZX3': error = _inputCheck_Num(8, true, _SDinputCheck, false); break; case 'SDZU3': error = _inputCheck_Num(8, true, _SDinputCheck, true); break; case 'SDZX2': error = _inputCheck_Num(5, true, _SDinputCheck, false); break; case 'N2cai': error = _inputCheck_Num(5, true, _SDinputCheck, false); break; case 'N3cai': error = _inputCheck_Num(8, true, _SDinputCheck, false); break; case 'N4cai': error = _inputCheck_Num(11, true, _PK10inputCheck, false); break; case 'N5cai': error = _inputCheck_Num(14, true, _PK10inputCheck, false); break; case 'N6cai': error = _inputCheck_Num(17, true, _PK10inputCheck, false); break; case 'SDZU2': error = _inputCheck_Num(5, true, _SDinputCheck, true); break; case 'SDRX1': error = _inputCheck_Num(2, true, _SDinputCheck, false); break; case 'SDRX2': error = _inputCheck_Num(5, true, _SDinputCheck, true); break; case 'SDRX3': error = _inputCheck_Num(8, true, _SDinputCheck, true); break; case 'SDRX4': error = _inputCheck_Num(11, true, _SDinputCheck, true); break; case 'SDRX5': error = _inputCheck_Num(14, true, _SDinputCheck, true); break; case 'SDRX6': error = _inputCheck_Num(17, true, _SDinputCheck, true); break; case 'SDRX7': error = _inputCheck_Num(20, true, _SDinputCheck, true); break; case 'SDRX8': error = _inputCheck_Num(23, true, _SDinputCheck, true); break; case "RZX4": error = _inputCheck_Num(4, true); break; case 'ETHDX': error = _inputCheck_Num(3, true, _ETHDXcheck, true); break; case 'EBTH': error = _inputCheck_Num(2, true, _EBTHDScheck, true); break; default: break; }
                if (error.length > 0) {
                    if (error.length > 10)
                        ermsg += lot_lang.em_s1 + '\n' + error.slice(0, 10).join(", ") + "\n" + "......"; else
                        ermsg += lot_lang.em_s1 + '\n' + error.join(", ") + "\n";
                }
                if (ermsg.length > 1) { $.alert(ermsg); }
            }
            var nos = $.lt_method_data.str; var serverdata = "{'type':'" + otype + "','methodid':" + mid + ",'codes':'"; var temp = []; var str = ""; var ctStr = ""; var selRs = new Array('x', 'x', 'x', 'x', 'x'); var selStr = ''; var nosShow = ''; for (i = 0; i < data_sel.length; i++) {
                nos = nos.replace('X', data_sel[i].sort(_SortNum).join($.lt_method_data.sp)); nosShow = nos.replace('X', data_sel[i].sort(_SortNum).join($.lt_method_data.sp)); if (($.lt_method[mid] == "RZX3HZ" && otype == "digital") || ($.lt_method[mid] == "R4ZU4" && otype == "digital") || ($.lt_method[mid] == "R4ZU6" && otype == "digital") || ($.lt_method[mid] == "R4ZU12" && otype == "digital") || ($.lt_method[mid] == "R4ZU24" && otype == "digital") || ($.lt_method[mid] == "R3ZUHZ" && otype == "digital") || ($.lt_method[mid] == "R3ZUL" && otype == "digital") || ($.lt_method[mid] == "R3ZUS" && otype == "digital") || ($.lt_method[mid] == "RZX2" && otype == "digital") || ($.lt_method[mid] == "RZX2HZ" && otype == "digital") || ($.lt_method[mid] == "R2ZU" && otype == "digital") || ($.lt_method[mid] == "R2ZUHZ" && otype == "digital") || ($.lt_method[mid] == "RZX3" && otype == "digital") || ($.lt_method[mid] == "RZX4" && otype == "digital") || ($.lt_method[mid] == "LHD_LH" && otype == "digital") || ($.lt_method[mid] == "LHD_H" && otype == "digital")) { selRs[i] = data_sel[i]; str = str + data_sel[i]; ctStr = ctStr + data_sel[i] + "@"; } else if (($.lt_method[mid] == "RZX2" && otype == "input") || ($.lt_method[mid] == "R2ZU" && otype == "input")) {
                    str = str + data_sel[i]; ctStr = ctStr + data_sel[i] + "@"; str = str.replace(/,/g, '_'); temp = []; selStr = '' + current_positionsel; var positionselArr = selStr.split(","); var strarr = str.split(','); var rs = getCombination(positionselArr, 2)
                    for (var k = 0; k < rs.length; k++) { if (rs[k].length == 3) { var sel = rs[k].split(","); var nos = ""; nos = str + "@" + rs[k]; temp.push(nos); } }
                } else if (($.lt_method[mid] == "RZX3" && otype == "input")) {
                    str = str + data_sel[i]; ctStr = ctStr + data_sel[i] + "@"; str = str.replace(/,/g, '_'); temp = []; selStr = '' + current_positionsel; var positionselArr = selStr.split(","); var strarr = str.split(','); var rs = getCombination(positionselArr, 3)
                    for (var k = 0; k < rs.length; k++) { if (rs[k].length == 5) { var sel = rs[k].split(","); var nos = ""; nos = str + "@" + rs[k]; temp.push(nos); } }
                } else if ($.lt_method[mid] == "RZX4" && otype == "input") {
                    str = str + data_sel[i]; ctStr = ctStr + data_sel[i] + "@"; str = str.replace(/,/g, '_'); temp = []; selStr = '' + current_positionsel; var positionselArr = selStr.split(","); var strarr = str.split(','); var rs = getCombination(positionselArr, 4)
                    for (var k = 0; k < rs.length; k++) { if (rs[k].length == 7) { var sel = rs[k].split(","); var nos = ""; nos = str + "@" + rs[k]; temp.push(nos); } }
                } else if ($.lt_method[mid] == "R3HHZC") { str = str + data_sel[i]; ctStr = ctStr + data_sel[i] + "@"; str = str.replace(/,/g, '_'); temp = []; selStr = '' + current_positionsel; var nos = ""; nos = str + "@" + selStr; temp.push(nos); } else { str = nos; temp.push(data_sel[i].sort(_SortNum).join("&")); }
            }
            if (($.lt_method[mid] == "RZX2" && otype == 'digital')) {
                selStr = ''; if (selRs[0] != '') { selStr = selStr + '0,'; }
                if (selRs[1] != '') { selStr = selStr + '1,'; }
                if (selRs[2] != '') { selStr = selStr + '2,'; }
                if (selRs[3] != '') { selStr = selStr + '3,'; }
                if (selRs[4] != '') { selStr = selStr + '4,'; }
                var positionselArr = selStr.split(","); var rs = getCombination(positionselArr, 2)
                for (var k = 0; k < rs.length; k++) {
                    if (rs[k].length == 3) {
                        var sel = rs[k].split(","); var nos = ""; for (var x = 0; x < sel.length; x++) { nos = nos + selRs[sel[x]] + "_"; }
                        nos = nos.substring(0, nos.length - 1); nos = nos.replace(/,/g, ''); temp.push(nos + "@" + sel);
                    }
                }
            }
            if (($.lt_method[mid] == "R2ZU" && otype == 'digital') || ($.lt_method[mid] == "LHD_LH" && otype == "digital") || ($.lt_method[mid] == "LHD_H" && otype == "digital")) { temp = []; selStr = '' + current_positionsel; var positionselArr = selStr.split(","); str = str.replace(/,/g, '_'); var rs = getCombination(positionselArr, 2); for (var k = 0; k < rs.length; k++) { if (rs[k].length == 3) { var sel = rs[k].split(","); var nos = ""; nos = str + "@" + rs[k]; temp.push(nos); } } }
            if (($.lt_method[mid] == "RZX2HZ" && otype == 'digital') || ($.lt_method[mid] == "R2ZUHZ" && otype == 'digital')) { temp = []; selStr = '' + current_positionsel; var positionselArr = selStr.split(","); str = str.replace(/,/g, '_'); var rs = getCombination(positionselArr, 2); for (var k = 0; k < rs.length; k++) { if (rs[k].length == 3) { var sel = rs[k].split(","); var nos = ""; nos = str + "@" + rs[k]; temp.push(nos); } } }
            if (($.lt_method[mid] == "R3ZUS" && otype == 'digital') || ($.lt_method[mid] == "R3ZUL" && otype == 'digital') || ($.lt_method[mid] == "R3ZUHZ" && otype == 'digital') || ($.lt_method[mid] == "RZX3HZ" && otype == 'digital')) { temp = []; selStr = '' + current_positionsel; var positionselArr = selStr.split(","); str = str.replace(/,/g, '_'); var rs = getCombination(positionselArr, 3); for (var k = 0; k < rs.length; k++) { if (rs[k].length == 5) { var sel = rs[k].split(","); var nos = ""; nos = str + "@" + rs[k]; temp.push(nos); } } }
            if ($.lt_method[mid] == "RZX3" && otype == 'digital') {
                selStr = ''; if (selRs[0] != '') { selStr = selStr + '0,'; }
                if (selRs[1] != '') { selStr = selStr + '1,'; }
                if (selRs[2] != '') { selStr = selStr + '2,'; }
                if (selRs[3] != '') { selStr = selStr + '3,'; }
                if (selRs[4] != '') { selStr = selStr + '4,'; }
                var positionselArr = selStr.split(","); var rs = getCombination(positionselArr, 3)
                for (var k = 0; k < rs.length; k++) {
                    if (rs[k].length == 5) {
                        var sel = rs[k].split(","); var nos = ""; for (var x = 0; x < sel.length; x++) { nos = nos + selRs[sel[x]] + '_'; }
                        nos = nos.substring(0, nos.length - 1); nos = nos.replace(/,/g, ''); temp.push(nos + "@" + sel);
                    }
                }
            }
            if ($.lt_method[mid] == "RZX4" && otype == 'digital') {
                selStr = ''; if (selRs[0] != '') { selStr = selStr + '0,'; }
                if (selRs[1] != '') { selStr = selStr + '1,'; }
                if (selRs[2] != '') { selStr = selStr + '2,'; }
                if (selRs[3] != '') { selStr = selStr + '3,'; }
                if (selRs[4] != '') { selStr = selStr + '4,'; }
                var positionselArr = selStr.split(","); var rs = getCombination(positionselArr, 4)
                for (var k = 0; k < rs.length; k++) {
                    if (rs[k].length == 7) {
                        var sel = rs[k].split(","); var nos = ""; for (var x = 0; x < sel.length; x++) { nos = nos + selRs[sel[x]] + '_'; }
                        nos = nos.substring(0, nos.length - 1); nos = nos.replace(/,/g, ''); temp.push(nos + "@" + sel);
                    }
                }
            }
            if (($.lt_method[mid] == "R4ZU24" && otype == 'digital') || ($.lt_method[mid] == "R4ZU6" && otype == 'digital')) { temp = []; selStr = '' + current_positionsel; var positionselArr = selStr.split(","); str = str.replace(/,/g, '_'); var rs = getCombination(positionselArr, 4); for (var k = 0; k < rs.length; k++) { if (rs[k].length == 7) { var sel = rs[k].split(","); var nos = ""; nos = str + "@" + rs[k]; temp.push(nos); } } }
            if (($.lt_method[mid] == "R4ZU12" && otype == 'digital') || ($.lt_method[mid] == "R4ZU4" && otype == 'digital')) {
                var str0 = ''; var str1 = ''; if (selRs[0] != '') { str0 = selRs[0]; }
                if (selRs[1] != '') { str1 = selRs[1]; }
                str = str0 + "_" + str1; str = str.replace(/,/g, ""); temp = []; selStr = '' + current_positionsel; var positionselArr = selStr.split(","); var rs = getCombination(positionselArr, 4); for (var k = 0; k < rs.length; k++) { if (rs[k].length == 7) { var sel = rs[k].split(","); var nos = ""; nos = str + "@" + rs[k]; temp.push(nos); } }
            }
            if (nosShow.length > 40) { var rand = (Math.random() + '').substr(2, 8); var nohtml = nosShow.substring(0, 37) + ' ......<a href="#" onclick="div_slow_show(' + rand + ');return(false);">' + lot_lang.dec_s5 + '</a>'; nohtml += '<div id="div_slow_id_' + rand + '" class="more" style="display:none;text-align:right;margin-right:10px"><a class="close" href="#" onclick="div_slow_hide(' + rand + ');return(false);">[' + lot_lang.dec_s6 + ']</a><br /><textarea class="code" readonly="readonly">' + nosShow + '</textarea></div>'; } else { var nohtml = nosShow; }
            var pmodel = $("#pmode").val(); if (typeof (pmodel) != "undefined") {
                switch (pmodel) { case '2': stemp = $.lt_method_data.nfdprize.levs; break; default: stemp = $.lt_method_data.nfdprize.defaultprize; }
                stemp = '模式:' + stemp
            }
            else { stemp = ""; pmodel = $.lt_method_data.nfdprize.userdiffpoint; }
            if ($.lt_same_code[mid] != undefined && $.lt_same_code[mid][modes] != undefined && $.lt_same_code[mid][modes].length > 0) { if ($.inArray(temp.join("|"), $.lt_same_code[mid][modes]) != -1) { $.alert(lot_lang.am_s28); return false; } }
            var nohtmlcode = nohtml; nohtml = '[' + $.lt_method_data.title + '_' + $.lt_method_data.name + '] ' + nohtml; noshtml = '[' + $.lt_method_data.title + '_' + $.lt_method_data.name + '] ' + nos.substring(0, 37); var mname = $.lt_method[mid]; if (selStr.substring(selStr.length - 1) == ",") { selStr = selStr.substring(0, selStr.length - 1); }
            ctStr = ctStr.substring(0, ctStr.length - 1); if (($("input[name='poschoose']").val() && mname == 'RZX3') || ($("input[name='poschoose']").val() && mname == 'R4ZU6') || ($("input[name='poschoose']").val() && mname == 'R4ZU12') || ($("input[name='poschoose']").val() || mname == 'R4ZU4' || mname == 'RZX2HZ' || mname == 'R2ZU' || mname == 'R2ZUHZ' || mname == 'R3ZUS' || mname == 'R3ZUL' || mname == 'R3ZUHZ' || mname == 'R4ZU24' || mname == 'RZX4')) { serverdata += temp.join("|") + "','nums':" + nums + ",'omodel':" + pmodel + ",'times':" + times + ",'money':" + money + ",'mode':" + modes + ",'desc':'" + noshtml + "','poschoose':'" + $("input[name='poschoose']").val() + "','selStr':'" + selStr + "','ctStr':'" + ctStr + "'}"; } else { serverdata += temp.join("|") + "','nums':" + nums + ",'omodel':" + pmodel + ",'times':" + times + ",'money':" + money + ",'mode':" + modes + ",'desc':'" + noshtml + "','selStr':'" + selStr + "','ctStr':'" + ctStr + "'}"; }
            var cfhtml = "<li><div class=\"part01\">" + "<label>" + $.lt_method_data.title + '_' + $.lt_method_data.name + "</label>" + "<span class=\"numMix\">" + nohtmlcode + "</span><span class=\"betMix\">" + nums + lot_lang.dec_s1 + "</span><span class=\"moneyMix\">￥" + money + "</span></div>" + "<a href=\"javascript:void(0);\" class=\"del_one del\">x</a>" + '<input type="hidden" name="lt_project[]" value="' + serverdata + '" />' + "</li>"; var $cfhtml = $(cfhtml); $cfhtml.prependTo($.lt_id_data.id_cf_content); $("#singe_bet_count").text($(".part01").length); $.lt_total_nums += nums; $.lt_total_money += money; $.lt_total_money = Math.round($.lt_total_money * 1000) / 1000; basemoney = Math.round(nums * 2 * ($.lt_method_data.modes[modes].rate * 1000)) / 1000; $.lt_trace_base = Math.round(($.lt_trace_base + basemoney) * 1000) / 1000; $($.lt_id_data.id_cf_num).html($.lt_total_nums); $($.lt_id_data.id_cf_money).html($.lt_total_money); $($.lt_id_data.id_cf_count).html(parseInt($($.lt_id_data.id_cf_count).html(), 10) + 1); var pc = 0; var pz = 0; $.each($.lt_method_data.prize, function (i, n) { n = isNaN(Number(n)) ? 0 : Number(n); pz = pz > n ? pz : n; pc++; }); if (pc != 1) { pz = 0; }
            pz = Math.round(pz * ($.lt_method_data.modes[modes].rate * 1000)) / 1000; $cfhtml.data('data', { methodid: mid, nums: nums, money: money, modes: modes, basemoney: basemoney, prize: pz, code: temp.join("|") }); if ($.lt_same_code[mid] == undefined) { $.lt_same_code[mid] = []; }
            if ($.lt_same_code[mid][modes] == undefined) { $.lt_same_code[mid][modes] = []; }
            $.lt_same_code[mid][modes].push(temp.join("|")); $('a', $cfhtml).filter(".del").click(function () {
                var n = $cfhtml.data('data').nums; var m = $cfhtml.data('data').money; var b = $cfhtml.data('data').basemoney; var c = $cfhtml.data('data').code; var d = $cfhtml.data('data').methodid; var f = $cfhtml.data('data').modes; var i = null; $.each($.lt_same_code[d][f], function (k, code) { if (code == c) { i = k; } }); if (i != null) { $.lt_same_code[d][f].splice(i, 1); } else { $.alert(lot_lang.am_s27); return; }
                $.lt_total_nums -= n; $.lt_total_money -= m; $.lt_total_money = Math.round($.lt_total_money * 1000) / 1000; $.lt_trace_base = Math.round(($.lt_trace_base - b) * 1000) / 1000; $(this).parent().remove(); $($.lt_id_data.id_cf_num).html($.lt_total_nums); $($.lt_id_data.id_cf_money).html($.lt_total_money); $($.lt_id_data.id_cf_count).html(parseInt($($.lt_id_data.id_cf_count).html(), 10) - 1); $("#singe_bet_count").html($(".part01").length); cleanTraceIssue();
            }); SetCookie('modes', modes, 86400); for (i = 0; i < data_sel.length; i++) { data_sel[i] = []; }
            if (otype == 'input') { $("#lt_write_box", $(me)).val(""); }
            else if (otype == 'digital' || otype == 'dxds' || otype == 'dds') { $.each($("li", $(me)).filter(".selected"), function (i, n) { $(this).removeClass("selected").addClass("button1"); }); }
            select_init(); checkNum(); cleanTraceIssue();
        }); $($.lt_id_data.id_sel_onekeybet).unbind("click").click(function () {
            $($.lt_id_data.id_cf_content).empty(); $.lt_same_code = []; $.lt_total_nums = 0; $.lt_total_money = 0; var nums = parseInt($($.lt_id_data.id_sel_num).html(), 10); var times = parseInt($($.lt_id_data.id_sel_times).val(), 10); var modes = parseInt($("select[name='lt_project_modes']").val(), 10); var money = Math.round(times * nums * 2 * ($.lt_method_data.modes[modes].rate * 1000)) / 1000; var mid = $.lt_method_data.methodid; var current_positionsel = $.lt_position_sel; var cur_position = 0; if (current_positionsel.length > 0) { $.each(current_positionsel, function (i, n) { cur_position += Math.pow(2, 4 - parseInt(n, 10)) }) }
            if (isNaN(nums) || isNaN(times) || isNaN(money) || money <= 0) { $.alert(otype == 'input' ? lot_lang.am_s29 : lot_lang.am_s19); return; }
            var ermsg = ""; if (otype == 'input') {
                var mname = $.lt_method[mid]; var error = []; var edump = []; edump = dumpNum(true); if (edump.length > 0) {
                    if (edump.length > 10) { ermsg += lot_lang.em_s2 + '\n' + edump.slice(0, 10).join(", ") + "\n" + "......"; } else { ermsg += lot_lang.em_s2 + '\n' + edump.join(", ") + "\n"; }
                    checkNum(); nums = parseInt($($.lt_id_data.id_sel_num).html(), 10); money = Math.round(times * nums * 2 * ($.lt_method_data.modes[modes].rate * 1000)) / 1000;
                }
                switch (mname) { case 'RZX3': case 'ZX3': error = _inputCheck_Num(3, true); break; case 'HHZX': error = _inputCheck_Num(3, true, _HHZXcheck, true); break; case "RZX2": case 'ZX2': error = _inputCheck_Num(2, true); break; case 'R2ZU': case 'ZU2': error = _inputCheck_Num(2, true, _HHZXcheck, true); break; case 'ZU2': error = _inputCheck_Num(2, true, _HHZXcheck, true); break; case 'ZX5': error = _inputCheck_Num(5, true); break; case 'ZX4': error = _inputCheck_Num(4, true); break; case 'ZUS': error = _inputCheck_Num(3, true, _ETHDXcheck, true); break; case 'R3ZUS': error = _inputCheck_Num(3, true, _ZUSDScheck, true); break; case 'R3ZUL': error = _inputCheck_Num(3, true, _ZULDScheck, true); break; case 'ZUL': error = _inputCheck_Num(3, true, _SBTHDScheck, true); break; case 'SDZX3': error = _inputCheck_Num(8, true, _SDinputCheck, false); break; case 'SDZU3': error = _inputCheck_Num(8, true, _SDinputCheck, true); break; case 'SDZX2': error = _inputCheck_Num(5, true, _SDinputCheck, false); break; case 'N2cai': error = _inputCheck_Num(5, true, _SDinputCheck, false); break; case 'SDZU2': error = _inputCheck_Num(5, true, _SDinputCheck, true); break; case 'SDRX1': error = _inputCheck_Num(2, true, _SDinputCheck, false); break; case 'SDRX2': error = _inputCheck_Num(5, true, _SDinputCheck, true); break; case 'SDRX3': error = _inputCheck_Num(8, true, _SDinputCheck, true); break; case 'SDRX4': error = _inputCheck_Num(11, true, _SDinputCheck, true); break; case 'SDRX5': error = _inputCheck_Num(14, true, _SDinputCheck, true); break; case 'SDRX6': error = _inputCheck_Num(17, true, _SDinputCheck, true); break; case 'SDRX7': error = _inputCheck_Num(20, true, _SDinputCheck, true); break; case 'SDRX8': error = _inputCheck_Num(23, true, _SDinputCheck, true); break; case "RZX4": error = _inputCheck_Num(4, true); break; default: break; }
                if (error.length > 0) {
                    if (error.length > 10)
                        ermsg += lot_lang.em_s1 + '\n' + error.slice(0, 10).join(", ") + "\n" + "......"; else
                        ermsg += lot_lang.em_s1 + '\n' + error.join(", ") + "\n";
                }
            }
            var nos = $.lt_method_data.str; var serverdata = "{'type':'" + otype + "','methodid':" + mid + ",'codes':'"; var temp = []; var str = ""; var ctStr = ""; var selRs = new Array('x', 'x', 'x', 'x', 'x'); var selStr = ''; var nosShow = ''; for (i = 0; i < data_sel.length; i++) {
                nos = nos.replace('X', data_sel[i].sort(_SortNum).join($.lt_method_data.sp)); nosShow = nos.replace('X', data_sel[i].sort(_SortNum).join($.lt_method_data.sp)); if (($.lt_method[mid] == "RZX3HZ" && otype == "digital") || ($.lt_method[mid] == "R4ZU4" && otype == "digital") || ($.lt_method[mid] == "R4ZU6" && otype == "digital") || ($.lt_method[mid] == "R4ZU12" && otype == "digital") || ($.lt_method[mid] == "R4ZU24" && otype == "digital") || ($.lt_method[mid] == "R3ZUHZ" && otype == "digital") || ($.lt_method[mid] == "R3ZUL" && otype == "digital") || ($.lt_method[mid] == "R3ZUS" && otype == "digital") || ($.lt_method[mid] == "RZX2" && otype == "digital") || ($.lt_method[mid] == "RZX2HZ" && otype == "digital") || ($.lt_method[mid] == "R2ZU" && otype == "digital") || ($.lt_method[mid] == "R2ZUHZ" && otype == "digital") || ($.lt_method[mid] == "RZX3" && otype == "digital") || ($.lt_method[mid] == "RZX4" && otype == "digital") || ($.lt_method[mid] == "LHD_LH" && otype == "digital") || ($.lt_method[mid] == "LHD_H" && otype == "digital")) { selRs[i] = data_sel[i]; str = str + data_sel[i]; ctStr = ctStr + data_sel[i] + "@"; } else if (($.lt_method[mid] == "RZX2" && otype == "input") || ($.lt_method[mid] == "R2ZU" && otype == "input")) {
                    str = str + data_sel[i]; ctStr = ctStr + data_sel[i] + "@"; str = str.replace(/,/g, '_'); temp = []; selStr = '' + current_positionsel; var positionselArr = selStr.split(","); var strarr = str.split(','); var rs = getCombination(positionselArr, 2)
                    for (var k = 0; k < rs.length; k++) { if (rs[k].length == 3) { var sel = rs[k].split(","); var nos = ""; nos = str + "@" + rs[k]; temp.push(nos); } }
                } else if (($.lt_method[mid] == "RZX3" && otype == "input")) { str = str + data_sel[i]; ctStr = ctStr + data_sel[i] + "@"; str = str.replace(/,/g, '_'); temp = []; selStr = '' + current_positionsel; var positionselArr = selStr.split(","); var strarr = str.split(','); var rs = getCombination(positionselArr, 3); for (var k = 0; k < rs.length; k++) { if (rs[k].length == 5) { var sel = rs[k].split(","); var nos = ""; nos = str + "@" + rs[k]; temp.push(nos); } } } else if ($.lt_method[mid] == "RZX4" && otype == "input") { str = str + data_sel[i]; ctStr = ctStr + data_sel[i] + "@"; str = str.replace(/,/g, '_'); temp = []; selStr = '' + current_positionsel; var positionselArr = selStr.split(","); var strarr = str.split(','); var rs = getCombination(positionselArr, 4); for (var k = 0; k < rs.length; k++) { if (rs[k].length == 7) { var sel = rs[k].split(","); var nos = ""; nos = str + "@" + rs[k]; temp.push(nos); } } } else if ($.lt_method[mid] == "R3HHZC") { str = str + data_sel[i]; ctStr = ctStr + data_sel[i] + "@"; str = str.replace(/,/g, '_'); temp = []; selStr = '' + current_positionsel; var nos = ""; nos = str + "@" + selStr; temp.push(nos); } else { str = nos; temp.push(data_sel[i].sort(_SortNum).join("&")); }
            }
            if (($.lt_method[mid] == "RZX2" && otype == 'digital')) {
                selStr = ''; if (selRs[0] != '') { selStr = selStr + '0,'; }
                if (selRs[1] != '') { selStr = selStr + '1,'; }
                if (selRs[2] != '') { selStr = selStr + '2,'; }
                if (selRs[3] != '') { selStr = selStr + '3,'; }
                if (selRs[4] != '') { selStr = selStr + '4,'; }
                var positionselArr = selStr.split(","); var rs = getCombination(positionselArr, 2)
                for (var k = 0; k < rs.length; k++) {
                    if (rs[k].length == 3) {
                        var sel = rs[k].split(","); var nos = ""; for (var x = 0; x < sel.length; x++) { nos = nos + selRs[sel[x]] + "_"; }
                        nos = nos.substring(0, nos.length - 1); nos = nos.replace(/,/g, ''); temp.push(nos + "@" + sel);
                    }
                }
            }
            if (($.lt_method[mid] == "R2ZU" && otype == 'digital') || ($.lt_method[mid] == "LHD_LH" && otype == "digital") || ($.lt_method[mid] == "LHD_H" && otype == "digital")) { temp = []; selStr = '' + current_positionsel; var positionselArr = selStr.split(","); str = str.replace(/,/g, '_'); var rs = getCombination(positionselArr, 2); for (var k = 0; k < rs.length; k++) { if (rs[k].length == 3) { var sel = rs[k].split(","); var nos = ""; nos = str + "@" + rs[k]; temp.push(nos); } } }
            if (($.lt_method[mid] == "RZX2HZ" && otype == 'digital') || ($.lt_method[mid] == "R2ZUHZ" && otype == 'digital')) { temp = []; selStr = '' + current_positionsel; var positionselArr = selStr.split(","); str = str.replace(/,/g, '_'); var rs = getCombination(positionselArr, 2); for (var k = 0; k < rs.length; k++) { if (rs[k].length == 3) { var sel = rs[k].split(","); var nos = ""; nos = str + "@" + rs[k]; temp.push(nos); } } }
            if (($.lt_method[mid] == "R3ZUS" && otype == 'digital') || ($.lt_method[mid] == "R3ZUL" && otype == 'digital') || ($.lt_method[mid] == "R3ZUHZ" && otype == 'digital') || ($.lt_method[mid] == "RZX3HZ" && otype == 'digital')) { temp = []; selStr = '' + current_positionsel; var positionselArr = selStr.split(","); str = str.replace(/,/g, '_'); var rs = getCombination(positionselArr, 3); for (var k = 0; k < rs.length; k++) { if (rs[k].length == 5) { var sel = rs[k].split(","); var nos = ""; nos = str + "@" + rs[k]; temp.push(nos); } } }
            if ($.lt_method[mid] == "RZX3" && otype == 'digital') {
                selStr = ''; if (selRs[0] != '') { selStr = selStr + '0,'; }
                if (selRs[1] != '') { selStr = selStr + '1,'; }
                if (selRs[2] != '') { selStr = selStr + '2,'; }
                if (selRs[3] != '') { selStr = selStr + '3,'; }
                if (selRs[4] != '') { selStr = selStr + '4,'; }
                var positionselArr = selStr.split(","); var rs = getCombination(positionselArr, 3)
                for (var k = 0; k < rs.length; k++) {
                    if (rs[k].length == 5) {
                        var sel = rs[k].split(","); var nos = ""; for (var x = 0; x < sel.length; x++) { nos = nos + selRs[sel[x]] + '_'; }
                        nos = nos.substring(0, nos.length - 1); nos = nos.replace(/,/g, ''); temp.push(nos + "@" + sel);
                    }
                }
            }
            if ($.lt_method[mid] == "RZX4" && otype == 'digital') {
                selStr = ''; if (selRs[0] != '') { selStr = selStr + '0,'; }
                if (selRs[1] != '') { selStr = selStr + '1,'; }
                if (selRs[2] != '') { selStr = selStr + '2,'; }
                if (selRs[3] != '') { selStr = selStr + '3,'; }
                if (selRs[4] != '') { selStr = selStr + '4,'; }
                var positionselArr = selStr.split(","); var rs = getCombination(positionselArr, 4)
                for (var k = 0; k < rs.length; k++) {
                    if (rs[k].length == 7) {
                        var sel = rs[k].split(","); var nos = ""; for (var x = 0; x < sel.length; x++) { nos = nos + selRs[sel[x]] + '_'; }
                        nos = nos.substring(0, nos.length - 1); nos = nos.replace(/,/g, ''); temp.push(nos + "@" + sel);
                    }
                }
            }
            if (($.lt_method[mid] == "R4ZU24" && otype == 'digital') || ($.lt_method[mid] == "R4ZU6" && otype == 'digital')) { temp = []; selStr = '' + current_positionsel; var positionselArr = selStr.split(","); str = str.replace(/,/g, '_'); var rs = getCombination(positionselArr, 4); for (var k = 0; k < rs.length; k++) { if (rs[k].length == 7) { var sel = rs[k].split(","); var nos = ""; nos = str + "@" + rs[k]; temp.push(nos); } } }
            if (($.lt_method[mid] == "R4ZU12" && otype == 'digital') || ($.lt_method[mid] == "R4ZU4" && otype == 'digital')) {
                var str0 = ''; var str1 = ''; if (selRs[0] != '') { str0 = selRs[0]; }
                if (selRs[1] != '') { str1 = selRs[1]; }
                str = str0 + "_" + str1; str = str.replace(/,/g, ""); temp = []; selStr = '' + current_positionsel; var positionselArr = selStr.split(","); var rs = getCombination(positionselArr, 4); for (var k = 0; k < rs.length; k++) { if (rs[k].length == 7) { var sel = rs[k].split(","); var nos = ""; nos = str + "@" + rs[k]; temp.push(nos); } }
            }
            if (nosShow.length > 40) { var rand = (Math.random() + '').substr(2, 8); var nohtml = nosShow.substring(0, 37) + ' ......<a href="#" onclick="div_slow_show(' + rand + ');return(false);" style="color:#FFF;">' + lot_lang.dec_s5 + '</a>'; nohtml += '<div id="div_slow_id_' + rand + '" class="more" style="display:none;left:350px;text-align:right;margin-right:10px"><a class="close" href="#" onclick="div_slow_hide(' + rand + ');return(false);" style="color:#cdcdcd;">[' + lot_lang.dec_s6 + ']</a><br /><textarea class="code" readonly="readonly">' + nosShow + '</textarea></div>'; } else { var nohtml = nosShow; }
            var pmodel = $("#pmode").val(); if (typeof (pmodel) != "undefined") {
                switch (pmodel) { case '2': stemp = $.lt_method_data.nfdprize.levs; break; default: stemp = $.lt_method_data.nfdprize.defaultprize; }
                stemp = '模式:' + stemp
            }
            else { stemp = ""; pmodel = $.lt_method_data.nfdprize.userdiffpoint; }
            if ($.lt_same_code[mid] != undefined && $.lt_same_code[mid][modes] != undefined && $.lt_same_code[mid][modes].length > 0) { if ($.inArray(temp.join("|"), $.lt_same_code[mid][modes]) != -1) { $.alert(lot_lang.am_s28); return false; } }
            var nohtmlcode = nohtml; nohtml = '[' + $.lt_method_data.title + '_' + $.lt_method_data.name + '] ' + nohtml; noshtml = '[' + $.lt_method_data.title + '_' + $.lt_method_data.name + '] ' + nos.substring(0, 37); var mname = $.lt_method[mid]; if (selStr.substring(selStr.length - 1) == ",") { selStr = selStr.substring(0, selStr.length - 1); }
            ctStr = ctStr.substring(0, ctStr.length - 1); if (($("input[name='poschoose']").val() && mname == 'RZX3') || ($("input[name='poschoose']").val() && mname == 'R4ZU6') || ($("input[name='poschoose']").val() && mname == 'R4ZU12') || ($("input[name='poschoose']").val() || mname == 'R4ZU4' || mname == 'RZX2HZ' || mname == 'R2ZU' || mname == 'R2ZUHZ' || mname == 'R3ZUS' || mname == 'R3ZUL' || mname == 'R3ZUHZ' || mname == 'R4ZU24' || mname == 'RZX4')) { serverdata += temp.join("|") + "','nums':" + nums + ",'omodel':" + pmodel + ",'times':" + times + ",'money':" + money + ",'mode':" + modes + ",'desc':'" + noshtml + "','poschoose':'" + $("input[name='poschoose']").val() + "','selStr':'" + selStr + "','ctStr':'" + ctStr + "'}"; } else { serverdata += temp.join("|") + "','nums':" + nums + ",'omodel':" + pmodel + ",'times':" + times + ",'money':" + money + ",'mode':" + modes + ",'desc':'" + noshtml + "','selStr':'" + selStr + "','ctStr':'" + ctStr + "'}"; }
            var cfhtml = "<li style='background: none;'>" + "<div class=\"part01\"style=\"display:none;\">" + "<label>" + $.lt_method_data.title + '_' + $.lt_method_data.name + "</label>" + "<span class=\"numMix\">" + nohtmlcode + "</span><span class=\"betMix\">" + nums + lot_lang.dec_s1 + "</span><span class=\"moneyMix\">￥" + money + "</span></div>" + '<input type="hidden" name="lt_project[]" value="' + serverdata + '" />' + "</li>"; var $cfhtml = $(cfhtml); $cfhtml.prependTo($.lt_id_data.id_cf_content); $("#singe_bet_count").text($(".part01").length); $.lt_total_nums += nums; $.lt_total_money += money; $.lt_total_money = Math.round($.lt_total_money * 1000) / 1000; basemoney = Math.round(nums * 2 * ($.lt_method_data.modes[modes].rate * 1000)) / 1000; $.lt_trace_base = Math.round(($.lt_trace_base + basemoney) * 1000) / 1000; $($.lt_id_data.id_cf_num).html($.lt_total_nums); $($.lt_id_data.id_cf_money).html($.lt_total_money); $($.lt_id_data.id_cf_count).html(parseInt($($.lt_id_data.id_cf_count).html(), 10) + 1); var pc = 0; var pz = 0; $.each($.lt_method_data.prize, function (i, n) { n = isNaN(Number(n)) ? 0 : Number(n); pz = pz > n ? pz : n; pc++; }); if (pc != 1) { pz = 0; }
            pz = Math.round(pz * ($.lt_method_data.modes[modes].rate * 1000)) / 1000; $cfhtml.data('data', { methodid: mid, nums: nums, money: money, modes: modes, basemoney: basemoney, prize: pz, code: temp.join("|") }); if ($.lt_same_code[mid] == undefined) { $.lt_same_code[mid] = []; }
            if ($.lt_same_code[mid][modes] == undefined) { $.lt_same_code[mid][modes] = []; }
            $.lt_same_code[mid][modes].push(temp.join("|")); SetCookie('modes', modes, 86400); for (i = 0; i < data_sel.length; i++) { data_sel[i] = []; }
            if (otype == 'input') { $("#lt_write_box", $(me)).val(""); }
            else if (otype == 'digital' || otype == 'dxds' || otype == 'dds') { $.each($("li", $(me)).filter(".selected"), function (i, n) { $(this).removeClass("selected").addClass("button1"); }); }
            select_init(); checkNum(); cleanTraceIssue(); if (ermsg.length > 1) { $.confirm(ermsg, function () { $($.lt_id_data.id_sel_onekeybet).lt_ajaxSubmitonekey(); }, function () { $($.lt_id_data.id_cf_content).empty(); $.lt_same_code = []; $.lt_total_nums = 0; $.lt_total_money = 0; }) } else { $($.lt_id_data.id_sel_onekeybet).lt_ajaxSubmitonekey(); }
        });
    }; function select_init() { if (is_select) { $($.lt_id_data.id_beishuselect)[0].selectedIndex = 0; } else { } }
})(jQuery);