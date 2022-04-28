function copyAble(element) {
    var id = "copy-able-el";
    var scrollTop = document.documentElement.scrollTop;
    var copyElement = document.getElementById(id);
    copyElement || ((copyElement = document.createElement("textarea")), (copyElement.style.position = "absolute"), (copyElement.style.left = "-9999px"), (copyElement.style.top = scrollTop + "px"), (copyElement.id = id), document.body.appendChild(copyElement)),
    (copyElement.textContent = element.innerText);
    element = id;
    if (((element = "string" == typeof element ? document.querySelector(element) : element), navigator.userAgent.match(/ipad|ipod|iphone/i))) {
        var elementEditable = element.contentEditable,
        elementOnly = element.readOnly; (element.contentEditable = !0),
        (element.readOnly = !0);
        var documentRange = document.createRange();
        documentRange.selectNodeContents(element);
        var selection = window.getSelection();
        selection.removeAllRanges(),
        selection.addRange(documentRange),
        element.setSelectionRange(0, 999999),
        (element.contentEditable = elementEditable),
        (element.readOnly = elementOnly);
    } else {
        copyElement.select();
    }
    document.execCommand("copy");
    alert("复制成功！");
}

var __adobewebfontsappname__ = "dreamweaver"

var _hmt = _hmt || []; (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?9c23c02f4a782bd4919724479d6356a9";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

var bszCaller, bszTag; !
function() {
    var c, d, e, a = !1,
    b = [];
    ready = function(c) {
        return a || "interactive" === document.readyState || "complete" === document.readyState ? c.call(document) : b.push(function() {
            return c.call(this)
        }),
        this
    },
    d = function() {
        for (var a = 0,
        c = b.length; c > a; a++) b[a].apply(document);
        b = []
    },
    e = function() {
        a || (a = !0, d.call(window), document.removeEventListener ? document.removeEventListener("DOMContentLoaded", e, !1) : document.attachEvent && (document.detachEvent("onreadystatechange", e), window == window.top && (clearInterval(c), c = null)))
    },
    document.addEventListener ? document.addEventListener("DOMContentLoaded", e, !1) : document.attachEvent && (document.attachEvent("onreadystatechange",
    function() { / loaded | complete / .test(document.readyState) && e()
    }), window == window.top && (c = setInterval(function() {
        try {
            a || document.documentElement.doScroll("left")
        } catch(b) {
            return
        }
        e()
    },
    5)))
} (),
bszCaller = {
    fetch: function(a, b) {
        var c = "BusuanziCallback_" + Math.floor(1099511627776 * Math.random());
        window[c] = this.evalCall(b),
        a = a.replace("=BusuanziCallback", "=" + c),
        scriptTag = document.createElement("SCRIPT"),
        scriptTag.type = "text/javascript",
        scriptTag.defer = !0,
        scriptTag.src = a,
        scriptTag.referrerPolicy = "no-referrer-when-downgrade",
        document.getElementsByTagName("HEAD")[0].appendChild(scriptTag)
    },
    evalCall: function(a) {
        return function(b) {
            ready(function() {
                try {
                    a(b),
                    scriptTag.parentElement.removeChild(scriptTag)
                } catch(c) {
                    bszTag.hides()
                }
            })
        }
    }
},
bszCaller.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback",
function(a) {
    bszTag.texts(a),
    bszTag.shows()
}),
bszTag = {
    bszs: ["site_pv", "page_pv", "site_uv"],
    texts: function(a) {
        this.bszs.map(function(b) {
            var c = document.getElementById("busuanzi_value_" + b);
            c && (c.innerHTML = a[b])
        })
    },
    hides: function() {
        this.bszs.map(function(a) {
            var b = document.getElementById("busuanzi_container_" + a);
            b && (b.style.display = "none")
        })
    },
    shows: function() {
        this.bszs.map(function(a) {
            var b = document.getElementById("busuanzi_container_" + a);
            b && (b.style.display = "inline")
        })
    }
};