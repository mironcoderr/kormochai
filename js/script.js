$(".menu_form input").click(function (){
    $(".menu_filter").fadeIn();
    
});

$(".menu_form button").click(function (){
    $(".menu_filter").fadeOut();
    
});




$(".full-list .job")
  .slice(0, 5)
  .show();
$(".full-list .job:hidden").css("opacity", 0);
$("#viewAll").on("click", function(e) {
  $(".full-list .job:hidden") // Added :hidden
    .slice(0, 2)
    .slideDown("slow")
    .animate(
      {
        opacity: 1
      },
      {
        queue: false,
        duration: "slow"
      }
    );
  // We need to check the count of just the hidden items
  if ($(".full-list .job:hidden").length == 0) {
    $("#viewAll").fadeOut("slow");
  }
  e.preventDefault();
});




$(function() {  
    $(".nice_bar").niceScroll();
    
});



$('.counter').counterUp({
    delay: 20,
    time: 2000
});













    