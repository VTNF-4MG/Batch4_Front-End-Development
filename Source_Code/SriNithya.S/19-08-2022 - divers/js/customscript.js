$(document).ready(function()
{
   $(".diverssection__mainaccordian h3").click(function(){
     $(".diverssection__paraaccordian").slideUp();
     $(this).next(".diverssection__paraaccordian").slideDown();
     $(".diverssection__mainaccordian").removeClass("active")
     $(this).addClass("active")
   });
});

$(document).ready(function()
{
  let url=window.location.href;
  let filename=url.split('/').pop();
  $(".headersection__item").each(function(){
    var a=$(this).attr("href");
    if(a==filename)
    {
      $(this).addClass("active");
    }

  });
});



   