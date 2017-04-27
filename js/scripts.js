$(function(){
  $(".radio").click(function(event){
    var animal = $("input:radio[name=animal]:checked").val();
  // $(this).children().toggleClass(".animals");

  if (animal === "baby_elephant") {
    $(".baby-elephant").show();
    $(".red-panda").hide();
    $(".munchkin-cat").hide();
  } else if (animal === "red_panda") {
    $(".red-panda").show();
    $(".baby-elephant").hide();
    $(".munchkin-cat").hide();
  } else {
    $(".munchkin-cat").show();
    $(".baby-elephant").hide();
    $(".red-panda").hide();
  }




  event.preventDefault();
  });
});
