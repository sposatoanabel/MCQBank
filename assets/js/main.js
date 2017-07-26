/**
 * Created by asposato on 26/07/2017.
 */
$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 767) {
        $("#topNav").hide();
        $("#btnSubscribe").removeClass("pull-right").addClass("pull-left");

    } else if(viewportWidth > 767) {
        $("#topNav").show();
    }
});

$(document).ready(function(){
    $('#bottomNav').affix({offset: {top: 64} });
    $('.slide-active').affix({offset: {top: 64} });
});