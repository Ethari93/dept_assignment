
$( document ).ready(function() {
  $( "#contact-us-form" ).validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    }
  });

  $(".menu-icon").click(function(){
    if($('.nav-content').hasClass("active")){
      $('.nav-content').removeClass("active");
      $("body").removeClass("nav-open");

      $(".nav-modal").hide();
    } else{
      $('.nav-content').addClass("active");
      $("body").addClass("nav-open");

      $(".nav-modal").show();
    }
  });

  var arrow='<svg class="selected-nav-item" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">'+
              '<path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>'+
            '</svg>';

  $(".modal-nav-item").on({
    mouseenter: function() {
        $(this).prepend(arrow);
        $(this).addClass('focused');
        $('.modal-nav-item').not('.focused').css('color', 'gray');
    },
    mouseleave: function() {
        $(this).find('.selected-nav-item').remove();
        $(this).removeClass('focused');
        $('.modal-nav-item').css('color', 'white');
    }
  })

  var $iW = $(window).innerWidth();
  if ($iW < 769px){
    $(".three-q").each(function() {
       var right=$(this).find('.right');
       var left=$(this).find('.left');
       right.insertBefore(left);
    });
  }
});

function topFunction() {
  $("html, body").animate({ scrollTop: "0" });
}
