AOS.init();

// header
const bar = document.querySelector('#header .gnb-bar')
const span1 = document.querySelector('#header .span1')
const span2 = document.querySelector('#header .span2')
const span3 = document.querySelector('#header .span3')
const nav = document.querySelector('#header .depth1')
const hd = document.querySelector('#header')
const sectionIn = document.querySelector('.hotel-list')

bar.addEventListener('click', function() {
    span1.classList.toggle('click');
    span2.classList.toggle('click');
    span3.classList.toggle('click');
    nav.classList.toggle('click');
    hd.classList.toggle('click');
})

window.addEventListener('scroll', function() {
    if (hd.offsetTop > sectionIn.offsetTop) {
        hd.classList.add('bg-on')
    } else {
        hd.classList.remove('bg-on')
    }
})


// hotel-list
document.addEventListener('mousemove', (e) => {
    let mouseX = e.pageX - 45; 
    let mouseY = e.pageY - 40; 
  
    let listCursor = document.querySelector('.list-cursor');
    listCursor.style.left = mouseX + 'px';
    listCursor.style.top = mouseY + 'px';
})

const jeonjuImg = document.querySelector('.jeonju-img');
const jeonjuText = document.querySelector('.jeonju-text');
jeonjuText.addEventListener('mouseover', function() {
    jeonjuImg.classList.add('active');
});
jeonjuText.addEventListener('mouseleave', function() {
    jeonjuImg.classList.remove('active');
});

const pohangImg = document.querySelector('.pohang-img');
const pohangText = document.querySelector('.pohang-text');
pohangText.addEventListener('mouseover', function() {
    pohangImg.classList.add('active');
});
pohangText.addEventListener('mouseleave', function() {
    pohangImg.classList.remove('active');
});

const gyeongjuImg = document.querySelector('.gyeongju-img');
const gyeongjuText = document.querySelector('.gyeongju-text');
gyeongjuText.addEventListener('mouseover', function() {
    gyeongjuImg.classList.add('active');
});
gyeongjuText.addEventListener('mouseleave', function() {
    gyeongjuImg.classList.remove('active');
});

const mokpoImg = document.querySelector('.mokpo-img');
const mokpoText = document.querySelector('.mokpo-text');
mokpoText.addEventListener('mouseover', function() {
    mokpoImg.classList.add('active');
});
mokpoText.addEventListener('mouseleave', function() {
    mokpoImg.classList.remove('active');
});

const ulsanImg = document.querySelector('.ulsan-img');
const ulsanText = document.querySelector('.ulsan-text');
ulsanText.addEventListener('mouseover', function() {
    ulsanImg.classList.add('active');
});
ulsanText.addEventListener('mouseleave', function() {
    ulsanImg.classList.remove('active');
});


// hotels
var swiper = new Swiper(".hotelSwiper", {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});


// instagram
var swiper = new Swiper(".instaSwiper", {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    slidesPerView: 4,
});

// footer
const siteBox = document.querySelector('footer .title-box')
const siteList = document.querySelector('footer ul')

siteBox.addEventListener('click', function() {
    siteList.classList.toggle('on');
})
