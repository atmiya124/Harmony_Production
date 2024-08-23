

// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 10,
//       stretch: 0,
//       depth: 500,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//     // autoplay: {
//     //     delay: 2000,
//     //     disableOnInteraction: false,
//     //   },
//   });


// about_us Slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
  },
  });

// our_products Slider
  var swiper = new Swiper(".mySwiperOne", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
//     autoplay: {
//      delay: 2000,
//      disableOnInteraction: false,
//  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  });

  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        if (faq) {
            faq.classList.toggle('show');
        }

        if (icon) {
            icon.classList.toggle('rotate');
        }
    });
});


var swiper = new Swiper(".mySwipertwo", {
  slidesPerView: 1.5,
  spaceBetween: 30,
  centeredSlides: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
// },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});
  
// Form JS ================================================================
function resizeInput() {
  $(this).attr('size', $(this).val().length);
}

$('input[type="text"], input[type="email"]')
  // event handler
  .keyup(resizeInput)
  // resize on page load
  .each(resizeInput);


console.clear();
// Adapted from georgepapadakis.me/demo/expanding-textarea.html
(function(){

var textareas = document.querySelectorAll('.expanding'),
    
    resize = function(t) {
      t.style.height = 'auto';
      t.style.overflow = 'hidden'; // Ensure scrollbar doesn't interfere with the true height of the text.
      t.style.height = (t.scrollHeight + t.offset ) + 'px';
      t.style.overflow = '';
    },
    
    attachResize = function(t) {
      if ( t ) {
        console.log('t.className',t.className);
        t.offset = !window.opera ? (t.offsetHeight - t.clientHeight) : (t.offsetHeight + parseInt(window.getComputedStyle(t, null).getPropertyValue('border-top-width')));

        resize(t);

        if ( t.addEventListener ) {
          t.addEventListener('input', function() { resize(t); });
          t.addEventListener('mouseup', function() { resize(t); }); // set height after user resize
        }

        t['attachEvent'] && t.attachEvent('onkeyup', function() { resize(t); });
      }
    };

// IE7 support
if ( !document.querySelectorAll ) {

  function getElementsByClass(searchClass,node,tag) {
    var classElements = new Array();
    node = node || document;
    tag = tag || '*';
    var els = node.getElementsByTagName(tag);
    var elsLen = els.length;
    var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
    for (i = 0, j = 0; i < elsLen; i++) {
      if ( pattern.test(els[i].className) ) {
        classElements[j] = els[i];
        j++;
      }
    }
    return classElements;
  }
  
  textareas = getElementsByClass('expanding');
}

for (var i = 0; i < textareas.length; i++ ) {
  attachResize(textareas[i]);
}

})();
