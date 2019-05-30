$(function(){
  $("i").click(function(){
      $(".scarlet").toggle(1000);
      $(".scarlet2").toggle(1000);
      
  });
    $("#up").click(function(){
        $("body").animate({scrollTop:"0"},1000)
    })
});