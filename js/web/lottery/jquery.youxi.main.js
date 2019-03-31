var is_select = 0;; (function ($) {
    if (/^1.2/.test($.fn.jquery) || /^1.1/.test($.fn.jquery)) {
        alert('requires jQuery v1.3 or later !  You are using v' + $.fn.jquery); return;
    }
    $.gameInit = function (opts) {
        var ps = {
            cnLotteryName: '', data_label: [], rxplay: 0, data_id: {
                id_cur_issue: '#current_issue',
                id_cur_end: '#current_endtime',
                id_count_down: '#count_down',
                id_labelbox: '#lotteryType',
                id_smalllabel: '#lt_samll_label',
                id_methoddesc: '#lt_desc',
                id_methodhelp: '#lt_help',
                id_helpdiv: '#lt_help_div',
                id_selector: '#lt_selector',
                id_sel_num: '#lt_sel_nums',
                id_sel_money: '#lt_sel_money',
                id_sel_times: '#lt_sel_times',
                id_sel_insert: '#lt_sel_insert',
                id_sel_onekeybet: '#lt_sel_onekeybet',
                id_sel_modes: '#lt_sel_modes',
                id_cf_count: '#lt_cf_count',
                id_cf_clear: '#lt_cf_clear',
                id_cf_content: '#lt_cf_content',
                id_cf_num: '#lt_cf_nums',
                id_cf_money: '#lt_cf_money',
                id_issues: '#lt_issues',
                id_sendok: '#lt_sendok',
                id_tra_if: '#lt_trace_if',
                id_tra_ifb: '#lt_trace_if_button',
                id_tra_stop: '#lt_trace_stop',
                id_tra_box1: '#lt_trace_box1',
                id_tra_box2: '#lt_trace_box2',
                id_tra_today: '#lt_trace_today',
                id_tra_tom: '#lt_trace_tomorrow',
                id_tra_alct: '#lt_trace_alcount',
                id_tra_label: '#lt_trace_label',
                id_tra_lhtml: '#lt_trace_labelhtml',
                id_tra_ok: '#lt_trace_ok',
                id_tra_issues: '#lt_trace_issues',
                id_beishuselect: '#lt_beishuselect',
                id_methodexample: '#lt_example',
                newid_random_area: '#newlt_random_area',
                id_examplediv: '#lt_example_div',
                id_count: '#lt_count',
                id_countdiv: '#lt_count_div',
                id_changetype: '#changeLotteryType',
                id_poschoose: '#poschoose',
            },
            cur_issue: {
                issue: '20100210-001',
                endtime: '2010-02-10 09:10:00'
            }, issues: { today: [], tomorrow: [] },
            servertime: '2010-02-10 09:09:40', ajaxurl: '', lotteryid: 1, ontimeout: function () { }, onfinishbuy: function () { }, test: ''
        }
        opts = $.extend({}, ps, opts || {});
        $.extend({
            cnLotteryName: opts.cnLotteryName,
            lt_id_data: opts.data_id,
            lt_method_data: {},
            lt_method: {
                2947: 'R2ZU', 2948: 'R2ZUHZ', 2731: 'RZX2', 2732: 'RZX2HZ', 2734: 'R2ZU', 2735: 'R2ZUHZ', 2737: 'RZX3', 2739: 'RZX3HZ', 2741: 'R3ZUS', 2742: 'R3ZUL',
                2743: 'R3HHZC', 2744: 'R3ZUHZ', 2746: 'RZX4', 2748: 'R4ZU24', 2749: 'R4ZU12', 2750: 'R4ZU6', 2751: 'R4ZU4', 2753: 'RZX2', 2754: 'RZX2HZ', 2756: 'R2ZU',
                2757: 'R2ZUHZ', 2759: 'RZX3', 2760: 'RZX3HZ', 2762: 'R3ZUS', 2763: 'R3ZUL', 2764: 'R3HHZC', 2765: 'R3ZUHZ', 2767: 'RZX4', 2769: 'R4ZU24', 2770: 'R4ZU12',
                2771: 'R4ZU6', 2772: 'R4ZU4', 2759: 'RZX3', 2760: 'RZX3HZ', 2762: 'R3ZUS', 2763: 'R3ZUL', 2764: 'R3HHZC', 2765: 'R3ZUHZ', 2774: 'RZX2', 2775: 'RZX2HZ',
                2777: 'R2ZU', 2778: 'R2ZUHZ', 2788: 'RZX4', 2790: 'R4ZU24', 2791: 'R4ZU12', 2792: 'R4ZU6', 2793: 'R4ZU4', 2780: 'RZX3', 2781: 'RZX3HZ', 2783: 'R3ZUS',
                2784: 'R3ZUL', 2785: 'R3HHZC', 2786: 'R3ZUHZ', 2795: 'RZX2', 2796: 'RZX2HZ', 2798: 'R2ZU', 2799: 'R2ZUHZ', 2801: 'RZX3', 2802: 'RZX3HZ', 2804: 'R3ZUS',
                2805: 'R3ZUL', 2806: 'R3HHZC', 2807: 'R3ZUHZ', 2809: 'RZX4', 2811: 'R4ZU24', 2812: 'R4ZU12', 2813: 'R4ZU6', 2814: 'R4ZU4', 2816: 'RZX2', 2817: 'RZX2HZ',
                2819: 'R2ZU', 2820: 'R2ZUHZ', 2822: 'RZX3', 2823: 'RZX3HZ', 2825: 'R3ZUS', 2826: 'R3ZUL', 2827: 'R3HHZC', 2828: 'R3ZUHZ', 2830: 'RZX4', 2832: 'R4ZU24',
                2833: 'R4ZU12', 2834: 'R4ZU6', 2835: 'R4ZU4', 2932: 'RZX2', 2933: 'RZX2HZ', 2934: 'R2ZU', 2935: 'R2ZUHZ', 2936: 'RZX3', 2937: 'RZX3HZ', 2938: 'R3ZUS',
                2939: 'R3ZUL', 2940: 'R3HHZC', 2941: 'R3ZUHZ', 2942: 'RZX4', 2943: 'R4ZU24', 2944: 'R4ZU12', 2945: 'R4ZU6', 2946: 'R4ZU4', 2: 'ZX3', 3: 'ZXHZ', 5: 'ZX3',
                6: 'ZXHZ', 8: 'ZUS', 9: 'ZUL', 10: 'HHZX', 11: 'ZUHZ', 13: 'ZUS', 14: 'ZUL', 15: 'HHZX', 16: 'ZUHZ', 18: 'BDW1', 20: 'BDW2', 513: 'BDW2', 22: 'ZX2',
                26: 'ZU2', 24: 'ZX2', 28: 'ZU2', 30: 'DWD', 31: 'DWD', 32: 'DWD', 33: 'DWD', 34: 'DWD', 36: 'DXDS', 38: 'DXDS', 89: 'ZX3', 92: 'ZXHZ', 102: 'ZX3',
                103: 'ZXHZ', 104: 'Zsmalllabel_US', 105: 'ZUL', 106: 'HHZX', 107: 'ZUHZ', 108: 'ZUS', 109: 'ZUL', 110: 'HHZX', 111: 'ZUHZ', 112: 'BDW1', 113: 'BDW2',
                114: 'ZX2', 115: 'ZX2', 116: 'ZU2', 117: 'ZU2', 118: 'DWD', 119: 'DWD', 120: 'DWD', 121: 'DWD', 122: 'DWD', 123: 'DXDS', 124: 'DXDS', 126: 'ZX3',
                127: 'ZXHZ', 129: 'ZX3', 130: 'ZXHZ', 132: 'ZUS', 133: 'ZUL', 134: 'HHZX', 135: 'ZUHZ', 137: 'ZUS', 138: 'ZUL', 139: 'HHZX', 140: 'ZUHZ', 142: 'BDW1',
                144: 'BDW2', 146: 'ZX2', 148: 'ZX2', 150: 'ZU2', 152: 'ZU2', 154: 'DWD', 155: 'DWD', 156: 'DWD', 157: 'DWD', 158: 'DWD', 160: 'DXDS', 162: 'DXDS',
                265: 'ZX3', 266: 'ZXHZ', 268: 'ZX3', 269: 'ZXHZ', 271: 'ZUS', 272: 'ZUL', 273: 'HHZX', 274: 'ZUHZ', 276: 'ZUS', 277: 'ZUL', 278: 'HHZX', 279: 'ZUHZ',
                281: 'BDW1', 283: 'BDW2', 285: 'ZX2', 287: 'ZX2', 289: 'ZU2', 291: 'ZU2', 293: 'DWD', 294: 'DWD', 295: 'DWD', 296: 'DWD', 297: 'DWD', 299: 'DXDS',
                301: 'DXDS', 189: 'ZX3', 190: 'ZXHZ', 192: 'ZUS', 193: 'ZUL', 194: 'HHZX', 195: 'ZUHZ', 197: 'BDW1', 199: 'ZX2', 201: 'ZX2', 203: 'ZU2', 205: 'ZU2',
                261: 'DWD', 262: 'DWD', 263: 'DWD', 472: 'ZXHZ2', 474: 'ZXHZ2', 476: 'ZUHZ2', 478: 'ZUHZ2', 220: 'SDZX3', 222: 'SDZU3', 224: 'SDZX2', 226: 'SDZU2',
                228: 'SDBDW', 230: 'SDDWD', 231: 'SDDWD', 232: 'SDDWD', 234: 'SDDDS', 236: 'SDCZW', 238: 'SDRX1', 240: 'SDRX2', 243: 'SDRX3', 246: 'SDRX4', 249: 'SDRX5',
                252: 'SDRX6', 255: 'SDRX7', 258: 'SDRX8', 303: 'SDZX3', 305: 'SDZU3', 307: 'SDZX2', 309: 'SDZU2', 311: 'SDBDW', 313: 'SDDWD', 314: 'SDDWD', 315: 'SDDWD',
                317: 'SDDDS', 319: 'SDCZW', 321: 'SDRX1', 323: 'SDRX2', 325: 'SDRX3', 327: 'SDRX4', 329: 'SDRX5', 331: 'SDRX6', 333: 'SDRX7', 335: 'SDRX8', 337: 'SDZX3',
                339: 'SDZU3', 341: 'SDZX2', 343: 'SDZU2', 345: 'SDBDW', 347: 'SDDWD', 348: 'SDDWD', 349: 'SDDWD', 351: 'SDDDS', 353: 'SDCZW', 355: 'SDRX1', 357: 'SDRX2',
                359: 'SDRX3', 361: 'SDRX4', 363: 'SDRX5', 365: 'SDRX6', 367: 'SDRX7', 369: 'SDRX8', 393: 'SDZX3', 395: 'SDZU3', 397: 'SDZX2', 399: 'SDZU2', 401: 'SDBDW',
                403: 'SDDWD', 404: 'SDDWD', 405: 'SDDWD', 407: 'SDDDS', 409: 'SDCZW', 411: 'SDRX1', 413: 'SDRX2', 415: 'SDRX3', 417: 'SDRX4', 419: 'SDRX5', 421: 'SDRX6',
                423: 'SDRX7', 425: 'SDRX8', 2304: 'BJRX1', 2305: 'BJRX2', 2306: 'BJRX3', 2307: 'BJRX4', 2308: 'BJRX5', 2309: 'BJRX6', 2310: 'BJRX7', 385: 'BJHZDS',
                387: 'BJHZDX', 389: 'BJSXP', 391: 'BJJOP', 427: 'BJDXDS', 2274: 'ZX5', 2267: 'ZH4', 2265: 'ZX4', 2269: 'SXZU24', 2270: 'SXZU12', 2271: 'SXZU6',
                2272: 'SXZU4', 2276: 'ZH5', 2278: 'WXZU120', 2279: 'WXZU60', 2280: 'WXZU30', 2281: 'WXZU20', 2282: 'WXZU10', 2283: 'WXZU5', 2285: 'BDW1', 2286: 'HSCS',
                2287: 'SXBX', 2288: 'SJFC', 2291: 'ZX3', 2292: 'ZXHZ', 2293: 'ZUS', 2294: 'ZUL', 2295: 'HHZX', 2296: 'ZUHZ', 1189: 'ZX3', 1190: 'ZXHZ', 1192: 'ZUS',
                1193: 'ZUL', 1194: 'HHZX', 1195: 'ZUHZ', 1197: 'BDW1', 1199: 'ZX2', 1201: 'ZX2', 1203: 'ZU2', 1205: 'ZU2', 1261: 'DWD', 1262: 'DWD', 1263: 'DWD',
                2189: 'ZX3', 2190: 'ZXHZ', 2192: 'ZUS', 2193: 'ZUL', 2194: 'HHZX', 2195: 'ZUHZ', 2197: 'BDW1', 2199: 'ZX2', 2201: 'ZX2', 2203: 'ZU2', 2205: 'ZU2',
                2261: 'DWD', 2262: 'DWD', 2263: 'DWD', 2324: 'ZX3', 2325: 'ZXHZ', 2326: 'ZX3', 2327: 'ZXHZ', 2328: 'ZUS', 2329: 'ZUL', 2330: 'HHZX', 2331: 'ZUHZ',
                2332: 'ZUS', 2333: 'ZUL', 2334: 'HHZX', 2335: 'ZUHZ', 2336: 'DBW1', 2337: 'BDW2', 2338: 'ZX2', 2339: 'ZX2', 2340: 'ZU2', 2341: 'ZU2', 2342: 'DWD',
                2343: 'DWD', 2344: 'DWD', 2345: 'DWD', 2346: 'DWD', 2347: 'DXDS', 2348: 'DXDS', 2373: 'ZX3', 2374: 'ZXHZ', 2375: 'ZX3', 2376: 'ZXHZ', 2377: 'ZUS',
                2378: 'ZUL', 2379: 'HHZX', 2380: 'ZUHZ', 2381: 'ZUS', 2382: 'ZUL', 2383: 'HHZX', 2384: 'ZUHZ', 2385: 'BDW1', 2386: 'BDW2', 2387: 'ZX2', 2388: 'ZX2',
                2389: 'ZU2', 2390: 'ZU2', 2391: 'DWD', 2392: 'DWD', 2393: 'DWD', 2394: 'DWD', 2395: 'DWD', 2396: 'DXDS', 2397: 'DXDS', 2412: 'ZX5', 2413: 'ZH5',
                2414: 'WXZU120', 2415: 'WXZU60', 2416: 'WXZU30', 2417: 'WXZU20', 2418: 'WXZU10', 2419: 'WXZU5', 2420: 'BDW1', 2421: 'HSCS', 2422: 'SXBX', 2423: 'SJFC',
                2424: 'ZX3', 2425: 'ZXHZ', 2426: 'ZUS', 2427: 'ZUL', 2428: 'HHZX', 2429: 'ZUHZ', 2406: 'ZX4', 2407: 'ZH4', 2408: 'SXZU24', 2409: 'SXZU12', 2410: 'SXZU6',
                2411: 'SXZU4', 2398: 'ZU3BD', 2400: 'ZXHZ2', 2401: 'ZXHZ2', 2402: 'ZUHZ2', 2403: 'ZUHZ2', 2385: 'BDW1', 2420: 'BDW1', 2421: 'HSCS', 2422: 'SXBX',
                2423: 'SJFC', 2404: 'BDW1', 2405: 'BDW2', 3319: 'ZX3', 3320: 'ZXHZ', 3321: 'ZX3', 3322: 'ZXHZ', 3323: 'ZUS', 3324: 'ZUL', 3325: 'HHZX', 3326: 'ZUHZ',
                3327: 'ZUS', 3328: 'ZUL', 3329: 'HHZX', 3330: 'ZUHZ', 3331: 'BDW1', 3332: 'BDW2', 3333: 'ZX2', 3334: 'ZX2', 3335: 'ZU2', 3336: 'ZU2', 3337: 'DWD',
                3338: 'DWD', 3339: 'DWD', 3340: 'DWD', 3341: 'DWD', 3342: 'DXDS', 3343: 'DXDS', 3358: 'ZX5', 3359: 'ZH5', 3360: 'WXZU120', 3361: 'WXZU60', 3362: 'WXZU30',
                3363: 'WXZU20', 3364: 'WXZU10', 3365: 'WXZU5', 3366: 'BDW1', 3367: 'HSCS', 3368: 'SXBX', 3369: 'SJFC', 3370: 'ZX3', 3371: 'ZXHZ', 3372: 'ZUS', 3373: 'ZUL',
                3374: 'HHZX', 3375: 'ZUHZ', 3352: 'ZX4', 3353: 'ZH4', 3354: 'SXZU24', 3355: 'SXZU12', 3356: 'SXZU6', 3357: 'SXZU4', 3344: 'ZU3BD', 3346: 'ZXHZ2',
                3347: 'ZXHZ2', 3348: 'ZUHZ2', 3349: 'ZUHZ2', 3331: 'BDW1', 3366: 'BDW1', 3367: 'HSCS', 3368: 'SXBX', 3369: 'SJFC', 3350: 'BDW1', 3351: 'BDW2', 3382: 'RZX2',
                3383: 'RZX2HZ', 3384: 'R2ZU', 3385: 'R2ZUHZ', 3386: 'RZX3', 3387: 'RZX3HZ', 3388: 'R3ZUS', 3389: 'R3ZUL', 3390: 'R3HHZC', 3391: 'R3ZUHZ', 3392: 'RZX4',
                3393: 'R4ZU24', 3394: 'R4ZU12', 3395: 'R4ZU6', 3396: 'R4ZU4', 2454: 'ZX3', 2455: 'ZXHZ', 2456: 'ZX3', 2457: 'ZXHZ', 2458: 'ZUS', 2459: 'ZUL', 2460: 'HHZX',
                2461: 'ZUHZ', 2462: 'ZUS', 2463: 'ZUL', 2464: 'HHZX', 2465: 'ZUHZ', 2466: 'BDW1', 2467: 'BDW2', 2468: 'ZX2', 2469: 'ZX2', 2470: 'ZU2', 2471: 'ZU2',
                2472: 'DWD', 2473: 'DWD', 2474: 'DWD', 2475: 'DWD', 2476: 'DWD', 2477: 'DXDS', 2478: 'DXDS', 2493: 'ZX5', 2494: 'ZH5', 2495: 'WXZU120', 2496: 'WXZU60',
                2497: 'WXZU30', 2498: 'WXZU20', 2499: 'WXZU10', 2500: 'WXZU5', 2501: 'BDW1', 2502: 'HSCS', 2503: 'SXBX', 2504: 'SJFC', 2505: 'ZX3', 2506: 'ZXHZ',
                2507: 'ZUS', 2508: 'ZUL', 2509: 'HHZX', 2510: 'ZUHZ', 2487: 'ZX4', 2488: 'ZH4', 2489: 'SXZU24', 2490: 'SXZU12', 2491: 'SXZU6', 2492: 'SXZU4',
                2479: 'ZU3BD', 2481: 'ZXHZ2', 2482: 'ZXHZ2', 2483: 'ZUHZ2', 2484: 'ZUHZ2', 2466: 'BDW1', 2501: 'BDW1', 2502: 'HSCS', 2503: 'SXBX', 2504: 'SJFC',
                2485: 'BDW1', 2486: 'BDW2', 2539: 'ZX3', 2540: 'ZXHZ', 2541: 'ZX3', 2542: 'ZXHZ', 2543: 'ZUS', 2544: 'ZUL', 2545: 'HHZX', 2546: 'ZUHZ', 2547: 'ZUS',
                2548: 'ZUL', 2549: 'HHZX', 2550: 'ZUHZ', 2551: 'BDW1', 2552: 'BDW2', 2553: 'ZX2', 2554: 'ZX2', 2555: 'ZU2', 2556: 'ZU2', 2557: 'DWD', 2558: 'DWD',
                2559: 'DWD', 2560: 'DWD', 2561: 'DWD', 2562: 'DXDS', 2563: 'DXDS', 2578: 'ZX5', 2579: 'ZH5', 2580: 'WXZU120', 2581: 'WXZU60', 2582: 'WXZU30',
                2583: 'WXZU20', 2584: 'WXZU10', 2585: 'WXZU5', 2586: 'BDW1', 2587: 'HSCS', 2588: 'SXBX', 2589: 'SJFC', 2590: 'ZX3', 2591: 'ZXHZ', 2592: 'ZUS',
                2593: 'ZUL', 2594: 'HHZX', 2595: 'ZUHZ', 2572: 'ZX4', 2573: 'ZH4', 2574: 'SXZU24', 2575: 'SXZU12', 2576: 'SXZU6', 2577: 'SXZU4', 2564: 'ZU3BD',
                2566: 'ZXHZ2', 2567: 'ZXHZ2', 2568: 'ZUHZ2', 2569: 'ZUHZ2', 2551: 'BDW1', 2586: 'BDW1', 2587: 'HSCS', 2588: 'SXBX', 2589: 'SJFC', 2570: 'BDW1',
                2571: 'BDW2', 2608: 'ZX3', 2609: 'ZXHZ', 2610: 'ZUS', 2611: 'ZUL', 2612: 'HHZX', 2613: 'ZUHZ', 2614: 'BDW1', 2615: 'ZX2', 2616: 'ZX2', 2617: 'ZU2',
                2618: 'ZU2', 2619: 'DWD', 2620: 'DWD', 2621: 'DWD', 2623: 'ZX4', 2625: 'ZH4', 2627: 'SXZU24', 2628: 'SXZU12', 2629: 'SXZU6', 2630: 'SXZU4', 2632: 'ZX5',
                2634: 'ZH5', 2636: 'WXZU120', 2637: 'WXZU60', 2638: 'WXZU30', 2639: 'WXZU20', 2640: 'WXZU10', 2641: 'WXZU5', 2643: 'ZX4', 2645: 'ZH4', 2647: 'SXZU24',
                2648: 'SXZU12', 2649: 'SXZU6', 2650: 'SXZU4', 2652: 'ZX5', 2654: 'ZH5', 2656: 'WXZU120', 2657: 'WXZU60', 2658: 'WXZU30', 2659: 'WXZU20', 2660: 'WXZU10',
                2661: 'WXZU5', 2664: 'BDW2', 2666: 'BDW2', 3197: 'ZX3', 3198: 'ZXHZ', 3199: 'ZX3', 3200: 'ZXHZ', 3201: 'ZUS', 3202: 'ZUL', 3203: 'HHZX', 3204: 'ZUHZ',
                3205: 'ZUS', 3206: 'ZUL', 3207: 'HHZX', 3208: 'ZUHZ', 3209: 'BDW1', 3210: 'BDW2', 3211: 'ZX2', 3212: 'ZX2', 3213: 'ZU2', 3214: 'ZU2', 3215: 'DWD', 3216: 'DWD', 3217: 'DWD', 3218: 'DWD', 3219: 'DWD', 3220: 'DXDS', 3221: 'DXDS', 3236: 'ZX5', 3237: 'ZH5', 3238: 'WXZU120', 3239: 'WXZU60', 3240: 'WXZU30', 3241: 'WXZU20', 3242: 'WXZU10', 3243: 'WXZU5', 3244: 'BDW1', 3245: 'HSCS', 3246: 'SXBX', 3247: 'SJFC', 3248: 'ZX3', 3249: 'ZXHZ', 3250: 'ZUS', 3251: 'ZUL', 3252: 'HHZX', 3253: 'ZUHZ', 3230: 'ZX4', 3231: 'ZH4', 3232: 'SXZU24', 3233: 'SXZU12', 3234: 'SXZU6', 3235: 'SXZU4', 3223: 'ZU3BD', 3224: 'ZXHZ2', 3225: 'ZXHZ2', 3226: 'ZUHZ2', 3227: 'ZUHZ2', 3228: 'BDW1', 3244: 'BDW1', 3245: 'HSCS', 3246: 'SXBX', 3247: 'SJFC', 3228: 'BDW1', 3229: 'BDW2', 3254: 'RZX2', 3255: 'RZX2HZ', 3267: 'R2ZU', 3268: 'R2ZUHZ', 3256: 'RZX3', 3257: 'RZX3HZ', 3258: 'R3ZUS', 3259: 'R3ZUL', 3260: 'R3HHZC', 3261: 'R3ZUHZ', 3262: 'RZX4', 3263: 'R4ZU24', 3264: 'R4ZU12', 3265: 'R4ZU6', 3266: 'R4ZU4', 4208: 'ETHDX', 4209: 'ETHFX', 4210: 'EBTH', 4212: 'SBTHTX', 4213: 'SBTH', 4214: 'SBTHDT', 4215: 'SBTHHZ', 4216: 'STHDX', 4217: 'STHTX', 4218: 'KSHZ', 4211: 'EBTHDT', 4220: 'KSXYGH', 4223: "KSDX", 4224: "KSDS", 4301: 'LHD_LH', 4302: 'LHD_H', 4304: 'LHD_LH', 4305: 'LHD_H', 4307: 'LHD_LH', 4308: 'LHD_H', 4310: 'LHD_LH', 4311: 'LHD_H', 4313: 'LHD_LH', 4314: 'LHD_H', 4316: 'LHD_LH', 4317: 'LHD_H', 4319: 'LHD_LH', 4320: 'LHD_H', 6982: 'N4cai', 6984: 'N5cai', 6959: 'Cno2', 6961: 'Cno3', 6957: 'Cno1', 6960: 'N2cai', 6962: 'N3cai', 6958: 'N1cai', 6964: 'N5cai', 6965: 'N10cai', 6978: 'PKDX', 6979: 'PKDX', 6980: 'PKDX', 6966: 'DWDK', 6967: 'DWDK', 6968: 'DWDK', 6969: 'DWDK', 6970: 'DWDK', 6971: 'DWDK', 6972: 'DWDK', 6973: 'DWDK', 6974: 'DWDK', 6975: 'DWDK', 6003: 'KLSFDWD1', 6004: 'KLSFDWD2', 6005: 'KLSFDWD3', 6011: 'KLSFDWD4', 6012: 'KLSFDWD5', 6013: 'KLSFDWD6', 6014: 'KLSFDWD7', 6015: 'KLSFDWD8', 6021: 'KLSFRX1', 6022: 'KLSFRX2', 6023: 'KLSFRX3', 6024: 'KLSFRX4', 6025: 'KLSFRX5', 6036: 'KLSFQSZHIXUAN', 6037: 'KLSFHSZHIXUAN', 6038: 'KLSFQSZUXUAN', 6039: 'KLSFHSZUXUAN', 6042: 'KLSFEXZHX', 6043: 'KLSFEXZX', 6046: 'KLSFDXDS1', 6047: 'KLSFDXDS2', 6048: 'KLSFDXDS3', 6049: 'KLSFDXDS4', 6050: 'KLSFDXDS5', 6051: 'KLSFDXDS6', 6052: 'KLSFDXDS7', 6053: 'KLSFDXDS8', 6054: 'KLSFDXH', 6056: 'KLSFSJFW1', 6057: 'KLSFSJFW2', 6058: 'KLSFSJFW3', 6059: 'KLSFSJFW4', 6060: 'KLSFSJFW5', 6061: 'KLSFSJFW6', 6062: 'KLSFSJFW7', 6063: 'KLSFSJFW8', 6065: 'KLSFWX1', 6066: 'KLSFWX2', 6067: 'KLSFWX3', 6068: 'KLSFWX4', 6069: 'KLSFWX5', 6070: 'KLSFWX6', 6071: 'KLSFWX7', 6072: 'KLSFWX8', 6074: 'KLSFLONG', 6075: 'KLSFHU', 6030: 'KLSFDT2', 6031: 'KLSFDT3', 6032: 'KLSFDT4', 6033: 'KLSFDT5', 7003: 'KLSFDWD1', 7004: 'KLSFDWD2', 7005: 'KLSFDWD3', 7011: 'KLSFDWD4', 7012: 'KLSFDWD5', 7013: 'KLSFDWD6', 7014: 'KLSFDWD7', 7015: 'KLSFDWD8', 7021: 'KLSFRX1', 7022: 'KLSFRX2', 7023: 'KLSFRX3', 7024: 'KLSFRX4', 7025: 'KLSFRX5', 7036: 'KLSFQSZHIXUAN', 7037: 'KLSFHSZHIXUAN', 7038: 'KLSFQSZUXUAN', 7039: 'KLSFHSZUXUAN', 7042: 'KLSFEXZHX', 7043: 'KLSFEXZX', 7046: 'KLSFDXDS1', 7047: 'KLSFDXDS2', 7048: 'KLSFDXDS3', 7049: 'KLSFDXDS4', 7050: 'KLSFDXDS5', 7051: 'KLSFDXDS6', 7052: 'KLSFDXDS7', 7053: 'KLSFDXDS8', 7054: 'KLSFDXH', 7056: 'KLSFSJFW1', 7057: 'KLSFSJFW2', 7058: 'KLSFSJFW3', 7059: 'KLSFSJFW4', 7060: 'KLSFSJFW5', 7061: 'KLSFSJFW6', 7062: 'KLSFSJFW7', 7063: 'KLSFSJFW8', 7065: 'KLSFWX1', 7066: 'KLSFWX2', 7067: 'KLSFWX3', 7068: 'KLSFWX4', 7069: 'KLSFWX5', 7070: 'KLSFWX6', 7071: 'KLSFWX7', 7072: 'KLSFWX8', 7074: 'KLSFLONG', 7075: 'KLSFHU', 7030: 'KLSFDT2', 7031: 'KLSFDT3', 7032: 'KLSFDT4', 7033: 'KLSFDT5', 8003: 'KLSFDWD1', 8004: 'KLSFDWD2', 8005: 'KLSFDWD3', 8011: 'KLSFDWD4', 8012: 'KLSFDWD5', 8013: 'KLSFDWD6', 8014: 'KLSFDWD7', 8015: 'KLSFDWD8', 8021: 'KLSFRX1', 8022: 'KLSFRX2', 8023: 'KLSFRX3', 8024: 'KLSFRX4', 8025: 'KLSFRX5', 8036: 'KLSFQSZHIXUAN', 8037: 'KLSFHSZHIXUAN', 8038: 'KLSFQSZUXUAN', 8039: 'KLSFHSZUXUAN', 8042: 'KLSFEXZHX', 8043: 'KLSFEXZX', 8046: 'KLSFDXDS1', 8047: 'KLSFDXDS2', 8048: 'KLSFDXDS3', 8049: 'KLSFDXDS4', 8050: 'KLSFDXDS5', 8051: 'KLSFDXDS6', 8052: 'KLSFDXDS7', 8053: 'KLSFDXDS8', 8054: 'KLSFDXH', 8056: 'KLSFSJFW1', 8057: 'KLSFSJFW2', 8058: 'KLSFSJFW3', 8059: 'KLSFSJFW4', 8060: 'KLSFSJFW5', 8061: 'KLSFSJFW6', 8062: 'KLSFSJFW7', 8063: 'KLSFSJFW8', 8065: 'KLSFWX1', 8066: 'KLSFWX2', 8067: 'KLSFWX3', 8068: 'KLSFWX4', 8069: 'KLSFWX5', 8070: 'KLSFWX6', 8071: 'KLSFWX7', 8072: 'KLSFWX8', 8074: 'KLSFLONG', 8075: 'KLSFHU', 8030: 'KLSFDT2', 8031: 'KLSFDT3', 8032: 'KLSFDT4', 8033: 'KLSFDT5', 10201: 'LTRXDT2', 10203: 'LTRXDT3', 10205: 'LTRXDT4', 10207: 'LTRXDT5', 10209: 'LTRXDT6', 10211: 'LTRXDT7', 10213: 'LTRXDT8', 10301: 'LTRXDT2', 10303: 'LTRXDT3', 10305: 'LTRXDT4', 10307: 'LTRXDT5', 10309: 'LTRXDT6', 10311: 'LTRXDT7', 10313: 'LTRXDT8', 10401: 'LTRXDT2', 10403: 'LTRXDT3', 10405: 'LTRXDT4', 10407: 'LTRXDT5', 10409: 'LTRXDT6', 10411: 'LTRXDT7', 10413: 'LTRXDT8', 10501: 'SDZX3', 10503: 'SDZU3', 10505: 'SDZX2', 10507: 'SDZU2', 10509: 'SDBDW', 10511: 'SDDWD', 10512: 'SDDWD', 10513: 'SDDWD', 10515: 'SDDDS', 10517: 'SDCZW', 10519: 'SDRX1', 10521: 'SDRX2', 10523: 'SDRX3', 10525: 'SDRX4', 10527: 'SDRX5', 10529: 'SDRX6', 10531: 'SDRX7', 10533: 'SDRX8', 10535: 'LTRXDT2', 10537: 'LTRXDT3', 10539: 'LTRXDT4', 10541: 'LTRXDT5', 10543: 'LTRXDT6', 10545: 'LTRXDT7', 10547: 'LTRXDT8', 10560: 'BDW1', 10561: 'BDW2', 10562: 'BDW1', 10563: 'BDW2', 10564: 'BDW1', 10565: 'BDW2', 10566: 'BDW1', 10567: 'BDW2', 10568: 'BDW1', 10569: 'BDW2', 10570: 'BDW1', 10571: 'BDW2', 10572: 'BDW1', 10573: 'BDW2', 10608: 'ETHDX', 10609: 'ETHFX', 10610: 'EBTH', 10612: 'SBTHTX', 10613: 'SBTH', 10614: 'SBTHDT', 10615: 'SBTHHZ', 10616: 'STHDX', 10617: 'STHTX', 10618: 'KSHZ', 10611: 'EBTHDT', 10620: 'KSXYGH', 10623: "KSDX", 10624: "KSDS", 10703: 'KLSFDWD1', 10704: 'KLSFDWD2', 10705: 'KLSFDWD3', 10711: 'KLSFDWD4', 10712: 'KLSFDWD5', 10713: 'KLSFDWD6', 10714: 'KLSFDWD7', 10715: 'KLSFDWD8', 10721: 'KLSFRX1', 10722: 'KLSFRX2', 10723: 'KLSFRX3', 10724: 'KLSFRX4', 10725: 'KLSFRX5', 10736: 'KLSFQSZHIXUAN', 10737: 'KLSFHSZHIXUAN', 10738: 'KLSFQSZUXUAN', 10739: 'KLSFHSZUXUAN', 10742: 'KLSFEXZHX', 10743: 'KLSFEXZX', 10746: 'KLSFDXDS1', 10747: 'KLSFDXDS2', 10748: 'KLSFDXDS3', 10749: 'KLSFDXDS4', 10750: 'KLSFDXDS5', 10751: 'KLSFDXDS6', 10752: 'KLSFDXDS7', 10753: 'KLSFDXDS8', 10754: 'KLSFDXH', 10756: 'KLSFSJFW1', 10757: 'KLSFSJFW2', 10758: 'KLSFSJFW3', 10759: 'KLSFSJFW4', 10760: 'KLSFSJFW5', 10761: 'KLSFSJFW6', 10762: 'KLSFSJFW7', 10763: 'KLSFSJFW8', 10765: 'KLSFWX1', 10766: 'KLSFWX2', 10767: 'KLSFWX3', 10768: 'KLSFWX4', 10769: 'KLSFWX5', 10770: 'KLSFWX6', 10771: 'KLSFWX7', 10772: 'KLSFWX8', 10774: 'KLSFLONG', 10775: 'KLSFHU', 10730: 'KLSFDT2', 10731: 'KLSFDT3', 10732: 'KLSFDT4', 10733: 'KLSFDT5', 10800: 'ZXKD', 10801: 'ZXKD', 10802: 'ZXKD', 10803: 'ZXKD', 10804: 'ZXKD', 10805: 'ZXKD', 10806: 'ZXKD', 10807: 'ZXKD', 10808: 'ZXKD', 10809: 'ZXKD', 10810: 'ZXKD', 10811: 'ZXKD', 10812: 'ZXKD', 10813: 'ZXKD', 10814: 'ZXKD', 10815: 'ZXKD', 10816: 'ZXKD', 10817: 'ZXKD', 10818: 'ZXKD', 10819: 'ZXKD', 10820: "N2caihz", 10891: 'ZX3', 10892: 'ZXHZ', 10893: 'ZUS', 10894: 'ZUL', 10895: 'HHZX', 10896: 'ZUHZ', 10897: 'ZXKD', 17001: 'N6cai', 17003: 'N6cai', 17005: 'PKLH', 17011: 'PKLH', 17017: 'BDW1', 20002: 'BDW1', 20012: 'BDW1', 20022: 'BDW1', 20032: 'BDW1', 20042: 'BDW1', 20052: 'BDW1', 20062: 'BDW1', 17018: 'BDW1', 20001: 'BDW1', 20011: 'BDW1', 20021: 'BDW1', 20031: 'BDW1', 20041: 'BDW1', 20051: 'BDW1', 20061: 'BDW1', 17020: 'BDW2', 20004: 'BDW2', 20014: 'BDW2', 20024: 'BDW2', 20034: 'BDW2', 20044: 'BDW2', 20054: 'BDW2', 20064: 'BDW2', 17021: 'BDW2', 20005: 'BDW2', 20015: 'BDW2', 20025: 'BDW2', 20035: 'BDW2', 20045: 'BDW2', 20055: 'BDW2', 20065: 'BDW2', 17023: 'BDW2', 20007: 'BDW2', 20017: 'BDW2', 20027: 'BDW2', 20037: 'BDW2', 20047: 'BDW2', 20057: 'BDW2', 20067: 'BDW2', 17025: 'BDW3', 20009: 'BDW3', 20019: 'BDW3', 20029: 'BDW3', 20039: 'BDW3', 20049: 'BDW3', 20059: 'BDW3', 20069: 'BDW3', 17026: 'ZU3BD', 17029: 'ZU3BD', 17031: 'ZU3BD', 17034: 'ZU3BD', 17037: 'ZU3BD', 17040: 'ZU3BD', 17043: 'ZU3BD', 17046: 'ZU3BD', 17027: 'ZU3BD', 17030: 'ZU3BD', 17032: 'ZU3BD', 17035: 'ZU3BD', 17038: 'ZU3BD', 17041: 'ZU3BD', 17044: 'ZU3BD', 17047: 'ZU3BD', 17028: 'ZU3BD', 20603: 'ZU3BD', 17033: 'ZU3BD', 17036: 'ZU3BD', 17039: 'ZU3BD', 17042: 'ZU3BD', 17045: 'ZU3BD', 17048: 'ZU3BD', 20401: 'TSH3', 20411: 'TSH3', 20421: 'TSH3', 20431: 'TSH3', 20441: 'TSH3', 20451: 'TSH3', 20461: 'TSH3', 20471: 'TSH3', 20402: 'TSH3', 20412: 'TSH3', 20422: 'TSH3', 20432: 'TSH3', 20442: 'TSH3', 20452: 'TSH3', 20462: 'TSH3', 20472: 'TSH3', 20403: 'TSH3', 20413: 'TSH3', 20602: 'TSH3', 20433: 'TSH3', 20443: 'TSH3', 20453: 'TSH3', 20463: 'TSH3', 20473: 'TSH3', 20301: 'HZWS', 20311: 'HZWS', 20321: 'HZWS', 20331: 'HZWS', 20341: 'HZWS', 20351: 'HZWS', 20361: 'HZWS', 20371: 'HZWS', 20303: 'HZWS', 20313: 'HZWS', 20323: 'HZWS', 20333: 'HZWS', 20343: 'HZWS', 20353: 'HZWS', 20363: 'HZWS', 20373: 'HZWS', 20305: 'HZWS', 20315: 'HZWS', 20601: 'HZWS', 20335: 'HZWS', 20345: 'HZWS', 20355: 'HZWS', 20365: 'HZWS', 20375: 'HZWS', 20200: 'ZXKD2', 20202: 'ZXKD2', 20204: 'ZXKD2', 20206: 'ZXKD2', 20208: 'ZXKD2', 20210: 'ZXKD2', 20212: 'ZXKD2', 20214: 'ZXKD2', 20201: 'ZXKD2', 20203: 'ZXKD2', 20205: 'ZXKD2', 20207: 'ZXKD2', 20209: 'ZXKD2', 20211: 'ZXKD2', 20213: 'ZXKD2', 20215: 'ZXKD2', 20100: 'ZU2BD', 20102: 'ZU2BD', 20104: 'ZU2BD', 20106: 'ZU2BD', 20108: 'ZU2BD', 20110: 'ZU2BD', 20112: 'ZU2BD', 20114: 'ZU2BD', 20101: 'ZU2BD', 20103: 'ZU2BD', 20105: 'ZU2BD', 20107: 'ZU2BD', 20109: 'ZU2BD', 20111: 'ZU2BD', 20113: 'ZU2BD', 20115: 'ZU2BD', 24341: 'BDW2', 24401: 'DXDS', 24402: 'DXDS', 24404: 'DXDS', 24405: 'DXDS', 24407: 'DXDS', 24408: 'DXDS', 24410: 'PKDX', 24412: 'PKDX', 30302: 'TMZX', 30304: 'TMSX', 30306: 'TMWS', 30308: 'TMSB', 30310: 'TMDXDS', 30312: 'ZTYX', 30314: 'ZTWS', 30316: 'ERLX', 30318: 'SANLX', 30320: 'SILX', 30322: 'LMSANZS', 30324: 'LMERZE', 30326: "LMSANZE", 30328: "ZTYM", 30102: 'TMZX', 30104: 'TMSX', 30106: 'TMWS', 30108: 'TMSB', 30110: 'TMDXDS', 30112: 'ZTYX', 30114: 'ZTWS', 30116: 'ERLX', 30118: 'SANLX', 30120: 'SILX', 30122: 'LMSANZS', 30124: 'LMERZE', 30126: "LMSANZE", 30128: "ZTYM", 32902: 'ZX3', 32903: 'ZXHZ', 32905: 'ZX3', 32906: 'ZXHZ', 32908: 'ZUS', 32909: 'ZUL', 32910: 'HHZX', 32911: 'ZUHZ', 32913: 'ZUS', 32914: 'ZUL', 32915: 'HHZX', 32916: 'ZUHZ', 32918: 'BDW1', 32920: 'BDW2', 32922: 'ZX2', 32923: 'ZX2', 32925: 'ZU2', 32926: 'ZU2', 32928: 'DWD', 32929: 'DWD', 32930: 'DWD', 32931: 'DWD', 32932: 'DWD', 32934: 'DXDS', 32935: 'DXDS', 32936: 'ZU3BD', 32937: 'ZU3BD', 32938: 'ZXHZ2', 32939: 'ZXHZ2', 32940: 'ZUHZ2', 32941: 'ZUHZ2', 32942: 'BDW1', 32943: 'BDW2', 32945: 'ZX4', 32947: 'ZH4', 32949: 'SXZU24', 32950: 'SXZU12', 32951: 'SXZU6', 32952: 'SXZU4', 32954: 'ZX5', 32956: 'ZH5', 32958: 'WXZU120', 32959: 'WXZU60', 32960: 'WXZU30', 32961: 'WXZU20', 32962: 'WXZU10', 32963: 'WXZU5', 32965: 'BDW1', 32966: 'HSCS', 32967: 'SXBX', 32968: 'SJFC', 32971: 'ZX3', 32972: 'ZXHZ', 32973: 'ZUS', 32974: 'ZUL', 32975: 'HHZX', 32976: 'ZUHZ', 32978: 'RZX2', 32979: 'RZX2HZ', 32982: 'RZX3', 32984: 'RZX3HZ', 32986: 'R3ZUS', 32987: 'R3ZUL', 32988: 'R3HHZC', 32989: 'R3ZUHZ', 32991: 'RZX4', 32993: 'R4ZU24', 32994: 'R4ZU12', 32995: 'R4ZU6', 32996: 'R4ZU4', 32997: 'R2ZU', 32998: 'R2ZUHZ', 32000: 'LHD_LH', 32001: 'LHD_H', 32002: 'BDW1', 32003: 'BDW2', 32005: 'DXDS', 32820: 'ZXKD', 32821: 'ZXKD', 32822: 'ZXKD', 32062: 'BDW1', 32061: 'BDW1', 32064: 'BDW2', 32065: 'BDW2', 32067: 'BDW2', 32069: 'BDW3', 32046: 'ZU3BD', 32047: 'ZU3BD', 32048: 'ZU3BD', 32471: 'TSH3', 32472: 'TSH3', 32473: 'TSH3', 32371: 'HZWS', 32373: 'HZWS', 32375: 'HZWS', 32214: 'ZXKD2', 32215: 'ZXKD2', 32114: 'ZU2BD', 32115: 'ZU2BD', 33220: 'SDZX3', 33222: 'SDZU3', 33224: 'SDZX2', 33226: 'SDZU2', 33228: 'SDBDW', 33230: 'SDDWD', 33231: 'SDDWD', 33232: 'SDDWD', 33234: 'SDDDS', 33236: 'SDCZW', 33238: 'SDRX1', 33240: 'SDRX2', 33243: 'SDRX3', 33246: 'SDRX4', 33249: 'SDRX5', 33252: 'SDRX6', 33255: 'SDRX7', 33258: 'SDRX8', 33273: 'SDDWD', 33274: 'SDDWD', 33260: 'LTRXDT2', 33262: 'LTRXDT3', 33264: 'LTRXDT4', 33266: 'LTRXDT5', 33268: 'LTRXDT6', 33270: 'LTRXDT7', 33272: 'LTRXDT8', 33358: 'N1cai', 33360: 'N2cai', 33357: 'Cno1', 33359: 'Cno2', 33362: 'N3cai', 33361: 'Cno3', 33382: 'N4cai', 33384: 'N5cai', 33366: 'DWDK', 33367: 'DWDK', 33368: 'DWDK', 33369: 'DWDK', 33370: 'DWDK', 33371: 'DWDK', 33372: 'DWDK', 33373: 'DWDK', 33374: 'DWDK', 33375: 'DWDK', 33378: 'PKDX', 33379: 'PKDX', 33380: 'PKDX', 33387: 'N6cai', 33389: 'PKLH', 33395: 'PKQ2HZDS', 33397: 'PKQ2HZXD', 33385: 'N2caihz', 33409: 'ETHDX', 33410: 'ETHFX', 33411: 'EBTH', 33412: 'EBTHDT', 33413: 'SBTHTX', 33414: 'SBTH', 33415: 'SBTHDT', 33416: 'SBTHHZ', 33417: 'STHDX', 33418: 'STHTX', 33419: 'KSHZ', 33420: 'KSXYGH', 33421: 'KSDX', 33422: 'KSDS', 33426: 'KLSFDWD1', 33427: 'KLSFDWD2', 33428: 'KLSFDWD3', 33434: 'KLSFDWD4', 33435: 'KLSFDWD5', 33436: 'KLSFDWD6', 33437: 'KLSFDWD7', 33438: 'KLSFDWD8', 33444: 'KLSFRX1', 33445: 'KLSFRX2', 33446: 'KLSFRX3', 33447: 'KLSFRX4', 33448: 'KLSFRX5', 33459: 'KLSFQSZHIXUAN', 33460: 'KLSFHSZHIXUAN', 33461: 'KLSFQSZUXUAN', 33462: 'KLSFHSZUXUAN', 33465: 'KLSFEXZHX', 33466: 'KLSFEXZX', 33469: 'KLSFDXDS1', 33470: 'KLSFDXDS2', 33471: 'KLSFDXDS3', 33472: 'KLSFDXDS4', 33473: 'KLSFDXDS5', 33474: 'KLSFDXDS6', 33475: 'KLSFDXDS7', 33476: 'KLSFDXDS8', 33477: 'KLSFDXH', 33479: 'KLSFSJFW1', 33480: 'KLSFSJFW2', 33481: 'KLSFSJFW3', 33482: 'KLSFSJFW4', 33483: 'KLSFSJFW5', 33484: 'KLSFSJFW6', 33485: 'KLSFSJFW7', 33486: 'KLSFSJFW8', 33488: 'KLSFWX1', 33489: 'KLSFWX2', 33490: 'KLSFWX3', 33491: 'KLSFWX4', 33492: 'KLSFWX5', 33493: 'KLSFWX6', 33494: 'KLSFWX7', 33495: 'KLSFWX8', 33497: 'KLSFLONG', 33498: 'KLSFHU', 33453: 'KLSFDT2', 33454: 'KLSFDT3', 33455: 'KLSFDT4', 33456: 'KLSFDT5', 33511: 'BDW1', 33512: 'HSCS', 33513: 'SXBX', 33514: 'SJFC', 39902: 'ZX3', 39903: 'ZXHZ', 39905: 'ZX3', 39906: 'ZXHZ', 39908: 'ZUS', 39909: 'ZUL', 39910: 'HHZX', 39911: 'ZUHZ', 39913: 'ZUS', 39914: 'ZUL', 39915: 'HHZX', 39916: 'ZUHZ', 39918: 'BDW1', 39920: 'BDW2', 39922: 'ZX2', 39923: 'ZX2', 39925: 'ZU2', 39926: 'ZU2', 39928: 'DWD', 39929: 'DWD', 39930: 'DWD', 39931: 'DWD', 39932: 'DWD', 39934: 'DXDS', 39935: 'DXDS', 39936: 'ZU3BD', 39937: 'ZU3BD', 39938: 'ZXHZ2', 39939: 'ZXHZ2', 39940: 'ZUHZ2', 39941: 'ZUHZ2', 39942: 'BDW1', 39943: 'BDW2', 39945: 'ZX4', 39947: 'ZH4', 39949: 'SXZU24', 39950: 'SXZU12', 39951: 'SXZU6', 39952: 'SXZU4', 39954: 'ZX5', 39956: 'ZH5', 39958: 'WXZU120', 39959: 'WXZU60', 39960: 'WXZU30', 39961: 'WXZU20', 39962: 'WXZU10', 39963: 'WXZU5', 39965: 'BDW1', 39966: 'HSCS', 39967: 'SXBX', 39968: 'SJFC', 39971: 'ZX3', 39972: 'ZXHZ', 39973: 'ZUS', 39974: 'ZUL', 39975: 'HHZX', 39976: 'ZUHZ', 39978: 'RZX2', 39979: 'RZX2HZ', 39982: 'RZX3', 39984: 'RZX3HZ', 39986: 'R3ZUS', 39987: 'R3ZUL', 39988: 'R3HHZC', 39989: 'R3ZUHZ', 39991: 'RZX4', 39993: 'R4ZU24', 39994: 'R4ZU12', 39995: 'R4ZU6', 39996: 'R4ZU4', 39997: 'R2ZU', 39998: 'R2ZUHZ', 39000: 'LHD_LH', 39001: 'LHD_H', 39002: 'BDW1', 39003: 'BDW2', 39005: 'DXDS', 39820: 'ZXKD', 39821: 'ZXKD', 39822: 'ZXKD', 39062: 'BDW1', 39061: 'BDW1', 39064: 'BDW2', 39065: 'BDW2', 39067: 'BDW2', 39069: 'BDW3', 39046: 'ZU3BD', 39047: 'ZU3BD', 39048: 'ZU3BD', 39471: 'TSH3', 39472: 'TSH3', 39473: 'TSH3', 39371: 'HZWS', 39373: 'HZWS', 39375: 'HZWS', 39214: 'ZXKD2', 39215: 'ZXKD2', 39114: 'ZU2BD', 39115: 'ZU2BD', 38001: 'SDZX3', 38003: 'SDZU3', 38005: 'SDZX2', 38007: 'SDZU2', 38009: 'SDBDW', 38011: 'SDDWD', 38012: 'SDDWD', 38013: 'SDDWD', 38015: 'SDDDS', 38017: 'SDCZW', 38019: 'SDRX1', 38021: 'SDRX2', 38023: 'SDRX3', 38025: 'SDRX4', 38027: 'SDRX5', 38029: 'SDRX6', 38031: 'SDRX7', 38033: 'SDRX8', 38035: 'LTRXDT2', 38037: 'LTRXDT3', 38039: 'LTRXDT4', 38041: 'LTRXDT5', 38043: 'LTRXDT6', 38045: 'LTRXDT7', 38047: 'LTRXDT8', 12501: 'SDZX3', 12503: 'SDZU3', 12505: 'SDZX2', 12507: 'SDZU2', 12509: 'SDBDW', 12511: 'SDDWD', 12512: 'SDDWD', 12513: 'SDDWD', 12514: 'SDDWD', 12515: 'SDDWD', 11517: 'SDCZW', 12519: 'SDRX1', 12521: 'SDRX2', 12523: 'SDRX3', 12525: 'SDRX4', 12527: 'SDRX5', 12529: 'SDRX6', 12531: 'SDRX7', 12533: 'SDRX8', 12535: 'LTRXDT2', 12537: 'LTRXDT3', 12539: 'LTRXDT4', 12541: 'LTRXDT5', 12543: 'LTRXDT6', 12545: 'LTRXDT7', 12547: 'LTRXDT8', 9902: 'ZX3', 9903: 'ZXHZ', 9905: 'ZX3', 9906: 'ZXHZ', 9908: 'ZUS', 9909: 'ZUL', 9910: 'HHZX', 9911: 'ZUHZ', 9913: 'ZUS', 9914: 'ZUL', 9915: 'HHZX', 9916: 'ZUHZ', 9918: 'BDW1', 9920: 'BDW2', 9922: 'ZX2', 9923: 'ZX2', 9925: 'ZU2', 9926: 'ZU2', 9928: 'DWD', 9929: 'DWD', 9930: 'DWD', 9931: 'DWD', 9932: 'DWD', 9934: 'DXDS', 9935: 'DXDS', 9936: 'ZU3BD', 9937: 'ZU3BD', 9938: 'ZXHZ2', 9939: 'ZXHZ2', 9940: 'ZUHZ2', 9941: 'ZUHZ2', 9942: 'BDW1', 9943: 'BDW2', 9945: 'ZX4', 9947: 'ZH4', 9949: 'SXZU24', 9950: 'SXZU12', 9951: 'SXZU6', 9952: 'SXZU4', 9954: 'ZX5', 9956: 'ZH5', 9958: 'WXZU120', 9959: 'WXZU60', 9960: 'WXZU30', 9961: 'WXZU20', 9962: 'WXZU10', 9963: 'WXZU5', 9965: 'BDW1', 9966: 'HSCS', 9967: 'SXBX', 9968: 'SJFC', 9971: 'ZX3', 9972: 'ZXHZ', 9973: 'ZUS', 9974: 'ZUL', 9975: 'HHZX', 9976: 'ZUHZ', 9978: 'RZX2', 9979: 'RZX2HZ', 9982: 'RZX3', 9984: 'RZX3HZ', 9986: 'R3ZUS', 9987: 'R3ZUL', 9988: 'R3HHZC', 9989: 'R3ZUHZ', 9991: 'RZX4', 9993: 'R4ZU24', 9994: 'R4ZU12', 9995: 'R4ZU6', 9996: 'R4ZU4', 9997: 'R2ZU', 9998: 'R2ZUHZ', 9000: 'LHD_LH', 9001: 'LHD_H', 9002: 'BDW1', 9003: 'BDW2', 9005: 'DXDS', 9820: 'ZXKD', 9821: 'ZXKD', 9822: 'ZXKD', 9062: 'BDW1', 9061: 'BDW1', 9064: 'BDW2', 9065: 'BDW2', 9067: 'BDW2', 9069: 'BDW3', 9046: 'ZU3BD', 9047: 'ZU3BD', 9048: 'ZU3BD', 9471: 'TSH3', 9472: 'TSH3', 9473: 'TSH3', 9371: 'HZWS', 9373: 'HZWS', 9375: 'HZWS', 9214: 'ZXKD2', 9215: 'ZXKD2', 9114: 'ZU2BD', 9115: 'ZU2BD', 19902: 'ZX3', 19903: 'ZXHZ', 19905: 'ZX3', 19906: 'ZXHZ', 19908: 'ZUS', 19909: 'ZUL', 19910: 'HHZX', 19911: 'ZUHZ', 19913: 'ZUS', 19914: 'ZUL', 19915: 'HHZX', 19916: 'ZUHZ', 19918: 'BDW1', 19920: 'BDW2', 19922: 'ZX2', 19923: 'ZX2', 19925: 'ZU2', 19926: 'ZU2', 19928: 'DWD', 19929: 'DWD', 19930: 'DWD', 19931: 'DWD', 19932: 'DWD', 19934: 'DXDS', 19935: 'DXDS', 19936: 'ZU3BD', 19937: 'ZU3BD', 19938: 'ZXHZ2', 19939: 'ZXHZ2', 19940: 'ZUHZ2', 19941: 'ZUHZ2', 19942: 'BDW1', 19943: 'BDW2', 19945: 'ZX4', 19947: 'ZH4', 19949: 'SXZU24', 19950: 'SXZU12', 19951: 'SXZU6', 19952: 'SXZU4', 19954: 'ZX5', 19956: 'ZH5', 19958: 'WXZU120', 19959: 'WXZU60', 19960: 'WXZU30', 19961: 'WXZU20', 19962: 'WXZU10', 19963: 'WXZU5', 19965: 'BDW1', 19966: 'HSCS', 19967: 'SXBX', 19968: 'SJFC', 19971: 'ZX3', 19972: 'ZXHZ', 19973: 'ZUS', 19974: 'ZUL', 19975: 'HHZX', 19976: 'ZUHZ', 19978: 'RZX2', 19979: 'RZX2HZ', 19982: 'RZX3', 19984: 'RZX3HZ', 19986: 'R3ZUS', 19987: 'R3ZUL', 19988: 'R3HHZC', 19989: 'R3ZUHZ', 19991: 'RZX4', 19993: 'R4ZU24', 19994: 'R4ZU12', 19995: 'R4ZU6', 19996: 'R4ZU4', 19997: 'R2ZU', 19998: 'R2ZUHZ', 19000: 'LHD_LH', 19001: 'LHD_H', 19002: 'BDW1', 19003: 'BDW2', 19005: 'DXDS', 19820: 'ZXKD', 19821: 'ZXKD', 19822: 'ZXKD', 19062: 'BDW1', 19061: 'BDW1', 19064: 'BDW2', 19065: 'BDW2', 19067: 'BDW2', 19069: 'BDW3', 19046: 'ZU3BD', 19047: 'ZU3BD', 19048: 'ZU3BD', 19471: 'TSH3', 19472: 'TSH3', 19473: 'TSH3', 19371: 'HZWS', 19373: 'HZWS', 19375: 'HZWS', 19214: 'ZXKD2', 19215: 'ZXKD2', 19114: 'ZU2BD', 19115: 'ZU2BD', 33958: 'N1cai', 33960: 'N2cai', 33957: 'Cno1', 33959: 'Cno2', 33962: 'N3cai', 33961: 'Cno3', 33982: 'N4cai', 33984: 'N5cai', 33966: 'DWDK', 33967: 'DWDK', 33968: 'DWDK', 33969: 'DWDK', 33970: 'DWDK', 33971: 'DWDK', 33972: 'DWDK', 33973: 'DWDK', 33974: 'DWDK', 33975: 'DWDK', 33978: 'PKDX', 33979: 'PKDX', 33980: 'PKDX', 33987: 'N6cai', 33989: 'PKLH', 33995: 'PKQ2HZDS', 33997: 'PKQ2HZXD', 33985: 'N2caihz',
            },
            lt_issues: opts.issues, lt_ajaxurl: opts.ajaxurl, lt_lottid: opts.lotteryid, lt_total_nums: 0, lt_total_money: 0, lt_time_leave: 0,
            lt_same_code: [], lt_ontimeout: opts.ontimeout, lt_onfinishbuy: opts.onfinishbuy, lt_trace_base: 0, lt_submiting: false, lt_prizes: [], lt_poschoose: []
        });
        ps = null; opts.data_id = null; opts.issues = null; opts.ajaxurl = null; opts.lotteryid = null;
        if ($.browser.msie) { CollectGarbage(); }
        if ($.lt_lottid != 18) {
            alert("time" + opts.servertime + "--" + opts.cur_issue.endtime);
            $($.lt_id_data.id_count_down).lt_timer(opts.servertime, opts.cur_issue.endtime);
        } else {
            $($.lt_id_data.id_count_down).lt_timer("2015-08-26 22:39:47", "2015-08-26 23:39:47");
        }
        cur_cz = $.lt_lottid; $('<select name="lt_project_modes" id="lt_project_modes"></select>').appendTo($.lt_id_data.id_sel_modes); var bhtml = ''; var data_label_count = opts.data_label.length; var hasdefault = false; $.each(opts.data_label, function (i, n) {
            if (typeof (n) == 'object' && ((($.lt_lottid == 1 || $.lt_lottid == 14 || $.lt_lottid == 3 || $.lt_lottid == 6 || $.lt_lottid == 15 || $.lt_lottid == 16 || $.lt_lottid == 18 || $.lt_lottid == 19 || $.lt_lottid == 22 || $.lt_lottid == 41 || $.lt_lottid == 42 || $.lt_lottid == 43) && ((n.title.indexOf('任选') < 0 && opts.rxplay == '0') || (n.title.indexOf('任选') >= 0 && opts.rxplay == '1'))) || ($.lt_lottid != 1 && $.lt_lottid != 14 && $.lt_lottid != 3 && $.lt_lottid != 6 && $.lt_lottid != 15 && $.lt_lottid != 16 && $.lt_lottid != 18 && $.lt_lottid != 19 && $.lt_lottid != 22 && $.lt_lottid != 41 && $.lt_lottid != 42 && $.lt_lottid != 43))) {
                if (i == 0) {
                    if (n.isnew == 1)
                    { bhtml += '<li value="' + i + '" id="two' + (i + 1) + '"><span class="m">' + n.title + '</span><em></em></li>'; } else { bhtml += '<li value="' + i + '" id="two' + (i + 1) + '"><span class="m">' + n.title + '</span></li>'; }
                    lt_smalllabel({ title: n.title, label: n.label });
                } else {
                    if (n.isdefault == 1) {
                        hasdefault = true; cur_methord = n.title; bhtml = bhtml.replace(/(menu_0[1-3])a/gi, "$1"); if (n.isnew == 1)
                        { bhtml += '<li value="' + i + '" id="two' + (i + 1) + '" class="hover"><span class="m">' + n.title + '</span><em></em></li>'; } else { bhtml += '<li value="' + i + '" id="two' + (i + 1) + '" class="hover"><span class="m">' + n.title + '</span></li>'; }
                        lt_smalllabel({ title: n.title, label: n.label });
                    } else {
                        if (n.isnew == 1)
                        { bhtml += '<li value="' + i + '" id="two' + (i + 1) + '"><span class="m">' + n.title + '</span><em></em></li>'; } else { bhtml += '<li value="' + i + '" id="two' + (i + 1) + '"><span class="m">' + n.title + '</span></li>'; }
                    }
                }
            }
        }); if ($.lt_lottid == 1)
        { $($.lt_id_data.id_changetype).show(); }
        if ($.lt_lottid == 18) { $("#lt_trace_if_button_div").css("display", "none"); $("#countdown_time").css("display", "none"); }
        if ($.lt_lottid == 1 || $.lt_lottid == 14 || $.lt_lottid == 3 || $.lt_lottid == 6 || $.lt_lottid == 15 || $.lt_lottid == 16 || $.lt_lottid == 18 || $.lt_lottid == 19 || $.lt_lottid == 22 || $.lt_lottid == 41 || $.lt_lottid == 42 || $.lt_lottid == 43) { if (opts.rxplay == '1') { bhtml += '<li value="100" id="rx_100"><div class="rightBtnDiv"><a class="ChooseFun" href="?nav=ssc&curmid=' + opts.ccuuid + '&rxplay=0">常规玩法</a></div></li>'; } else { bhtml += '<li value="100" id="rx_100"><div class="rightBtnDiv"></div></li>'; } }
        $bhtml = $(bhtml); $(bhtml).appendTo($.lt_id_data.id_labelbox); if (hasdefault == false) { $($.lt_id_data.id_labelbox + " li").eq(0).removeClass().addClass("hover"); }
        $($.lt_id_data.id_labelbox).children().click(function () {
            if ($($(this).children()[0]).attr("class").indexOf('a') >= 0) { return; }
            cur_methord = $($(this).children()[0]).html(); setCookie("aac_postion", ""); cur_c_methord = "0"; $(this).addClass("hover").siblings().removeClass("hover"); var index = parseInt($(this).attr("value"), 10); if (opts.data_label[index].label.length > 0) { lt_smalllabel({ title: opts.data_label[index].title, label: opts.data_label[index].label }); } else { jjtc(); }
            changeLeftCode(); $("#bodyhie", window.parent.document).css("height", $("body").height() + "px"); $("#main", window.parent.document).css("height", $("body").height() + "px");
        }); $($.lt_id_data.id_cur_issue).html(opts.cur_issue.issue); $($.lt_id_data.id_cur_end).html(opts.cur_issue.endtime); var chtml = '<select name="lt_issue_start" id="lt_issue_start">'; $.each($.lt_issues.today, function (i, n) { chtml += '<option value="' + n.issue + '">' + n.issue + (n.issue == opts.cur_issue.issue ? lot_lang.dec_s7 : '') + '</option>'; }); var t = $.lt_issues.tomorrow.length - $.lt_issues.today.length; if (t > 0) { for (i = 0; i < t; i++) { chtml += '<option value="' + $.lt_issues.tomorrow[i].issue + '">' + $.lt_issues.tomorrow[i].issue + '</option>'; } }
        chtml += '</select><input type="hidden" name="lt_curr_user" id="lt_curr_user" value="0"><input type="hidden" name="lt_total_qs" id="lt_total_qs" value="0"><input type="hidden" name="lt_total_nums" id="lt_total_nums" value="0"><input type="hidden" name="lt_total_money" id="lt_total_money" value="0">'; $(chtml).appendTo($.lt_id_data.id_issues); $("tr", $($.lt_id_data.id_cf_content)).live("mouseover", function () { $(this).children().addClass("temp"); }).live("mouseout", function () { $(this).children().removeClass("temp"); }); $($.lt_id_data.id_cf_clear).click(function () { $.confirm(lot_lang.am_s5, function () { $.lt_total_nums = 0; $.lt_total_money = 0; $.lt_trace_base = 0; $.lt_same_code = []; $($.lt_id_data.id_cf_num).html(0); $($.lt_id_data.id_cf_money).html(0); $($.lt_id_data.id_cf_count).html(0); $($.lt_id_data.id_cf_content).children().empty(); cleanTraceIssue(); }); }); $($.lt_id_data.id_tra_if).lt_trace({ issues: opts.issues }); $($.lt_id_data.id_sendok).lt_ajaxSubmit(); $("#lt_sendok_c2").lt_ajaxSubmit(); $($.lt_id_data.id_methodhelp).hover(function () {
            if ($($.lt_id_data.id_helpdiv).html().length > 2) {
                var offset = $(this).offset(); if ($($.lt_id_data.id_helpdiv).html().length > 30) { $($.lt_id_data.id_helpdiv).css({ "width": "300px" }); } else { $($.lt_id_data.id_helpdiv).css({ "width": ($.browser.msie ? "300px" : "auto") }); }
                $($.lt_id_data.id_helpdiv).css({ "left": (offset.left + $(this).width() - 230) + "px", "top": (offset.top + 20) + "px" }).show();
            }
        }, function () { $($.lt_id_data.id_helpdiv).hide(); });
    }
    var lt_smalllabel = function (opts) {
        var ps = { title: '', label: [] }; opts = $.extend({}, ps, opts || {}); var html = ''; var modelhtml = ''; function addItem(o, t, v) { var i = new Option(t, v); o.options.add(i); }
        function SelectItem(obj, value) { for (var i = 0; i < obj.options.length; i++) { if (obj.options[i].value == value) { obj.options[i].selected = true; return true; } } }
        $.each(opts.label, function (i, n) {
            var abccss = ""; if (n.gtitle.length <= 2) { abccss = "methodgroupname_3"; } else if (n.gtitle.length < 4) { abccss = "methodgroupname_2"; } else { abccss = "methodgroupname"; }
            if (n.label[0].methodid == '2616') { html += '<div class="SecondPlayClass_List"><div class="play_title"><span class="' + abccss + '"><font>' + n.gtitle + '</font></span></div><div class="play_detail" style=\"width:700px;\">'; }
            else if (n.label[0].methodid == '1201' || n.label[0].methodid == '2201') { html += '<div class="SecondPlayClass_List"><div class="play_title"><span class="' + abccss + '"><font>' + n.gtitle + '</font></span></div><div class="play_detail" style="margin-left: 100px;margin-top: -19px;">'; }
            else { html += '<div class="SecondPlayClass_List"><div class="play_title"><span class="' + abccss + '"><font>' + n.gtitle + '</font></span></div><div class="play_detail">'; }
            $.each(n.label, function (ii, nn) {
                if (typeof (nn) == 'object') {
                    if (ii > 0 && ii % 10 == 0) { }
                    if (i == 0 && ii == 0) {
                        if (nn.methodid == '2616') { html += '<label style=\"margin-top:2px;\" for="smalllabel_' + i + '_' + ii + '"><input type="radio" style="display:none;" id="smalllabel_' + i + '_' + ii + '" name="smalllabel" value="' + i + '-' + ii + '" checked="checked" />' + nn.desc + '</label>&nbsp;'; } else { html += '<label for="smalllabel_' + i + '_' + ii + '"><input type="radio" style="display:none;" id="smalllabel_' + i + '_' + ii + '" name="smalllabel" value="' + i + '-' + ii + '" checked="checked" />' + nn.desc + '</label>&nbsp;'; }
                        if (nn.methoddesc.length > 0) { $($.lt_id_data.id_methoddesc).html(nn.methoddesc).parent().show(); } else { $($.lt_id_data.id_methoddesc).parent().hide(); }
                        if (nn.methodexample && nn.methodexample.length > 0) { $($.lt_id_data.id_methodexample).show(); $($.lt_id_data.id_examplediv).html(nn.methodexample); } else { $($.lt_id_data.id_methodexample).hide(); $($.lt_id_data.id_examplediv).html(""); }
                        if (nn.methodhelp && nn.methodhelp.length > 0) { $($.lt_id_data.id_helpdiv).html(nn.methodhelp); } else { $($.lt_id_data.id_helpdiv).html(""); }
                        if (nn.methodcount && nn.methodcount.length > 0) { $($.lt_id_data.id_count).show(); $($.lt_id_data.id_countdiv).html(nn.methodcount); } else { $($.lt_id_data.id_methodcount).hide(); $($.lt_id_data.id_countdiv).html(""); }
                        if (nn.ifrandom && nn.ifrandom > 0) { $($.lt_id_data.id_random_area).parent().show(); $("#randomcos").val(nn.randomcos); $("#randomcosvalue").val(nn.randomcosvalue); } else { $($.lt_id_data.id_random_area).parent().hide(); }
                        lt_selcountback(); $.lt_method_data = { methodid: nn.methodid, title: opts.title, name: nn.name, str: nn.show_str, ifrandom: nn.ifrandom, prize: nn.prize, prizegroup: nn.prizegroup, nfdprize: nn.nfdprize, modes: $.lt_method_data.modes ? $.lt_method_data.modes : {}, sp: nn.code_sp, maxcodecount: nn.maxcodecount, defaultposition: nn.defaultposition, maxcodecount: nn.maxcodecount }; $($.lt_id_data.id_selector).lt_selectarea(nn.selectarea); selmodes = getCookie("modes"); if (is_select) $("#lt_project_modes").empty(); $.each(nn.modes, function (j, m) { $.lt_method_data.modes[m.modeid] = { name: m.name, rate: Number(m.rate) }; if (is_select) addItem($("#lt_project_modes")[0], '' + m.name + '', m.modeid); }); if (is_select) SelectItem($("#lt_project_modes")[0], selmodes); if ((typeof (nn.nfdprize) != "undefined") && (nn.nfdprize.levs != "") && (typeof (nn.nfdprize.levs) != "undefined")) {
                            $nfdhtml = '<select name="pmode" id="pmode" class="select100 fl" onchange="fanjiang()" >'; if (nn.nfdprize.userdiffpoint > 0) { $nfdhtml += '<option value ="' + nn.nfdprize.userdiffpoint + '" >奖金' + nn.nfdprize.defaultprize + "-" + nn.nfdprize.userdiffpoint + '%</option>'; } else { $nfdhtml += '<option value ="' + nn.nfdprize.userdiffpoint + '" selected="selected"  >---奖金' + nn.nfdprize.defaultprize + '</option>'; }
                            for (var jjj = 0; jjj < nn.prizegroup.length; jjj++) { $nfdhtml += '<option value ="' + nn.prizegroup[jjj].point + '" >奖金' + nn.prizegroup[jjj].prize + "-" + nn.prizegroup[jjj].point + '%</option>'; }
                            if (nn.nfdprize.userdiffpoint > 0) { $nfdhtml += '<option value ="0" selected="selected" >奖金' + nn.nfdprize.levs + '-0%</option>'; }
                            $("#nfdprize").html($nfdhtml); $("#wrapshow").css("display", 'block'); $("#wrapshow_l").css("display", 'block'); var pmode_value = getCookie("pmode_selected_value"); if (pmode_value)
                            { $("#pmode").val(pmode_value); } else { $("#pmode").val("0"); setCookie("pmode_selected_value", 0); }
                            $("#pmode").change(function () { setCookie("pmode_selected_value", $(this).val()); });
                        }
                        else { $("#wrapshow").css("display", 'none'); $("#wrapshow_l").css("display", 'none'); $("#nfdprize").html(""); }
                    } else {
                        if (n.label[0].methodid == '2616') { html += '<label style=\"margin-top:2px;\" for="smalllabel_' + i + '_' + ii + '"><input type="radio" style="display:none;" id="smalllabel_' + i + '_' + ii + '" name="smalllabel" value="' + i + '-' + ii + '" />' + nn.desc + '</label>&nbsp;'; } else { html += '<label for="smalllabel_' + i + '_' + ii + '"><input type="radio" style="display:none;" id="smalllabel_' + i + '_' + ii + '" name="smalllabel" value="' + i + '-' + ii + '" />' + nn.desc + '</label>&nbsp;'; }
                        if (ii == n.label.length - 1)
                        { html += '&nbsp;&nbsp;&nbsp;'; }
                    }
                }
            });
            html += "</div></div>";
        });
        html += '<input type="hidden">'; $html = $('<div class="SecondPlayClass">' + html + '</div>');
        $($.lt_id_data.id_smalllabel).empty(); $html.appendTo($.lt_id_data.id_smalllabel);
        $("input[name='smalllabel']:first").attr("checked", true).data("ischecked", 'yes').parent().attr("class", "lableclick");
        $("input[name='smalllabel']").parent().click(function () {
            $("#bodyhie", window.parent.document).css("height", $("body").height() + "px");
            $("#main", window.parent.document).css("height", $("body").height() + "px");
            if ($(this).find("input[name='smalllabel']").data("ischecked") == 'yes') { return; }
            cur_c_methord = $(this).text(); changeLeftCodeS();
            var index = $(this).find("input[name='smalllabel']").val().split('-'); if (opts.label[index[0]].label[index[1]].methoddesc.length > 0) { $($.lt_id_data.id_methoddesc).html(opts.label[index[0]].label[index[1]].methoddesc).parent().show(); } else { $($.lt_id_data.id_methoddesc).parent().hide(); }
            if (opts.label[index[0]].label[index[1]].methodhelp && opts.label[index[0]].label[index[1]].methodhelp.length > 0) { $($.lt_id_data.id_helpdiv).html(opts.label[index[0]].label[index[1]].methodhelp); } else { $($.lt_id_data.id_helpdiv).html(""); }
            if (opts.label[index[0]].label[index[1]].methodexample && opts.label[index[0]].label[index[1]].methodexample.length > 0) { $($.lt_id_data.id_methodexample).show(); $($.lt_id_data.id_examplediv).html(opts.label[index[0]].label[index[1]].methodexample); } else { $($.lt_id_data.id_methodexample).hide(); $($.lt_id_data.id_examplediv).html(""); }
            if (opts.label[index[0]].label[index[1]].methodcount && opts.label[index[0]].label[index[1]].methodcount.length > 0) { $($.lt_id_data.id_count).show(); $($.lt_id_data.id_countdiv).html(opts.label[index[0]].label[index[1]].methodcount); } else { $($.lt_id_data.id_count).hide(); $($.lt_id_data.id_countdiv).html(""); }
            if (opts.label[index[0]].label[index[1]].ifrandom && opts.label[index[0]].label[index[1]].ifrandom > 0) { $($.lt_id_data.id_random_area).parent().show(); } else { $($.lt_id_data.id_random_area).parent().hide(); }
            lt_selcountback();
            $.lt_method_data = {
                methodid: opts.label[index[0]].label[index[1]].methodid, title: opts.title, name: opts.label[index[0]].label[index[1]].name, ifrandom: opts.label[index[0]].label[index[1]].ifrandom, str: opts.label[index[0]].label[index[1]].show_str, prize: opts.label[index[0]].label[index[1]].prize, nfdprize: opts.label[index[0]].label[index[1]].nfdprize, prizegroup: opts.label[index[0]].label[index[1]].prizegroup, modes: $.lt_method_data.modes ? $.lt_method_data.modes : {}, sp: opts.label[index[0]].label[index[1]].code_sp, maxcodecount: opts.label[index[0]].label[index[1]].maxcodecount, defaultposition: opts.label[index[0]].label[index[1]].defaultposition
            }; $("input[name='smalllabel']").removeData("ischecked"); $(this).find("input[name='smalllabel']").data("ischecked", 'yes'); $("div[class='play_detail']").find("label").attr("class", ""); $(this).find("input[name='smalllabel']").parent().attr("class", "lableclick"); var needobj = opts.label[index[0]].label[index[1]]; if (typeof (opts.label[index[0]].label[index[1]].nfdprize.defaultprize) != 'undefined' && opts.label[index[0]].label[index[1]].nfdprize.levs != '') {
                $nfdhtml = '<select name="pmode" id="pmode" class="select100 fl" onchange="fanjiang()" >'; if (opts.label[index[0]].label[index[1]].nfdprize.userdiffpoint > 0) { $nfdhtml += '<option value ="' + opts.label[index[0]].label[index[1]].nfdprize.userdiffpoint + '" >奖金' + opts.label[index[0]].label[index[1]].nfdprize.defaultprize + "-" + opts.label[index[0]].label[index[1]].nfdprize.userdiffpoint + '%</option>'; } else { $nfdhtml += '<option value ="' + opts.label[index[0]].label[index[1]].nfdprize.userdiffpoint + '"  selected="selected" >---奖金' + opts.label[index[0]].label[index[1]].nfdprize.defaultprize + '</option>'; }
                var c_obj = opts.label[index[0]].label[index[1]]; for (var jjj = 0; jjj < c_obj.prizegroup.length; jjj++) { $nfdhtml += '<option value ="' + c_obj.prizegroup[jjj].point + '" >奖金' + c_obj.prizegroup[jjj].prize + "-" + c_obj.prizegroup[jjj].point + '%</option>'; }
                if (opts.label[index[0]].label[index[1]].nfdprize.userdiffpoint > 0) { $nfdhtml += '<option value ="0" selected="selected" >奖金' + opts.label[index[0]].label[index[1]].nfdprize.levs + '-0%</option>'; }
                $("#nfdprize").html($nfdhtml); $("#wrapshow").css("display", 'block'); $("#wrapshow_l").css("display", 'block'); var pmode_value = getCookie("pmode_selected_value"); if (pmode_value != null)
                { $("#pmode").val(pmode_value); }
            }
            else { $("#wrapshow").css("display", 'none'); $("#wrapshow_l").css("display", 'none'); $("#nfdprize").html(""); }
            $($.lt_id_data.id_selector).lt_selectarea(opts.label[index[0]].label[index[1]].selectarea); $("#lt_project_modes").empty(); selmodes = getCookie("modes"); $.each(opts.label[index[0]].label[index[1]].modes, function (j, m) { $.lt_method_data.modes[m.modeid] = { name: m.name, rate: Number(m.rate) }; if (is_select) addItem($("#lt_project_modes")[0], '' + m.name + '', m.modeid); }); if (is_select) SelectItem($("#lt_project_modes")[0], selmodes);
        });
    };
    var lt_selcountback = function () {
        $($.lt_id_data.id_sel_money).html(0); $($.lt_id_data.id_sel_num).html(0);
    };
    $.fn.lt_timer = function (start, end) {
        var me = this; if (start == "" || end == "") {
            $.lt_time_leave = 0;
        }
        else {
            $.lt_time_leave = (format(end).getTime() - format(start).getTime()) / 1000;
        }
        function fftime(n) { return Number(n) < 10 ? "" + 0 + Number(n) : Number(n); }
        function format(dateStr) { return new Date(dateStr.replace(/[\-\u4e00-\u9fa5]/g, "/")); }
        function diff(t) { return t > 0 ? { day: Math.floor(t / 86400), hour: Math.floor(t % 86400 / 3600), minute: Math.floor(t % 3600 / 60), second: Math.floor(t % 60) } : { day: 0, hour: 0, minute: 0, second: 0 }; }
        var bcs = 30; if ($.lt_lottid == 16 || $.lt_lottid == 17) { bcs = 10; }
        var timerno = window.setInterval(function () {
            if ($.lt_time_leave > 0 && ($.lt_time_leave % bcs == 0 || $.lt_time_leave == 60)) { $.ajax({ type: 'POST', url: $.lt_ajaxurl, timeout: 30000, data: "lotteryid=" + $.lt_lottid + "&issue=" + $($.lt_id_data.id_cur_issue).html() + "&flag=gettime&dt=" + new Date().getTime(), success: function (data) { data = parseInt(data, 10); data = isNaN(data) ? 0 : data; data = data <= 0 ? 0 : data; $.lt_time_leave = data; } }); }
            if ($.lt_time_leave <= 0) {
                clearInterval(timerno); if ($.lt_submiting == false) {
                    $.unblockUI({ fadeInTime: 0, fadeOutTime: 0 }); if ($($.lt_id_data.id_cur_issue).html() > '') {
                        var im = is_mobile(); if (!im) { $.alert(lot_lang.am_s15, '', '', '', 2000); }
                        $.lt_reset(true); $.lt_ontimeout();
                    } else { if ($.lt_lottid != 18) { $.alert(lot_lang.am_s15_2); } }
                }
            }
            var oDate = diff($.lt_time_leave--); $(me).html("" + (oDate.day > 0 ? oDate.day + (lot_lang.dec_s21) + " " : "") + "" + fftime(oDate.hour) + ":" + fftime(oDate.minute) + ":" + fftime(oDate.second) + "");
        }, 1000);
    };
    $.lt_reset = function (iskeep) {
        if (iskeep && iskeep === true) { iskeep = true; } else { iskeep = false; }
        if ($.lt_time_leave <= 0) {
            if (iskeep == false) { $(":radio:checked", $($.lt_id_data.id_smalllabel)).removeData("ischecked").click(); }
            if (iskeep == false) {
                $.lt_total_nums = 0; $.lt_total_money = 0; $.lt_trace_base = 0; $.lt_same_code = [];
                $($.lt_id_data.id_cf_num).html(0); $($.lt_id_data.id_cf_money).html(0); $($.lt_id_data.id_cf_content).empty();
                $($.lt_id_data.id_cf_count).html(0); $("#singe_bet_count").html(0); $("#times").attr('selected');
            }
            $.ajax({
                type: 'POST', URL: $.lt_ajaxurl, data: "lotteryid=" + $.lt_lottid + "&flag=read", success: function (data) {
                    if (data.length <= 0) { $.alert(lot_lang.am_s16); return false; }
                    var partn = /<script.*>.*<\/script>/;
                    if (partn.test(data)) {
                        alert(lot_lang.am_s17 + "|110|" + data);
                        top.location.href = "../?controller=default";
                        return false;
                    }
                    if (data == "empty" && $.lt_lottid != 18) {
                        $.alert(lot_lang.am_s18);
                        window.location.reload();
                        return false;
                    }
                    eval("data=" + data);
                    $($.lt_id_data.id_cur_issue).html(data.issue);
                    $($.lt_id_data.id_cur_end).html(data.saleend); if ($.lt_lottid != 18) {
                        $($.lt_id_data.id_count_down).lt_timer(data.nowtime, data.saleend);
                    } else {
                        $($.lt_id_data.id_count_down).lt_timer("2015-08-26 22:39:47", "2015-08-26 23:39:47");
                    }
                    var l = $.lt_issues.today.length;
                    while (true) {
                        if (data.issue == $.lt_issues.today.shift().issue) { break; }
                        else { break; }
                    }
                    $.lt_issues.today.unshift({ issue: data.issue, endtime: data.saleend });
                    var chtml = '';
                    $.each($.lt_issues.today, function (i, n) {
                        chtml += '<option value="' + n.issue + '">' + n.issue + (n.issue == data.issue ? lot_lang.dec_s7 : '') + '</option>';
                    });
                    var t = $.lt_issues.tomorrow.length - $.lt_issues.today.length; if (t > 0) {
                        for (i = 0; i < t; i++) {
                            chtml += '<option value="' + $.lt_issues.tomorrow[i].issue + '">' + $.lt_issues.tomorrow[i].issue + '</option>';
                        }
                    }
                    $("#lt_issue_start").empty();
                    $(chtml).appendTo("#lt_issue_start");
                    t_count = $.lt_issues.tomorrow.length;
                    $($.lt_id_data.id_tra_alct).html(t_count); cleanTraceIssue(); while (true) {
                        $j = $("tr:first", $("#lt_trace_issues_today"));
                        if ($j.length <= 0) { break; }
                        if ($j.find(":checkbox").val() == data.issue) {
                            break;
                        }
                        $j.remove();
                    }
                }, error: function () {
                    $.alert(lot_lang.am_s16);
                    cleanTraceIssue();
                    return false;
                }
            });
        } else {
            if (iskeep == false) {
                $(":radio:checked", $($.lt_id_data.id_smalllabel)).removeData("ischecked").click();
            }
            if (iskeep == false) {
                $.lt_total_nums = 0; $.lt_total_money = 0; $.lt_trace_base = 0; $.lt_same_code = []; $($.lt_id_data.id_cf_num).html(0); $($.lt_id_data.id_cf_money).html(0);
                $($.lt_id_data.id_cf_content).empty(); $($.lt_id_data.id_cf_count).html(0);
                $("#singe_bet_count").html(0);
            }
            if (iskeep == false) { cleanTraceIssue(); }
        }
    };
    $.fn.lt_ajaxSubmit = function () {
        var me = this; $(this).click(function () {
            if (checkTimeOut() == false) { return; }
            $.lt_submiting = true; var istrace = $($.lt_id_data.id_tra_ifb).attr("checked") == 'checked' ? 1 : 0;
            if ($.lt_total_nums <= 0 || $.lt_total_money <= 0) {
                $.lt_submiting = false; $.alert(lot_lang.am_s6);
                return;
            }
            if (istrace == true) {
                if ($.lt_trace_issue <= 0 || $.lt_trace_money <= 0) { $.lt_submiting = false; $(".ZH_bet_layerBox").show(); $.alert(lot_lang.am_s20); return; }
                var terr = ""; $("input[name^='lt_trace_issues']:checked", $($.lt_id_data.id_tra_issues)).each(function () {
                    if (Number($(this).closest("tr").find("input[name^='lt_trace_times_']").val()) <= 0) {
                        terr += $(this).val() + '\n';
                    }
                });
                if (terr.length > 0) {
                    $.lt_submiting = false;
                    $.alert(lot_lang.am_s21.replace("[errorIssue]", terr));
                    return;
                }
            }
            if (istrace == true) { var msg = lot_lang.am_s14.replace("[count]", $.lt_trace_issue); } else {
                if (($.cnLotteryName).indexOf("秒秒彩") > -1) {
                    var msg = lot_lang.dec_s30.replace("[issue]", "- -");
                }
                else {
                    var msg = lot_lang.dec_s30.replace("[issue]", $("#lt_issue_start").val());
                }
                var msg = msg.replace("[cnlotteryname]", $.cnLotteryName);
            }
            msg += '<div class="floatarea" style="height:150px;">'; var modesmsg = []; var modes = 0;
            $.each($('li', $($.lt_id_data.id_cf_content)), function (i, n) {
                modes = $(n).data('data').modes; if (modesmsg[modes] == undefined) { modesmsg[modes] = []; }
                modesmsg[modes].push(("[" + $("div > label", n).html() + "] " + $("div > span:eq(0)", n).html()).replace(lot_lang.dec_s5, "") + "\n");
            });
            $.each(modesmsg, function (i, n) { if ($.lt_method_data.modes[i] != undefined && n != undefined && n.length > 0) { msg += '<strong>' + $.lt_method_data.modes[i].name + "模式</strong>\n" + n.join(""); } }); msg += '</div>'; $.lt_trace_money = Math.round($.lt_trace_money * 1000) / 1000; msg += lot_lang.dec_s9 + ': ' + (istrace == true ? $.lt_trace_money : $.lt_total_money) + ' ' + lot_lang.dec_s3; $.confirm(msg, function () {
                if (checkTimeOut() == false) { $.lt_submiting = false; return; }
                $("#lt_total_nums").val($.lt_total_nums); $("#lt_total_money").val($.lt_total_money); ajaxSubmit();
            }, function () { $.lt_submiting = false; return checkTimeOut(); }, '', 400);
        });
        $($.lt_id_data.id_methodexample).hover(function () {
            if ($($.lt_id_data.id_examplediv).html().length > 2) {
                var offset = $(this).offset(); if ($($.lt_id_data.id_examplediv).html().length > 30) { $($.lt_id_data.id_examplediv).css({ "width": "300px" }); } else { $($.lt_id_data.id_examplediv).css({ "width": ($.browser.msie ? "300px" : "auto") }); }
                $($.lt_id_data.id_examplediv).css({ "left": ((offset.left + $(this).outerWidth()) - 150) + "px", "top": (offset.top + 20) + "px" }).show();
            }
        }, function () {
            $($.lt_id_data.id_examplediv).hide();
        });
        $($.lt_id_data.id_count).hover(function () {
            if ($($.lt_id_data.id_countdiv).html().length > 2) {
                var offset = $(this).offset();
                if ($($.lt_id_data.id_countdiv).html().length > 30) {
                    $($.lt_id_data.id_countdiv).css({ "width": "300px" });
                } else {
                    $($.lt_id_data.id_countdiv).css({ "width": ($.browser.msie ? "300px" : "auto") });
                }
                $($.lt_id_data.id_countdiv).css({ "left": (offset.left + $(this).outerWidth()) + "px", "top": (offset.top - 20) + "px" }).show();
            }
        }, function () {
            $($.lt_id_data.id_countdiv).hide();
        });
        function ajaxSubmit() {
            $.blockUI({ message: lot_lang.am_s22, overlayCSS: { backgroundColor: '#FFFFFF', opacity: 0.5, cursor: 'wait' } });
            var form = $(me).closest("form");
            var ss = $(form).serialize();
            console.log(ss);
            $.ajax({
                type: 'POST', url: $.lt_ajaxurl, timeout: 30000, data: $(form).serialize(),
                success: function (data) {
                    $.unblockUI({ fadeInTime: 0, fadeOutTime: 0 });
                    $.lt_submiting = false;
                    if (data.length <= 0) {
                        $.alert(lot_lang.am_s16);
                        return false;
                    }
                    var partn = /<script.*>.*<\/script>/;
                    if (partn.test(data)) {
                        alert(lot_lang.am_s17 + "|111|" + data);
                        top.location.href = "../?controller=default"; return false;
                    }
                    if (data.indexOf("mmcsuccess$$") > -1) {
                        $(".close_betLayer").click();
                        checkmmcprize(data); return false;
                    }
                    if (data == "success" || $.trim(data) == "success") {
                        $(".close_betLayer").click();
                        $.alert(lot_lang.am_s24, lot_lang.dec_s25, function () {
                            if (checkTimeOut() == true) { $.lt_reset(); }
                            $.lt_onfinishbuy();
                        });
                        return false;
                    } else {
                        eval("data = " + data + ";");
                        if (data.stats == 'error') {
                            $.alert(data.data, '', function () { return checkTimeOut(); }); return false;
                        }
                        if (data.stats == 'fail') {
                            msg = lot_lang.am_s25.replace("[success]", data.data.success).replace("[fail]", data.data.fail);
                            msg += '<div class="floatarea" style="height:100px;">';
                            $.each(data.data.content, function (i, n) { msg += n + "\n"; });
                            msg += '</div>';
                            msg += lot_lang.am_s26;
                            $.confirm(msg, function () {
                                if (checkTimeOut() == true) {
                                    $("#lt_trace_if_button").attr("checked", false);
                                    $(".ZH_bet_layerBox").hide();
                                    $($.lt_id_data.id_tra_stop).attr("disabled", true).attr("checked", false);
                                    $($.lt_id_data.id_tra_box1).hide();
                                    $($.lt_id_data.id_tra_box2).hide();
                                    $($.lt_id_data.id_tra_ifb).val('no');
                                    $.lt_reset();
                                }
                                $.lt_onfinishbuy();
                            }, function () {
                                return checkTimeOut();
                                $.lt_onfinishbuy();
                            }, '', 400);
                        }
                    }
                },
                error: function () {
                    $.lt_submiting = false;
                    $.unblockUI({ fadeInTime: 0, fadeOutTime: 0 });
                    $.alert(lot_lang.am_s23, '', checkTimeOut);
                }
            });
        };
    }; $.fn.lt_ajaxSubmitonekey = function () {
        var me = $.lt_id_data.id_sel_onekeybet; if (checkTimeOut() == false) { return; }
        $.lt_submiting = true; if ($.lt_total_nums <= 0 || $.lt_total_money <= 0) { $.lt_submiting = false; $.alert(lot_lang.am_s6); return; }
        if (($.cnLotteryName).indexOf("秒秒彩") > -1) { var msg = lot_lang.dec_s30.replace("[issue]", "- -"); } else { var msg = lot_lang.dec_s30.replace("[issue]", $("#lt_issue_start").val()); }
        var msg = msg.replace("[cnlotteryname]", $.cnLotteryName); msg += '<div class="floatarea" style="height:150px;">'; var modesmsg = []; var modes = 0; $.each($('li', $($.lt_id_data.id_cf_content)), function (i, n) {
            modes = $(n).data('data').modes; if (modesmsg[modes] == undefined) { modesmsg[modes] = []; }
            modesmsg[modes].push(("[" + $("div > label", n).html() + "] " + $("div > span:eq(0)", n).html()).replace(lot_lang.dec_s5, "") + "\n");
        }); $.each(modesmsg, function (i, n) { if ($.lt_method_data.modes[i] != undefined && n != undefined && n.length > 0) { msg += '<strong>' + $.lt_method_data.modes[i].name + "模式</strong>\n" + n.join(""); } }); msg += '</div>'; $.lt_trace_money = Math.round($.lt_trace_money * 1000) / 1000; msg += lot_lang.dec_s9 + ': ' + $.lt_total_money + ' ' + lot_lang.dec_s3; $.confirm(msg, function () {
            if (checkTimeOut() == false) { $.lt_submiting = false; return; }
            $("#lt_total_nums").val($.lt_total_nums); $("#lt_total_money").val($.lt_total_money); ajaxSubmit();
        }, function () { $.lt_reset(); $.lt_submiting = false; return checkTimeOut(); }, '', 400);
        function ajaxSubmit() {
            alert("hi.123");
            $.blockUI({
                message: lot_lang.am_s22,
                overlayCSS: { backgroundColor: '#FFFFFF', opacity: 0.5, cursor: 'wait' }
            });
            var form = $(me).closest("form");
            $.ajax({
                type: 'POST', url: $.lt_ajaxurl, timeout: 30000,
                data: $(form).serialize(),
                success: function (data) {
                    $.unblockUI({ fadeInTime: 0, fadeOutTime: 0 });
                    $.lt_submiting = false;
                    if (data.length <= 0) {
                        $.alert(lot_lang.am_s16);
                        return false;
                    }
                    var partn = /<script.*>.*<\/script>/; if (partn.test(data)) {
                        alert(lot_lang.am_s17 + "|112|" + data); top.location.href = "../?controller=default"; return false;
                    }
                    if (data.indexOf("mmcsuccess$$") > -1) {
                        $(".close_betLayer").click();
                        checkmmcprize(data); return false;
                    }
                    if (data == "success") {
                        $(".close_betLayer").click(); $.alert(lot_lang.am_s24, lot_lang.dec_s25, function () {
                            if (checkTimeOut() == true) { $.lt_reset(); }
                            $.lt_onfinishbuy();
                        }); return false;
                    } else {
                        eval("data = " + data + ";"); if (data.stats == 'error') { $.lt_reset(); $.alert(data.data, '', function () { return checkTimeOut(); }); return false; }
                        if (data.stats == 'fail') {
                            msg = lot_lang.am_s25.replace("[success]", data.data.success).replace("[fail]", data.data.fail); msg += '<div class="floatarea" style="height:100px;">'; $.each(data.data.content, function (i, n) { msg += n + "\n"; }); msg += '</div>'; if (checkTimeOut() == true) { $("#lt_trace_if_button").attr("checked", false); $(".ZH_bet_layerBox").hide(); $($.lt_id_data.id_tra_stop).attr("disabled", true).attr("checked", false); $($.lt_id_data.id_tra_box1).hide(); $($.lt_id_data.id_tra_box2).hide(); $($.lt_id_data.id_tra_ifb).val('no'); $.lt_reset(); }
                            $.lt_onfinishbuy(); $.alert(msg);
                        }
                    }
                }, error: function () {
                    $.lt_submiting = false; $.lt_reset(); $.unblockUI({ fadeInTime: 0, fadeOutTime: 0 });
                    $.alert(lot_lang.am_s23, '', checkTimeOut);
                }
            });
        };
    }
    function checkTimeOut() {
        if ($.lt_lottid == 18) { return true; }
        if ($.lt_time_leave <= 0) {
            if ($($.lt_id_data.id_cur_issue).html() > '') { $.confirm(lot_lang.am_s15, function () { $.lt_reset(false); $.lt_ontimeout(); }, function () { $.lt_reset(true); $.lt_ontimeout(); }); } else { $.alert(lot_lang.am_s15_2); }
            return false;
        } else { return true; }
    }; function checkmmcprize(data) {
        var arr = data.split("$$"); var code = arr[1]; var issue = arr[2]; var totalprice = arr[3]; var totalbonus = arr[4]; var str = "秒秒彩第<font color='#499fff'>" + issue + "</font>期中奖号码为:<font color='#499fff'>" + code + "</font>，总下注:<font color='#ffa200'>" + totalprice + "</font>,总中奖:<font color='red'>" + totalbonus + "</font>"; $.alert(str, lot_lang.dec_s25, function () {
            if (checkTimeOut() == true) { $.lt_reset(); }
            $.lt_onfinishbuy();
        });
    }
    function is_mobile() { var u = navigator.userAgent; var android = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; var iPhone = u.indexOf('iPhone') > -1; var iPad = u.indexOf('iPad') > -1; if (android || iPhone || iPad) { return 1; } else { return 0; } }; function changeLeftCode() {
        var ssc = "1,3,6,14,15,16,18,19,22,33,41,42,43"; var llx5 = "5,7,8,10,21,40,48"; var three3d = "11,12,17"; var klsf = "26,28,29,31,36"; var pk10 = "27,34,54"; var isssc = isinarr(ssc, cur_cz) > -1 ? 1 : 0; var isllx5 = isinarr(llx5, cur_cz) > -1 ? 1 : 0; var is3d = isinarr(three3d, cur_cz) > -1 ? 1 : 0; var ispk10 = isinarr(pk10, cur_cz) > -1 ? 1 : 0; var isklsf = isinarr(klsf, cur_cz) > -1 ? 1 : 0; var mid = getmid(); if (cur_methord.indexOf("二码") > -1) { if (isllx5) { mid = 3; } else { mid = 4; } }
        var max = is3d > 0 ? 3 : 5; if (cur_cz == 20) { max = 3; } else if (ispk10) { max = 10; }
        if (isinarr("大小单双", cur_methord) > -1 && isssc) { mid = 4; }
        changeCssOfcode(max, mid, isssc, isllx5, is3d); if (isinarr("大小单双", cur_methord) > -1 && !ispk10 && !isklsf) { cur_c_methord = "后二大小单双"; changecssofform("dxds"); } else if (isinarr("大小", cur_methord) > -1 && !ispk10) { changecssofform("jsksdx"); } else if (isinarr("单双", cur_methord) > -1 && !ispk10) { changecssofform("jsksds"); } else if (isinarr("和值", cur_methord) > -1) { changecssofform("hz"); } else { hidext(); }
    }
    function changeLeftCodeS() {
        var ssc = "1,3,6,14,15,16,18,19,26,28,29,31,22,36,41,42,43"; var llx5 = "5,7,8,10,21,33,40,48"; var three3d = "11,12,17"; var pk10 = "27,34,54"; var isssc = isinarr(ssc, cur_cz) > -1 ? 1 : 0; var isllx5 = isinarr(llx5, cur_cz) > -1 ? 1 : 0; var is3d = isinarr(three3d, cur_cz) > -1 ? 1 : 0; var ispk10 = isinarr(pk10, cur_cz) > -1 ? 1 : 0; var mid = 0; var max = is3d > 0 ? 3 : 5; var max = ispk10 ? 10 : max; if (isinarr("二码,不定胆,大小单双", cur_methord) > -1 && !ispk10) { mid = cur_c_methord.indexOf("前三") > -1 ? 1 : mid; mid = cur_c_methord.indexOf("后三") > -1 ? 2 : mid; mid = cur_c_methord.indexOf("前二") > -1 ? 3 : mid; mid = cur_c_methord.indexOf("后二") > -1 ? 4 : mid; mid = cur_c_methord.indexOf("中三") > -1 ? 6 : mid; changeCssOfcode(max, mid, isssc, isllx5, is3d); }
        if (ispk10 && cur_c_methord.indexOf("冠亚和值") > -1) { mid = getmid(); changeCssOfcode(max, mid, isssc, isllx5, is3d); }
        if (ispk10 && cur_c_methord.indexOf("和值") < 0) { mid = getmid(); hidext(); changeCssOfcode(max, mid, isssc, isllx5, is3d); return true; }
        if (cur_methord.indexOf("任选") < 0 && cur_c_methord.indexOf("组") > -1 && cur_c_methord.indexOf("和值") < 0 && cur_c_methord.indexOf("组合") < 0 && cur_c_methord.indexOf("前二组选") < 0 && cur_c_methord.indexOf("后二组选") < 0) { changecssofform("zx"); } else if (cur_c_methord.indexOf("和值") > -1 && cur_methord.indexOf("任选") < 0) { changecssofform("hz"); } else if (cur_c_methord.indexOf("大小单双") > -1 && !ispk10) { changecssofform("dxds"); } else if (cur_c_methord.indexOf("单双") > -1 && (cur_cz == 20 || cur_cz == 30 || cur_cz == 35)) { changecssofform("jsksds"); } else if (cur_c_methord.indexOf("大小") > -1 && (cur_cz == 20 || cur_cz == 30 || cur_cz == 35)) { changecssofform("jsksdx"); } else if (cur_c_methord.indexOf("跨度") > -1) { changecssofform("kd"); } else { hidext(); }
    }
})(jQuery); function fanjiang() { var fanjiang = $('#pmode option:selected').val(); setCookie("pmode_selected_value", fanjiang); }