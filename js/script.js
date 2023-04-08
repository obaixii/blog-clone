///////////////// WINDOW RELOAD
// $(document).ready(function(){
//   $(this).scrollTop(0);
// });
///////////////// END OF WINDOW RELOAD


/////////////// PRE LOADER
setTimeout(function () {
  $('.loader').fadeToggle();
}, 1000);
/////////////// END OF PRE LOADER
 

///////////////// SCROLL TOP
var btn = $('#totop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

function scrollToTop() {
  $(window).scrollTop(0);
}
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, 'fast');
});
///////////////// END OF SCROLL TOP


///////////////// FIXED NAVBAR ON SCROLL
$(window).scroll(function () {

  // Write code here
  var scroll = $(window).scrollTop();
  if (scroll >= 60) {
    $(".hm-navbar").addClass("fixed");
  } else {
    $(".hm-navbar").removeClass("fixed");
  }
});
///////////////// END OF FIXED NAVBAR ON SCROLL

///////////////// CHANGE TEXT
var elements = document.querySelectorAll('.nature');

for ( var i=elements.length; i--; ) {
    elements[i].textContent = "Nature";
}
///////////////// END OF CHANGE TEXT

///////////////// AOS JS
AOS.init({
  once: true
})
///////////////// END OF AOS JS


///////////////// DIS SLICK SLIDER 
$('.dis-slider' ).slick({
  dots: false,
  prevArrow:false,
  nextArrow:false,
  infinite: true,
  // autoplay: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
        {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
///////////////// END OF DIS SLICK SLIDER



///////////////// SLICK SLIDER x PORTFOLIO
$('.slider').slick({
  dots: false,
  prevArrow:false,
  nextArrow:false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
        {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
///////////////// END OF SLICK SLIDER


///////////////// POST SLICK SLIDER 
$('.post-slider' ).slick({
  dots: false,
  prevArrow:false,
  nextArrow:false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
        {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
///////////////// END OF POST SLICK SLIDER