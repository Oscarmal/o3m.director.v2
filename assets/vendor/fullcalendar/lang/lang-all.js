! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], a) : "object" == typeof exports ? module.exports = a(require("jquery"), require("moment")) : a(jQuery, moment)
}(function(a, b) {
    ! function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "ar-ma", {
                months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
                monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
                weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
                weekdaysShort: "Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
                weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ÙÙŠ %s",
                    past: "Ù…Ù†Ø° %s",
                    s: "Ø«ÙˆØ§Ù†",
                    m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                    mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                    h: "Ø³Ø§Ø¹Ø©",
                    hh: "%d Ø³Ø§Ø¹Ø§Øª",
                    d: "ÙŠÙˆÙ…",
                    dd: "%d Ø£ÙŠØ§Ù…",
                    M: "Ø´Ù‡Ø±",
                    MM: "%d Ø£Ø´Ù‡Ø±",
                    y: "Ø³Ù†Ø©",
                    yy: "%d Ø³Ù†ÙˆØ§Øª"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("ar-ma", "ar", {
            closeText: "Ø¥ØºÙ„Ø§Ù‚",
            prevText: "&#x3C;Ø§Ù„Ø³Ø§Ø¨Ù‚",
            nextText: "Ø§Ù„ØªØ§Ù„ÙŠ&#x3E;",
            currentText: "Ø§Ù„ÙŠÙˆÙ…",
            monthNames: ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"],
            monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames: ["Ø§Ù„Ø£Ø­Ø¯", "Ø§Ù„Ø§Ø«Ù†ÙŠÙ†", "Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡", "Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡", "Ø§Ù„Ø®Ù…ÙŠØ³", "Ø§Ù„Ø¬Ù…Ø¹Ø©", "Ø§Ù„Ø³Ø¨Øª"],
            dayNamesShort: ["Ø£Ø­Ø¯", "Ø§Ø«Ù†ÙŠÙ†", "Ø«Ù„Ø§Ø«Ø§Ø¡", "Ø£Ø±Ø¨Ø¹Ø§Ø¡", "Ø®Ù…ÙŠØ³", "Ø¬Ù…Ø¹Ø©", "Ø³Ø¨Øª"],
            dayNamesMin: ["Ø­", "Ù†", "Ø«", "Ø±", "Ø®", "Ø¬", "Ø³"],
            weekHeader: "Ø£Ø³Ø¨ÙˆØ¹",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("ar-ma", {
            buttonText: {
                month: "Ø´Ù‡Ø±",
                week: "Ø£Ø³Ø¨ÙˆØ¹",
                day: "ÙŠÙˆÙ…",
                list: "Ø£Ø¬Ù†Ø¯Ø©"
            },
            allDayText: "Ø§Ù„ÙŠÙˆÙ… ÙƒÙ„Ù‡",
            eventLimitText: "Ø£Ø®Ø±Ù‰"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = {
                    1: "Ù¡",
                    2: "Ù¢",
                    3: "Ù£",
                    4: "Ù¤",
                    5: "Ù¥",
                    6: "Ù¦",
                    7: "Ù§",
                    8: "Ù¨",
                    9: "Ù©",
                    0: "Ù "
                },
                c = {
                    "Ù¡": "1",
                    "Ù¢": "2",
                    "Ù£": "3",
                    "Ù¤": "4",
                    "Ù¥": "5",
                    "Ù¦": "6",
                    "Ù§": "7",
                    "Ù¨": "8",
                    "Ù©": "9",
                    "Ù ": "0"
                },
                d = (b.defineLocale || b.lang).call(b, "ar-sa", {
                    months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
                    monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
                    weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
                    weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
                    weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /Øµ|Ù…/,
                    isPM: function(a) {
                        return "Ù…" === a
                    },
                    meridiem: function(a, b, c) {
                        return 12 > a ? "Øµ" : "Ù…"
                    },
                    calendar: {
                        sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                        nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                        nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                        lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                        lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "ÙÙŠ %s",
                        past: "Ù…Ù†Ø° %s",
                        s: "Ø«ÙˆØ§Ù†",
                        m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                        mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                        h: "Ø³Ø§Ø¹Ø©",
                        hh: "%d Ø³Ø§Ø¹Ø§Øª",
                        d: "ÙŠÙˆÙ…",
                        dd: "%d Ø£ÙŠØ§Ù…",
                        M: "Ø´Ù‡Ø±",
                        MM: "%d Ø£Ø´Ù‡Ø±",
                        y: "Ø³Ù†Ø©",
                        yy: "%d Ø³Ù†ÙˆØ§Øª"
                    },
                    preparse: function(a) {
                        return a.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function(a) {
                            return c[a]
                        }).replace(/ØŒ/g, ",")
                    },
                    postformat: function(b) {
                        return b.replace(/\d/g, function(b) {
                            return a[b]
                        }).replace(/,/g, "ØŒ")
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                });
            return d
        }(), a.fullCalendar.datepickerLang("ar-sa", "ar", {
            closeText: "Ø¥ØºÙ„Ø§Ù‚",
            prevText: "&#x3C;Ø§Ù„Ø³Ø§Ø¨Ù‚",
            nextText: "Ø§Ù„ØªØ§Ù„ÙŠ&#x3E;",
            currentText: "Ø§Ù„ÙŠÙˆÙ…",
            monthNames: ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"],
            monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames: ["Ø§Ù„Ø£Ø­Ø¯", "Ø§Ù„Ø§Ø«Ù†ÙŠÙ†", "Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡", "Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡", "Ø§Ù„Ø®Ù…ÙŠØ³", "Ø§Ù„Ø¬Ù…Ø¹Ø©", "Ø§Ù„Ø³Ø¨Øª"],
            dayNamesShort: ["Ø£Ø­Ø¯", "Ø§Ø«Ù†ÙŠÙ†", "Ø«Ù„Ø§Ø«Ø§Ø¡", "Ø£Ø±Ø¨Ø¹Ø§Ø¡", "Ø®Ù…ÙŠØ³", "Ø¬Ù…Ø¹Ø©", "Ø³Ø¨Øª"],
            dayNamesMin: ["Ø­", "Ù†", "Ø«", "Ø±", "Ø®", "Ø¬", "Ø³"],
            weekHeader: "Ø£Ø³Ø¨ÙˆØ¹",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("ar-sa", {
            buttonText: {
                month: "Ø´Ù‡Ø±",
                week: "Ø£Ø³Ø¨ÙˆØ¹",
                day: "ÙŠÙˆÙ…",
                list: "Ø£Ø¬Ù†Ø¯Ø©"
            },
            allDayText: "Ø§Ù„ÙŠÙˆÙ… ÙƒÙ„Ù‡",
            eventLimitText: "Ø£Ø®Ø±Ù‰"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "ar-tn", {
                months: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
                monthsShort: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
                weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
                weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
                weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ÙÙŠ %s",
                    past: "Ù…Ù†Ø° %s",
                    s: "Ø«ÙˆØ§Ù†",
                    m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                    mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                    h: "Ø³Ø§Ø¹Ø©",
                    hh: "%d Ø³Ø§Ø¹Ø§Øª",
                    d: "ÙŠÙˆÙ…",
                    dd: "%d Ø£ÙŠØ§Ù…",
                    M: "Ø´Ù‡Ø±",
                    MM: "%d Ø£Ø´Ù‡Ø±",
                    y: "Ø³Ù†Ø©",
                    yy: "%d Ø³Ù†ÙˆØ§Øª"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("ar-tn", "ar", {
            closeText: "Ø¥ØºÙ„Ø§Ù‚",
            prevText: "&#x3C;Ø§Ù„Ø³Ø§Ø¨Ù‚",
            nextText: "Ø§Ù„ØªØ§Ù„ÙŠ&#x3E;",
            currentText: "Ø§Ù„ÙŠÙˆÙ…",
            monthNames: ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"],
            monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames: ["Ø§Ù„Ø£Ø­Ø¯", "Ø§Ù„Ø§Ø«Ù†ÙŠÙ†", "Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡", "Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡", "Ø§Ù„Ø®Ù…ÙŠØ³", "Ø§Ù„Ø¬Ù…Ø¹Ø©", "Ø§Ù„Ø³Ø¨Øª"],
            dayNamesShort: ["Ø£Ø­Ø¯", "Ø§Ø«Ù†ÙŠÙ†", "Ø«Ù„Ø§Ø«Ø§Ø¡", "Ø£Ø±Ø¨Ø¹Ø§Ø¡", "Ø®Ù…ÙŠØ³", "Ø¬Ù…Ø¹Ø©", "Ø³Ø¨Øª"],
            dayNamesMin: ["Ø­", "Ù†", "Ø«", "Ø±", "Ø®", "Ø¬", "Ø³"],
            weekHeader: "Ø£Ø³Ø¨ÙˆØ¹",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("ar-tn", {
            buttonText: {
                month: "Ø´Ù‡Ø±",
                week: "Ø£Ø³Ø¨ÙˆØ¹",
                day: "ÙŠÙˆÙ…",
                list: "Ø£Ø¬Ù†Ø¯Ø©"
            },
            allDayText: "Ø§Ù„ÙŠÙˆÙ… ÙƒÙ„Ù‡",
            eventLimitText: "Ø£Ø®Ø±Ù‰"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = {
                    1: "Ù¡",
                    2: "Ù¢",
                    3: "Ù£",
                    4: "Ù¤",
                    5: "Ù¥",
                    6: "Ù¦",
                    7: "Ù§",
                    8: "Ù¨",
                    9: "Ù©",
                    0: "Ù "
                },
                c = {
                    "Ù¡": "1",
                    "Ù¢": "2",
                    "Ù£": "3",
                    "Ù¤": "4",
                    "Ù¥": "5",
                    "Ù¦": "6",
                    "Ù§": "7",
                    "Ù¨": "8",
                    "Ù©": "9",
                    "Ù ": "0"
                },
                d = function(a) {
                    return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && 10 >= a % 100 ? 3 : a % 100 >= 11 ? 4 : 5
                },
                e = {
                    s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
                    m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
                    h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
                    d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
                    M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
                    y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
                },
                f = function(a) {
                    return function(b, c, f, g) {
                        var h = d(b),
                            i = e[a][d(b)];
                        return 2 === h && (i = i[c ? 0 : 1]), i.replace(/%d/i, b)
                    }
                },
                g = ["ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ ÙŠÙ†Ø§ÙŠØ±", "Ø´Ø¨Ø§Ø· ÙØ¨Ø±Ø§ÙŠØ±", "Ø¢Ø°Ø§Ø± Ù…Ø§Ø±Ø³", "Ù†ÙŠØ³Ø§Ù† Ø£Ø¨Ø±ÙŠÙ„", "Ø£ÙŠØ§Ø± Ù…Ø§ÙŠÙˆ", "Ø­Ø²ÙŠØ±Ø§Ù† ÙŠÙˆÙ†ÙŠÙˆ", "ØªÙ…ÙˆØ² ÙŠÙˆÙ„ÙŠÙˆ", "Ø¢Ø¨ Ø£ØºØ³Ø·Ø³", "Ø£ÙŠÙ„ÙˆÙ„ Ø³Ø¨ØªÙ…Ø¨Ø±", "ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø£ÙˆÙ„ Ø£ÙƒØªÙˆØ¨Ø±", "ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ Ù†ÙˆÙÙ…Ø¨Ø±", "ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø£ÙˆÙ„ Ø¯ÙŠØ³Ù…Ø¨Ø±"],
                h = (b.defineLocale || b.lang).call(b, "ar", {
                    months: g,
                    monthsShort: g,
                    weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
                    weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
                    weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "D/â€M/â€YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /Øµ|Ù…/,
                    isPM: function(a) {
                        return "Ù…" === a
                    },
                    meridiem: function(a, b, c) {
                        return 12 > a ? "Øµ" : "Ù…"
                    },
                    calendar: {
                        sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                        nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                        nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                        lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                        lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "Ø¨Ø¹Ø¯ %s",
                        past: "Ù…Ù†Ø° %s",
                        s: f("s"),
                        m: f("m"),
                        mm: f("m"),
                        h: f("h"),
                        hh: f("h"),
                        d: f("d"),
                        dd: f("d"),
                        M: f("M"),
                        MM: f("M"),
                        y: f("y"),
                        yy: f("y")
                    },
                    preparse: function(a) {
                        return a.replace(/\u200f/g, "").replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function(a) {
                            return c[a]
                        }).replace(/ØŒ/g, ",")
                    },
                    postformat: function(b) {
                        return b.replace(/\d/g, function(b) {
                            return a[b]
                        }).replace(/,/g, "ØŒ")
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                });
            return h
        }(), a.fullCalendar.datepickerLang("ar", "ar", {
            closeText: "Ø¥ØºÙ„Ø§Ù‚",
            prevText: "&#x3C;Ø§Ù„Ø³Ø§Ø¨Ù‚",
            nextText: "Ø§Ù„ØªØ§Ù„ÙŠ&#x3E;",
            currentText: "Ø§Ù„ÙŠÙˆÙ…",
            monthNames: ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"],
            monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames: ["Ø§Ù„Ø£Ø­Ø¯", "Ø§Ù„Ø§Ø«Ù†ÙŠÙ†", "Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡", "Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡", "Ø§Ù„Ø®Ù…ÙŠØ³", "Ø§Ù„Ø¬Ù…Ø¹Ø©", "Ø§Ù„Ø³Ø¨Øª"],
            dayNamesShort: ["Ø£Ø­Ø¯", "Ø§Ø«Ù†ÙŠÙ†", "Ø«Ù„Ø§Ø«Ø§Ø¡", "Ø£Ø±Ø¨Ø¹Ø§Ø¡", "Ø®Ù…ÙŠØ³", "Ø¬Ù…Ø¹Ø©", "Ø³Ø¨Øª"],
            dayNamesMin: ["Ø­", "Ù†", "Ø«", "Ø±", "Ø®", "Ø¬", "Ø³"],
            weekHeader: "Ø£Ø³Ø¨ÙˆØ¹",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("ar", {
            buttonText: {
                month: "Ø´Ù‡Ø±",
                week: "Ø£Ø³Ø¨ÙˆØ¹",
                day: "ÙŠÙˆÙ…",
                list: "Ø£Ø¬Ù†Ø¯Ø©"
            },
            allDayText: "Ø§Ù„ÙŠÙˆÙ… ÙƒÙ„Ù‡",
            eventLimitText: "Ø£Ø®Ø±Ù‰"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "bg", {
                months: "ÑÐ½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),
                monthsShort: "ÑÐ½Ñ€_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
                weekdays: "Ð½ÐµÐ´ÐµÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÑÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº_Ð¿ÐµÑ‚ÑŠÐº_ÑÑŠÐ±Ð¾Ñ‚Ð°".split("_"),
                weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ñ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÑŠÐ±".split("_"),
                weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Ð”Ð½ÐµÑ Ð²] LT",
                    nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²] LT",
                    nextWeek: "dddd [Ð²] LT",
                    lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð°Ñ‚Ð°] dddd [Ð²] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð¸Ñ] dddd [Ð²] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ÑÐ»ÐµÐ´ %s",
                    past: "Ð¿Ñ€ÐµÐ´Ð¸ %s",
                    s: "Ð½ÑÐºÐ¾Ð»ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",
                    m: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°",
                    mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",
                    h: "Ñ‡Ð°Ñ",
                    hh: "%d Ñ‡Ð°ÑÐ°",
                    d: "Ð´ÐµÐ½",
                    dd: "%d Ð´Ð½Ð¸",
                    M: "Ð¼ÐµÑÐµÑ†",
                    MM: "%d Ð¼ÐµÑÐµÑ†Ð°",
                    y: "Ð³Ð¾Ð´Ð¸Ð½Ð°",
                    yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"
                },
                ordinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
                ordinal: function(a) {
                    var b = a % 10,
                        c = a % 100;
                    return 0 === a ? a + "-ÐµÐ²" : 0 === c ? a + "-ÐµÐ½" : c > 10 && 20 > c ? a + "-Ñ‚Ð¸" : 1 === b ? a + "-Ð²Ð¸" : 2 === b ? a + "-Ñ€Ð¸" : 7 === b || 8 === b ? a + "-Ð¼Ð¸" : a + "-Ñ‚Ð¸"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("bg", "bg", {
            closeText: "Ð·Ð°Ñ‚Ð²Ð¾Ñ€Ð¸",
            prevText: "&#x3C;Ð½Ð°Ð·Ð°Ð´",
            nextText: "Ð½Ð°Ð¿Ñ€ÐµÐ´&#x3E;",
            nextBigText: "&#x3E;&#x3E;",
            currentText: "Ð´Ð½ÐµÑ",
            monthNames: ["Ð¯Ð½ÑƒÐ°Ñ€Ð¸", "Ð¤ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸", "ÐœÐ°Ñ€Ñ‚", "ÐÐ¿Ñ€Ð¸Ð»", "ÐœÐ°Ð¹", "Ð®Ð½Ð¸", "Ð®Ð»Ð¸", "ÐÐ²Ð³ÑƒÑÑ‚", "Ð¡ÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸", "ÐžÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸", "ÐÐ¾ÐµÐ¼Ð²Ñ€Ð¸", "Ð”ÐµÐºÐµÐ¼Ð²Ñ€Ð¸"],
            monthNamesShort: ["Ð¯Ð½Ñƒ", "Ð¤ÐµÐ²", "ÐœÐ°Ñ€", "ÐÐ¿Ñ€", "ÐœÐ°Ð¹", "Ð®Ð½Ð¸", "Ð®Ð»Ð¸", "ÐÐ²Ð³", "Ð¡ÐµÐ¿", "ÐžÐºÑ‚", "ÐÐ¾Ð²", "Ð”ÐµÐº"],
            dayNames: ["ÐÐµÐ´ÐµÐ»Ñ", "ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº", "Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº", "Ð¡Ñ€ÑÐ´Ð°", "Ð§ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº", "ÐŸÐµÑ‚ÑŠÐº", "Ð¡ÑŠÐ±Ð¾Ñ‚Ð°"],
            dayNamesShort: ["ÐÐµÐ´", "ÐŸÐ¾Ð½", "Ð’Ñ‚Ð¾", "Ð¡Ñ€Ñ", "Ð§ÐµÑ‚", "ÐŸÐµÑ‚", "Ð¡ÑŠÐ±"],
            dayNamesMin: ["ÐÐµ", "ÐŸÐ¾", "Ð’Ñ‚", "Ð¡Ñ€", "Ð§Ðµ", "ÐŸÐµ", "Ð¡ÑŠ"],
            weekHeader: "Wk",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("bg", {
            buttonText: {
                month: "ÐœÐµÑÐµÑ†",
                week: "Ð¡ÐµÐ´Ð¼Ð¸Ñ†Ð°",
                day: "Ð”ÐµÐ½",
                list: "Ð“Ñ€Ð°Ñ„Ð¸Ðº"
            },
            allDayText: "Ð¦ÑÐ» Ð´ÐµÐ½",
            eventLimitText: function(a) {
                return "+Ð¾Ñ‰Ðµ " + a
            }
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "ca", {
                months: "gener_febrer_marÃ§_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextDay: function() {
                        return "[demÃ  a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastDay: function() {
                        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "fa %s",
                    s: "uns segons",
                    m: "un minut",
                    mm: "%d minuts",
                    h: "una hora",
                    hh: "%d hores",
                    d: "un dia",
                    dd: "%d dies",
                    M: "un mes",
                    MM: "%d mesos",
                    y: "un any",
                    yy: "%d anys"
                },
                ordinalParse: /\d{1,2}(r|n|t|Ã¨|a)/,
                ordinal: function(a, b) {
                    var c = 1 === a ? "r" : 2 === a ? "n" : 3 === a ? "r" : 4 === a ? "t" : "Ã¨";
                    return "w" !== b && "W" !== b || (c = "a"), a + c
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("ca", "ca", {
            closeText: "Tanca",
            prevText: "Anterior",
            nextText: "SegÃ¼ent",
            currentText: "Avui",
            monthNames: ["gener", "febrer", "marÃ§", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
            monthNamesShort: ["gen", "feb", "marÃ§", "abr", "maig", "juny", "jul", "ag", "set", "oct", "nov", "des"],
            dayNames: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
            dayNamesShort: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
            dayNamesMin: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
            weekHeader: "Set",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("ca", {
            buttonText: {
                month: "Mes",
                week: "Setmana",
                day: "Dia",
                list: "Agenda"
            },
            allDayText: "Tot el dia",
            eventLimitText: "mÃ©s"
        })
    }(),
    function() {
        ! function() {
            "use strict";

            function a(a) {
                return a > 1 && 5 > a && 1 !== ~~(a / 10)
            }

            function c(b, c, d, e) {
                var f = b + " ";
                switch (d) {
                    case "s":
                        return c || e ? "pÃ¡r sekund" : "pÃ¡r sekundami";
                    case "m":
                        return c ? "minuta" : e ? "minutu" : "minutou";
                    case "mm":
                        return c || e ? f + (a(b) ? "minuty" : "minut") : f + "minutami";
                    case "h":
                        return c ? "hodina" : e ? "hodinu" : "hodinou";
                    case "hh":
                        return c || e ? f + (a(b) ? "hodiny" : "hodin") : f + "hodinami";
                    case "d":
                        return c || e ? "den" : "dnem";
                    case "dd":
                        return c || e ? f + (a(b) ? "dny" : "dnÃ­") : f + "dny";
                    case "M":
                        return c || e ? "mÄ›sÃ­c" : "mÄ›sÃ­cem";
                    case "MM":
                        return c || e ? f + (a(b) ? "mÄ›sÃ­ce" : "mÄ›sÃ­cÅ¯") : f + "mÄ›sÃ­ci";
                    case "y":
                        return c || e ? "rok" : "rokem";
                    case "yy":
                        return c || e ? f + (a(b) ? "roky" : "let") : f + "lety"
                }
            }
            var d = "leden_Ãºnor_bÅ™ezen_duben_kvÄ›ten_Äerven_Äervenec_srpen_zÃ¡Å™Ã­_Å™Ã­jen_listopad_prosinec".split("_"),
                e = "led_Ãºno_bÅ™e_dub_kvÄ›_Ävn_Ävc_srp_zÃ¡Å™_Å™Ã­j_lis_pro".split("_"),
                f = (b.defineLocale || b.lang).call(b, "cs", {
                    months: d,
                    monthsShort: e,
                    monthsParse: function(a, b) {
                        var c, d = [];
                        for (c = 0; 12 > c; c++) d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i");
                        return d
                    }(d, e),
                    shortMonthsParse: function(a) {
                        var b, c = [];
                        for (b = 0; 12 > b; b++) c[b] = new RegExp("^" + a[b] + "$", "i");
                        return c
                    }(e),
                    longMonthsParse: function(a) {
                        var b, c = [];
                        for (b = 0; 12 > b; b++) c[b] = new RegExp("^" + a[b] + "$", "i");
                        return c
                    }(d),
                    weekdays: "nedÄ›le_pondÄ›lÃ­_ÃºterÃ½_stÅ™eda_Ätvrtek_pÃ¡tek_sobota".split("_"),
                    weekdaysShort: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
                    weekdaysMin: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[dnes v] LT",
                        nextDay: "[zÃ­tra v] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v nedÄ›li v] LT";
                                case 1:
                                case 2:
                                    return "[v] dddd [v] LT";
                                case 3:
                                    return "[ve stÅ™edu v] LT";
                                case 4:
                                    return "[ve Ätvrtek v] LT";
                                case 5:
                                    return "[v pÃ¡tek v] LT";
                                case 6:
                                    return "[v sobotu v] LT"
                            }
                        },
                        lastDay: "[vÄera v] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[minulou nedÄ›li v] LT";
                                case 1:
                                case 2:
                                    return "[minulÃ©] dddd [v] LT";
                                case 3:
                                    return "[minulou stÅ™edu v] LT";
                                case 4:
                                case 5:
                                    return "[minulÃ½] dddd [v] LT";
                                case 6:
                                    return "[minulou sobotu v] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "pÅ™ed %s",
                        s: c,
                        m: c,
                        mm: c,
                        h: c,
                        hh: c,
                        d: c,
                        dd: c,
                        M: c,
                        MM: c,
                        y: c,
                        yy: c
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return f
        }(), a.fullCalendar.datepickerLang("cs", "cs", {
            closeText: "ZavÅ™Ã­t",
            prevText: "&#x3C;DÅ™Ã­ve",
            nextText: "PozdÄ›ji&#x3E;",
            currentText: "NynÃ­",
            monthNames: ["leden", "Ãºnor", "bÅ™ezen", "duben", "kvÄ›ten", "Äerven", "Äervenec", "srpen", "zÃ¡Å™Ã­", "Å™Ã­jen", "listopad", "prosinec"],
            monthNamesShort: ["led", "Ãºno", "bÅ™e", "dub", "kvÄ›", "Äer", "Ävc", "srp", "zÃ¡Å™", "Å™Ã­j", "lis", "pro"],
            dayNames: ["nedÄ›le", "pondÄ›lÃ­", "ÃºterÃ½", "stÅ™eda", "Ätvrtek", "pÃ¡tek", "sobota"],
            dayNamesShort: ["ne", "po", "Ãºt", "st", "Ät", "pÃ¡", "so"],
            dayNamesMin: ["ne", "po", "Ãºt", "st", "Ät", "pÃ¡", "so"],
            weekHeader: "TÃ½d",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("cs", {
            buttonText: {
                month: "MÄ›sÃ­c",
                week: "TÃ½den",
                day: "Den",
                list: "Agenda"
            },
            allDayText: "CelÃ½ den",
            eventLimitText: function(a) {
                return "+dalÅ¡Ã­: " + a
            }
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "da", {
                months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),
                weekdaysShort: "sÃ¸n_man_tir_ons_tor_fre_lÃ¸r".split("_"),
                weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd [d.] D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[I dag kl.] LT",
                    nextDay: "[I morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[I gÃ¥r kl.] LT",
                    lastWeek: "[sidste] dddd [kl] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "fÃ¥ sekunder",
                    m: "et minut",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dage",
                    M: "en mÃ¥ned",
                    MM: "%d mÃ¥neder",
                    y: "et Ã¥r",
                    yy: "%d Ã¥r"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("da", "da", {
            closeText: "Luk",
            prevText: "&#x3C;Forrige",
            nextText: "NÃ¦ste&#x3E;",
            currentText: "Idag",
            monthNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            dayNames: ["SÃ¸ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "LÃ¸rdag"],
            dayNamesShort: ["SÃ¸n", "Man", "Tir", "Ons", "Tor", "Fre", "LÃ¸r"],
            dayNamesMin: ["SÃ¸", "Ma", "Ti", "On", "To", "Fr", "LÃ¸"],
            weekHeader: "Uge",
            dateFormat: "dd-mm-yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("da", {
            buttonText: {
                month: "MÃ¥ned",
                week: "Uge",
                day: "Dag",
                list: "Agenda"
            },
            allDayText: "Hele dagen",
            eventLimitText: "flere"
        })
    }(),
    function() {
        ! function() {
            "use strict";

            function a(a, b, c, d) {
                var e = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [a + " Tage", a + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [a + " Monate", a + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [a + " Jahre", a + " Jahren"]
                };
                return b ? e[c][0] : e[c][1]
            }
            var c = (b.defineLocale || b.lang).call(b, "de-at", {
                months: "JÃ¤nner_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "JÃ¤n._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    m: a,
                    mm: "%d Minuten",
                    h: a,
                    hh: "%d Stunden",
                    d: a,
                    dd: a,
                    M: a,
                    MM: a,
                    y: a,
                    yy: a
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return c
        }(), a.fullCalendar.datepickerLang("de-at", "de", {
            closeText: "SchlieÃŸen",
            prevText: "&#x3C;ZurÃ¼ck",
            nextText: "Vor&#x3E;",
            currentText: "Heute",
            monthNames: ["Januar", "Februar", "MÃ¤rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthNamesShort: ["Jan", "Feb", "MÃ¤r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            weekHeader: "KW",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("de-at", {
            buttonText: {
                month: "Monat",
                week: "Woche",
                day: "Tag",
                list: "TerminÃ¼bersicht"
            },
            allDayText: "GanztÃ¤gig",
            eventLimitText: function(a) {
                return "+ weitere " + a
            }
        })
    }(),
    function() {
        ! function() {
            "use strict";

            function a(a, b, c, d) {
                var e = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [a + " Tage", a + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [a + " Monate", a + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [a + " Jahre", a + " Jahren"]
                };
                return b ? e[c][0] : e[c][1]
            }
            var c = (b.defineLocale || b.lang).call(b, "de", {
                months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    m: a,
                    mm: "%d Minuten",
                    h: a,
                    hh: "%d Stunden",
                    d: a,
                    dd: a,
                    M: a,
                    MM: a,
                    y: a,
                    yy: a
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return c
        }(), a.fullCalendar.datepickerLang("de", "de", {
            closeText: "SchlieÃŸen",
            prevText: "&#x3C;ZurÃ¼ck",
            nextText: "Vor&#x3E;",
            currentText: "Heute",
            monthNames: ["Januar", "Februar", "MÃ¤rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthNamesShort: ["Jan", "Feb", "MÃ¤r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            weekHeader: "KW",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("de", {
            buttonText: {
                month: "Monat",
                week: "Woche",
                day: "Tag",
                list: "TerminÃ¼bersicht"
            },
            allDayText: "GanztÃ¤gig",
            eventLimitText: function(a) {
                return "+ weitere " + a
            }
        })
    }(),
    function() {
        ! function() {
            "use strict";

            function a(a) {
                return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
            }
            var c = (b.defineLocale || b.lang).call(b, "el", {
                monthsNominativeEl: "Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚_Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚_ÎœÎ¬ÏÏ„Î¹Î¿Ï‚_Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚_ÎœÎ¬Î¹Î¿Ï‚_Î™Î¿ÏÎ½Î¹Î¿Ï‚_Î™Î¿ÏÎ»Î¹Î¿Ï‚_Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚_Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚_ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚_ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚_Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚".split("_"),
                monthsGenitiveEl: "Î™Î±Î½Î¿Ï…Î±ÏÎ¯Î¿Ï…_Î¦ÎµÎ²ÏÎ¿Ï…Î±ÏÎ¯Î¿Ï…_ÎœÎ±ÏÏ„Î¯Î¿Ï…_Î‘Ï€ÏÎ¹Î»Î¯Î¿Ï…_ÎœÎ±ÎÎ¿Ï…_Î™Î¿Ï…Î½Î¯Î¿Ï…_Î™Î¿Ï…Î»Î¯Î¿Ï…_Î‘Ï…Î³Î¿ÏÏƒÏ„Î¿Ï…_Î£ÎµÏ€Ï„ÎµÎ¼Î²ÏÎ¯Î¿Ï…_ÎŸÎºÏ„Ï‰Î²ÏÎ¯Î¿Ï…_ÎÎ¿ÎµÎ¼Î²ÏÎ¯Î¿Ï…_Î”ÎµÎºÎµÎ¼Î²ÏÎ¯Î¿Ï…".split("_"),
                months: function(a, b) {
                    return /D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[a.month()] : this._monthsNominativeEl[a.month()]
                },
                monthsShort: "Î™Î±Î½_Î¦ÎµÎ²_ÎœÎ±Ï_Î‘Ï€Ï_ÎœÎ±ÏŠ_Î™Î¿Ï…Î½_Î™Î¿Ï…Î»_Î‘Ï…Î³_Î£ÎµÏ€_ÎŸÎºÏ„_ÎÎ¿Îµ_Î”ÎµÎº".split("_"),
                weekdays: "ÎšÏ…ÏÎ¹Î±ÎºÎ®_Î”ÎµÏ…Ï„Î­ÏÎ±_Î¤ÏÎ¯Ï„Î·_Î¤ÎµÏ„Î¬ÏÏ„Î·_Î Î­Î¼Ï€Ï„Î·_Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®_Î£Î¬Î²Î²Î±Ï„Î¿".split("_"),
                weekdaysShort: "ÎšÏ…Ï_Î”ÎµÏ…_Î¤ÏÎ¹_Î¤ÎµÏ„_Î ÎµÎ¼_Î Î±Ï_Î£Î±Î²".split("_"),
                weekdaysMin: "ÎšÏ…_Î”Îµ_Î¤Ï_Î¤Îµ_Î Îµ_Î Î±_Î£Î±".split("_"),
                meridiem: function(a, b, c) {
                    return a > 11 ? c ? "Î¼Î¼" : "ÎœÎœ" : c ? "Ï€Î¼" : "Î Îœ"
                },
                isPM: function(a) {
                    return "Î¼" === (a + "").toLowerCase()[0]
                },
                meridiemParse: /[Î Îœ]\.?Îœ?\.?/i,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendarEl: {
                    sameDay: "[Î£Î®Î¼ÎµÏÎ± {}] LT",
                    nextDay: "[Î‘ÏÏÎ¹Î¿ {}] LT",
                    nextWeek: "dddd [{}] LT",
                    lastDay: "[Î§Î¸ÎµÏ‚ {}] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 6:
                                return "[Ï„Î¿ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î¿] dddd [{}] LT";
                            default:
                                return "[Ï„Î·Î½ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î·] dddd [{}] LT"
                        }
                    },
                    sameElse: "L"
                },
                calendar: function(b, c) {
                    var d = this._calendarEl[b],
                        e = c && c.hours();
                    return a(d) && (d = d.apply(c)), d.replace("{}", e % 12 === 1 ? "ÏƒÏ„Î·" : "ÏƒÏ„Î¹Ï‚")
                },
                relativeTime: {
                    future: "ÏƒÎµ %s",
                    past: "%s Ï€ÏÎ¹Î½",
                    s: "Î»Î¯Î³Î± Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±",
                    m: "Î­Î½Î± Î»ÎµÏ€Ï„ÏŒ",
                    mm: "%d Î»ÎµÏ€Ï„Î¬",
                    h: "Î¼Î¯Î± ÏŽÏÎ±",
                    hh: "%d ÏŽÏÎµÏ‚",
                    d: "Î¼Î¯Î± Î¼Î­ÏÎ±",
                    dd: "%d Î¼Î­ÏÎµÏ‚",
                    M: "Î­Î½Î±Ï‚ Î¼Î®Î½Î±Ï‚",
                    MM: "%d Î¼Î®Î½ÎµÏ‚",
                    y: "Î­Î½Î±Ï‚ Ï‡ÏÏŒÎ½Î¿Ï‚",
                    yy: "%d Ï‡ÏÏŒÎ½Î¹Î±"
                },
                ordinalParse: /\d{1,2}Î·/,
                ordinal: "%dÎ·",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return c
        }(), a.fullCalendar.datepickerLang("el", "el", {
            closeText: "ÎšÎ»ÎµÎ¯ÏƒÎ¹Î¼Î¿",
            prevText: "Î ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î¿Ï‚",
            nextText: "Î•Ï€ÏŒÎ¼ÎµÎ½Î¿Ï‚",
            currentText: "Î£Î®Î¼ÎµÏÎ±",
            monthNames: ["Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚", "Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚", "ÎœÎ¬ÏÏ„Î¹Î¿Ï‚", "Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚", "ÎœÎ¬Î¹Î¿Ï‚", "Î™Î¿ÏÎ½Î¹Î¿Ï‚", "Î™Î¿ÏÎ»Î¹Î¿Ï‚", "Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚", "Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚", "ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚", "ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚", "Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚"],
            monthNamesShort: ["Î™Î±Î½", "Î¦ÎµÎ²", "ÎœÎ±Ï", "Î‘Ï€Ï", "ÎœÎ±Î¹", "Î™Î¿Ï…Î½", "Î™Î¿Ï…Î»", "Î‘Ï…Î³", "Î£ÎµÏ€", "ÎŸÎºÏ„", "ÎÎ¿Îµ", "Î”ÎµÎº"],
            dayNames: ["ÎšÏ…ÏÎ¹Î±ÎºÎ®", "Î”ÎµÏ…Ï„Î­ÏÎ±", "Î¤ÏÎ¯Ï„Î·", "Î¤ÎµÏ„Î¬ÏÏ„Î·", "Î Î­Î¼Ï€Ï„Î·", "Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®", "Î£Î¬Î²Î²Î±Ï„Î¿"],
            dayNamesShort: ["ÎšÏ…Ï", "Î”ÎµÏ…", "Î¤ÏÎ¹", "Î¤ÎµÏ„", "Î ÎµÎ¼", "Î Î±Ï", "Î£Î±Î²"],
            dayNamesMin: ["ÎšÏ…", "Î”Îµ", "Î¤Ï", "Î¤Îµ", "Î Îµ", "Î Î±", "Î£Î±"],
            weekHeader: "Î•Î²Î´",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("el", {
            buttonText: {
                month: "ÎœÎ®Î½Î±Ï‚",
                week: "Î•Î²Î´Î¿Î¼Î¬Î´Î±",
                day: "Î—Î¼Î­ÏÎ±",
                list: "Î‘Ï„Î¶Î­Î½Ï„Î±"
            },
            allDayText: "ÎŸÎ»Î¿Î®Î¼ÎµÏÎ¿",
            eventLimitText: "Ï€ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÎ±"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "en-au", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(a) {
                    var b = a % 10,
                        c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                    return a + c
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("en-au", "en-AU", {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("en-au")
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "en-ca", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "YYYY-MM-DD",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(a) {
                    var b = a % 10,
                        c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                    return a + c
                }
            });
            return a
        }(), a.fullCalendar.lang("en-ca")
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "en-gb", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(a) {
                    var b = a % 10,
                        c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                    return a + c
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("en-gb", "en-GB", {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("en-gb")
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "en-ie", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(a) {
                    var b = a % 10,
                        c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                    return a + c
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return a
        }(), a.fullCalendar.lang("en-ie")
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "en-nz", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(a) {
                    var b = a % 10,
                        c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                    return a + c
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("en-nz", "en-NZ", {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("en-nz")
    }(),
    function() {
        ! function() {
            "use strict";
            var a = "Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sep._Oct._Nov._Dic.".split("_"),
                c = "Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic".split("_"),
                d = (b.defineLocale || b.lang).call(b, "es", {
                    months: "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),
                    monthsShort: function(b, d) {
                        return /-MMM-/.test(d) ? c[b.month()] : a[b.month()]
                    },
                    monthsParseExact: !0,
                    weekdays: "Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"),
                    weekdaysShort: "Dom._Lun._Mar._Mié._Jue._Vie._Sáb.".split("_"),
                    weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY H:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextDay: function() {
                            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastDay: function() {
                            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "hace %s",
                        s: "unos segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "una hora",
                        hh: "%d horas",
                        d: "un día",
                        dd: "%d días",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un año",
                        yy: "%d años"
                    },
                    ordinalParse: /\d{1,2}Âº/,
                    ordinal: "%dÂº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return d
        }(), a.fullCalendar.datepickerLang("es", "es", {
            closeText: "Cerrar",
            prevText: "&#x3C;Ant",
            nextText: "Sig&#x3E;",
            currentText: "Hoy",
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            weekHeader: "Sm",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("es", {
            buttonText: {
                month: "Mes",
                week: "Semana",
                day: "Día",
                list: "Agenda"
            },
            allDayHtml: "Todo<br/>el día",
            eventLimitText: "más"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "eu", {
                months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
                monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                monthsParseExact: !0,
                weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY[ko] MMMM[ren] D[a]",
                    LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                    LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                    l: "YYYY-M-D",
                    ll: "YYYY[ko] MMM D[a]",
                    lll: "YYYY[ko] MMM D[a] HH:mm",
                    llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
                },
                calendar: {
                    sameDay: "[gaur] LT[etan]",
                    nextDay: "[bihar] LT[etan]",
                    nextWeek: "dddd LT[etan]",
                    lastDay: "[atzo] LT[etan]",
                    lastWeek: "[aurreko] dddd LT[etan]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s barru",
                    past: "duela %s",
                    s: "segundo batzuk",
                    m: "minutu bat",
                    mm: "%d minutu",
                    h: "ordu bat",
                    hh: "%d ordu",
                    d: "egun bat",
                    dd: "%d egun",
                    M: "hilabete bat",
                    MM: "%d hilabete",
                    y: "urte bat",
                    yy: "%d urte"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("eu", "eu", {
            closeText: "Egina",
            prevText: "&#x3C;Aur",
            nextText: "Hur&#x3E;",
            currentText: "Gaur",
            monthNames: ["urtarrila", "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua"],
            monthNamesShort: ["urt.", "ots.", "mar.", "api.", "mai.", "eka.", "uzt.", "abu.", "ira.", "urr.", "aza.", "abe."],
            dayNames: ["igandea", "astelehena", "asteartea", "asteazkena", "osteguna", "ostirala", "larunbata"],
            dayNamesShort: ["ig.", "al.", "ar.", "az.", "og.", "ol.", "lr."],
            dayNamesMin: ["ig", "al", "ar", "az", "og", "ol", "lr"],
            weekHeader: "As",
            dateFormat: "yy-mm-dd",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("eu", {
            buttonText: {
                month: "Hilabetea",
                week: "Astea",
                day: "Eguna",
                list: "Agenda"
            },
            allDayHtml: "Egun<br/>osoa",
            eventLimitText: "gehiago"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = {
                    1: "Û±",
                    2: "Û²",
                    3: "Û³",
                    4: "Û´",
                    5: "Ûµ",
                    6: "Û¶",
                    7: "Û·",
                    8: "Û¸",
                    9: "Û¹",
                    0: "Û°"
                },
                c = {
                    "Û±": "1",
                    "Û²": "2",
                    "Û³": "3",
                    "Û´": "4",
                    "Ûµ": "5",
                    "Û¶": "6",
                    "Û·": "7",
                    "Û¸": "8",
                    "Û¹": "9",
                    "Û°": "0"
                },
                d = (b.defineLocale || b.lang).call(b, "fa", {
                    months: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),
                    monthsShort: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),
                    weekdays: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),
                    weekdaysShort: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),
                    weekdaysMin: "ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ø¬_Ø´".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±|Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/,
                    isPM: function(a) {
                        return /Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/.test(a)
                    },
                    meridiem: function(a, b, c) {
                        return 12 > a ? "Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±" : "Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±"
                    },
                    calendar: {
                        sameDay: "[Ø§Ù…Ø±ÙˆØ² Ø³Ø§Ø¹Øª] LT",
                        nextDay: "[ÙØ±Ø¯Ø§ Ø³Ø§Ø¹Øª] LT",
                        nextWeek: "dddd [Ø³Ø§Ø¹Øª] LT",
                        lastDay: "[Ø¯ÛŒØ±ÙˆØ² Ø³Ø§Ø¹Øª] LT",
                        lastWeek: "dddd [Ù¾ÛŒØ´] [Ø³Ø§Ø¹Øª] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "Ø¯Ø± %s",
                        past: "%s Ù¾ÛŒØ´",
                        s: "Ú†Ù†Ø¯ÛŒÙ† Ø«Ø§Ù†ÛŒÙ‡",
                        m: "ÛŒÚ© Ø¯Ù‚ÛŒÙ‚Ù‡",
                        mm: "%d Ø¯Ù‚ÛŒÙ‚Ù‡",
                        h: "ÛŒÚ© Ø³Ø§Ø¹Øª",
                        hh: "%d Ø³Ø§Ø¹Øª",
                        d: "ÛŒÚ© Ø±ÙˆØ²",
                        dd: "%d Ø±ÙˆØ²",
                        M: "ÛŒÚ© Ù…Ø§Ù‡",
                        MM: "%d Ù…Ø§Ù‡",
                        y: "ÛŒÚ© Ø³Ø§Ù„",
                        yy: "%d Ø³Ø§Ù„"
                    },
                    preparse: function(a) {
                        return a.replace(/[Û°-Û¹]/g, function(a) {
                            return c[a]
                        }).replace(/ØŒ/g, ",")
                    },
                    postformat: function(b) {
                        return b.replace(/\d/g, function(b) {
                            return a[b]
                        }).replace(/,/g, "ØŒ")
                    },
                    ordinalParse: /\d{1,2}Ù…/,
                    ordinal: "%dÙ…",
                    week: {
                        dow: 6,
                        doy: 12
                    }
                });
            return d
        }(), a.fullCalendar.datepickerLang("fa", "fa", {
            closeText: "Ø¨Ø³ØªÙ†",
            prevText: "&#x3C;Ù‚Ø¨Ù„ÛŒ",
            nextText: "Ø¨Ø¹Ø¯ÛŒ&#x3E;",
            currentText: "Ø§Ù…Ø±ÙˆØ²",
            monthNames: ["Ú˜Ø§Ù†ÙˆÛŒÙ‡", "ÙÙˆØ±ÛŒÙ‡", "Ù…Ø§Ø±Ø³", "Ø¢ÙˆØ±ÛŒÙ„", "Ù…Ù‡", "Ú˜ÙˆØ¦Ù†", "Ú˜ÙˆØ¦ÛŒÙ‡", "Ø§ÙˆØª", "Ø³Ù¾ØªØ§Ù…Ø¨Ø±", "Ø§Ú©ØªØ¨Ø±", "Ù†ÙˆØ§Ù…Ø¨Ø±", "Ø¯Ø³Ø§Ù…Ø¨Ø±"],
            monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames: ["ÙŠÚ©Ø´Ù†Ø¨Ù‡", "Ø¯ÙˆØ´Ù†Ø¨Ù‡", "Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡", "Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡", "Ù¾Ù†Ø¬Ø´Ù†Ø¨Ù‡", "Ø¬Ù…Ø¹Ù‡", "Ø´Ù†Ø¨Ù‡"],
            dayNamesShort: ["ÛŒ", "Ø¯", "Ø³", "Ú†", "Ù¾", "Ø¬", "Ø´"],
            dayNamesMin: ["ÛŒ", "Ø¯", "Ø³", "Ú†", "Ù¾", "Ø¬", "Ø´"],
            weekHeader: "Ù‡Ù",
            dateFormat: "yy/mm/dd",
            firstDay: 6,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("fa", {
            buttonText: {
                month: "Ù…Ø§Ù‡",
                week: "Ù‡ÙØªÙ‡",
                day: "Ø±ÙˆØ²",
                list: "Ø¨Ø±Ù†Ø§Ù…Ù‡"
            },
            allDayText: "ØªÙ…Ø§Ù… Ø±ÙˆØ²",
            eventLimitText: function(a) {
                return "Ø¨ÛŒØ´ Ø§Ø² " + a
            }
        })
    }(),
    function() {
        ! function() {
            "use strict";

            function a(a, b, d, e) {
                var f = "";
                switch (d) {
                    case "s":
                        return e ? "muutaman sekunnin" : "muutama sekunti";
                    case "m":
                        return e ? "minuutin" : "minuutti";
                    case "mm":
                        f = e ? "minuutin" : "minuuttia";
                        break;
                    case "h":
                        return e ? "tunnin" : "tunti";
                    case "hh":
                        f = e ? "tunnin" : "tuntia";
                        break;
                    case "d":
                        return e ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤";
                    case "dd":
                        f = e ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤Ã¤";
                        break;
                    case "M":
                        return e ? "kuukauden" : "kuukausi";
                    case "MM":
                        f = e ? "kuukauden" : "kuukautta";
                        break;
                    case "y":
                        return e ? "vuoden" : "vuosi";
                    case "yy":
                        f = e ? "vuoden" : "vuotta"
                }
                return f = c(a, e) + " " + f
            }

            function c(a, b) {
                return 10 > a ? b ? e[a] : d[a] : a
            }
            var d = "nolla yksi kaksi kolme neljÃ¤ viisi kuusi seitsemÃ¤n kahdeksan yhdeksÃ¤n".split(" "),
                e = ["nolla", "yhden", "kahden", "kolmen", "neljÃ¤n", "viiden", "kuuden", d[7], d[8], d[9]],
                f = (b.defineLocale || b.lang).call(b, "fi", {
                    months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesÃ¤kuu_heinÃ¤kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                    monthsShort: "tammi_helmi_maalis_huhti_touko_kesÃ¤_heinÃ¤_elo_syys_loka_marras_joulu".split("_"),
                    weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                    weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                    weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD.MM.YYYY",
                        LL: "Do MMMM[ta] YYYY",
                        LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                        LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                        l: "D.M.YYYY",
                        ll: "Do MMM YYYY",
                        lll: "Do MMM YYYY, [klo] HH.mm",
                        llll: "ddd, Do MMM YYYY, [klo] HH.mm"
                    },
                    calendar: {
                        sameDay: "[tÃ¤nÃ¤Ã¤n] [klo] LT",
                        nextDay: "[huomenna] [klo] LT",
                        nextWeek: "dddd [klo] LT",
                        lastDay: "[eilen] [klo] LT",
                        lastWeek: "[viime] dddd[na] [klo] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s pÃ¤Ã¤stÃ¤",
                        past: "%s sitten",
                        s: a,
                        m: a,
                        mm: a,
                        h: a,
                        hh: a,
                        d: a,
                        dd: a,
                        M: a,
                        MM: a,
                        y: a,
                        yy: a
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return f
        }(), a.fullCalendar.datepickerLang("fi", "fi", {
            closeText: "Sulje",
            prevText: "&#xAB;Edellinen",
            nextText: "Seuraava&#xBB;",
            currentText: "TÃ¤nÃ¤Ã¤n",
            monthNames: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "KesÃ¤kuu", "HeinÃ¤kuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
            monthNamesShort: ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "KesÃ¤", "HeinÃ¤", "Elo", "Syys", "Loka", "Marras", "Joulu"],
            dayNamesShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
            dayNames: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"],
            dayNamesMin: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
            weekHeader: "Vk",
            dateFormat: "d.m.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("fi", {
            buttonText: {
                month: "Kuukausi",
                week: "Viikko",
                day: "PÃ¤ivÃ¤",
                list: "Tapahtumat"
            },
            allDayText: "Koko pÃ¤ivÃ¤",
            eventLimitText: "lisÃ¤Ã¤"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "fr-ca", {
                months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
                monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd'hui Ã ] LT",
                    nextDay: "[Demain Ã ] LT",
                    nextWeek: "dddd [Ã ] LT",
                    lastDay: "[Hier Ã ] LT",
                    lastWeek: "dddd [dernier Ã ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                ordinalParse: /\d{1,2}(er|e)/,
                ordinal: function(a) {
                    return a + (1 === a ? "er" : "e")
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("fr-ca", "fr-CA", {
            closeText: "Fermer",
            prevText: "PrÃ©cÃ©dent",
            nextText: "Suivant",
            currentText: "Aujourd'hui",
            monthNames: ["janvier", "fÃ©vrier", "mars", "avril", "mai", "juin", "juillet", "aoÃ»t", "septembre", "octobre", "novembre", "dÃ©cembre"],
            monthNamesShort: ["janv.", "fÃ©vr.", "mars", "avril", "mai", "juin", "juil.", "aoÃ»t", "sept.", "oct.", "nov.", "dÃ©c."],
            dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            dayNamesShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            weekHeader: "Sem.",
            dateFormat: "yy-mm-dd",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("fr-ca", {
            buttonText: {
                year: "AnnÃ©e",
                month: "Mois",
                week: "Semaine",
                day: "Jour",
                list: "Mon planning"
            },
            allDayHtml: "Toute la<br/>journÃ©e",
            eventLimitText: "en plus"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "fr-ch", {
                months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
                monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd'hui Ã ] LT",
                    nextDay: "[Demain Ã ] LT",
                    nextWeek: "dddd [Ã ] LT",
                    lastDay: "[Hier Ã ] LT",
                    lastWeek: "dddd [dernier Ã ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                ordinalParse: /\d{1,2}(er|e)/,
                ordinal: function(a) {
                    return a + (1 === a ? "er" : "e")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("fr-ch", "fr-CH", {
            closeText: "Fermer",
            prevText: "&#x3C;PrÃ©c",
            nextText: "Suiv&#x3E;",
            currentText: "Courant",
            monthNames: ["janvier", "fÃ©vrier", "mars", "avril", "mai", "juin", "juillet", "aoÃ»t", "septembre", "octobre", "novembre", "dÃ©cembre"],
            monthNamesShort: ["janv.", "fÃ©vr.", "mars", "avril", "mai", "juin", "juil.", "aoÃ»t", "sept.", "oct.", "nov.", "dÃ©c."],
            dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            dayNamesShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            weekHeader: "Sm",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("fr-ch", {
            buttonText: {
                year: "AnnÃ©e",
                month: "Mois",
                week: "Semaine",
                day: "Jour",
                list: "Mon planning"
            },
            allDayHtml: "Toute la<br/>journÃ©e",
            eventLimitText: "en plus"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "fr", {
                months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
                monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd'hui Ã ] LT",
                    nextDay: "[Demain Ã ] LT",
                    nextWeek: "dddd [Ã ] LT",
                    lastDay: "[Hier Ã ] LT",
                    lastWeek: "dddd [dernier Ã ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                ordinalParse: /\d{1,2}(er|)/,
                ordinal: function(a) {
                    return a + (1 === a ? "er" : "")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("fr", "fr", {
            closeText: "Fermer",
            prevText: "PrÃ©cÃ©dent",
            nextText: "Suivant",
            currentText: "Aujourd'hui",
            monthNames: ["janvier", "fÃ©vrier", "mars", "avril", "mai", "juin", "juillet", "aoÃ»t", "septembre", "octobre", "novembre", "dÃ©cembre"],
            monthNamesShort: ["janv.", "fÃ©vr.", "mars", "avr.", "mai", "juin", "juil.", "aoÃ»t", "sept.", "oct.", "nov.", "dÃ©c."],
            dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            dayNamesShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            weekHeader: "Sem.",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("fr", {
            buttonText: {
                year: "AnnÃ©e",
                month: "Mois",
                week: "Semaine",
                day: "Jour",
                list: "Mon planning"
            },
            allDayHtml: "Toute la<br/>journÃ©e",
            eventLimitText: "en plus"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "gl", {
                months: "Xaneiro_Febreiro_Marzo_Abril_Maio_XuÃ±o_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
                monthsShort: "Xan._Feb._Mar._Abr._Mai._XuÃ±._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "Domingo_Luns_Martes_MÃ©rcores_Xoves_Venres_SÃ¡bado".split("_"),
                weekdaysShort: "Dom._Lun._Mar._MÃ©r._Xov._Ven._SÃ¡b.".split("_"),
                weekdaysMin: "Do_Lu_Ma_MÃ©_Xo_Ve_SÃ¡".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoxe " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT"
                    },
                    nextDay: function() {
                        return "[maÃ±Ã¡ " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [" + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT"
                    },
                    lastDay: function() {
                        return "[onte " + (1 !== this.hours() ? "Ã¡" : "a") + "] LT"
                    },
                    lastWeek: function() {
                        return "[o] dddd [pasado " + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(a) {
                        return "uns segundos" === a ? "nuns segundos" : "en " + a
                    },
                    past: "hai %s",
                    s: "uns segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "unha hora",
                    hh: "%d horas",
                    d: "un dÃ­a",
                    dd: "%d dÃ­as",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un ano",
                    yy: "%d anos"
                },
                ordinalParse: /\d{1,2}Âº/,
                ordinal: "%dÂº",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("gl", "gl", {
            closeText: "Pechar",
            prevText: "&#x3C;Ant",
            nextText: "Seg&#x3E;",
            currentText: "Hoxe",
            monthNames: ["Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "XuÃ±o", "Xullo", "Agosto", "Setembro", "Outubro", "Novembro", "Decembro"],
            monthNamesShort: ["Xan", "Feb", "Mar", "Abr", "Mai", "XuÃ±", "Xul", "Ago", "Set", "Out", "Nov", "Dec"],
            dayNames: ["Domingo", "Luns", "Martes", "MÃ©rcores", "Xoves", "Venres", "SÃ¡bado"],
            dayNamesShort: ["Dom", "Lun", "Mar", "MÃ©r", "Xov", "Ven", "SÃ¡b"],
            dayNamesMin: ["Do", "Lu", "Ma", "MÃ©", "Xo", "Ve", "SÃ¡"],
            weekHeader: "Sm",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("gl", {
            buttonText: {
                month: "Mes",
                week: "Semana",
                day: "DÃ­a",
                list: "Axenda"
            },
            allDayHtml: "Todo<br/>o dÃ­a",
            eventLimitText: "mÃ¡is"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "he", {
                months: "×™× ×•××¨_×¤×‘×¨×•××¨_×ž×¨×¥_××¤×¨×™×œ_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×•×¡×˜_×¡×¤×˜×ž×‘×¨_××•×§×˜×•×‘×¨_× ×•×‘×ž×‘×¨_×“×¦×ž×‘×¨".split("_"),
                monthsShort: "×™× ×•×³_×¤×‘×¨×³_×ž×¨×¥_××¤×¨×³_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×³_×¡×¤×˜×³_××•×§×³_× ×•×‘×³_×“×¦×ž×³".split("_"),
                weekdays: "×¨××©×•×Ÿ_×©× ×™_×©×œ×™×©×™_×¨×‘×™×¢×™_×—×ž×™×©×™_×©×™×©×™_×©×‘×ª".split("_"),
                weekdaysShort: "××³_×‘×³_×’×³_×“×³_×”×³_×•×³_×©×³".split("_"),
                weekdaysMin: "×_×‘_×’_×“_×”_×•_×©".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [×‘]MMMM YYYY",
                    LLL: "D [×‘]MMMM YYYY HH:mm",
                    LLLL: "dddd, D [×‘]MMMM YYYY HH:mm",
                    l: "D/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[×”×™×•× ×‘Ö¾]LT",
                    nextDay: "[×ž×—×¨ ×‘Ö¾]LT",
                    nextWeek: "dddd [×‘×©×¢×”] LT",
                    lastDay: "[××ª×ž×•×œ ×‘Ö¾]LT",
                    lastWeek: "[×‘×™×•×] dddd [×”××—×¨×•×Ÿ ×‘×©×¢×”] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "×‘×¢×•×“ %s",
                    past: "×œ×¤× ×™ %s",
                    s: "×ž×¡×¤×¨ ×©× ×™×•×ª",
                    m: "×“×§×”",
                    mm: "%d ×“×§×•×ª",
                    h: "×©×¢×”",
                    hh: function(a) {
                        return 2 === a ? "×©×¢×ª×™×™×" : a + " ×©×¢×•×ª"
                    },
                    d: "×™×•×",
                    dd: function(a) {
                        return 2 === a ? "×™×•×ž×™×™×" : a + " ×™×ž×™×"
                    },
                    M: "×—×•×“×©",
                    MM: function(a) {
                        return 2 === a ? "×—×•×“×©×™×™×" : a + " ×—×•×“×©×™×"
                    },
                    y: "×©× ×”",
                    yy: function(a) {
                        return 2 === a ? "×©× ×ª×™×™×" : a % 10 === 0 && 10 !== a ? a + " ×©× ×”" : a + " ×©× ×™×"
                    }
                },
                meridiemParse: /××—×”"×¦|×œ×¤× ×”"×¦|××—×¨×™ ×”×¦×”×¨×™×™×|×œ×¤× ×™ ×”×¦×”×¨×™×™×|×œ×¤× ×•×ª ×‘×•×§×¨|×‘×‘×•×§×¨|×‘×¢×¨×‘/i,
                isPM: function(a) {
                    return /^(××—×”"×¦|××—×¨×™ ×”×¦×”×¨×™×™×|×‘×¢×¨×‘)$/.test(a)
                },
                meridiem: function(a, b, c) {
                    return 5 > a ? "×œ×¤× ×•×ª ×‘×•×§×¨" : 10 > a ? "×‘×‘×•×§×¨" : 12 > a ? c ? '×œ×¤× ×”"×¦' : "×œ×¤× ×™ ×”×¦×”×¨×™×™×" : 18 > a ? c ? '××—×”"×¦' : "××—×¨×™ ×”×¦×”×¨×™×™×" : "×‘×¢×¨×‘"
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("he", "he", {
            closeText: "×¡×’×•×¨",
            prevText: "&#x3C;×”×§×•×“×",
            nextText: "×”×‘×&#x3E;",
            currentText: "×”×™×•×",
            monthNames: ["×™× ×•××¨", "×¤×‘×¨×•××¨", "×ž×¨×¥", "××¤×¨×™×œ", "×ž××™", "×™×•× ×™", "×™×•×œ×™", "××•×’×•×¡×˜", "×¡×¤×˜×ž×‘×¨", "××•×§×˜×•×‘×¨", "× ×•×‘×ž×‘×¨", "×“×¦×ž×‘×¨"],
            monthNamesShort: ["×™× ×•", "×¤×‘×¨", "×ž×¨×¥", "××¤×¨", "×ž××™", "×™×•× ×™", "×™×•×œ×™", "××•×’", "×¡×¤×˜", "××•×§", "× ×•×‘", "×“×¦×ž"],
            dayNames: ["×¨××©×•×Ÿ", "×©× ×™", "×©×œ×™×©×™", "×¨×‘×™×¢×™", "×—×ž×™×©×™", "×©×™×©×™", "×©×‘×ª"],
            dayNamesShort: ["×'", "×‘'", "×’'", "×“'", "×”'", "×•'", "×©×‘×ª"],
            dayNamesMin: ["×'", "×‘'", "×’'", "×“'", "×”'", "×•'", "×©×‘×ª"],
            weekHeader: "Wk",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("he", {
            defaultButtonText: {
                month: "×—×•×“×©",
                week: "×©×‘×•×¢",
                day: "×™×•×",
                list: "×¡×“×¨ ×™×•×"
            },
            weekNumberTitle: "×©×‘×•×¢",
            allDayText: "×›×œ ×”×™×•×",
            eventLimitText: "××—×¨"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = {
                    1: "à¥§",
                    2: "à¥¨",
                    3: "à¥©",
                    4: "à¥ª",
                    5: "à¥«",
                    6: "à¥¬",
                    7: "à¥­",
                    8: "à¥®",
                    9: "à¥¯",
                    0: "à¥¦"
                },
                c = {
                    "à¥§": "1",
                    "à¥¨": "2",
                    "à¥©": "3",
                    "à¥ª": "4",
                    "à¥«": "5",
                    "à¥¬": "6",
                    "à¥­": "7",
                    "à¥®": "8",
                    "à¥¯": "9",
                    "à¥¦": "0"
                },
                d = (b.defineLocale || b.lang).call(b, "hi", {
                    months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¤¼à¤°à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆà¤²_à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°_à¤¨à¤µà¤®à¥à¤¬à¤°_à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°".split("_"),
                    monthsShort: "à¤œà¤¨._à¤«à¤¼à¤°._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆ._à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤…à¤—._à¤¸à¤¿à¤¤._à¤…à¤•à¥à¤Ÿà¥‚._à¤¨à¤µ._à¤¦à¤¿à¤¸.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤²à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
                    weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤²_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),
                    weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),
                    longDateFormat: {
                        LT: "A h:mm à¤¬à¤œà¥‡",
                        LTS: "A h:mm:ss à¤¬à¤œà¥‡",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm à¤¬à¤œà¥‡",
                        LLLL: "dddd, D MMMM YYYY, A h:mm à¤¬à¤œà¥‡"
                    },
                    calendar: {
                        sameDay: "[à¤†à¤œ] LT",
                        nextDay: "[à¤•à¤²] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[à¤•à¤²] LT",
                        lastWeek: "[à¤ªà¤¿à¤›à¤²à¥‡] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s à¤®à¥‡à¤‚",
                        past: "%s à¤ªà¤¹à¤²à¥‡",
                        s: "à¤•à¥à¤› à¤¹à¥€ à¤•à¥à¤·à¤£",
                        m: "à¤à¤• à¤®à¤¿à¤¨à¤Ÿ",
                        mm: "%d à¤®à¤¿à¤¨à¤Ÿ",
                        h: "à¤à¤• à¤˜à¤‚à¤Ÿà¤¾",
                        hh: "%d à¤˜à¤‚à¤Ÿà¥‡",
                        d: "à¤à¤• à¤¦à¤¿à¤¨",
                        dd: "%d à¤¦à¤¿à¤¨",
                        M: "à¤à¤• à¤®à¤¹à¥€à¤¨à¥‡",
                        MM: "%d à¤®à¤¹à¥€à¤¨à¥‡",
                        y: "à¤à¤• à¤µà¤°à¥à¤·",
                        yy: "%d à¤µà¤°à¥à¤·"
                    },
                    preparse: function(a) {
                        return a.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function(a) {
                            return c[a]
                        })
                    },
                    postformat: function(b) {
                        return b.replace(/\d/g, function(b) {
                            return a[b]
                        })
                    },
                    meridiemParse: /à¤°à¤¾à¤¤|à¤¸à¥à¤¬à¤¹|à¤¦à¥‹à¤ªà¤¹à¤°|à¤¶à¤¾à¤®/,
                    meridiemHour: function(a, b) {
                        return 12 === a && (a = 0), "à¤°à¤¾à¤¤" === b ? 4 > a ? a : a + 12 : "à¤¸à¥à¤¬à¤¹" === b ? a : "à¤¦à¥‹à¤ªà¤¹à¤°" === b ? a >= 10 ? a : a + 12 : "à¤¶à¤¾à¤®" === b ? a + 12 : void 0
                    },
                    meridiem: function(a, b, c) {
                        return 4 > a ? "à¤°à¤¾à¤¤" : 10 > a ? "à¤¸à¥à¤¬à¤¹" : 17 > a ? "à¤¦à¥‹à¤ªà¤¹à¤°" : 20 > a ? "à¤¶à¤¾à¤®" : "à¤°à¤¾à¤¤"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                });
            return d
        }(), a.fullCalendar.datepickerLang("hi", "hi", {
            closeText: "à¤¬à¤‚à¤¦",
            prevText: "à¤ªà¤¿à¤›à¤²à¤¾",
            nextText: "à¤…à¤—à¤²à¤¾",
            currentText: "à¤†à¤œ",
            monthNames: ["à¤œà¤¨à¤µà¤°à¥€ ", "à¤«à¤°à¤µà¤°à¥€", "à¤®à¤¾à¤°à¥à¤š", "à¤…à¤ªà¥à¤°à¥‡à¤²", "à¤®à¤ˆ", "à¤œà¥‚à¤¨", "à¤œà¥‚à¤²à¤¾à¤ˆ", "à¤…à¤—à¤¸à¥à¤¤ ", "à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°", "à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°", "à¤¨à¤µà¤®à¥à¤¬à¤°", "à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°"],
            monthNamesShort: ["à¤œà¤¨", "à¤«à¤°", "à¤®à¤¾à¤°à¥à¤š", "à¤…à¤ªà¥à¤°à¥‡à¤²", "à¤®à¤ˆ", "à¤œà¥‚à¤¨", "à¤œà¥‚à¤²à¤¾à¤ˆ", "à¤…à¤—", "à¤¸à¤¿à¤¤", "à¤…à¤•à¥à¤Ÿ", "à¤¨à¤µ", "à¤¦à¤¿"],
            dayNames: ["à¤°à¤µà¤¿à¤µà¤¾à¤°", "à¤¸à¥‹à¤®à¤µà¤¾à¤°", "à¤®à¤‚à¤—à¤²à¤µà¤¾à¤°", "à¤¬à¥à¤§à¤µà¤¾à¤°", "à¤—à¥à¤°à¥à¤µà¤¾à¤°", "à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°", "à¤¶à¤¨à¤¿à¤µà¤¾à¤°"],
            dayNamesShort: ["à¤°à¤µà¤¿", "à¤¸à¥‹à¤®", "à¤®à¤‚à¤—à¤²", "à¤¬à¥à¤§", "à¤—à¥à¤°à¥", "à¤¶à¥à¤•à¥à¤°", "à¤¶à¤¨à¤¿"],
            dayNamesMin: ["à¤°à¤µà¤¿", "à¤¸à¥‹à¤®", "à¤®à¤‚à¤—à¤²", "à¤¬à¥à¤§", "à¤—à¥à¤°à¥", "à¤¶à¥à¤•à¥à¤°", "à¤¶à¤¨à¤¿"],
            weekHeader: "à¤¹à¤«à¥à¤¤à¤¾",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("hi", {
            buttonText: {
                month: "à¤®à¤¹à¥€à¤¨à¤¾",
                week: "à¤¸à¤ªà¥à¤¤à¤¾à¤¹",
                day: "à¤¦à¤¿à¤¨",
                list: "à¤•à¤¾à¤°à¥à¤¯à¤¸à¥‚à¤šà¥€"
            },
            allDayText: "à¤¸à¤­à¥€ à¤¦à¤¿à¤¨",
            eventLimitText: function(a) {
                return "+à¤…à¤§à¤¿à¤• " + a
            }
        })
    }(),
    function() {
        ! function() {
            "use strict";

            function a(a, b, c) {
                var d = a + " ";
                switch (c) {
                    case "m":
                        return b ? "jedna minuta" : "jedne minute";
                    case "mm":
                        return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
                    case "h":
                        return b ? "jedan sat" : "jednog sata";
                    case "hh":
                        return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
                    case "dd":
                        return d += 1 === a ? "dan" : "dana";
                    case "MM":
                        return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
                    case "yy":
                        return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina"
                }
            }
            var c = (b.defineLocale || b.lang).call(b, "hr", {
                months: {
                    format: "sijeÄnja_veljaÄe_oÅ¾ujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                    standalone: "sijeÄanj_veljaÄa_oÅ¾ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
                },
                monthsShort: "sij._velj._oÅ¾u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juÄer u] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[proÅ¡lu] dddd [u] LT";
                            case 6:
                                return "[proÅ¡le] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[proÅ¡li] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    m: a,
                    mm: a,
                    h: a,
                    hh: a,
                    d: "dan",
                    dd: a,
                    M: "mjesec",
                    MM: a,
                    y: "godinu",
                    yy: a
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return c
        }(), a.fullCalendar.datepickerLang("hr", "hr", {
            closeText: "Zatvori",
            prevText: "&#x3C;",
            nextText: "&#x3E;",
            currentText: "Danas",
            monthNames: ["SijeÄanj", "VeljaÄa", "OÅ¾ujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
            monthNamesShort: ["Sij", "Velj", "OÅ¾u", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
            dayNames: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "ÄŒetvrtak", "Petak", "Subota"],
            dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "ÄŒet", "Pet", "Sub"],
            dayNamesMin: ["Ne", "Po", "Ut", "Sr", "ÄŒe", "Pe", "Su"],
            weekHeader: "Tje",
            dateFormat: "dd.mm.yy.",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("hr", {
            buttonText: {
                month: "Mjesec",
                week: "Tjedan",
                day: "Dan",
                list: "Raspored"
            },
            allDayText: "Cijeli dan",
            eventLimitText: function(a) {
                return "+ joÅ¡ " + a
            }
        })
    }(),
    function() {
        ! function() {
            "use strict";

            function a(a, b, c, d) {
                var e = a;
                switch (c) {
                    case "s":
                        return d || b ? "nÃ©hÃ¡ny mÃ¡sodperc" : "nÃ©hÃ¡ny mÃ¡sodperce";
                    case "m":
                        return "egy" + (d || b ? " perc" : " perce");
                    case "mm":
                        return e + (d || b ? " perc" : " perce");
                    case "h":
                        return "egy" + (d || b ? " Ã³ra" : " Ã³rÃ¡ja");
                    case "hh":
                        return e + (d || b ? " Ã³ra" : " Ã³rÃ¡ja");
                    case "d":
                        return "egy" + (d || b ? " nap" : " napja");
                    case "dd":
                        return e + (d || b ? " nap" : " napja");
                    case "M":
                        return "egy" + (d || b ? " hÃ³nap" : " hÃ³napja");
                    case "MM":
                        return e + (d || b ? " hÃ³nap" : " hÃ³napja");
                    case "y":
                        return "egy" + (d || b ? " Ã©v" : " Ã©ve");
                    case "yy":
                        return e + (d || b ? " Ã©v" : " Ã©ve")
                }
                return ""
            }

            function c(a) {
                return (a ? "" : "[mÃºlt] ") + "[" + d[this.day()] + "] LT[-kor]"
            }
            var d = "vasÃ¡rnap hÃ©tfÅ‘n kedden szerdÃ¡n csÃ¼tÃ¶rtÃ¶kÃ¶n pÃ©nteken szombaton".split(" "),
                e = (b.defineLocale || b.lang).call(b, "hu", {
                    months: "januÃ¡r_februÃ¡r_mÃ¡rcius_Ã¡prilis_mÃ¡jus_jÃºnius_jÃºlius_augusztus_szeptember_oktÃ³ber_november_december".split("_"),
                    monthsShort: "jan_feb_mÃ¡rc_Ã¡pr_mÃ¡j_jÃºn_jÃºl_aug_szept_okt_nov_dec".split("_"),
                    weekdays: "vasÃ¡rnap_hÃ©tfÅ‘_kedd_szerda_csÃ¼tÃ¶rtÃ¶k_pÃ©ntek_szombat".split("_"),
                    weekdaysShort: "vas_hÃ©t_kedd_sze_csÃ¼t_pÃ©n_szo".split("_"),
                    weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "YYYY.MM.DD.",
                        LL: "YYYY. MMMM D.",
                        LLL: "YYYY. MMMM D. H:mm",
                        LLLL: "YYYY. MMMM D., dddd H:mm"
                    },
                    meridiemParse: /de|du/i,
                    isPM: function(a) {
                        return "u" === a.charAt(1).toLowerCase()
                    },
                    meridiem: function(a, b, c) {
                        return 12 > a ? c === !0 ? "de" : "DE" : c === !0 ? "du" : "DU"
                    },
                    calendar: {
                        sameDay: "[ma] LT[-kor]",
                        nextDay: "[holnap] LT[-kor]",
                        nextWeek: function() {
                            return c.call(this, !0)
                        },
                        lastDay: "[tegnap] LT[-kor]",
                        lastWeek: function() {
                            return c.call(this, !1)
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s mÃºlva",
                        past: "%s",
                        s: a,
                        m: a,
                        mm: a,
                        h: a,
                        hh: a,
                        d: a,
                        dd: a,
                        M: a,
                        MM: a,
                        y: a,
                        yy: a
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            return e
        }(), a.fullCalendar.datepickerLang("hu", "hu", {
            closeText: "bezÃ¡r",
            prevText: "vissza",
            nextText: "elÅ‘re",
            currentText: "ma",
            monthNames: ["JanuÃ¡r", "FebruÃ¡r", "MÃ¡rcius", "Ãprilis", "MÃ¡jus", "JÃºnius", "JÃºlius", "Augusztus", "Szeptember", "OktÃ³ber", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "MÃ¡r", "Ãpr", "MÃ¡j", "JÃºn", "JÃºl", "Aug", "Szep", "Okt", "Nov", "Dec"],
            dayNames: ["VasÃ¡rnap", "HÃ©tfÅ‘", "Kedd", "Szerda", "CsÃ¼tÃ¶rtÃ¶k", "PÃ©ntek", "Szombat"],
            dayNamesShort: ["Vas", "HÃ©t", "Ked", "Sze", "CsÃ¼", "PÃ©n", "Szo"],
            dayNamesMin: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
            weekHeader: "HÃ©t",
            dateFormat: "yy.mm.dd.",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: ""
        }), a.fullCalendar.lang("hu", {
            buttonText: {
                month: "HÃ³nap",
                week: "HÃ©t",
                day: "Nap",
                list: "NaplÃ³"
            },
            allDayText: "EgÃ©sz nap",
            eventLimitText: "tovÃ¡bbi"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "id", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|siang|sore|malam/,
                meridiemHour: function(a, b) {
                    return 12 === a && (a = 0), "pagi" === b ? a : "siang" === b ? a >= 11 ? a : a + 12 : "sore" === b || "malam" === b ? a + 12 : void 0
                },
                meridiem: function(a, b, c) {
                    return 11 > a ? "pagi" : 15 > a ? "siang" : 19 > a ? "sore" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Besok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kemarin pukul] LT",
                    lastWeek: "dddd [lalu pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lalu",
                    s: "beberapa detik",
                    m: "semenit",
                    mm: "%d menit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("id", "id", {
            closeText: "Tutup",
            prevText: "&#x3C;mundur",
            nextText: "maju&#x3E;",
            currentText: "hari ini",
            monthNames: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agus", "Sep", "Okt", "Nop", "Des"],
            dayNames: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
            dayNamesShort: ["Min", "Sen", "Sel", "Rab", "kam", "Jum", "Sab"],
            dayNamesMin: ["Mg", "Sn", "Sl", "Rb", "Km", "jm", "Sb"],
            weekHeader: "Mg",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("id", {
            buttonText: {
                month: "Bulan",
                week: "Minggu",
                day: "Hari",
                list: "Agenda"
            },
            allDayHtml: "Sehari<br/>penuh",
            eventLimitText: "lebih"
        })
    }(),
    function() {
        ! function() {
            "use strict";

            function a(a) {
                return a % 100 === 11 ? !0 : a % 10 !== 1
            }

            function c(b, c, d, e) {
                var f = b + " ";
                switch (d) {
                    case "s":
                        return c || e ? "nokkrar sekÃºndur" : "nokkrum sekÃºndum";
                    case "m":
                        return c ? "mÃ­nÃºta" : "mÃ­nÃºtu";
                    case "mm":
                        return a(b) ? f + (c || e ? "mÃ­nÃºtur" : "mÃ­nÃºtum") : c ? f + "mÃ­nÃºta" : f + "mÃ­nÃºtu";
                    case "hh":
                        return a(b) ? f + (c || e ? "klukkustundir" : "klukkustundum") : f + "klukkustund";
                    case "d":
                        return c ? "dagur" : e ? "dag" : "degi";
                    case "dd":
                        return a(b) ? c ? f + "dagar" : f + (e ? "daga" : "dÃ¶gum") : c ? f + "dagur" : f + (e ? "dag" : "degi");
                    case "M":
                        return c ? "mÃ¡nuÃ°ur" : e ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i";
                    case "MM":
                        return a(b) ? c ? f + "mÃ¡nuÃ°ir" : f + (e ? "mÃ¡nuÃ°i" : "mÃ¡nuÃ°um") : c ? f + "mÃ¡nuÃ°ur" : f + (e ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i");
                    case "y":
                        return c || e ? "Ã¡r" : "Ã¡ri";
                    case "yy":
                        return a(b) ? f + (c || e ? "Ã¡r" : "Ã¡rum") : f + (c || e ? "Ã¡r" : "Ã¡ri")
                }
            }
            var d = (b.defineLocale || b.lang).call(b, "is", {
                months: "janÃºar_febrÃºar_mars_aprÃ­l_maÃ­_jÃºnÃ­_jÃºlÃ­_Ã¡gÃºst_september_oktÃ³ber_nÃ³vember_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_maÃ­_jÃºn_jÃºl_Ã¡gÃº_sep_okt_nÃ³v_des".split("_"),
                weekdays: "sunnudagur_mÃ¡nudagur_Ã¾riÃ°judagur_miÃ°vikudagur_fimmtudagur_fÃ¶studagur_laugardagur".split("_"),
                weekdaysShort: "sun_mÃ¡n_Ã¾ri_miÃ°_fim_fÃ¶s_lau".split("_"),
                weekdaysMin: "Su_MÃ¡_Ãžr_Mi_Fi_FÃ¶_La".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
                },
                calendar: {
                    sameDay: "[Ã­ dag kl.] LT",
                    nextDay: "[Ã¡ morgun kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[Ã­ gÃ¦r kl.] LT",
                    lastWeek: "[sÃ­Ã°asta] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "eftir %s",
                    past: "fyrir %s sÃ­Ã°an",
                    s: c,
                    m: c,
                    mm: c,
                    h: "klukkustund",
                    hh: c,
                    d: c,
                    dd: c,
                    M: c,
                    MM: c,
                    y: c,
                    yy: c
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return d
        }(), a.fullCalendar.datepickerLang("is", "is", {
            closeText: "Loka",
            prevText: "&#x3C; Fyrri",
            nextText: "NÃ¦sti &#x3E;",
            currentText: "Ã dag",
            monthNames: ["JanÃºar", "FebrÃºar", "Mars", "AprÃ­l", "MaÃ­", "JÃºnÃ­", "JÃºlÃ­", "ÃgÃºst", "September", "OktÃ³ber", "NÃ³vember", "Desember"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "MaÃ­", "JÃºn", "JÃºl", "ÃgÃº", "Sep", "Okt", "NÃ³v", "Des"],
            dayNames: ["Sunnudagur", "MÃ¡nudagur", "ÃžriÃ°judagur", "MiÃ°vikudagur", "Fimmtudagur", "FÃ¶studagur", "Laugardagur"],
            dayNamesShort: ["Sun", "MÃ¡n", "Ãžri", "MiÃ°", "Fim", "FÃ¶s", "Lau"],
            dayNamesMin: ["Su", "MÃ¡", "Ãžr", "Mi", "Fi", "FÃ¶", "La"],
            weekHeader: "Vika",
            dateFormat: "dd.mm.yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("is", {
            buttonText: {
                month: "MÃ¡nuÃ°ur",
                week: "Vika",
                day: "Dagur",
                list: "DagskrÃ¡"
            },
            allDayHtml: "Allan<br/>daginn",
            eventLimitText: "meira"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "it", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "Domenica_LunedÃ¬_MartedÃ¬_MercoledÃ¬_GiovedÃ¬_VenerdÃ¬_Sabato".split("_"),
                weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
                weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Oggi alle] LT",
                    nextDay: "[Domani alle] LT",
                    nextWeek: "dddd [alle] LT",
                    lastDay: "[Ieri alle] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[la scorsa] dddd [alle] LT";
                            default:
                                return "[lo scorso] dddd [alle] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(a) {
                        return (/^[0-9].+$/.test(a) ? "tra" : "in") + " " + a
                    },
                    past: "%s fa",
                    s: "alcuni secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                ordinalParse: /\d{1,2}Âº/,
                ordinal: "%dÂº",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("it", "it", {
            closeText: "Chiudi",
            prevText: "&#x3C;Prec",
            nextText: "Succ&#x3E;",
            currentText: "Oggi",
            monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
            monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
            dayNames: ["Domenica", "LunedÃ¬", "MartedÃ¬", "MercoledÃ¬", "GiovedÃ¬", "VenerdÃ¬", "Sabato"],
            dayNamesShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
            dayNamesMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
            weekHeader: "Sm",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("it", {
            buttonText: {
                month: "Mese",
                week: "Settimana",
                day: "Giorno",
                list: "Agenda"
            },
            allDayHtml: "Tutto il<br/>giorno",
            eventLimitText: function(a) {
                return "+altri " + a
            }
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "ja", {
                months: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
                monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
                weekdays: "æ—¥æ›œæ—¥_æœˆæ›œæ—¥_ç«æ›œæ—¥_æ°´æ›œæ—¥_æœ¨æ›œæ—¥_é‡‘æ›œæ—¥_åœŸæ›œæ—¥".split("_"),
                weekdaysShort: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
                weekdaysMin: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
                longDateFormat: {
                    LT: "Ahæ™‚måˆ†",
                    LTS: "Ahæ™‚måˆ†sç§’",
                    L: "YYYY/MM/DD",
                    LL: "YYYYå¹´MæœˆDæ—¥",
                    LLL: "YYYYå¹´MæœˆDæ—¥Ahæ™‚måˆ†",
                    LLLL: "YYYYå¹´MæœˆDæ—¥Ahæ™‚måˆ† dddd"
                },
                meridiemParse: /åˆå‰|åˆå¾Œ/i,
                isPM: function(a) {
                    return "åˆå¾Œ" === a
                },
                meridiem: function(a, b, c) {
                    return 12 > a ? "åˆå‰" : "åˆå¾Œ"
                },
                calendar: {
                    sameDay: "[ä»Šæ—¥] LT",
                    nextDay: "[æ˜Žæ—¥] LT",
                    nextWeek: "[æ¥é€±]dddd LT",
                    lastDay: "[æ˜¨æ—¥] LT",
                    lastWeek: "[å‰é€±]dddd LT",
                    sameElse: "L"
                },
                ordinalParse: /\d{1,2}æ—¥/,
                ordinal: function(a, b) {
                    switch (b) {
                        case "d":
                        case "D":
                        case "DDD":
                            return a + "æ—¥";
                        default:
                            return a
                    }
                },
                relativeTime: {
                    future: "%så¾Œ",
                    past: "%så‰",
                    s: "æ•°ç§’",
                    m: "1åˆ†",
                    mm: "%dåˆ†",
                    h: "1æ™‚é–“",
                    hh: "%dæ™‚é–“",
                    d: "1æ—¥",
                    dd: "%dæ—¥",
                    M: "1ãƒ¶æœˆ",
                    MM: "%dãƒ¶æœˆ",
                    y: "1å¹´",
                    yy: "%då¹´"
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("ja", "ja", {
            closeText: "é–‰ã˜ã‚‹",
            prevText: "&#x3C;å‰",
            nextText: "æ¬¡&#x3E;",
            currentText: "ä»Šæ—¥",
            monthNames: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"],
            monthNamesShort: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"],
            dayNames: ["æ—¥æ›œæ—¥", "æœˆæ›œæ—¥", "ç«æ›œæ—¥", "æ°´æ›œæ—¥", "æœ¨æ›œæ—¥", "é‡‘æ›œæ—¥", "åœŸæ›œæ—¥"],
            dayNamesShort: ["æ—¥", "æœˆ", "ç«", "æ°´", "æœ¨", "é‡‘", "åœŸ"],
            dayNamesMin: ["æ—¥", "æœˆ", "ç«", "æ°´", "æœ¨", "é‡‘", "åœŸ"],
            weekHeader: "é€±",
            dateFormat: "yy/mm/dd",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: "å¹´"
        }), a.fullCalendar.lang("ja", {
            buttonText: {
                month: "æœˆ",
                week: "é€±",
                day: "æ—¥",
                list: "äºˆå®šãƒªã‚¹ãƒˆ"
            },
            allDayText: "çµ‚æ—¥",
            eventLimitText: function(a) {
                return "ä»– " + a + " ä»¶"
            }
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "ko", {
                months: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),
                monthsShort: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),
                weekdays: "ì¼ìš”ì¼_ì›”ìš”ì¼_í™”ìš”ì¼_ìˆ˜ìš”ì¼_ëª©ìš”ì¼_ê¸ˆìš”ì¼_í† ìš”ì¼".split("_"),
                weekdaysShort: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
                weekdaysMin: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
                longDateFormat: {
                    LT: "A hì‹œ më¶„",
                    LTS: "A hì‹œ më¶„ sì´ˆ",
                    L: "YYYY.MM.DD",
                    LL: "YYYYë…„ MMMM Dì¼",
                    LLL: "YYYYë…„ MMMM Dì¼ A hì‹œ më¶„",
                    LLLL: "YYYYë…„ MMMM Dì¼ dddd A hì‹œ më¶„"
                },
                calendar: {
                    sameDay: "ì˜¤ëŠ˜ LT",
                    nextDay: "ë‚´ì¼ LT",
                    nextWeek: "dddd LT",
                    lastDay: "ì–´ì œ LT",
                    lastWeek: "ì§€ë‚œì£¼ dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s í›„",
                    past: "%s ì „",
                    s: "ëª‡ ì´ˆ",
                    ss: "%dì´ˆ",
                    m: "ì¼ë¶„",
                    mm: "%dë¶„",
                    h: "í•œ ì‹œê°„",
                    hh: "%dì‹œê°„",
                    d: "í•˜ë£¨",
                    dd: "%dì¼",
                    M: "í•œ ë‹¬",
                    MM: "%dë‹¬",
                    y: "ì¼ ë…„",
                    yy: "%dë…„"
                },
                ordinalParse: /\d{1,2}ì¼/,
                ordinal: "%dì¼",
                meridiemParse: /ì˜¤ì „|ì˜¤í›„/,
                isPM: function(a) {
                    return "ì˜¤í›„" === a
                },
                meridiem: function(a, b, c) {
                    return 12 > a ? "ì˜¤ì „" : "ì˜¤í›„"
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("ko", "ko", {
            closeText: "ë‹«ê¸°",
            prevText: "ì´ì „ë‹¬",
            nextText: "ë‹¤ìŒë‹¬",
            currentText: "ì˜¤ëŠ˜",
            monthNames: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"],
            monthNamesShort: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"],
            dayNames: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"],
            dayNamesShort: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
            dayNamesMin: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
            weekHeader: "Wk",
            dateFormat: "yy-mm-dd",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: "ë…„"
        }), a.fullCalendar.lang("ko", {
            buttonText: {
                month: "ì›”",
                week: "ì£¼",
                day: "ì¼",
                list: "ì¼ì •ëª©ë¡"
            },
            allDayText: "ì¢…ì¼",
            eventLimitText: "ê°œ"
        })
    }(),
    function() {
        ! function() {
            "use strict";

            function a(a, b, c, d) {
                var e = {
                    m: ["eng Minutt", "enger Minutt"],
                    h: ["eng Stonn", "enger Stonn"],
                    d: ["een Dag", "engem Dag"],
                    M: ["ee Mount", "engem Mount"],
                    y: ["ee Joer", "engem Joer"]
                };
                return b ? e[c][0] : e[c][1]
            }

            function c(a) {
                var b = a.substr(0, a.indexOf(" "));
                return e(b) ? "a " + a : "an " + a
            }

            function d(a) {
                var b = a.substr(0, a.indexOf(" "));
                return e(b) ? "viru " + a : "virun " + a
            }

            function e(a) {
                if (a = parseInt(a, 10), isNaN(a)) return !1;
                if (0 > a) return !0;
                if (10 > a) return a >= 4 && 7 >= a;
                if (100 > a) {
                    var b = a % 10,
                        c = a / 10;
                    return e(0 === b ? c : b)
                }
                if (1e4 > a) {
                    for (; a >= 10;) a /= 10;
                    return e(a)
                }
                return a /= 1e3, e(a)
            }
            var f = (b.defineLocale || b.lang).call(b, "lb", {
                months: "Januar_Februar_MÃ¤erz_AbrÃ«ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonndeg_MÃ©indeg_DÃ«nschdeg_MÃ«ttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                weekdaysShort: "So._MÃ©._DÃ«._MÃ«._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_MÃ©_DÃ«_MÃ«_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm [Auer]",
                    LTS: "H:mm:ss [Auer]",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm [Auer]",
                    LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
                },
                calendar: {
                    sameDay: "[Haut um] LT",
                    sameElse: "L",
                    nextDay: "[Muer um] LT",
                    nextWeek: "dddd [um] LT",
                    lastDay: "[GÃ«schter um] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 2:
                            case 4:
                                return "[Leschten] dddd [um] LT";
                            default:
                                return "[Leschte] dddd [um] LT"
                        }
                    }
                },
                relativeTime: {
                    future: c,
                    past: d,
                    s: "e puer Sekonnen",
                    m: a,
                    mm: "%d Minutten",
                    h: a,
                    hh: "%d Stonnen",
                    d: a,
                    dd: "%d Deeg",
                    M: a,
                    MM: "%d MÃ©int",
                    y: a,
                    yy: "%d Joer"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return f
        }(), a.fullCalendar.datepickerLang("lb", "lb", {
            closeText: "FÃ¤erdeg",
            prevText: "ZrÃ©ck",
            nextText: "Weider",
            currentText: "Haut",
            monthNames: ["Januar", "Februar", "MÃ¤erz", "AbrÃ«ll", "Mee", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthNamesShort: ["Jan", "Feb", "MÃ¤e", "Abr", "Mee", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            dayNames: ["Sonndeg", "MÃ©indeg", "DÃ«nschdeg", "MÃ«ttwoch", "Donneschdeg", "Freideg", "Samschdeg"],
            dayNamesShort: ["Son", "MÃ©i", "DÃ«n", "MÃ«t", "Don", "Fre", "Sam"],
            dayNamesMin: ["So", "MÃ©", "DÃ«", "MÃ«", "Do", "Fr", "Sa"],
            weekHeader: "W",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("lb", {
            buttonText: {
                month: "Mount",
                week: "Woch",
                day: "Dag",
                list: "Terminiwwersiicht"
            },
            allDayText: "Ganzen Dag",
            eventLimitText: "mÃ©i"
        })
    }(),
    function() {
        ! function() {
            "use strict";

            function a(a, b, c, d) {
                return b ? "kelios sekundÄ—s" : d ? "keliÅ³ sekundÅ¾iÅ³" : "kelias sekundes"
            }

            function c(a, b, c, d) {
                return b ? e(c)[0] : d ? e(c)[1] : e(c)[2]
            }

            function d(a) {
                return a % 10 === 0 || a > 10 && 20 > a
            }

            function e(a) {
                return g[a].split("_")
            }

            function f(a, b, f, g) {
                var h = a + " ";
                return 1 === a ? h + c(a, b, f[0], g) : b ? h + (d(a) ? e(f)[1] : e(f)[0]) : g ? h + e(f)[1] : h + (d(a) ? e(f)[1] : e(f)[2])
            }
            var g = {
                    m: "minutÄ—_minutÄ—s_minutÄ™",
                    mm: "minutÄ—s_minuÄiÅ³_minutes",
                    h: "valanda_valandos_valandÄ…",
                    hh: "valandos_valandÅ³_valandas",
                    d: "diena_dienos_dienÄ…",
                    dd: "dienos_dienÅ³_dienas",
                    M: "mÄ—nuo_mÄ—nesio_mÄ—nesÄ¯",
                    MM: "mÄ—nesiai_mÄ—nesiÅ³_mÄ—nesius",
                    y: "metai_metÅ³_metus",
                    yy: "metai_metÅ³_metus"
                },
                h = (b.defineLocale || b.lang).call(b, "lt", {
                    months: {
                        format: "sausio_vasario_kovo_balandÅ¾io_geguÅ¾Ä—s_birÅ¾elio_liepos_rugpjÅ«Äio_rugsÄ—jo_spalio_lapkriÄio_gruodÅ¾io".split("_"),
                        standalone: "sausis_vasaris_kovas_balandis_geguÅ¾Ä—_birÅ¾elis_liepa_rugpjÅ«tis_rugsÄ—jis_spalis_lapkritis_gruodis".split("_")
                    },
                    monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                    weekdays: {
                        format: "sekmadienÄ¯_pirmadienÄ¯_antradienÄ¯_treÄiadienÄ¯_ketvirtadienÄ¯_penktadienÄ¯_Å¡eÅ¡tadienÄ¯".split("_"),
                        standalone: "sekmadienis_pirmadienis_antradienis_treÄiadienis_ketvirtadienis_penktadienis_Å¡eÅ¡tadienis".split("_"),
                        isFormat: /dddd HH:mm/
                    },
                    weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Å eÅ¡".split("_"),
                    weekdaysMin: "S_P_A_T_K_Pn_Å ".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY [m.] MMMM D [d.]",
                        LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                        LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                        l: "YYYY-MM-DD",
                        ll: "YYYY [m.] MMMM D [d.]",
                        lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                        llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                    },
                    calendar: {
                        sameDay: "[Å iandien] LT",
                        nextDay: "[Rytoj] LT",
                        nextWeek: "dddd LT",
                        lastDay: "[Vakar] LT",
                        lastWeek: "[PraÄ—jusÄ¯] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "po %s",
                        past: "prieÅ¡ %s",
                        s: a,
                        m: c,
                        mm: f,
                        h: c,
                        hh: f,
                        d: c,
                        dd: f,
                        M: c,
                        MM: f,
                        y: c,
                        yy: f
                    },
                    ordinalParse: /\d{1,2}-oji/,
                    ordinal: function(a) {
                        return a + "-oji"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return h
        }(), a.fullCalendar.datepickerLang("lt", "lt", {
            closeText: "UÅ¾daryti",
            prevText: "&#x3C;Atgal",
            nextText: "Pirmyn&#x3E;",
            currentText: "Å iandien",
            monthNames: ["Sausis", "Vasaris", "Kovas", "Balandis", "GeguÅ¾Ä—", "BirÅ¾elis", "Liepa", "RugpjÅ«tis", "RugsÄ—jis", "Spalis", "Lapkritis", "Gruodis"],
            monthNamesShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gru"],
            dayNames: ["sekmadienis", "pirmadienis", "antradienis", "treÄiadienis", "ketvirtadienis", "penktadienis", "Å¡eÅ¡tadienis"],
            dayNamesShort: ["sek", "pir", "ant", "tre", "ket", "pen", "Å¡eÅ¡"],
            dayNamesMin: ["Se", "Pr", "An", "Tr", "Ke", "Pe", "Å e"],
            weekHeader: "SAV",
            dateFormat: "yy-mm-dd",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: ""
        }), a.fullCalendar.lang("lt", {
            buttonText: {
                month: "MÄ—nuo",
                week: "SavaitÄ—",
                day: "Diena",
                list: "DarbotvarkÄ—"
            },
            allDayText: "VisÄ… dienÄ…",
            eventLimitText: "daugiau"
        })
    }(),
    function() {
        ! function() {
            "use strict";

            function a(a, b, c) {
                return c ? b % 10 === 1 && 11 !== b ? a[2] : a[3] : b % 10 === 1 && 11 !== b ? a[0] : a[1]
            }

            function c(b, c, d) {
                return b + " " + a(f[d], b, c)
            }

            function d(b, c, d) {
                return a(f[d], b, c)
            }

            function e(a, b) {
                return b ? "daÅ¾as sekundes" : "daÅ¾Äm sekundÄ“m"
            }
            var f = {
                    m: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),
                    mm: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),
                    h: "stundas_stundÄm_stunda_stundas".split("_"),
                    hh: "stundas_stundÄm_stunda_stundas".split("_"),
                    d: "dienas_dienÄm_diena_dienas".split("_"),
                    dd: "dienas_dienÄm_diena_dienas".split("_"),
                    M: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),
                    MM: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),
                    y: "gada_gadiem_gads_gadi".split("_"),
                    yy: "gada_gadiem_gads_gadi".split("_")
                },
                g = (b.defineLocale || b.lang).call(b, "lv", {
                    months: "janvÄris_februÄris_marts_aprÄ«lis_maijs_jÅ«nijs_jÅ«lijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_jÅ«n_jÅ«l_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "svÄ“tdiena_pirmdiena_otrdiena_treÅ¡diena_ceturtdiena_piektdiena_sestdiena".split("_"),
                    weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                    weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY.",
                        LL: "YYYY. [gada] D. MMMM",
                        LLL: "YYYY. [gada] D. MMMM, HH:mm",
                        LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
                    },
                    calendar: {
                        sameDay: "[Å odien pulksten] LT",
                        nextDay: "[RÄ«t pulksten] LT",
                        nextWeek: "dddd [pulksten] LT",
                        lastDay: "[Vakar pulksten] LT",
                        lastWeek: "[PagÄjuÅ¡Ä] dddd [pulksten] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "pÄ“c %s",
                        past: "pirms %s",
                        s: e,
                        m: d,
                        mm: c,
                        h: d,
                        hh: c,
                        d: d,
                        dd: c,
                        M: d,
                        MM: c,
                        y: d,
                        yy: c
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return g
        }(), a.fullCalendar.datepickerLang("lv", "lv", {
            closeText: "AizvÄ“rt",
            prevText: "Iepr.",
            nextText: "NÄk.",
            currentText: "Å odien",
            monthNames: ["JanvÄris", "FebruÄris", "Marts", "AprÄ«lis", "Maijs", "JÅ«nijs", "JÅ«lijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "JÅ«n", "JÅ«l", "Aug", "Sep", "Okt", "Nov", "Dec"],
            dayNames: ["svÄ“tdiena", "pirmdiena", "otrdiena", "treÅ¡diena", "ceturtdiena", "piektdiena", "sestdiena"],
            dayNamesShort: ["svt", "prm", "otr", "tre", "ctr", "pkt", "sst"],
            dayNamesMin: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "Ss"],
            weekHeader: "Ned.",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("lv", {
            buttonText: {
                month: "MÄ“nesis",
                week: "NedÄ“Ä¼a",
                day: "Diena",
                list: "Dienas kÄrtÄ«ba"
            },
            allDayText: "Visu dienu",
            eventLimitText: function(a) {
                return "+vÄ“l " + a
            }
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "nb", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),
                weekdaysShort: "sÃ¸._ma._ti._on._to._fr._lÃ¸.".split("_"),
                weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[i gÃ¥r kl.] LT",
                    lastWeek: "[forrige] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "noen sekunder",
                    m: "ett minutt",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dager",
                    M: "en mÃ¥ned",
                    MM: "%d mÃ¥neder",
                    y: "ett Ã¥r",
                    yy: "%d Ã¥r"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("nb", "nb", {
            closeText: "Lukk",
            prevText: "&#xAB;Forrige",
            nextText: "Neste&#xBB;",
            currentText: "I dag",
            monthNames: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
            monthNamesShort: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
            dayNamesShort: ["sÃ¸n", "man", "tir", "ons", "tor", "fre", "lÃ¸r"],
            dayNames: ["sÃ¸ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lÃ¸rdag"],
            dayNamesMin: ["sÃ¸", "ma", "ti", "on", "to", "fr", "lÃ¸"],
            weekHeader: "Uke",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("nb", {
            buttonText: {
                month: "MÃ¥ned",
                week: "Uke",
                day: "Dag",
                list: "Agenda"
            },
            allDayText: "Hele dagen",
            eventLimitText: "til"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                c = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                d = (b.defineLocale || b.lang).call(b, "nl", {
                    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                    monthsShort: function(b, d) {
                        return /-MMM-/.test(d) ? c[b.month()] : a[b.month()]
                    },
                    monthsParseExact: !0,
                    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                    weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[vandaag om] LT",
                        nextDay: "[morgen om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[gisteren om] LT",
                        lastWeek: "[afgelopen] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "over %s",
                        past: "%s geleden",
                        s: "een paar seconden",
                        m: "Ã©Ã©n minuut",
                        mm: "%d minuten",
                        h: "Ã©Ã©n uur",
                        hh: "%d uur",
                        d: "Ã©Ã©n dag",
                        dd: "%d dagen",
                        M: "Ã©Ã©n maand",
                        MM: "%d maanden",
                        y: "Ã©Ã©n jaar",
                        yy: "%d jaar"
                    },
                    ordinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(a) {
                        return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return d
        }(), a.fullCalendar.datepickerLang("nl", "nl", {
            closeText: "Sluiten",
            prevText: "â†",
            nextText: "â†’",
            currentText: "Vandaag",
            monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            monthNamesShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            dayNames: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
            dayNamesShort: ["zon", "maa", "din", "woe", "don", "vri", "zat"],
            dayNamesMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
            weekHeader: "Wk",
            dateFormat: "dd-mm-yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("nl", {
            buttonText: {
                month: "Maand",
                week: "Week",
                day: "Dag",
                list: "Agenda"
            },
            allDayText: "Hele dag",
            eventLimitText: "extra"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "nn", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sundag_mÃ¥ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                weekdaysShort: "sun_mÃ¥n_tys_ons_tor_fre_lau".split("_"),
                weekdaysMin: "su_mÃ¥_ty_on_to_fr_lÃ¸".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[I dag klokka] LT",
                    nextDay: "[I morgon klokka] LT",
                    nextWeek: "dddd [klokka] LT",
                    lastDay: "[I gÃ¥r klokka] LT",
                    lastWeek: "[FÃ¸regÃ¥ande] dddd [klokka] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s sidan",
                    s: "nokre sekund",
                    m: "eit minutt",
                    mm: "%d minutt",
                    h: "ein time",
                    hh: "%d timar",
                    d: "ein dag",
                    dd: "%d dagar",
                    M: "ein mÃ¥nad",
                    MM: "%d mÃ¥nader",
                    y: "eit Ã¥r",
                    yy: "%d Ã¥r"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("nn", "nn", {
            closeText: "Lukk",
            prevText: "&#xAB;FÃ¸rre",
            nextText: "Neste&#xBB;",
            currentText: "I dag",
            monthNames: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
            monthNamesShort: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
            dayNamesShort: ["sun", "mÃ¥n", "tys", "ons", "tor", "fre", "lau"],
            dayNames: ["sundag", "mÃ¥ndag", "tysdag", "onsdag", "torsdag", "fredag", "laurdag"],
            dayNamesMin: ["su", "mÃ¥", "ty", "on", "to", "fr", "la"],
            weekHeader: "Veke",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("nn", {
            buttonText: {
                month: "MÃ¥nad",
                week: "Veke",
                day: "Dag",
                list: "Agenda"
            },
            allDayText: "Heile dagen",
            eventLimitText: "til"
        })
    }(),
    function() {
        ! function() {
            "use strict";

            function a(a) {
                return 5 > a % 10 && a % 10 > 1 && ~~(a / 10) % 10 !== 1
            }

            function c(b, c, d) {
                var e = b + " ";
                switch (d) {
                    case "m":
                        return c ? "minuta" : "minutÄ™";
                    case "mm":
                        return e + (a(b) ? "minuty" : "minut");
                    case "h":
                        return c ? "godzina" : "godzinÄ™";
                    case "hh":
                        return e + (a(b) ? "godziny" : "godzin");
                    case "MM":
                        return e + (a(b) ? "miesiÄ…ce" : "miesiÄ™cy");
                    case "yy":
                        return e + (a(b) ? "lata" : "lat")
                }
            }
            var d = "styczeÅ„_luty_marzec_kwiecieÅ„_maj_czerwiec_lipiec_sierpieÅ„_wrzesieÅ„_paÅºdziernik_listopad_grudzieÅ„".split("_"),
                e = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrzeÅ›nia_paÅºdziernika_listopada_grudnia".split("_"),
                f = (b.defineLocale || b.lang).call(b, "pl", {
                    months: function(a, b) {
                        return "" === b ? "(" + e[a.month()] + "|" + d[a.month()] + ")" : /D MMMM/.test(b) ? e[a.month()] : d[a.month()]
                    },
                    monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paÅº_lis_gru".split("_"),
                    weekdays: "niedziela_poniedziaÅ‚ek_wtorek_Å›roda_czwartek_piÄ…tek_sobota".split("_"),
                    weekdaysShort: "nie_pon_wt_Å›r_czw_pt_sb".split("_"),
                    weekdaysMin: "Nd_Pn_Wt_Åšr_Cz_Pt_So".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[DziÅ› o] LT",
                        nextDay: "[Jutro o] LT",
                        nextWeek: "[W] dddd [o] LT",
                        lastDay: "[Wczoraj o] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[W zeszÅ‚Ä… niedzielÄ™ o] LT";
                                case 3:
                                    return "[W zeszÅ‚Ä… Å›rodÄ™ o] LT";
                                case 6:
                                    return "[W zeszÅ‚Ä… sobotÄ™ o] LT";
                                default:
                                    return "[W zeszÅ‚y] dddd [o] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "%s temu",
                        s: "kilka sekund",
                        m: c,
                        mm: c,
                        h: c,
                        hh: c,
                        d: "1 dzieÅ„",
                        dd: "%d dni",
                        M: "miesiÄ…c",
                        MM: c,
                        y: "rok",
                        yy: c
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return f
        }(), a.fullCalendar.datepickerLang("pl", "pl", {
            closeText: "Zamknij",
            prevText: "&#x3C;Poprzedni",
            nextText: "NastÄ™pny&#x3E;",
            currentText: "DziÅ›",
            monthNames: ["StyczeÅ„", "Luty", "Marzec", "KwiecieÅ„", "Maj", "Czerwiec", "Lipiec", "SierpieÅ„", "WrzesieÅ„", "PaÅºdziernik", "Listopad", "GrudzieÅ„"],
            monthNamesShort: ["Sty", "Lu", "Mar", "Kw", "Maj", "Cze", "Lip", "Sie", "Wrz", "Pa", "Lis", "Gru"],
            dayNames: ["Niedziela", "PoniedziaÅ‚ek", "Wtorek", "Åšroda", "Czwartek", "PiÄ…tek", "Sobota"],
            dayNamesShort: ["Nie", "Pn", "Wt", "Åšr", "Czw", "Pt", "So"],
            dayNamesMin: ["N", "Pn", "Wt", "Åšr", "Cz", "Pt", "So"],
            weekHeader: "Tydz",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("pl", {
            buttonText: {
                month: "MiesiÄ…c",
                week: "TydzieÅ„",
                day: "DzieÅ„",
                list: "Plan dnia"
            },
            allDayText: "CaÅ‚y dzieÅ„",
            eventLimitText: "wiÄ™cej"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "pt-br", {
                months: "Janeiro_Fevereiro_MarÃ§o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingo_Segunda-feira_TerÃ§a-feira_Quarta-feira_Quinta-feira_Sexta-feira_SÃ¡bado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"),
                weekdaysMin: "Dom_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡b".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY [Ã s] HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY [Ã s] HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje Ã s] LT",
                    nextDay: "[AmanhÃ£ Ã s] LT",
                    nextWeek: "dddd [Ã s] LT",
                    lastDay: "[Ontem Ã s] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "%s atrÃ¡s",
                    s: "poucos segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mÃªs",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                ordinalParse: /\d{1,2}Âº/,
                ordinal: "%dÂº"
            });
            return a
        }(), a.fullCalendar.datepickerLang("pt-br", "pt-BR", {
            closeText: "Fechar",
            prevText: "&#x3C;Anterior",
            nextText: "PrÃ³ximo&#x3E;",
            currentText: "Hoje",
            monthNames: ["Janeiro", "Fevereiro", "MarÃ§o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            dayNames: ["Domingo", "Segunda-feira", "TerÃ§a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "SÃ¡bado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "SÃ¡b"],
            dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "SÃ¡b"],
            weekHeader: "Sm",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("pt-br", {
            buttonText: {
                month: "MÃªs",
                week: "Semana",
                day: "Dia",
                list: "Compromissos"
            },
            allDayText: "dia inteiro",
            eventLimitText: function(a) {
                return "mais +" + a
            }
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "pt", {
                months: "Janeiro_Fevereiro_MarÃ§o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingo_Segunda-Feira_TerÃ§a-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_SÃ¡bado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"),
                weekdaysMin: "Dom_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡b".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje Ã s] LT",
                    nextDay: "[AmanhÃ£ Ã s] LT",
                    nextWeek: "dddd [Ã s] LT",
                    lastDay: "[Ontem Ã s] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "hÃ¡ %s",
                    s: "segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mÃªs",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                ordinalParse: /\d{1,2}Âº/,
                ordinal: "%dÂº",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("pt", "pt", {
            closeText: "Fechar",
            prevText: "Anterior",
            nextText: "Seguinte",
            currentText: "Hoje",
            monthNames: ["Janeiro", "Fevereiro", "MarÃ§o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            dayNames: ["Domingo", "Segunda-feira", "TerÃ§a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "SÃ¡bado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "SÃ¡b"],
            dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "SÃ¡b"],
            weekHeader: "Sem",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("pt", {
            buttonText: {
                month: "MÃªs",
                week: "Semana",
                day: "Dia",
                list: "Agenda"
            },
            allDayText: "Todo o dia",
            eventLimitText: "mais"
        })
    }(),
    function() {
        ! function() {
            "use strict";

            function a(a, b, c) {
                var d = {
                        mm: "minute",
                        hh: "ore",
                        dd: "zile",
                        MM: "luni",
                        yy: "ani"
                    },
                    e = " ";
                return (a % 100 >= 20 || a >= 100 && a % 100 === 0) && (e = " de "), a + e + d[c]
            }
            var c = (b.defineLocale || b.lang).call(b, "ro", {
                months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "duminicÄƒ_luni_marÈ›i_miercuri_joi_vineri_sÃ¢mbÄƒtÄƒ".split("_"),
                weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_SÃ¢m".split("_"),
                weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_SÃ¢".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[azi la] LT",
                    nextDay: "[mÃ¢ine la] LT",
                    nextWeek: "dddd [la] LT",
                    lastDay: "[ieri la] LT",
                    lastWeek: "[fosta] dddd [la] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "peste %s",
                    past: "%s Ã®n urmÄƒ",
                    s: "cÃ¢teva secunde",
                    m: "un minut",
                    mm: a,
                    h: "o orÄƒ",
                    hh: a,
                    d: "o zi",
                    dd: a,
                    M: "o lunÄƒ",
                    MM: a,
                    y: "un an",
                    yy: a
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return c
        }(), a.fullCalendar.datepickerLang("ro", "ro", {
            closeText: "ÃŽnchide",
            prevText: "&#xAB; Luna precedentÄƒ",
            nextText: "Luna urmÄƒtoare &#xBB;",
            currentText: "Azi",
            monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
            monthNamesShort: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["DuminicÄƒ", "Luni", "MarÅ£i", "Miercuri", "Joi", "Vineri", "SÃ¢mbÄƒtÄƒ"],
            dayNamesShort: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "SÃ¢m"],
            dayNamesMin: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "SÃ¢"],
            weekHeader: "SÄƒpt",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("ro", {
            buttonText: {
                prev: "precedentÄƒ",
                next: "urmÄƒtoare",
                month: "LunÄƒ",
                week: "SÄƒptÄƒmÃ¢nÄƒ",
                day: "Zi",
                list: "AgendÄƒ"
            },
            allDayText: "ToatÄƒ ziua",
            eventLimitText: function(a) {
                return "+alte " + a
            }
        })
    }(),
    function() {
        ! function() {
            "use strict";

            function a(a, b) {
                var c = a.split("_");
                return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
            }

            function c(b, c, d) {
                var e = {
                    mm: c ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚",
                    hh: "Ñ‡Ð°Ñ_Ñ‡Ð°ÑÐ°_Ñ‡Ð°ÑÐ¾Ð²",
                    dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹",
                    MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ð°_Ð¼ÐµÑÑÑ†ÐµÐ²",
                    yy: "Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ‚"
                };
                return "m" === d ? c ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ" : b + " " + a(e[d], +b)
            }
            var d = [/^ÑÐ½Ð²/i, /^Ñ„ÐµÐ²/i, /^Ð¼Ð°Ñ€/i, /^Ð°Ð¿Ñ€/i, /^Ð¼Ð°[Ð¹Ñ]/i, /^Ð¸ÑŽÐ½/i, /^Ð¸ÑŽÐ»/i, /^Ð°Ð²Ð³/i, /^ÑÐµÐ½/i, /^Ð¾ÐºÑ‚/i, /^Ð½Ð¾Ñ/i, /^Ð´ÐµÐº/i],
                e = (b.defineLocale || b.lang).call(b, "ru", {
                    months: {
                        format: "ÑÐ½Ð²Ð°Ñ€Ñ_Ñ„ÐµÐ²Ñ€Ð°Ð»Ñ_Ð¼Ð°Ñ€Ñ‚Ð°_Ð°Ð¿Ñ€ÐµÐ»Ñ_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³ÑƒÑÑ‚Ð°_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ñ_Ð¾ÐºÑ‚ÑÐ±Ñ€Ñ_Ð½Ð¾ÑÐ±Ñ€Ñ_Ð´ÐµÐºÐ°Ð±Ñ€Ñ".split("_"),
                        standalone: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_")
                    },
                    monthsShort: {
                        format: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_"),
                        standalone: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€._Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_")
                    },
                    weekdays: {
                        standalone: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ð°_ÑÑƒÐ±Ð±Ð¾Ñ‚Ð°".split("_"),
                        format: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ñƒ_ÑÑƒÐ±Ð±Ð¾Ñ‚Ñƒ".split("_"),
                        isFormat: /\[ ?[Ð’Ð²] ?(?:Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ|ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ|ÑÑ‚Ñƒ)? ?\] ?dddd/
                    },
                    weekdaysShort: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
                    weekdaysMin: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
                    monthsParse: d,
                    longMonthsParse: d,
                    shortMonthsParse: d,
                    monthsRegex: /^(ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑÑŒ]|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑÑŒ]|Ð´ÐµÐºÐ°Ð±Ñ€[ÑÑŒ]|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑÑŒ]|ÑÐ½Ð²Ð°Ñ€[ÑÑŒ]|Ð°Ð¿Ñ€ÐµÐ»[ÑÑŒ]|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð½Ð¾ÑÐ±Ñ€[ÑÑŒ]|ÑÐµÐ½Ñ‚\.|Ñ„ÐµÐ²Ñ€\.|Ð½Ð¾ÑÐ±\.|Ð¸ÑŽÐ½ÑŒ|ÑÐ½Ð².|Ð¸ÑŽÐ»ÑŒ|Ð´ÐµÐº.|Ð°Ð²Ð³.|Ð°Ð¿Ñ€.|Ð¼Ð°Ñ€Ñ‚Ð°|Ð¼Ð°Ñ€[.Ñ‚]|Ð¾ÐºÑ‚.|Ð¸ÑŽÐ½[ÑÑŒ]|Ð¸ÑŽÐ»[ÑÑŒ]|Ð¼Ð°[ÑÐ¹])/i,
                    monthsShortRegex: /^(ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑÑŒ]|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑÑŒ]|Ð´ÐµÐºÐ°Ð±Ñ€[ÑÑŒ]|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑÑŒ]|ÑÐ½Ð²Ð°Ñ€[ÑÑŒ]|Ð°Ð¿Ñ€ÐµÐ»[ÑÑŒ]|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð½Ð¾ÑÐ±Ñ€[ÑÑŒ]|ÑÐµÐ½Ñ‚\.|Ñ„ÐµÐ²Ñ€\.|Ð½Ð¾ÑÐ±\.|Ð¸ÑŽÐ½ÑŒ|ÑÐ½Ð².|Ð¸ÑŽÐ»ÑŒ|Ð´ÐµÐº.|Ð°Ð²Ð³.|Ð°Ð¿Ñ€.|Ð¼Ð°Ñ€Ñ‚Ð°|Ð¼Ð°Ñ€[.Ñ‚]|Ð¾ÐºÑ‚.|Ð¸ÑŽÐ½[ÑÑŒ]|Ð¸ÑŽÐ»[ÑÑŒ]|Ð¼Ð°[ÑÐ¹])/i,
                    monthsStrictRegex: /^(ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑÑŒ]|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑÑŒ]|Ð´ÐµÐºÐ°Ð±Ñ€[ÑÑŒ]|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑÑŒ]|ÑÐ½Ð²Ð°Ñ€[ÑÑŒ]|Ð°Ð¿Ñ€ÐµÐ»[ÑÑŒ]|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð½Ð¾ÑÐ±Ñ€[ÑÑŒ]|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¸ÑŽÐ½[ÑÑŒ]|Ð¸ÑŽÐ»[ÑÑŒ]|Ð¼Ð°[ÑÐ¹])/i,
                    monthsShortStrictRegex: /^(Ð½Ð¾ÑÐ±\.|Ñ„ÐµÐ²Ñ€\.|ÑÐµÐ½Ñ‚\.|Ð¸ÑŽÐ»ÑŒ|ÑÐ½Ð²\.|Ð¸ÑŽÐ½[ÑÑŒ]|Ð¼Ð°Ñ€[.Ñ‚]|Ð°Ð²Ð³\.|Ð°Ð¿Ñ€\.|Ð¾ÐºÑ‚\.|Ð´ÐµÐº\.|Ð¼Ð°[ÑÐ¹])/i,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY Ð³.",
                        LLL: "D MMMM YYYY Ð³., HH:mm",
                        LLLL: "dddd, D MMMM YYYY Ð³., HH:mm"
                    },
                    calendar: {
                        sameDay: "[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ Ð²] LT",
                        nextDay: "[Ð—Ð°Ð²Ñ‚Ñ€Ð° Ð²] LT",
                        lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",
                        nextWeek: function(a) {
                            if (a.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd [Ð²] LT" : "[Ð’] dddd [Ð²] LT";
                            switch (this.day()) {
                                case 0:
                                    return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÐµÐµ] dddd [Ð²] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹] dddd [Ð²] LT";
                                case 3:
                                case 5:
                                case 6:
                                    return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ] dddd [Ð²] LT"
                            }
                        },
                        lastWeek: function(a) {
                            if (a.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd [Ð²] LT" : "[Ð’] dddd [Ð²] LT";
                            switch (this.day()) {
                                case 0:
                                    return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd [Ð²] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd [Ð²] LT";
                                case 3:
                                case 5:
                                case 6:
                                    return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd [Ð²] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "Ñ‡ÐµÑ€ÐµÐ· %s",
                        past: "%s Ð½Ð°Ð·Ð°Ð´",
                        s: "Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´",
                        m: c,
                        mm: c,
                        h: "Ñ‡Ð°Ñ",
                        hh: c,
                        d: "Ð´ÐµÐ½ÑŒ",
                        dd: c,
                        M: "Ð¼ÐµÑÑÑ†",
                        MM: c,
                        y: "Ð³Ð¾Ð´",
                        yy: c
                    },
                    meridiemParse: /Ð½Ð¾Ñ‡Ð¸|ÑƒÑ‚Ñ€Ð°|Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°/i,
                    isPM: function(a) {
                        return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°)$/.test(a)
                    },
                    meridiem: function(a, b, c) {
                        return 4 > a ? "Ð½Ð¾Ñ‡Ð¸" : 12 > a ? "ÑƒÑ‚Ñ€Ð°" : 17 > a ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡ÐµÑ€Ð°"
                    },
                    ordinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾|Ñ)/,
                    ordinal: function(a, b) {
                        switch (b) {
                            case "M":
                            case "d":
                            case "DDD":
                                return a + "-Ð¹";
                            case "D":
                                return a + "-Ð³Ð¾";
                            case "w":
                            case "W":
                                return a + "-Ñ";
                            default:
                                return a
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            return e
        }(), a.fullCalendar.datepickerLang("ru", "ru", {
            closeText: "Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ",
            prevText: "&#x3C;ÐŸÑ€ÐµÐ´",
            nextText: "Ð¡Ð»ÐµÐ´&#x3E;",
            currentText: "Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ",
            monthNames: ["Ð¯Ð½Ð²Ð°Ñ€ÑŒ", "Ð¤ÐµÐ²Ñ€Ð°Ð»ÑŒ", "ÐœÐ°Ñ€Ñ‚", "ÐÐ¿Ñ€ÐµÐ»ÑŒ", "ÐœÐ°Ð¹", "Ð˜ÑŽÐ½ÑŒ", "Ð˜ÑŽÐ»ÑŒ", "ÐÐ²Ð³ÑƒÑÑ‚", "Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ", "ÐžÐºÑ‚ÑÐ±Ñ€ÑŒ", "ÐÐ¾ÑÐ±Ñ€ÑŒ", "Ð”ÐµÐºÐ°Ð±Ñ€ÑŒ"],
            monthNamesShort: ["Ð¯Ð½Ð²", "Ð¤ÐµÐ²", "ÐœÐ°Ñ€", "ÐÐ¿Ñ€", "ÐœÐ°Ð¹", "Ð˜ÑŽÐ½", "Ð˜ÑŽÐ»", "ÐÐ²Ð³", "Ð¡ÐµÐ½", "ÐžÐºÑ‚", "ÐÐ¾Ñ", "Ð”ÐµÐº"],
            dayNames: ["Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ", "Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº", "Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº", "ÑÑ€ÐµÐ´Ð°", "Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³", "Ð¿ÑÑ‚Ð½Ð¸Ñ†Ð°", "ÑÑƒÐ±Ð±Ð¾Ñ‚Ð°"],
            dayNamesShort: ["Ð²ÑÐº", "Ð¿Ð½Ð´", "Ð²Ñ‚Ñ€", "ÑÑ€Ð´", "Ñ‡Ñ‚Ð²", "Ð¿Ñ‚Ð½", "ÑÐ±Ñ‚"],
            dayNamesMin: ["Ð’Ñ", "ÐŸÐ½", "Ð’Ñ‚", "Ð¡Ñ€", "Ð§Ñ‚", "ÐŸÑ‚", "Ð¡Ð±"],
            weekHeader: "ÐÐµÐ´",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("ru", {
            buttonText: {
                month: "ÐœÐµÑÑÑ†",
                week: "ÐÐµÐ´ÐµÐ»Ñ",
                day: "Ð”ÐµÐ½ÑŒ",
                list: "ÐŸÐ¾Ð²ÐµÑÑ‚ÐºÐ° Ð´Ð½Ñ"
            },
            allDayText: "Ð’ÐµÑÑŒ Ð´ÐµÐ½ÑŒ",
            eventLimitText: function(a) {
                return "+ ÐµÑ‰Ñ‘ " + a
            }
        })
    }(),
    function() {
        ! function() {
            "use strict";

            function a(a) {
                return a > 1 && 5 > a
            }

            function c(b, c, d, e) {
                var f = b + " ";
                switch (d) {
                    case "s":
                        return c || e ? "pÃ¡r sekÃºnd" : "pÃ¡r sekundami";
                    case "m":
                        return c ? "minÃºta" : e ? "minÃºtu" : "minÃºtou";
                    case "mm":
                        return c || e ? f + (a(b) ? "minÃºty" : "minÃºt") : f + "minÃºtami";
                    case "h":
                        return c ? "hodina" : e ? "hodinu" : "hodinou";
                    case "hh":
                        return c || e ? f + (a(b) ? "hodiny" : "hodÃ­n") : f + "hodinami";
                    case "d":
                        return c || e ? "deÅˆ" : "dÅˆom";
                    case "dd":
                        return c || e ? f + (a(b) ? "dni" : "dnÃ­") : f + "dÅˆami";
                    case "M":
                        return c || e ? "mesiac" : "mesiacom";
                    case "MM":
                        return c || e ? f + (a(b) ? "mesiace" : "mesiacov") : f + "mesiacmi";
                    case "y":
                        return c || e ? "rok" : "rokom";
                    case "yy":
                        return c || e ? f + (a(b) ? "roky" : "rokov") : f + "rokmi"
                }
            }
            var d = "januÃ¡r_februÃ¡r_marec_aprÃ­l_mÃ¡j_jÃºn_jÃºl_august_september_oktÃ³ber_november_december".split("_"),
                e = "jan_feb_mar_apr_mÃ¡j_jÃºn_jÃºl_aug_sep_okt_nov_dec".split("_"),
                f = (b.defineLocale || b.lang).call(b, "sk", {
                    months: d,
                    monthsShort: e,
                    weekdays: "nedeÄ¾a_pondelok_utorok_streda_Å¡tvrtok_piatok_sobota".split("_"),
                    weekdaysShort: "ne_po_ut_st_Å¡t_pi_so".split("_"),
                    weekdaysMin: "ne_po_ut_st_Å¡t_pi_so".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[dnes o] LT",
                        nextDay: "[zajtra o] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v nedeÄ¾u o] LT";
                                case 1:
                                case 2:
                                    return "[v] dddd [o] LT";
                                case 3:
                                    return "[v stredu o] LT";
                                case 4:
                                    return "[vo Å¡tvrtok o] LT";
                                case 5:
                                    return "[v piatok o] LT";
                                case 6:
                                    return "[v sobotu o] LT"
                            }
                        },
                        lastDay: "[vÄera o] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[minulÃº nedeÄ¾u o] LT";
                                case 1:
                                case 2:
                                    return "[minulÃ½] dddd [o] LT";
                                case 3:
                                    return "[minulÃº stredu o] LT";
                                case 4:
                                case 5:
                                    return "[minulÃ½] dddd [o] LT";
                                case 6:
                                    return "[minulÃº sobotu o] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "pred %s",
                        s: c,
                        m: c,
                        mm: c,
                        h: c,
                        hh: c,
                        d: c,
                        dd: c,
                        M: c,
                        MM: c,
                        y: c,
                        yy: c
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                });
            return f
        }(), a.fullCalendar.datepickerLang("sk", "sk", {
            closeText: "ZavrieÅ¥",
            prevText: "&#x3C;PredchÃ¡dzajÃºci",
            nextText: "NasledujÃºci&#x3E;",
            currentText: "Dnes",
            monthNames: ["januÃ¡r", "februÃ¡r", "marec", "aprÃ­l", "mÃ¡j", "jÃºn", "jÃºl", "august", "september", "oktÃ³ber", "november", "december"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "MÃ¡j", "JÃºn", "JÃºl", "Aug", "Sep", "Okt", "Nov", "Dec"],
            dayNames: ["nedeÄ¾a", "pondelok", "utorok", "streda", "Å¡tvrtok", "piatok", "sobota"],
            dayNamesShort: ["Ned", "Pon", "Uto", "Str", "Å tv", "Pia", "Sob"],
            dayNamesMin: ["Ne", "Po", "Ut", "St", "Å t", "Pia", "So"],
            weekHeader: "Ty",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("sk", {
            buttonText: {
                month: "Mesiac",
                week: "TÃ½Å¾deÅˆ",
                day: "DeÅˆ",
                list: "Rozvrh"
            },
            allDayText: "CelÃ½ deÅˆ",
            eventLimitText: function(a) {
                return "+ÄalÅ¡ie: " + a
            }
        })
    }(),
    function() {
        ! function() {
            "use strict";

            function a(a, b, c, d) {
                var e = a + " ";
                switch (c) {
                    case "s":
                        return b || d ? "nekaj sekund" : "nekaj sekundami";
                    case "m":
                        return b ? "ena minuta" : "eno minuto";
                    case "mm":
                        return e += 1 === a ? b ? "minuta" : "minuto" : 2 === a ? b || d ? "minuti" : "minutama" : 5 > a ? b || d ? "minute" : "minutami" : b || d ? "minut" : "minutami";
                    case "h":
                        return b ? "ena ura" : "eno uro";
                    case "hh":
                        return e += 1 === a ? b ? "ura" : "uro" : 2 === a ? b || d ? "uri" : "urama" : 5 > a ? b || d ? "ure" : "urami" : b || d ? "ur" : "urami";
                    case "d":
                        return b || d ? "en dan" : "enim dnem";
                    case "dd":
                        return e += 1 === a ? b || d ? "dan" : "dnem" : 2 === a ? b || d ? "dni" : "dnevoma" : b || d ? "dni" : "dnevi";
                    case "M":
                        return b || d ? "en mesec" : "enim mesecem";
                    case "MM":
                        return e += 1 === a ? b || d ? "mesec" : "mesecem" : 2 === a ? b || d ? "meseca" : "mesecema" : 5 > a ? b || d ? "mesece" : "meseci" : b || d ? "mesecev" : "meseci";
                    case "y":
                        return b || d ? "eno leto" : "enim letom";
                    case "yy":
                        return e += 1 === a ? b || d ? "leto" : "letom" : 2 === a ? b || d ? "leti" : "letoma" : 5 > a ? b || d ? "leta" : "leti" : b || d ? "let" : "leti"
                }
            }
            var c = (b.defineLocale || b.lang).call(b, "sl", {
                months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedelja_ponedeljek_torek_sreda_Äetrtek_petek_sobota".split("_"),
                weekdaysShort: "ned._pon._tor._sre._Äet._pet._sob.".split("_"),
                weekdaysMin: "ne_po_to_sr_Äe_pe_so".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danes ob] LT",
                    nextDay: "[jutri ob] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v] [nedeljo] [ob] LT";
                            case 3:
                                return "[v] [sredo] [ob] LT";
                            case 6:
                                return "[v] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[v] dddd [ob] LT"
                        }
                    },
                    lastDay: "[vÄeraj ob] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[prejÅ¡njo] [nedeljo] [ob] LT";
                            case 3:
                                return "[prejÅ¡njo] [sredo] [ob] LT";
                            case 6:
                                return "[prejÅ¡njo] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prejÅ¡nji] dddd [ob] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Äez %s",
                    past: "pred %s",
                    s: a,
                    m: a,
                    mm: a,
                    h: a,
                    hh: a,
                    d: a,
                    dd: a,
                    M: a,
                    MM: a,
                    y: a,
                    yy: a
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return c
        }(), a.fullCalendar.datepickerLang("sl", "sl", {
            closeText: "Zapri",
            prevText: "&#x3C;PrejÅ¡nji",
            nextText: "Naslednji&#x3E;",
            currentText: "Trenutni",
            monthNames: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
            dayNames: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "ÄŒetrtek", "Petek", "Sobota"],
            dayNamesShort: ["Ned", "Pon", "Tor", "Sre", "ÄŒet", "Pet", "Sob"],
            dayNamesMin: ["Ne", "Po", "To", "Sr", "ÄŒe", "Pe", "So"],
            weekHeader: "Teden",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("sl", {
            buttonText: {
                month: "Mesec",
                week: "Teden",
                day: "Dan",
                list: "Dnevni red"
            },
            allDayText: "Ves dan",
            eventLimitText: "veÄ"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = {
                    words: {
                        m: ["Ñ˜ÐµÐ´Ð°Ð½ Ð¼Ð¸Ð½ÑƒÑ‚", "Ñ˜ÐµÐ´Ð½Ðµ Ð¼Ð¸Ð½ÑƒÑ‚Ðµ"],
                        mm: ["Ð¼Ð¸Ð½ÑƒÑ‚", "Ð¼Ð¸Ð½ÑƒÑ‚Ðµ", "Ð¼Ð¸Ð½ÑƒÑ‚Ð°"],
                        h: ["Ñ˜ÐµÐ´Ð°Ð½ ÑÐ°Ñ‚", "Ñ˜ÐµÐ´Ð½Ð¾Ð³ ÑÐ°Ñ‚Ð°"],
                        hh: ["ÑÐ°Ñ‚", "ÑÐ°Ñ‚Ð°", "ÑÐ°Ñ‚Ð¸"],
                        dd: ["Ð´Ð°Ð½", "Ð´Ð°Ð½Ð°", "Ð´Ð°Ð½Ð°"],
                        MM: ["Ð¼ÐµÑÐµÑ†", "Ð¼ÐµÑÐµÑ†Ð°", "Ð¼ÐµÑÐµÑ†Ð¸"],
                        yy: ["Ð³Ð¾Ð´Ð¸Ð½Ð°", "Ð³Ð¾Ð´Ð¸Ð½Ðµ", "Ð³Ð¾Ð´Ð¸Ð½Ð°"]
                    },
                    correctGrammaticalCase: function(a, b) {
                        return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2]
                    },
                    translate: function(b, c, d) {
                        var e = a.words[d];
                        return 1 === d.length ? c ? e[0] : e[1] : b + " " + a.correctGrammaticalCase(b, e)
                    }
                },
                c = (b.defineLocale || b.lang).call(b, "sr-cyrl", {
                    months: "Ñ˜Ð°Ð½ÑƒÐ°Ñ€_Ñ„ÐµÐ±Ñ€ÑƒÐ°Ñ€_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€_Ð¾ÐºÑ‚Ð¾Ð±Ð°Ñ€_Ð½Ð¾Ð²ÐµÐ¼Ð±Ð°Ñ€_Ð´ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€".split("_"),
                    monthsShort: "Ñ˜Ð°Ð½._Ñ„ÐµÐ±._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³._ÑÐµÐ¿._Ð¾ÐºÑ‚._Ð½Ð¾Ð²._Ð´ÐµÑ†.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Ð½ÐµÐ´ÐµÑ™Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™Ð°Ðº_ÑƒÑ‚Ð¾Ñ€Ð°Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð°Ðº_Ð¿ÐµÑ‚Ð°Ðº_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
                    weekdaysShort: "Ð½ÐµÐ´._Ð¿Ð¾Ð½._ÑƒÑ‚Ð¾._ÑÑ€Ðµ._Ñ‡ÐµÑ‚._Ð¿ÐµÑ‚._ÑÑƒÐ±.".split("_"),
                    weekdaysMin: "Ð½Ðµ_Ð¿Ð¾_ÑƒÑ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_ÑÑƒ".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[Ð´Ð°Ð½Ð°Ñ Ñƒ] LT",
                        nextDay: "[ÑÑƒÑ‚Ñ€Ð° Ñƒ] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[Ñƒ] [Ð½ÐµÐ´ÐµÑ™Ñƒ] [Ñƒ] LT";
                                case 3:
                                    return "[Ñƒ] [ÑÑ€ÐµÐ´Ñƒ] [Ñƒ] LT";
                                case 6:
                                    return "[Ñƒ] [ÑÑƒÐ±Ð¾Ñ‚Ñƒ] [Ñƒ] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[Ñƒ] dddd [Ñƒ] LT"
                            }
                        },
                        lastDay: "[Ñ˜ÑƒÑ‡Ðµ Ñƒ] LT",
                        lastWeek: function() {
                            var a = ["[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [Ð½ÐµÐ´ÐµÑ™Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [ÑƒÑ‚Ð¾Ñ€ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑ€ÐµÐ´Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿ÐµÑ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑƒÐ±Ð¾Ñ‚Ðµ] [Ñƒ] LT"];
                            return a[this.day()]
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "Ð·Ð° %s",
                        past: "Ð¿Ñ€Ðµ %s",
                        s: "Ð½ÐµÐºÐ¾Ð»Ð¸ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",
                        m: a.translate,
                        mm: a.translate,
                        h: a.translate,
                        hh: a.translate,
                        d: "Ð´Ð°Ð½",
                        dd: a.translate,
                        M: "Ð¼ÐµÑÐµÑ†",
                        MM: a.translate,
                        y: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ",
                        yy: a.translate
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            return c
        }(), a.fullCalendar.datepickerLang("sr-cyrl", "sr", {
            closeText: "Ð—Ð°Ñ‚Ð²Ð¾Ñ€Ð¸",
            prevText: "&#x3C;",
            nextText: "&#x3E;",
            currentText: "Ð”Ð°Ð½Ð°Ñ",
            monthNames: ["ÐˆÐ°Ð½ÑƒÐ°Ñ€", "Ð¤ÐµÐ±Ñ€ÑƒÐ°Ñ€", "ÐœÐ°Ñ€Ñ‚", "ÐÐ¿Ñ€Ð¸Ð»", "ÐœÐ°Ñ˜", "ÐˆÑƒÐ½", "ÐˆÑƒÐ»", "ÐÐ²Ð³ÑƒÑÑ‚", "Ð¡ÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€", "ÐžÐºÑ‚Ð¾Ð±Ð°Ñ€", "ÐÐ¾Ð²ÐµÐ¼Ð±Ð°Ñ€", "Ð”ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€"],
            monthNamesShort: ["ÐˆÐ°Ð½", "Ð¤ÐµÐ±", "ÐœÐ°Ñ€", "ÐÐ¿Ñ€", "ÐœÐ°Ñ˜", "ÐˆÑƒÐ½", "ÐˆÑƒÐ»", "ÐÐ²Ð³", "Ð¡ÐµÐ¿", "ÐžÐºÑ‚", "ÐÐ¾Ð²", "Ð”ÐµÑ†"],
            dayNames: ["ÐÐµÐ´ÐµÑ™Ð°", "ÐŸÐ¾Ð½ÐµÐ´ÐµÑ™Ð°Ðº", "Ð£Ñ‚Ð¾Ñ€Ð°Ðº", "Ð¡Ñ€ÐµÐ´Ð°", "Ð§ÐµÑ‚Ð²Ñ€Ñ‚Ð°Ðº", "ÐŸÐµÑ‚Ð°Ðº", "Ð¡ÑƒÐ±Ð¾Ñ‚Ð°"],
            dayNamesShort: ["ÐÐµÐ´", "ÐŸÐ¾Ð½", "Ð£Ñ‚Ð¾", "Ð¡Ñ€Ðµ", "Ð§ÐµÑ‚", "ÐŸÐµÑ‚", "Ð¡ÑƒÐ±"],
            dayNamesMin: ["ÐÐµ", "ÐŸÐ¾", "Ð£Ñ‚", "Ð¡Ñ€", "Ð§Ðµ", "ÐŸÐµ", "Ð¡Ñƒ"],
            weekHeader: "Ð¡ÐµÐ´",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("sr-cyrl", {
            buttonText: {
                month: "ÐœÐµÑÐµÑ†",
                week: "ÐÐµÐ´ÐµÑ™Ð°",
                day: "Ð”Ð°Ð½",
                list: "ÐŸÐ»Ð°Ð½ÐµÑ€"
            },
            allDayText: "Ð¦ÐµÐ¾ Ð´Ð°Ð½",
            eventLimitText: function(a) {
                return "+ Ñ˜Ð¾Ñˆ " + a
            }
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = {
                    words: {
                        m: ["jedan minut", "jedne minute"],
                        mm: ["minut", "minute", "minuta"],
                        h: ["jedan sat", "jednog sata"],
                        hh: ["sat", "sata", "sati"],
                        dd: ["dan", "dana", "dana"],
                        MM: ["mesec", "meseca", "meseci"],
                        yy: ["godina", "godine", "godina"]
                    },
                    correctGrammaticalCase: function(a, b) {
                        return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2]
                    },
                    translate: function(b, c, d) {
                        var e = a.words[d];
                        return 1 === d.length ? c ? e[0] : e[1] : b + " " + a.correctGrammaticalCase(b, e)
                    }
                },
                c = (b.defineLocale || b.lang).call(b, "sr", {
                    months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedelja_ponedeljak_utorak_sreda_Äetvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sre._Äet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedelju] [u] LT";
                                case 3:
                                    return "[u] [sredu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[juÄe u] LT",
                        lastWeek: function() {
                            var a = ["[proÅ¡le] [nedelje] [u] LT", "[proÅ¡log] [ponedeljka] [u] LT", "[proÅ¡log] [utorka] [u] LT", "[proÅ¡le] [srede] [u] LT", "[proÅ¡log] [Äetvrtka] [u] LT", "[proÅ¡log] [petka] [u] LT", "[proÅ¡le] [subote] [u] LT"];
                            return a[this.day()]
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "pre %s",
                        s: "nekoliko sekundi",
                        m: a.translate,
                        mm: a.translate,
                        h: a.translate,
                        hh: a.translate,
                        d: "dan",
                        dd: a.translate,
                        M: "mesec",
                        MM: a.translate,
                        y: "godinu",
                        yy: a.translate
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            return c
        }(), a.fullCalendar.datepickerLang("sr", "sr", {
            closeText: "Ð—Ð°Ñ‚Ð²Ð¾Ñ€Ð¸",
            prevText: "&#x3C;",
            nextText: "&#x3E;",
            currentText: "Ð”Ð°Ð½Ð°Ñ",
            monthNames: ["ÐˆÐ°Ð½ÑƒÐ°Ñ€", "Ð¤ÐµÐ±Ñ€ÑƒÐ°Ñ€", "ÐœÐ°Ñ€Ñ‚", "ÐÐ¿Ñ€Ð¸Ð»", "ÐœÐ°Ñ˜", "ÐˆÑƒÐ½", "ÐˆÑƒÐ»", "ÐÐ²Ð³ÑƒÑÑ‚", "Ð¡ÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€", "ÐžÐºÑ‚Ð¾Ð±Ð°Ñ€", "ÐÐ¾Ð²ÐµÐ¼Ð±Ð°Ñ€", "Ð”ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€"],
            monthNamesShort: ["ÐˆÐ°Ð½", "Ð¤ÐµÐ±", "ÐœÐ°Ñ€", "ÐÐ¿Ñ€", "ÐœÐ°Ñ˜", "ÐˆÑƒÐ½", "ÐˆÑƒÐ»", "ÐÐ²Ð³", "Ð¡ÐµÐ¿", "ÐžÐºÑ‚", "ÐÐ¾Ð²", "Ð”ÐµÑ†"],
            dayNames: ["ÐÐµÐ´ÐµÑ™Ð°", "ÐŸÐ¾Ð½ÐµÐ´ÐµÑ™Ð°Ðº", "Ð£Ñ‚Ð¾Ñ€Ð°Ðº", "Ð¡Ñ€ÐµÐ´Ð°", "Ð§ÐµÑ‚Ð²Ñ€Ñ‚Ð°Ðº", "ÐŸÐµÑ‚Ð°Ðº", "Ð¡ÑƒÐ±Ð¾Ñ‚Ð°"],
            dayNamesShort: ["ÐÐµÐ´", "ÐŸÐ¾Ð½", "Ð£Ñ‚Ð¾", "Ð¡Ñ€Ðµ", "Ð§ÐµÑ‚", "ÐŸÐµÑ‚", "Ð¡ÑƒÐ±"],
            dayNamesMin: ["ÐÐµ", "ÐŸÐ¾", "Ð£Ñ‚", "Ð¡Ñ€", "Ð§Ðµ", "ÐŸÐµ", "Ð¡Ñƒ"],
            weekHeader: "Ð¡ÐµÐ´",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("sr", {
            buttonText: {
                month: "ÐœÐµÑÐµÑ†",
                week: "ÐÐµÐ´ÐµÑ™Ð°",
                day: "Ð”Ð°Ð½",
                list: "ÐŸÐ»Ð°Ð½ÐµÑ€"
            },
            allDayText: "Ð¦ÐµÐ¾ Ð´Ð°Ð½",
            eventLimitText: function(a) {
                return "+ Ñ˜Ð¾Ñˆ " + a
            }
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "sv", {
                months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "sÃ¶ndag_mÃ¥ndag_tisdag_onsdag_torsdag_fredag_lÃ¶rdag".split("_"),
                weekdaysShort: "sÃ¶n_mÃ¥n_tis_ons_tor_fre_lÃ¶r".split("_"),
                weekdaysMin: "sÃ¶_mÃ¥_ti_on_to_fr_lÃ¶".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Idag] LT",
                    nextDay: "[Imorgon] LT",
                    lastDay: "[IgÃ¥r] LT",
                    nextWeek: "[PÃ¥] dddd LT",
                    lastWeek: "[I] dddd[s] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "fÃ¶r %s sedan",
                    s: "nÃ¥gra sekunder",
                    m: "en minut",
                    mm: "%d minuter",
                    h: "en timme",
                    hh: "%d timmar",
                    d: "en dag",
                    dd: "%d dagar",
                    M: "en mÃ¥nad",
                    MM: "%d mÃ¥nader",
                    y: "ett Ã¥r",
                    yy: "%d Ã¥r"
                },
                ordinalParse: /\d{1,2}(e|a)/,
                ordinal: function(a) {
                    var b = a % 10,
                        c = 1 === ~~(a % 100 / 10) ? "e" : 1 === b ? "a" : 2 === b ? "a" : "e";
                    return a + c
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("sv", "sv", {
            closeText: "StÃ¤ng",
            prevText: "&#xAB;FÃ¶rra",
            nextText: "NÃ¤sta&#xBB;",
            currentText: "Idag",
            monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            dayNamesShort: ["SÃ¶n", "MÃ¥n", "Tis", "Ons", "Tor", "Fre", "LÃ¶r"],
            dayNames: ["SÃ¶ndag", "MÃ¥ndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "LÃ¶rdag"],
            dayNamesMin: ["SÃ¶", "MÃ¥", "Ti", "On", "To", "Fr", "LÃ¶"],
            weekHeader: "Ve",
            dateFormat: "yy-mm-dd",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("sv", {
            buttonText: {
                month: "MÃ¥nad",
                week: "Vecka",
                day: "Dag",
                list: "Program"
            },
            allDayText: "Heldag",
            eventLimitText: "till"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "th", {
                months: "à¸¡à¸à¸£à¸²à¸„à¸¡_à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ_à¸¡à¸µà¸™à¸²à¸„à¸¡_à¹€à¸¡à¸©à¸²à¸¢à¸™_à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡_à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™_à¸à¸£à¸à¸Žà¸²à¸„à¸¡_à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡_à¸à¸±à¸™à¸¢à¸²à¸¢à¸™_à¸•à¸¸à¸¥à¸²à¸„à¸¡_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™_à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡".split("_"),
                monthsShort: "à¸¡à¸à¸£à¸²_à¸à¸¸à¸¡à¸ à¸²_à¸¡à¸µà¸™à¸²_à¹€à¸¡à¸©à¸²_à¸žà¸¤à¸©à¸ à¸²_à¸¡à¸´à¸–à¸¸à¸™à¸²_à¸à¸£à¸à¸Žà¸²_à¸ªà¸´à¸‡à¸«à¸²_à¸à¸±à¸™à¸¢à¸²_à¸•à¸¸à¸¥à¸²_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²_à¸˜à¸±à¸™à¸§à¸²".split("_"),
                monthsParseExact: !0,
                weekdays: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ªà¸šà¸”à¸µ_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),
                weekdaysShort: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ª_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),
                weekdaysMin: "à¸­à¸²._à¸ˆ._à¸­._à¸ž._à¸žà¸¤._à¸¨._à¸ª.".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ",
                    LTS: "H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ s à¸§à¸´à¸™à¸²à¸—à¸µ",
                    L: "YYYY/MM/DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY à¹€à¸§à¸¥à¸² H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ",
                    LLLL: "à¸§à¸±à¸™ddddà¸—à¸µà¹ˆ D MMMM YYYY à¹€à¸§à¸¥à¸² H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ"
                },
                meridiemParse: /à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡|à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡/,
                isPM: function(a) {
                    return "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡" === a
                },
                meridiem: function(a, b, c) {
                    return 12 > a ? "à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡" : "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡"
                },
                calendar: {
                    sameDay: "[à¸§à¸±à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
                    nextDay: "[à¸žà¸£à¸¸à¹ˆà¸‡à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
                    nextWeek: "dddd[à¸«à¸™à¹‰à¸² à¹€à¸§à¸¥à¸²] LT",
                    lastDay: "[à¹€à¸¡à¸·à¹ˆà¸­à¸§à¸²à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
                    lastWeek: "[à¸§à¸±à¸™]dddd[à¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§ à¹€à¸§à¸¥à¸²] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "à¸­à¸µà¸ %s",
                    past: "%sà¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§",
                    s: "à¹„à¸¡à¹ˆà¸à¸µà¹ˆà¸§à¸´à¸™à¸²à¸—à¸µ",
                    m: "1 à¸™à¸²à¸—à¸µ",
                    mm: "%d à¸™à¸²à¸—à¸µ",
                    h: "1 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
                    hh: "%d à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
                    d: "1 à¸§à¸±à¸™",
                    dd: "%d à¸§à¸±à¸™",
                    M: "1 à¹€à¸”à¸·à¸­à¸™",
                    MM: "%d à¹€à¸”à¸·à¸­à¸™",
                    y: "1 à¸›à¸µ",
                    yy: "%d à¸›à¸µ"
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("th", "th", {
            closeText: "à¸›à¸´à¸”",
            prevText: "&#xAB;&#xA0;à¸¢à¹‰à¸­à¸™",
            nextText: "à¸–à¸±à¸”à¹„à¸›&#xA0;&#xBB;",
            currentText: "à¸§à¸±à¸™à¸™à¸µà¹‰",
            monthNames: ["à¸¡à¸à¸£à¸²à¸„à¸¡", "à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ", "à¸¡à¸µà¸™à¸²à¸„à¸¡", "à¹€à¸¡à¸©à¸²à¸¢à¸™", "à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡", "à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™", "à¸à¸£à¸à¸Žà¸²à¸„à¸¡", "à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡", "à¸à¸±à¸™à¸¢à¸²à¸¢à¸™", "à¸•à¸¸à¸¥à¸²à¸„à¸¡", "à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™", "à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡"],
            monthNamesShort: ["à¸¡.à¸„.", "à¸.à¸ž.", "à¸¡à¸µ.à¸„.", "à¹€à¸¡.à¸¢.", "à¸ž.à¸„.", "à¸¡à¸´.à¸¢.", "à¸.à¸„.", "à¸ª.à¸„.", "à¸.à¸¢.", "à¸•.à¸„.", "à¸ž.à¸¢.", "à¸˜.à¸„."],
            dayNames: ["à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ", "à¸ˆà¸±à¸™à¸—à¸£à¹Œ", "à¸­à¸±à¸‡à¸„à¸²à¸£", "à¸žà¸¸à¸˜", "à¸žà¸¤à¸«à¸±à¸ªà¸šà¸”à¸µ", "à¸¨à¸¸à¸à¸£à¹Œ", "à¹€à¸ªà¸²à¸£à¹Œ"],
            dayNamesShort: ["à¸­à¸².", "à¸ˆ.", "à¸­.", "à¸ž.", "à¸žà¸¤.", "à¸¨.", "à¸ª."],
            dayNamesMin: ["à¸­à¸².", "à¸ˆ.", "à¸­.", "à¸ž.", "à¸žà¸¤.", "à¸¨.", "à¸ª."],
            weekHeader: "Wk",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("th", {
            buttonText: {
                month: "à¹€à¸”à¸·à¸­à¸™",
                week: "à¸ªà¸±à¸›à¸”à¸²à¸«à¹Œ",
                day: "à¸§à¸±à¸™",
                list: "à¹à¸œà¸™à¸‡à¸²à¸™"
            },
            allDayText: "à¸•à¸¥à¸­à¸”à¸§à¸±à¸™",
            eventLimitText: "à¹€à¸žà¸´à¹ˆà¸¡à¹€à¸•à¸´à¸¡"
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = {
                    1: "'inci",
                    5: "'inci",
                    8: "'inci",
                    70: "'inci",
                    80: "'inci",
                    2: "'nci",
                    7: "'nci",
                    20: "'nci",
                    50: "'nci",
                    3: "'Ã¼ncÃ¼",
                    4: "'Ã¼ncÃ¼",
                    100: "'Ã¼ncÃ¼",
                    6: "'ncÄ±",
                    9: "'uncu",
                    10: "'uncu",
                    30: "'uncu",
                    60: "'Ä±ncÄ±",
                    90: "'Ä±ncÄ±"
                },
                c = (b.defineLocale || b.lang).call(b, "tr", {
                    months: "Ocak_Åžubat_Mart_Nisan_MayÄ±s_Haziran_Temmuz_AÄŸustos_EylÃ¼l_Ekim_KasÄ±m_AralÄ±k".split("_"),
                    monthsShort: "Oca_Åžub_Mar_Nis_May_Haz_Tem_AÄŸu_Eyl_Eki_Kas_Ara".split("_"),
                    weekdays: "Pazar_Pazartesi_SalÄ±_Ã‡arÅŸamba_PerÅŸembe_Cuma_Cumartesi".split("_"),
                    weekdaysShort: "Paz_Pts_Sal_Ã‡ar_Per_Cum_Cts".split("_"),
                    weekdaysMin: "Pz_Pt_Sa_Ã‡a_Pe_Cu_Ct".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[bugÃ¼n saat] LT",
                        nextDay: "[yarÄ±n saat] LT",
                        nextWeek: "[haftaya] dddd [saat] LT",
                        lastDay: "[dÃ¼n] LT",
                        lastWeek: "[geÃ§en hafta] dddd [saat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s Ã¶nce",
                        s: "birkaÃ§ saniye",
                        m: "bir dakika",
                        mm: "%d dakika",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir gÃ¼n",
                        dd: "%d gÃ¼n",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir yÄ±l",
                        yy: "%d yÄ±l"
                    },
                    ordinalParse: /\d{1,2}'(inci|nci|Ã¼ncÃ¼|ncÄ±|uncu|Ä±ncÄ±)/,
                    ordinal: function(b) {
                        if (0 === b) return b + "'Ä±ncÄ±";
                        var c = b % 10,
                            d = b % 100 - c,
                            e = b >= 100 ? 100 : null;
                        return b + (a[c] || a[d] || a[e])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            return c
        }(), a.fullCalendar.datepickerLang("tr", "tr", {
            closeText: "kapat",
            prevText: "&#x3C;geri",
            nextText: "ileri&#x3e",
            currentText: "bugÃ¼n",
            monthNames: ["Ocak", "Åžubat", "Mart", "Nisan", "MayÄ±s", "Haziran", "Temmuz", "AÄŸustos", "EylÃ¼l", "Ekim", "KasÄ±m", "AralÄ±k"],
            monthNamesShort: ["Oca", "Åžub", "Mar", "Nis", "May", "Haz", "Tem", "AÄŸu", "Eyl", "Eki", "Kas", "Ara"],
            dayNames: ["Pazar", "Pazartesi", "SalÄ±", "Ã‡arÅŸamba", "PerÅŸembe", "Cuma", "Cumartesi"],
            dayNamesShort: ["Pz", "Pt", "Sa", "Ã‡a", "Pe", "Cu", "Ct"],
            dayNamesMin: ["Pz", "Pt", "Sa", "Ã‡a", "Pe", "Cu", "Ct"],
            weekHeader: "Hf",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("tr", {
            buttonText: {
                next: "ileri",
                month: "Ay",
                week: "Hafta",
                day: "GÃ¼n",
                list: "Ajanda"
            },
            allDayText: "TÃ¼m gÃ¼n",
            eventLimitText: "daha fazla"
        })
    }(),
    function() {
        ! function() {
            "use strict";

            function a(a, b) {
                var c = a.split("_");
                return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
            }

            function c(b, c, d) {
                var e = {
                    mm: c ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½",
                    hh: c ? "Ð³Ð¾Ð´Ð¸Ð½Ð°_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½",
                    dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð½Ñ–Ð²",
                    MM: "Ð¼Ñ–ÑÑÑ†ÑŒ_Ð¼Ñ–ÑÑÑ†Ñ–_Ð¼Ñ–ÑÑÑ†Ñ–Ð²",
                    yy: "Ñ€Ñ–Ðº_Ñ€Ð¾ÐºÐ¸_Ñ€Ð¾ÐºÑ–Ð²"
                };
                return "m" === d ? c ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ" : "h" === d ? c ? "Ð³Ð¾Ð´Ð¸Ð½Ð°" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ" : b + " " + a(e[d], +b)
            }

            function d(a, b) {
                var c = {
                        nominative: "Ð½ÐµÐ´Ñ–Ð»Ñ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
                        accusative: "Ð½ÐµÐ´Ñ–Ð»ÑŽ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†ÑŽ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),
                        genitive: "Ð½ÐµÐ´Ñ–Ð»Ñ–_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»ÐºÐ°_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€ÐºÐ°_ÑÐµÑ€ÐµÐ´Ð¸_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³Ð°_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ–_ÑÑƒÐ±Ð¾Ñ‚Ð¸".split("_")
                    },
                    d = /(\[[Ð’Ð²Ð£Ñƒ]\]) ?dddd/.test(b) ? "accusative" : /\[?(?:Ð¼Ð¸Ð½ÑƒÐ»Ð¾Ñ—|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½Ð¾Ñ—)? ?\] ?dddd/.test(b) ? "genitive" : "nominative";
                return c[d][a.day()]
            }

            function e(a) {
                return function() {
                    return a + "Ð¾" + (11 === this.hours() ? "Ð±" : "") + "] LT"
                }
            }
            var f = (b.defineLocale || b.lang).call(b, "uk", {
                months: {
                    format: "ÑÑ–Ñ‡Ð½Ñ_Ð»ÑŽÑ‚Ð¾Ð³Ð¾_Ð±ÐµÑ€ÐµÐ·Ð½Ñ_ÐºÐ²Ñ–Ñ‚Ð½Ñ_Ñ‚Ñ€Ð°Ð²Ð½Ñ_Ñ‡ÐµÑ€Ð²Ð½Ñ_Ð»Ð¸Ð¿Ð½Ñ_ÑÐµÑ€Ð¿Ð½Ñ_Ð²ÐµÑ€ÐµÑÐ½Ñ_Ð¶Ð¾Ð²Ñ‚Ð½Ñ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´Ð°_Ð³Ñ€ÑƒÐ´Ð½Ñ".split("_"),
                    standalone: "ÑÑ–Ñ‡ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ð¸Ð¹_Ð±ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ_ÐºÐ²Ñ–Ñ‚ÐµÐ½ÑŒ_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÐµÑ€Ð²ÐµÐ½ÑŒ_Ð»Ð¸Ð¿ÐµÐ½ÑŒ_ÑÐµÑ€Ð¿ÐµÐ½ÑŒ_Ð²ÐµÑ€ÐµÑÐµÐ½ÑŒ_Ð¶Ð¾Ð²Ñ‚ÐµÐ½ÑŒ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´_Ð³Ñ€ÑƒÐ´ÐµÐ½ÑŒ".split("_")
                },
                monthsShort: "ÑÑ–Ñ‡_Ð»ÑŽÑ‚_Ð±ÐµÑ€_ÐºÐ²Ñ–Ñ‚_Ñ‚Ñ€Ð°Ð²_Ñ‡ÐµÑ€Ð²_Ð»Ð¸Ð¿_ÑÐµÑ€Ð¿_Ð²ÐµÑ€_Ð¶Ð¾Ð²Ñ‚_Ð»Ð¸ÑÑ‚_Ð³Ñ€ÑƒÐ´".split("_"),
                weekdays: d,
                weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
                weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY Ñ€.",
                    LLL: "D MMMM YYYY Ñ€., HH:mm",
                    LLLL: "dddd, D MMMM YYYY Ñ€., HH:mm"
                },
                calendar: {
                    sameDay: e("[Ð¡ÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ– "),
                    nextDay: e("[Ð—Ð°Ð²Ñ‚Ñ€Ð° "),
                    lastDay: e("[Ð’Ñ‡Ð¾Ñ€Ð° "),
                    nextWeek: e("[Ð£] dddd ["),
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return e("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ñ—] dddd [").call(this);
                            case 1:
                            case 2:
                            case 4:
                                return e("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ð³Ð¾] dddd [").call(this)
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Ð·Ð° %s",
                    past: "%s Ñ‚Ð¾Ð¼Ñƒ",
                    s: "Ð´ÐµÐºÑ–Ð»ÑŒÐºÐ° ÑÐµÐºÑƒÐ½Ð´",
                    m: c,
                    mm: c,
                    h: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ",
                    hh: c,
                    d: "Ð´ÐµÐ½ÑŒ",
                    dd: c,
                    M: "Ð¼Ñ–ÑÑÑ†ÑŒ",
                    MM: c,
                    y: "Ñ€Ñ–Ðº",
                    yy: c
                },
                meridiemParse: /Ð½Ð¾Ñ‡Ñ–|Ñ€Ð°Ð½ÐºÑƒ|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°/,
                isPM: function(a) {
                    return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°)$/.test(a)
                },
                meridiem: function(a, b, c) {
                    return 4 > a ? "Ð½Ð¾Ñ‡Ñ–" : 12 > a ? "Ñ€Ð°Ð½ÐºÑƒ" : 17 > a ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡Ð¾Ñ€Ð°"
                },
                ordinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾)/,
                ordinal: function(a, b) {
                    switch (b) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return a + "-Ð¹";
                        case "D":
                            return a + "-Ð³Ð¾";
                        default:
                            return a
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return f
        }(), a.fullCalendar.datepickerLang("uk", "uk", {
            closeText: "Ð—Ð°ÐºÑ€Ð¸Ñ‚Ð¸",
            prevText: "&#x3C;",
            nextText: "&#x3E;",
            currentText: "Ð¡ÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ–",
            monthNames: ["Ð¡Ñ–Ñ‡ÐµÐ½ÑŒ", "Ð›ÑŽÑ‚Ð¸Ð¹", "Ð‘ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ", "ÐšÐ²Ñ–Ñ‚ÐµÐ½ÑŒ", "Ð¢Ñ€Ð°Ð²ÐµÐ½ÑŒ", "Ð§ÐµÑ€Ð²ÐµÐ½ÑŒ", "Ð›Ð¸Ð¿ÐµÐ½ÑŒ", "Ð¡ÐµÑ€Ð¿ÐµÐ½ÑŒ", "Ð’ÐµÑ€ÐµÑÐµÐ½ÑŒ", "Ð–Ð¾Ð²Ñ‚ÐµÐ½ÑŒ", "Ð›Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´", "Ð“Ñ€ÑƒÐ´ÐµÐ½ÑŒ"],
            monthNamesShort: ["Ð¡Ñ–Ñ‡", "Ð›ÑŽÑ‚", "Ð‘ÐµÑ€", "ÐšÐ²Ñ–", "Ð¢Ñ€Ð°", "Ð§ÐµÑ€", "Ð›Ð¸Ð¿", "Ð¡ÐµÑ€", "Ð’ÐµÑ€", "Ð–Ð¾Ð²", "Ð›Ð¸Ñ", "Ð“Ñ€Ñƒ"],
            dayNames: ["Ð½ÐµÐ´Ñ–Ð»Ñ", "Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº", "Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº", "ÑÐµÑ€ÐµÐ´Ð°", "Ñ‡ÐµÑ‚Ð²ÐµÑ€", "Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ", "ÑÑƒÐ±Ð¾Ñ‚Ð°"],
            dayNamesShort: ["Ð½ÐµÐ´", "Ð¿Ð½Ð´", "Ð²Ñ–Ð²", "ÑÑ€Ð´", "Ñ‡Ñ‚Ð²", "Ð¿Ñ‚Ð½", "ÑÐ±Ñ‚"],
            dayNamesMin: ["ÐÐ´", "ÐŸÐ½", "Ð’Ñ‚", "Ð¡Ñ€", "Ð§Ñ‚", "ÐŸÑ‚", "Ð¡Ð±"],
            weekHeader: "Ð¢Ð¸Ð¶",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("uk", {
            buttonText: {
                month: "ÐœÑ–ÑÑÑ†ÑŒ",
                week: "Ð¢Ð¸Ð¶Ð´ÐµÐ½ÑŒ",
                day: "Ð”ÐµÐ½ÑŒ",
                list: "ÐŸÐ¾Ñ€ÑÐ´Ð¾Ðº Ð´ÐµÐ½Ð½Ð¸Ð¹"
            },
            allDayText: "Ð£Ð²ÐµÑÑŒ Ð´ÐµÐ½ÑŒ",
            eventLimitText: function(a) {
                return "+Ñ‰Ðµ " + a + "..."
            }
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "vi", {
                months: "thÃ¡ng 1_thÃ¡ng 2_thÃ¡ng 3_thÃ¡ng 4_thÃ¡ng 5_thÃ¡ng 6_thÃ¡ng 7_thÃ¡ng 8_thÃ¡ng 9_thÃ¡ng 10_thÃ¡ng 11_thÃ¡ng 12".split("_"),
                monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
                monthsParseExact: !0,
                weekdays: "chá»§ nháº­t_thá»© hai_thá»© ba_thá»© tÆ°_thá»© nÄƒm_thá»© sÃ¡u_thá»© báº£y".split("_"),
                weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /sa|ch/i,
                isPM: function(a) {
                    return /^ch$/i.test(a)
                },
                meridiem: function(a, b, c) {
                    return 12 > a ? c ? "sa" : "SA" : c ? "ch" : "CH"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [nÄƒm] YYYY",
                    LLL: "D MMMM [nÄƒm] YYYY HH:mm",
                    LLLL: "dddd, D MMMM [nÄƒm] YYYY HH:mm",
                    l: "DD/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[HÃ´m nay lÃºc] LT",
                    nextDay: "[NgÃ y mai lÃºc] LT",
                    nextWeek: "dddd [tuáº§n tá»›i lÃºc] LT",
                    lastDay: "[HÃ´m qua lÃºc] LT",
                    lastWeek: "dddd [tuáº§n rá»“i lÃºc] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s tá»›i",
                    past: "%s trÆ°á»›c",
                    s: "vÃ i giÃ¢y",
                    m: "má»™t phÃºt",
                    mm: "%d phÃºt",
                    h: "má»™t giá»",
                    hh: "%d giá»",
                    d: "má»™t ngÃ y",
                    dd: "%d ngÃ y",
                    M: "má»™t thÃ¡ng",
                    MM: "%d thÃ¡ng",
                    y: "má»™t nÄƒm",
                    yy: "%d nÄƒm"
                },
                ordinalParse: /\d{1,2}/,
                ordinal: function(a) {
                    return a
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("vi", "vi", {
            closeText: "ÄÃ³ng",
            prevText: "&#x3C;TrÆ°á»›c",
            nextText: "Tiáº¿p&#x3E;",
            currentText: "HÃ´m nay",
            monthNames: ["ThÃ¡ng Má»™t", "ThÃ¡ng Hai", "ThÃ¡ng Ba", "ThÃ¡ng TÆ°", "ThÃ¡ng NÄƒm", "ThÃ¡ng SÃ¡u", "ThÃ¡ng Báº£y", "ThÃ¡ng TÃ¡m", "ThÃ¡ng ChÃ­n", "ThÃ¡ng MÆ°á»i", "ThÃ¡ng MÆ°á»i Má»™t", "ThÃ¡ng MÆ°á»i Hai"],
            monthNamesShort: ["ThÃ¡ng 1", "ThÃ¡ng 2", "ThÃ¡ng 3", "ThÃ¡ng 4", "ThÃ¡ng 5", "ThÃ¡ng 6", "ThÃ¡ng 7", "ThÃ¡ng 8", "ThÃ¡ng 9", "ThÃ¡ng 10", "ThÃ¡ng 11", "ThÃ¡ng 12"],
            dayNames: ["Chá»§ Nháº­t", "Thá»© Hai", "Thá»© Ba", "Thá»© TÆ°", "Thá»© NÄƒm", "Thá»© SÃ¡u", "Thá»© Báº£y"],
            dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            weekHeader: "Tu",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), a.fullCalendar.lang("vi", {
            buttonText: {
                month: "ThÃ¡ng",
                week: "TuÃ¢Ì€n",
                day: "NgÃ y",
                list: "Lá»‹ch biá»ƒu"
            },
            allDayText: "Cáº£ ngÃ y",
            eventLimitText: function(a) {
                return "+ thÃªm " + a
            }
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "zh-cn", {
                months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
                monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
                weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
                weekdaysShort: "å‘¨æ—¥_å‘¨ä¸€_å‘¨äºŒ_å‘¨ä¸‰_å‘¨å››_å‘¨äº”_å‘¨å…­".split("_"),
                weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
                longDateFormat: {
                    LT: "Ahç‚¹mmåˆ†",
                    LTS: "Ahç‚¹måˆ†sç§’",
                    L: "YYYY-MM-DD",
                    LL: "YYYYå¹´MMMDæ—¥",
                    LLL: "YYYYå¹´MMMDæ—¥Ahç‚¹mmåˆ†",
                    LLLL: "YYYYå¹´MMMDæ—¥ddddAhç‚¹mmåˆ†",
                    l: "YYYY-MM-DD",
                    ll: "YYYYå¹´MMMDæ—¥",
                    lll: "YYYYå¹´MMMDæ—¥Ahç‚¹mmåˆ†",
                    llll: "YYYYå¹´MMMDæ—¥ddddAhç‚¹mmåˆ†"
                },
                meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
                meridiemHour: function(a, b) {
                    return 12 === a && (a = 0), "å‡Œæ™¨" === b || "æ—©ä¸Š" === b || "ä¸Šåˆ" === b ? a : "ä¸‹åˆ" === b || "æ™šä¸Š" === b ? a + 12 : a >= 11 ? a : a + 12
                },
                meridiem: function(a, b, c) {
                    var d = 100 * a + b;
                    return 600 > d ? "å‡Œæ™¨" : 900 > d ? "æ—©ä¸Š" : 1130 > d ? "ä¸Šåˆ" : 1230 > d ? "ä¸­åˆ" : 1800 > d ? "ä¸‹åˆ" : "æ™šä¸Š"
                },
                calendar: {
                    sameDay: function() {
                        return 0 === this.minutes() ? "[ä»Šå¤©]Ah[ç‚¹æ•´]" : "[ä»Šå¤©]LT"
                    },
                    nextDay: function() {
                        return 0 === this.minutes() ? "[æ˜Žå¤©]Ah[ç‚¹æ•´]" : "[æ˜Žå¤©]LT"
                    },
                    lastDay: function() {
                        return 0 === this.minutes() ? "[æ˜¨å¤©]Ah[ç‚¹æ•´]" : "[æ˜¨å¤©]LT"
                    },
                    nextWeek: function() {
                        var a, c;
                        return a = b().startOf("week"), c = this.diff(a, "days") >= 7 ? "[ä¸‹]" : "[æœ¬]", 0 === this.minutes() ? c + "dddAhç‚¹æ•´" : c + "dddAhç‚¹mm"
                    },
                    lastWeek: function() {
                        var a, c;
                        return a = b().startOf("week"), c = this.unix() < a.unix() ? "[ä¸Š]" : "[æœ¬]", 0 === this.minutes() ? c + "dddAhç‚¹æ•´" : c + "dddAhç‚¹mm"
                    },
                    sameElse: "LL"
                },
                ordinalParse: /\d{1,2}(æ—¥|æœˆ|å‘¨)/,
                ordinal: function(a, b) {
                    switch (b) {
                        case "d":
                        case "D":
                        case "DDD":
                            return a + "æ—¥";
                        case "M":
                            return a + "æœˆ";
                        case "w":
                        case "W":
                            return a + "å‘¨";
                        default:
                            return a
                    }
                },
                relativeTime: {
                    future: "%så†…",
                    past: "%så‰",
                    s: "å‡ ç§’",
                    m: "1 åˆ†é’Ÿ",
                    mm: "%d åˆ†é’Ÿ",
                    h: "1 å°æ—¶",
                    hh: "%d å°æ—¶",
                    d: "1 å¤©",
                    dd: "%d å¤©",
                    M: "1 ä¸ªæœˆ",
                    MM: "%d ä¸ªæœˆ",
                    y: "1 å¹´",
                    yy: "%d å¹´"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("zh-cn", "zh-CN", {
            closeText: "å…³é—­",
            prevText: "&#x3C;ä¸Šæœˆ",
            nextText: "ä¸‹æœˆ&#x3E;",
            currentText: "ä»Šå¤©",
            monthNames: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"],
            monthNamesShort: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"],
            dayNames: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"],
            dayNamesShort: ["å‘¨æ—¥", "å‘¨ä¸€", "å‘¨äºŒ", "å‘¨ä¸‰", "å‘¨å››", "å‘¨äº”", "å‘¨å…­"],
            dayNamesMin: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
            weekHeader: "å‘¨",
            dateFormat: "yy-mm-dd",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: "å¹´"
        }), a.fullCalendar.lang("zh-cn", {
            buttonText: {
                month: "æœˆ",
                week: "å‘¨",
                day: "æ—¥",
                list: "æ—¥ç¨‹"
            },
            allDayText: "å…¨å¤©",
            eventLimitText: function(a) {
                return "å¦å¤– " + a + " ä¸ª"
            }
        })
    }(),
    function() {
        ! function() {
            "use strict";
            var a = (b.defineLocale || b.lang).call(b, "zh-tw", {
                months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
                monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
                weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
                weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
                weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
                longDateFormat: {
                    LT: "Ahé»žmmåˆ†",
                    LTS: "Ahé»žmåˆ†sç§’",
                    L: "YYYYå¹´MMMDæ—¥",
                    LL: "YYYYå¹´MMMDæ—¥",
                    LLL: "YYYYå¹´MMMDæ—¥Ahé»žmmåˆ†",
                    LLLL: "YYYYå¹´MMMDæ—¥ddddAhé»žmmåˆ†",
                    l: "YYYYå¹´MMMDæ—¥",
                    ll: "YYYYå¹´MMMDæ—¥",
                    lll: "YYYYå¹´MMMDæ—¥Ahé»žmmåˆ†",
                    llll: "YYYYå¹´MMMDæ—¥ddddAhé»žmmåˆ†"
                },
                meridiemParse: /æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
                meridiemHour: function(a, b) {
                    return 12 === a && (a = 0), "æ—©ä¸Š" === b || "ä¸Šåˆ" === b ? a : "ä¸­åˆ" === b ? a >= 11 ? a : a + 12 : "ä¸‹åˆ" === b || "æ™šä¸Š" === b ? a + 12 : void 0
                },
                meridiem: function(a, b, c) {
                    var d = 100 * a + b;
                    return 900 > d ? "æ—©ä¸Š" : 1130 > d ? "ä¸Šåˆ" : 1230 > d ? "ä¸­åˆ" : 1800 > d ? "ä¸‹åˆ" : "æ™šä¸Š"
                },
                calendar: {
                    sameDay: "[ä»Šå¤©]LT",
                    nextDay: "[æ˜Žå¤©]LT",
                    nextWeek: "[ä¸‹]ddddLT",
                    lastDay: "[æ˜¨å¤©]LT",
                    lastWeek: "[ä¸Š]ddddLT",
                    sameElse: "L"
                },
                ordinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
                ordinal: function(a, b) {
                    switch (b) {
                        case "d":
                        case "D":
                        case "DDD":
                            return a + "æ—¥";
                        case "M":
                            return a + "æœˆ";
                        case "w":
                        case "W":
                            return a + "é€±";
                        default:
                            return a
                    }
                },
                relativeTime: {
                    future: "%så…§",
                    past: "%så‰",
                    s: "å¹¾ç§’",
                    m: "1åˆ†é˜",
                    mm: "%dåˆ†é˜",
                    h: "1å°æ™‚",
                    hh: "%då°æ™‚",
                    d: "1å¤©",
                    dd: "%då¤©",
                    M: "1å€‹æœˆ",
                    MM: "%då€‹æœˆ",
                    y: "1å¹´",
                    yy: "%då¹´"
                }
            });
            return a
        }(), a.fullCalendar.datepickerLang("zh-tw", "zh-TW", {
            closeText: "é—œé–‰",
            prevText: "&#x3C;ä¸Šæœˆ",
            nextText: "ä¸‹æœˆ&#x3E;",
            currentText: "ä»Šå¤©",
            monthNames: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"],
            monthNamesShort: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"],
            dayNames: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"],
            dayNamesShort: ["å‘¨æ—¥", "å‘¨ä¸€", "å‘¨äºŒ", "å‘¨ä¸‰", "å‘¨å››", "å‘¨äº”", "å‘¨å…­"],
            dayNamesMin: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
            weekHeader: "å‘¨",
            dateFormat: "yy/mm/dd",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: "å¹´"
        }), a.fullCalendar.lang("zh-tw", {
            buttonText: {
                month: "æœˆ",
                week: "é€±",
                day: "å¤©",
                list: "å¾…è¾¦äº‹é …"
            },
            allDayText: "å…¨å¤©",
            eventLimitText: "æ›´å¤š"
        })
    }(), (b.locale || b.lang).call(b, "en"), a.fullCalendar.lang("en"), a.datepicker && a.datepicker.setDefaults(a.datepicker.regional[""])
});