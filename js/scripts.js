//carousel pause and play
$(function() {
  $(".carousel").carousel( { interval: 2000 } );
  $("#carouselButton").click(function(){
      if ($("#carouselButton").children("i").hasClass("fa-pause")) {
          $(".carousel").carousel("pause");
          $("#carouselButton").children("i").removeClass("fa-pause");
          $("#carouselButton").children("i").addClass("fa-play");
      } else {
          $(".carousel").carousel("cycle");
          $("#carouselButton").children("i").removeClass("fa-play");
          $("#carouselButton").children("i").addClass("fa-pause"); 
      }
  });

//Login button modal show
   $("#loginButton").click(function(){
    $("#loginModal").modal("show");
    // if ($(".close").modal("hide"));
 //Login button modal hide
  });
  $(".close").click(function(){
    $("#loginModal").modal("hide");

  });
//Reserve button modal show
    $("#reserveButton").click(function(){
    $("#reserveModal").modal("show")
    });
//Login button modal hide
    $(".close").click(function(){
        $("#reserveModal").modal("hide");
    
      });
  });
