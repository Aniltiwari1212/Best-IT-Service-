function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  };

  $(document).ready(function() {
    var owl = $('.owl-carousel');
    $('.owl-carousel').owlCarousel({
      loop:true,
      autoplay:true,
      margin:15,
      nav:false,
      dots:true,
      responsive:{
        0:{
          items:2
        },
        575:{
          items:3,
          margin:15
        },
        768:{
          items:3,
          margin:15
        },
        1000:{
          items:3,
          margin:30
        }
      }
    });
    
  });
