$(document).ready(function(){
    $(".accordian h3").click(function()
    {
        $(".diverssection__brief").slideUp();
       $(this).next().slideDown();
       $(".accordian h3").removeClass("active");
       $(this).addClass("active");
    });
 });
 $(document).ready(function()
{
    let url=window.location.href;
    let filename=url.split('/').pop();
    $(".header__customnavbar a").each(function()
    {
        var a=$(this).attr("href");
        if(a==filename)
        {
            $(this).addClass('active');
        }
    });
});