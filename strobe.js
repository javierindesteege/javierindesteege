$(function(){
  $("#raveBtn").on("click", function(){
    if($("#rave").hasClass('off')){
      $("#rave").addClass('on').removeClass('off');
    }else{
      $("#rave").removeClass('on').addClass('off');
    }
  })
})