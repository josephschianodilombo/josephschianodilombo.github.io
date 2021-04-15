
$(document).ready(function(){

  // Show / Hide menu (mobile)
  $(".showMenu").click(function(){
    $(".menuContainer").toggleClass("showHide");
  });

  // Fade in content
  function fadeIn() {
    $(".images, .legend").fadeIn(200);
    }
  setTimeout(fadeIn, 600);

});
