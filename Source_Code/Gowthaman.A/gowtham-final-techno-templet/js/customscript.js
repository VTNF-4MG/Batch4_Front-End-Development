$(document).ready(function()
{
    let url=window.location.href;
    let filename=url.split('/').pop();
    $(".custom-navbar__menubar").each(function()
    {
        var a=$(this).attr("href");
        if(a==filename)
        {
            $(this).addClass('active');
        }
    });
});
