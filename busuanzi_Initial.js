$(document).ready(window.timer = setInterval(function() {
    if (parseInt($("#busuanzi_value_site_pv").html()) {
        clearInterval(window.timer);
    }
    // 设置初始值
    setInitialCount(467);
},
500);

);

function setInitialCount(num) {
    var busuanziSiteOffset = parseInt(num);

    if ($("#busuanzi_container_site_pv").css("display") != "none") {
        // 同理id也可以是busuanzi_container_page_pv
        // busuanzi_container_site_uv
        $("#busuanzi_value_site_pv").html(parseInt($("#busuanzi_value_site_pv").html()) + busuanziSiteOffset);
    }

}