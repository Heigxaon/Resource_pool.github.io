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