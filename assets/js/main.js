$(document).ready(function () {
  $('.menu-bar').click(function () {
    $('#nav-icon').toggleClass('open');
    $(this).parents('html').toggleClass('overflow-open');
  });

  // var cursor = document.querySelector('.cursor');
  // var a = document.querySelectorAll('a');

  // document.addEventListener('mousemove', function (e) {
  //   var x = e.clientX;
  //   var y = e.clientY;
  //   cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
  // });

  // document.addEventListener('mousemove', function (e) {
  //   var x = e.clientX;
  //   var y = e.clientY;
  // });

  // document.addEventListener('mousedown', function () {
  //   cursor.classList.add('click');
  // });

  // document.addEventListener('mouseup', function () {
  //   cursor.classList.remove('click')
  // });

  // a.forEach(item => {
  //   item.addEventListener('mouseover', () => {
  //     cursor.classList.add('hover');
  //   });
  //   item.addEventListener('mouseleave', () => {
  //     cursor.classList.remove('hover');
  //   });
  // })

// $(document).on("click",".equipments-and-service-wrap ul li",function(){
//   $(this).toggleClass('active');
// });


$('.certificate-wrap').slick({
  dots: false,
  arrows:false,
  infinite: false,
  autoplay:true,
  speed: 300,
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
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
  ]
});

$('.popular-rental-content-wrap').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  autoplay:true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.forkit-sub-wrap .forkit-sub-block-main').slick({
  dots: false,
  arrows:false,
  infinite: false,
  speed: 300,
  autoplay:true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.blog-block-wrap').slick({
  dots: false,
  arrows:false,
  infinite: false,
  speed: 300,
  autoplay:true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1099,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(document).on('click','.product-categories-list-wrap ul li .categories-item h3',function(){
  $(this).parent().toggleClass('active');
})

});


$(document).on('click','.forkit-wrap .forkit-tab-wrap ul li',function(){
  var data = $(this).attr('id');
  $(this).parent().find('.active').removeClass('active');
  $(this).addClass('active');
  $('.forkit-tab-detail-wrap').children().removeClass('active');
  $('.forkit-tab-detail-wrap').find('.'+data).addClass('active');
})




$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  // alert(scrollb);
  if (scroll >= 50) {
      $(".main-header").addClass("darkHeader");
  } else {
      $(".main-header").removeClass("darkHeader");
  }

});





document.body.innerHTML += "<a href='#' id='back-to-top' title=''></a>";
const getBTTElm = document.getElementById('back-to-top');
document.addEventListener('scroll', ev => {
  if (window.scrollY > 150) {
    getBTTElm.classList.add('visible');
  } else {
    getBTTElm.classList.remove('visible');
  }
});
getBTTElm.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})






// menu function

// const getBtn = document.querySelector('.mob-btn');
// console.log(getBtn);
// getBtn.addEventListener('click', e => {
//     document.querySelector('body').classList.toggle('show-menu');
// })


// const getDropDown = document.getElementsByClassName('main-nav');
// for ( div of getDropDown){
//     var selectLi = div.getElementsByTagName('li');
//     for ( li of selectLi){
//        if (li.contains(li.querySelector('ul'))) {
//         li.classList.add('submenu');
//         li.innerHTML += "<i></i>";
//         }
//     }
// }

// const getDropDownClick = document.querySelectorAll('.main-nav i');
// getDropDownClick.forEach((item) => {
//     item.addEventListener('click', e => {
//         e.target.parentNode.classList.toggle('open');
//     })
// })



//animation
// just "anim" in your element
window.addEventListener("load", () => {
  function isInViewport(el, gap) {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let height = el.offsetHeight;
    console.log(el.offsetParent);
    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
    return (
      (window.pageYOffset + window.innerHeight - gap) >= (top) &&
      (window.pageYOffset) <= (height + top)
    );
  }
  let getElem = document.querySelectorAll('.anim');
  //please change as per the design
  const breakPoints = {
    desktop: 250,
    laptop: 80,
    tab: 50,
    mobile: 30
  };
  let targetGap;
  window.innerWidth >= 1200 ? targetGap = breakPoints.desktop :
    window.innerWidth >= 1024 ? targetGap = breakPoints.laptop :
    window.innerWidth >= 768 ? targetGap = breakPoints.tab :
    targetGap = breakPoints.mobile;

  function anim() {
    getElem.forEach(element => {
      isInViewport(element, targetGap) ? element.classList.add("visible") : null;
    })
  }
  getElem.length > 0 ? (window.addEventListener('scroll', anim, false)) : null;
  getElem.length > 0 ? anim() : null;
}, false);




