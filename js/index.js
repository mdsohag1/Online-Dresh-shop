
$(document).ready(function(){
   var mixer = mixitup('.mixRow')
});


$(document).ready(function(){
   $('#getting-started').countdown('2023/03/09', function(event){
      $(this).html(event.strftime('<div><span>%D</span><span>days</span></div> <div><span>%H</span><span>Hr</span></div> <div><span>%M</span><span>Min</span></div> <div><span>%S</span><span>Sec</span></div>'));
   });
});



$(document).ready(function(){
   $('.owl-carousel').owlCarousel({
      items: 5,
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 4000,
      nav: true,
      // responsiveClass: true,
      // responsiveRefreshRate: true,
      responsive:{
         0:{items: 1},
         768:{items: 1},
         922:{items: 3},
         1152:{items: 5},
      }
   });
});