$(document).ready(function(){
    $(".accordion h3").click(function(){
        $(".bodysection__para").slideUp();
        $(this).next().slideDown();
        $(".accordion h3").removeClass("active");
        $(this).addClass("active");
    });
});

$(document).ready(function(){
    let url=window.location.href;
    let a=url.split('/').pop();
    $(".header__customnavbar a").each(function()
    {
        var b=$(this).attr("href");
        if(b==a)
        {
            $(this).addClass('active');
        }
    });
});
