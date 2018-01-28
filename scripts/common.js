$(document).ready(function () {
    $(".RU").on("click", function () {
        $(".circlSwich").addClass("swicher_animate");
    });
    $(".EN").on("click", function () {
        $(".circlSwich").removeClass("swicher_animate");
    });

    $(".comments__figure .comments__figure__captionImg a").mouseenter(function () {
        $(this).parent().parent().siblings(".comments__figure__brackets").children().addClass("comments__figure_hover");
        $(this).parent().siblings(".comments__figure__captioName").children().addClass("comments__figure_hover");
    });

    $(".comments__figure .comments__figure__captionImg a").mouseleave(function () {
        $(this).parent().parent().siblings(".comments__figure__brackets").children().removeClass("comments__figure_hover");
        $(this).parent().siblings(".comments__figure__captioName").children().removeClass("comments__figure_hover");
    });
    
    $(".sel_openClose_marcer i").on("click", function(){
        $(this).toggleClass("select_body_iconSpin");
        $(".select_body").slideToggle();
    });
    
    $(".select_list li").on("click", function(){
        let select_val = $(this).text();
        console.log(select_val);
        $("span.select_value").text(select_val);
        $("#hidden_input").val(select_val);
    });
    
    $(".form_button_submitWrap button").on("click", function(){
        $("#main_form").submit();
        console.log(56);
    });
    
    $('#service').click(function() {
        var scr = $("#target_1").offset();
        $('body,html').animate({
            scrollTop: scr.top,
        }, 1500);
    });
        
        $('#comments').click(function() {
        var scr = $("#target_2").offset();
        $('body,html').animate({
            scrollTop: scr.top,
        }, 1500);
    });
            
        $('#contects').click(function() {
        var scr = $("#target_3").offset();
        $('body,html').animate({
            scrollTop: scr.top,
        }, 1500);
    });
    
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    