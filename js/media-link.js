$(document).ready(function(){
  $('#disclaimer').modal('show');
    $(window).scroll(function(){
        var scrollPos = $(this).scrollTop();
        $('#show').text(scrollPos);
        
        if(scrollPos >= 10){
            $('.navbar').css('background', 'rgba(255,255,255,1.0)', 'position', 'relative', 'z-index', '20');
            $('.navbar-brand').css('color', '#2f3640');
        }else{
            $('.navbar').css('background', 'rgba(52, 73, 94,0.8)');
            $('.navbar-brand').css('color', '#dfe6e9');
        }
    });

    //For Navbar
    $('.nav-link').on('click',function(){
        $('.navbar-collapse').collapse('hide');
      });
    // Animate on scroll 
      AOS.init({
        duration: 800,
        anchorPlacement: 'center-bottom',
        disable: 'mobile'
      });

    // $('#proj_btn').hover(function(){
    //   $(this).replaceWith('<a href="project.html" class="custom-btn btn bg-btn" id="proj_btn"><i class="fa fa-toggle-on" aria-hidden="true"></i> see what we do</a>');
      
    // }).unbind('hover mouseenter mouseleave');
    // $('#proj_btn').unbind('hover mouseenter mouseleave');
  //   $('#proj_btn').mouseenter(function() {
  //     $(this).replaceWith('<a href="project.html" class="custom-btn btn bg-btn" id="proj_btn"><i class="fa fa-toggle-on" aria-hidden="true"></i> see what we do</a>');
  // }).mouseleave(function() {      
  //     $('$proj_btn').unbind('mouseenter mouseleave');
  // });

    // Owl Carousel
  $('#project-slide').owlCarousel({
    loop: true,
    center: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        }
    }
  });
  $('#project-slide2').owlCarousel({
    loop: true,
    center: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        }
    }
  });
});

