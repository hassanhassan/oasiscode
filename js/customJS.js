
// setTimeout(function() {
//     $('#popupModal').modal();
//     }, 5000);

const observerL1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadeInLeft');
        }

    });
});

observerL1.observe(document.querySelector('.fade_effect_left1'))

const observerL2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadeInLeft');
        }

    });
});

observerL2.observe(document.querySelector('.fade_effect_left2'))

const observerL3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadeInLeft');
        }

    });
});

observerL3.observe(document.querySelector('.fade_effect_left3'))

const observerL4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadeInLeft');
        }

    });
});

observerL4.observe(document.querySelector('.fade_effect_left4'))

const observerL5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadeInLeft');
        }

    });
});

observerL5.observe(document.querySelector('.fade_effect_left5'))

const observerL6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadeInLeft');
        }

    });
});

observerL6.observe(document.querySelector('.fade_effect_left6'))

const observerL7 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadeInLeft');
        }

    });
});

observerL7.observe(document.querySelector('.fade_effect_left7'))

const observerR1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadeInRight');
        }
    });
});

observerR1.observe(document.querySelector('.fade_effect_right1'))

const observerR2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadeInRight');
        }
    });
});

observerR2.observe(document.querySelector('.fade_effect_right2'))

const observerR3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadeInRight');
        }
    });
});

observerR3.observe(document.querySelector('.fade_effect_right3'))

const observerR4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadeInRight');
        }
    });
});

observerR4.observe(document.querySelector('.fade_effect_right4'))

const observerR5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadeInRight');
        }
    });
});

observerR5.observe(document.querySelector('.fade_effect_right5'))

const observerR6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadeInRight');
        }
    });
});

observerR6.observe(document.querySelector('.fade_effect_right6'))

const observerR7 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadeInRight');
        }
    });
});

observerR7.observe(document.querySelector('.fade_effect_right7'))

const observerD = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadeInDown');
        }
    });
});

observerD.observe(document.querySelector('.fade_effect_down'))

const observerU1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadeInUp');
        }
    });
});

observerU1.observe(document.querySelector('.fade_effect_up1'))

const observerU2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadeInUp');
        }
    });
});

observerU2.observe(document.querySelector('.fade_effect_up2'))

const observerU3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadeInUp');
        }
    });
});

observerU3.observe(document.querySelector('.fade_effect_up3'))


$(document).ready(function(){

/* Page Sticky Navigation */
jQuery(window).scroll(function(){
if (jQuery(this).scrollTop() > 50) {
jQuery('.navbar-fixed-top').addClass('stickyNav');
} else {
jQuery('.navbar-fixed-top').removeClass('stickyNav');
}
});


//jQuery for page scrolling feature
$(function() {
$('a.page-scroll').bind('click', function(event) {
var $anchor = $(this);
$('html, body').stop().animate({
scrollTop: $($anchor.attr('href')).offset().top
}, 1500, 'easeInOutExpo');
event.preventDefault();
});
});

/* Counter Carousel Slider */
$("#counter-slider").owlCarousel({
items : 5,
itemsDesktop:[1199,5],
itemsDesktopSmall:[980,3],
itemsMobile : [600,2],
autoPlay:true,
 pagination:true,
navigationText:true
});


/* Certified Companies Carousel Slider */
$("#certified-companies-slider").owlCarousel({
items : 5,
itemsDesktop:[1199,5],
itemsDesktopSmall:[980,3],
itemsMobile : [600,2],
autoPlay:true,
pagination:true,
navigationText:true
});

/* Latest Shops Carousel Slider */
$("#testimonials-slider").owlCarousel({
items : 2,
itemsDesktop:[1199,2],
itemsDesktopSmall:[980,1],
itemsMobile : [600,1],
autoPlay:true,
pagination:true,
navigationText:true
});


/* Home News Carousel Slider */
$("#home-news-slider").owlCarousel({
items : 3,
responsive: true,
itemsDesktop:[1199,3],
itemsDesktopSmall:[980,2],
itemsMobile : [600,1],
autoPlay:false,
pagination:true
});



/* outlet gallery-scrool Carousel Slider */
$("#gallery-scrool").owlCarousel({
items : 4,
itemsDesktop:[1199,4],
itemsDesktopSmall:[980,3],
itemsMobile : [600,2],
autoPlay:true,
pagination:true,
navigation:true,
navigationText:["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>","<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"]
});

/* outlet gallery-scrool-2 Carousel Slider */
$("#gallery-scrool-2").owlCarousel({
items : 4,
itemsDesktop:[1199,4],
itemsDesktopSmall:[980,4],
itemsMobile : [600,2],
autoPlay:true,
pagination:true,
navigation:true,
navigationText:["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>","<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"]
});



/* Data Tables Filters */
/*  $('#listingTable').DataTable( {
"lengthMenu": [[10, 25, 50], [10, 25, 50, "All"]],
"pagingType": "simple_numbers",
'sPaginationType': 'ellipses'
} ); */

  var table = $('#listingTable').DataTable({
       responsive: {
        details: {
            type: 'column'
        }
    }
    });

    // Handle click on "Expand All" button
    $('#btn-show-all-children').on('click', function(){
        // Expand row details
        table.rows(':not(.parent)').nodes().to$().find('td:first-child').trigger('click');
    });

    // Handle click on "Collapse All" button
    $('#btn-hide-all-children').on('click', function(){
        // Collapse row details
        table.rows('.parent').nodes().to$().find('td:first-child').trigger('click');
    });


/*Policy Cookie*/
 $('.toast').toast('show');


});


/* Counter */

$('.counter').counterUp({
  delay: 10,
  time: 2000
});
$('.counter').addClass('animated fadeInDownBig');
/* $('h3').addClass('animated fadeIn'); */


/* Page To Top Script */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
document.getElementById("myBtn").style.display = "block";
} else {
document.getElementById("myBtn").style.display = "none";
}
}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}



