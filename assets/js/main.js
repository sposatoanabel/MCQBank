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
    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
    });


    $("#readMoreBtn").click(function () {

        var readMoreTextElement = $(this).text();
        if (readMoreTextElement == "Read More") {
            $(this).text("Read Less");
            $("#infoMore").slideDown();
        } else {
            $(this).text("Read More");
            $("#infoMore").slideUp();
        }
    });

});

